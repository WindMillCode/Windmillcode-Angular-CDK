# WML Angular Components Base

WML Angular Components Base extends the WML Components Base by integrating it with Angular-specific features and functionality. It builds on the foundation provided by the core library and adds seamless integration with Angular’s framework, making it easier to work with Angular modules, change detection, and Angular-based services like ngx-translate.

While WML Components Base provides the essential UI building blocks, WML Angular Components Base enhances these components to work natively with Angular. This includes adding support for Angular’s dependency injection, change detection, routing, and lifecycle hooks.



## Installation

Terminal window <code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">-s</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--verbose</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">@windmillcode/angular-wml-components-base</span></div></div></code> 

## Usage



### [WMLAngularMotionUIProperty](#wml-angular-motion-ui-property)

**[Decent Example](#wml-animate-ui-property-decent-example)**

if you want a different animation for you animation states simply use a different keyframe mabye suffixing the keyframes with open and close for organization<iframe src="https://stackblitz.com/edit/stackblitz-starters-7bnu7v?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### WMLAngularCustomComponent

**Custom Components**

nearly as same as WMLCustomComponent. Refer to[WMLCustomComponent](/Windmillcode-Angular-CDK-Docs/intro/wml-components-base/#wml-custom-component)



## References



### WMLAngularMotionUIProperty extends[WMLMotionUIProperty](/Windmillcode-Angular-CDK-Docs/intro/wml-components-base/#wml-motion-ui-property-reference)

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>motionEndEvent</td><td><code dir="auto">Subject&lt;WMLMotionUIPropertyState&gt;</code></td><td>Subject triggered when a motion animation ends.</td></tr></tbody></table>



### WMLAngularModuleForRootProps

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">ngxTranslateLoaderFactory</code></td><td><code dir="auto">Function</code></td><td>A function that returns a new instance of <code dir="auto">WMLNGXTranslateLoader</code>.</td></tr></tbody></table>



### WMLNGXTranslateLoader

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">i18nLocation</code></td><td><code dir="auto">(lang: string) =&gt; any</code></td><td>A function that returns the translation file or object based on the language code.</td></tr></tbody></table>

Methods<table><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">getTranslation(lang: string)</code></td><td>Fetches the translations for the given language and returns an observable with the translation data.</td></tr></tbody></table>



### Functions

addCustomComponent<table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">vcf</code></td><td><code dir="auto">ViewContainerRef</code></td><td>Angular ViewContainerRef for creating the component.</td></tr><tr><td><code dir="auto">cpnt</code></td><td><code dir="auto">Type&lt;any&gt;</code></td><td>Component type to be created.</td></tr><tr><td><code dir="auto">props</code></td><td><code dir="auto">any</code></td><td>Properties to be passed to the component.</td></tr><tr><td><code dir="auto">return</code></td><td><code dir="auto">ComponentRef&lt;any&gt;</code></td><td>Returns a reference to the created component.</td></tr><tr><td>,</td><td></td><td></td></tr></tbody></table>



## Changelog



### v18.2.3100 [9/8/24]

pulled features from  seperated angular features from core library to angular-wml-components-base
creating WMLAngularTestUtils,WMLAngularTestHttpHandler,WMLAngularModuleForRootProps,WMLAngularMotionUIProperty
WMLAngularCustomComponent from their orginal respective part which exlude “Angular in their name”

### v18.2.3100 [9/8/24]

updated package to reflect the version  18.2.3 of @angular/core package

### v18.2.3100 [9/8/24]

updated package to reflect the version  18.2.3 of @angular/core package

### v18.2.3100 [9/8/24]

updated package to reflect the version  18.2.3 of @angular/core package

### v18.2.3110 [9/10/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.2.3111 [9/10/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.2.3112 [9/10/24]

updated package to conform with @windmillcode/angular-wml-components-base[](/Windmillcode-Angular-CDK-Docs/intro/wml-components-base)[](/Windmillcode-Angular-CDK-Docs/schematics/wml-schematics/)