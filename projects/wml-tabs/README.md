# WML Tabs

The WML Tabs Zero component is a customizable tab component for Angular applications. It offers the following features:

Customizable Headers: Each tab can have a custom header or a predefined WML tab header.Dynamic Tab Content: The body of each tab can be customized to include any component.Event Handling: The component provides events for tab changes and updates.Responsive Design: The component is designed to be responsive and adapts to various screen sizes.Custom Styling: Supports custom styles through SCSS variables and mixins.

## Installation

To install the WML Tabs Zero component, use the following command:

Terminal window <code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">@windmillcode/angular-wml-tabs</span></div></div></code> 

## Usage

Here are some possible examples of how to use the WML Tabs Zero component:



### Getting Started

<iframe src="https://stackblitz.com/edit/stackblitz-starters-dxn2cp?embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Custom Body

<iframe src="https://stackblitz.com/edit/stackblitz-starters-vaaqrn?embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Custom Header

<iframe src="https://stackblitz.com/edit/stackblitz-starters-kfdqgi?embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Change Tab Programtically

<iframe src="https://stackblitz.com/edit/stackblitz-starters-hrdqcq?embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Listen For Tab Change

<iframe src="https://stackblitz.com/edit/stackblitz-starters-hy5tkg?embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

## Reference



### WMLTabsZeroProps

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">tabs</code></td><td><code dir="auto">Array&lt;WMLTabsZero&gt;</code></td><td>Array of tab configurations.</td></tr><tr><td><code dir="auto">setState</code></td><td><code dir="auto">(&lt;WMLTabsZeroPropsUpdateTabsSubjProps | void&gt;)=&gt; void</code></td><td>Subject for updating tabs.</td></tr><tr><td><code dir="auto">tabChangedEvent</code></td><td><code dir="auto">Subject&lt;WMLTabsZero&gt;</code></td><td>Event emitted when a tab is changed.</td></tr></tbody></table>



### WMLTabsZero

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">index</code></td><td><code dir="auto">number</code></td><td>Index of the tab.</td></tr><tr><td><code dir="auto">isChosen</code></td><td><code dir="auto">boolean</code></td><td>Indicates if the tab is currently selected.</td></tr><tr><td><code dir="auto">header</code></td><td><code dir="auto">object</code></td><td>Header configuration for the tab.</td></tr><tr><td><code dir="auto">header.type</code></td><td><code dir="auto">&#34;custom&#34; | &#34;wmlTabHeader&#34;</code></td><td>Type of header to use.</td></tr><tr><td><code dir="auto">header.wmlTabHeader</code></td><td><code dir="auto">WMLTabHeader</code></td><td>Configuration for the WML tab header.</td></tr><tr><td><code dir="auto">header.custom</code></td><td><code dir="auto">WMLCustomComponent</code></td><td>Custom header component.</td></tr><tr><td><code dir="auto">body</code></td><td><code dir="auto">WMLCustomComponent</code></td><td>Custom body component for the tab.</td></tr></tbody></table>



### WMLTabsZeroPropsUpdateTabsSubjProps

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">currentTable</code></td><td><code dir="auto">number</code></td><td>Index of the current active tab.</td></tr></tbody></table>



### WMLTabHeader

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">isChosenClass</code></td><td><code dir="auto">string</code></td><td>Class to apply when the tab is selected.</td></tr><tr><td><code dir="auto">isNotChosenClass</code></td><td><code dir="auto">string</code></td><td>Class to apply when the tab is not selected.</td></tr><tr><td><code dir="auto">icon</code></td><td><code dir="auto">WMLUIProperty</code></td><td>Icon configuration for the tab header.</td></tr><tr><td><code dir="auto">click</code></td><td><code dir="auto">function</code></td><td>Click event handler for the tab header.</td></tr></tbody></table>



## Changelog



### 0.0.1

component deployed made available for use
pass an instace of WMLTabsZeroProps to the html like so<code><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">tabProps </span><span style="--0:#C792EA;--1:#8D46B4">=</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#7FDBCA;--1:#097174">new</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">WMLTabsZeroProps</span><span style="--0:#D6DEEB;--1:#403F53">({</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">tabs:[</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#7FDBCA;--1:#097174">new</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">WMLTab</span><span style="--0:#D6DEEB;--1:#403F53">({</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">header:{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">type:</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#ECC48D;--1:#9B504E">wmlTabHeader</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">wmlTabHeader:</span><span style="--0:#7FDBCA;--1:#097174">new</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">WMLTabHeader</span><span style="--0:#D6DEEB;--1:#403F53">({</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">          </span></span><span style="--0:#D6DEEB;--1:#403F53">text:</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#ECC48D;--1:#9B504E">Tab </span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#C792EA;--1:#8D46B4">+</span><span style="--0:#D6DEEB;--1:#403F53">index0</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">}),</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">body </span><span style="--0:#C792EA;--1:#8D46B4">=</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#7FDBCA;--1:#097174">new</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">WMLCustomComponent</span><span style="--0:#D6DEEB;--1:#403F53">({</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">          </span></span><span style="--0:#D6DEEB;--1:#403F53">cpnt:YourComponent,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">          </span></span><span style="--0:#D6DEEB;--1:#403F53">props:</span><span style="--0:#7FDBCA;--1:#097174">new</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">YourComponentProps</span><span style="--0:#D6DEEB;--1:#403F53">()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">})</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">})</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">})</span></div></div></code>

 <code><div class="ec-line"><div class="code"><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&lt;</span><span style="--0:#CAECE6">wml-tabs</span><span style="--0:#7FDBCA"> </span></span><span style="--0:#C5E478;--1:#3C63B3">[props]</span><span style="--0:#7FDBCA;--1:#8D46B4">=</span><span style="--0:#ECC48D;--1:#3C63B3">tabProps</span><span style="--1:#8D46B4"><span style="--0:#7FDBCA">&gt;&lt;/</span><span style="--0:#CAECE6">wml-tabls</span><span style="--0:#7FDBCA">&gt;</span></span></div></div></code> 

### v1.0.0

fixed major problems concerning ngx-translate<code><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// translate</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// first make sure to have ONLY ONE in the imports for AppModule</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">TranslateModule</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">forRoot</span><span style="--0:#D6DEEB;--1:#403F53">({</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">defaultLanguage: </span><span style="--0:#D9F5DD;--1:#111111">&#39;</span><span style="--0:#ECC48D;--1:#9B504E">en</span><span style="--0:#D9F5DD;--1:#111111">&#39;</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">loader: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">provide: TranslateLoader,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">useFactory: HttpLoaderFactory,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">deps:[HttpClient]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">}),</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// then</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">WMLTabsZeroNGXTranslateModule</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// for regular</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">WMLTabsZeroModule</span></div></div></code>



### 1.0.1

mimor dep update

### v16.2.80

updated package to reflect the version  16.2.80 of @angular/core package
,

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

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.3.6000 [5/1/24]

updated package to reflect the version  ^17.3.6 of @angular/core package,

### v17.3.7000 [5/9/24]

updated package to reflect the version  ^17.3.7 of @angular/core package,

### v17.3.8000 [5/9/24]

updated package to reflect the version  ^17.3.8 of @angular/core package,

### v17.3.9000 [5/16/24]

updated package to reflect the version  ^17.3.9 of @angular/core package,

### v18.0.1 [5/23/24]

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

### v18.1.3000-beta3 [8/1/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.1.3000-beta4 [8/1/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3002 [8/4/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3001 [8/4/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3003 [8/5/24]

updated package to conform with @windmillcode/angular-wml-components-base[Previous
WML Table (Beta Unstable Unmaintainable)](/Windmillcode-Angular-CDK-Docs/library/wml-table/)[Next
WML Toggle](/Windmillcode-Angular-CDK-Docs/library/wml-toggle/)