    <div class="content-panel astro-7nkwcw3z"> <div class="sl-container astro-7nkwcw3z"> <h1 id="_top" class="astro-j6tvhyss">WML Field</h1>  </div> </div>  <div class="content-panel astro-7nkwcw3z"> <div class="sl-container astro-7nkwcw3z"> <div class="sl-markdown-content"> <p>The Angular WML Field library is an Angular-based framework designed to enhance the functionality and management of form fields within web applications. It provides a robust set of components and services that simplify the creation, validation, and handling of form fields, addressing common challenges faced by developers in form management. The library integrates seamlessly with Angular’s reactive forms module, offering additional utilities for field state management, validation messaging, and dynamic content loading, thereby streamlining the form development process and improving user interaction.</p>
<p>At the core of the <code dir="auto">angular-wml-field</code> library are several central components, including <code dir="auto">WMLFieldZero</code> and <code dir="auto">WMLLabelZero</code>, each serving a distinct purpose within the form management ecosystem. <code dir="auto">WMLFieldZero</code> acts as a container for individual form fields, encapsulating the logic for field rendering, validation, and interaction. It allows for the integration of custom components, enhancing flexibility and extensibility. <code dir="auto">WMLLabelZero</code>, on the other hand, is dedicated to managing field labels and validation messages, supporting dynamic content capabilities. These components are designed to work in unison, with <code dir="auto">WMLFieldZero</code> typically serving as a parent container that orchestrates the behavior of nested label and input components. Developers can customize these components through various input parameters and methods, enabling the creation of tailored form experiences that cater to specific application needs.</p>
<h2 id="installation">Installation</h2>
<div class="expressive-code"><link rel="stylesheet" href="/Windmillcode-Angular-CDK-Docs/_astro/ec.j8ofn.css"/><script type="module" src="/Windmillcode-Angular-CDK-Docs/_astro/ec.8zarh.js"></script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre data-language="bash"><code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">-s</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--verbose</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">@windmillcode/angular-wml-field</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#616671"># needed to practically work with the field</span></div></div><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">-s</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--verbose</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">@windmillcode/angular-wml-input</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="npm install -s --verbose @windmillcode/angular-wml-fieldnpm install -s --verbose @windmillcode/angular-wml-input"><div></div></button></div></figure></div>
<h2 id="usage">Usage</h2>
<h3 id="wmlfieldzero">WMLFieldZero</h3>
<h4 id="getting-started">Getting Started</h4>
<ul>
<li>For advanced customization you can have as many labels and errors</li>
</ul>
<iframe src="https://stackblitz.com/edit/stackblitz-starters-hs4nsx?ctl=1&amp;embed=1&amp;file=src%2Fmain.ts&amp;theme=dark"></iframe>
<h4 id="error-messages">Error Messages</h4>
<iframe src="https://stackblitz.com/edit/stackblitz-starters-g2agli?ctl=1&amp;embed=1&amp;file=src%2Fmain.ts&amp;theme=dark"></iframe>
<h4 id="editing-field-features">Editing Field Features</h4>
<iframe src="https://stackblitz.com/edit/stackblitz-starters-jaykgw?ctl=1&amp;embed=1&amp;file=src%2Fmain.ts&amp;theme=dark"></iframe>
<h4 id="advanced-setup">Advanced Setup</h4>
<iframe src="https://stackblitz.com/edit/stackblitz-starters-kufze9?ctl=1&amp;embed=1&amp;file=src%2Fmain.ts&amp;theme=dark"></iframe>
<h2 id="reference">Reference</h2>
<h3 id="wmlfieldzeroprops-properties">WMLFieldZeroProps Properties</h3>








































<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">self.type</code></td><td><code dir="auto">&#34;standalone&#34; | &#34;wml-card&#34;</code></td><td>Determines the type of field, either standalone or wrapped in a card.</td></tr><tr><td><code dir="auto">label.type</code></td><td><code dir="auto">&#34;custom&#34;</code></td><td>Specifies the type of label component; currently, only custom labels are supported.</td></tr><tr><td><code dir="auto">field.type</code></td><td><code dir="auto">&#34;input&#34; | &#34;custom&#34;</code></td><td>Indicates the type of field, either a standard input or a custom field component.</td></tr><tr><td><code dir="auto">field.parentForm</code></td><td><code dir="auto">FormGroup</code></td><td>The parent <code dir="auto">FormGroup</code> instance to which this field belongs.</td></tr><tr><td><code dir="auto">field.formControlName</code></td><td><code dir="auto">string</code></td><td>The name of the form control within the parent form group.</td></tr><tr><td><code dir="auto">error.type</code></td><td><code dir="auto">&#34;custom&#34;</code></td><td>Specifies the type of error display; currently, only custom error components are supported.</td></tr></tbody></table>
<h3 id="wmlfieldzeroprops-methods">WMLFieldZeroProps Methods</h3>























































<table><thead><tr><th>Method</th><th>Signature</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">getReactiveFormControl</code></td><td><code dir="auto">() =&gt; AbstractControl</code></td><td>Retrieves the <code dir="auto">AbstractControl</code> associated with this field.</td></tr><tr><td><code dir="auto">getParentForm</code></td><td><code dir="auto">() =&gt; FormGroup</code></td><td>Returns the parent <code dir="auto">FormGroup</code> of this field.</td></tr><tr><td><code dir="auto">getFormControlName</code></td><td><code dir="auto">() =&gt; string</code></td><td>Gets the name of the form control associated with this field.</td></tr><tr><td><code dir="auto">getLabel</code></td><td><code dir="auto">() =&gt; string</code></td><td>Retrieves the label’s text value.</td></tr><tr><td><code dir="auto">getRequiredLabel</code></td><td><code dir="auto">() =&gt; string</code></td><td>Fetches the required label’s text value if it exists.</td></tr><tr><td><code dir="auto">updateLabel</code></td><td><code dir="auto">(label: string) =&gt; void</code></td><td>Updates the label’s text value.</td></tr><tr><td><code dir="auto">updateRequiredLabel</code></td><td><code dir="auto">(label: string) =&gt; void</code></td><td>Updates the required label’s text value.</td></tr><tr><td><code dir="auto">deleteLabel</code></td><td><code dir="auto">() =&gt; void</code></td><td>Removes the label text.</td></tr><tr><td><code dir="auto">deleteRequiredLabelPart</code></td><td><code dir="auto">() =&gt; void</code></td><td>Removes the required label text.</td></tr></tbody></table>
<h3 id="wmllabelzeroprops-class-properties">WMLLabelZeroProps Class Properties</h3>








































<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">cdref</code></td><td><code dir="auto">ChangeDetectorRef?</code></td><td>Optional reference to Angular’s change detection mechanism.</td></tr><tr><td><code dir="auto">type</code></td><td><code dir="auto">&#39;label&#39; | &#39;error&#39;</code></td><td>Determines the label type, either for standard labels or error messages.</td></tr><tr><td><code dir="auto">isPresent</code></td><td><code dir="auto">boolean</code></td><td>Flag indicating if the label should be displayed.</td></tr><tr><td><code dir="auto">errorMsgs</code></td><td><code dir="auto">Object</code></td><td>An object containing error message mappings.</td></tr><tr><td><code dir="auto">labels</code></td><td><code dir="auto">Array&lt;Array&lt;{ type?: &#39;default&#39; | &#39;error&#39; | &#39;required&#39; | &#39;errorLink&#39; | &#39;defaultLink&#39;, value: string, isPresent?: boolean }&gt;&gt;</code></td><td>Defines the label parts and their properties.</td></tr><tr><td><code dir="auto">wmlField</code></td><td><code dir="auto">WMLFieldZeroProps</code></td><td>Reference to the associated <code dir="auto">WMLField</code> instance.</td></tr></tbody></table>
<h3 id="wmllabelzeroprops-class-methods">WMLLabelZeroProps Class Methods</h3>















<table><thead><tr><th>Method</th><th>Signature</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">toggleErrors</code></td><td><code dir="auto">(formControl: AbstractControl) =&gt; string[]</code></td><td>Determines which error messages to display based on the form control’s state. Used interally probably triggerable plans to make it fully triggerable so if the errorMsgs are updated you can manually update the erros in the view</td></tr></tbody></table>
<h2 id="changelog">Changelog</h2>
<h3 id="v006">v0.0.6</h3>
<p>added updateLabel and updateRequiredLabel wrappers for updateLabelPart which allow to update the input of a field</p>
<h3 id="v100">v1.0.0</h3>
<ul>
<li>ensured that there is support for ngx-translate and non ngx-translate features</li>
<li>to enable translation</li>
</ul>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="ts"><code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">export</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8D46B4">function</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">HttpLoaderFactory</span><span style="--0:#D9F5DD;--1:#111111">(</span><span style="--0:#D7DBE0;--1:#403F53">http</span><span style="--0:#7FDBCA;--1:#097174">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--1:#111111"><span style="--0:#FFCB8B">HttpClient</span><span style="--0:#D9F5DD">)</span></span><span style="--0:#D6DEEB;--1:#403F53"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#C792EA;--1:#8D46B4">return</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#7FDBCA;--1:#097174">new</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">TranslateHttpLoader</span><span style="--0:#D6DEEB;--1:#403F53">(http);</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">HttpClientModule,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">WMLFieldModule</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">forChild</span><span style="--0:#D6DEEB;--1:#403F53">(</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#7FDBCA;--1:#097174">new</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">WMLModuleForRootProps</span><span style="--0:#D6DEEB;--1:#403F53">({</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">ngxTranslateLoaderFactory:HttpLoaderFactory</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">})</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">),</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="export function HttpLoaderFactory(http: HttpClient) {  return new TranslateHttpLoader(http);}    HttpClientModule,    WMLFieldModule    .forChild(      new WMLModuleForRootProps({        ngxTranslateLoaderFactory:HttpLoaderFactory      })    ),"><div></div></button></div></figure></div>
<ul>
<li>to disable translation</li>
</ul>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="ts"><code><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">WMLFieldModule</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="    WMLFieldModule"><div></div></button></div></figure></div>
<h3 id="200">2.0.0</h3>
<ul>
<li>MAJOR rename to angular-wml-field
<ul>
<li>fixed major problems concerning ngx-translate</li>
</ul>
</li>
</ul>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="ts"><code><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// translate</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// first make sure to have ONLY ONE in the imports for AppModule</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">TranslateModule</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">forRoot</span><span style="--0:#D6DEEB;--1:#403F53">({</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">defaultLanguage: </span><span style="--0:#D9F5DD;--1:#111111">&#39;</span><span style="--0:#ECC48D;--1:#9B504E">en</span><span style="--0:#D9F5DD;--1:#111111">&#39;</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">loader: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">provide: TranslateLoader,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">useFactory: HttpLoaderFactory,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">deps:[HttpClient]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">}),</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// then</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">WMLFieldNGXTranslateModule</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// for regular</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">WMLFieldModule</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="// translate// first make sure to have ONLY ONE in the imports for AppModule    TranslateModule.forRoot({      defaultLanguage: &#39;en&#39;,      loader: {        provide: TranslateLoader,        useFactory: HttpLoaderFactory,        deps:[HttpClient]      }    }),// thenWMLFieldNGXTranslateModule// for regularWMLFieldModule"><div></div></button></div></figure></div>
<ul>
<li>package uses @windmillcode/angular-wml-components-base</li>
</ul>
<h3 id="210">2.1.0</h3>
<ul>
<li>provided serveral methods to help with retrieving different values realted to the fields</li>
</ul>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="ts"><code><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">getReactiveFormControl</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">getLabel</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">getRequiredLabel</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">getLabelPart</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">updateLabel</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">updateRequiredLabel</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">updateLabelPart</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">deleteLabelPart</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">deleteRequiredLabelPart</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">deleteLabel</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="getReactiveFormControlgetLabelgetRequiredLabelgetLabelPartupdateLabelupdateRequiredLabelupdateLabelPartdeleteLabelPartdeleteRequiredLabelPartdeleteLabel"><div></div></button></div></figure></div>
<h3 id="211">2.1.1</h3>
<ul>
<li>made id accessible on selector itself, access via wmlField.view.id</li>
</ul>
<h3 id="16260">16.2.60</h3>
<ul>
<li>added
WMLField#getParentForm
WMLField#getFormControlName
as additional methods</li>
</ul>
<h3 id="16270">16.2.70</h3>
<ul>
<li>added addititional features
%!(EXTRA string=</li>
</ul>
<h3 id="v16280">v16.2.80</h3>
<ul>
<li>updated package to reflect the version  16.2.80 of @angular/core package),</li>
</ul>
<h3 id="v16280-1">v16.2.80</h3>
<ul>
<li>updated package to reflect the version  16.2.80 of @angular/core package,</li>
</ul>
<h3 id="v16290">v16.2.90</h3>
<ul>
<li>updated package to reflect the version  16.2.90 of @angular/core package,</li>
</ul>
<h3 id="v16291">v16.2.91</h3>
<ul>
<li>updated package to reflect the version  16.2.91 of @angular/core package</li>
</ul>
<h3 id="v16292">v16.2.92</h3>
<ul>
<li>made BREAKING CHANGES to wmlfield replacing all WMLCustomComponent.meta with WMLCustomComponent.props
,</li>
</ul>
<h3 id="v16293">v16.2.93</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,</li>
</ul>
<h3 id="v162100">v16.2.100</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,</li>
</ul>
<h3 id="v162110">v16.2.110</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,</li>
</ul>
<h3 id="v162120">v16.2.120</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,</li>
</ul>
<h3 id="v17010">v17.0.10</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,</li>
</ul>
<h3 id="v17011">v17.0.11</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,</li>
</ul>
<h3 id="v17020">v17.0.20</h3>
<ul>
<li>updated package to reflect the version  ^17.0.2 of @angular/core package,</li>
</ul>
<h3 id="v17040">v17.0.40</h3>
<ul>
<li>updated package to reflect the version  ^17.0.4 of @angular/core package,</li>
</ul>
<h3 id="v17050">v17.0.50</h3>
<ul>
<li>updated package to reflect the version  ^17.0.5 of @angular/core package,</li>
</ul>
<h3 id="v17060">v17.0.60</h3>
<ul>
<li>updated package to reflect the version  ^17.0.6 of @angular/core package,</li>
</ul>
<h3 id="v17070">v17.0.70</h3>
<ul>
<li>updated package to reflect the version  ^17.0.7 of @angular/core package,</li>
</ul>
<h3 id="v1707100">v17.0.7100</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base   ,</li>
</ul>
<h3 id="v1707200">v17.0.7200</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base   ,</li>
</ul>
<h3 id="v1707300">v17.0.7300</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base   ,</li>
</ul>
<h3 id="v17080">v17.0.80</h3>
<ul>
<li>updated package to reflect the version  ^17.0.8 of @angular/core package,</li>
</ul>
<h3 id="v1708100">v17.0.8100</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base   ,</li>
</ul>
<h3 id="v1708102">v17.0.8102</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base   ,</li>
</ul>
<h3 id="v1708103">v17.0.8103</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base   ,</li>
</ul>
<h3 id="v1709000">v17.0.9000</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base   ,</li>
</ul>
<h3 id="v1709001">v17.0.9001</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base   ,</li>
</ul>
<h3 id="v1710000">v17.1.0000</h3>
<ul>
<li>updated package to reflect the version  ^17.1.0 of @angular/core package,</li>
</ul>
<h3 id="v1712">v17.1.2</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base   ,</li>
</ul>
<h3 id="v1711000">v17.1.1000</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base   ,</li>
</ul>
<h3 id="v1712000-2524">v17.1.2000 [2/5/24]</h3>
<ul>
<li>updated package to reflect the version  ^17.1.2 of @angular/core package,</li>
</ul>
<h3 id="v1712001-2824">v17.1.2001 [2/8/24]</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base   ,</li>
</ul>
<h3 id="v1713000-2824">v17.1.3000 [2/8/24]</h3>
<ul>
<li>updated package to reflect the version  ^17.1.3 of @angular/core package,</li>
</ul>
<h3 id="v1721000-21724">v17.2.1000 [2/17/24]</h3>
<ul>
<li>updated package to reflect the version  ^17.2.1 of @angular/core package,</li>
</ul>
<h3 id="v1722000-22324">v17.2.2000 [2/23/24]</h3>
<ul>
<li>updated package to reflect the version  ^17.2.2 of @angular/core package,</li>
</ul>
<h3 id="v1722001-22324">v17.2.2001 [2/23/24]</h3>
<ul>
<li>updated package to reflect the version  ^17.2.2 of @angular/core package,</li>
</ul>
<h3 id="v1723000-22824">v17.2.3000 [2/28/24]</h3>
<ul>
<li>updated package to reflect the version  ^17.2.3 of @angular/core package,</li>
</ul>
<h3 id="v1723001-3224">v17.2.3001 [3/2/24]</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base   ,</li>
</ul>
<h3 id="v1723002-3524">v17.2.3002 [3/5/24]</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base   ,</li>
</ul>
<h3 id="v1724000-3824">v17.2.4000 [3/8/24]</h3>
<ul>
<li>updated package to reflect the version  ^17.2.4 of @angular/core package,</li>
</ul>
<h3 id="v1724001-31224">v17.2.4001 [3/12/24]</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base   ,</li>
</ul>
<h3 id="v1724002-31224">v17.2.4002 [3/12/24]</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base   ,</li>
</ul>
<h3 id="v1724003-31324">v17.2.4003 [3/13/24]</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base   ,</li>
</ul>
<h3 id="v1724004-31324">v17.2.4004 [3/13/24]</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base   ,</li>
</ul>
<h3 id="v1730-31724">v17.3.0 [3/17/24]</h3>
<ul>
<li>updated package to reflect the version  ^17.3.0 of @angular/core package
,</li>
</ul>
<h3 id="v1731000-32224">v17.3.1000 [3/22/24]</h3>
<ul>
<li>updated package to reflect the version  ^17.3.1 of @angular/core package,</li>
</ul>
<h3 id="v1732000-32824">v17.3.2000 [3/28/24]</h3>
<ul>
<li>updated package to reflect the version  ^17.3.2 of @angular/core package,</li>
</ul>
<h3 id="v1733000-4424">v17.3.3000 [4/4/24]</h3>
<ul>
<li>updated package to reflect the version  ^17.3.3 of @angular/core package,</li>
</ul>
<h3 id="v1734000-41124">v17.3.4000 [4/11/24]</h3>
<ul>
<li>updated package to reflect the version  ^17.3.4 of @angular/core package,</li>
</ul>
<h3 id="v1734001-41624">v17.3.4001 [4/16/24]</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base   ,</li>
</ul>
<h3 id="v1735000-42024">v17.3.5000 [4/20/24]</h3>
<ul>
<li>updated package to reflect the version  ^17.3.5 of @angular/core package,</li>
</ul>
<h3 id="v1735110-5124">v17.3.5110 [5/1/24]</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base
[PATCH]
Enhanced WMLField class in wml-field.component.ts by adding generic types for form control and parameters, allowing more flexible and type-safe custom component integrations.</li>
</ul>
<p>[UPDATE]
Added getFieldProps and updated getReactiveFormControl methods in WMLField class for better handling and customization of form controls and their properties.
,</p>
<h3 id="v1736000-5124">v17.3.6000 [5/1/24]</h3>
<ul>
<li>updated package to reflect the version  ^17.3.6 of @angular/core package,</li>
</ul>
<h3 id="v1737000-5924">v17.3.7000 [5/9/24]</h3>
<ul>
<li>updated package to reflect the version  ^17.3.7 of @angular/core package,</li>
</ul>
<h3 id="v1738000-5924">v17.3.8000 [5/9/24]</h3>
<ul>
<li>updated package to reflect the version  ^17.3.8 of @angular/core package,</li>
</ul>
<h3 id="v1739000-51624">v17.3.9000 [5/16/24]</h3>
<ul>
<li>updated package to reflect the version  ^17.3.9 of @angular/core package,</li>
</ul>
<h3 id="v1801-52224">v18.0.1 [5/22/24]</h3>
<ul>
<li>updated package to reflect the version  ^18.0.0 of @angular/core package,</li>
</ul>
<h3 id="v1804-52524">v18.0.4 [5/25/24]</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base   ,</li>
</ul>
<h3 id="v1801000-52924">v18.0.1000 [5/29/24]</h3>
<ul>
<li>updated package to reflect the version  ^18.0.1 of @angular/core package,</li>
</ul>
<h3 id="v1802000-6624">v18.0.2000 [6/6/24]</h3>
<ul>
<li>updated package to reflect the version  ^18.0.2 of @angular/core package,</li>
</ul>
<h3 id="v1803000-61324">v18.0.3000 [6/13/24]</h3>
<ul>
<li>updated package to reflect the version  ^18.0.3 of @angular/core package,</li>
</ul>
<h3 id="v1803010-61824">v18.0.3010 [6/18/24]</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base   ,</li>
</ul>
<h3 id="v1804000-62324">v18.0.4000 [6/23/24]</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base   ,</li>
</ul>
<h3 id="v1805000-62624">v18.0.5000 [6/26/24]</h3>
<ul>
<li>updated package to reflect the version  ^18.0.5 of @angular/core package,</li>
</ul>
<h3 id="v1806000-7524">v18.0.6000 [7/5/24]</h3>
<ul>
<li>updated package to reflect the version  ^18.0.6 of @angular/core package,</li>
</ul>
<h3 id="v1813-71324">v18.1.3 [7/13/24]</h3>
<ul>
<li>updated package to reflect the version  ^18.1.0 of @angular/core package,</li>
</ul>
<h3 id="v1814-71324">v18.1.4 [7/13/24]</h3>
<ul>
<li>updated package to reflect the version  ^18.1.0 of @angular/core package,</li>
</ul>
<h3 id="v1816-71424">v18.1.6 [7/14/24]</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base   ,</li>
</ul>
<h3 id="v1811000-71824">v18.1.1000 [7/18/24]</h3>
<ul>
<li>updated package to reflect the version  ^18.1.1 of @angular/core package,</li>
</ul>
<h3 id="v1812000-72424">v18.1.2000 [7/24/24]</h3>
<ul>
<li>updated package to reflect the version  ^18.1.2 of @angular/core package</li>
</ul>
<h3 id="v1812100-72624">v18.1.2100 [7/26/24]</h3>
<ul>
<li>[BREAKING CHANGE] replaced main tags with div tags
,</li>
</ul>
<h3 id="v1812300-72724">v18.1.2300 [7/27/24]</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base   ,</li>
</ul>
<h3 id="v1812301-73024">v18.1.2301 [7/30/24]</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base
,</li>
</ul>
<h3 id="v1813000-beta1-8124">v18.1.3000-beta1 [8/1/24]</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base   ,</li>
</ul>
<h3 id="v1813000-beta2-8124">v18.1.3000-beta2 [8/1/24]</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base   ,</li>
</ul>
<h3 id="v1813000-beta3-8124">v18.1.3000-beta3 [8/1/24]</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base   ,</li>
</ul>
<h3 id="v1813000-beta4-8124">v18.1.3000-beta4 [8/1/24]</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base</li>
</ul>
<h3 id="v1813001">v18.1.3001</h3>
<ul>
<li>[BREAKING CHANGES] WMLFieldZero props default constructor object property is now a WMLDeepPartial of the class</li>
</ul>
<h3 id="v1813001-8424">v18.1.3001 [8/4/24]</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base</li>
</ul>
<h3 id="v1813002-8424">v18.1.3002 [8/4/24]</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base</li>
</ul>
<h3 id="v1813001-8424-1">v18.1.3001 [8/4/24]</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base</li>
</ul>
<h3 id="v1813002-8524">v18.1.3002 [8/5/24]</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base</li>
</ul>
<h3 id="v1813003-8524">v18.1.3003 [8/5/24]</h3>
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
<li>updated package to reflect the version  18.2.1 of @angular/core package</li>
</ul>
<h3 id="v1822000-83024">v18.2.2000 [8/30/24]</h3>
<ul>
<li>updated package to reflect the version  18.2.2 of @angular/core package</li>
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
<li>updated package to reflect the version  18.2.3 of @angular/core package</li>
</ul>
<h3 id="v1823100-9824">v18.2.3100 [9/8/24]</h3>
<ul>
<li>updated package to reflect the version  18.2.3 of @angular/core package</li>
</ul> </div> <footer class="sl-flex astro-3yyafb3n"> <div class="meta sl-flex astro-3yyafb3n">   </div> <div class="pagination-links astro-u2l5gyhi" dir="ltr"> <a href="/Windmillcode-Angular-CDK-Docs/components/wml-chips/" rel="prev" class="astro-u2l5gyhi"> <svg aria-hidden="true" class="astro-u2l5gyhi astro-c6vsoqas" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1.5rem;"><path d="M17 11H9.41l3.3-3.29a1.004 1.004 0 1 0-1.42-1.42l-5 5a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l5 5a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095L9.41 13H17a1 1 0 0 0 0-2Z"></path></svg>  <span class="astro-u2l5gyhi"> Previous <br class="astro-u2l5gyhi"/> <span class="link-title astro-u2l5gyhi">WML Chips</span> </span> </a> <a href="/Windmillcode-Angular-CDK-Docs/components/wml-file-manager/" rel="next" class="astro-u2l5gyhi"> <svg aria-hidden="true" class="astro-u2l5gyhi astro-c6vsoqas" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1.5rem;"><path d="M17.92 11.62a1.001 1.001 0 0 0-.21-.33l-5-5a1.003 1.003 0 1 0-1.42 1.42l3.3 3.29H7a1 1 0 0 0 0 2h7.59l-3.3 3.29a1.002 1.002 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l5-5a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76Z"></path></svg>  <span class="astro-u2l5gyhi"> Next <br class="astro-u2l5gyhi"/> <span class="link-title astro-u2l5gyhi">WML File Manager</span> </span> </a> </div>   </footer>  </div> </div>   