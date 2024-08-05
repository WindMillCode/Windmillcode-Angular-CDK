import { Rule, chain, Tree,   externalSchematic,strings,  noop } from "@angular-devkit/schematics";
import { listFiles } from "../utils/listFiles";
import {normalize } from '@angular-devkit/core';
import * as ts from '@schematics/angular/third_party/github.com/Microsoft/TypeScript/lib/typescript';

import {  wmlCreateSourceFile, DevEnvFile, getServiceClassVar, createStringObject, getCpntClassVar, prepareForUpdate, wmlFindChildNode,  addImportStatements, CreateStringObjectType, performDependencyInjection } from "../utils/utils";
import { TemplateServiceMethodSchema } from "../template-service-method";

export class TemplateScrollPropsSchema {
    name!:string
    envFilePath:string =DevEnvFile
    path!:string
    serviceFilePath!:string
    serviceMethodName!:string
    serviceMethodEntityName!:string
    serviceMethodApiRoute!:string
    serviceMethodUseDataSourceStrategy!:boolean
    scrollContainerName!:string
    createServiceMethod!:string
}

let importsToAdd  = [
  {
    packageName: "@core/utility/scroll-utils",
    importStatement: "import { ScrollPageProps } from '@core/utility/scroll-utils';\n",
    importMembers: ["ScrollPageProps"]
  },
  {
    packageName: "@angular/core",
    importStatement: "import { ViewChild, ViewContainerRef } from '@core/utility/scroll-utils';\n",
    importMembers: ["ViewChild","ViewContainerRef"]
  },
]
export function generateFn(options:TemplateScrollPropsSchema):Rule{
  return (tree:Tree)=>{
    options.scrollContainerName ??= strings.camelize(options.name+"_Scroll_Container")
    options.serviceMethodName ??= options.name
    let serviceClassVar = getServiceInfo(tree, options);
    let serviceStringName = createStringObject(serviceClassVar.name?.getText(),"Service")
    return chain([
      options.createServiceMethod  ? externalSchematic<TemplateServiceMethodSchema>('@windmillcode/angular-templates', 'serviceMethod', {
        useDataSourceStrategy:options.serviceMethodUseDataSourceStrategy,
        name: options.serviceMethodName,
        envFilePath:options.envFilePath,
        path: options.serviceFilePath,
        serviceName:serviceStringName.camelCase(true),
        apiRoute:options.serviceMethodApiRoute,
        scrollName:options.name,
        transformationType:"scrolling",
        entityName:options.serviceMethodEntityName,
        httpMethod:"post"
      }) : noop(),
      updateClassFile(options),
    ])
  }
}


let updateClassFile = (options:TemplateScrollPropsSchema)=>{
  return (tree:Tree)=>{
    let files = listFiles(tree,options.path)
    let targetFiles = [
      {suffix:"component.ts",predicate:updateCpntFile},
      {suffix:"service.ts",predicate:updateCpntFile},
      {suffix:"directive.ts",predicate:updateCpntFile},
    ]
    let targetFileName = files.find((file:string)=>{
      return targetFiles.some((val)=>file.endsWith(val.suffix))
    }) as string
    let targetFileInfo = targetFiles.find((val)=>{
      return targetFileName.endsWith(val.suffix)
    })
    let targetFilePath = normalize(`${targetFileName}`)

    targetFileInfo?.predicate(options, tree,targetFilePath);



  }
}

function updateCpntFile(options: TemplateScrollPropsSchema,tree:Tree,targetFilePath:string) {

  let sourceFile = wmlCreateSourceFile(targetFilePath, tree);
  let cpntClassVar = getCpntClassVar(sourceFile)
  let targetStringName = createStringObject(cpntClassVar.name?.getText())
  let lastProperty =  cpntClassVar.members
  .filter(ts.isPropertyDeclaration)
  .at(-1)  as ts.PropertyDeclaration

  if(!lastProperty){
    lastProperty = wmlFindChildNode(
      cpntClassVar,
      ts.SyntaxKind.OpenBraceToken,
      `its with ${targetStringName.orig} class open brace token is it missing`
    );
  }

  let nameString = createStringObject(options.name)
  let serviceClassVar = getServiceInfo(tree, options);
  let serviceStringName = createStringObject(serviceClassVar.name?.getText(),"Service")
  let serviceMethodStringName = createStringObject(options.serviceMethodName)
  let serviceMethodScrollPage =nameString.camelCase(true,"ScrollPageObj")
  let serviceMethodScrollPageUIRequestBody = nameString.camelCase(true,"ScrollPageUIRequestBody")
  importsToAdd.push({
    packageName: options.serviceFilePath,
    importStatement: `import { ${serviceStringName.orig} } from '${options.serviceFilePath}/${serviceStringName.lowercase(true)}.service';\n`,
    importMembers: [serviceStringName.orig]
  })

  updateTargetProperties(options, targetFilePath, tree, lastProperty, cpntClassVar);
  updateTargetMethods(
    targetFilePath, tree,
     serviceStringName, serviceMethodScrollPage,
     serviceMethodScrollPageUIRequestBody, serviceMethodStringName, targetStringName,options)

  addImportStatements(sourceFile,targetFilePath, tree,importsToAdd)
  addToNgOnInit(sourceFile, targetFilePath, tree, cpntClassVar,nameString);
  addServiceToConstructor(sourceFile, targetFilePath, tree, cpntClassVar, serviceStringName);

  // sourceFile = wmlCreateSourceFile(targetFilePath, tree);
  // console.log(sourceFile.getFullText())
  // throw new SchematicsException("got here")
}

function addServiceToConstructor(sourceFile: ts.SourceFile, targetFilePath: string, tree:Tree, cpntClassVar: ts.ClassDeclaration,
  serviceStringName:CreateStringObjectType
  ) {
  sourceFile = wmlCreateSourceFile(targetFilePath, tree);
  cpntClassVar = getCpntClassVar(sourceFile);
  performDependencyInjection(
    targetFilePath,tree,
    `public ${serviceStringName.camelCase(false)}:${serviceStringName.orig}`,
    cpntClassVar
  )
}

function addToNgOnInit(
  sourceFile: ts.SourceFile,
  targetFilePath: string,
  tree:Tree,
  cpntClassVar: ts.ClassDeclaration,
  nameString:CreateStringObjectType
) {
  sourceFile = wmlCreateSourceFile(targetFilePath, tree);
  cpntClassVar = getCpntClassVar(sourceFile);
  let ngOnInit = wmlFindChildNode(
    cpntClassVar.members,
    (prop: any) => {
      return prop.kind === ts.SyntaxKind.MethodDeclaration && prop.name?.getText() === "ngOnInit";
    },
    "ngOnInit is not in this class",false,false
  );
  if (!ngOnInit) {

    let target = cpntClassVar.members
    .filter((prop)=>{
      let arrFn = Array.from(prop.getChildren()).filter((child)=>{
        child.kind === ts.SyntaxKind.ArrowFunction
      })
      // for some odd reason, it cant find ArrowFn even when its the case
      return (prop.kind === ts.SyntaxKind.PropertyDeclaration && arrFn.length === 0)
    })
    .at(-1)?? wmlFindChildNode(
      cpntClassVar.members,
      ts.SyntaxKind.Constructor,
      "its with the constructor", false, false
    ) ?? wmlFindChildNode(
      cpntClassVar,
      ts.SyntaxKind.OpenBraceToken,
      "its with component class close {", false, true
    );
    let ngOnInitStr = `\n
    ngOnInit(): void{
      this.init${nameString.capitalize(false)}GetScrollEntities() _add_newline_here_
    }
    `;
    prepareForUpdate(
      ngOnInitStr,
      targetFilePath, tree,
      target.end, cpntClassVar.getFullText()
    );
  }
  else {
    let block = wmlFindChildNode(
      ngOnInit,
      ts.SyntaxKind.Block,
      "its with ngOnInit's block"
    );

    let openBrace = wmlFindChildNode(
      block,
      ts.SyntaxKind.OpenBraceToken,
      "its with ngOnInit's open brace"
    );
    prepareForUpdate(
      `\nthis.init${nameString.capitalize(false)}GetScrollEntities() _add_newline_here_`,
      targetFilePath, tree,
      openBrace.end, ngOnInit.getFullText(), "\t\t"
    );
  }
  return { sourceFile, cpntClassVar };
}

function updateTargetProperties(options: TemplateScrollPropsSchema, targetFilePath: string, tree:Tree, lastProperty: ts.PropertyDeclaration, cpntClassVar: ts.ClassDeclaration) {
  let propertiesSnippet = `
@ViewChild("${options.scrollContainerName}",{read:ViewContainerRef,static:true}) ${options.scrollContainerName}
`;
  prepareForUpdate(
    propertiesSnippet,
    targetFilePath, tree,
    lastProperty.end, cpntClassVar.getFullText()
  );
}

function updateTargetMethods(
   targetFilePath: string, tree:Tree,
  serviceStringName: CreateStringObjectType,
  serviceMethodScrollPage: string, serviceMethodScrollPageUIRequestBody: string,
  serviceMethodStringName: CreateStringObjectType,
  targetStringName: CreateStringObjectType,options:TemplateScrollPropsSchema) {
  let sourceFile = wmlCreateSourceFile(targetFilePath, tree);
  let cpntClassVar = getCpntClassVar(sourceFile);
  let nameString = createStringObject(options.name)
  let fnsSnippet = `
on${nameString.capitalize(false)}ItemsRetrievedListener = ()=>{
}
init${nameString.classify(false)}GetScrollEntities = ()=>{
  this.${serviceStringName.camelCase(false)}.${serviceMethodScrollPage}?.destroy()
  this.${serviceStringName.camelCase(false)}.${serviceMethodScrollPageUIRequestBody}.pageNum = 0
  this.${serviceStringName.camelCase(false)}.${serviceMethodScrollPage} = new ScrollPageProps({
    pageRequestBody:this.${serviceStringName.camelCase(false)}.${serviceMethodScrollPageUIRequestBody},
    elementToDetermineXFromBottom:this.${options.scrollContainerName}.element.nativeElement,
    ngUnsub:this.ngUnsub,
    cdref:this.cdref,
    callAPIForMoreItemsPredicate:this.${serviceStringName.camelCase(false)}._${serviceMethodStringName.camelCase(false)},
    onItemsRetrievedListener:this.on${nameString.capitalize(false)}ItemsRetrievedListener
  })
  this.cdref.detectChanges()
}
`;

  let lastMethod = cpntClassVar.members
    .filter(ts.isMethodDeclaration)
    .filter((prop) => {
      return ["ngOnInit"].includes(prop.name.getText());
    })
    .at(0) as ts.MethodDeclaration;
  let insertPos = lastMethod?.pos;

  if (!lastMethod) {
    lastMethod = wmlFindChildNode(
      cpntClassVar,
      ts.SyntaxKind.CloseBraceToken,
      `its with ${targetStringName.orig} class close brace token is it missing`
    );
    insertPos = lastMethod.pos;
  }

  prepareForUpdate(
    fnsSnippet,
    targetFilePath, tree,
    insertPos, cpntClassVar.getFullText()
  );
}


// aux
function getServiceInfo(tree:Tree, options: TemplateScrollPropsSchema) {
  let files = listFiles(tree, options.serviceFilePath);
  let serviceFileName = files.find((file: string) => {
    return file.endsWith("service.ts");
  });
  let serviceFilePath = normalize(`${serviceFileName}`);
  let serviceSourceFile = wmlCreateSourceFile(serviceFilePath, tree);
  let serviceClassVar = getServiceClassVar(serviceSourceFile);
  return serviceClassVar;
}
