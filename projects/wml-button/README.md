# WML Button

[starlightViewModes.switchTo](/Windmillcode-Angular-CDK-Docs/zen-mode/19.0.0/angular-components/wml-button)function h(){const t=window.location.hash;document.querySelectorAll(".starlight-view-modes-switcher-a").forEach(e=>{e.href&&(e.href=e.href.split("#")[0]+t)})}h();window.addEventListener("hashchange",h);The <code dir="auto">wml-button</code> library is an Angular-focused toolkit designed to provide developers with versatile and customizable button components. Its primary goal is to offer a streamlined approach to implementing interactive buttons within Angular applications, addressing common challenges such as dynamic content loading, user interaction handling, and flexible styling. By delivering a set of modular and adaptable components, the library aims to enhance the development workflow and enrich the user experience across diverse application scenarios.

The library includes two primary components:

**WMLButtonZeroComponent**: A comprehensive component offering deep customization options.**WMLButtonOneComponent**: A simpler alternative for basic button needs with less complexity.

## Installation

[Section titled “Installation”](#installation)Terminal window <code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3B61B0">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">-s</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">--verbose</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">@windmillcode/angular-wml-button</span></div></div></code> 

## WMLButtonOne

[Section titled “WMLButtonOne”](#wmlbuttonone)

### Usage

[Section titled “Usage”](#usage)

### Getting Started

[Section titled “Getting Started”](#getting-started)**Button-One is suitable for most tasks**

<iframe src="https://stackblitz.com/edit/stackblitz-starters-8e6mmc?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Change Button Text And Color

[Section titled “Change Button Text And Color”](#change-button-text-and-color)<iframe src="https://stackblitz.com/edit/stackblitz-starters-trlz36?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Create Click Action

[Section titled “Create Click Action”](#create-click-action)<iframe src="https://stackblitz.com/edit/stackblitz-starters-8rpuly?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Set Icon

[Section titled “Set Icon”](#set-icon)**Use the url to any icon of your choice**

<iframe src="https://stackblitz.com/edit/stackblitz-starters-artwtm?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Change Button Types

[Section titled “Change Button Types”](#change-button-types)<iframe src="https://stackblitz.com/edit/stackblitz-starters-rbukg1?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

## WMLButtonZero

[Section titled “WMLButtonZero”](#wmlbuttonzero)**Button-Zero is for advanced customization**



### Usage

[Section titled “Usage”](#usage-1)

### Getting Started

[Section titled “Getting Started”](#getting-started-1)<iframe src="https://stackblitz.com/edit/stackblitz-starters-xtxucp?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Create Click Action

[Section titled “Create Click Action”](#create-click-action-1)<iframe src="https://stackblitz.com/edit/stackblitz-starters-g1mpgs?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Change Text

[Section titled “Change Text”](#change-text)<iframe src="https://stackblitz.com/edit/stackblitz-starters-cyh7p3?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Set Icon

[Section titled “Set Icon”](#set-icon-1)**Use the url to any icon of your choice**

<iframe src="https://stackblitz.com/edit/stackblitz-starters-t1eknd?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Change Button Types

[Section titled “Change Button Types”](#change-button-types-1)<iframe src="https://stackblitz.com/edit/stackblitz-starters-oihsmw?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

## Reference

[Section titled “Reference”](#reference)

### Properties

[Section titled “Properties”](#properties)

### WMLButtonZeroProps

[Section titled “WMLButtonZeroProps”](#wmlbuttonzeroprops)<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">id</code></td><td><code dir="auto">string</code></td><td>Unique identifier for the button component.</td></tr><tr><td><code dir="auto">cdref</code></td><td><code dir="auto">ChangeDetectorRef</code></td><td>Optional. Angular’s <code dir="auto">ChangeDetectorRef</code> associated with the component for triggering change detection manually.</td></tr><tr><td><code dir="auto">updateSubj</code></td><td><code dir="auto">Subject&lt;Partial&lt;WMLButtonZeroProps&gt;&gt;</code></td><td>Subject to emit updates for the component. Useful for reactive programming patterns.</td></tr><tr><td><code dir="auto">type</code></td><td><code dir="auto">WMLButtonPropsTypeEnum</code></td><td>The type of the button, determining its styling. Can be <code dir="auto">PRIMARY</code>, <code dir="auto">SECONDARY</code>, or <code dir="auto">TERTIARY</code>. Uses a getter/setter to handle the internal state and update button classes dynamically.</td></tr><tr><td><code dir="auto">text</code></td><td><code dir="auto">WMLUIProperty</code></td><td>Property that configures the display text of the button, defaulting to “Click Me”.</td></tr><tr><td><code dir="auto">button</code></td><td><code dir="auto">WMLUIProperty</code></td><td>Property that configures the button behavior, including a click handler with a default alert action.</td></tr><tr><td><code dir="auto">icons</code></td><td><code dir="auto">Array&lt;WMLImage&lt;any, WMLButtonIconType&gt;&gt;</code></td><td>An array of icon objects representing the button’s icons. By default, this is set to a single font-awesome icon, with the icon type defaulting to <code dir="auto">img</code>.</td></tr><tr><td><code dir="auto">attr</code></td><td><code dir="auto">Object</code></td><td>An object containing additional HTML attributes for the button, including:</td></tr><tr><td><code dir="auto">attr.type</code></td><td>`“submit&#34;</td><td>&#34;reset&#34;</td></tr></tbody></table>



### WMLButtonOneProps

[Section titled “WMLButtonOneProps”](#wmlbuttononeprops)<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">btnClass</code></td><td><code dir="auto">string</code></td><td>Gets or sets the button’s primary CSS class.</td></tr><tr><td><code dir="auto">btnStyle</code></td><td><code dir="auto">Partial&lt;CSSStyleDeclaration&gt;</code></td><td>Partial CSS styles for the button.</td></tr><tr><td><code dir="auto">btnIsPresent</code></td><td><code dir="auto">boolean</code></td><td>Indicates whether the button is present in the DOM.</td></tr><tr><td><code dir="auto">type</code></td><td><code dir="auto">WMLButtonPropsTypeEnum</code></td><td>The type of the button, influencing its styling. Can be <code dir="auto">PRIMARY</code>, <code dir="auto">SECONDARY</code>, or <code dir="auto">TERTIARY</code>.</td></tr><tr><td><code dir="auto">iconType</code></td><td><code dir="auto">WMLButtonIconType</code></td><td>The type of icon used in the button.</td></tr><tr><td><code dir="auto">text</code></td><td><code dir="auto">string</code></td><td>The display text of the button. Default is <code dir="auto">&#34;Click Me&#34;</code>.</td></tr><tr><td><code dir="auto">iconClass</code></td><td><code dir="auto">string</code></td><td>Gets or sets the icon’s CSS class.</td></tr><tr><td><code dir="auto">iconSrc</code></td><td><code dir="auto">string</code></td><td>Source URL of the icon.</td></tr><tr><td><code dir="auto">iconAlt</code></td><td><code dir="auto">string</code></td><td>Alt text for the icon, used for accessibility.</td></tr><tr><td><code dir="auto">iconIsPresent</code></td><td><code dir="auto">boolean</code></td><td>Indicates whether the icon is present.</td></tr><tr><td><code dir="auto">textIsPresent</code></td><td><code dir="auto">boolean</code></td><td>Indicates whether the text is present in the button.</td></tr><tr><td><code dir="auto">click</code></td><td><code dir="auto">(evt?) =&gt; void</code></td><td>Function that handles the button click event. Default action is an alert.</td></tr><tr><td><code dir="auto">updateSubj</code></td><td><code dir="auto">Subject&lt;Partial&lt;WMLButtonOneProps&gt;&gt;</code></td><td>Subject to emit updates for the component.</td></tr><tr><td><code dir="auto">link</code></td><td><code dir="auto">string</code></td><td>URL to which the button links, if it’s a link button.</td></tr><tr><td><code dir="auto">routerLink</code></td><td><code dir="auto">string</code></td><td>Angular router link to navigate when the button is clicked.</td></tr><tr><td><code dir="auto">attr</code></td><td><code dir="auto">Object</code></td><td>An object containing additional HTML attributes for the button, including:</td></tr><tr><td><code dir="auto">attr.type</code></td><td>`“submit&#34;</td><td>&#34;reset&#34;</td></tr></tbody></table>



### Methods

[Section titled “Methods”](#methods)

### WMLButtonZeroProps

[Section titled “WMLButtonZeroProps”](#wmlbuttonzeroprops-1) <code dir="auto">constructor(props: Partial&lt;WMLButtonZeroProps&gt; = {})</code> : Initializes a new instance of the <code dir="auto">WMLButtonZeroProps</code> class with optional parameters for customization. <code dir="auto">updateBtnClasses(value: WMLButtonPropsTypeEnum)</code> : Updates the button’s classes based on the specified type ( <code dir="auto">PRIMARY</code> , <code dir="auto">SECONDARY</code> , or <code dir="auto">TERTIARY</code> ).

### WMLButtonOneProps

[Section titled “WMLButtonOneProps”](#wmlbuttononeprops-1) <code dir="auto">constructor(props: Partial&lt;WMLButtonOneProps&gt; = {})</code> : Initializes a new instance of the <code dir="auto">WMLButtonOneProps</code> class with optional parameters for customization. <code dir="auto">updateBtnClassString(value: string)</code> : Updates the button’s primary CSS class. <code dir="auto">updateBtnClasses(value: WMLButtonPropsTypeEnum)</code> : Updates the button’s classes based on the specified type ( <code dir="auto">PRIMARY</code> , <code dir="auto">SECONDARY</code> , or <code dir="auto">TERTIARY</code> ). <code dir="auto">click(evt?)</code> : Custom click handler for the button.

## Changelog

[Section titled “Changelog”](#changelog)v0.0.1
button is ready to be usedv0.0.2
include cursor pointer for the button viewv0.0.3
gave hover functionality to the button1.0.0
BREAKING change  WMLButtonZeroProps.icon changed to WMLButtonZeroProps.icons to represent the multiple icons one can have on the button
WMLButtonZeroProps.icons[number] which is a WMLImage now has type of img or icon, if a type is not specified an img is used
the icon comes before the text and not after the text2.0.0
BREAKING CHANGE
WMLButtonZeroPropsTypeEnum renamed to WMLButtonPropsTypeEnum
created wml-button-one component which leverages wmlButton for easier button creation2.1.0full support for wml-button-one2.1.1add WMLButtonOneProps.btnIsPresent to show and hide buttons3.0.0ensured that there is support for ngx-translate and non ngx-translate featuresto enable translation<code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">export</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8844AE">function</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">HttpLoaderFactory</span><span style="--0:#D9F5DD;--1:#111111">(</span><span style="--0:#D7DBE0;--1:#403F53">http</span><span style="--0:#7FDBCA;--1:#096E72">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--1:#111111"><span style="--0:#FFCB8B">HttpClient</span><span style="--0:#D9F5DD">)</span></span><span style="--0:#D6DEEB;--1:#403F53"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#C792EA;--1:#8844AE">return</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#7FDBCA;--1:#096E72">new</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">TranslateHttpLoader</span><span style="--0:#D6DEEB;--1:#403F53">(http);</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">HttpClientModule,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">WMLButtonZeroModule</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#82AAFF;--1:#3B61B0">forChild</span><span style="--0:#D6DEEB;--1:#403F53">(</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#7FDBCA;--1:#096E72">new</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">WMLModuleForRootProps</span><span style="--0:#D6DEEB;--1:#403F53">({</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">ngxTranslateLoaderFactory:HttpLoaderFactory</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">})</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">),</span></div></div></code>

to disable translation <code><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">WMLButtonZeroModule</span></div></div></code> 

### v4.0.1

[Section titled “v4.0.1”](#v401)fixed major problems concerning ngx-translate<code><div class="ec-line"><div class="code"><span style="--0:#919F9F;--1:#5D6376">// translate</span></div></div><div class="ec-line"><div class="code"><span style="--0:#919F9F;--1:#5D6376">// first make sure to have ONLY ONE in the imports for AppModule</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">TranslateModule</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#82AAFF;--1:#3B61B0">forRoot</span><span style="--0:#D6DEEB;--1:#403F53">({</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">defaultLanguage: </span><span style="--0:#D9F5DD;--1:#111111">&#39;</span><span style="--0:#ECC48D;--1:#984E4D">en</span><span style="--0:#D9F5DD;--1:#111111">&#39;</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">loader: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">provide: TranslateLoader,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">useFactory: HttpLoaderFactory,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">deps:[HttpClient]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">}),</span></div></div><div class="ec-line"><div class="code"><span style="--0:#919F9F;--1:#5D6376">// then</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">WMLButtonZeroNGXTranslateModule</span></div></div><div class="ec-line"><div class="code"><span style="--0:#919F9F;--1:#5D6376">// for regular</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">WMLButtonZeroModule</span></div></div></code>



### v4.0.5

[Section titled “v4.0.5”](#v405)added css id support, and made cdref available on the props

### v4.0.7

[Section titled “v4.0.7”](#v407)add id support on the selector element itself

### v16.2.70

[Section titled “v16.2.70”](#v16270)for wmlbuttonzero, added additional wmluiproperty to button zero,



### v16.2.80

[Section titled “v16.2.80”](#v16280)updated package to reflect the version  16.2.80 of @angular/core package,

### v16.2.90

[Section titled “v16.2.90”](#v16290)updated package to reflect the version  16.2.90 of @angular/core package,

### v16.2.91

[Section titled “v16.2.91”](#v16291)updated package to reflect the version  16.2.91 of @angular/core package,

### v16.2.93

[Section titled “v16.2.93”](#v16293)updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,

### v16.2.100

[Section titled “v16.2.100”](#v162100)updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,

### v16.2.110

[Section titled “v16.2.110”](#v162110)updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,

### v16.2.120

[Section titled “v16.2.120”](#v162120)updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,

### v17.0.10

[Section titled “v17.0.10”](#v17010)updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,

### v17.0.11

[Section titled “v17.0.11”](#v17011)updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,

### v17.0.20

[Section titled “v17.0.20”](#v17020)updated package to reflect the version  ^17.0.2 of @angular/core package,

### v17.0.40

[Section titled “v17.0.40”](#v17040)updated package to reflect the version  ^17.0.4 of @angular/core package,

### v17.0.50

[Section titled “v17.0.50”](#v17050)updated package to reflect the version  ^17.0.5 of @angular/core package,

### v17.0.60

[Section titled “v17.0.60”](#v17060)updated package to reflect the version  ^17.0.6s of @angular/core package,

### v17.0.70

[Section titled “v17.0.70”](#v17070)updated package to reflect the version  ^17.0.7 of @angular/core package,

### v17.0.7100

[Section titled “v17.0.7100”](#v1707100)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.0.7200

[Section titled “v17.0.7200”](#v1707200)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.0.7300

[Section titled “v17.0.7300”](#v1707300)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.0.80

[Section titled “v17.0.80”](#v17080)updated package to reflect the version  ^17.0.8 of @angular/core package,

### v17.0.8100

[Section titled “v17.0.8100”](#v1708100)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.0.8102

[Section titled “v17.0.8102”](#v1708102)updated package to conform with @windmillcode/angular-wml-components-base

### v17.0.8103

[Section titled “v17.0.8103”](#v1708103)[FIX] ensured that change detection was working for buttons
,

### v17.0.8103

[Section titled “v17.0.8103”](#v1708103-1)updated package to conform with @windmillcode/angular-wml-components-base

### v17.0.8104

[Section titled “v17.0.8104”](#v1708104)[FIX] toggle margin between icon and text for wml-button-one when iconIsPresent is set to true
,

### v17.0.9000

[Section titled “v17.0.9000”](#v1709000)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.0.9001

[Section titled “v17.0.9001”](#v1709001)updated package to conform with @windmillcode/angular-wml-components-base

### v17.0.9002

[Section titled “v17.0.9002”](#v1709002)updated WMLButtonOneProps.click to have optional evt paramaeter
,

### v17.1.0000

[Section titled “v17.1.0000”](#v1710000)updated package to reflect the version  ^17.1.0 of @angular/core package,

### v17.1.2

[Section titled “v17.1.2”](#v1712)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.1.1000

[Section titled “v17.1.1000”](#v1711000)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.1.2000 [2/5/24]

[Section titled “v17.1.2000 [2/5/24]”](#v1712000-2524)updated package to reflect the version  ^17.1.2 of @angular/core package,

### v17.1.2001 [2/8/24]

[Section titled “v17.1.2001 [2/8/24]”](#v1712001-2824)updated package to conform with @windmillcode/angular-wml-components-base

### v17.1.2002 [2/8/24]

[Section titled “v17.1.2002 [2/8/24]”](#v1712002-2824)corrected code so no text should wrap if the text overflows the button
,

### v17.1.3000 [2/8/24]

[Section titled “v17.1.3000 [2/8/24]”](#v1713000-2824)updated package to reflect the version  ^17.1.3 of @angular/core package,

### v17.2.1000 [2/17/24]

[Section titled “v17.2.1000 [2/17/24]”](#v1721000-21724)updated package to reflect the version  ^17.2.1 of @angular/core package

### v17.2.1001 [2/21/24]

[Section titled “v17.2.1001 [2/21/24]”](#v1721001-22124)[UPDATE] added WMLButtonZeroProps.listenForUpdate amd WMLButtonOneProps.listenForUpdate so changes that dont reflect by assignment would reflect this way

### v17.2.2000 [2/23/24]

[Section titled “v17.2.2000 [2/23/24]”](#v1722000-22324)updated package to reflect the version  ^17.2.2 of @angular/core package,

### v17.2.2001 [2/23/24]

[Section titled “v17.2.2001 [2/23/24]”](#v1722001-22324)updated package to reflect the version  ^17.2.2 of @angular/core package,

### v17.2.3000 [2/28/24]

[Section titled “v17.2.3000 [2/28/24]”](#v1723000-22824)updated package to reflect the version  ^17.2.3 of @angular/core package,

### v17.2.3001 [3/2/24]

[Section titled “v17.2.3001 [3/2/24]”](#v1723001-3224)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.2.3002 [3/5/24]

[Section titled “v17.2.3002 [3/5/24]”](#v1723002-3524)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.2.4000 [3/8/24]

[Section titled “v17.2.4000 [3/8/24]”](#v1724000-3824)updated package to reflect the version  ^17.2.4 of @angular/core package,

### v17.2.4001 [3/12/24]

[Section titled “v17.2.4001 [3/12/24]”](#v1724001-31224)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.2.4002 [3/12/24]

[Section titled “v17.2.4002 [3/12/24]”](#v1724002-31224)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.2.4003 [3/13/24]

[Section titled “v17.2.4003 [3/13/24]”](#v1724003-31324)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.2.4004 [3/13/24]

[Section titled “v17.2.4004 [3/13/24]”](#v1724004-31324)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.3.0 [3/17/24]

[Section titled “v17.3.0 [3/17/24]”](#v1730-31724)updated package to reflect the version  ^17.3.0 of @angular/core package
,

### v17.3.1000 [3/22/24]

[Section titled “v17.3.1000 [3/22/24]”](#v1731000-32224)updated package to reflect the version  ^17.3.1 of @angular/core package,

### v17.3.2000 [3/28/24]

[Section titled “v17.3.2000 [3/28/24]”](#v1732000-32824)updated package to reflect the version  ^17.3.2 of @angular/core package,

### v17.3.3000 [4/4/24]

[Section titled “v17.3.3000 [4/4/24]”](#v1733000-4424)updated package to reflect the version  ^17.3.3 of @angular/core package,

### v17.3.4000 [4/11/24]

[Section titled “v17.3.4000 [4/11/24]”](#v1734000-41124)updated package to reflect the version  ^17.3.4 of @angular/core package,

### v17.3.4001 [4/16/24]

[Section titled “v17.3.4001 [4/16/24]”](#v1734001-41624)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.3.5000 [4/20/24]

[Section titled “v17.3.5000 [4/20/24]”](#v1735000-42024)updated package to reflect the version  ^17.3.5 of @angular/core package,

### v17.3.5110 [5/1/24]

[Section titled “v17.3.5110 [5/1/24]”](#v1735110-5124)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.3.6000 [5/1/24]

[Section titled “v17.3.6000 [5/1/24]”](#v1736000-5124)updated package to reflect the version  ^17.3.6 of @angular/core package,

### v17.3.7000 [5/9/24]

[Section titled “v17.3.7000 [5/9/24]”](#v1737000-5924)updated package to reflect the version  ^17.3.7 of @angular/core package,

### v17.3.8000 [5/9/24]

[Section titled “v17.3.8000 [5/9/24]”](#v1738000-5924)updated package to reflect the version  ^17.3.8 of @angular/core package,

### v17.3.9000 [5/16/24]

[Section titled “v17.3.9000 [5/16/24]”](#v1739000-51624)updated package to reflect the version  ^17.3.9 of @angular/core package,

### v18.0.0 [5/22/24]

[Section titled “v18.0.0 [5/22/24]”](#v1800-52224)updated package to reflect the version  ^18.0.0 of @angular/core package,

### v18.0.1 [5/22/24]

[Section titled “v18.0.1 [5/22/24]”](#v1801-52224)updated package to reflect the version  ^18.0.0 of @angular/core package,

### v18.0.4 [5/25/24]

[Section titled “v18.0.4 [5/25/24]”](#v1804-52524)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.0.1000 [5/29/24]

[Section titled “v18.0.1000 [5/29/24]”](#v1801000-52924)updated package to reflect the version  ^18.0.1 of @angular/core package,

### v18.0.2000 [6/6/24]

[Section titled “v18.0.2000 [6/6/24]”](#v1802000-6624)updated package to reflect the version  ^18.0.2 of @angular/core package,

### v18.0.3000 [6/13/24]

[Section titled “v18.0.3000 [6/13/24]”](#v1803000-61324)updated package to reflect the version  ^18.0.3 of @angular/core package,

### v18.0.3010 [6/18/24]

[Section titled “v18.0.3010 [6/18/24]”](#v1803010-61824)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.0.4000 [6/23/24]

[Section titled “v18.0.4000 [6/23/24]”](#v1804000-62324)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.0.5000 [6/26/24]

[Section titled “v18.0.5000 [6/26/24]”](#v1805000-62624)updated package to reflect the version  ^18.0.5 of @angular/core package,

### v18.0.6000 [7/5/24]

[Section titled “v18.0.6000 [7/5/24]”](#v1806000-7524)updated package to reflect the version  ^18.0.6 of @angular/core package,

### v18.1.0 [7/10/24]

[Section titled “v18.1.0 [7/10/24]”](#v1810-71024)updated package to reflect the version  ^18.1.0 of @angular/core package,

### v18.1.3 [7/13/24]

[Section titled “v18.1.3 [7/13/24]”](#v1813-71324)updated package to reflect the version  ^18.1.0 of @angular/core package,

### v18.1.4 [7/13/24]

[Section titled “v18.1.4 [7/13/24]”](#v1814-71324)updated package to reflect the version  ^18.1.0 of @angular/core package

### v18.1.5 [7/13/24]

[Section titled “v18.1.5 [7/13/24]”](#v1815-71324)[FIX] - fixed a bug with the default type not showing
,

### v18.1.6 [7/14/24]

[Section titled “v18.1.6 [7/14/24]”](#v1816-71424)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.1.1000 [7/18/24]

[Section titled “v18.1.1000 [7/18/24]”](#v1811000-71824)updated package to reflect the version  ^18.1.1 of @angular/core package,

### v18.1.2000 [7/24/24]

[Section titled “v18.1.2000 [7/24/24]”](#v1812000-72424)updated package to reflect the version  ^18.1.2 of @angular/core package

### v18.1.2300

[Section titled “v18.1.2300”](#v1812300)[7/26/2024 4:05:00 PM EST]

[UPDATE] Updated wml-button-one.component.html, added conditional links for props.link and props.routerLink
[UPDATE] Updated wml-button-one.component.scss, added styles for links and removed unnecessary comments
[BREAKING CHANGE] Added encapsulation: ViewEncapsulation.None in wml-button-one.component.ts
[UPDATE] Added RouterModule to imports in wml-button-zero.module.ts
,



### v18.1.2300 [7/27/24]

[Section titled “v18.1.2300 [7/27/24]”](#v1812300-72724)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.1.2301 [7/30/24]

[Section titled “v18.1.2301 [7/30/24]”](#v1812301-73024)updated package to conform with @windmillcode/angular-wml-components-base
,

### v18.1.3000-beta0 [8/1/24]

[Section titled “v18.1.3000-beta0 [8/1/24]”](#v1813000-beta0-8124)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.1.3000-beta1 [8/1/24]

[Section titled “v18.1.3000-beta1 [8/1/24]”](#v1813000-beta1-8124)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.1.3000-beta2 [8/1/24]

[Section titled “v18.1.3000-beta2 [8/1/24]”](#v1813000-beta2-8124)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.1.3000-beta3 [8/1/24]

[Section titled “v18.1.3000-beta3 [8/1/24]”](#v1813000-beta3-8124)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.1.3000-beta4 [8/1/24]

[Section titled “v18.1.3000-beta4 [8/1/24]”](#v1813000-beta4-8124)updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3001 [8/4/24]

[Section titled “v18.1.3001 [8/4/24]”](#v1813001-8424)updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3002 [8/4/24]

[Section titled “v18.1.3002 [8/4/24]”](#v1813002-8424)updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3002 [8/5/24]

[Section titled “v18.1.3002 [8/5/24]”](#v1813002-8524)updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3003 [8/5/24]

[Section titled “v18.1.3003 [8/5/24]”](#v1813003-8524)updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3003 [8/5/24]

[Section titled “v18.1.3003 [8/5/24]”](#v1813003-8524-1)updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3004 [8/5/24]

[Section titled “v18.1.3004 [8/5/24]”](#v1813004-8524)updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3005 [8/5/24]

[Section titled “v18.1.3005 [8/5/24]”](#v1813005-8524)updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3006 [8/5/24]

[Section titled “v18.1.3006 [8/5/24]”](#v1813006-8524)updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3007 [8/5/24]

[Section titled “v18.1.3007 [8/5/24]”](#v1813007-8524)updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.4000 [8/14/24]

[Section titled “v18.1.4000 [8/14/24]”](#v1814000-81424)updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.4001 [8/14/24]

[Section titled “v18.1.4001 [8/14/24]”](#v1814001-81424)updated package to conform with @windmillcode/angular-wml-components-base

### v18.2.0 [8/15/24]

[Section titled “v18.2.0 [8/15/24]”](#v1820-81524)updated package to conform with @windmillcode/angular-wml-components-base

### v18.2.1 [8/20/24]

[Section titled “v18.2.1 [8/20/24]”](#v1821-82024)updated package to conform with @windmillcode/angular-wml-components-base

### v18.2.2 [8/20/24]

[Section titled “v18.2.2 [8/20/24]”](#v1822-82024)[FIX] fixed a bug where the free module was not showing any text

### v18.2.3 [8/20/24]

[Section titled “v18.2.3 [8/20/24]”](#v1823-82024)[UPDATE] made button default type button so unwanted side effects dont occur

### v18.2.1000 [8/22/24]

[Section titled “v18.2.1000 [8/22/24]”](#v1821000-82224)updated package to reflect the version  18.2.1 of @angular/core package

### v18.2.2000 [8/30/24]

[Section titled “v18.2.2000 [8/30/24]”](#v1822000-83024)updated package to reflect the version  18.2.2 of @angular/core package

### v18.2.2100 [9/1/24]

[Section titled “v18.2.2100 [9/1/24]”](#v1822100-9124)updated package to conform with @windmillcode/angular-wml-components-base

### v18.2.2101 [9/1/24]

[Section titled “v18.2.2101 [9/1/24]”](#v1822101-9124)updated package to conform with @windmillcode/angular-wml-components-base

### v18.2.2200 [9/3/24]

[Section titled “v18.2.2200 [9/3/24]”](#v1822200-9324)updated package to conform with @windmillcode/angular-wml-components-base

### v18.2.3000 [9/4/24]

[Section titled “v18.2.3000 [9/4/24]”](#v1823000-9424)updated package to reflect the version  18.2.3 of @angular/core package

### v18.2.3100 [9/8/24]

[Section titled “v18.2.3100 [9/8/24]”](#v1823100-9824)updated package to reflect the version  18.2.3 of @angular/core package

### v18.2.3110 [9/10/24]

[Section titled “v18.2.3110 [9/10/24]”](#v1823110-91024)updated package to conform with @windmillcode/angular-wml-components-base

### v18.2.3112 [9/10/24]

[Section titled “v18.2.3112 [9/10/24]”](#v1823112-91024)updated package to conform with @windmillcode/angular-wml-components-base

### v18.2.3200 [9/16/24]

[Section titled “v18.2.3200 [9/16/24]”](#v1823200-91624)updated package to conform with @windmillcode/wml-components-base

### v18.2.4000 [9/16/24]

[Section titled “v18.2.4000 [9/16/24]”](#v1824000-91624)updated package to reflect the version  18.2.4 of @angular/core package

### v18.2.4100 [9/19/24]

[Section titled “v18.2.4100 [9/19/24]”](#v1824100-91924)updated package to conform with @windmillcode/wml-components-base

### v18.2.4200 [9/21/24]

[Section titled “v18.2.4200 [9/21/24]”](#v1824200-92124)updated package to conform with @windmillcode/wml-components-base

### v18.2.5001 [9/22/24]

[Section titled “v18.2.5001 [9/22/24]”](#v1825001-92224)updated package to reflect the version  18.2.5 of @angular/core package

### v18.2.6000 [10/1/24]

[Section titled “v18.2.6000 [10/1/24]”](#v1826000-10124)updated package to reflect the version  18.2.6 of @angular/core package

### v18.2.7000 [10/2/24]

[Section titled “v18.2.7000 [10/2/24]”](#v1827000-10224)updated package to reflect the version  18.2.7 of @angular/core package

### v18.2.7001 [10/5/24]

[Section titled “v18.2.7001 [10/5/24]”](#v1827001-10524)updated package to conform with @windmillcode/wml-components-base

### v18.2.7010 [10/9/24]

[Section titled “v18.2.7010 [10/9/24]”](#v1827010-10924)updated package to conform with @windmillcode/wml-components-base

### v18.2.7020 [10/10/24]

[Section titled “v18.2.7020 [10/10/24]”](#v1827020-101024)updated package to conform with @windmillcode/wml-components-base

### v18.2.8000 [10/10/24]

[Section titled “v18.2.8000 [10/10/24]”](#v1828000-101024)updated package to reflect the version  18.2.8 of @angular/core package

### v18.2.8000 [10/11/24]

[Section titled “v18.2.8000 [10/11/24]”](#v1828000-101124)updated package to reflect the version  18.2.8 of @angular/core package

### v18.2.8001 [10/11/24]

[Section titled “v18.2.8001 [10/11/24]”](#v1828001-101124)updated package to conform with @windmillcode/wml-components-base

### v18.2.9000 [10/23/24]

[Section titled “v18.2.9000 [10/23/24]”](#v1829000-102324)updated package to conform with @windmillcode/wml-components-base

### v18.2.10000 [10/31/24]

[Section titled “v18.2.10000 [10/31/24]”](#v18210000-103124)updated package to conform with @windmillcode/wml-components-base

### v18.2.11000 [11/7/24]

[Section titled “v18.2.11000 [11/7/24]”](#v18211000-11724)updated package to conform with @windmillcode/wml-components-base

### v18.2.12000 [11/15/24]

[Section titled “v18.2.12000 [11/15/24]”](#v18212000-111524)updated package to conform with @windmillcode/wml-components-base

### v18.2.12001 [11/17/24]

[Section titled “v18.2.12001 [11/17/24]”](#v18212001-111724)updated package to conform with @windmillcode/wml-components-base

### v19.0.0 [11/19/24]

[Section titled “v19.0.0 [11/19/24]”](#v1900-111924)updated package to conform with @windmillcode/wml-components-base

### v19.0.3 [11/20/24]

[Section titled “v19.0.3 [11/20/24]”](#v1903-112024)updated package to conform with @windmillcode/wml-components-base

### v19.0.4 [11/26/24]

[Section titled “v19.0.4 [11/26/24]”](#v1904-112624)updated package to conform with @windmillcode/wml-components-base

### v19.0.1000 [11/26/24]

[Section titled “v19.0.1000 [11/26/24]”](#v1901000-112624)updated package to conform with @windmillcode/wml-components-base[](/Windmillcode-Angular-CDK-Docs/19.0.0/angular-components/wml-angular-components-base/)[](/Windmillcode-Angular-CDK-Docs/19.0.0/angular-components/wml-carousel/)