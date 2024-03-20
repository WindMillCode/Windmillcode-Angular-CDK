# Overview


The Windmillcode Angular Schematic library serves as a foundational toolkit for Angular web application development, establishing a solid baseline from which developers can construct and expand their projects. Central to this library is the concept of WMLUIProperty, a fundamental element that encapsulates the essence of web application components, down to the finest detail. This library not only streamlines the development process by providing pre-defined subclasses like WMLRoute for routing, WMLView for dynamic components, and WMLAnimateUIProperty for CSS animations but also ensures consistency and scalability across your application. Dive into the documentation to explore how these building blocks can be leveratively orchestrated to create robust, maintainable, and dynamic web applications.


# Changelog

## 0.8.0
  * module page generation made so that no furhter adjustments are required on the part of the developer
## 0.9.0
  * updated to v16
## 0.9.2
  * remove configService
## 0.10.0
  * ensure the package.json deps where >= not >
## 0.10.1
  * added scripts section in package.json
## 0.10.2
  * add --prod to the build script for npx ng build in package.json
## 0.11.0
  * fixed prod flag
## 1.0.0
  * templates.components now depends on wml-components-base to be available in the application
## 1.0.1
  * add missing import for wml-components base
## 1.1.0
  * changed import to @windmillcode/angular-wml-components-base
  * scss support for libs and non libs
## 1.2.2
  * big change, modified component index.ts to add the component to the right place in the ngModules array
  * fixed an error concering generating default components

## 1.2.4
  * When  creating components the styles.scss file gets updated with the components media query files

## 1.2.5
  * When creating page module components, it automatically add the route the environment.dev.ts
  in addition if it cant find the appropriate markings, there is a noop for updating styles and arrays

## 1.2.6
    * insured global.scss is imported first before phone.scss

## 1.3.0
  * created service method schematics where the application is updated with yr schematic
  * to use

```
npx ng g @windmillcode/angular-templates:service-method --name [YOUR SERVICE METHOD NAME HERE] --service-name [NAME OF THE SERVICE] --api-route [/YOUR/API/ROUTE/HERE]

```
## 1.3.1
  * fixed an error by updating wml-components-base dependency

## 1.3.2
  * corrected with creating layout where the route is ""
  * now if the schematic finds routes or children variable it will update the array accordingly
  * reanme all routes to layoutRoutes in your layout-routing moudle

## 1.4.0
  * fixed a big where library generation was throwing errors

## 1.4.1
  * updated library schematics to full features of library

## 1.4.2
  * if a lib name starts with "wml-" it wil capitalize the WML according to standard

## 1.4.3
  * fixed color_pallete in lib

## 1.4.4
  * reordered aux service method classes for ergnonics

## 1.5.0
  * added idPrefix to components template, if a routeKey is missing,(coming from module) then the camelized cpnt name is used
  * also if routeKey is undefined, it uses strings.camelize(options.name) to keep conformity
  *  added RecursiveSnakeCaseType to service method template so that users will not have to specify snake_case properties in python
  * added id support for default and library components
  * added isIdIncluded default true CLI pamareter for devs who want to toggle the feature

## 1.5.3
* corrected some things

## 16.2.4-0
* ensured id and nav infomration is properly added

## 16.2.5-1
* made update concerning service method imports

## 16.2.6-0
* made component.scss template file cleaner

## 16.2.6-1
* [MAJOR update] template schema to generate a form including updates to formService and environmentfile
* patch changes to template compenet schema to get some features working properly

## 16.2.62
* [PATCH] - initalize mainForm

## 16.2.63
* [PATCH] added id for each field to help the QA folks!

## 16.2.64
* [PATCH] corrected issues


## 16.2.70
* [UPDATE]
  * ad  ded template-scroll to  generate template scroll
  * update template-service method to support default, paging and scroll transformation types

  ## 16.2.72
* updated template-scroll to support updates of entities
* fixed errors

## 16.2.73
* corrected a bug when id and nav info are added to environment.dev.ts
* make fixes the realted all entities to name instead of service name or service method name

## 16.2.74
* corrected issue with scrolling obj, so that when the limit is reached scoll sucessfully stops
%!(EXTRA string=
## v16.2.80
 * updated package to reflect the version  16.2.80 of @angular/core package),
## v16.2.80
 * updated package to reflect the version  16.2.80 of @angular/core package,
## v16.2.90
 * updated package to reflect the version  16.2.90 of @angular/core package,
## v16.2.91
 * updated package to reflect the version  16.2.91 of @angular/core package

## v16.2.92
  * updated spec files to reflect the new way test cases are handled

## v16.2.93
  * further updates to spec file test cases
,
## v16.2.93
 * updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,
## v16.2.100
 * updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,
## v16.2.110
 * updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,
## v16.2.120
 * updated package to conform with @windmillcode/angular-wml-components-base for unit testing features

## 16.2.121
  * added fix with the change from version 16.2.12 were the path to collection.json is needed in package.json even though it was not before
  * in addition correct an error on service spec file generation

## 16.2.122
  * added unit test generation for service method generation for the default service method

## 16.2.122
  * added unit test generation for template form and fixed unit test generation for service method
,
## v17.0.10
 * updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,
## v17.0.11
 * updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,
## v17.0.12
 * updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,
## v17.0.20
 * updated package to reflect the version  ^17.0.2 of @angular/core package

## v17.0.21
  * fixed an error where schematics was forgotten in the package json needed for schematics to work

## v17.0.22
  * fixed an error in form generation schematics where form was was not finding the correct spect.ts file
,
## v17.0.40
 * updated package to reflect the version  ^17.0.4 of @angular/core package,
## v17.0.50
 * updated package to reflect the version  ^17.0.5 of @angular/core package,
## v17.0.60
 * updated package to reflect the version  ^17.0.6 of @angular/core package,
## v17.0.70
 * updated package to reflect the version  ^17.0.7 of @angular/core package

## v17.0.71
* made the form variables more specifc so one component can have multiple forms

## v17.0.72
* fixed a bug where initForm was disregarded

## v17.0.73
* performDependencyInjection also check if the openBrack has the di string

## v17.0.74
* template forms, added simple fields  and complex fields options to shorten and simply code

## v17.0.75
* update template service method where you can select your own http method in addition correct the
update formatted as it adds test cases to the code however you will have to put in the markers
also updated template service spec .ts template to support the new markers

## v17.0.76
* corrected an issue in template:scroll-object

## v17.0.77
* coorected an issue with template:service-method where certain http methods did not get the correct body
,
## v17.0.7200
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.0.7300
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.0.80
 * updated package to reflect the version  ^17.0.8 of @angular/core package,
## v17.0.8100
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.0.8102
 * updated package to conform with @windmillcode/angular-wml-components-base

## v17.0.8103
* [FIX] generating the service method puts a comma between the args
* [FIX] the transformation methods from list page scroll, should build w/o errors
,
## v17.0.8103
 * updated package to conform with @windmillcode/angular-wml-components-base

## v17.0.8104
* correct tests cases for service method generation
,
## v17.0.9000
 * updated package to conform with @windmillcode/angular-wml-components-base

## v17.0.9001

[UPDATE] -in template-component added generateIdPrefix for idPrefix method
,
## v17.0.9001
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.1.0000
 * updated package to reflect the version  ^17.1.0 of @angular/core package

 ## v17.1.1
 * removed the reuqired --api-route from template service method leaving it up to you to replace the dummy code
,
## v17.1.2
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.1.1000
 * updated package to conform with @windmillcode/angular-wml-components-base

## v17.1.1001
* [FIX] corrected an error in template:service-method where the http method was not being added to the service method
* [UPDATE] - added useDataSourceStrategy to template:service-method  and serviceMethodUseDataSourceStrategy to template:scroll to allow for the use of the data source strategy which means your request to the API gets cache improving performance by nearly 100x in some cases

## v17.1.1002 [1/31/24]
* [BREAKING CHANGE] - refactored scroll logic so transformationType scrolling is useless new method according to docs

,
## v17.1.2000 [2/5/24]
 * updated package to reflect the version  ^17.1.2 of @angular/core package,
## v17.1.2001 [2/8/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.1.3000 [2/8/24]
 * updated package to reflect the version  ^17.1.3 of @angular/core package,
## v17.2.1000 [2/17/24]
 * updated package to reflect the version  ^17.2.1 of @angular/core package,
## v17.2.2000 [2/23/24]
 * updated package to reflect the version  ^17.2.2 of @angular/core package,
## v17.2.2001 [2/23/24]
 * updated package to reflect the version  ^17.2.2 of @angular/core package,
## v17.2.3000 [2/28/24]
 * updated package to reflect the version  ^17.2.3 of @angular/core package

## v17.2.3001 [3/2/24]
* added WMLComponentBaseZero logic to @windmillcode/angular-templates:component
and instead of params now we have props
- Added `WMLComponentBaseZero` logic to `@windmillcode/angular-templates:component`. Now, instead of using `params`, components will utilize `props`.
- Updated `__name@dasherize__.component.ts.template` to reflect the change from `params` to `props`:
  - Input property `params` is now `props`.
  - The class `<%= classify(name) %>Params` has been renamed to `<%= classify(name) %>Props`.
  - All instances of `params` within the class are now `props`.
- Added a new template file under the `zero` subdirectory: `__name@dasherize__.component.spec.ts.template` to handle specific tests for components following the `library-zero` or `default-zero` type.
- Adjustments in `__name@dasherize__.component.ts.template` within the `zero` subdirectory to align with the new `props` logic.
- The schematic's `index.ts` file now imports additional modules like `SchematicContext`, `forEach`, and `FileEntry` to support new functionalities.
- Introduced a new function `excludeSubFolders` in the schematic's `index.ts` to handle directory cleanup post-generation.
- Updated `schema.json` to include a new enum value for `cpntType` and introduce the `isPropsChild` boolean property.
- Removed the template file related to scrolling functionalities in the service-method schematic as it seems to be no longer needed.
,
## v17.2.3001 [3/2/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.2.3002 [3/5/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.2.4000 [3/8/24]
 * updated package to reflect the version  ^17.2.4 of @angular/core package,
## v17.2.4001 [3/12/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
 (deleted)
## v17.2.4002 [3/12/24]
 * updated package to conform with @windmillcode/angular-wml-components-base

## v17.2.4003 [3/13/24]
[BREAKING CHANGE] Modified the HTML template in __name@dasherize__.component.html.template by adding a new section element with class 'Pod0'.
[UPDATE] In the index.ts file, updated the deprecated option warning from 'isParamsChild' to 'isPropsChild' and removed a console.log statement.
[BREAKING CHANGE] Changed the default value in the schema.json for the 'preset scss' option from 'type0' to 'none'.


## v17.2.4003 [3/13/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.2.4004 [3/13/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.3.0 [3/17/24]
 * updated package to reflect the version  ^17.3.0 of @angular/core package
