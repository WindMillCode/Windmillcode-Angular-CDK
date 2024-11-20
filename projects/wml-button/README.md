# WML Button

The <code dir="auto">wml-button</code> library is an Angular-focused toolkit designed to provide developers with versatile and customizable button components. Its primary goal is to offer a streamlined approach to implementing interactive buttons within Angular applications, addressing common challenges such as dynamic content loading, user interaction handling, and flexible styling. By delivering a set of modular and adaptable components, the library aims to enhance the development workflow and enrich the user experience across diverse application scenarios.

The library includes two primary components:

**WMLButtonZeroComponent**: A comprehensive component offering deep customization options.**WMLButtonOneComponent**: A simpler alternative for basic button needs with less complexity.

## Installation

Terminal window <code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">-s</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--verbose</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">@windmillcode/angular-wml-button</span></div></div></code> 

## WMLButtonOne



### Usage



### Getting Started

**Button-One is suitable for most tasks**

<iframe src="https://stackblitz.com/edit/stackblitz-starters-8e6mmc?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Change Button Text And Color

<iframe src="https://stackblitz.com/edit/stackblitz-starters-trlz36?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Create Click Action

<iframe src="https://stackblitz.com/edit/stackblitz-starters-8rpuly?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Set Icon

**Use the url to any icon of your choice**

<iframe src="https://stackblitz.com/edit/stackblitz-starters-artwtm?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Change Button Types

<iframe src="https://stackblitz.com/edit/stackblitz-starters-rbukg1?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

## WMLButtonZero

**Button-Zero is for advanced customization**



### Usage



### Getting Started

<iframe src="https://stackblitz.com/edit/stackblitz-starters-xtxucp?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Create Click Action

<iframe src="https://stackblitz.com/edit/stackblitz-starters-g1mpgs?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Change Text

<iframe src="https://stackblitz.com/edit/stackblitz-starters-cyh7p3?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Set Icon

**Use the url to any icon of your choice**

<iframe src="https://stackblitz.com/edit/stackblitz-starters-t1eknd?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Change Button Types

<iframe src="https://stackblitz.com/edit/stackblitz-starters-oihsmw?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

## Reference



### Properties



### WMLButtonZeroProps

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">id</code></td><td><code dir="auto">string</code></td><td>Unique identifier for the button component.</td></tr><tr><td><code dir="auto">cdref</code></td><td><code dir="auto">ChangeDetectorRef</code></td><td>Optional. Angular’s <code dir="auto">ChangeDetectorRef</code> associated with the component for triggering change detection manually.</td></tr><tr><td><code dir="auto">updateSubj</code></td><td><code dir="auto">Subject&lt;Partial&lt;WMLButtonZeroProps&gt;&gt;</code></td><td>Subject to emit updates for the component. Useful for reactive programming patterns.</td></tr><tr><td><code dir="auto">type</code></td><td><code dir="auto">WMLButtonPropsTypeEnum</code></td><td>The type of the button, determining its styling. Can be <code dir="auto">PRIMARY</code>, <code dir="auto">SECONDARY</code>, or <code dir="auto">TERTIARY</code>. Uses a getter/setter to handle the internal state and update button classes dynamically.</td></tr><tr><td><code dir="auto">text</code></td><td><code dir="auto">WMLUIProperty</code></td><td>Property that configures the display text of the button, defaulting to “Click Me”.</td></tr><tr><td><code dir="auto">button</code></td><td><code dir="auto">WMLUIProperty</code></td><td>Property that configures the button behavior, including a click handler with a default alert action.</td></tr><tr><td><code dir="auto">icons</code></td><td><code dir="auto">Array&lt;WMLImage&lt;any, WMLButtonIconType&gt;&gt;</code></td><td>An array of icon objects representing the button’s icons. By default, this is set to a single font-awesome icon, with the icon type defaulting to <code dir="auto">img</code>.</td></tr><tr><td><code dir="auto">attr</code></td><td><code dir="auto">Object</code></td><td>An object containing additional HTML attributes for the button, including:</td></tr><tr><td><code dir="auto">attr.type</code></td><td>`“submit&#34;</td><td>&#34;reset&#34;</td></tr></tbody></table>



### WMLButtonOneProps

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">btnClass</code></td><td><code dir="auto">string</code></td><td>Gets or sets the button’s primary CSS class.</td></tr><tr><td><code dir="auto">btnStyle</code></td><td><code dir="auto">Partial&lt;CSSStyleDeclaration&gt;</code></td><td>Partial CSS styles for the button.</td></tr><tr><td><code dir="auto">btnIsPresent</code></td><td><code dir="auto">boolean</code></td><td>Indicates whether the button is present in the DOM.</td></tr><tr><td><code dir="auto">type</code></td><td><code dir="auto">WMLButtonPropsTypeEnum</code></td><td>The type of the button, influencing its styling. Can be <code dir="auto">PRIMARY</code>, <code dir="auto">SECONDARY</code>, or <code dir="auto">TERTIARY</code>.</td></tr><tr><td><code dir="auto">iconType</code></td><td><code dir="auto">WMLButtonIconType</code></td><td>The type of icon used in the button.</td></tr><tr><td><code dir="auto">text</code></td><td><code dir="auto">string</code></td><td>The display text of the button. Default is <code dir="auto">&#34;Click Me&#34;</code>.</td></tr><tr><td><code dir="auto">iconClass</code></td><td><code dir="auto">string</code></td><td>Gets or sets the icon’s CSS class.</td></tr><tr><td><code dir="auto">iconSrc</code></td><td><code dir="auto">string</code></td><td>Source URL of the icon.</td></tr><tr><td><code dir="auto">iconAlt</code></td><td><code dir="auto">string</code></td><td>Alt text for the icon, used for accessibility.</td></tr><tr><td><code dir="auto">iconIsPresent</code></td><td><code dir="auto">boolean</code></td><td>Indicates whether the icon is present.</td></tr><tr><td><code dir="auto">textIsPresent</code></td><td><code dir="auto">boolean</code></td><td>Indicates whether the text is present in the button.</td></tr><tr><td><code dir="auto">click</code></td><td><code dir="auto">(evt?) =&gt; void</code></td><td>Function that handles the button click event. Default action is an alert.</td></tr><tr><td><code dir="auto">updateSubj</code></td><td><code dir="auto">Subject&lt;Partial&lt;WMLButtonOneProps&gt;&gt;</code></td><td>Subject to emit updates for the component.</td></tr><tr><td><code dir="auto">link</code></td><td><code dir="auto">string</code></td><td>URL to which the button links, if it’s a link button.</td></tr><tr><td><code dir="auto">routerLink</code></td><td><code dir="auto">string</code></td><td>Angular router link to navigate when the button is clicked.</td></tr><tr><td><code dir="auto">attr</code></td><td><code dir="auto">Object</code></td><td>An object containing additional HTML attributes for the button, including:</td></tr><tr><td><code dir="auto">attr.type</code></td><td>`“submit&#34;</td><td>&#34;reset&#34;</td></tr></tbody></table>



### Methods



### WMLButtonZeroProps

 <code dir="auto">constructor(props: Partial&lt;WMLButtonZeroProps&gt; = {})</code> : Initializes a new instance of the <code dir="auto">WMLButtonZeroProps</code> class with optional parameters for customization. <code dir="auto">updateBtnClasses(value: WMLButtonPropsTypeEnum)</code> : Updates the button’s classes based on the specified type ( <code dir="auto">PRIMARY</code> , <code dir="auto">SECONDARY</code> , or <code dir="auto">TERTIARY</code> ).

### WMLButtonOneProps

 <code dir="auto">constructor(props: Partial&lt;WMLButtonOneProps&gt; = {})</code> : Initializes a new instance of the <code dir="auto">WMLButtonOneProps</code> class with optional parameters for customization. <code dir="auto">updateBtnClassString(value: string)</code> : Updates the button’s primary CSS class. <code dir="auto">updateBtnClasses(value: WMLButtonPropsTypeEnum)</code> : Updates the button’s classes based on the specified type ( <code dir="auto">PRIMARY</code> , <code dir="auto">SECONDARY</code> , or <code dir="auto">TERTIARY</code> ). <code dir="auto">click(evt?)</code> : Custom click handler for the button.

## Changelog

v0.0.1
button is ready to be usedv0.0.2
include cursor pointer for the button viewv0.0.3
gave hover functionality to the button1.0.0
BREAKING change  WMLButtonZeroProps.icon changed to WMLButtonZeroProps.icons to represent the multiple icons one can have on the button
WMLButtonZeroProps.icons[number] which is a WMLImage now has type of img or icon, if a type is not specified an img is used
the icon comes before the text and not after the text2.0.0
BREAKING CHANGE
WMLButtonZeroPropsTypeEnum renamed to WMLButtonPropsTypeEnum
created wml-button-one component which leverages wmlButton for easier button creation2.1.0full support for wml-button-one2.1.1add WMLButtonOneProps.btnIsPresent to show and hide buttons3.0.0ensured that there is support for ngx-translate and non ngx-translate featuresto enable translation<code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">export</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8D46B4">function</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">HttpLoaderFactory</span><span style="--0:#D9F5DD;--1:#111111">(</span><span style="--0:#D7DBE0;--1:#403F53">http</span><span style="--0:#7FDBCA;--1:#097174">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--1:#111111"><span style="--0:#FFCB8B">HttpClient</span><span style="--0:#D9F5DD">)</span></span><span style="--0:#D6DEEB;--1:#403F53"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#C792EA;--1:#8D46B4">return</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#7FDBCA;--1:#097174">new</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">TranslateHttpLoader</span><span style="--0:#D6DEEB;--1:#403F53">(http);</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">HttpClientModule,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">WMLButtonZeroModule</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">forChild</span><span style="--0:#D6DEEB;--1:#403F53">(</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#7FDBCA;--1:#097174">new</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">WMLModuleForRootProps</span><span style="--0:#D6DEEB;--1:#403F53">({</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">ngxTranslateLoaderFactory:HttpLoaderFactory</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">})</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">),</span></div></div></code>

to disable translation <code><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">WMLButtonZeroModule</span></div></div></code> 

### v4.0.1

fixed major problems concerning ngx-translate<code><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// translate</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// first make sure to have ONLY ONE in the imports for AppModule</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">TranslateModule</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">forRoot</span><span style="--0:#D6DEEB;--1:#403F53">({</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">defaultLanguage: </span><span style="--0:#D9F5DD;--1:#111111">&#39;</span><span style="--0:#ECC48D;--1:#9B504E">en</span><span style="--0:#D9F5DD;--1:#111111">&#39;</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">loader: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">provide: TranslateLoader,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">useFactory: HttpLoaderFactory,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">deps:[HttpClient]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">}),</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// then</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">WMLButtonZeroNGXTranslateModule</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// for regular</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">WMLButtonZeroModule</span></div></div></code>



### v4.0.5

added css id support, and made cdref available on the props

### v4.0.7

add id support on the selector element itself

### v16.2.70

for wmlbuttonzero, added additional wmluiproperty to button zero,



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

updated package to reflect the version  ^17.0.6s of @angular/core package,

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

updated package to conform with @windmillcode/angular-wml-components-base

### v17.0.8103

[FIX] ensured that change detection was working for buttons
,

### v17.0.8103

updated package to conform with @windmillcode/angular-wml-components-base

### v17.0.8104

[FIX] toggle margin between icon and text for wml-button-one when iconIsPresent is set to true
,

### v17.0.9000

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.0.9001

updated package to conform with @windmillcode/angular-wml-components-base

### v17.0.9002

updated WMLButtonOneProps.click to have optional evt paramaeter
,

### v17.1.0000

updated package to reflect the version  ^17.1.0 of @angular/core package,

### v17.1.2

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.1.1000

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.1.2000 [2/5/24]

updated package to reflect the version  ^17.1.2 of @angular/core package,

### v17.1.2001 [2/8/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v17.1.2002 [2/8/24]

corrected code so no text should wrap if the text overflows the button
,

### v17.1.3000 [2/8/24]

updated package to reflect the version  ^17.1.3 of @angular/core package,

### v17.2.1000 [2/17/24]

updated package to reflect the version  ^17.2.1 of @angular/core package

### v17.2.1001 [2/21/24]

[UPDATE] added WMLButtonZeroProps.listenForUpdate amd WMLButtonOneProps.listenForUpdate so changes that dont reflect by assignment would reflect this way

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

updated package to reflect the version  ^18.1.0 of @angular/core package

### v18.1.5 [7/13/24]

[FIX] - fixed a bug with the default type not showing
,

### v18.1.6 [7/14/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.1.1000 [7/18/24]

updated package to reflect the version  ^18.1.1 of @angular/core package,

### v18.1.2000 [7/24/24]

updated package to reflect the version  ^18.1.2 of @angular/core package

### v18.1.2300

[7/26/2024 4:05:00 PM EST]

[UPDATE] Updated wml-button-one.component.html, added conditional links for props.link and props.routerLink
[UPDATE] Updated wml-button-one.component.scss, added styles for links and removed unnecessary comments
[BREAKING CHANGE] Added encapsulation: ViewEncapsulation.None in wml-button-one.component.ts
[UPDATE] Added RouterModule to imports in wml-button-zero.module.ts
,



### v18.1.2300 [7/27/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.1.2301 [7/30/24]

updated package to conform with @windmillcode/angular-wml-components-base
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

updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3001 [8/4/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3002 [8/4/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3002 [8/5/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3003 [8/5/24]

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

### v18.2.2 [8/20/24]

[FIX] fixed a bug where the free module was not showing any text

### v18.2.3 [8/20/24]

[UPDATE] made button default type button so unwanted side effects dont occur

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

updated package to conform with @windmillcode/angular-wml-components-base

### v18.2.3200 [9/16/24]

updated package to conform with @windmillcode/wml-components-base

### v18.2.4000 [9/16/24]

updated package to reflect the version  18.2.4 of @angular/core package

### v18.2.4100 [9/19/24]

updated package to conform with @windmillcode/wml-components-base

### v18.2.4200 [9/21/24]

updated package to conform with @windmillcode/wml-components-base

### v18.2.5001 [9/22/24]

updated package to reflect the version  18.2.5 of @angular/core package

### v18.2.6000 [10/1/24]

updated package to reflect the version  18.2.6 of @angular/core package

### v18.2.7000 [10/2/24]

updated package to reflect the version  18.2.7 of @angular/core package

### v18.2.7001 [10/5/24]

updated package to conform with @windmillcode/wml-components-base

### v18.2.7010 [10/9/24]

updated package to conform with @windmillcode/wml-components-base

### v18.2.7020 [10/10/24]

updated package to conform with @windmillcode/wml-components-base

### v18.2.8000 [10/10/24]

updated package to reflect the version  18.2.8 of @angular/core package

### v18.2.8000 [10/11/24]

updated package to reflect the version  18.2.8 of @angular/core package

### v18.2.8001 [10/11/24]

updated package to conform with @windmillcode/wml-components-base

### v18.2.9000 [10/23/24]

updated package to conform with @windmillcode/wml-components-base

### v18.2.10000 [10/31/24]

updated package to conform with @windmillcode/wml-components-base

### v18.2.11000 [11/7/24]

updated package to conform with @windmillcode/wml-components-base

### v18.2.12000 [11/15/24]

updated package to conform with @windmillcode/wml-components-base

### v18.2.12001 [11/17/24]

updated package to conform with @windmillcode/wml-components-base

### v19.0.0 [11/19/24]

updated package to conform with @windmillcode/wml-components-base[](/Windmillcode-Angular-CDK-Docs/angular-components/wml-angular-components-base/)[](/Windmillcode-Angular-CDK-Docs/angular-components/wml-carousel/)