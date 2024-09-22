import { Path, normalize } from '@angular-devkit/core';
import {Rule,Tree,apply,applyTemplates,chain,filter,mergeWith,move,noop,schematic,strings,url} from '@angular-devkit/schematics';
import * as ts from '@schematics/angular/third_party/github.com/Microsoft/TypeScript/lib/typescript';

import { addImportToModule } from '@schematics/angular/utility/ast-utils';
import { InsertChange } from '@schematics/angular/utility/change';
import {

  findModuleFromOptions,
} from '@schematics/angular/utility/find-module';
import { parseName } from '@schematics/angular/utility/parse-name';
import { validateClassName } from '@schematics/angular/utility/validation';
import { createDefaultPath } from '@schematics/angular/utility/workspace';

import { addRouteDeclarationToNgModule, buildRelativeModulePath,  getRoutingModuleOrRoutesPath } from '../utils/utils';

export type TemplateModuleSchema=  {
  name:string
  componentName:string
  path:string
  project:string
  routing:string
  routingScope:"Child"| "Root"
  route:string
  routeKey:string
  flat:boolean
  commonModule:string
  module:string
  fromLibrary:boolean
}


function addImportToNgModule(options: TemplateModuleSchema): Rule {
  return (host: Tree) => {
    if (!options.module) {
      return host;
    }

    const modulePath = options.module;

    const sourceText = host.readText(modulePath);
    const source = ts.createSourceFile(modulePath, sourceText, ts.ScriptTarget.Latest, true);

    const relativePath = buildRelativeModulePath(options, modulePath);
    const changes = addImportToModule(
      source,
      modulePath,
      strings.classify(`${options.name}Module`),
      relativePath,
    );

    const recorder = host.beginUpdate(modulePath);
    for (const change of changes) {
      if (change instanceof InsertChange) {
        recorder.insertLeft(change.pos, change.toAdd);
      }
    }
    host.commitUpdate(recorder);

    return host;
  };
}








export default function (options: TemplateModuleSchema): Rule {
  return async (host: Tree) => {
    if (options.path === undefined) {
      options.path = await createDefaultPath(host, options.project as string);
    }
    if (options.module) {
      // @ts-ignore
      options.module = findModuleFromOptions(host, options);
    }

    let routingModulePath: Path | undefined;
    const isLazyLoadedModuleGen = !!( !!(options.route === "" ? true:options.route ) && options.module);
    if (isLazyLoadedModuleGen) {

      routingModulePath = getRoutingModuleOrRoutesPath(host, options.module as string);
    }

    const parsedPath = parseName(options.path, options.name);
    options.name = parsedPath.name;
    options.path = parsedPath.path;
    validateClassName(strings.classify(options.name));
    options.name = options.name.replace(/^wml-/,"WML-")
    options.componentName ??= options.name
    options.componentName = options.componentName.replace(/^wml-/,"WML-")
    let generateComponent = isLazyLoadedModuleGen && !options.fromLibrary

    const templateSource = apply(url('./files'), [
      options.routing || (isLazyLoadedModuleGen && routingModulePath)
        ? noop()
        : filter((path) => !path.endsWith('-routing.module.ts.template')),
      applyTemplates({
        ...strings,
        'if-flat': (s: string) => (options.flat ? '' : s),
        lazyRoute: isLazyLoadedModuleGen,
        lazyRouteWithoutRouteModule: isLazyLoadedModuleGen && !routingModulePath,
        lazyRouteWithRouteModule: isLazyLoadedModuleGen && !!routingModulePath,
        generateComponent,
        ...options,
      }),
      move(parsedPath.path),
    ]);

    const moduleDasherized = strings.dasherize(options.name);
    const modulePath = normalize(`${
      !options.flat ? moduleDasherized + '/' : ''
    }${moduleDasherized}.module.ts`);


    const componentOptions: any = {
      module: modulePath,
      flat: options.flat,
      name: options.componentName ,
      path: options.path+"/"+options.name,
      project: options.project,
      isPageModule:true,
      route:options.route,
      routeKey:options.routeKey
    };



    return chain([
      !isLazyLoadedModuleGen  ? addImportToNgModule(options) : noop(),
      !options.fromLibrary ? addRouteDeclarationToNgModule(options, routingModulePath) : noop(),
      mergeWith(templateSource),
      generateComponent ? schematic('component', componentOptions) : noop()
    ]);
  };
}



