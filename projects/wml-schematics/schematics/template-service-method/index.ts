import { Rule, chain, Tree,strings,SchematicsException, mergeWith, applyTemplates,apply,url,move } from "@angular-devkit/schematics";
import {normalize } from '@angular-devkit/core';
import * as ts from '@schematics/angular/third_party/github.com/Microsoft/TypeScript/lib/typescript';
import { InsertChange, Change } from '@schematics/angular/utility/change';
import { wmlUpdateFile } from "../utils/updateFile";
import { findNodes } from '@schematics/angular/utility/ast-utils';
import { CreateStringObjectType, DevEnvFile, FindNodeTypeByRecursionProps, WMLschematicMsgs, addImportStatements, createStringObject,  findNodeTypeByRecursion,  getIndentation, getServiceClassVar, getTsMemberInfo, performDependencyInjection, prepareForUpdate, wmlCreateSourceFile, wmlFindChildNode } from "../utils/utils";

export class TemplateServiceMethodSchema {
  name!:string
  envFilePath!:string
  serviceName!:string
  path!:string
  apiRoute!:string
  transformationType!:"default"|"paging"|"scrolling"
  entityName!:string
  scrollName!:string
  httpMethod!:'get' | 'post' | 'put' | 'patch' | 'delete' | 'options' | 'head'
  useDataSourceStrategy!:boolean
}

let transformationTypeScrollingDelayTimeInMs = 300

export function generateServiceMethodTemplate(options:TemplateServiceMethodSchema):Rule{
  if(options.transformationType === "default"){
    options.useDataSourceStrategy = false
  }
  return ()=>{
    options.scrollName ??=""
    options.envFilePath ??= DevEnvFile
    let serviceMethodFilePath  = normalize(`/${options.path}`)
    const templateSource = apply(url('./files/'+options.transformationType), [
      applyTemplates({
        capitalize: strings.capitalize,
        ...options,
      }),
      move(serviceMethodFilePath),
    ]);

    return chain([
      mergeWith(templateSource),
      updateServiceFile(options)
    ])
  }
}

let updateServiceFile = (options:TemplateServiceMethodSchema)=>{
  return (tree: Tree) => {
    let targetFileName = options.serviceName +".service.ts"
    let targetFilePath = normalize(`${options.path}/${targetFileName}`)

    let targetFile = tree.read(targetFilePath)
    if (!targetFile) {
      throw new SchematicsException(`${targetFilePath} not found make sure the command is run in the directory of the service file`);
    }

    let sourceFile = wmlCreateSourceFile(targetFilePath, tree);
    let scrollingNameString = createStringObject(options.scrollName??"")
    let serviceString = createStringObject(options.serviceName+"Service","Service")
    let serviceMethodString =createStringObject(options.name,"")

    let serviceClassVar = sourceFile.statements
    .filter(ts.isClassDeclaration)
    .find((v)=>{
      return v.name?.getText() === serviceString.classify(false)
    }) as ts.ClassDeclaration

    addServiceMethodToServiceClass(
      options,serviceString,serviceMethodString, serviceClassVar, targetFilePath, tree,scrollingNameString);
    addNeededImportsToServiceClass(sourceFile,serviceMethodString, options, targetFilePath, tree);

    updateConstructor(options, sourceFile, targetFilePath, tree, serviceClassVar);
    updateEnvFile( options, tree, serviceString);
    updateSpecFile( options, tree,  serviceMethodString,serviceString);


    // let transformFileName = options.name+".ts"
    // let transformFilePath = normalize(`${options.path}/${transformFileName}`)

    // sourceFile = wmlCreateSourceFile(targetFilePath, tree);
    // console.log(sourceFile.getFullText())
    return tree
  }
}

function updateConstructor(options: TemplateServiceMethodSchema, sourceFile: ts.SourceFile,
  targetFilePath:string, tree:Tree, serviceClassVar: ts.ClassDeclaration) {
  if (options.transformationType === "scrolling") {

    sourceFile = wmlCreateSourceFile(targetFilePath, tree);
    serviceClassVar = getServiceClassVar(sourceFile);
    performDependencyInjection(targetFilePath, tree, `public baseService:BaseService`, serviceClassVar);
  }
  return { sourceFile, serviceClassVar };
}

function addNeededImportsToServiceClass(
  sourceFile: ts.SourceFile,
  serviceMethodString: CreateStringObjectType,
  options: TemplateServiceMethodSchema,
  targetFilePath:string, tree:Tree) {

  let importsToAdd:any[] = []
  if(!options.useDataSourceStrategy){
    importsToAdd.push(
      {
        packageName:`./${options.name}`,
        importStatement:`import { ${serviceMethodString.capitalize(false)}UIRequestBody, ${serviceMethodString.capitalize(false)}UIResponseBody,${options.name}Load, ${options.name}Success } from './${options.name}';`,
        importMembers:[
          `${serviceMethodString.capitalize(false)}UIRequestBody`,
          `${serviceMethodString.capitalize(false)}UIResponseBody`,
          `${options.name}Load`,`${options.name}Success`
        ]
      }
    )
  }
  if(options.useDataSourceStrategy && ["paging","scrolling"].includes(options.transformationType)){

    importsToAdd.push({
      packageName:`./${options.name}`,
      importStatement:`import { ${serviceMethodString.capitalize(false)}APIResponseBody, ${serviceMethodString.capitalize(false)}UIRequestBody,${options.name}Load, ${options.name}Success } from './${options.name}';`,
      importMembers:[
        `${serviceMethodString.capitalize(false)}APIResponseBody`,
        `${serviceMethodString.capitalize(false)}UIRequestBody`,
        `${options.name}Load`,`${options.name}Success`
      ]
    })
    importsToAdd.push({
      packageName:'rxjs',
      importStatement:`import { Observable } from 'rxjs';`,
      importMembers:["Observable"]
    })
    importsToAdd.push({
      packageName:'@core/utility/data-source-utils',
      importStatement:`import { WMLDataSource } from '@core/utility/data-source-utils';`,
      importMembers:[
        `WMLDataSource`
      ]
    })
    importsToAdd.push({
      packageName:'@core/utility/date-utils',
      importStatement:`import { DateTimeZero } from '@core/utility/date-utils';`,
      importMembers:[
        `DateTimeZero`
      ]
    })
  }

  if(options.transformationType ==="scrolling"){
    importsToAdd.push({
      packageName:'@core/utility/scroll-utils',
      importStatement:`import { listEntitiesFail, ScrollPageProps } from '@core/utility/scroll-utils';`,
      importMembers:[
        'listEntitiesFail','ScrollPageProps'
      ]
    })
    importsToAdd.push({
      packageName:'rxjs',
      importStatement:`import { retry, delay, tap } from 'rxjs';`,
      importMembers:["retry", "delay","tap"]
    })
    importsToAdd.push({
      packageName:'@core/base/base.service',
      importStatement:`import { BaseService } from '@core/base/base.service';`,
      importMembers:["BaseService"]
    })
  }

  addImportStatements(sourceFile,targetFilePath, tree,importsToAdd)

}

function addServiceMethodToServiceClass(
  options: TemplateServiceMethodSchema,
  serviceString: CreateStringObjectType,
  serviceMethodString: CreateStringObjectType,
  serviceClassVar: ts.ClassDeclaration, targetFilePath:string, tree:Tree,
  scrollingNameString:CreateStringObjectType
  ) {

    let reqBody =","
    if(["delete","head","options"].includes(options.httpMethod)){
      reqBody += "{body:apiBody}"
    }
    else if(["post","patch","put"].includes(options.httpMethod)){
      reqBody += "apiBody"
    }
    else if (["get"].includes(options.httpMethod)){
      reqBody = ""
    }
    let observable = `this.http
          .${options.httpMethod}(ENV.${serviceString.camelCase(false)}.${options.name}.url()${reqBody})`
    if(!options.apiRoute){
      observable = `of(new ${serviceMethodString.capitalize(false)}UIResponseBody())`
    }
    let serviceMethodStringObj = `${serviceMethodString.orig} = (uiBody = new ${serviceMethodString.capitalize(false)}UIRequestBody())=>{
    return iif(
      ()=>ENV.${serviceString.camelCase(false)}.${options.name}.automate,
      of(new ${serviceMethodString.capitalize(false)}UIResponseBody()),
      ${options.name}Load(uiBody)
        .pipe(
          concatMap((apiBody)=>{
            return ${observable}
              .pipe(map(${options.name}Success))
          })
        )
      )
    }`;

    if(options.transformationType ==="paging" && options.useDataSourceStrategy){
      serviceMethodStringObj = `_${serviceMethodString.orig} = (uiBody = new ${serviceMethodString.capitalize(false)}UIRequestBody())=>{
        return iif(
          ()=>ENV.${serviceString.camelCase(false)}.${options.name}.automate,
          of(new ${serviceMethodString.capitalize(false)}APIResponseBody()),
          ${options.name}Load(uiBody)
            .pipe(
              concatMap((apiBody)=>{
                return ${observable}
              })
            ) as Observable<${serviceMethodString.capitalize(false)}APIResponseBody>
          )
        }

  ${serviceMethodString.orig}DataSource = new WMLDataSource({
    getFromSink: this._${serviceMethodString.orig},
    transformationPredicate:${options.name}Success,
    webStorageObj:{
      key:"${serviceString.capitalize(false)}${serviceMethodString.capitalize(false)}DataSource",
      expiry:new DateTimeZero({
        minutes:2
      })
    }
  })`;
    }

  if(options.transformationType ==="scrolling"){

    let observable = `this.http
    .${options.httpMethod}(ENV.${serviceString.camelCase(false)}.${options.name}.url(),apiBody)`
    if(!options.apiRoute){
      observable = `of(null)`
    }
    serviceMethodStringObj = `${scrollingNameString.orig}ScrollPageUIRequestBody = new ${serviceMethodString.classify(false)}UIRequestBody({pageSize:10})
${scrollingNameString.orig}ScrollPageObj:ScrollPageProps<any>

_${serviceMethodString.orig} = (uiBody = new ${serviceMethodString.capitalize(false)}UIRequestBody(),scrollPage?:ScrollPageProps)=>{
  this.baseService.openOverlayLoading()
  return iif(
    ()=>ENV.${serviceString.camelCase(false)}.${options.name}.automate,
    of(new ${serviceMethodString.capitalize(false)}${options.useDataSourceStrategy ? "APIResponseBody" : "UIResponseBody"}())
    .pipe(
      delay(${transformationTypeScrollingDelayTimeInMs})
    ),
    ${options.name}Load(uiBody)
      .pipe(
        concatMap((apiBody)=>{
          return ${observable}
            .pipe(
              retry(3),
              tap({
                next:(apiBody:any)=>{
                  this.baseService.notifyUserThatThereAreNoRecords(apiBody, uiBody);
                },
                error:()=>{
                  listEntitiesFail(uiBody)
                }
              })${options.useDataSourceStrategy ? ``: `,
              map(${options.name}Success(scrollPage,uiBody))`}
            )
        })
      )
    )
    .pipe(
      this.baseService.closeOverlayLoadingViaRxjsFinalize
    )
  }`

  }

  let occurences = serviceClassVar.members.length;
  let text = serviceClassVar.getFullText();
  let insertPos = serviceClassVar.members.pos;
  let final = serviceMethodStringObj;
  if (occurences > 0) {
    let lastMember = [
      ...serviceClassVar.members
    ].pop() as ts.ClassElement;
    let indentation = text.match(/\r?\n(\r?)\s*/) || [];
    final = `${indentation[0] || ' '}${serviceMethodStringObj}`;
    insertPos = lastMember.end;
  }
  let changes: Change[] = [new InsertChange(targetFilePath, insertPos, final)];
  wmlUpdateFile(tree, targetFilePath, changes);
}

function updateEnvFile(
  options: TemplateServiceMethodSchema,
  tree:Tree, serviceString: CreateStringObjectType) {

    let sourceFile = wmlCreateSourceFile(options.envFilePath, tree);

    let devEnv = sourceFile?.statements
      ?.filter(ts.isClassDeclaration)
      .find((v) => {
        return v.name?.getText() === 'DevEnv';
      }) as ts.ClassDeclaration;
    let methodString = `${options.name}:new WMLEndpoint({
        url:()=> this.backendURI0.fqdn + "${options.apiRoute}",
      })`;
    let envClassProp = devEnv.members.find((prop) => {
      return prop.name?.getText() === serviceString.camelCase(false);
    }) as ts.ClassElement;
    if(!envClassProp){
      let lastProperty = devEnv.members
      .filter(ts.isPropertyDeclaration).at(-1)
      ?? wmlFindChildNode(
        devEnv.members,
        (prop)=>prop.kind === ts.SyntaxKind.OpenBraceToken,
        "This DevEnv class is malformed I am looking for an openBrace",false,false
      )
      let snippet =`\n${serviceString.camelCase(false)} = {
    ${methodString},
    }
`
      prepareForUpdate(
        snippet,
        options.envFilePath, tree,
        lastProperty.end, sourceFile.getFullText()
      );
    }
    else{
      let serviceClassObj = findNodes(
        envClassProp,
        ts.SyntaxKind.ObjectLiteralExpression,
        1
      )[0] as ts.ObjectLiteralExpression;
      let occurrencesCount = serviceClassObj.properties.length;
      let text = serviceClassObj.getFullText();
      let insertPos = serviceClassObj.properties.pos;

      let finalVar = methodString;
      if (occurrencesCount > 0) {
        let lastEndpointLiteral = [
          ...serviceClassObj.properties,
        ].pop() as ts.ObjectLiteralElementLike;
        let indentation = getIndentation(text);
        let endpointText = `${indentation[0] || ' '}${methodString}`;
        insertPos = lastEndpointLiteral.end;
        finalVar = `,${endpointText}`;
      }
      let changes: Change[] = [new InsertChange(options.envFilePath, insertPos, finalVar)];
      wmlUpdateFile(tree, options.envFilePath, changes);
    }



}

function updateSpecFile(
  options: TemplateServiceMethodSchema,
  tree:Tree,
  serviceMethodString: CreateStringObjectType,
  serviceString:CreateStringObjectType
){

  let targetFileName = options.serviceName +".service.spec.ts"
  let targetFilePath = normalize(`${options.path}/${targetFileName}`)

  let targetFile = tree.read(targetFilePath)
  if (!targetFile) {
    throw new SchematicsException(`${targetFilePath} not found make sure the command is run in the directory of the service file`);
  }
  let sourceFile = wmlCreateSourceFile(targetFilePath, tree);
  addNeededImportsToServiceTestFile(
    sourceFile,serviceMethodString,options,targetFilePath,tree
  )

  sourceFile = addRequireBlockToSpecFile( targetFilePath, tree, options);
  sourceFile = addMockAPIResultToSpecFile( targetFilePath, tree, serviceMethodString,serviceString);
  sourceFile = addSpiesToSpecFile( targetFilePath, tree, serviceMethodString,options);
  sourceFile = addDescribeBlockToServiceSpecFile( targetFilePath, tree, serviceMethodString,serviceString,options);


  // sourceFile = wmlCreateSourceFile(targetFilePath, tree);
  // console.log(sourceFile.getFullText())

  // throw new SchematicsException("stop here")
}

function addNeededImportsToServiceTestFile(
  sourceFile: ts.SourceFile,
  serviceMethodString: CreateStringObjectType,
  options: TemplateServiceMethodSchema,
  targetFilePath:string, tree:Tree) {



  let importsToAdd = [
    {
      packageName:`./${options.name}`,
      importStatement:`import { ${serviceMethodString.capitalize(false)}APIRequestBody,${serviceMethodString.capitalize(false)}APIResponseBody,${serviceMethodString.capitalize(false)}UIRequestBody,${serviceMethodString.capitalize(false)}UIResponseBody   } from './${options.name}';`,
      importMembers:[
        `${serviceMethodString.capitalize(false)}APIResponseBody`,
        `${serviceMethodString.capitalize(false)}APIRequestBody`,
        `${serviceMethodString.capitalize(false)}UIRequestBody`,
        `${serviceMethodString.capitalize(false)}UIResponseBody`,

      ]
    },
    {
      packageName:'rxjs',
      importStatement:`import { of } from 'rxjs';`,
      importMembers:["of"]
    },
    {
      packageName:'@env/environment',
      importStatement:`import { ENV } from '@env/environment';`,
      importMembers:["ENV"]
    },
    {
      packageName:'@angular/core/testing',
      importStatement:`import { discardPeriodicTasks, fakeAsync, flush } from '@angular/core/testing';`,
      importMembers:["discardPeriodicTasks", "fakeAsync", "flush"]
    }
  ]

  if (options.transformationType === "scrolling") {
    importsToAdd.push({
      packageName:'@angular/core/testing',
      importStatement:`import { tick } from '@angular/core/testing';`,
      importMembers:["tick"]
    })
  }



  addImportStatements(sourceFile,targetFilePath, tree,importsToAdd)
}

function addRequireBlockToSpecFile(
  targetFilePath:string, tree:Tree, options: TemplateServiceMethodSchema) {
  let sourceFile = wmlCreateSourceFile(targetFilePath, tree);
  let target;

  let requireBlocks = findNodeTypeByRecursion(new FindNodeTypeByRecursionProps({
    node: sourceFile,
    kind: (node) => {
      let isKind = node.kind === ts.SyntaxKind.VariableStatement;
      let regexpResult = RegExp(/(.+?)require\(.+?\)(|.+?)/).exec(node.getFullText());

      let stringContainingRequireIsOneLine = Boolean(regexpResult);
      return isKind && stringContainingRequireIsOneLine;
    },
  }));

  let lastRequireBlock = requireBlocks.at(-1);
  let snippet = `let ${options.name} = require('./${options.name}');`
  let spacingPrefix = "\n"
  if (!lastRequireBlock) {
    snippet = "\n"+snippet
    sourceFile = wmlCreateSourceFile(targetFilePath, tree);
    let statements = sourceFile.statements
      .filter(ts.isImportDeclaration);
    let lastMember = statements.at(-1);
    target = lastMember;
  }
  else {
    target = lastRequireBlock;
  }

  prepareForUpdate(
    snippet,
    targetFilePath, tree,
    // @ts-ignore
    target.end, spacingPrefix
  );
  return sourceFile;
}

function addMockAPIResultToSpecFile(
  targetFilePath:string, tree:Tree, serviceMethodString: CreateStringObjectType,serviceString:CreateStringObjectType) {
  let sourceFile = wmlCreateSourceFile(targetFilePath, tree);


  let targets = findNodeTypeByRecursion(new FindNodeTypeByRecursionProps({
    node: sourceFile,
    kind: (node) => {
      let regexpResult = RegExp(/\/\/ mock-api-result-to-spec-file \(IMPT DONT DELETE THIS LINE\)/).exec(node.getFullText());

      let isRegexMatch = Boolean(regexpResult);
      return isRegexMatch;
    },
  }));
  let commentMarker = targets.at(-1);
  if(!commentMarker){
    throw new SchematicsException(`
    // mock-api-result-to-spec-file (IMPT DONT DELETE THIS LINE) is missing from the file
    look for the last piece of code that looks like this
    """
    [SERVICE METHOD NAME]LoadResult = new [SERVICE METHOD NAME]APIRequestBody();
    """
    and update like so

    """
    [SERVICE METHOD NAME]LoadResult = new [SERVICE METHOD NAME]APIRequestBody();

    // mock-api-result-to-spec-file (IMPT DONT DELETE THIS LINE)
    """
    `)
  }

  let target;
  let snippet = `let ${serviceMethodString.camelCase(false)}LoadResult = new ${serviceMethodString.capitalize(false)}APIRequestBody();`
  let spacingPrefix = "\n  "
  let insertPos = 0
  target = commentMarker;
  insertPos = target.pos



  prepareForUpdate(
    snippet,
    targetFilePath, tree,
    // @ts-ignore
    insertPos, spacingPrefix
  );
  return sourceFile;
}

function addSpiesToSpecFile(
  targetFilePath:string, tree:Tree, serviceMethodString: CreateStringObjectType,options:TemplateServiceMethodSchema) {
  let sourceFile = wmlCreateSourceFile(targetFilePath, tree);
  let commentMarker:ts.Node | undefined;


  let targets = findNodeTypeByRecursion(new FindNodeTypeByRecursionProps({
    node: sourceFile,
    kind: (node) => {
      let regexpResult = RegExp(/\/\/ mock-add-spies-to-spec-file \(IMPT DONT DELETE THIS LINE\)/).exec(node.getFullText());

      let isRegexMatch = Boolean(regexpResult);
      return isRegexMatch;
    },
  }));
  commentMarker = targets.at(-1)

  // console.log("5 ",startNode?.getFullText())
  if(!commentMarker){
    throw new SchematicsException(`
    // mock-add-spies-to-spec-file (IMPT DONT DELETE THIS LINE) is missing from the file
    look for the last piece of code that looks like this
    """
    spyOn([SERVICE METHOD NAME], '[SERVICE METHOD NAME]Success')
      .and.callThrough();
    spyOn([SERVICE METHOD NAME], '[SERVICE METHOD NAME]Load')
      .and.callFake(()=>of([SERVICE METHOD NAME]LoadResult));
    """
    and update like so

    """
    ...
    spyOn([SERVICE METHOD NAME], '[SERVICE METHOD NAME]Success')
      .and.callThrough();
    spyOn([SERVICE METHOD NAME], '[SERVICE METHOD NAME]Load')
      .and.callFake(()=>of([SERVICE METHOD NAME]LoadResult));

    // mock-add-spies-to-spec-file (IMPT DONT DELETE THIS LINE)
    ...
    """
    `)
  }



  let snippet = `\nspyOn(${serviceMethodString.orig}, '${serviceMethodString.orig}Success')
  .and.callThrough();
spyOn(${serviceMethodString.orig}, '${serviceMethodString.orig}Load')
  .and.callFake(()=>of(${serviceMethodString.orig}LoadResult));
  `
  let spacingPrefix = "\n  "
  let insertPos = commentMarker.pos

  prepareForUpdate(
    snippet,
    targetFilePath, tree,
    // @ts-ignore
    insertPos, spacingPrefix
  );

  if(options.transformationType === "scrolling"){
    snippet = `spyOn(cpnt.baseService, 'notifyUserThatThereAreNoRecords')`
    let spyIsPresent = findNodeTypeByRecursion(new FindNodeTypeByRecursionProps({
      node: sourceFile,
      kind: (node) => {
        let regexpResult = RegExp(snippet).exec(node.getFullText());

        let isRegexMatch = Boolean(regexpResult);
        return isRegexMatch;
      },
    }));
    if(spyIsPresent.length === 0){
      sourceFile = wmlCreateSourceFile(targetFilePath, tree);
      let targets = findNodeTypeByRecursion(new FindNodeTypeByRecursionProps({
        node: sourceFile,
        kind: (node) => {
          let regexpResult = node.getFullText().includes("mock-add-spies-to-spec-file")
          let isRegexMatch = Boolean(regexpResult);
          let isComment = node.kind === ts.SyntaxKind.ExpressionStatement

          return isRegexMatch && isComment;
        },
      }));
      commentMarker = targets.at(-1)
      let insertPos = commentMarker!.pos




      prepareForUpdate(
        snippet,
        targetFilePath, tree,
        // @ts-ignore
        insertPos, spacingPrefix
      );
    }

  }



  return sourceFile;
}

function addDescribeBlockToServiceSpecFile(
  targetFilePath:string, tree:Tree,
  serviceMethodString: CreateStringObjectType,
  serviceString:CreateStringObjectType,
  options:TemplateServiceMethodSchema) {
  let sourceFile = wmlCreateSourceFile(targetFilePath, tree);
  let startNode
  let targets


  if(!startNode){
    let targets = findNodeTypeByRecursion(new FindNodeTypeByRecursionProps({
      node: sourceFile,
      printChildInfo:false,
      kind: (node,level) => {
        let boolVal0 = node.kind === ts.SyntaxKind.ExpressionStatement;
        // if issues update this regex
        let regexpResult = RegExp(`describe.*['"]${serviceString.capitalize(false)}['"]`,"s").exec(node.getFullText());
        let boolVal1 = Boolean(regexpResult);
        let boolVal2

        return boolVal0 && boolVal1 ;
      },
    }));
    let callExpr0 = wmlFindChildNode(
      targets[0],ts.SyntaxKind.CallExpression
    )
    let syntaxList0 = wmlFindChildNode(
      callExpr0,ts.SyntaxKind.SyntaxList
    )
    let arrowFn0 = wmlFindChildNode(
      syntaxList0,ts.SyntaxKind.ArrowFunction,""
    )
    let block0 = wmlFindChildNode(
      arrowFn0,ts.SyntaxKind.Block,""
    )
    let syntaxlist1 = wmlFindChildNode(
      block0,ts.SyntaxKind.SyntaxList
    )
    startNode = wmlFindChildNode(
      syntaxlist1,
      (node)=>{
        return Boolean(RegExp(/describe.*['"].*['"]|beforeEach.*(.*)/).exec(node.getFullText())) && node.kind ===ts.SyntaxKind.ExpressionStatement
      },"",false,false,"filter"
    ).at(-1)
  }

  // targets.forEach((x)=>{
  //   getTsMemberInfo(x)
  // })

  if(!startNode){
    throw new SchematicsException(`the describe block may be missing
    please ensure at a minium the spec file contains



    describe('>>Service Name <<', () => {

    });
    if not

    then at least a beforeEach should be found to reset each test for the service like this

    describe('>>Service Name <<', () => {
      resetImports()
      resetProviders(>>Service Name <<)
      cpnt = wmlTestUtils.configureTestingModuleForServices(>>Service Name <<)
      utilService =TestBed.inject(UtilityService)
      spyOn(cpnt.http,"get").and.callThrough()
      spyOn(cpnt.http,"post").and.callThrough()
    });
    ${WMLschematicMsgs.removePlacehoders0}
    if not contact support if the issue persists
    `)
  }

  let reqBody =","

  if(["delete","head","options"].includes(options.httpMethod)){
    reqBody += `{body:${serviceMethodString.orig}LoadResult}`
  }
  else if(["post","patch","put"].includes(options.httpMethod)){
    reqBody += `${serviceMethodString.orig}LoadResult`
  }
  else if (["get"].includes(options.httpMethod)){
    reqBody = ""
  }
  let spyHttpCall = `// @ts-ignore
          cpnt.http.${options.httpMethod} = ()=>of(new ${serviceMethodString.capitalize(false)}APIResponseBody(${options.useDataSourceStrategy && options.transformationType ==="scrolling" ? `{data:{total_items:0}}` : ``}))
          spyOn(cpnt.http,"${options.httpMethod}").and.callThrough()`

  let expectHttpCall =`expect(cpnt.http.${options.httpMethod})
          .toHaveBeenCalledWith(ENV.${serviceString.camelCase(false)}.${serviceMethodString.orig}.url()${reqBody})`

  if(!options.apiRoute){
    spyHttpCall = expectHttpCall=``
  }

  let snippet = `\n  describe("${serviceMethodString.orig}",()=>{
    _add_newline_here_
    describe("when ${serviceMethodString.orig}.automate === false",()=>{
      _add_newline_here_
      it(\` when called |
      under normal conditions |
      does the required action \`,fakeAsync(()=>{
        // arrange
        ENV.${serviceString.camelCase(false)}.${serviceMethodString.orig}.automate = false
        ${spyHttpCall}
        let uiBody = new ${serviceMethodString.capitalize(false)}UIRequestBody()


        let successFn = (val?)=>{
          // assert
          expect(${serviceMethodString.orig}.${serviceMethodString.orig}Success).toHaveBeenCalled()
          discardPeriodicTasks()
        }

        // act
        cpnt.${serviceMethodString.orig}(uiBody)
        .subscribe({next:successFn})
        expect(${serviceMethodString.orig}.${serviceMethodString.orig}Load).toHaveBeenCalledWith(uiBody)
        flush()
        ${expectHttpCall}
      }))
      _add_newline_here_

    })
    _add_newline_here_
    describe("when ${serviceMethodString.orig}.automate === true",()=>{
      it(\` when called |
      under normal conditions |
      does the required action \`,fakeAsync(()=>{
        // arrange
        ENV.${serviceString.camelCase(false)}.${serviceMethodString.orig}.automate = true
        let sucessFn  = (val?)=>{
          // assert
          expect(val).toBeInstanceOf(${serviceMethodString.capitalize(false)}UIResponseBody)
          discardPeriodicTasks()
        }
        // act
        cpnt.${serviceMethodString.orig}()
        .subscribe({next:sucessFn})
        flush()

      }))
    })

  })`

  if(options.useDataSourceStrategy && ["paging","scrolling"].includes(options.transformationType)){

    snippet = `\n  describe("${serviceMethodString.orig}",()=>{
      _add_newline_here_
      describe("when ${serviceMethodString.orig}.automate === false",()=>{
        _add_newline_here_
        it(\` when called |
        under normal conditions |
        does the required action \`,fakeAsync(()=>{
          // arrange
          ENV.${serviceString.camelCase(false)}.${serviceMethodString.orig}.automate = false
          ${spyHttpCall}
          let uiBody = new ${serviceMethodString.capitalize(false)}UIRequestBody()

          let successFn = (val?)=>{
            // assert
            ${options.transformationType === "scrolling" ? `expect(cpnt.baseService.notifyUserThatThereAreNoRecords).toHaveBeenCalledWith(val,uiBody)` :``}
            discardPeriodicTasks()
          }

          // act
          cpnt._${serviceMethodString.orig}(uiBody)
          .subscribe({next:successFn})
          expect(${serviceMethodString.orig}.${serviceMethodString.orig}Load).toHaveBeenCalledWith(uiBody)
          flush()
          ${expectHttpCall}
        }))
        _add_newline_here_

      })
      _add_newline_here_
      describe("when ${serviceMethodString.orig}.automate === true",()=>{
        it(\` when called |
        under normal conditions |
        does the required action \`,fakeAsync(()=>{
          // arrange
          ENV.${serviceString.camelCase(false)}.${serviceMethodString.orig}.automate = true
          let sucessFn  = (val?)=>{
            // assert
            expect(val).toBeInstanceOf(${serviceMethodString.capitalize(false)}APIResponseBody)
            discardPeriodicTasks()
          }
          // act
          cpnt._${serviceMethodString.orig}()
          .subscribe({next:sucessFn})
          ${options.transformationType ==="scrolling"? `tick(${transformationTypeScrollingDelayTimeInMs+100})` : `flush()`}

        }))
      })

    })`
  }



  let spacingPrefix = "\n  "
  let insertPos = startNode.end

  prepareForUpdate(
    snippet,
    targetFilePath, tree,
    // @ts-ignore
    insertPos, spacingPrefix
  );
  return sourceFile;
}

