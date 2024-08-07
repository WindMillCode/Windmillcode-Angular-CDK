# WML Schematics

The Angular WML Schematics library serves as a foundational toolkit for Angular web application development, establishing a solid baseline from which developers can construct and expand their projects. Central to this library is the concept of WMLUIProperty, a fundamental element that encapsulates the essence of web application components, down to the finest detail. This library not only streamlines the development process by providing pre-defined subclasses like WMLRoute for routing, WMLView for dynamic components, and WMLAnimateUIProperty for CSS animations but also ensures consistency and scalability across your application. Dive into the documentation to explore how these building blocks can be orchestrated to create robust, maintainable, and dynamic web applications.



## Installation

Terminal window <code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">-d</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">@windmillcode/angular-wml-schematics</span></div></div></code> 

## Usage

As you follow along close each terminal and open a new one so you can start in root



### To create a layout

Terminal window<code><div class="ec-line"><div class="code"><span style="--0:#C5E478;--1:#3C63B3">cd</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">src/app/layouts</span></div></div><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">npx</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">ng</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">g</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">@windmillcode/angular-wml-schematics:component</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--name=custom-layout</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--routing=true</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--route=layout</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--routes-file-path=src/app/app.routes.ts</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--standalone=true</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--cpnt-type=default</span></div></div></code>

then navigate to the layout route  and check for the element in dev tools
you will need to add a router-outlet



### To create a page

Terminal window<code><div class="ec-line"><div class="code"><span style="--0:#C5E478;--1:#3C63B3">cd</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">src/app/pages</span></div></div><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">npx</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">ng</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">g</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">@windmillcode/angular-wml-schematics:component</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--name=custom-page</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--route-key=upload</span><span style="--0:#D6DEEB;--1:#403F53">  </span><span style="--0:#82AAFF;--1:#3C63B3">--route=page</span><span style="--0:#D6DEEB;--1:#403F53">  </span><span style="--0:#82AAFF;--1:#3C63B3">--routes-file-path=src/app/app.routes.ts</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--standalone=true</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--cpnt-type=default</span></div></div></code>

you would first create a layout then the page then add the page as a child of the layout route



### To create a container component

Terminal window<code><div class="ec-line"><div class="code"><span style="--0:#C5E478;--1:#3C63B3">cd</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">src/app/shared/components</span></div></div><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">npx</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">ng</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">g</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">@windmillcode/angular-wml-schematics:component</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--name</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">container-zero</span><span style="--0:#D6DEEB;--1:#403F53">  </span><span style="--0:#82AAFF;--1:#3C63B3">--is-props-child=true</span><span style="--0:#D6DEEB;--1:#403F53">  </span><span style="--0:#82AAFF;--1:#3C63B3">--module=shared</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--is-page-module=false</span></div></div></code>



### To make a service

Terminal window<code><div class="ec-line"><div class="code"><span style="--0:#C5E478;--1:#3C63B3">cd</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">src/app/shared/services</span></div></div><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">npx</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">ng</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">g</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">@windmillcode/angular-wml-schematics:service</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--name</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">custom</span></div></div></code>



### To create a service method

Terminal window<code><div class="ec-line"><div class="code"><span style="--0:#C5E478;--1:#3C63B3">cd</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">src/app/shared/services/custom</span></div></div><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">npx</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">ng</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">g</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">@windmillcode/angular-wml-schematics:service-method</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--name</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">getJsonData</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--service-name</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">custom</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--api-route=</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#ECC48D;--1:#9B504E">/v2/list.json</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--http-method</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">get</span></div></div></code>



### To create a form

You will need a component and service to existTerminal window<code><div class="ec-line"><div class="code"><span style="--0:#C5E478;--1:#3C63B3">cd</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">src/app/shared/components/container-zero</span></div></div><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">npx</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">ng</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">g</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">@windmillcode/angular-wml-schematics:form</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--api-call</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">this.customService.getJsonData</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--fields</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">firstName</span><span style="--0:#D6DEEB;--1:#403F53">  </span><span style="--0:#ECC48D;--1:#3C63B3">lastName</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">address</span></div></div></code>

**Open A New terminal to try out the commands and see how the project gets updated

<iframe src="https://stackblitz.com/edit/stackblitz-starters-pk1cgq?embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

## References



### template-component Schematic

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>name</td><td>string</td><td>Specifies the name of the component.</td></tr><tr><td>path</td><td>string</td><td>The path where the new component will be generated.</td></tr><tr><td>project</td><td>string</td><td>The name of the Angular project within which the component should be created.</td></tr><tr><td>cpntType</td><td>string</td><td>Determines the type of component to generate. Options include <code dir="auto">default</code>, <code dir="auto">library</code>, <code dir="auto">default-zero</code>, and <code dir="auto">library-zero</code>.</td></tr><tr><td>isIdIncluded</td><td>boolean</td><td>Indicates whether the component selector should include an ID. Defaults to <code dir="auto">true</code>.</td></tr><tr><td>isPropsChild</td><td>boolean</td><td>Specifies whether the component is a presentation or a container.</td></tr><tr><td>standalone</td><td>boolean</td><td>Indicates whether the generated component is standalone. Defaults to <code dir="auto">false</code>.</td></tr><tr><td>styleType</td><td>string</td><td>Specifies the preset SCSS style to use. Options include <code dir="auto">type0</code>, <code dir="auto">type1</code>, and <code dir="auto">none</code>. Default is <code dir="auto">none</code>.</td></tr><tr><td>routing</td><td>boolean</td><td>Indicates whether to create a routing module. Defaults to <code dir="auto">false</code>.</td></tr><tr><td>routeKey</td><td>string</td><td>The route that gets added to the innerNav.urls object in the environment.dev.ts file.</td></tr><tr><td>route</td><td>string</td><td>The route path for a lazy-loaded module.</td></tr><tr><td>routesFilePath</td><td>string</td><td>Path for routes when using new routing configurations in Angular 17.</td></tr><tr><td>module</td><td>string</td><td>The declaring NgModule.</td></tr><tr><td>isPageModule</td><td>boolean</td><td>Whether the component is a page or not.</td></tr></tbody></table>



### template-form Schematic

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>name</td><td>string</td><td>The name of the form.</td></tr><tr><td>apiCall</td><td>string</td><td>Specifies the API call function that will be triggered upon form submission.</td></tr><tr><td>apiCallClass</td><td>string</td><td>Specifies the class for the API call’s argument.</td></tr><tr><td>path</td><td>string</td><td>The path where the new form-related code will be generated.</td></tr><tr><td>fields</td><td>string[]</td><td>An array of strings representing the field names within the form.</td></tr><tr><td>fieldType</td><td>string</td><td>Determines whether the fields are <code dir="auto">simple</code> or <code dir="auto">complex</code>. Default is <code dir="auto">simple</code>.</td></tr></tbody></table>



### template-library Schematic

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>name</td><td>string</td><td>Specifies the name of the library.</td></tr><tr><td>path</td><td>string</td><td>The path where the library should be created.</td></tr><tr><td>entryFile</td><td>string</td><td>Designates the main entry point of the library. Typically a file like <code dir="auto">public-api.ts</code>.</td></tr><tr><td>dest</td><td>string</td><td>The destination directory where the build artifacts of the library will be placed.</td></tr><tr><td>project</td><td>string</td><td>The Angular project within which the library will be created.</td></tr></tbody></table>



### template-module Schematic

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>name</td><td>string</td><td>The name of the module to be created.</td></tr><tr><td>path</td><td>string</td><td>Specifies the directory path where the new module will be generated.</td></tr><tr><td>project</td><td>string</td><td>Identifies the project within which the module will be created.</td></tr><tr><td>flat</td><td>boolean</td><td>Prevents the creation of a new folder for the module if set to <code dir="auto">true</code>. Defaults to <code dir="auto">false</code>.</td></tr><tr><td>routing</td><td>boolean</td><td>Indicates that a routing module should be generated alongside the standard module. Defaults to <code dir="auto">false</code>.</td></tr><tr><td>route</td><td>string</td><td>Allows specifying a route path that will be added to the nearest module’s routing configuration.</td></tr><tr><td>module</td><td>string</td><td>The path to the module file that will import the new module.</td></tr></tbody></table>



### template-service Schematic

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>name</td><td>string</td><td>Specifies the name of the service to be created.</td></tr><tr><td>path</td><td>string</td><td>The path where the new service will be generated.</td></tr><tr><td>project</td><td>string</td><td>Identifies the Angular project within which the service should be created.</td></tr><tr><td>flat</td><td>boolean</td><td>Indicates that the service file should be created directly inside the specified path without creating a new folder. Defaults to <code dir="auto">false</code>.</td></tr><tr><td>skipTests</td><td>boolean</td><td>Skips the generation of a <code dir="auto">.spec</code> file for the service if set to <code dir="auto">true</code>. Defaults to <code dir="auto">false</code>.</td></tr></tbody></table>



### template-serviceMethod Schematic

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>name</td><td>string</td><td>The name of the method to be added.</td></tr><tr><td>entityName</td><td>string</td><td>Name of the entity coming back from the server as page data or page rows. Default is <code dir="auto">entity</code>.</td></tr><tr><td>envFilePath</td><td>string</td><td>The environment file to update.</td></tr><tr><td>serviceName</td><td>string</td><td>The name of the service class where the new method will be injected.</td></tr><tr><td>apiRoute</td><td>string</td><td>The HTTP API route.</td></tr><tr><td>scrollName</td><td>string</td><td>The name of the scrollPageObject if transformationType is <code dir="auto">scrolling</code>. Default is <code dir="auto">placeholder</code>.</td></tr><tr><td>path</td><td>string</td><td>The path where the service is.</td></tr><tr><td>transformationType</td><td>string</td><td>Determines whether to use regular transformation or page transformation. Default is <code dir="auto">default</code>.</td></tr><tr><td>httpMethod</td><td>string</td><td>The HTTP method for the service method (get, post, put, patch, delete, options, head). Default is <code dir="auto">post</code>.</td></tr><tr><td>useDataSourceStrategy</td><td>boolean</td><td>Indicates whether to use the datasource strategy for the service method. Default is <code dir="auto">true</code>.</td></tr></tbody></table>



### template-scroll Schematic

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>name</td><td>string</td><td>The name of the scroll object.</td></tr><tr><td>path</td><td>string</td><td>The path where the target class is.</td></tr><tr><td>serviceFilePath</td><td>string</td><td>The path where the service is, to be passed to template-service-method schematic.</td></tr><tr><td>serviceMethodName</td><td>string</td><td>The name of the service method, to be passed to template-service-method schematic.</td></tr><tr><td>serviceMethodApiRoute</td><td>string</td><td>The HTTP API route, to be passed to template-service-method schematic.</td></tr><tr><td>serviceMethodEntityName</td><td>string</td><td>To be passed to template-service-method schematic, look up entityName definition there. Default is <code dir="auto">entity</code>.</td></tr><tr><td>serviceMethodUseDataSourceStrategy</td><td>boolean</td><td>Whether to use the datasource strategy for the service method. Default is <code dir="auto">true</code>.</td></tr><tr><td>createServiceMethod</td><td>boolean</td><td>Indicates whether to create the service method. Default is <code dir="auto">true</code>.</td></tr></tbody></table>



### v18.1.3001 [8/4/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3002 [8/4/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3003 [8/5/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3003 [8/5/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3004 [8/5/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3005 [8/5/24]

updated package to conform with @windmillcode/angular-wml-components-base[Previous
WML Components Base](/Windmillcode-Angular-CDK-Docs/intro/wml-components-base/)[Next
WML Accordion](/Windmillcode-Angular-CDK-Docs/components/wml-accordion/)