import { Rule, chain, Tree, SchematicsException,strings } from "@angular-devkit/schematics";
import { listFiles } from "../utils/listFiles";
import {normalize } from '@angular-devkit/core';
import * as ts from '@schematics/angular/third_party/github.com/Microsoft/TypeScript/lib/typescript';
import { InsertChange, Change } from '@schematics/angular/utility/change';
import { wmlUpdateFile } from "../utils/updateFile";
import {  wmlCreateSourceFile,removeLeadingWhitespace, getIndentation,  prepareForUpdate, wmlFindChildNode, getFile, DevEnvFile, FormsServiceFilePath, i18nEnJSONFilePath, camelCaseToSentence, getCpntClassVar, addImportStatements, performDependencyInjection, CreateStringObjectType, createStringObject, WMLschematicMsgs, FindNodeTypeByRecursionProps, findNodeTypeByRecursion } from "../utils/utils";

let importsToAdd = [
  {
    packageName: "@windmillcode/angular-wml-form",
    importStatement: "import { WMLFormZeroProps } from '@windmillcode/angular-wml-form';\n",
    importMembers: ["WMLFormZeroProps"]
  },
  {
    packageName: "@windmillcode/angular-wml-button",
    importStatement: "import { WMLButtonOneProps, WMLButtonPropsTypeEnum } from '@windmillcode/angular-wml-button';\n",
    importMembers: ["WMLButtonOneProps", "WMLButtonPropsTypeEnum"]
  },
  {
    packageName: "@windmillcode/angular-wml-components-base",
    importStatement: "import { WMLUIProperty, generateClassPrefix } from '@windmillcode/angular-wml-components-base';\n",
    importMembers: ["WMLUIProperty", "generateClassPrefix"]
  },
  {
    packageName: "@core/base/base.service",
    importStatement: "import { BaseService, BaseServiceSubmitFormProps } from '@core/base/base.service';\n",
    importMembers: ["BaseService", "BaseServiceSubmitFormProps"]
  },
  // {
  //   packageName: "@core/utility/form-utils",
  //   importStatement: "import { createFieldString , createI18nErrorMsgsBasedOnValidations } from '@core/utility/form-utils';\n",
  //   importMembers: ["createFieldString","createI18nErrorMsgsBasedOnValidations"]
  // },
  {
    packageName: "@shared/services/forms/forms.service",
    importStatement: "import { FormsService } from '@shared/services/forms/forms.service';\n",
    importMembers: ["FormsService"]
  },
  {
    packageName:'@env/environment',
    importStatement:`import { ENV } from '@env/environment';`,
    importMembers:["ENV"]
  },
];

class TemplateFormSchema {
    name!:string
    envFilePath:string =DevEnvFile
    formsServiceFilePath:string= FormsServiceFilePath
    path!:string
    apiCall!:string
    apiCallClass!:string
    fields!:string[]
    fieldType!:"simple"|"complex"
}
export function generateFormTemplate(options:TemplateFormSchema):Rule{
  return ()=>{


    return chain([
      updateClassFile(options)
    ])


  }
}


let updateClassFile = (options:TemplateFormSchema)=>{
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

function updateCpntFile(
  options: TemplateFormSchema,
  tree:Tree,
  targetFilePath:string) {
    let sourceFile = wmlCreateSourceFile(targetFilePath, tree);
  let cpntClassVar = getCpntClassVar(sourceFile)
  let cpntClassName = cpntClassVar.name?.getText()
  if(!cpntClassName){
    throw new SchematicsException("component class name is missing or misspelt or the script is having issues finding the component class name")
  }
  let lowerCamelCaseCpntClassName = strings.camelize(cpntClassName.split("Component")[0])
  let classNamePrefix = cpntClassName.split("Component")[0]
  let apiCallArgument = ![null, undefined, ""].includes(options.apiCallClass) ?
    `new ${options.apiCallClass}(this.${options.name}Group.value)` :
    `this.${options.name}Group.value`;
  let lastProperty = cpntClassVar.members
  .filter(ts.isPropertyDeclaration)
  .at(-1)  as ts.PropertyDeclaration

  let nameString = createStringObject(options.name,"")
  let cpntString = createStringObject(cpntClassName,"Component")
  injectSnippet(options, lowerCamelCaseCpntClassName,  lastProperty,  targetFilePath, tree,classNamePrefix,apiCallArgument,nameString);
  addInitFormCallToNgOnInit(  targetFilePath, tree,options);
  performDependencyInjection(  targetFilePath, tree,`public formsService:FormsService`,getCpntClassVar(sourceFile));
  addImportStatements(sourceFile, targetFilePath, tree,importsToAdd);
  updateFormsServiceFile(tree,lowerCamelCaseCpntClassName,options)
  updateEnJSONFile(tree,classNamePrefix,options)
  updateSpecFile(options,tree,cpntString.dasherize() +".component.spec.ts",nameString,cpntString)


  // sourceFile = wmlCreateSourceFile(targetFilePath, tree);
  // console.log(sourceFile.getFullText())
  // throw new SchematicsException("got here")
}

function injectSnippet(
  options: TemplateFormSchema,
  lowerCamelCaseCpntClassName: string,
  lastProperty: ts.PropertyDeclaration,
  targetFilePath: string, tree:Tree,classNamePrefix:string,apiCallArgument:string,
  nameString:CreateStringObjectType) {
  let sourceFile = wmlCreateSourceFile(targetFilePath, tree);
  let cpntClassVar = getCpntClassVar(sourceFile)
  let insertPos = 0;
  let final = "";
  let fieldSnippets
  if(options.fieldType ==="complex" ){
    fieldSnippets = createComplexFieldSnippets(options, lowerCamelCaseCpntClassName, classNamePrefix)
  }
  else if(options.fieldType ==="simple"){
    fieldSnippets = createSimpleFieldSnippets(options, lowerCamelCaseCpntClassName, nameString)
  }
  let fnBodySnippet = fieldSnippets.map((x)=>x.fnBody).join("\n")
  let fnNameSnippet = fieldSnippets.map((x)=>`\t\t_add_newline_here_this.${x.fnName}(),`).join("")
  let optionString = createStringObject(options.name)

let submitBtnObjSnippet = `${options.name}SubmitBtn = new WMLButtonOneProps({
  id:this.idPrefix("${options.name}SubmitBtn"),
  type:WMLButtonPropsTypeEnum.PRIMARY,
  text:"global.submitBtn",
  click:()=> ["PREVIEW","PROD"].includes(ENV.type) ?
  this.baseService.openFeatureIsComingSoon() : this.${options.name}ClickSubmitBtn()
})
`.replace(/\n/g, "_add_newline_here_");

  let submitBtnSnippet = [null, undefined, ""].includes(options.apiCallClass) ?`_add_newline_here_

${submitBtnObjSnippet}

_add_newline_here_
${options.name}ClickSubmitBtn = ()=>{
_add_newline_here_
    this.baseService.submitForm(new BaseServiceSubmitFormProps({
      rootFormGroup:this.${options.name}Group,
      cdref:this.cdref,
      validFormPredicateTypeDefault:{
        ngUnsub:this.ngUnsub,
        // @ts-ignore
        apiCall$:${options.apiCall}(${apiCallArgument})
      }
    }))
_add_newline_here_
}` : ``

  let simpleFieldsSnippet = options.fieldType === "simple" ? `
    create${nameString.capitalize(false)}Field = (props:Partial<{createWMLFieldFn:(props?: GenerateFieldProps<any>) => WMLFieldZeroProps<any, any>,errorMsgKeyArray:any,fieldCustomProps:any,formControlName: keyof  FormsService["${lowerCamelCaseCpntClassName}"]["${options.name}"]["value"]}>)=>{
      let {createWMLFieldFn,errorMsgKeyArray,fieldCustomProps,formControlName} = props
      let field =this.baseService.createWMLField({
        i18nPrefix:"${classNamePrefix}.${options.name}",
        idPrefixFn:this.idPrefix,
        fieldParentForm:this.${options.name}Group,
        formControlName,createWMLFieldFn,errorMsgKeyArray,fieldCustomProps
      })
      return field
    }
  ` : ``
  let snippet = `
    ${options.name} = new WMLFormZeroProps({})
    ${options.name}Group = this.formsService.${lowerCamelCaseCpntClassName}.${options.name}
_add_newline_here_
    ${simpleFieldsSnippet}
${submitBtnSnippet}
${fnBodySnippet}
_add_newline_here_
    init${optionString.capitalize(false)} = ()=>{
      let fields = [
        ${fnNameSnippet}
      ]
      this.${options.name}.updateFields(fields)
    }
  `;
  let text = sourceFile.getFullText();
  let indentation = getIndentation(text)
  if (!lastProperty) {
    let constructor = wmlFindChildNode(
      cpntClassVar.members,
      ts.SyntaxKind.Constructor,
      "something is wrong with the components constructor",false,false
    );
    if(!constructor){
      let openBrace = wmlFindChildNode(
        cpntClassVar,
        ts.SyntaxKind.OpenBraceToken,
        "its with classes open brace token is it missing"
      );
      insertPos = openBrace?.end;
    }
    else{
      insertPos = constructor?.end;
    }
    snippet = removeLeadingWhitespace(snippet, "\t\t\t\t\n");
  }
  else {
    insertPos = lastProperty.end;
    snippet = removeLeadingWhitespace(snippet, lastProperty.getFullText());
  }
  final = `${indentation[0] ?? ' '}${snippet}`;
  let changes: Change[] = [new InsertChange(targetFilePath, insertPos, final)];
  wmlUpdateFile(tree, targetFilePath, changes);
}

function addInitFormCallToNgOnInit(targetFilePath: string, tree:Tree,options:TemplateFormSchema) {
  let sourceFile = wmlCreateSourceFile(targetFilePath, tree);
  let cpntClassVar = getCpntClassVar(sourceFile)
  let optionString = createStringObject(options.name)
  let ngOnInit = cpntClassVar.members
    .filter((x) => {
      return x.kind === ts.SyntaxKind.MethodDeclaration;
    })
    .find((x) => {
      return x.name?.getText() === "ngOnInit";
    });
  if (!ngOnInit) {
    let constructor =   wmlFindChildNode(
      cpntClassVar.members,
      ts.SyntaxKind.Constructor,
      "its with the constructor",false,false
    );
    let ngOnInitStr =         `\n
    ngOnInit(): void{
      this.init${optionString.capitalize(false)}() _add_newline_here_
    }
    `
    if(!constructor){

      let openBrace = wmlFindChildNode(
        cpntClassVar,
        ts.SyntaxKind.OpenBraceToken,
        "its with component class close {",false,false
      );
      prepareForUpdate(
        ngOnInitStr,
        targetFilePath, tree,
        openBrace.end, cpntClassVar.getFullText()
      )
    }
    else{
      let openParenToken = wmlFindChildNode(
        constructor,
        ts.SyntaxKind.OpenParenToken,
        "its with constuctor close parentheses",false,false
      );
      prepareForUpdate(
        ngOnInitStr,
        targetFilePath, tree,
        openParenToken.end, constructor.getFullText()
      )
    }
  }
  else{
    let block = wmlFindChildNode(
      ngOnInit,
      ts.SyntaxKind.Block,
      "its with ngOnInit's block"
    );

    let openBrace =   wmlFindChildNode(
      block,
      ts.SyntaxKind.OpenBraceToken,
      "its with ngOnInit's open brace"
    );



    prepareForUpdate(
      `\nthis.init${optionString.capitalize(false)}() _add_newline_here_`,
      targetFilePath, tree,
      openBrace.end, ngOnInit.getFullText(),"\t\t"
    )
  }





}

let updateFormsServiceFile = (
  tree:Tree,
  lowerCamelCaseCpntClassName:string,
  options:TemplateFormSchema
)=>{
  let { targetPath } = getFile(tree,FormsServiceFilePath);
  let sourceFile = wmlCreateSourceFile(targetPath, tree);
  let targetClass = sourceFile?.statements
  ?.filter(ts.isClassDeclaration)
  .find((v) => {
    return v.name?.getText() === 'FormsService';
  }) as ts.ClassDeclaration;
  let insertPos = 0
  let snippet = ""
  let indentTarget: ts.Node
  let spacingPrefix = ""
  console.log(options.fields)
  let fieldsArray= options.fields.map((val)=>{
    return `${val}:new FormControl("")`
  })
  let fieldsString ="_add_newline_here_\t"+fieldsArray.join(",_add_newline_here_\t") +"_add_newline_here_"
  let formBlock = `${options.name} :new FormGroup({${
    fieldsString
  }})`

  let entityProp = wmlFindChildNode(
    targetClass.members,
    // @ts-ignore
    (prop:ts.ClassElement)=>{
      let name =prop.name?.getText()
      return name === lowerCamelCaseCpntClassName
    },
    "its with the properties of FormsService",
    false,false
  );
  if(!entityProp){
    let constructor = wmlFindChildNode(
      targetClass.members,
      // @ts-ignore
      ts.SyntaxKind.Constructor,
      "look like the constructor",
      false,false
    )

    snippet = `
    ${lowerCamelCaseCpntClassName}={
      ${formBlock}
    }
    `
    spacingPrefix = "\n"
    if(!constructor){
      let openBrace = wmlFindChildNode(
        targetClass,
        ts.SyntaxKind.OpenBraceToken,
        "its with FormService Class open brace token is it missing"
      );
      indentTarget = targetClass
      insertPos = openBrace.end

    }
    else{
      indentTarget = constructor
      insertPos = constructor.end

    }


  }
  else{
    fieldsString ="_add_newline_here_\t"+fieldsArray.join(",_add_newline_here_\t") +"_add_newline_here_\t"
    formBlock = `${options.name} :new FormGroup({${
      fieldsString
    }})`
    let objLiteral = wmlFindChildNode(
      entityProp,
      ts.SyntaxKind.ObjectLiteralExpression,
      "its with the braces on  the " + entityProp + " property"

    ) as ts.ObjectLiteralExpression;
    let closeBrace = wmlFindChildNode(
      objLiteral,
      ts.SyntaxKind.CloseBraceToken,
      "its with the braces on  the " + entityProp + " property"
    );
    indentTarget = closeBrace
    insertPos = closeBrace.pos
    let occurencess = objLiteral.properties.length
    snippet = "\n"+formBlock
    if(occurencess > 0){
      let lastRouteLiteral = objLiteral.properties.at(-1) as ts.ObjectLiteralElementLike;
      indentTarget = lastRouteLiteral
      insertPos = lastRouteLiteral.end
      spacingPrefix=","
    }

  }

  prepareForUpdate(
    snippet,
    targetPath, tree,
    insertPos,
    // @ts-ignore
    indentTarget?.getFullText(),
    spacingPrefix
  );


}

let updateEnJSONFile = (
  tree:Tree,
  classNamePrefix:string,
  options:TemplateFormSchema
)=>{
  let { targetPath } = getFile(tree,i18nEnJSONFilePath);
  let sourceFile = wmlCreateSourceFile(targetPath, tree);
  let enJSON = JSON.parse(sourceFile.getFullText())

  enJSON[classNamePrefix] = enJSON[classNamePrefix] ??{}
  let fieldsArray = options.fields.map((field)=>{
    return [
      field+"Field",
      {
        "label":  camelCaseToSentence(strings.capitalize(field)),
        "error":{
        }
      }
    ]
  })
  enJSON[classNamePrefix][options.name] =Object.fromEntries(fieldsArray)
  tree.overwrite(i18nEnJSONFilePath,JSON.stringify(enJSON,null,2))
}

function createSimpleFieldSnippets(options: TemplateFormSchema, lowerCamelCaseCpntClassName: string, nameString:CreateStringObjectType) {
  return options.fields.map((field) => {
    let fnName = `create${strings.capitalize(field)}Field`
    return {
      fnName,
  fnBody:`_add_newline_here_
    ${fnName} =()=>{
      let field= this.create${nameString.capitalize(false)}Field({
        formControlName:"${field}",
        errorMsgKeyArray:[],
        fieldCustomProps:null
      })
      field.deleteRequiredLabelPart();
      return field
    }`};
  });
}

function createComplexFieldSnippets(options: TemplateFormSchema, lowerCamelCaseCpntClassName: string, classNamePrefix: string) {
  return options.fields.map((field) => {
    let fnName = `create${strings.capitalize(field)}Field`
    return {
      fnName,
  fnBody:`_add_newline_here_
    ${fnName} =()=>{
      let val = createFieldString(ENV.${lowerCamelCaseCpntClassName}.${options.name}.${field ?? "name"}FormControlName)
      let field = this.baseService.createInputFormField({
        id:this.idPrefix(val.field),
        labelValue:"${classNamePrefix}.${options.name}."+val.field+".label",
        fieldFormControlName:this.${options.name}Vars[val.base+"FormControlName"],
        fieldParentForm:this.${options.name}Group,
        selfType:"standalone",
        errorMsgs:createI18nErrorMsgsBasedOnValidations(
          "${classNamePrefix}.${options.name}",val.field,["replace","with","your","error","keys"]
        ),
      })
      field.deleteRequiredLabelPart()
      return field
    }`};
  });
}

function updateSpecFile(
  options: TemplateFormSchema,
  tree:Tree,
  targetFileName:string,
  nameString: CreateStringObjectType,
  cpntString:CreateStringObjectType
){


  let { targetPath } = getFile(tree,`${options.path}/${targetFileName}`);
  let sourceFile = wmlCreateSourceFile(targetPath, tree);
  addNeededImportsToTestFile(
    sourceFile,targetPath,tree
  )

  sourceFile = addDescribeBlockToCpntSpecFile( targetPath, tree,options, nameString,cpntString);
  sourceFile = addSpiesToCpntSpecFile( targetPath, tree,options, nameString,cpntString);


  sourceFile = wmlCreateSourceFile(targetPath, tree);

  // throw new SchematicsException("stop here")
}

function addNeededImportsToTestFile(
  sourceFile: ts.SourceFile,
  targetFilePath:string, tree:Tree
) {
  let importsToAdd = [
    {
      packageName:'rxjs',
      importStatement:`import { of } from 'rxjs';`,
      importMembers:["of"]
    },
    {
      packageName: "@windmillcode/angular-wml-form",
      importStatement: "import { WMLFormZeroProps } from '@windmillcode/angular-wml-form';\n",
      importMembers: ["WMLFormZeroProps"]
    },
    {
      packageName: "@windmillcode/angular-wml-field",
      importStatement: "import { WMLFieldZeroProps } from '@windmillcode/angular-wml-field';\n",
      importMembers: ["WMLFieldZeroProps"]
    },
    {
      packageName: "@core/utility/form-utils",
      importStatement: "import { GenerateFieldProps } from '@core/utility/form-utils';\n",
      importMembers: ["GenerateFieldProps"]
    },
  ]

  addImportStatements(sourceFile,targetFilePath, tree,importsToAdd)
}

function addDescribeBlockToCpntSpecFile(
  targetFilePath:string, tree:Tree,options:TemplateFormSchema,
  nameString: CreateStringObjectType,
  cpntString:CreateStringObjectType
) {
  let sourceFile = wmlCreateSourceFile(targetFilePath, tree);
  let startNode
  let targets
  let optionString = createStringObject(options.name)




  if(!startNode){
    targets = findNodeTypeByRecursion(new FindNodeTypeByRecursionProps({
      node: sourceFile,
      printChildInfo:false,
      kind: (node,level) => {
        let boolVal0 = node.kind === ts.SyntaxKind.ExpressionStatement;
        // if issues update this regex
        let regexpResult = RegExp(`describe.*['"].*['"]|beforeEach`,"s").exec(node.getFullText());
        let boolVal1 = Boolean(regexpResult);
        let boolVal2
        if(boolVal1){
          // @ts-ignore
          let binExpr0 =wmlFindChildNode(
            node,(child)=>{
              let parentDescRegex  = RegExp(`describe.*['"].*['"]`,"s")

              let node = child
              let nodesToCheck =Array(level)
              .fill(null)
              .map((nullVal,index0)=>{
                node = node.parent
                return node
              })
              .filter((node)=>{
                let regexpResult= parentDescRegex.exec(
                  node.getFullText()
                );
                return node.kind === ts.SyntaxKind.ExpressionStatement &&
                Boolean(regexpResult)
              })
              if(nodesToCheck.length===1){
                // console.log(level)
              }
              return nodesToCheck.length === 1
            },"",false,false
          )
          boolVal2 = Boolean(binExpr0)
        }
        return boolVal0 && boolVal1 && boolVal2;
      },
    }));

    startNode = targets.at(-1);
  }
  // console.log("0 ",startNode?.getFullText())
  // targets.forEach((x)=>{
  //   getTsMemberInfo(x)
  // })

  if(!startNode){
    throw new SchematicsException(`the describe block may be missing
    please ensure at a minium the spec file contains
    describe('>>Entity Name <<', () => {

    });

    ${WMLschematicMsgs.removePlacehoders0}
    if not contact support if the issue persists
    `)
  }


  let snippet = `\ndescribe('${options.name}ClickSubmitBtn', () => {
    it(\`
    when called |
    under normal conditions |
    does the required action\`, () => {
      // arrange
      const formValue = cpnt.formsService.${cpntString.camelCase()}.${nameString.camelCase(false)}.value; // Your form values go here


      // act
      cpnt.${options.name}ClickSubmitBtn();

      // assert
      // @ts-ignore
      expect(cpnt.${options.apiCall.split("this.")[1]}).toHaveBeenCalledWith(formValue);
      expect(cpnt.baseService.submitForm).toHaveBeenCalled();
    });
  });\n
describe('init${optionString.capitalize(false)}', () => {
    it(\`
    when called |
    under normal conditions |
    does the required action\`, () => {
      // act
      cpnt.init${optionString.capitalize(false)}();

      // assert
      expect(cpnt.${options.name}).toBeInstanceOf(WMLFormZeroProps);
    });
  });`
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

function addSpiesToCpntSpecFile(
  targetFilePath:string, tree:Tree,options:TemplateFormSchema, nameString: CreateStringObjectType,cpntString:CreateStringObjectType) {
  let sourceFile = wmlCreateSourceFile(targetFilePath, tree);
  let startNode
  let targets



  // console.log("2 ",startNode?.getFullText())
  if(!startNode){
    targets = findNodeTypeByRecursion(new FindNodeTypeByRecursionProps({
      node: sourceFile,
      kind: (node) => {
        let boolVal0 = node.kind === ts.SyntaxKind.ExpressionStatement;
        let regexpResult = RegExp(/fixture.detectChanges(\s*)/).exec(node.getFullText());
        let boolVal1 = Boolean(regexpResult);
        let boolVal2
        if(boolVal1){
          let binExpr0 =wmlFindChildNode(
            node,ts.SyntaxKind.CallExpression,"",false,false
          )
          boolVal2 = Boolean(binExpr0)
        }
        return boolVal0 && boolVal1  && boolVal2;
      },
    }));

    startNode = targets.at(-1);
  }
  // console.log("3 ",startNode?.getFullText())
  if(!startNode){
    targets = findNodeTypeByRecursion(new FindNodeTypeByRecursionProps({
      node: sourceFile,
      printChildInfo:true,
      kind: (node) => {
        let isKind = node.kind === ts.SyntaxKind.ExpressionStatement;
        let regexpResult = RegExp(`wmlTestUtils.grabComponentInstance\\(\\s*${cpntString.capitalize(false)}\\s*\\)`).exec(node.getFullText());
        let stringContainingConfigure = Boolean(regexpResult);
        let isBinExpr0
        if(stringContainingConfigure){
          let binExpr0 =wmlFindChildNode(
            node,ts.SyntaxKind.ParenthesizedExpression,"",true,false
          )
          isBinExpr0 = Boolean(binExpr0)
        }
        return isKind && stringContainingConfigure && isBinExpr0 ;
      },
    }));

    startNode = targets.at(0);
  }
  // console.log("4 ",startNode?.getFullText())

  // console.log("5 ",startNode?.getFullText())
  if(!startNode){
    throw new SchematicsException(`component must be instantiated like so
    ${WMLschematicMsgs.removePlacehoders0}

    await wmlTestUtils.configureTestingModuleForStandaloneComponents(>> COMPONENT NAME HERE <<);
    ({fixture, cpnt} =  wmlTestUtils.grabComponentInstance(>> COMPONENT NAME HERE <<));
    `)
  }



  let [,serviceName,seviceMethodName] = options.apiCall.split(".")
  let snippet = `\nspyOn(cpnt.${serviceName}, '${seviceMethodName}');
spyOn(cpnt.baseService,"submitForm")`
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
