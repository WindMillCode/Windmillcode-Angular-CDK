# WML Popup

The Angular WML Popup library is an Angular-based toolkit designed to simplify the creation and management of pop-up components within web applications. It provides developers with a streamlined approach to integrate pop-ups, facilitating interactions and enhancing user engagement without the need for extensive boilerplate code. The library is crafted to address common challenges associated with pop-up management, such as dynamic content loading, positioning, and responsiveness, ensuring a versatile solution adaptable to various application scenarios.

Central to the Angular WML Popup library is the <code dir="auto">WMLPopupZeroComponent</code> , which serves as the foundational element for pop-up creation and manipulation. This component is designed to be flexible, allowing for the embedding of custom content and the adjustment of its behavior and appearance through a range of input parameters. Developers can leverage the <code dir="auto">WMLPopupProps</code> class to configure the pop-up, defining properties such as the component to display, its initialization parameters, and control mechanisms for opening and closing the pop-up. The library emphasizes interactivity and customization, providing mechanisms such as the <code dir="auto">togglePopupSubj</code> subject to programmatically control the pop-up’s visibility. Furthermore, the library supports inter-component communication and dynamic content loading, enabling developers to create rich, interactive user experiences. By adhering to the library’s design patterns, such as utilizing <code dir="auto">WMLPopupZeroComponent</code> as a container for dynamic content, developers can implement consistent and effective pop-up functionalities within their Angular applications.



## Installation

Terminal window <code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">-d</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">@windmillcode/angular-wml-popup</span></div></div></code> 

## Usage <code dir="auto">WMLPopupZeroComponent</code> 



### Getting Started

<iframe src="https://stackblitz.com/edit/stackblitz-starters-d2uois?embed=1file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

## Reference



### WMLPopupZeroProps Methods

<table><thead><tr><th>Method</th><th>Signature</th><th>Description</th></tr></thead><tbody><tr><td>cpnt</td><td><code dir="auto">Type&lt;any&gt;</code></td><td>Component to be displayed within the popup.</td></tr><tr><td>openPopup</td><td><code dir="auto">() =&gt; void</code></td><td>Opens the popup.</td></tr><tr><td>closePopup</td><td><code dir="auto">() =&gt; void</code></td><td>Closes the popup.</td></tr><tr><td>togglePopupSubj</td><td><code dir="auto">Subject&lt;boolean&gt;</code></td><td>Subject to toggle popup visibility (<code dir="auto">true</code> for open, <code dir="auto">false</code> for close).</td></tr></tbody></table>



## Changelog

v1.0.0added optional support for ngx translate to use ngxtranslate<code><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// to use ngxtranslate</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">WMLPopupNgxTranslateModule</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// to use regaular</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">WMLPopupModule</span></div></div></code>



### v1.0.0

MAJOR rename to @windmillcode/angular-wml-popupfixed major problems concerning ngx-translate<code><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// translate</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// first make sure to have ONLY ONE in the imports for AppModule</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">TranslateModule</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">forRoot</span><span style="--0:#D6DEEB;--1:#403F53">({</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">defaultLanguage: </span><span style="--0:#D9F5DD;--1:#111111">&#39;</span><span style="--0:#ECC48D;--1:#9B504E">en</span><span style="--0:#D9F5DD;--1:#111111">&#39;</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">loader: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">provide: TranslateLoader,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">useFactory: HttpLoaderFactory,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">deps:[HttpClient]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">}),</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// then</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">WmlPanelNGXTranslateModule</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// for regular</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">WmlPanelModule</span></div></div></code>

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

updated package to reflect the version  ^17.0.2 of @angular/core package,

### v17.0.40

updated package to reflect the version  ^17.0.4 of @angular/core package,

### v17.0.50

updated package to reflect the version  ^17.0.5 of @angular/core package,

### v17.0.60

updated package to reflect the version  ^17.0.6 of @angular/core package,

### v17.0.70

updated package to reflect the version  ^17.0.7 of @angular/core package

### v17.0.71

added openPopup closePopup and togglePopupSubj so developers can write less code
,

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

updated package to conform with @windmillcode/angular-wml-components-base

### v17.0.9002

[UPDATE] can now set id on the popup by calling props.openPopup
or props.closePopup for example

<code><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#7FDBCA;--1:#097174">this</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#FAF39F;--1:#111111">baseService</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#FAF39F;--1:#111111">popupProps</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#FAF39F;--1:#111111">view</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#7FDBCA;--1:#097174">id</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8D46B4">=</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#7FDBCA;--1:#097174">this</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">idPrefix</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#ECC48D;--1:#9B504E">Pricing</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#D6DEEB;--1:#403F53">)</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#7FDBCA;--1:#097174">this</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#FAF39F;--1:#111111">baseService</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#FAF39F;--1:#111111">popupProps</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">openPopup</span><span style="--0:#D6DEEB;--1:#403F53">()</span></div></div></code>

,



### v17.1.0000

updated package to reflect the version  ^17.1.0 of @angular/core package

### v17.1.0001

[FIX] fixed a bug where the param key passed to the WMLPopupProps was filtered out causing the component to not work properly
,

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

updated package to reflect the version  ^18.0.0 of @angular/core package

### v18.0.2 [5/24/2024 12:45:23 PM EST]

[UPDATE] when clicking on the outer space of the popup the popup now closes without having to provide a feature to close it



### v18.0.3 [5/24/2024 11:03:23 AM EST]

[FIX] prevent the popup from closing click on the non-close area
,



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

### v18.1.3000-beta2 [8/1/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.1.3000-beta3 [8/1/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.1.3000-beta4 [8/1/24]



### v18.1.3001 [8/4/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3002 [8/4/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3003 [8/5/24]

updated package to conform with @windmillcode/angular-wml-components-base[Previous
WML Panel](/Windmillcode-Angular-CDK-Docs/library/wml-panel/)[Next
WML Select](/Windmillcode-Angular-CDK-Docs/library/wml-select/)