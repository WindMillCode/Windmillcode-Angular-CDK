# WML Chips

The Angular WML Chips library provides a highly customizable chips component for Angular applications. It offers a variety of features to enhance user interaction and improve the overall user experience.



## Installation

To install the Angular WML Chips Zero library, use the following command:

Terminal window <code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">@windmillcode/angular-wml-chips</span></div></div></code> 

## Usage



### WMLChipsZeroComponent

Getting Started<iframe src="https://stackblitz.com/edit/stackblitz-starters-g35wp3?embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>Custom Placeholder<iframe src="https://stackblitz.com/edit/stackblitz-starters-ggabo6?embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>Limit Chips<iframe src="https://stackblitz.com/edit/stackblitz-starters-8bhep3?embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>Custom Form Array<iframe src="https://stackblitz.com/edit/stackblitz-starters-nucx2q?embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>Custom Button<iframe src="https://stackblitz.com/edit/stackblitz-starters-6vwxzk?embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

## CSS Customization

The WML Chips Zero component comes with several CSS variables and SCSS mixins that allow you to customize its appearance to fit your design needs.



### CSS Variables

The following CSS variables can be customized:

<code><div class="ec-line"><div class="code"><span style="--0:#C5E478;--1:#3C63B3">:root</span><span style="--0:#D6DEEB;--1:#403F53"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#C5E478;--1:#3C63B3">--wml-chips-white</span><span style="--0:#D6DEEB;--1:#403F53">: </span><span style="--0:#F78C6C;--1:#AA0982">255</span><span style="--0:#D6DEEB;--1:#403F53">,</span><span style="--0:#F78C6C;--1:#AA0982">255</span><span style="--0:#D6DEEB;--1:#403F53">,</span><span style="--0:#F78C6C;--1:#AA0982">255</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#C5E478;--1:#3C63B3">--wml-chips-black</span><span style="--0:#D6DEEB;--1:#403F53">: </span><span style="--0:#F78C6C;--1:#AA0982">0</span><span style="--0:#D6DEEB;--1:#403F53">,</span><span style="--0:#F78C6C;--1:#AA0982">0</span><span style="--0:#D6DEEB;--1:#403F53">,</span><span style="--0:#F78C6C;--1:#AA0982">0</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#C5E478;--1:#3C63B3">--wml-chips-primary</span><span style="--0:#D6DEEB;--1:#403F53">: </span><span style="--0:#F78C6C;--1:#AA0982">144</span><span style="--0:#D6DEEB;--1:#403F53">,</span><span style="--0:#F78C6C;--1:#AA0982">238</span><span style="--0:#D6DEEB;--1:#403F53">,</span><span style="--0:#F78C6C;--1:#AA0982">144</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#C5E478;--1:#3C63B3">--wml-chips-secondary</span><span style="--0:#D6DEEB;--1:#403F53">: </span><span style="--0:#F78C6C;--1:#AA0982">112</span><span style="--0:#D6DEEB;--1:#403F53">,</span><span style="--0:#F78C6C;--1:#AA0982">112</span><span style="--0:#D6DEEB;--1:#403F53">,</span><span style="--0:#F78C6C;--1:#AA0982">112</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#C5E478;--1:#3C63B3">--wml-chips-primary-gradient</span><span style="--0:#D6DEEB;--1:#403F53">: </span><span style="--0:#C5E478;--1:#3C63B3">radial-gradient</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#FF6363;--1:#9B504E">farthest-corner</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#7FDBCA;--1:#097174">at</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--1:#AA0982"><span style="--0:#F78C6C">100</span><span style="--0:#FFEB95">%</span></span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--1:#AA0982"><span style="--0:#F78C6C">0</span><span style="--0:#FFEB95">px</span></span><span style="--0:#D6DEEB;--1:#403F53">, </span><span style="--0:#C5E478;--1:#3C63B3">rgb</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#F78C6C;--1:#AA0982">144</span><span style="--0:#D6DEEB;--1:#403F53">,</span><span style="--0:#F78C6C;--1:#AA0982">238</span><span style="--0:#D6DEEB;--1:#403F53">,</span><span style="--0:#F78C6C;--1:#AA0982">144</span><span style="--0:#D6DEEB;--1:#403F53">) </span><span style="--1:#AA0982"><span style="--0:#F78C6C">0</span><span style="--0:#FFEB95">%</span></span><span style="--0:#D6DEEB;--1:#403F53">, </span><span style="--0:#C5E478;--1:#3C63B3">rgb</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#F78C6C;--1:#AA0982">112</span><span style="--0:#D6DEEB;--1:#403F53">,</span><span style="--0:#F78C6C;--1:#AA0982">112</span><span style="--0:#D6DEEB;--1:#403F53">,</span><span style="--0:#F78C6C;--1:#AA0982">112</span><span style="--0:#D6DEEB;--1:#403F53">) </span><span style="--1:#AA0982"><span style="--0:#F78C6C">150</span><span style="--0:#FFEB95">%</span></span><span style="--0:#D6DEEB;--1:#403F53">);</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#C5E478;--1:#3C63B3">--wml-chips-secondary-gradient</span><span style="--0:#D6DEEB;--1:#403F53">: </span><span style="--0:#C5E478;--1:#3C63B3">radial-gradient</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#FF6363;--1:#9B504E">farthest-corner</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#7FDBCA;--1:#097174">at</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--1:#AA0982"><span style="--0:#F78C6C">100</span><span style="--0:#FFEB95">%</span></span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--1:#AA0982"><span style="--0:#F78C6C">0</span><span style="--0:#FFEB95">px</span></span><span style="--0:#D6DEEB;--1:#403F53">, </span><span style="--0:#7FDBCA;--1:#097174">grey</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--1:#AA0982"><span style="--0:#F78C6C">0</span><span style="--0:#FFEB95">%</span></span><span style="--0:#D6DEEB;--1:#403F53">, </span><span style="--0:#C5E478;--1:#3C63B3">rgb</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#F78C6C;--1:#AA0982">0</span><span style="--0:#D6DEEB;--1:#403F53">,</span><span style="--0:#F78C6C;--1:#AA0982">0</span><span style="--0:#D6DEEB;--1:#403F53">,</span><span style="--0:#F78C6C;--1:#AA0982">0</span><span style="--0:#D6DEEB;--1:#403F53">) </span><span style="--1:#AA0982"><span style="--0:#F78C6C">150</span><span style="--0:#FFEB95">%</span></span><span style="--0:#D6DEEB;--1:#403F53">);</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code>



## Reference



### WMLChipsZeroProps

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">limit</code></td><td><code dir="auto">number</code></td><td>The maximum number of chips allowed. Default is <code dir="auto">Infinity</code>.</td></tr><tr><td><code dir="auto">wmlField</code></td><td><code dir="auto">WMLFieldZeroProps</code></td><td>The field properties for the WML Chips component.</td></tr><tr><td><code dir="auto">formArray</code></td><td><code dir="auto">FormArray</code></td><td>The form array to store the chip values.</td></tr><tr><td><code dir="auto">updateFormArrayPredicate</code></td><td><code dir="auto">(val: string) =&gt; any</code></td><td>Function to transform chip value before adding to form array.</td></tr><tr><td><code dir="auto">placeholder</code></td><td><code dir="auto">string</code></td><td>Placeholder text for the input.</td></tr><tr><td><code dir="auto">userInputsAriaLabel</code></td><td><code dir="auto">string</code></td><td>ARIA label for user inputs.</td></tr><tr><td><code dir="auto">removeChipAriaLabel</code></td><td><code dir="auto">string</code></td><td>ARIA label for the remove chip button.</td></tr><tr><td><code dir="auto">userInputs</code></td><td><code dir="auto">Array&lt;string&gt;</code></td><td>The list of user inputs (chips).</td></tr><tr><td><code dir="auto">clearBtn</code></td><td><code dir="auto">WMLButtonOneProps</code></td><td>Properties for the clear button.</td></tr></tbody></table>



## Changelog



### v1.0.0

ensured that there is support for ngx-translate and non ngx-translate featuresto enable translation<code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">export</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8D46B4">function</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">HttpLoaderFactory</span><span style="--0:#D9F5DD;--1:#111111">(</span><span style="--0:#D7DBE0;--1:#403F53">http</span><span style="--0:#7FDBCA;--1:#097174">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--1:#111111"><span style="--0:#FFCB8B">HttpClient</span><span style="--0:#D9F5DD">)</span></span><span style="--0:#D6DEEB;--1:#403F53"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#C792EA;--1:#8D46B4">return</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#7FDBCA;--1:#097174">new</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">TranslateHttpLoader</span><span style="--0:#D6DEEB;--1:#403F53">(http);</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">HttpClientModule,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">WMLChipsZeroModule</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">forChild</span><span style="--0:#D6DEEB;--1:#403F53">(</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#7FDBCA;--1:#097174">new</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">WMLModuleForRootProps</span><span style="--0:#D6DEEB;--1:#403F53">({</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">ngxTranslateLoaderFactory:HttpLoaderFactory</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">})</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">),</span></div></div></code>

to disable translation <code><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">WMLChipsZeroModule</span></div></div></code> 

### v1.0.1 -> v1.0.2

atteptimg to fix dependencies

### 2.0.0

fixed major problems concerning ngx-translate<code><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// translate</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// first make sure to have ONLY ONE in the imports for AppModule</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">TranslateModule</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">forRoot</span><span style="--0:#D6DEEB;--1:#403F53">({</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">defaultLanguage: </span><span style="--0:#D9F5DD;--1:#111111">&#39;</span><span style="--0:#ECC48D;--1:#9B504E">en</span><span style="--0:#D9F5DD;--1:#111111">&#39;</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">loader: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">provide: TranslateLoader,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">useFactory: HttpLoaderFactory,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">deps:[HttpClient]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">}),</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// then</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">WMLChipsZeroNGXTranslateModule</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// for regular</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">WmlChipsModule</span></div></div></code>



### 3.0.0

MAJOR : reanme to angular-wml-chips-zero
%!(EXTRA string=

### v16.2.80

updated package to reflect the version  16.2.80 of @angular/core package),

### v16.2.80

updated package to reflect the version  16.2.80 of @angular/core package,

### v16.2.90

updated package to reflect the version  16.2.90 of @angular/core package,

### v16.2.91

updated package to reflect the version  16.2.91 of @angular/core package,

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

updated package to reflect the version  ^17.0.2 of @angular/core package
,

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

updated package to reflect the version  ^17.3.0 of @angular/core package,

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

updated package to reflect the version  ^17.3.5 of @angular/core package

### v17.3.5100 [4/23/24]

[BREAKING CHANGE] - removed mat-autocomplete from chip control

### v17.3.5110 [4/27/24]

[UPDATE] added wmlField so now formArray does not need to be specified and comes from wml-form
[UPDATE]
Updated chip styling in wml-chips-zero component for a more modern look and feel.[PATCH]
Removed dependency on @angular/material in wml-chips-zero, reducing the package’s dependency footprint
[UPDATE]
Introduced @windmillcode/angular-wml-button-zero in dependencies to enhance button functionalities in wml-chips-zero.
,



### v17.3.5110 [5/1/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.3.6000 [5/1/24]

updated package to reflect the version  ^17.3.6 of @angular/core package,

### v17.3.7000 [5/9/24]

updated package to reflect the version  ^17.3.7 of @angular/core package,

### v17.3.8000 [5/9/24]

updated package to reflect the version  ^17.3.8 of @angular/core package,

### v17.3.9000 [5/16/24]

updated package to reflect the version  ^17.3.9 of @angular/core package,

### v18.0.0 [5/22/24]

updated package to reflect the version  ^18.0.0 of @angular/core package,

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

### v18.1.0 [7/10/24]

updated package to reflect the version  ^18.1.0 of @angular/core package,

### v18.1.3 [7/13/24]

updated package to reflect the version  ^18.1.0 of @angular/core package,

### v18.1.4 [7/13/24]

updated package to reflect the version  ^18.1.0 of @angular/core package,

### v18.1.6 [7/14/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.1.1000 [7/18/24]

updated package to reflect the version  ^18.1.1 of @angular/core package,

### v18.1.2000 [7/24/24]

updated package to reflect the version  ^18.1.2 of @angular/core package,

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

updated package to conform with @windmillcode/angular-wml-components-base[Previous
WML Button](/Windmillcode-Angular-CDK-Docs/components/wml-button/)[Next
WML Field](/Windmillcode-Angular-CDK-Docs/components/wml-field/)