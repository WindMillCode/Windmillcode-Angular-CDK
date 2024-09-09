    <div class="content-panel astro-7nkwcw3z"> <div class="sl-container astro-7nkwcw3z"> <h1 id="_top" class="astro-j6tvhyss">WML Button</h1>  </div> </div>  <div class="content-panel astro-7nkwcw3z"> <div class="sl-container astro-7nkwcw3z"> <div class="sl-markdown-content"> <p>The <code dir="auto">wml-button</code> library is an Angular-focused toolkit designed to provide developers with versatile and customizable button components. Its primary goal is to offer a streamlined approach to implementing interactive buttons within Angular applications, addressing common challenges such as dynamic content loading, user interaction handling, and flexible styling. By delivering a set of modular and adaptable components, the library aims to enhance the development workflow and enrich the user experience across diverse application scenarios.</p>
<p>The library includes two primary components:</p>
<ul>
<li><strong>WMLButtonZeroComponent</strong>: A comprehensive component offering deep customization options.</li>
<li><strong>WMLButtonOneComponent</strong>: A simpler alternative for basic button needs with less complexity.</li>
</ul>
<h2 id="installation">Installation</h2>
<div class="expressive-code"><link rel="stylesheet" href="/Windmillcode-Angular-CDK-Docs/_astro/ec.j8ofn.css"/><script type="module" src="/Windmillcode-Angular-CDK-Docs/_astro/ec.8zarh.js"></script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre data-language="bash"><code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">-s</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--verbose</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">@windmillcode/angular-wml-button</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="npm install -s --verbose @windmillcode/angular-wml-button"><div></div></button></div></figure></div>
<h2 id="wmlbuttonone">WMLButtonOne</h2>
<h3 id="usage">Usage</h3>
<h4 id="getting-started">Getting Started</h4>
<p><strong>Button-One is suitable for most tasks</strong></p>
<iframe src="https://stackblitz.com/edit/stackblitz-starters-8e6mmc?ctl=1&amp;embed=1&amp;file=src%2Fmain.ts&amp;theme=dark"></iframe>
<h4 id="change-button-text-and-color">Change Button Text And Color</h4>
<iframe src="https://stackblitz.com/edit/stackblitz-starters-trlz36?ctl=1&amp;embed=1&amp;file=src%2Fmain.ts&amp;theme=dark"></iframe>
<h4 id="create-click-action">Create Click Action</h4>
<iframe src="https://stackblitz.com/edit/stackblitz-starters-8rpuly?ctl=1&amp;embed=1&amp;file=src%2Fmain.ts&amp;theme=dark"></iframe>
<h4 id="set-icon">Set Icon</h4>
<p><strong>Use the url to any icon of your choice</strong></p>
<iframe src="https://stackblitz.com/edit/stackblitz-starters-artwtm?ctl=1&amp;embed=1&amp;file=src%2Fmain.ts&amp;theme=dark"></iframe>
<h4 id="change-button-types">Change Button Types</h4>
<iframe src="https://stackblitz.com/edit/stackblitz-starters-rbukg1?ctl=1&amp;embed=1&amp;file=src%2Fmain.ts&amp;theme=dark"></iframe>
<h2 id="wmlbuttonzero">WMLButtonZero</h2>
<p><strong>Button-Zero is for advanced customization</strong></p>
<h3 id="usage-1">Usage</h3>
<h4 id="getting-started-1">Getting Started</h4>
<iframe src="https://stackblitz.com/edit/stackblitz-starters-xtxucp?ctl=1&amp;embed=1&amp;file=src%2Fmain.ts&amp;theme=dark"></iframe>
<h4 id="create-click-action-1">Create Click Action</h4>
<iframe src="https://stackblitz.com/edit/stackblitz-starters-g1mpgs?ctl=1&amp;embed=1&amp;file=src%2Fmain.ts&amp;theme=dark"></iframe>
<h4 id="change-text">Change Text</h4>
<iframe src="https://stackblitz.com/edit/stackblitz-starters-cyh7p3?ctl=1&amp;embed=1&amp;file=src%2Fmain.ts&amp;theme=dark"></iframe>
<h4 id="set-icon-1">Set Icon</h4>
<p><strong>Use the url to any icon of your choice</strong></p>
<iframe src="https://stackblitz.com/edit/stackblitz-starters-t1eknd?ctl=1&amp;embed=1&amp;file=src%2Fmain.ts&amp;theme=dark"></iframe>
<h4 id="change-button-types-1">Change Button Types</h4>
<iframe src="https://stackblitz.com/edit/stackblitz-starters-oihsmw?ctl=1&amp;embed=1&amp;file=src%2Fmain.ts&amp;theme=dark"></iframe>
<h2 id="reference">Reference</h2>
<h3 id="properties">Properties</h3>
<h4 id="wmlbuttonzeroprops">WMLButtonZeroProps</h4>























































<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">id</code></td><td><code dir="auto">string</code></td><td>Unique identifier for the button component.</td></tr><tr><td><code dir="auto">cdref</code></td><td><code dir="auto">ChangeDetectorRef</code></td><td>Optional. Angular’s <code dir="auto">ChangeDetectorRef</code> associated with the component for triggering change detection manually.</td></tr><tr><td><code dir="auto">updateSubj</code></td><td><code dir="auto">Subject&lt;Partial&lt;WMLButtonZeroProps&gt;&gt;</code></td><td>Subject to emit updates for the component. Useful for reactive programming patterns.</td></tr><tr><td><code dir="auto">type</code></td><td><code dir="auto">WMLButtonPropsTypeEnum</code></td><td>The type of the button, determining its styling. Can be <code dir="auto">PRIMARY</code>, <code dir="auto">SECONDARY</code>, or <code dir="auto">TERTIARY</code>. Uses a getter/setter to handle the internal state and update button classes dynamically.</td></tr><tr><td><code dir="auto">text</code></td><td><code dir="auto">WMLUIProperty</code></td><td>Property that configures the display text of the button, defaulting to “Click Me”.</td></tr><tr><td><code dir="auto">button</code></td><td><code dir="auto">WMLUIProperty</code></td><td>Property that configures the button behavior, including a click handler with a default alert action.</td></tr><tr><td><code dir="auto">icons</code></td><td><code dir="auto">Array&lt;WMLImage&lt;any, WMLButtonIconType&gt;&gt;</code></td><td>An array of icon objects representing the button’s icons. By default, this is set to a single font-awesome icon, with the icon type defaulting to <code dir="auto">img</code>.</td></tr><tr><td><code dir="auto">attr</code></td><td><code dir="auto">Object</code></td><td>An object containing additional HTML attributes for the button, including:</td></tr><tr><td><code dir="auto">attr.type</code></td><td>`“submit&#34;</td><td>&#34;reset&#34;</td></tr></tbody></table>
<h4 id="wmlbuttononeprops">WMLButtonOneProps</h4>































































































<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">btnClass</code></td><td><code dir="auto">string</code></td><td>Gets or sets the button’s primary CSS class.</td></tr><tr><td><code dir="auto">btnStyle</code></td><td><code dir="auto">Partial&lt;CSSStyleDeclaration&gt;</code></td><td>Partial CSS styles for the button.</td></tr><tr><td><code dir="auto">btnIsPresent</code></td><td><code dir="auto">boolean</code></td><td>Indicates whether the button is present in the DOM.</td></tr><tr><td><code dir="auto">type</code></td><td><code dir="auto">WMLButtonPropsTypeEnum</code></td><td>The type of the button, influencing its styling. Can be <code dir="auto">PRIMARY</code>, <code dir="auto">SECONDARY</code>, or <code dir="auto">TERTIARY</code>.</td></tr><tr><td><code dir="auto">iconType</code></td><td><code dir="auto">WMLButtonIconType</code></td><td>The type of icon used in the button.</td></tr><tr><td><code dir="auto">text</code></td><td><code dir="auto">string</code></td><td>The display text of the button. Default is <code dir="auto">&#34;Click Me&#34;</code>.</td></tr><tr><td><code dir="auto">iconClass</code></td><td><code dir="auto">string</code></td><td>Gets or sets the icon’s CSS class.</td></tr><tr><td><code dir="auto">iconSrc</code></td><td><code dir="auto">string</code></td><td>Source URL of the icon.</td></tr><tr><td><code dir="auto">iconAlt</code></td><td><code dir="auto">string</code></td><td>Alt text for the icon, used for accessibility.</td></tr><tr><td><code dir="auto">iconIsPresent</code></td><td><code dir="auto">boolean</code></td><td>Indicates whether the icon is present.</td></tr><tr><td><code dir="auto">textIsPresent</code></td><td><code dir="auto">boolean</code></td><td>Indicates whether the text is present in the button.</td></tr><tr><td><code dir="auto">click</code></td><td><code dir="auto">(evt?) =&gt; void</code></td><td>Function that handles the button click event. Default action is an alert.</td></tr><tr><td><code dir="auto">updateSubj</code></td><td><code dir="auto">Subject&lt;Partial&lt;WMLButtonOneProps&gt;&gt;</code></td><td>Subject to emit updates for the component.</td></tr><tr><td><code dir="auto">link</code></td><td><code dir="auto">string</code></td><td>URL to which the button links, if it’s a link button.</td></tr><tr><td><code dir="auto">routerLink</code></td><td><code dir="auto">string</code></td><td>Angular router link to navigate when the button is clicked.</td></tr><tr><td><code dir="auto">attr</code></td><td><code dir="auto">Object</code></td><td>An object containing additional HTML attributes for the button, including:</td></tr><tr><td><code dir="auto">attr.type</code></td><td>`“submit&#34;</td><td>&#34;reset&#34;</td></tr></tbody></table>
<h3 id="methods">Methods</h3>
<h4 id="wmlbuttonzeroprops-1">WMLButtonZeroProps</h4>
<ul>
<li><code dir="auto">constructor(props: Partial&lt;WMLButtonZeroProps&gt; = {})</code>: Initializes a new instance of the <code dir="auto">WMLButtonZeroProps</code> class with optional parameters for customization.</li>
<li><code dir="auto">updateBtnClasses(value: WMLButtonPropsTypeEnum)</code>: Updates the button’s classes based on the specified type (<code dir="auto">PRIMARY</code>, <code dir="auto">SECONDARY</code>, or <code dir="auto">TERTIARY</code>).</li>
</ul>
<h4 id="wmlbuttononeprops-1">WMLButtonOneProps</h4>
<ul>
<li><code dir="auto">constructor(props: Partial&lt;WMLButtonOneProps&gt; = {})</code>: Initializes a new instance of the <code dir="auto">WMLButtonOneProps</code> class with optional parameters for customization.</li>
<li><code dir="auto">updateBtnClassString(value: string)</code>: Updates the button’s primary CSS class.</li>
<li><code dir="auto">updateBtnClasses(value: WMLButtonPropsTypeEnum)</code>: Updates the button’s classes based on the specified type (<code dir="auto">PRIMARY</code>, <code dir="auto">SECONDARY</code>, or <code dir="auto">TERTIARY</code>).</li>
<li><code dir="auto">click(evt?)</code>: Custom click handler for the button.</li>
</ul>
<h2 id="changelog">Changelog</h2>
<ul>
<li>v0.0.1
button is ready to be used</li>
<li>v0.0.2
include cursor pointer for the button view</li>
<li>v0.0.3
gave hover functionality to the button</li>
<li>1.0.0
BREAKING change  WMLButtonZeroProps.icon changed to WMLButtonZeroProps.icons to represent the multiple icons one can have on the button
WMLButtonZeroProps.icons[number] which is a WMLImage now has type of img or icon, if a type is not specified an img is used
the icon comes before the text and not after the text</li>
<li>2.0.0
BREAKING CHANGE
WMLButtonZeroPropsTypeEnum renamed to WMLButtonPropsTypeEnum
created wml-button-one component which leverages wmlButton for easier button creation</li>
<li>2.1.0
<ul>
<li>full support for wml-button-one</li>
</ul>
</li>
<li>2.1.1
<ul>
<li>add WMLButtonOneProps.btnIsPresent to show and hide buttons</li>
</ul>
</li>
<li>3.0.0
<ul>
<li>ensured that there is support for ngx-translate and non ngx-translate features</li>
<li>to enable translation</li>
</ul>
</li>
</ul>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="ts"><code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">export</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8D46B4">function</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">HttpLoaderFactory</span><span style="--0:#D9F5DD;--1:#111111">(</span><span style="--0:#D7DBE0;--1:#403F53">http</span><span style="--0:#7FDBCA;--1:#097174">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--1:#111111"><span style="--0:#FFCB8B">HttpClient</span><span style="--0:#D9F5DD">)</span></span><span style="--0:#D6DEEB;--1:#403F53"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#C792EA;--1:#8D46B4">return</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#7FDBCA;--1:#097174">new</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">TranslateHttpLoader</span><span style="--0:#D6DEEB;--1:#403F53">(http);</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">HttpClientModule,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">WMLButtonZeroModule</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">forChild</span><span style="--0:#D6DEEB;--1:#403F53">(</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#7FDBCA;--1:#097174">new</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">WMLModuleForRootProps</span><span style="--0:#D6DEEB;--1:#403F53">({</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">ngxTranslateLoaderFactory:HttpLoaderFactory</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">})</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">),</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="export function HttpLoaderFactory(http: HttpClient) {  return new TranslateHttpLoader(http);}    HttpClientModule,    WMLButtonZeroModule    .forChild(      new WMLModuleForRootProps({        ngxTranslateLoaderFactory:HttpLoaderFactory      })    ),"><div></div></button></div></figure></div>
<ul>
<li>to disable translation</li>
</ul>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="ts"><code><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">WMLButtonZeroModule</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="    WMLButtonZeroModule"><div></div></button></div></figure></div>
<h3 id="401">4.0.1</h3>
<ul>
<li>fixed major problems concerning ngx-translate</li>
</ul>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="ts"><code><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// translate</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// first make sure to have ONLY ONE in the imports for AppModule</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">TranslateModule</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">forRoot</span><span style="--0:#D6DEEB;--1:#403F53">({</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">defaultLanguage: </span><span style="--0:#D9F5DD;--1:#111111">&#39;</span><span style="--0:#ECC48D;--1:#9B504E">en</span><span style="--0:#D9F5DD;--1:#111111">&#39;</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">loader: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">provide: TranslateLoader,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">useFactory: HttpLoaderFactory,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">deps:[HttpClient]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">}),</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// then</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">WMLButtonZeroNGXTranslateModule</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// for regular</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">WMLButtonZeroModule</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="// translate// first make sure to have ONLY ONE in the imports for AppModule    TranslateModule.forRoot({      defaultLanguage: &#39;en&#39;,      loader: {        provide: TranslateLoader,        useFactory: HttpLoaderFactory,        deps:[HttpClient]      }    }),// thenWMLButtonZeroNGXTranslateModule// for regularWMLButtonZeroModule"><div></div></button></div></figure></div>
<h3 id="405">4.0.5</h3>
<ul>
<li>added css id support, and made cdref available on the props</li>
</ul>
<h3 id="407">4.0.7</h3>
<ul>
<li>add id support on the selector element itself</li>
</ul>
<h3 id="16270">16.2.70</h3>
<ul>
<li>for wmlbuttonzero, added additional wmluiproperty to button zero</li>
</ul>
<p>,</p>
<h3 id="v16280">v16.2.80</h3>
<ul>
<li>updated package to reflect the version  16.2.80 of @angular/core package,</li>
</ul>
<h3 id="v16290">v16.2.90</h3>
<ul>
<li>updated package to reflect the version  16.2.90 of @angular/core package,</li>
</ul>
<h3 id="v16291">v16.2.91</h3>
<ul>
<li>updated package to reflect the version  16.2.91 of @angular/core package,</li>
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
<li>updated package to reflect the version  ^17.0.6s of @angular/core package,</li>
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
<li>updated package to conform with @windmillcode/angular-wml-components-base</li>
</ul>
<h3 id="v1708103">v17.0.8103</h3>
<ul>
<li>[FIX] ensured that change detection was working for buttons
,</li>
</ul>
<h3 id="v1708103-1">v17.0.8103</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base</li>
</ul>
<h3 id="v1708104">v17.0.8104</h3>
<ul>
<li>[FIX] toggle margin between icon and text for wml-button-one when iconIsPresent is set to true
,</li>
</ul>
<h3 id="v1709000">v17.0.9000</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base   ,</li>
</ul>
<h3 id="v1709001">v17.0.9001</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base</li>
</ul>
<h3 id="v1709002">v17.0.9002</h3>
<ul>
<li>updated WMLButtonOneProps.click to have optional evt paramaeter
,</li>
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
<li>updated package to conform with @windmillcode/angular-wml-components-base</li>
</ul>
<h3 id="v1712002-2824">v17.1.2002 [2/8/24]</h3>
<ul>
<li>corrected code so no text should wrap if the text overflows the button
,</li>
</ul>
<h3 id="v1713000-2824">v17.1.3000 [2/8/24]</h3>
<ul>
<li>updated package to reflect the version  ^17.1.3 of @angular/core package,</li>
</ul>
<h3 id="v1721000-21724">v17.2.1000 [2/17/24]</h3>
<ul>
<li>updated package to reflect the version  ^17.2.1 of @angular/core package</li>
</ul>
<h3 id="1721001-22124">17.2.1001 [2/21/24]</h3>
<ul>
<li>[UPDATE] added WMLButtonZeroProps.listenForUpdate amd WMLButtonOneProps.listenForUpdate so changes that dont reflect by assignment would reflect this way</li>
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
<li>updated package to conform with @windmillcode/angular-wml-components-base   ,</li>
</ul>
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
<h3 id="v1800-52224">v18.0.0 [5/22/24]</h3>
<ul>
<li>updated package to reflect the version  ^18.0.0 of @angular/core package,</li>
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
<h3 id="v1810-71024">v18.1.0 [7/10/24]</h3>
<ul>
<li>updated package to reflect the version  ^18.1.0 of @angular/core package,</li>
</ul>
<h3 id="v1813-71324">v18.1.3 [7/13/24]</h3>
<ul>
<li>updated package to reflect the version  ^18.1.0 of @angular/core package,</li>
</ul>
<h3 id="v1814-71324">v18.1.4 [7/13/24]</h3>
<ul>
<li>updated package to reflect the version  ^18.1.0 of @angular/core package</li>
</ul>
<h3 id="v1815-71324">v18.1.5 [7/13/24]</h3>
<ul>
<li>[FIX] - fixed a bug with the default type not showing
,</li>
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
<h3 id="v1812300">v18.1.2300</h3>
<p>[7/26/2024 4:05:00 PM EST]</p>
<p>[UPDATE] Updated wml-button-one.component.html, added conditional links for props.link and props.routerLink
[UPDATE] Updated wml-button-one.component.scss, added styles for links and removed unnecessary comments
[BREAKING CHANGE] Added encapsulation: ViewEncapsulation.None in wml-button-one.component.ts
[UPDATE] Added RouterModule to imports in wml-button-zero.module.ts
,</p>
<h3 id="v1812300-72724">v18.1.2300 [7/27/24]</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base   ,</li>
</ul>
<h3 id="v1812301-73024">v18.1.2301 [7/30/24]</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base
,</li>
</ul>
<h3 id="v1813000-beta0-8124">v18.1.3000-beta0 [8/1/24]</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base   ,</li>
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
<h3 id="v1813001-8424">v18.1.3001 [8/4/24]</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base</li>
</ul>
<h3 id="v1813002-8424">v18.1.3002 [8/4/24]</h3>
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
<h3 id="v1813003-8524-1">v18.1.3003 [8/5/24]</h3>
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
<li>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base</li>
</ul>
</li>
</ul>
<h3 id="v1822-82024">v18.2.2 [8/20/24]</h3>
<ul>
<li>[FIX] fixed a bug where the free module was not showing any text</li>
</ul>
<h3 id="v1823-82024">v18.2.3 [8/20/24]</h3>
<ul>
<li>[UPDATE] made button default type button so unwanted side effects dont occur</li>
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
</ul> </div> <footer class="sl-flex astro-3yyafb3n"> <div class="meta sl-flex astro-3yyafb3n">   </div> <div class="pagination-links astro-u2l5gyhi" dir="ltr"> <a href="/Windmillcode-Angular-CDK-Docs/components/wml-accordion/" rel="prev" class="astro-u2l5gyhi"> <svg aria-hidden="true" class="astro-u2l5gyhi astro-c6vsoqas" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1.5rem;"><path d="M17 11H9.41l3.3-3.29a1.004 1.004 0 1 0-1.42-1.42l-5 5a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l5 5a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095L9.41 13H17a1 1 0 0 0 0-2Z"></path></svg>  <span class="astro-u2l5gyhi"> Previous <br class="astro-u2l5gyhi"/> <span class="link-title astro-u2l5gyhi">WML Accordion</span> </span> </a> <a href="/Windmillcode-Angular-CDK-Docs/components/wml-chips/" rel="next" class="astro-u2l5gyhi"> <svg aria-hidden="true" class="astro-u2l5gyhi astro-c6vsoqas" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1.5rem;"><path d="M17.92 11.62a1.001 1.001 0 0 0-.21-.33l-5-5a1.003 1.003 0 1 0-1.42 1.42l3.3 3.29H7a1 1 0 0 0 0 2h7.59l-3.3 3.29a1.002 1.002 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l5-5a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76Z"></path></svg>  <span class="astro-u2l5gyhi"> Next <br class="astro-u2l5gyhi"/> <span class="link-title astro-u2l5gyhi">WML Chips</span> </span> </a> </div>   </footer>  </div> </div>   