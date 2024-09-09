    <div class="content-panel astro-7nkwcw3z"> <div class="sl-container astro-7nkwcw3z"> <h1 id="_top" class="astro-j6tvhyss">WML Schematics</h1>  </div> </div>  <div class="content-panel astro-7nkwcw3z"> <div class="sl-container astro-7nkwcw3z"> <div class="sl-markdown-content"> <p>The Angular WML Schematics library serves as a foundational toolkit for Angular web application development, establishing a solid baseline from which developers can construct and expand their projects. Central to this library is the concept of WMLUIProperty, a fundamental element that encapsulates the essence of web application components, down to the finest detail. This library not only streamlines the development process by providing pre-defined subclasses like WMLRoute for routing, WMLView for dynamic components, and WMLMotionUIProperty for CSS animations and transitions but also ensures consistency and scalability across your application. Dive into the documentation to explore how these building blocks can be orchestrated to create robust, maintainable, and dynamic web applications.</p>
<h2 id="installation">Installation</h2>
<div class="expressive-code"><link rel="stylesheet" href="/Windmillcode-Angular-CDK-Docs/_astro/ec.j8ofn.css"/><script type="module" src="/Windmillcode-Angular-CDK-Docs/_astro/ec.8zarh.js"></script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre data-language="bash"><code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">-s</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--verbose</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">@windmillcode/angular-wml-schematics</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="npm install -s --verbose @windmillcode/angular-wml-schematics"><div></div></button></div></figure></div>
<h2 id="usage">Usage</h2>
<p>As you follow along close each terminal and open a new one so you can start in root</p>
<h3 id="to-create-a-layout">To create a layout</h3>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre data-language="bash"><code><div class="ec-line"><div class="code"><span style="--0:#C5E478;--1:#3C63B3">cd</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">src/app/layouts</span></div></div><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">npx</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">ng</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">g</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">@windmillcode/angular-wml-schematics:component</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--name=custom-layout</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--routing=true</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--route=layout</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--routes-file-path=src/app/app.routes.ts</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--standalone=true</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--cpnt-type=default</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="cd src/app/layoutsnpx ng g @windmillcode/angular-wml-schematics:component --name=custom-layout --routing=true --route=layout --routes-file-path=src/app/app.routes.ts --standalone=true --cpnt-type=default"><div></div></button></div></figure></div>
<p>then navigate to the layout route  and check for the element in dev tools
you will need to add a router-outlet</p>
<h3 id="to-create-a-page">To create a page</h3>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre data-language="bash"><code><div class="ec-line"><div class="code"><span style="--0:#C5E478;--1:#3C63B3">cd</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">src/app/pages</span></div></div><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">npx</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">ng</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">g</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">@windmillcode/angular-wml-schematics:component</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--name=custom-page</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--route-key=upload</span><span style="--0:#D6DEEB;--1:#403F53">  </span><span style="--0:#82AAFF;--1:#3C63B3">--route=page</span><span style="--0:#D6DEEB;--1:#403F53">  </span><span style="--0:#82AAFF;--1:#3C63B3">--routes-file-path=src/app/app.routes.ts</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--standalone=true</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--cpnt-type=default</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="cd src/app/pagesnpx ng g @windmillcode/angular-wml-schematics:component --name=custom-page --route-key=upload  --route=page  --routes-file-path=src/app/app.routes.ts --standalone=true --cpnt-type=default"><div></div></button></div></figure></div>
<p>you would first create a layout then the page then add the page as a child of the layout route</p>
<h3 id="to-create-a-container-component">To create a container component</h3>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre data-language="sh"><code><div class="ec-line"><div class="code"><span style="--0:#C5E478;--1:#3C63B3">cd</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">src/app/shared/components</span></div></div><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">npx</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">ng</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">g</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">@windmillcode/angular-wml-schematics:component</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--name</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">container-zero</span><span style="--0:#D6DEEB;--1:#403F53">  </span><span style="--0:#82AAFF;--1:#3C63B3">--is-props-child=true</span><span style="--0:#D6DEEB;--1:#403F53">  </span><span style="--0:#82AAFF;--1:#3C63B3">--module=shared</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--is-page-module=false</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="cd src/app/shared/componentsnpx ng g @windmillcode/angular-wml-schematics:component --name container-zero  --is-props-child=true  --module=shared --is-page-module=false"><div></div></button></div></figure></div>
<h3 id="to-make-a-service">To make a service</h3>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre data-language="sh"><code><div class="ec-line"><div class="code"><span style="--0:#C5E478;--1:#3C63B3">cd</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">src/app/shared/services</span></div></div><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">npx</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">ng</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">g</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">@windmillcode/angular-wml-schematics:service</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--name</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">custom</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="cd src/app/shared/servicesnpx ng g @windmillcode/angular-wml-schematics:service --name custom"><div></div></button></div></figure></div>
<h3 id="to-create-a-service-method">To create a service method</h3>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre data-language="sh"><code><div class="ec-line"><div class="code"><span style="--0:#C5E478;--1:#3C63B3">cd</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">src/app/shared/services/custom</span></div></div><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">npx</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">ng</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">g</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">@windmillcode/angular-wml-schematics:service-method</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--name</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">getJsonData</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--service-name</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">custom</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--api-route=</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#ECC48D;--1:#9B504E">/v2/list.json</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--http-method</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">get</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="cd src/app/shared/services/customnpx ng g @windmillcode/angular-wml-schematics:service-method --name getJsonData --service-name custom --api-route=&#34;/v2/list.json&#34; --http-method get"><div></div></button></div></figure></div>
<h3 id="to-create-a-form">To create a form</h3>
<ul>
<li>You will need a component and service to exist</li>
</ul>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre data-language="sh"><code><div class="ec-line"><div class="code"><span style="--0:#C5E478;--1:#3C63B3">cd</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">src/app/shared/components/container-zero</span></div></div><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">npx</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">ng</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">g</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">@windmillcode/angular-wml-schematics:form</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--api-call</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">this.customService.getJsonData</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--fields</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">firstName</span><span style="--0:#D6DEEB;--1:#403F53">  </span><span style="--0:#ECC48D;--1:#3C63B3">lastName</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">address</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="cd src/app/shared/components/container-zeronpx ng g @windmillcode/angular-wml-schematics:form --api-call this.customService.getJsonData --fields firstName  lastName address"><div></div></button></div></figure></div>
<p>**Open A New terminal to try out the commands and see how the project gets updated</p>
<iframe src="https://stackblitz.com/edit/stackblitz-starters-pk1cgq?ctl=1&amp;embed=1&amp;file=src%2Fmain.ts&amp;theme=dark"></iframe>
<h2 id="references">References</h2>
<h3 id="template-component-schematic">template-component Schematic</h3>
















































































<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>name</td><td>string</td><td>Specifies the name of the component.</td></tr><tr><td>path</td><td>string</td><td>The path where the new component will be generated.</td></tr><tr><td>project</td><td>string</td><td>The name of the Angular project within which the component should be created.</td></tr><tr><td>cpntType</td><td>string</td><td>Determines the type of component to generate. Options include <code dir="auto">default</code>, <code dir="auto">library</code>, <code dir="auto">default-zero</code>, and <code dir="auto">library-zero</code>.</td></tr><tr><td>isIdIncluded</td><td>boolean</td><td>Indicates whether the component selector should include an ID. Defaults to <code dir="auto">true</code>.</td></tr><tr><td>isPropsChild</td><td>boolean</td><td>Specifies whether the component is a presentation or a container.</td></tr><tr><td>standalone</td><td>boolean</td><td>Indicates whether the generated component is standalone. Defaults to <code dir="auto">false</code>.</td></tr><tr><td>styleType</td><td>string</td><td>Specifies the preset SCSS style to use. Options include <code dir="auto">type0</code>, <code dir="auto">type1</code>, and <code dir="auto">none</code>. Default is <code dir="auto">none</code>.</td></tr><tr><td>routing</td><td>boolean</td><td>Indicates whether to create a routing module. Defaults to <code dir="auto">false</code>.</td></tr><tr><td>routeKey</td><td>string</td><td>The route that gets added to the innerNav.urls object in the environment.dev.ts file.</td></tr><tr><td>route</td><td>string</td><td>The route path for a lazy-loaded module.</td></tr><tr><td>routesFilePath</td><td>string</td><td>Path for routes when using new routing configurations in Angular 17.</td></tr><tr><td>module</td><td>string</td><td>The declaring NgModule.</td></tr><tr><td>isPageModule</td><td>boolean</td><td>Whether the component is a page or not.</td></tr></tbody></table>
<h3 id="template-form-schematic">template-form Schematic</h3>








































<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>name</td><td>string</td><td>The name of the form.</td></tr><tr><td>apiCall</td><td>string</td><td>Specifies the API call function that will be triggered upon form submission.</td></tr><tr><td>apiCallClass</td><td>string</td><td>Specifies the class for the API call’s argument.</td></tr><tr><td>path</td><td>string</td><td>The path where the new form-related code will be generated.</td></tr><tr><td>fields</td><td>string[]</td><td>An array of strings representing the field names within the form.</td></tr><tr><td>fieldType</td><td>string</td><td>Determines whether the fields are <code dir="auto">simple</code> or <code dir="auto">complex</code>. Default is <code dir="auto">simple</code>.</td></tr></tbody></table>
<h3 id="template-library-schematic">template-library Schematic</h3>



































<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>name</td><td>string</td><td>Specifies the name of the library.</td></tr><tr><td>path</td><td>string</td><td>The path where the library should be created.</td></tr><tr><td>entryFile</td><td>string</td><td>Designates the main entry point of the library. Typically a file like <code dir="auto">public-api.ts</code>.</td></tr><tr><td>dest</td><td>string</td><td>The destination directory where the build artifacts of the library will be placed.</td></tr><tr><td>project</td><td>string</td><td>The Angular project within which the library will be created.</td></tr></tbody></table>
<h3 id="template-module-schematic">template-module Schematic</h3>













































<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>name</td><td>string</td><td>The name of the module to be created.</td></tr><tr><td>path</td><td>string</td><td>Specifies the directory path where the new module will be generated.</td></tr><tr><td>project</td><td>string</td><td>Identifies the project within which the module will be created.</td></tr><tr><td>flat</td><td>boolean</td><td>Prevents the creation of a new folder for the module if set to <code dir="auto">true</code>. Defaults to <code dir="auto">false</code>.</td></tr><tr><td>routing</td><td>boolean</td><td>Indicates that a routing module should be generated alongside the standard module. Defaults to <code dir="auto">false</code>.</td></tr><tr><td>route</td><td>string</td><td>Allows specifying a route path that will be added to the nearest module’s routing configuration.</td></tr><tr><td>module</td><td>string</td><td>The path to the module file that will import the new module.</td></tr></tbody></table>
<h3 id="template-service-schematic">template-service Schematic</h3>



































<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>name</td><td>string</td><td>Specifies the name of the service to be created.</td></tr><tr><td>path</td><td>string</td><td>The path where the new service will be generated.</td></tr><tr><td>project</td><td>string</td><td>Identifies the Angular project within which the service should be created.</td></tr><tr><td>flat</td><td>boolean</td><td>Indicates that the service file should be created directly inside the specified path without creating a new folder. Defaults to <code dir="auto">false</code>.</td></tr><tr><td>skipTests</td><td>boolean</td><td>Skips the generation of a <code dir="auto">.spec</code> file for the service if set to <code dir="auto">true</code>. Defaults to <code dir="auto">false</code>.</td></tr></tbody></table>
<h3 id="template-servicemethod-schematic">template-serviceMethod Schematic</h3>




























































<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>name</td><td>string</td><td>The name of the method to be added.</td></tr><tr><td>entityName</td><td>string</td><td>Name of the entity coming back from the server as page data or page rows. Default is <code dir="auto">entity</code>.</td></tr><tr><td>envFilePath</td><td>string</td><td>The environment file to update.</td></tr><tr><td>serviceName</td><td>string</td><td>The name of the service class where the new method will be injected.</td></tr><tr><td>apiRoute</td><td>string</td><td>The HTTP API route.</td></tr><tr><td>scrollName</td><td>string</td><td>The name of the scrollPageObject if transformationType is <code dir="auto">scrolling</code>. Default is <code dir="auto">placeholder</code>.</td></tr><tr><td>path</td><td>string</td><td>The path where the service is.</td></tr><tr><td>transformationType</td><td>string</td><td>Determines whether to use regular transformation or page transformation. Default is <code dir="auto">default</code>.</td></tr><tr><td>httpMethod</td><td>string</td><td>The HTTP method for the service method (get, post, put, patch, delete, options, head). Default is <code dir="auto">post</code>.</td></tr><tr><td>useDataSourceStrategy</td><td>boolean</td><td>Indicates whether to use the datasource strategy for the service method. Default is <code dir="auto">true</code>.</td></tr></tbody></table>
<h3 id="template-scroll-schematic">template-scroll Schematic</h3>


















































<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>name</td><td>string</td><td>The name of the scroll object.</td></tr><tr><td>path</td><td>string</td><td>The path where the target class is.</td></tr><tr><td>serviceFilePath</td><td>string</td><td>The path where the service is, to be passed to template-service-method schematic.</td></tr><tr><td>serviceMethodName</td><td>string</td><td>The name of the service method, to be passed to template-service-method schematic.</td></tr><tr><td>serviceMethodApiRoute</td><td>string</td><td>The HTTP API route, to be passed to template-service-method schematic.</td></tr><tr><td>serviceMethodEntityName</td><td>string</td><td>To be passed to template-service-method schematic, look up entityName definition there. Default is <code dir="auto">entity</code>.</td></tr><tr><td>serviceMethodUseDataSourceStrategy</td><td>boolean</td><td>Whether to use the datasource strategy for the service method. Default is <code dir="auto">true</code>.</td></tr><tr><td>createServiceMethod</td><td>boolean</td><td>Indicates whether to create the service method. Default is <code dir="auto">true</code>.</td></tr></tbody></table>
<h3 id="v1813001-8424">v18.1.3001 [8/4/24]</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base</li>
</ul>
<h3 id="v1813002-8424">v18.1.3002 [8/4/24]</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base</li>
</ul>
<h3 id="v1813003-8524">v18.1.3003 [8/5/24]</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base</li>
</ul>
<h3 id="v1813003-8524-1">v18.1.3003 [8/5/24]</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base</li>
</ul>
<h3 id="v1813004-8524">v18.1.3004 [8/5/24]</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base</li>
</ul>
<h3 id="v1813005-8524">v18.1.3005 [8/5/24]</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base</li>
</ul>
<h3 id="v1813006-8524">v18.1.3006 [8/5/24]</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base</li>
</ul>
<h3 id="v1813007-8524">v18.1.3007 [8/5/24]</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base</li>
</ul>
<h3 id="v1814000-81424">v18.1.4000 [8/14/24]</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base</li>
</ul>
<h3 id="v1814001-81424">v18.1.4001 [8/14/24]</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base</li>
</ul>
<h3 id="v1820-81524">v18.2.0 [8/15/24]</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base</li>
</ul>
<h3 id="v1821-82024">v18.2.1 [8/20/24]</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base</li>
</ul>
<h3 id="v1821000-82224">v18.2.1000 [8/22/24]</h3>
<ul>
<li>updated package to reflect the version  18.2.1 of @angular/cli package</li>
</ul>
<h3 id="v1822000-83024">v18.2.2000 [8/30/24]</h3>
<ul>
<li>updated package to reflect the version  18.2.2 of @angular/cli package</li>
</ul>
<h3 id="v1822100-9124">v18.2.2100 [9/1/24]</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base</li>
</ul>
<h3 id="v1822101-9124">v18.2.2101 [9/1/24]</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base</li>
</ul>
<h3 id="v1822200-9324">v18.2.2200 [9/3/24]</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base</li>
</ul>
<h3 id="v1823000-9424">v18.2.3000 [9/4/24]</h3>
<ul>
<li>updated package to reflect the version  18.2.3 of @angular/cli package</li>
</ul>
<h3 id="v1823100-9824">v18.2.3100 [9/8/24]</h3>
<ul>
<li>updated package to reflect the version  18.2.3 of @angular/cli package</li>
</ul> </div> <footer class="sl-flex astro-3yyafb3n"> <div class="meta sl-flex astro-3yyafb3n">   </div> <div class="pagination-links astro-u2l5gyhi" dir="ltr"> <a href="/Windmillcode-Angular-CDK-Docs/intro/wml-angular-components-base" rel="prev" class="astro-u2l5gyhi"> <svg aria-hidden="true" class="astro-u2l5gyhi astro-c6vsoqas" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1.5rem;"><path d="M17 11H9.41l3.3-3.29a1.004 1.004 0 1 0-1.42-1.42l-5 5a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l5 5a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095L9.41 13H17a1 1 0 0 0 0-2Z"></path></svg>  <span class="astro-u2l5gyhi"> Previous <br class="astro-u2l5gyhi"/> <span class="link-title astro-u2l5gyhi">WML Angular Components Base</span> </span> </a> <a href="/Windmillcode-Angular-CDK-Docs/components/wml-accordion/" rel="next" class="astro-u2l5gyhi"> <svg aria-hidden="true" class="astro-u2l5gyhi astro-c6vsoqas" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1.5rem;"><path d="M17.92 11.62a1.001 1.001 0 0 0-.21-.33l-5-5a1.003 1.003 0 1 0-1.42 1.42l3.3 3.29H7a1 1 0 0 0 0 2h7.59l-3.3 3.29a1.002 1.002 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l5-5a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76Z"></path></svg>  <span class="astro-u2l5gyhi"> Next <br class="astro-u2l5gyhi"/> <span class="link-title astro-u2l5gyhi">WML Accordion</span> </span> </a> </div>   </footer>  </div> </div>   