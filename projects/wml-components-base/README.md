# WML Components Base

When working on web applications, there is no standard baseline. The Angular WML Components Base Library establishes a foundation for your application, ensuring consistency and scalability. The core of this library is the <code dir="auto">WMLUIProperty</code> , which represents the basic building block of every element in a web application. This property encapsulates all the essential features, and there are several subclasses like <code dir="auto">WMLRoute</code> for routes, <code dir="auto">WMLView</code> to leverage change detection, <code dir="auto">WMLImage</code> for images  and <code dir="auto">WMLAnimateUIProperty</code> for CSS animations. Each class has properties and methods to optimize your work in those features of  your application. You can use this package and leave out the rest of the library and you will get very far building very robust and scalable applications



## Installation

Terminal window <code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">-s</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">@windmillcode/angular-wml-components-base</span></div></div></code> 

## Usage



### WMLUIProperty

**The Building Blocks Of Web Apps**

<iframe src="https://stackblitz.com/edit/stackblitz-starters-ypqdk7?embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### WMLAnimateUIProperty

**Using Animations**

<iframe src="https://stackblitz.com/edit/stackblitz-starters-bvamvi?embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### WMLCustomComponent

**Custom Components**

<iframe src="https://stackblitz.com/edit/stackblitz-starters-kmsw3c?embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

## References



### WMLUIProperty

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">isPresent</code></td><td><code dir="auto">boolean</code></td><td>Indicates whether the target HTMLElement is present. Default is <code dir="auto">true</code>.</td></tr><tr><td><code dir="auto">value</code></td><td><code dir="auto">V</code></td><td>The value property. Default is an empty string (<code dir="auto">&#34;&#34;</code>).</td></tr><tr><td><code dir="auto">text</code></td><td><code dir="auto">string</code></td><td>Optional text.</td></tr><tr><td><code dir="auto">class</code></td><td><code dir="auto">string</code></td><td>Gets or sets the CSS class of the target HTMLElement.</td></tr><tr><td><code dir="auto">style</code></td><td><code dir="auto">Partial&lt;CSSStyleDeclaration&gt;</code></td><td>Partial CSS styles for the target HTMLElement.</td></tr><tr><td><code dir="auto">type</code></td><td><code dir="auto">T</code></td><td>Type property for when an entity can have more than one type.</td></tr><tr><td><code dir="auto">click</code></td><td><code dir="auto">(evt?: Event) =&gt; void</code></td><td>Click event handler for the target HTMLElement.</td></tr><tr><td><code dir="auto">id</code></td><td><code dir="auto">string</code></td><td>Identifier for the target HTMLElement. Default is an empty string (<code dir="auto">&#34;&#34;</code>).</td></tr></tbody></table>



### WMLView

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">cdref</code></td><td><code dir="auto">ChangeDetectorRef</code></td><td>Angular <code dir="auto">ChangeDetectorRef</code> associated with the component.</td></tr></tbody></table>



### WMLRoute

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">route</code></td><td><code dir="auto">string</code></td><td>Route property specific to <code dir="auto">WMLRoute</code>. Default is <code dir="auto">&#34;/&#34;</code>.</td></tr></tbody></table>



### WMLAnimateUIProperty

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">beginOpenStyles</code></td><td><code dir="auto">WMLUIProperty[&#34;style&#34;]</code></td><td>Styles for the beginning of the open animation.</td></tr><tr><td><code dir="auto">beginCloseStyles</code></td><td><code dir="auto">WMLUIProperty[&#34;style&#34;]</code></td><td>Styles for the beginning of the close animation.</td></tr><tr><td><code dir="auto">endOpenStyles</code></td><td><code dir="auto">WMLUIProperty[&#34;style&#34;]</code></td><td>Styles for the end of the open animation.</td></tr><tr><td><code dir="auto">endCloseStyles</code></td><td><code dir="auto">WMLUIProperty[&#34;style&#34;]</code></td><td>Styles for the end of the close animation.</td></tr><tr><td><code dir="auto">helperStyles</code></td><td><code dir="auto">WMLUIProperty[&#34;style&#34;]</code></td><td>Helper styles to prevent animation jank. Can be overwritten with <code dir="auto">{}</code> if it interferes with your work.</td></tr><tr><td><code dir="auto">animationClass</code></td><td><code dir="auto">string</code></td><td>CSS class specifically for animations.</td></tr><tr><td><code dir="auto">animationState</code></td><td><code dir="auto">WMLAnimateUIPropertyState</code></td><td>Current state of the animation.</td></tr><tr><td><code dir="auto">animationEndEvent</code></td><td><code dir="auto">Subject&lt;WMLAnimateUIPropertyState&gt;</code></td><td>Triggers when the animation is finally opened or closed.</td></tr></tbody></table>



### Methods

<table><thead><tr><th>Method</th><th>Signature</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">getGroupAnimationState</code></td><td><code dir="auto">() =&gt; WMLAnimateUIPropertyState</code></td><td>Returns the current state of the animation.</td></tr><tr><td><code dir="auto">animationEnd</code></td><td><code dir="auto">(evt?: Event) =&gt; void</code></td><td>Handles the animation end event.</td></tr><tr><td><code dir="auto">openAnimation</code></td><td><code dir="auto">() =&gt; void</code></td><td>Triggers the open animation.</td></tr><tr><td><code dir="auto">closeAnimation</code></td><td><code dir="auto">() =&gt; void</code></td><td>Triggers the close animation.</td></tr><tr><td><code dir="auto">toggleAnimation</code></td><td><code dir="auto">(val: &#39;forward&#39; | &#39;reverse&#39;) =&gt; void</code></td><td>Toggles the animation based on the direction.</td></tr></tbody></table>



### WMLImage

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">src</code></td><td><code dir="auto">string</code></td><td>Source URL for the image.</td></tr><tr><td><code dir="auto">alt</code></td><td><code dir="auto">string</code></td><td>Alternative text for the image.</td></tr><tr><td><code dir="auto">ariaLabel</code></td><td><code dir="auto">string</code></td><td>ARIA label for accessibility.</td></tr><tr><td><code dir="auto">ariaExpanded</code></td><td><code dir="auto">boolean</code></td><td>ARIA expanded state for accessibility. Default is <code dir="auto">false</code>.</td></tr><tr><td><code dir="auto">onError</code></td><td><code dir="auto">Function</code></td><td>Error handler for the image.</td></tr><tr><td><code dir="auto">route</code></td><td><code dir="auto">string</code></td><td>Route property specific to <code dir="auto">WMLRoute</code>. Default is <code dir="auto">&#34;/&#34;</code>.</td></tr><tr><td><code dir="auto">link</code></td><td><code dir="auto">string</code></td><td>Optional link URL.</td></tr><tr><td><code dir="auto">routerLink</code></td><td><code dir="auto">string</code></td><td>Optional Angular router link.</td></tr><tr><td><code dir="auto">cdref</code></td><td><code dir="auto">ChangeDetectorRef</code></td><td>Angular <code dir="auto">ChangeDetectorRef</code> associated with the component.</td></tr></tbody></table>



### Functions

addCustomComponent<table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">vcf</code></td><td><code dir="auto">ViewContainerRef</code></td><td>Angular ViewContainerRef for creating the component.</td></tr><tr><td><code dir="auto">cpnt</code></td><td><code dir="auto">Type&lt;any&gt;</code></td><td>Component type to be created.</td></tr><tr><td><code dir="auto">props</code></td><td><code dir="auto">any</code></td><td>Properties to be passed to the component.</td></tr><tr><td><code dir="auto">return</code></td><td><code dir="auto">ComponentRef&lt;any&gt;</code></td><td>Returns a reference to the created component.</td></tr><tr><td>,</td><td></td><td></td></tr></tbody></table>



## Changelog

v0.9.4
added WMLQueue just a regular Queue data structure thats all

v0.9.5
added index accessing for WMLQueue



### 0.10.0

add generateRandomNumber, generateRandomColor,and selectRandomOptionFromArraywml



### 0.10.1

returned the ref created by addCustomComponent



### 0.10.2

WMLAPIPaginationRequestModel[“sort”][number][“direction”] enums are now “ASC” |“DESC” | ""



### 0.10.3

add WMLAPIPaginationResponseModel[“columns”] of type

<code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">Array</span><span style="--0:#D6DEEB;--1:#403F53">&lt;{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">value</span><span style="--0:#7FDBCA;--1:#097174">:</span><span style="--0:#C5E478;--1:#3C63B3">string</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">type</span><span style="--0:#7FDBCA;--1:#097174">?:</span><span style="--0:#C5E478;--1:#3C63B3">string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">}&gt;</span></div></div></code>

to provide the developer column information



### 0.10.4

made  WMLAPIPaginationResponseModel[“data”] Array generic



### 0.10.5

added generateClassPrefix method  to functions



### 0.10.6

updated Function signatuire on WMLUIProperty##click so the event option is optional

### 0.11.0

provided WMLNGXTranslateLoader to work with ngx-translateprovided WMLModuleForRootProps to work with

### 0.11.1

attempting to deal with an issue where numbers are being returned if no feature is present

### 1.0.0

major change
functions##addCustomComponent ref.instance.ngOnInit?.() only gets called if the angular versions is less than 14.1.0

### 1.1.0

minor changeadded WMLDeepPartial, a utility types that will make all your nested properties optionalmodified WMLNGXTranslateLoader##i18nLocation to return undefined so numbers dont turn to the indexes of the string

### 2.0.0

MAJOR rename to angular-wml-components-base

### 2.1.1

added fn replaceValuesWithPaths which will recursively go through an object and return a new obj with its values in path representation great for i18n

### 2.1.2

made a fix in genearate random color, where some times 5 digits where returned

### 2.2.0

WMLUIProperty.id by default is "" should help with type should hurt if your code depends on it it is still optional

### 2.2.3

generateClassPrefix prefix parameter supports ="" as default use case,ids and will remove the subsequent _ if its thereWMLUIProperty[“id”] default param is ""

### 16.2.5-0

provided access to WMLOptionsProps to the the container cpnt

### 16.2.70

wmlapipaginationrequestmodel##filter[].value is now the any type
%!(EXTRA string=

### v16.2.80

updated package to reflect the version  16.2.80 of @angular/core package),

### v16.2.80

updated package to reflect the version  16.2.80 of @angular/core package,

### v16.2.90

updated package to reflect the version  16.2.90 of @angular/core package,

### v16.2.91

updated package to reflect the version  16.2.91 of @angular/core package

### 16.2.92

provided spyOnForES6Imports, which finally allows you to spyOnFunctions on es6 imports however refer to the stack overflow project on how to[configure your angular app](https://stackoverflow.com/a/77298152/7513181)in order to get this to work it will not work alone*in test.ts

<code><div class="ec-line"><div class="code"><span style="--0:#7FDBCA;--1:#097174">...</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">const { </span><span style="--0:#82AAFF;--1:#3C63B3">defineProperty</span><span style="--0:#C792EA;--1:#8D46B4"> } = </span><span style="--0:#D6DEEB;--1:#403F53">Object;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">Object</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">defineProperty</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8D46B4">=</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8D46B4">function</span><span style="--0:#D9F5DD;--1:#111111">(</span><span style="--1:#403F53"><span style="--0:#D7DBE0">object</span><span style="--0:#D6DEEB">, </span><span style="--0:#D7DBE0">name</span><span style="--0:#D6DEEB">, </span><span style="--0:#D7DBE0">meta</span></span><span style="--0:#D9F5DD;--1:#111111">)</span><span style="--0:#D6DEEB;--1:#403F53"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#C792EA;--1:#8D46B4">if</span><span style="--0:#D6DEEB;--1:#403F53"> (meta</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#7FDBCA;--1:#097174">get</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8D46B4">&amp;&amp;</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8D46B4">!</span><span style="--0:#D6DEEB;--1:#403F53">meta</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#7FDBCA;--1:#097174">configurable</span><span style="--0:#D6DEEB;--1:#403F53">) {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#809191;--1:#5E6578">// it might be an ES6 exports object</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#C792EA;--1:#8D46B4">return</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">defineProperty</span><span style="--0:#D6DEEB;--1:#403F53">(object</span><span style="--0:#7690A6;--1:#4F687D">,</span><span style="--0:#D6DEEB;--1:#403F53"> name</span><span style="--0:#7690A6;--1:#4F687D">,</span><span style="--0:#D6DEEB;--1:#403F53"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#7FDBCA;--1:#097174">...</span><span style="--0:#D6DEEB;--1:#403F53">meta</span><span style="--0:#7690A6;--1:#4F687D">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">configurable: </span><span style="--0:#FF5874;--1:#A54A4A">true</span><span style="--0:#7690A6;--1:#4F687D">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">});</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#C792EA;--1:#8D46B4">return</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">defineProperty</span><span style="--0:#D6DEEB;--1:#403F53">(object</span><span style="--0:#7690A6;--1:#4F687D">,</span><span style="--0:#D6DEEB;--1:#403F53"> name</span><span style="--0:#7690A6;--1:#4F687D">,</span><span style="--0:#D6DEEB;--1:#403F53"> meta);</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">};</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#7FDBCA;--1:#097174">...</span></div></div><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">getTestBed</span><span style="--0:#D6DEEB;--1:#403F53">()</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">initTestEnvironment</span><span style="--0:#D6DEEB;--1:#403F53">(</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">BrowserDynamicTestingModule,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#82AAFF;--1:#3C63B3">platformBrowserDynamicTesting</span><span style="--0:#D6DEEB;--1:#403F53">()</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">);</span></div></div></code>

tsconfig.spec.json<code><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">...</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#ECC48D;--1:#9B504E">compilerOptions</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#D6DEEB;--1:#403F53">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#7FDBCA;--1:#097174">&#34;outDir&#34;</span><span style="--0:#D6DEEB;--1:#403F53">: </span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#C789D6;--1:#7F5889">./out-tsc/spec</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#7FDBCA;--1:#097174">&#34;types&#34;</span><span style="--0:#D6DEEB;--1:#403F53">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#C789D6;--1:#7F5889">jasmine</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#D6DEEB;--1:#403F53">,</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#C789D6;--1:#7F5889">node</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#7FDBCA;--1:#097174">&#34;module&#34;</span><span style="--0:#D6DEEB;--1:#403F53">: </span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#C789D6;--1:#7F5889">commonjs</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">},</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">...</span></div></div></code>



### 16.2.93

added mockDeclarations to wmltestutils so users can add their declarations
,

### v16.2.93

updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,

### v16.2.100

updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,

### v16.2.110

updated package to conform with @windmillcode/angular-wml-components-base for unit testing features

### v16.2.112

update type inference for replaceValuesWithPaths to be more friendly

### v16.2.113

added createBasicObservableError and WMLTestHttpHandler for interceptor test cases and throwing observable errors
,

### v16.2.120

updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,

### v17.0.10

updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,

### v17.0.11

updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,

### v17.0.20

updated package to reflect the version  ^17.0.2 of @angular/core package

### v17.0.21

added data-source-utils.ts to help with pagination and data source logic
,

### v17.0.40

updated package to reflect the version  ^17.0.4 of @angular/core package,

### v17.0.50

updated package to reflect the version  ^17.0.5 of @angular/core package,

### v17.0.60

updated package to reflect the version  ^17.0.6 of @angular/core package,

### v17.0.70

updated package to reflect the version  ^17.0.7 of @angular/core package

### v17.0.7300

added WMLAnimateUIProperty as the basis for all entities meant to be animated,



### v17.0.7300

updated package to conform with @windmillcode/angular-wml-components-base
,

### v17.0.8300

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.0.7300

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.0.80

updated package to reflect the version  ^17.0.8 of @angular/core package

### v17.0.8100

prevented animation end event from propagating to child events, given the children are not exactly the same as the parent,
,

### v17.0.8100

updated package to conform with @windmillcode/angular-wml-components-base

### v17.0.8102

added WMLAnimateUIProperty[“helperStyles”] to help animations run more smootly its value is<code><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">helperStyles:WMLUIProperty[</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#ECC48D;--1:#9B504E">style</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#D6DEEB;--1:#403F53">]</span><span style="--0:#C792EA;--1:#8D46B4">=</span><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">transform:</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#ECC48D;--1:#9B504E">translate3d(0,0,0)</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code>

and you can overwrite it as necessary
,



### v17.0.8103

updated package to conform with @windmillcode/angular-wml-components-base
,

### v17.0.9000

updated package to conform with @windmillcode/angular-wml-components-base

### v17.0.9001

added generateIdPrefix
,

### v17.0.9000

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.0.9001

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.1.0000

updated package to reflect the version  ^17.1.0 of @angular/core package

### v17.1.2

[BREAKING CHANGE] added WMLAnimateUIProperty.autoOpen, by default animations dont don anything
if you need your animations to autoOpen simply go through all your class instances and make the update,



### v17.1.2

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.1.1000

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.1.2000 [2/5/24]

updated package to reflect the version  ^17.1.2 of @angular/core package

### v17.1.2001 [2/8/24]

added toggle functionality for updateClassString
,

### v17.1.2001 [2/8/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.1.3001 [2/8/24]

updated package to reflect the version  ^17.1.3 of @angular/core package,

### v17.1.3000 [2/8/24]

updated package to reflect the version  ^17.1.3 of @angular/core package,

### v17.2.1000 [2/17/24]

updated package to reflect the version  ^17.2.1 of @angular/core package,

### v17.2.2000 [2/23/24]

updated package to reflect the version  ^17.2.2 of @angular/core package,

### v17.2.2001 [2/23/24]

updated package to reflect the version  ^17.2.2 of @angular/core package,

### v17.2.3000 [2/28/24]

updated package to reflect the version  ^17.2.3 of @angular/core package

### v17.2.3001 [3/22/24]

created WMLComponentBaseZero which shortens and hides the complex logic of
our WMLComponentsNew FeaturesIntroduced <code dir="auto">WMLComponentBaseZero</code> , a new base class designed to simplify and encapsulate the complex logic associated with WML components. This enhancement aims to provide a cleaner and more intuitive interface for working with WML components.Enhancements in <code dir="auto">component-base.ts</code> :**Refactored <code dir="auto">WMLComponentBaseZeroProps</code> :**

Transitioned from a traditional class-based approach to a mixin-based pattern using <code dir="auto">WMLComponentBaseZeroPropsMixin</code> . This change is intended to enhance flexibility and reusability across different component implementations.The mixin <code dir="auto">WMLComponentBaseZeroPropsMixin</code> is now used to dynamically extend a base class, incorporating custom properties and methods essential for WML components.Introduced a new <code dir="auto">setState</code> method within the mixin, providing a streamlined way to update component state.**Introduced <code dir="auto">WMLComponentBaseZero</code> :**

This new base class leverages <code dir="auto">WMLComponentBaseZeroProps</code> to offer a robust foundation for component development.The constructor now initializes class and ID prefixes if they are provided, enabling more consistent and predictable styling and DOM structure.Enhanced the <code dir="auto">listenForSetState</code> method to work seamlessly with the new state management approach, ensuring changes are propagated efficiently and reliably.Key Changes to Note:The <code dir="auto">listenForSetState</code> method now listens to changes from <code dir="auto">setStateSubj</code> , aligning with the new state management strategy.Destructor ( <code dir="auto">ngOnDestroy</code> ) logic has been updated to ensure proper cleanup, reducing the risk of memory leaks and ensuring better resource management.Usage:To leverage the new <code dir="auto">WMLComponentBaseZero</code> , extend your components from this base class and utilize the provided mechanisms for state management and lifecycle handling.The mixin approach offers enhanced customization, allowing developers to inject additional properties or methods as needed.Recommendations:Review the updated implementation details in <code dir="auto">WMLComponentBaseZero</code> and <code dir="auto">WMLComponentBaseZeroPropsMixin</code> to fully understand the new component structure and behavior.Test your components thoroughly to ensure compatibility with the new base class and to leverage the improvements in state management and lifecycle handling.This update signifies our commitment to improving the developer experience and streamlining component development within the WML ecosystem.
,



### v17.2.3001 [3/2/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v17.2.3002 [3/5/24]

[UPDATE] Added a new <code dir="auto">fields</code> array of type <code dir="auto">Array&lt;{value:any}&gt;</code> to the <code dir="auto">WMLAPIPaginationRequestModel</code> class in <code dir="auto">data-source-utils.ts</code> . This new field is designed to hold additional data fields that may be required during pagination requests.

[PATCH] Modified the <code dir="auto">animationEnd</code> method in the <code dir="auto">WMLAnimateUIProperty</code> class within <code dir="auto">models.ts</code> . The condition now removes any spaces from <code dir="auto">this.animationClass</code> before checking its presence in the event target’s className. This ensures the animation end logic accurately identifies the target regardless of space characters in the class name.
,



### v17.2.3002 [3/5/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.2.4000 [3/8/24]

updated package to reflect the version  ^17.2.4 of @angular/core package

### v17.2.4002 [3/12/24]

[PATCH] In <code dir="auto">wml-components-base/src/lib/component-base.ts</code> , added a new <code dir="auto">ReplaySubject</code> called <code dir="auto">setStateEvent</code> , which enhances state management within the component. Also adjusted the RxJS pipe in the <code dir="auto">setState</code> method to include an additional operation that emits the updated state to <code dir="auto">setStateEvent</code> , improving the reactivity of the component state.,



### v17.2.4002 [3/12/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.2.4003 [3/13/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.2.4004 [3/13/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.3.0 [3/17/24]

updated package to reflect the version  ^17.3.0 of @angular/core package
,

### v17.3.1000 [3/22/24]

updated package to reflect the version  ^17.3.1 of @angular/core package,

### v17.3.2000 [3/28/24]

updated package to reflect the version  ^17.3.2 of @angular/core package,

### v17.3.3000 [4/4/24]

updated package to reflect the version  ^17.3.3 of @angular/core package,

### v17.3.4000 [4/11/24]

updated package to reflect the version  ^17.3.4 of @angular/core package

### v17.3.4001 [4/16/24]

added onError to wmlimage prperty
,

### v17.3.4001 [4/16/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.3.5000 [4/20/24]

updated package to reflect the version  ^17.3.5 of @angular/core package

### v17.3.5110 [4/20/24]

[UPDATE] ensure dervied class passed type to base classes
Updated models.ts by add the WMLConstructorDecorator function, to streamline and optimize object initialization practices within the framework.<code><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#82AAFF;--1:#3C63B3">constructor</span><span style="--0:#D6DEEB;--1:#403F53">(props:Partial</span><span style="--0:#C792EA;--1:#8D46B4">&lt;</span><span style="--0:#82AAFF;--1:#3C63B3">T</span><span style="--0:#C792EA;--1:#8D46B4">&gt;=</span><span style="--0:#D6DEEB;--1:#403F53">{}){</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#C792EA;--1:#8D46B4">let </span><span style="--0:#D6DEEB;--1:#403F53">origProps</span><span style="--0:#C792EA;--1:#8D46B4"> = </span><span style="--0:#D6DEEB;--1:#403F53">Object</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">entries</span><span style="--0:#D6DEEB;--1:#403F53">(props)</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">filter</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#D9F5DD;--1:#111111">(</span><span style="--0:#C792EA;--1:#8D46B4">[</span><span style="--0:#D7DBE0;--1:#403F53">key</span><span style="--0:#C792EA;--1:#8D46B4">, </span><span style="--0:#D7DBE0;--1:#403F53">val</span><span style="--0:#C792EA;--1:#8D46B4">]</span><span style="--0:#D9F5DD;--1:#111111">)</span><span style="--0:#C792EA;--1:#8D46B4"> =&gt; {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#C792EA;--1:#8D46B4">      </span></span><span style="--0:#C792EA;--1:#8D46B4">return !</span><span style="--0:#D6DEEB;--1:#403F53">key</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">startsWith</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#D9F5DD;--1:#111111">&#39;</span><span style="--0:#ECC48D;--1:#9B504E">param</span><span style="--0:#D9F5DD;--1:#111111">&#39;</span><span style="--0:#D6DEEB;--1:#403F53">)</span><span style="--0:#C792EA;--1:#8D46B4">;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#C792EA;--1:#8D46B4">    </span></span><span style="--0:#C792EA;--1:#8D46B4">}</span><span style="--0:#D6DEEB;--1:#403F53">);</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">Object</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">assign</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#7FDBCA;--1:#097174">this</span><span style="--0:#D6DEEB;--1:#403F53">, { </span><span style="--0:#7FDBCA;--1:#097174">...</span><span style="--0:#D6DEEB;--1:#403F53">Object</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">fromEntries</span><span style="--0:#D6DEEB;--1:#403F53">(origProps) });</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code>

so as not to overwhelm developers
to use

<code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">@</span><span style="--0:#D6DEEB;--1:#403F53">WMLConstructorDecorator</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">export</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8D46B4">class</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#FFCB8B;--1:#111111">T</span><span style="--0:#D6DEEB;--1:#403F53"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#82AAFF;--1:#3C63B3">constructor</span><span style="--0:#D9F5DD;--1:#111111">(</span><span style="--0:#D7DBE0;--1:#403F53">props</span><span style="--0:#7FDBCA;--1:#097174">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#FFCB8B;--1:#111111">Partial</span><span style="--0:#D6DEEB;--1:#403F53">&lt;</span><span style="--0:#FFCB8B;--1:#111111">T</span><span style="--0:#D6DEEB;--1:#403F53">&gt; </span><span style="--0:#C792EA;--1:#8D46B4">=</span><span style="--0:#D6DEEB;--1:#403F53"> {}</span><span style="--0:#D9F5DD;--1:#111111">)</span><span style="--0:#D6DEEB;--1:#403F53"> { }</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code>

,



### v17.3.5110 [5/1/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.3.6000 [5/1/24]

updated package to reflect the version  ^17.3.6 of @angular/core package,

### v17.3.7000 [5/4/24]

updated package to reflect the version  ^17.3.7 of @angular/core package,

### v17.3.7000 [5/9/24]

updated package to reflect the version  ^17.3.7 of @angular/core package,

### v17.3.8000 [5/9/24]

updated package to reflect the version  ^17.3.8 of @angular/core package,

### v17.3.9000 [5/16/24]

updated package to reflect the version  ^17.3.9 of @angular/core package,

### v18.0.0 [5/22/24]

updated package to reflect the version  ^18.0.0 of @angular/core package,

### v18.0.1 [5/22/24]

updated package to reflect the version  ^18.0.0 of @angular/core package

### v18.0.4 [5/25/2024 12:50:12 AM EST]

[UPDATE] Modified replaceValuesWithPaths function in functions.ts to include a predicate for custom assignments.

File: functions.ts
Section: replaceValuesWithPaths
Function: replaceValuesWithPaths()
,



### v18.0.4 [5/25/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.0.1000 [5/29/24]

updated package to reflect the version  ^18.0.1 of @angular/core package
,

### v18.0.2000 [6/6/24]

updated package to reflect the version  ^18.0.2 of @angular/core package,

### v18.0.3000 [6/13/24]

updated package to reflect the version  ^18.0.3 of @angular/core package,

### v18.0.3000 [6/13/24]

updated package to reflect the version  ^18.0.3 of @angular/core package,

### v18.0.3000 [6/13/24]

updated package to reflect the version  ^18.0.3 of @angular/core package

### v18.0.3010 [6/18/2024 ]

[FIX] <code dir="auto">projects/wml-components-base/src/lib/models.ts</code> - <code dir="auto">WMLConstructorDecorator</code> function: Added <code dir="auto">props</code> to <code dir="auto">this.wmlInit?.(props)</code> . This means developers can now pass <code dir="auto">props</code> to <code dir="auto">wmlInit</code> .
,

### v18.0.3010 [6/18/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.0.3010 [6/18/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.0.4010 [6/23/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.0.4000 [6/23/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.0.4000 [6/23/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.0.5000 [6/26/24]

updated package to reflect the version  ^18.0.5 of @angular/core package,

### v18.0.6000 [7/5/24]

updated package to reflect the version  ^18.0.6 of @angular/core package,

### v18.1.0 [7/10/24]

updated package to reflect the version  ^18.1.0 of @angular/core package,

### v18.1.0 [7/13/24]

updated package to reflect the version  ^18.1.0 of @angular/core package,

### v18.1.3000 [7/13/24]

updated package to reflect the version  ^18.1.0 of @angular/core package,

### v18.1.3 [7/13/24]

updated package to reflect the version  ^18.1.0 of @angular/core package,

### v18.1.4 [7/13/24]

updated package to reflect the version  ^18.1.0 of @angular/core package,

### v18.1.4 [7/13/24]

updated package to reflect the version  ^18.1.0 of @angular/core package

### v18.1.6 [7/14/24]

[FIX] fixed an error with WMLConstructorDecorator where WMLInit was not being called
,

### v18.1.6 [7/14/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.1.6 [7/14/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.1.1000 [7/18/24]

updated package to reflect the version  ^18.1.1 of @angular/core package,

### v18.1.2000 [7/24/24]

updated package to reflect the version  ^18.1.2 of @angular/core package

### v18.1.2300

7/27/2024 02:15:42 PM EST

[update] WMLRoute now extends WMLView in models.ts. If you were using WMLRoute, you now have access to WMLView’s properties, like cdref.

[update] Added new properties link and routerLink to WMLRoute in models.ts. This gives more flexibility for routing in your components.

[UPDATE] Changed WMLImage class to extend WMLRoute instead of WMLUIProperty in models.ts. This means WMLImage now includes routing properties route, link, and routerLink as well as cdref from WMLView
,



### v18.1.2230 [7/27/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.1.2300 [7/27/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.1.2301 [7/30/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3000 []

[MAJOR BREAKING CHANGES]WMLUIProperty id attribute is undefined by default this is for accessbility and QA so values are not all defined with ""
,

### v18.1.3000-beta0 [8/1/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.1.3000-beta1 [8/1/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.1.3000-beta2 [8/1/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.1.3000-beta3 [8/1/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.1.3000-beta4 [8/1/24]



### v18.1.3000-beta13 [8/4/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3001 [8/4/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3001 [8/4/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3002 [8/4/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3002 [8/5/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3003 [8/5/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3004 [8/5/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3005 [8/5/24]

updated package to conform with @windmillcode/angular-wml-components-base[Next
WML Schematics](/Windmillcode-Angular-CDK-Docs/schematics/wml-schematics/)