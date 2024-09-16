# WML Field

The Angular WML Field library is an Angular-based framework designed to enhance the functionality and management of form fields within web applications. It provides a robust set of components and services that simplify the creation, validation, and handling of form fields, addressing common challenges faced by developers in form management. The library integrates seamlessly with Angular’s reactive forms module, offering additional utilities for field state management, validation messaging, and dynamic content loading, thereby streamlining the form development process and improving user interaction.

At the core of the <code dir="auto">angular-wml-field</code> library are several central components, including <code dir="auto">WMLFieldZero</code> and <code dir="auto">WMLLabelZero</code> , each serving a distinct purpose within the form management ecosystem. <code dir="auto">WMLFieldZero</code> acts as a container for individual form fields, encapsulating the logic for field rendering, validation, and interaction. It allows for the integration of custom components, enhancing flexibility and extensibility. <code dir="auto">WMLLabelZero</code> , on the other hand, is dedicated to managing field labels and validation messages, supporting dynamic content capabilities. These components are designed to work in unison, with <code dir="auto">WMLFieldZero</code> typically serving as a parent container that orchestrates the behavior of nested label and input components. Developers can customize these components through various input parameters and methods, enabling the creation of tailored form experiences that cater to specific application needs.



## Installation

Terminal window<code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">-s</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--verbose</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">@windmillcode/angular-wml-field</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#616671"># needed to practically work with the field</span></div></div><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">-s</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--verbose</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">@windmillcode/angular-wml-input</span></div></div></code>



## Usage



### WMLFieldZero

Getting StartedFor advanced customization you can have as many labels and errors<iframe src="https://stackblitz.com/edit/stackblitz-starters-hs4nsx?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>Error Messages<iframe src="https://stackblitz.com/edit/stackblitz-starters-g2agli?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>Editing Field Features<iframe src="https://stackblitz.com/edit/stackblitz-starters-jaykgw?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>Advanced Setup<iframe src="https://stackblitz.com/edit/stackblitz-starters-kufze9?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

## Reference



### WMLFieldZeroProps Properties

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">self.type</code></td><td><code dir="auto">&#34;standalone&#34; | &#34;wml-card&#34;</code></td><td>Determines the type of field, either standalone or wrapped in a card.</td></tr><tr><td><code dir="auto">label.type</code></td><td><code dir="auto">&#34;custom&#34;</code></td><td>Specifies the type of label component; currently, only custom labels are supported.</td></tr><tr><td><code dir="auto">field.type</code></td><td><code dir="auto">&#34;input&#34; | &#34;custom&#34;</code></td><td>Indicates the type of field, either a standard input or a custom field component.</td></tr><tr><td><code dir="auto">field.parentForm</code></td><td><code dir="auto">FormGroup</code></td><td>The parent <code dir="auto">FormGroup</code> instance to which this field belongs.</td></tr><tr><td><code dir="auto">field.formControlName</code></td><td><code dir="auto">string</code></td><td>The name of the form control within the parent form group.</td></tr><tr><td><code dir="auto">error.type</code></td><td><code dir="auto">&#34;custom&#34;</code></td><td>Specifies the type of error display; currently, only custom error components are supported.</td></tr></tbody></table>



### WMLFieldZeroProps Methods

<table><thead><tr><th>Method</th><th>Signature</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">getReactiveFormControl</code></td><td><code dir="auto">() =&gt; AbstractControl</code></td><td>Retrieves the <code dir="auto">AbstractControl</code> associated with this field.</td></tr><tr><td><code dir="auto">getParentForm</code></td><td><code dir="auto">() =&gt; FormGroup</code></td><td>Returns the parent <code dir="auto">FormGroup</code> of this field.</td></tr><tr><td><code dir="auto">getFormControlName</code></td><td><code dir="auto">() =&gt; string</code></td><td>Gets the name of the form control associated with this field.</td></tr><tr><td><code dir="auto">getLabel</code></td><td><code dir="auto">() =&gt; string</code></td><td>Retrieves the label’s text value.</td></tr><tr><td><code dir="auto">getRequiredLabel</code></td><td><code dir="auto">() =&gt; string</code></td><td>Fetches the required label’s text value if it exists.</td></tr><tr><td><code dir="auto">updateLabel</code></td><td><code dir="auto">(label: string) =&gt; void</code></td><td>Updates the label’s text value.</td></tr><tr><td><code dir="auto">updateRequiredLabel</code></td><td><code dir="auto">(label: string) =&gt; void</code></td><td>Updates the required label’s text value.</td></tr><tr><td><code dir="auto">deleteLabel</code></td><td><code dir="auto">() =&gt; void</code></td><td>Removes the label text.</td></tr><tr><td><code dir="auto">deleteRequiredLabelPart</code></td><td><code dir="auto">() =&gt; void</code></td><td>Removes the required label text.</td></tr></tbody></table>



### WMLLabelZeroProps Class Properties

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">cdref</code></td><td><code dir="auto">ChangeDetectorRef?</code></td><td>Optional reference to Angular’s change detection mechanism.</td></tr><tr><td><code dir="auto">type</code></td><td><code dir="auto">&#39;label&#39; | &#39;error&#39;</code></td><td>Determines the label type, either for standard labels or error messages.</td></tr><tr><td><code dir="auto">isPresent</code></td><td><code dir="auto">boolean</code></td><td>Flag indicating if the label should be displayed.</td></tr><tr><td><code dir="auto">errorMsgs</code></td><td><code dir="auto">Object</code></td><td>An object containing error message mappings.</td></tr><tr><td><code dir="auto">labels</code></td><td><code dir="auto">Array&lt;Array&lt;{ type?: &#39;default&#39; | &#39;error&#39; | &#39;required&#39; | &#39;errorLink&#39; | &#39;defaultLink&#39;, value: string, isPresent?: boolean }&gt;&gt;</code></td><td>Defines the label parts and their properties.</td></tr><tr><td><code dir="auto">wmlField</code></td><td><code dir="auto">WMLFieldZeroProps</code></td><td>Reference to the associated <code dir="auto">WMLField</code> instance.</td></tr></tbody></table>



### WMLLabelZeroProps Class Methods

<table><thead><tr><th>Method</th><th>Signature</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">toggleErrors</code></td><td><code dir="auto">(formControl: AbstractControl) =&gt; string[]</code></td><td>Determines which error messages to display based on the form control’s state. Used interally probably triggerable plans to make it fully triggerable so if the errorMsgs are updated you can manually update the erros in the view</td></tr></tbody></table>



## Changelog



### v0.0.6

added updateLabel and updateRequiredLabel wrappers for updateLabelPart which allow to update the input of a field



### v1.0.0

ensured that there is support for ngx-translate and non ngx-translate featuresto enable translation<code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">export</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8D46B4">function</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">HttpLoaderFactory</span><span style="--0:#D9F5DD;--1:#111111">(</span><span style="--0:#D7DBE0;--1:#403F53">http</span><span style="--0:#7FDBCA;--1:#097174">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--1:#111111"><span style="--0:#FFCB8B">HttpClient</span><span style="--0:#D9F5DD">)</span></span><span style="--0:#D6DEEB;--1:#403F53"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#C792EA;--1:#8D46B4">return</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#7FDBCA;--1:#097174">new</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">TranslateHttpLoader</span><span style="--0:#D6DEEB;--1:#403F53">(http);</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">HttpClientModule,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">WMLFieldModule</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">forChild</span><span style="--0:#D6DEEB;--1:#403F53">(</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#7FDBCA;--1:#097174">new</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">WMLModuleForRootProps</span><span style="--0:#D6DEEB;--1:#403F53">({</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">ngxTranslateLoaderFactory:HttpLoaderFactory</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">})</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">),</span></div></div></code>

to disable translation <code><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">WMLFieldModule</span></div></div></code> 

### 2.0.0

MAJOR rename to angular-wml-fieldfixed major problems concerning ngx-translate<code><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// translate</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// first make sure to have ONLY ONE in the imports for AppModule</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">TranslateModule</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">forRoot</span><span style="--0:#D6DEEB;--1:#403F53">({</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">defaultLanguage: </span><span style="--0:#D9F5DD;--1:#111111">&#39;</span><span style="--0:#ECC48D;--1:#9B504E">en</span><span style="--0:#D9F5DD;--1:#111111">&#39;</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">loader: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">provide: TranslateLoader,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">useFactory: HttpLoaderFactory,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">deps:[HttpClient]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">}),</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// then</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">WMLFieldNGXTranslateModule</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// for regular</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">WMLFieldModule</span></div></div></code>

package uses @windmillcode/angular-wml-components-base

### 2.1.0

provided serveral methods to help with retrieving different values realted to the fields<code><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">getReactiveFormControl</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">getLabel</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">getRequiredLabel</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">getLabelPart</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">updateLabel</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">updateRequiredLabel</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">updateLabelPart</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">deleteLabelPart</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">deleteRequiredLabelPart</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">deleteLabel</span></div></div></code>



### 2.1.1

made id accessible on selector itself, access via wmlField.view.id

### 16.2.60

added
WMLField#getParentForm
WMLField#getFormControlName
as additional methods

### 16.2.70

added addititional features
%!(EXTRA string=

### v16.2.80

updated package to reflect the version  16.2.80 of @angular/core package),

### v16.2.80

updated package to reflect the version  16.2.80 of @angular/core package,

### v16.2.90

updated package to reflect the version  16.2.90 of @angular/core package,

### v16.2.91

updated package to reflect the version  16.2.91 of @angular/core package

### v16.2.92

made BREAKING CHANGES to wmlfield replacing all WMLCustomComponent.meta with WMLCustomComponent.props
,

### v16.2.93

updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,

### v16.2.100

updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,

### v16.2.110

updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,

### v16.2.120

updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,

### v17.0.10

updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,

### v17.0.11

updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,

### v17.0.20

updated package to reflect the version  ^17.0.2 of @angular/core package,

### v17.0.40

updated package to reflect the version  ^17.0.4 of @angular/core package,

### v17.0.50

updated package to reflect the version  ^17.0.5 of @angular/core package,

### v17.0.60

updated package to reflect the version  ^17.0.6 of @angular/core package,

### v17.0.70

updated package to reflect the version  ^17.0.7 of @angular/core package,

### v17.0.7100

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.0.7200

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.0.7300

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.0.80

updated package to reflect the version  ^17.0.8 of @angular/core package,

### v17.0.8100

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.0.8102

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.0.8103

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.0.9000

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.0.9001

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.1.0000

updated package to reflect the version  ^17.1.0 of @angular/core package,

### v17.1.2

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.1.1000

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.1.2000 [2/5/24]

updated package to reflect the version  ^17.1.2 of @angular/core package,

### v17.1.2001 [2/8/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.1.3000 [2/8/24]

updated package to reflect the version  ^17.1.3 of @angular/core package,

### v17.2.1000 [2/17/24]

updated package to reflect the version  ^17.2.1 of @angular/core package,

### v17.2.2000 [2/23/24]

updated package to reflect the version  ^17.2.2 of @angular/core package,

### v17.2.2001 [2/23/24]

updated package to reflect the version  ^17.2.2 of @angular/core package,

### v17.2.3000 [2/28/24]

updated package to reflect the version  ^17.2.3 of @angular/core package,

### v17.2.3001 [3/2/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.2.3002 [3/5/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.2.4000 [3/8/24]

updated package to reflect the version  ^17.2.4 of @angular/core package,

### v17.2.4001 [3/12/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

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

updated package to reflect the version  ^17.3.4 of @angular/core package,

### v17.3.4001 [4/16/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.3.5000 [4/20/24]

updated package to reflect the version  ^17.3.5 of @angular/core package,

### v17.3.5110 [5/1/24]

updated package to conform with @windmillcode/angular-wml-components-base
[PATCH]
Enhanced WMLField class in wml-field.component.ts by adding generic types for form control and parameters, allowing more flexible and type-safe custom component integrations.[UPDATE]
Added getFieldProps and updated getReactiveFormControl methods in WMLField class for better handling and customization of form controls and their properties.
,



### v17.3.6000 [5/1/24]

updated package to reflect the version  ^17.3.6 of @angular/core package,

### v17.3.7000 [5/9/24]

updated package to reflect the version  ^17.3.7 of @angular/core package,

### v17.3.8000 [5/9/24]

updated package to reflect the version  ^17.3.8 of @angular/core package,

### v17.3.9000 [5/16/24]

updated package to reflect the version  ^17.3.9 of @angular/core package,

### v18.0.1 [5/22/24]

updated package to reflect the version  ^18.0.0 of @angular/core package,

### v18.0.4 [5/25/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.0.1000 [5/29/24]

updated package to reflect the version  ^18.0.1 of @angular/core package,

### v18.0.2000 [6/6/24]

updated package to reflect the version  ^18.0.2 of @angular/core package,

### v18.0.3000 [6/13/24]

updated package to reflect the version  ^18.0.3 of @angular/core package,

### v18.0.3010 [6/18/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.0.4000 [6/23/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.0.5000 [6/26/24]

updated package to reflect the version  ^18.0.5 of @angular/core package,

### v18.0.6000 [7/5/24]

updated package to reflect the version  ^18.0.6 of @angular/core package,

### v18.1.3 [7/13/24]

updated package to reflect the version  ^18.1.0 of @angular/core package,

### v18.1.4 [7/13/24]

updated package to reflect the version  ^18.1.0 of @angular/core package,

### v18.1.6 [7/14/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.1.1000 [7/18/24]

updated package to reflect the version  ^18.1.1 of @angular/core package,

### v18.1.2000 [7/24/24]

updated package to reflect the version  ^18.1.2 of @angular/core package

### v18.1.2100 [7/26/24]

[BREAKING CHANGE] replaced main tags with div tags
,

### v18.1.2300 [7/27/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.1.2301 [7/30/24]

updated package to conform with @windmillcode/angular-wml-components-base
,

### v18.1.3000-beta1 [8/1/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.1.3000-beta2 [8/1/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.1.3000-beta3 [8/1/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.1.3000-beta4 [8/1/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3001

[BREAKING CHANGES] WMLFieldZero props default constructor object property is now a WMLDeepPartial of the class

### v18.1.3001 [8/4/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3002 [8/4/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3001 [8/4/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3002 [8/5/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3003 [8/5/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3004 [8/5/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3005 [8/5/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3006 [8/5/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3007 [8/5/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.4000 [8/14/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.4001 [8/14/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.2.0 [8/15/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.2.1 [8/20/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.2.1000 [8/22/24]

updated package to reflect the version  18.2.1 of @angular/core package

### v18.2.2000 [8/30/24]

updated package to reflect the version  18.2.2 of @angular/core package

### v18.2.2100 [9/1/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.2.2101 [9/1/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.2.2200 [9/3/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.2.3000 [9/4/24]

updated package to reflect the version  18.2.3 of @angular/core package

### v18.2.3100 [9/8/24]

updated package to reflect the version  18.2.3 of @angular/core package

### v18.2.3110 [9/10/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.2.3112 [9/10/24]

updated package to conform with @windmillcode/angular-wml-components-base[](/Windmillcode-Angular-CDK-Docs/components/wml-chips/)[](/Windmillcode-Angular-CDK-Docs/components/wml-file-manager/)