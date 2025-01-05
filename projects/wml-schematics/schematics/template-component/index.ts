import {Rule,apply,SchematicContext,SchematicsException,applyTemplates,url,move,chain,mergeWith,MergeStrategy,externalSchematic,Tree,noop} from '@angular-devkit/schematics';
import { strings, normalize, Path } from '@angular-devkit/core';
import {
  findModuleFromOptions,
  buildRelativePath,
} from '@schematics/angular/utility/find-module';

import { findNodes, insertImport } from '@schematics/angular/utility/ast-utils';
import * as ts from '@schematics/angular/third_party/github.com/Microsoft/TypeScript/lib/typescript';
import { InsertChange, Change } from '@schematics/angular/utility/change';
import { wmlUpdateFile } from '../utils/updateFile';
import { DevEnvFile, addRouteDeclarationToNgModule, getRoutingModuleOrRoutesPath, wmlCreateSourceFile } from '../utils/utils';


let needsIdUpdate= true
export type TemplateComponentSchema = {
  name: string;
  cpntType: string;
  path: string;
  styleType: string;
  project: string;
  standalone: boolean;
  isPropsChild: string;
  module: Path | undefined;
  flat?: boolean;
  type: string;
  isPageModule: boolean;
  isLayout: boolean;
  route?: string;
  routeKey?: string;
  routesFilePath?:string;
  idPrefix: string;
  routing:boolean
  addToChildrenArray?:boolean
};

function excludeSubFolders(options: TemplateComponentSchema, host: Tree, context: SchematicContext) {
  const targetDir = normalize(`/${options.path}/${strings.dasherize(options.name)}`);
  host.getDir(targetDir).visit(filePath => {
    if (!filePath.startsWith(targetDir)) {
      // Skip files outside the target directory
      return;
    }
    let relativePath = filePath.replace(targetDir, '');
    relativePath = normalize(relativePath);
    let relativePathSegments = relativePath.split('/');

    if (relativePathSegments.length > 2) {
      // It's inside a subdirectory, so delete it
      host.delete(filePath);
    }
  });
}

export function generateComponentTemplate(
  options: TemplateComponentSchema
): Rule {
  return async (host: Tree) => {

    if(options.isPropsChild){
      options.isPropsChild = options.isPropsChild
    }
    options.idPrefix =  strings.camelize(options.name)
    options.name = options.name.replace(/^wml-/,"WML-")
    options.type = 'Component';
    let subFolder =options.cpntType.match(/(?:default|library)-(.+)$/)?.[1] ??""


    const baseTemplateSource = apply(url('./files'), [
      applyTemplates({
        ...strings,
        ...options,
      }),
      move(normalize(`/${options.path}/${strings.dasherize(options.name)}`)),
    ]);

    let templateSources = [mergeWith(baseTemplateSource, MergeStrategy.Overwrite)];

    if (subFolder !== "") {
      const subTemplateSource = apply(url(`./files/${subFolder}`), [
        applyTemplates({
          ...strings,
          ...options,
        }),
        move(normalize(`/${options.path}/${strings.dasherize(options.name)}`)),
      ]);
      // Add the subTemplateSource to overwrite base templates if subFolder is specified
      templateSources.push(mergeWith(subTemplateSource, MergeStrategy.Overwrite));
    }


    let routingModulePath: Path | undefined;

    if(options.route){
      routingModulePath = getRoutingModuleOrRoutesPath(host, options.module ?? options.routesFilePath as string);
      options.addToChildrenArray = true
      options.isPageModule = true
    }

    let appIntegration = noop()
    if(options.isPageModule){
      appIntegration = modifyAppToAddNewPage(options)
    }
    else if(options.isLayout){
      appIntegration = (tree: Tree) => {
        applyAdditionalAppFeaturesForNewComponent(options, tree);
      }
    }
    else if(!options.isLayout){
      appIntegration = addDeclarationToModuleCpntsArr(options)
    }
    return  chain([
      externalSchematic('@schematics/angular', 'component', {
        name: options.name,
        standalone: options.standalone,
        path: options.path,
        project: options.project,
        style: 'scss',
        skipImport: !options.isPageModule,
        // skipImport:true,
        module:options.module
      }),
      options.route && options.standalone ? addRouteDeclarationToNgModule(options, routingModulePath,"component") : noop(),
      appIntegration,
      ...templateSources,
      (tree: Tree, _context: SchematicContext) => {
        excludeSubFolders(options, tree, _context);
        return tree;
      }

    ])
  }

};



let modifyAppToAddNewPage = (options: TemplateComponentSchema) => {
  return (tree: Tree) => {
    addScssToAppStyles(options, tree);
    addRouteEntryToEnvArr(options, tree);

    return tree;
  };
};

function addDeclarationToModuleCpntsArr(options: TemplateComponentSchema) {
  return (tree: Tree) => {
    options.module = findModuleFromOptions(tree, {
      ...options,
      standalone:options.isPageModule || options.standalone
    });

      let modulePath = options.module?.toString() as string;

      let file = tree.read(modulePath);
      if (!file) {
        throw new SchematicsException(`${modulePath} not found`);
      }
      let moduleFile = ts.createSourceFile(
        modulePath,
        file.toString(),
        ts.ScriptTarget.Latest,
        true
      );
      let entitiesVar: any

      if(options.standalone !== true){
        entitiesVar = moduleFile.statements
        .filter(ts.isVariableStatement)
        .find((v) => {
          return (
            ['components','cpnts'].includes(v.declarationList.declarations[0].name.getText())
          );
        });
      } else{
        entitiesVar = moduleFile.statements
        .filter(ts.isVariableStatement)
        .find((v) => {
          return (
            ['modules'].includes(v.declarationList.declarations[0].name.getText())
          );
        });
      }
      let cpntsArr = findNodes(
        entitiesVar,
        ts.SyntaxKind.ArrayLiteralExpression,
        1
      )[0] as ts.ArrayLiteralExpression;
      let occurrencesCount = cpntsArr.elements.length;
      let text = cpntsArr.getFullText(moduleFile);

      let componentVar = strings.classify(options.name) + 'Component';
      let insertPos = cpntsArr.elements.pos;
      let finalVar = componentVar;
      if (occurrencesCount > 0) {
        let lastRouteLiteral = [...cpntsArr.elements].pop() as ts.Expression;
        let indentation = text.match(/\r?\n(\r?)\s*/) || [];
        let routeText = `${indentation[0] || ' '}${componentVar}`;
        insertPos = lastRouteLiteral.end;
        finalVar = `,${routeText}`;
      }
      let changes: Change[] = [new InsertChange(modulePath, insertPos, finalVar)];

      // add import path
      addTsImportPath(options, modulePath, changes, moduleFile, componentVar, tree);

    applyAdditionalAppFeaturesForNewComponent(options, tree);
    return tree;
  };
}

let updateIdPrefixObj =(options:TemplateComponentSchema,tree:Tree)=>{
  if(!needsIdUpdate || options.cpntType ==="library"){
    return
  }
  try{

    let {devEnv,targetSourceFile,targetPath} = grabDevEnvClass(tree);
    let idPrefixVar = devEnv.members.find((prop) => {
      return prop.name?.getText() === 'idPrefix';
    }) as ts.ClassElement;
    let objlit0 = idPrefixVar.getChildren().find((child) => {
      return child.kind === ts.SyntaxKind.ObjectLiteralExpression;
    }) as ts.Node;
    let obj0 = findNodes(
      objlit0,
      ts.SyntaxKind.ObjectLiteralExpression,
      1
    )[0] as ts.ObjectLiteralExpression;

    let key0 = strings.camelize(options.idPrefix);
    let kvPair = `${key0}:"${strings.capitalize(key0)}_"`;
    updateTsObject(obj0, targetSourceFile, targetPath, tree,kvPair);

  }
  catch(e){
    console.log(e)
  }
}
let addRouteEntryToEnvArr = (options: TemplateComponentSchema, tree: Tree) => {
  try {
    let objInfo = grabDevEnvClass(tree);
    updateIdPrefixObj(options,tree)
    objInfo = grabDevEnvClass(tree);

    let navVar = objInfo.devEnv.members.find((prop) => {
      return prop.name?.getText() === 'nav';
    }) as ts.ClassElement;

    let iife = navVar.getChildren().find((child) => {
      return ts.SyntaxKind.CallExpression === child.kind;
    }) as ts.Node;
    let expr = iife.getChildren().find((child) => {
      return ts.SyntaxKind.ParenthesizedExpression === child.kind;
    }) as ts.Node;
    let arrowFn0 = expr.getChildren().find((child) => {
      return child.kind === ts.SyntaxKind.ArrowFunction;
    }) as ts.Node;
    let block0 = arrowFn0.getChildren().find((child) => {
      return child.kind === ts.SyntaxKind.Block;
    }) as ts.Node;
    let syntaxList0 = block0.getChildren().find((child) => {
      return child.kind === ts.SyntaxKind.SyntaxList;
    }) as ts.Node;
    let var0 = syntaxList0.getChildren().find((child) => {
      let textBody = child.getFullText();
      return (
        child.kind === ts.SyntaxKind.VariableStatement &&
        textBody.includes('urls')
      );
    }) as ts.Node;
    let vardeclist0 = var0.getChildren().find((child) => {
      return child.kind === ts.SyntaxKind.VariableDeclarationList;
    }) as ts.Node;
    let syntaxlist1 = vardeclist0.getChildren().find((child) => {
      return child.kind === ts.SyntaxKind.SyntaxList;
    }) as ts.Node;
    let vardec0 = syntaxlist1.getChildren().find((child) => {
      return child.kind === ts.SyntaxKind.VariableDeclaration;
    }) as ts.Node;
    let objlit0 = vardec0.getChildren().find((child) => {
      return child.kind === ts.SyntaxKind.ObjectLiteralExpression;
    }) as ts.Node;
    let syntaxList1 = objlit0.getChildren().find((child) => {
      return child.kind === ts.SyntaxKind.SyntaxList;
    }) as ts.Node;
    let propAssign0 = syntaxList1.getChildren().find((child) => {
      return child.kind === ts.SyntaxKind.PropertyAssignment;
    }) as ts.Node;
    let objlit1 = propAssign0.getChildren().find((child) => {
      return child.kind === ts.SyntaxKind.ObjectLiteralExpression;
    }) as ts.Node;

    let route = '/' + options.route;
    let routeKey = (options.routeKey ?? strings.camelize(options.name)) as string;


    if(routeKey === ""){
      return
    }
    let navObj = findNodes(
      objlit1,
      ts.SyntaxKind.ObjectLiteralExpression,
      1
    )[0] as ts.ObjectLiteralExpression;
    let componentVar = `${routeKey}:"${route}"`;
    updateTsObject(navObj, objInfo.targetSourceFile, objInfo.targetPath, tree,componentVar);
    needsIdUpdate = false
  } catch (e) {

    return;
  }
};

function applyAdditionalAppFeaturesForNewComponent(options: TemplateComponentSchema, tree:Tree) {
  addScssToAppStyles(options, tree);

  updateIdPrefixObj(options, tree);
}

function addScssToAppStyles(options: TemplateComponentSchema, tree: Tree) {
  try {
    let filePath = getFilePath(options);
    let componentLocation = buildRelativePath('src', filePath);
    let update0 = componentLocation.split('/');

    let cpntFileName = update0.at(-1);
    let cpntName = update0.at(-2);
    let cpntNames = (update0.pop() as string).split('.');
    cpntNames.pop();
    update0.shift();
    let cssLocation = update0.join('/');
    let phoneScss = cpntFileName + '.phone.scss';
    // let tabletScss = cpntFileName.split(".ts") + ".tablet.scss";
    let globalScss = cpntFileName + '.global.scss';
    let scssFiles = [globalScss, phoneScss].map((fileName) => {
      return [cssLocation, fileName].join('/');
    });
    let resultString = scssFiles.reduce((acc, x) => {
      return acc + '\n@import "' + x + '";';
    }, '// ' + cpntName);

    let appStylesPath = normalize('src/styles.scss');
    let appStylesFile = tree.read(appStylesPath);
    if (!appStylesFile) {
      throw new SchematicsException(`${appStylesPath} not found`);
    }
    let appStylesFileString = appStylesFile.toString();
    let scssEndMarkerRegex =
      /\/\/ media-query-marker \(IMPT DONT DELETE THIS LINE\)/;
    let appStylesFileStringArray =
      appStylesFileString.split(scssEndMarkerRegex);
    if (appStylesFileStringArray.length !== 2) {
      return;
    }

    appStylesFileStringArray.splice(
      1,
      0,
      '// media-query-marker (IMPT DONT DELETE THIS LINE)'
    );
    appStylesFileStringArray.splice(1, 0, '\n\n');
    appStylesFileStringArray.splice(1, 0, resultString);
    let resultAppStylesFileString = appStylesFileStringArray.join('');

    tree.overwrite(appStylesPath, resultAppStylesFileString);
  } catch (e) {
    return;
  }
}

function grabDevEnvClass(tree:Tree) {
  let targetPath = normalize(DevEnvFile);
  let targetFile = tree.read(targetPath);
  if (!targetFile) {
    throw new SchematicsException(`${targetPath} not found`);
  }
  let targetSourceFile = wmlCreateSourceFile(targetPath,tree)
  let devEnv = targetSourceFile?.statements
    ?.filter(ts.isClassDeclaration)
    .find((v) => {
      return v.name?.getText() === 'DevEnv';
    }) as ts.ClassDeclaration;
  return {
    devEnv,targetPath,targetSourceFile
  }
}

function addTsImportPath(
  options: TemplateComponentSchema,
  modulePath: string,
  changes: Change[],
  moduleFile: ts.SourceFile,
  componentVar: string,
  tree: Tree
) {
  let filePath = getFilePath(options);
  let importPath = buildRelativePath(modulePath, filePath);
  changes.push(insertImport(moduleFile, modulePath, componentVar, importPath));

  wmlUpdateFile(tree, modulePath, changes);
  return filePath;
}

function updateTsObject(
  obj0: ts.ObjectLiteralExpression,
   targetSourceFile: ts.SourceFile,
   targetPath: Path, tree:Tree,value:string) {
  let occurrencesCount = obj0.properties.length;
  let text = obj0.getFullText(targetSourceFile);
  let insertPos = obj0.properties.pos;
  let finalVar = value;
  if (occurrencesCount > 0) {
    let lastRouteLiteral = [
      ...obj0.properties,
    ].pop() as ts.ObjectLiteralElementLike;
    let indentation = text.match(/\r?\n(\r?)\s*/) || [];
    let routeText = `${indentation[0] || ' '}${value}`;
    insertPos = lastRouteLiteral.end;
    finalVar = `,${routeText}`;
  }
  let changes: Change[] = [new InsertChange(targetPath, insertPos, finalVar)];
  wmlUpdateFile(tree, targetPath, changes);
}

function getFilePath(options: TemplateComponentSchema) {
  return (
    `/${options.path}/` +
    (options.flat ? '' : strings.dasherize(options.name) + '/') +
    strings.dasherize(options.name) +
    (options.type ? '.' : '') +
    strings.dasherize(options.type)
  );
}
