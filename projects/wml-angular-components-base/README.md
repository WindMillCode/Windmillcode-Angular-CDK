    <div class="content-panel astro-7nkwcw3z"> <div class="sl-container astro-7nkwcw3z"> <h1 id="_top" class="astro-j6tvhyss">WML Angular Components Base</h1>  </div> </div>  <div class="content-panel astro-7nkwcw3z"> <div class="sl-container astro-7nkwcw3z"> <div class="sl-markdown-content"> <p>When working on web applications, there is no standard baseline. The Angular WML Components Base Library establishes a foundation for your application, ensuring consistency and scalability. The core of this library is the <code dir="auto">WMLUIProperty</code>, which represents the basic building block of every element in a web application. This property encapsulates all the essential features, and there are several subclasses like <code dir="auto">WMLRoute</code> for routes, <code dir="auto">WMLView</code> to leverage change detection, <code dir="auto">WMLImage</code> for images  and <code dir="auto">WMLAngularMotionUIProperty</code> for CSS animations and transitions. Each class has properties and methods to optimize your work in those features of  your application. You can use this package and leave out the rest of the library and you will get very far building very robust and scalable applications</p>
<h2 id="installation">Installation</h2>
<div class="expressive-code"><link rel="stylesheet" href="/Windmillcode-Angular-CDK-Docs/_astro/ec.j8ofn.css"/><script type="module" src="/Windmillcode-Angular-CDK-Docs/_astro/ec.8zarh.js"></script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre data-language="bash"><code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">-s</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--verbose</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">@windmillcode/angular-wml-components-base</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="npm install -s --verbose @windmillcode/angular-wml-components-base"><div></div></button></div></figure></div>
<h2 id="usage">Usage</h2>
<h3 id="wmlangularmotionuiproperty"><a href="#wml-angular-motion-ui-property">WMLAngularMotionUIProperty</a></h3>
<p><strong><a href="#wml-animate-ui-property-decent-example">Decent Example</a></strong></p>
<ul>
<li>if you want a different animation for you animation states simply use a different keyframe mabye suffixing the keyframes with open and close for organization</li>
</ul>
<iframe src="https://stackblitz.com/edit/stackblitz-starters-7bnu7v?ctl=1&amp;embed=1&amp;file=src%2Fmain.ts&amp;theme=dark"></iframe>
<h3 id="wmlangularcustomcomponent">WMLAngularCustomComponent</h3>
<p><strong>Custom Components</strong></p>
<p>nearly as same as WMLCustomComponent. Refer to <a href="/Windmillcode-Angular-CDK-Docs/intro/wml-components-base/#wml-custom-component">WMLCustomComponent</a></p>
<h2 id="references">References</h2>
<h3 id="wmlangularmotionuiproperty-extends-wmlmotionuiproperty">WMLAngularMotionUIProperty extends <a href="/Windmillcode-Angular-CDK-Docs/intro/wml-components-base/#wml-motion-ui-property-reference">WMLMotionUIProperty</a></h3>















<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>motionEndEvent</td><td><code dir="auto">Subject&lt;WMLMotionUIPropertyState&gt;</code></td><td>Subject triggered when a motion animation ends.</td></tr></tbody></table>
<h3 id="wmlangularmoduleforrootprops">WMLAngularModuleForRootProps</h3>















<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">ngxTranslateLoaderFactory</code></td><td><code dir="auto">Function</code></td><td>A function that returns a new instance of <code dir="auto">WMLNGXTranslateLoader</code>.</td></tr></tbody></table>
<h3 id="wmlngxtranslateloader">WMLNGXTranslateLoader</h3>















<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">i18nLocation</code></td><td><code dir="auto">(lang: string) =&gt; any</code></td><td>A function that returns the translation file or object based on the language code.</td></tr></tbody></table>
<h4 id="methods">Methods</h4>













<table><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">getTranslation(lang: string)</code></td><td>Fetches the translations for the given language and returns an observable with the translation data.</td></tr></tbody></table>
<h3 id="functions">Functions</h3>
<h4 id="addcustomcomponent">addCustomComponent</h4>



































<table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">vcf</code></td><td><code dir="auto">ViewContainerRef</code></td><td>Angular ViewContainerRef for creating the component.</td></tr><tr><td><code dir="auto">cpnt</code></td><td><code dir="auto">Type&lt;any&gt;</code></td><td>Component type to be created.</td></tr><tr><td><code dir="auto">props</code></td><td><code dir="auto">any</code></td><td>Properties to be passed to the component.</td></tr><tr><td><code dir="auto">return</code></td><td><code dir="auto">ComponentRef&lt;any&gt;</code></td><td>Returns a reference to the created component.</td></tr><tr><td>,</td><td></td><td></td></tr></tbody></table>
<h2 id="changelog">Changelog</h2>
<h3 id="v1823100-9824">v18.2.3100 [9/8/24]</h3>
<ul>
<li>pulled features from  seperated angular features from core library to angular-wml-components-base
creating WMLAngularTestUtils,WMLAngularTestHttpHandler,WMLAngularModuleForRootProps,WMLAngularMotionUIProperty
WMLAngularCustomComponent from their orginal respective part which exlude “Angular in their name”</li>
</ul>
<h3 id="v1823100-9824-1">v18.2.3100 [9/8/24]</h3>
<ul>
<li>updated package to reflect the version  18.2.3 of @angular/core package</li>
</ul> </div> <footer class="sl-flex astro-3yyafb3n"> <div class="meta sl-flex astro-3yyafb3n">   </div> <div class="pagination-links astro-u2l5gyhi" dir="ltr"> <a href="/Windmillcode-Angular-CDK-Docs/intro/wml-components-base" rel="prev" class="astro-u2l5gyhi"> <svg aria-hidden="true" class="astro-u2l5gyhi astro-c6vsoqas" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1.5rem;"><path d="M17 11H9.41l3.3-3.29a1.004 1.004 0 1 0-1.42-1.42l-5 5a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l5 5a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095L9.41 13H17a1 1 0 0 0 0-2Z"></path></svg>  <span class="astro-u2l5gyhi"> Previous <br class="astro-u2l5gyhi"/> <span class="link-title astro-u2l5gyhi">WML Components Base</span> </span> </a> <a href="/Windmillcode-Angular-CDK-Docs/schematics/wml-schematics/" rel="next" class="astro-u2l5gyhi"> <svg aria-hidden="true" class="astro-u2l5gyhi astro-c6vsoqas" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1.5rem;"><path d="M17.92 11.62a1.001 1.001 0 0 0-.21-.33l-5-5a1.003 1.003 0 1 0-1.42 1.42l3.3 3.29H7a1 1 0 0 0 0 2h7.59l-3.3 3.29a1.002 1.002 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l5-5a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76Z"></path></svg>  <span class="astro-u2l5gyhi"> Next <br class="astro-u2l5gyhi"/> <span class="link-title astro-u2l5gyhi">WML Schematics</span> </span> </a> </div>   </footer>  </div> </div>   