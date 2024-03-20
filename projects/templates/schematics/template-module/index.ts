
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Path, normalize } from '@angular-devkit/core';
import {Rule,Tree,apply,applyTemplates,chain,filter,mergeWith,move,noop,schematic,strings,url} from '@angular-devkit/schematics';
import * as ts from '@schematics/angular/third_party/github.com/Microsoft/TypeScript/lib/typescript';

import { addImportToModule, addRouteDeclarationToModule } from '@schematics/angular/utility/ast-utils';
import { InsertChange } from '@schematics/angular/utility/change';
import {
  MODULE_EXT,
  ROUTING_MODULE_EXT,
  buildRelativePath,
  findModuleFromOptions,
} from '@schematics/angular/utility/find-module';
import { parseName } from '@schematics/angular/utility/parse-name';
import { validateClassName } from '@schematics/angular/utility/validation';
import { createDefaultPath } from '@schematics/angular/utility/workspace';
import { addRouteDeclarationToModuleOnChildrenProperty } from './my_helper';

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

function buildRelativeModulePath(options: TemplateModuleSchema, modulePath: string): string {
  const importModulePath = normalize(
    `/${options.path}/` +
      (options.flat ? '' : strings.dasherize(options.name) + '/') +
      strings.dasherize(options.name) +
      '.module',
  );

  return buildRelativePath(modulePath, importModulePath);
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

function addRouteDeclarationToNgModule(
  options: any,
  routingModulePath: Path | undefined,
): Rule {
  return (host: Tree) => {
    if (!options.route) {
      return host;
    }
    if (!options.module) {
      throw new Error('Module option required when creating a lazy loaded routing module.');
    }

    let path: string;
    if (routingModulePath) {
      path = routingModulePath;
    } else {
      path = options.module;
    }

    const sourceText = host.readText(path);
    let addRouteDeclarationToModulePredicate = options.componentName ? addRouteDeclarationToModuleOnChildrenProperty : addRouteDeclarationToModule
    const addDeclaration = addRouteDeclarationToModulePredicate(
      // @ts-ignore
      ts.createSourceFile(path, sourceText, ts.ScriptTarget.Latest, true),
      path,
      buildRoute(options, options.module),
    ) as InsertChange;

    const recorder = host.beginUpdate(path);
    recorder.insertLeft(addDeclaration.pos, addDeclaration.toAdd);
    host.commitUpdate(recorder);

    return host;
  };
}

function getRoutingModulePath(host: Tree, modulePath: string): Path | undefined {
  const routingModulePath = modulePath.endsWith(ROUTING_MODULE_EXT)
    ? modulePath
    : modulePath.replace(MODULE_EXT, ROUTING_MODULE_EXT);

  return host.exists(routingModulePath) ? normalize(routingModulePath) : undefined;
}

function buildRoute(options: TemplateModuleSchema, modulePath: string) {
  const relativeModulePath = buildRelativeModulePath(options, modulePath);
  const moduleName = `${strings.classify(options.name)}Module`;
  const loadChildren = `() => import('${relativeModulePath}').then(m => m.${moduleName})`;

  return `{ path: '${options.route}', loadChildren: ${loadChildren} }`;
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

      routingModulePath = getRoutingModulePath(host, options.module as string);
    }

    const parsedPath = parseName(options.path, options.name);
    options.name = parsedPath.name;
    options.path = parsedPath.path;
    validateClassName(strings.classify(options.name));
    options.name = options.name.replace(/^wml-/,"WML-")
    options.componentName ??= options.name
    options.componentName = options.componentName.replace(/^wml-/,"WML-")

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
      isLazyLoadedModuleGen && !options.fromLibrary ? schematic('component', componentOptions) : noop()
    ]);
  };
}



