import * as ts from '@schematics/angular/third_party/github.com/Microsoft/TypeScript/lib/typescript';
import { getRouterModuleDeclaration,findNodes } from '@schematics/angular/utility/ast-utils';
import { Change, InsertChange } from "@schematics/angular/utility/change";
import { FindNodeTypeByRecursionProps, findNodeTypeByRecursion, getTsMemberInfo, wmlFindChildNode } from '../utils/utils';


export function addRouteDeclarationToModuleOrRoutesFileOnChildrenProperty(
  source: ts.SourceFile,
  fileToAdd: string,
  routeLiteral: string,
  module?:string
): Change {
  const routerModuleExpr = getRouterModuleDeclaration(source);
  if (routerModuleExpr) {

    const scopeConfigMethodArgs = (routerModuleExpr as ts.CallExpression).arguments;
    if (!scopeConfigMethodArgs.length) {
      const { line } = source.getLineAndCharacterOfPosition(routerModuleExpr.getStart());
      throw new Error(
        `The router module method doesn't have arguments ` + `at line ${line} in ${fileToAdd}`,
      );
    }

    let routesArray: ts.ArrayLiteralExpression | undefined;
    const routesArg = scopeConfigMethodArgs[0];

    // Check if the route declarations array is
    // an inlined argument of RouterModule or a standalone variable
    if (ts.isArrayLiteralExpression(routesArg)) {
      routesArray = routesArg;
    } else {
      const routesVarNames = ["children","routes"];
      let routesVar;
      if (routesArg.kind === ts.SyntaxKind.Identifier) {
        routesVar = source.statements.filter(ts.isVariableStatement).find((v) => {
          return routesVarNames.includes(v.declarationList.declarations[0].name.getText());
        });
      }
      if (!routesVar) {
        const { line } = source.getLineAndCharacterOfPosition(routesArg.getStart());
        throw new Error(
          `No route declaration array was found that corresponds ` +
            `to router module at line ${line} in ${fileToAdd}`,
        );
      }

      routesArray = findNodes(
        routesVar,
        ts.SyntaxKind.ArrayLiteralExpression,
        1,
      )[0] as ts.ArrayLiteralExpression;
    }

    const occurrencesCount = routesArray.elements.length;
    const text = routesArray.getFullText(source);

    let route: string = routeLiteral;
    let insertPos = routesArray.elements.pos;

    if (occurrencesCount > 0) {
      const lastRouteLiteral = [...routesArray.elements].pop() as ts.Expression;
      const lastRouteIsWildcard =
        ts.isObjectLiteralExpression(lastRouteLiteral) &&
        lastRouteLiteral.properties.some(
          (n) =>
            ts.isPropertyAssignment(n) &&
            ts.isIdentifier(n.name) &&
            n.name.text === 'path' &&
            ts.isStringLiteral(n.initializer) &&
            n.initializer.text === '**',
        );

      const indentation = text.match(/\r?\n(\r?)\s*/) || [];
      const routeText = `${indentation[0] || ' '}${routeLiteral}`;

      // Add the new route before the wildcard route
      // otherwise we'll always redirect to the wildcard route
      if (lastRouteIsWildcard) {
        insertPos = lastRouteLiteral.pos;
        route = `${routeText},`;
      } else {
        insertPos = lastRouteLiteral.end;
        route = `,${routeText}`;
      }
    }

    return new InsertChange(fileToAdd, insertPos, route);
  } else if(fileToAdd.endsWith('routes.ts')){


    let routesArray:any
    if(!module){
      routesArray = findNodeTypeByRecursion(
        new FindNodeTypeByRecursionProps({
          node:source,
          printChildInfo:false,
          kind:(node,level)=>{
            let parent = node?.parent

            if(node.kind === ts.SyntaxKind.ArrayLiteralExpression && parent?.kind === ts.SyntaxKind.VariableDeclaration && parent?.getFullText().includes("Routes")){
              return true;
            }
            return false;

          }
        })
      )
    } else{
      routesArray = findNodeTypeByRecursion(
        new FindNodeTypeByRecursionProps({
          node:source,
          printChildInfo:false,
          kind:(node,level)=>{
            let ancestors = [node?.parent?.parent,node?.parent]
            let nodeFullText = node.getFullText()


            if(ancestors[0]?.kind === ts.SyntaxKind.ObjectLiteralExpression && ancestors[1].kind === ts.SyntaxKind.PropertyAssignment && ancestors[1].getFullText().trimStart().startsWith("children")  && node.kind === ts.SyntaxKind.ArrayLiteralExpression ){

              let correctEntry = findNodeTypeByRecursion(
                new FindNodeTypeByRecursionProps({
                  node: ancestors[0],
                  kind:(node,level)=>{
                    let nodeFullText = node.getFullText()
                    if(node.kind === ts.SyntaxKind.PropertyAssignment &&  (nodeFullText.trimStart().startsWith("loadComponent") || nodeFullText.trimStart().startsWith("loadChildren")) && nodeFullText.includes(module)){
                      return true;
                    }
                    return false;
                  }
                })
              )
              if(correctEntry.length>0){
                return true;
              }
              debugger

              return false;
            }
            return false;

          }
        })
      )
    }


    if(!routesArray){
      throw new Error("The routes file does not have a routes array or a children array at the target entry please provide one or file a bug report if you are certain the routesArray exists")
    }
    routesArray = routesArray[0]
    const occurrencesCount = routesArray.elements.length;
    const text = routesArray.getFullText(source);

    let route: string = routeLiteral;
    let insertPos = routesArray.elements.pos;

    if (occurrencesCount > 0) {
      const lastRouteLiteral = [...routesArray.elements].pop() as ts.Expression;
      const lastRouteIsWildcard =
        ts.isObjectLiteralExpression(lastRouteLiteral) &&
        lastRouteLiteral.properties.some(
          (n) =>
            ts.isPropertyAssignment(n) &&
            ts.isIdentifier(n.name) &&
            n.name.text === 'path' &&
            ts.isStringLiteral(n.initializer) &&
            n.initializer.text === '**',
        );

      const indentation = text.match(/\r?\n(\r?)\s*/) || [];
      const routeText = `${indentation[0] || ' '}${routeLiteral}`;

      // Add the new route before the wildcard route
      // otherwise we'll always redirect to the wildcard route
      if (lastRouteIsWildcard) {
        insertPos = lastRouteLiteral.pos;
        route = `${routeText},`;
      } else {
        insertPos = lastRouteLiteral.end;
        route = `,${routeText}`;
      }
    }

    return new InsertChange(fileToAdd, insertPos, route);




  } else{
    throw new Error(`No valid routing module or routes.ts file found in ${fileToAdd}`);
  }

}


