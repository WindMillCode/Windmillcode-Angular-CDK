import * as ts from '@schematics/angular/third_party/github.com/Microsoft/TypeScript/lib/typescript';
import { getRouterModuleDeclaration,findNodes } from '@schematics/angular/utility/ast-utils';
import { Change, InsertChange } from "@schematics/angular/utility/change";


export function addRouteDeclarationToModuleOnChildrenProperty(
  source: ts.SourceFile,
  fileToAdd: string,
  routeLiteral: string,
): Change {
  const routerModuleExpr = getRouterModuleDeclaration(source);
  if (!routerModuleExpr) {
    throw new Error(
      `Couldn't find a route declaration in ${fileToAdd}.\n` +
        `Use the '--module' option to specify a different routing module.`,
    );
  }
  const scopeConfigMethodArgs = (routerModuleExpr as ts.CallExpression).arguments;
  if (!scopeConfigMethodArgs.length) {
    const { line } = source.getLineAndCharacterOfPosition(routerModuleExpr.getStart());
    throw new Error(
      `The router module method doesn't have arguments ` + `at line ${line} in ${fileToAdd}`,
    );
  }

  let routesArr: ts.ArrayLiteralExpression | undefined;
  const routesArg = scopeConfigMethodArgs[0];

  // Check if the route declarations array is
  // an inlined argument of RouterModule or a standalone variable
  if (ts.isArrayLiteralExpression(routesArg)) {
    routesArr = routesArg;
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

    routesArr = findNodes(
      routesVar,
      ts.SyntaxKind.ArrayLiteralExpression,
      1,
    )[0] as ts.ArrayLiteralExpression;
  }

  const occurrencesCount = routesArr.elements.length;
  const text = routesArr.getFullText(source);

  let route: string = routeLiteral;
  let insertPos = routesArr.elements.pos;

  if (occurrencesCount > 0) {
    const lastRouteLiteral = [...routesArr.elements].pop() as ts.Expression;
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
}
