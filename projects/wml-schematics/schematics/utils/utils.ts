import * as ts from '@schematics/angular/third_party/github.com/Microsoft/TypeScript/lib/typescript';
import {
  SchematicsException,
  Tree,
  strings,Rule
} from '@angular-devkit/schematics';
import { wmlUpdateFile } from './updateFile';
import { InsertChange, Change } from '@schematics/angular/utility/change';
import { Path,normalize } from '@angular-devkit/core';
import {
  MODULE_EXT,
  ROUTING_MODULE_EXT,
  buildRelativePath
} from '@schematics/angular/utility/find-module';
import {
  addRouteDeclarationToModule
} from '@schematics/angular/utility/ast-utils';
import { addRouteDeclarationToModuleOrRoutesFileOnChildrenProperty } from '../template-module/my_helper';
import { TemplateModuleSchema } from '../template-module';
import { TemplateComponentSchema } from '../template-component';

export function removeLeadingWhitespace(inputString:string,prefixString:string,allowFirstLineUnshift=true) {
  const lines:string[] = inputString.split('\n');
  if(allowFirstLineUnshift){
    lines.shift()
  }
  if (lines.length === 0) {
    return inputString; // Nothing to process
  }


  let firstLineIndentation = RegExp(/^\s*/).exec(lines[0])?.[0] ?? '';
  let prefixLineIndentation = RegExp(/^\s*/).exec(prefixString)?.[0] ?? '';
  let result = lines.map(line =>{
    let newLine =line
    .replace(firstLineIndentation, prefixLineIndentation)
    .replace(/_add_newline_here_/g,`\n${firstLineIndentation}`)
    return newLine
  })
  .join('');
  return result;
}


export function wmlCreateSourceFile(targetFilePath:string,tree:Tree) {
  let targetFile = tree.read(targetFilePath)
  if (!targetFile) {
    throw new SchematicsException(`This may be an internal issue but so far
    the ${targetFilePath} is not found so I cant selct the file to edit `);
  }
  return ts.createSourceFile(
    targetFilePath,
    targetFile.toString(),
    ts.ScriptTarget.Latest,
    true
  );
}

export let getIndentation = (text:string ="")=>{

  return RegExp(/\r?\n(\r?)\s*/).exec(text)?? [];
}

export let wmlMsgs ={
  syntaxIssue :(addtl:string)=>"I may have an internal error but I see that the syntax for this  class is incoorect  Fix the issue, "+addtl
}

export function getTsMemberInfo(x: ts.Node,returnIt = false,printIt = true) {
  if(printIt){
    console.log(x.kind,ts.SyntaxKind[x.kind], x.getFullText());
  }


  if(returnIt){
    return [x.kind,ts.SyntaxKind[x.kind], x.getText()];
  }
}


export let addImportStatement = (
    targetFilePath: string,
    tree:Tree,
    importStatementSnippet:string,
    packageName:string,
    importStatement:string,
    importMembers:string[]
  )=>{
  let sourceFile = wmlCreateSourceFile(targetFilePath, tree);
  let statements = sourceFile.statements


  let stmnt = statements.find((x)=>{
    return  [packageName,"{","}"].every(y=>x.getFullText().includes(y))
  })
  if(!stmnt){
    let stmnt = statements.find((x)=>{
      return importMembers.find((y)=>{
        return x.getFullText().includes(y) && x.kind === ts.SyntaxKind.ImportDeclaration
      })
    })

    if(!stmnt){
      importStatementSnippet += "\n"+importStatement
    }
  }
  else{
    let importClause = wmlFindChildNode(
      stmnt,
      ts.SyntaxKind.ImportClause,
      "its with the open brace of the import statement related to " + packageName
    );

    let namedImport = wmlFindChildNode(
      importClause,
      ts.SyntaxKind.NamedImports,
      "its with the open brace of the import statement related to " + packageName
    );


    let openBrace = wmlFindChildNode(
      namedImport,
      ts.SyntaxKind.OpenBraceToken,
      "its with the open brace of the import statement related to " + packageName
    );

    // SyntaxList
    let syntaxLists =  namedImport.getChildren().find((x:ts.Node)=>{
      return x.kind === ts.SyntaxKind.SyntaxList
    })
    .getFullText()
    .split(",")
    .map((x:string)=>{
      return x.trim()
    })

    let partialString =  importMembers.filter((x)=>{
      return !syntaxLists.includes(x.trim())
    }).join(",")
    partialString += partialString.length === 0 ? "" : " ,"
    prepareForUpdate(
      partialString,
      targetFilePath, tree,
      openBrace.end,""
    )
  }
  return importStatementSnippet
}

export function prepareForUpdate(
  snippet: string,targetFilePath: string, tree:Tree,
  insertPos:number =0 ,
  indentTarget:string ="",
  spacingPrefix=""
   ) {
  let final = "";
  let indentation = getIndentation(indentTarget);
  snippet = removeLeadingWhitespace(snippet, indentTarget);
  final = `${spacingPrefix}${indentation[0] ?? ' '}${snippet}`;
  let changes: Change[] = [new InsertChange(targetFilePath, insertPos, final)];
  wmlUpdateFile(tree, targetFilePath, changes);
}

type PropeterSyntaxType = ts.Node | ts.ClassElement;

export function wmlFindChildNode(
  parent: ts.Node | ts.NodeArray<ts.ClassElement> | ts.NodeArray<ts.Statement>,
  syntaxKind:
  ts.SyntaxKind | ((node: PropeterSyntaxType) => boolean),
  issueMsg:string ="There was an issue finding the node",
  printChildInfo=false,
  throwIfNotFound = true,
  findOrFilter:"find"|"filter" = "find"
  ) {

    // @ts-ignore
  let node = (parent?.getChildren?.()?? parent)
  [findOrFilter](((x:PropeterSyntaxType) => {
    if(printChildInfo){
      getTsMemberInfo(x)
    }
    if(syntaxKind instanceof Function){
      return syntaxKind(x)
    }
    else{
      return x.kind === syntaxKind;
    }
  }));
  if (!node && throwIfNotFound) {
    throw new SchematicsException(wmlMsgs.syntaxIssue(issueMsg));
  }
  return node;
}

export class FindNodeTypeByRecursionProps {
  constructor(props: Partial<FindNodeTypeByRecursionProps> = {}) {
    let origProps = Object.entries(props)
      .filter(([key]) => {
        return !key.startsWith('prop');
      });
    Object.assign(this, { ...Object.fromEntries(origProps) });
  }

  node!: ts.Node
  kind!: ts.SyntaxKind | ((node: PropeterSyntaxType,level:number) => boolean)
  printChildInfo=false
}

export function findNodeTypeByRecursion(props: FindNodeTypeByRecursionProps,level=0): ts.Node[] {
  const foundNodes: ts.Node[] = [];

  if (props.printChildInfo) {
    getTsMemberInfo(props.node);
    console.log("At level :", level)
  }

  if (props.kind instanceof Function) {
    if (props.kind(props.node,level)) {
      foundNodes.push(props.node);
    }
  } else if (props.node.kind === props.kind) {
    foundNodes.push(props.node);
  }

  // Recursively search in child nodes
  ts.forEachChild(props.node, (childNode) => {
    const childProps = { ...props, node: childNode };
    const childFoundNodes = findNodeTypeByRecursion(childProps,level+1);
    foundNodes.push(...childFoundNodes);
  });

  return foundNodes;
}


export function getFile(tree:Tree,path:string) {

  let targetPath = normalize(path);
  let targetFile = tree.read(targetPath);
  if (!targetFile) {
    throw new SchematicsException(`${targetPath} not found`);
  }
  return { targetPath, targetFile };


}

export  function camelCaseToSentence(input:string) {
  // Use a regular expression to split the string based on capital letters
  const words = input.split(/(?=[A-Z])/);

  // Capitalize the first word and join the words into a sentence
  const sentence = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return sentence;
}

export function getCpntClassVar(sourceFile: ts.SourceFile) {
  return sourceFile.statements
    .filter(ts.isClassDeclaration)
    .find((v) => {
      return v.name?.getText().endsWith("Component");
    }) as ts.ClassDeclaration;
}

export function getServiceClassVar(sourceFile: ts.SourceFile) {
  return sourceFile.statements
    .filter(ts.isClassDeclaration)
    .find((v) => {
      return v.name?.getText().endsWith("Service");
    }) as ts.ClassDeclaration;
}

export let  createStringObject = (myStr?:string,entitySuffix="Component")=>{

  if(!myStr){
    throw new SchematicsException(" class name is missing or misspelt or the script is having issues finding the  class name")
  }
  let result:CreateStringObjectType= {
    orig:myStr,
    get prefix(){
      return this.orig.split(entitySuffix)[0]
    },
    camelCase:(stripSuffix=true,suffix ="")=>{
      return strings.camelize( stripSuffix ? result.prefix: result.orig)+suffix
    },
    classify:(stripSuffix=true,suffix="")=>{
      return strings.classify( stripSuffix ? result.prefix: result.orig)+suffix
    },
    capitalize:(stripSuffix=true,suffix="")=>{
      return strings.capitalize( stripSuffix ? result.prefix: result.orig)+suffix
    },
    dasherize:(stripSuffix=true,suffix="")=>{
      return strings.dasherize( stripSuffix ? result.prefix: result.orig)+suffix
    },
    lowercase:(stripSuffix=true,suffix="")=>{
      return ( stripSuffix ? result.prefix: result.orig).toLocaleLowerCase()+suffix
    }
  }
  return result
}

export type CreateStringObjectType = {
  orig:string,
  prefix:string,
  camelCase:( stripSuffix?: boolean,suffix?: string,) => string,
  classify:( stripSuffix?: boolean,suffix?: string,) => string,
  capitalize:( stripSuffix?: boolean,suffix?: string,) => string,
  lowercase:( stripSuffix?: boolean,suffix?: string,) => string,
  dasherize:( stripSuffix?: boolean,suffix?: string,) => string
}

export function addImportStatements(
  sourceFile: ts.SourceFile,
   targetFilePath: string,
   tree:Tree,
   importsToAdd:{packageName:string,importStatement:string,importMembers:string[]}[]
  ) {
  let importStatementSnippet = `\n`;
  sourceFile = wmlCreateSourceFile(targetFilePath, tree);
  let statements = sourceFile.statements
    .filter(ts.isImportDeclaration);

    for (const importData of importsToAdd) {
      importStatementSnippet = addImportStatement(
        targetFilePath,
        tree,
        importStatementSnippet,
        importData.packageName,
        importData.importStatement,
        importData.importMembers
      );
    }


  sourceFile = wmlCreateSourceFile(targetFilePath, tree);
  statements = sourceFile.statements
    .filter(ts.isImportDeclaration);
  let lastMember = statements.at(-1);
  prepareForUpdate(
    importStatementSnippet,
    targetFilePath, tree,
    lastMember?.end,
    lastMember?.getFullText()
  );
}

export function performDependencyInjection(
  targetFilePath: string, tree:Tree,diString:string,classVar:ts.ClassDeclaration) {


  let constructor =   wmlFindChildNode(
    classVar.members,
    ts.SyntaxKind.Constructor,
    "its with the constructor",false,false
  );

  if(!constructor){
    let openBrace = wmlFindChildNode(
      classVar,
      ts.SyntaxKind.OpenBraceToken,
      "its with component class close {",false,false
    );
    if(openBrace.getFullText().includes(diString)){
      return
    }
    prepareForUpdate(
      ` \n   constructor(
        ${diString}
      ) {}`,
      targetFilePath, tree,
      openBrace.end, classVar.getFullText()
    )
  }
  else{
    if(constructor.getFullText().includes(diString.trim())){
      return
    }
    let openParenToken = wmlFindChildNode(
      constructor,
      ts.SyntaxKind.OpenParenToken,
      "its with constuctor close parentheses",false,false
    );
    prepareForUpdate(
      `  ${diString},`,
      targetFilePath, tree,
      openParenToken.end, constructor.getFullText()
    )
  }



}

export function buildRelativeModulePath(options: TemplateModuleSchema |TemplateComponentSchema, modulePath: string,type:"module" | "component" = "module"): string {

  let importModulePath = ""
  if(type === "module"  ){
    importModulePath = normalize(
      `/${options.path}/` +
        (options.flat ? '' : strings.dasherize(options.name) + '/') +
        strings.dasherize(options.name) +
        '.module',
    );
  }
  if(type === "component"  ){
    importModulePath = normalize(
      `/${options.path}/` +
        (options.flat ? '' : strings.dasherize(options.name) + '/') +
        strings.dasherize(options.name) +
        '.component',
    );
  }

  return buildRelativePath(normalize("/"+modulePath), importModulePath);
}

export function buildRoute(options: TemplateModuleSchema, modulePath: string,type:"module"| "component" ="module") {
  const relativeModulePath = buildRelativeModulePath(options, modulePath,type);

  if(type ==="module"){
    const moduleName = `${strings.classify(options.name)}Module`;
    const loadChildren = `() => import('${relativeModulePath}').then(m => m.${moduleName})`;

    return `{
      path: '${options.route}',
      loadChildren: ${loadChildren}
    }`;
  }
  else {
    const componentName = `${strings.classify(options.name)}Component`;
    const loadComponent = `() => import('${relativeModulePath.replace("src/app/","")}').then(m => m.${componentName})`;

    return `{
      path: '${options.route}',
      loadComponent: ${loadComponent},
      children:[]
    }`;
  }
}


export function addRouteDeclarationToNgModule(
  options: any,
  routingModulePath: Path | undefined,
  type:"component"|"module"="module"
): Rule {
  return (host: Tree) => {
    if (!options.route) {
      return host;
    }
    if (!options.module && !options.routesFilePath) {
      throw new Error('Module or  routesFilePath option required when creating a lazy loaded routing module.');
    }

    let path: string = routingModulePath ?? options?.routesFilePath ?? options?.module



    const sourceText = host.readText(path);

    let addDeclaration;
    if((options.componentName || options.addToChildrenArray)){
      addDeclaration = addRouteDeclarationToModuleOrRoutesFileOnChildrenProperty(
        // @ts-ignore
        ts.createSourceFile(path, sourceText, ts.ScriptTarget.Latest, true),
        path,
        buildRoute(options, options.module ?? options.routesFilePath,type),
        options.module
      ) as InsertChange;
    }

    else{
      addDeclaration = addRouteDeclarationToModule(
        // @ts-ignore
        ts.createSourceFile(path, sourceText, ts.ScriptTarget.Latest, true),
        path,
        buildRoute(options, options.module,type),
      ) as InsertChange;
    }


    const recorder = host.beginUpdate(path);
    recorder.insertLeft(addDeclaration.pos, addDeclaration.toAdd);
    host.commitUpdate(recorder);

    return host;
  };
}


export function getRoutingModuleOrRoutesPath(host: Tree, modulePath: string): Path | undefined {
  const ROUTES_FILE_EXT = '.routes.ts';
  // Check for routing module first
  let targetPath = modulePath.endsWith(ROUTING_MODULE_EXT)
    ? modulePath
    : modulePath.replace(MODULE_EXT, ROUTING_MODULE_EXT);

  if (host.exists(targetPath)) {
    return normalize(targetPath);
  }

  // If no routing module, look for routes.ts
  targetPath = modulePath.replace(MODULE_EXT, ROUTES_FILE_EXT);
  if (host.exists(targetPath)) {
    return normalize(targetPath);
  }

  // Log error if neither path exists
  console.error('Neither routing module path nor routes file exists:', targetPath);
  return undefined;
}


export let DevEnvFile = "src/environments/environment.dev.ts"
export let FormsServiceFilePath ="src/app/shared/services/forms/forms.service.ts"
export let i18nEnJSONFilePath = "src/assets/i18n/en.json"

export let WMLschematicMsgs ={
  removePlacehoders0:"and for the beginners remember to remove the arrows as they are placeholders and dont belong in javascript!!"
}

