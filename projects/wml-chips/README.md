    <div class="content-panel astro-7nkwcw3z"> <div class="sl-container astro-7nkwcw3z"> <h1 id="_top" class="astro-j6tvhyss">WML Chips</h1>  </div> </div>  <div class="content-panel astro-7nkwcw3z"> <div class="sl-container astro-7nkwcw3z"> <div class="sl-markdown-content"> <p>The Angular WML Chips library provides a highly customizable chips component for Angular applications. It offers a variety of features to enhance user interaction and improve the overall user experience.</p>
<h2 id="installation">Installation</h2>
<p>To install the Angular WML Chips Zero library, use the following command:</p>
<div class="expressive-code"><link rel="stylesheet" href="/Windmillcode-Angular-CDK-Docs/_astro/ec.j8ofn.css"/><script type="module" src="/Windmillcode-Angular-CDK-Docs/_astro/ec.8zarh.js"></script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre data-language="sh"><code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--verbose</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">@windmillcode/angular-wml-chips</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="npm install --verbose @windmillcode/angular-wml-chips"><div></div></button></div></figure></div>
<h2 id="usage">Usage</h2>
<h3 id="wmlchipszerocomponent">WMLChipsZeroComponent</h3>
<h4 id="getting-started">Getting Started</h4>
<iframe src="https://stackblitz.com/edit/stackblitz-starters-g35wp3?ctl=1&amp;embed=1&amp;file=src%2Fmain.ts&amp;theme=dark"></iframe>
<h4 id="custom-placeholder">Custom Placeholder</h4>
<iframe src="https://stackblitz.com/edit/stackblitz-starters-ggabo6?ctl=1&amp;embed=1&amp;file=src%2Fmain.ts&amp;theme=dark"></iframe>
<h4 id="limit-chips">Limit Chips</h4>
<iframe src="https://stackblitz.com/edit/stackblitz-starters-8bhep3?ctl=1&amp;embed=1&amp;file=src%2Fmain.ts&amp;theme=dark"></iframe>
<h4 id="custom-form-array">Custom Form Array</h4>
<iframe src="https://stackblitz.com/edit/stackblitz-starters-nucx2q?ctl=1&amp;embed=1&amp;file=src%2Fmain.ts&amp;theme=dark"></iframe>

<h4 id="custom-button">Custom Button</h4>
<iframe src="https://stackblitz.com/edit/stackblitz-starters-6vwxzk?ctl=1&amp;embed=1&amp;file=src%2Fmain.ts&amp;theme=dark"></iframe>
<h2 id="css-customization">CSS Customization</h2>
<p>The WML Chips Zero component comes with several CSS variables and SCSS mixins that allow you to customize its appearance to fit your design needs.</p>
<h3 id="css-variables">CSS Variables</h3>
<p>The following CSS variables can be customized:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="css"><code><div class="ec-line"><div class="code"><span style="--0:#C5E478;--1:#3C63B3">:root</span><span style="--0:#D6DEEB;--1:#403F53"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#C5E478;--1:#3C63B3">--wml-chips-white</span><span style="--0:#D6DEEB;--1:#403F53">: </span><span style="--0:#F78C6C;--1:#AA0982">255</span><span style="--0:#D6DEEB;--1:#403F53">,</span><span style="--0:#F78C6C;--1:#AA0982">255</span><span style="--0:#D6DEEB;--1:#403F53">,</span><span style="--0:#F78C6C;--1:#AA0982">255</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#C5E478;--1:#3C63B3">--wml-chips-black</span><span style="--0:#D6DEEB;--1:#403F53">: </span><span style="--0:#F78C6C;--1:#AA0982">0</span><span style="--0:#D6DEEB;--1:#403F53">,</span><span style="--0:#F78C6C;--1:#AA0982">0</span><span style="--0:#D6DEEB;--1:#403F53">,</span><span style="--0:#F78C6C;--1:#AA0982">0</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#C5E478;--1:#3C63B3">--wml-chips-primary</span><span style="--0:#D6DEEB;--1:#403F53">: </span><span style="--0:#F78C6C;--1:#AA0982">144</span><span style="--0:#D6DEEB;--1:#403F53">,</span><span style="--0:#F78C6C;--1:#AA0982">238</span><span style="--0:#D6DEEB;--1:#403F53">,</span><span style="--0:#F78C6C;--1:#AA0982">144</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#C5E478;--1:#3C63B3">--wml-chips-secondary</span><span style="--0:#D6DEEB;--1:#403F53">: </span><span style="--0:#F78C6C;--1:#AA0982">112</span><span style="--0:#D6DEEB;--1:#403F53">,</span><span style="--0:#F78C6C;--1:#AA0982">112</span><span style="--0:#D6DEEB;--1:#403F53">,</span><span style="--0:#F78C6C;--1:#AA0982">112</span><span style="--0:#D6DEEB;--1:#403F53">;</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#C5E478;--1:#3C63B3">--wml-chips-primary-gradient</span><span style="--0:#D6DEEB;--1:#403F53">: </span><span style="--0:#C5E478;--1:#3C63B3">radial-gradient</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#FF6363;--1:#9B504E">farthest-corner</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#7FDBCA;--1:#097174">at</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--1:#AA0982"><span style="--0:#F78C6C">100</span><span style="--0:#FFEB95">%</span></span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--1:#AA0982"><span style="--0:#F78C6C">0</span><span style="--0:#FFEB95">px</span></span><span style="--0:#D6DEEB;--1:#403F53">, </span><span style="--0:#C5E478;--1:#3C63B3">rgb</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#F78C6C;--1:#AA0982">144</span><span style="--0:#D6DEEB;--1:#403F53">,</span><span style="--0:#F78C6C;--1:#AA0982">238</span><span style="--0:#D6DEEB;--1:#403F53">,</span><span style="--0:#F78C6C;--1:#AA0982">144</span><span style="--0:#D6DEEB;--1:#403F53">) </span><span style="--1:#AA0982"><span style="--0:#F78C6C">0</span><span style="--0:#FFEB95">%</span></span><span style="--0:#D6DEEB;--1:#403F53">, </span><span style="--0:#C5E478;--1:#3C63B3">rgb</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#F78C6C;--1:#AA0982">112</span><span style="--0:#D6DEEB;--1:#403F53">,</span><span style="--0:#F78C6C;--1:#AA0982">112</span><span style="--0:#D6DEEB;--1:#403F53">,</span><span style="--0:#F78C6C;--1:#AA0982">112</span><span style="--0:#D6DEEB;--1:#403F53">) </span><span style="--1:#AA0982"><span style="--0:#F78C6C">150</span><span style="--0:#FFEB95">%</span></span><span style="--0:#D6DEEB;--1:#403F53">);</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#C5E478;--1:#3C63B3">--wml-chips-secondary-gradient</span><span style="--0:#D6DEEB;--1:#403F53">: </span><span style="--0:#C5E478;--1:#3C63B3">radial-gradient</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#FF6363;--1:#9B504E">farthest-corner</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#7FDBCA;--1:#097174">at</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--1:#AA0982"><span style="--0:#F78C6C">100</span><span style="--0:#FFEB95">%</span></span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--1:#AA0982"><span style="--0:#F78C6C">0</span><span style="--0:#FFEB95">px</span></span><span style="--0:#D6DEEB;--1:#403F53">, </span><span style="--0:#7FDBCA;--1:#097174">grey</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--1:#AA0982"><span style="--0:#F78C6C">0</span><span style="--0:#FFEB95">%</span></span><span style="--0:#D6DEEB;--1:#403F53">, </span><span style="--0:#C5E478;--1:#3C63B3">rgb</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#F78C6C;--1:#AA0982">0</span><span style="--0:#D6DEEB;--1:#403F53">,</span><span style="--0:#F78C6C;--1:#AA0982">0</span><span style="--0:#D6DEEB;--1:#403F53">,</span><span style="--0:#F78C6C;--1:#AA0982">0</span><span style="--0:#D6DEEB;--1:#403F53">) </span><span style="--1:#AA0982"><span style="--0:#F78C6C">150</span><span style="--0:#FFEB95">%</span></span><span style="--0:#D6DEEB;--1:#403F53">);</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code=":root {  --wml-chips-white: 255,255,255;  --wml-chips-black: 0,0,0;  --wml-chips-primary: 144,238,144;  --wml-chips-secondary: 112,112,112;  --wml-chips-primary-gradient: radial-gradient(farthest-corner at 100% 0px, rgb(144,238,144) 0%, rgb(112,112,112) 150%);  --wml-chips-secondary-gradient: radial-gradient(farthest-corner at 100% 0px, grey 0%, rgb(0,0,0) 150%);}"><div></div></button></div></figure></div>
<h2 id="reference">Reference</h2>
<h3 id="wmlchipszeroprops">WMLChipsZeroProps</h3>























































<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">limit</code></td><td><code dir="auto">number</code></td><td>The maximum number of chips allowed. Default is <code dir="auto">Infinity</code>.</td></tr><tr><td><code dir="auto">wmlField</code></td><td><code dir="auto">WMLFieldZeroProps</code></td><td>The field properties for the WML Chips component.</td></tr><tr><td><code dir="auto">formArray</code></td><td><code dir="auto">FormArray</code></td><td>The form array to store the chip values.</td></tr><tr><td><code dir="auto">updateFormArrayPredicate</code></td><td><code dir="auto">(val: string) =&gt; any</code></td><td>Function to transform chip value before adding to form array.</td></tr><tr><td><code dir="auto">placeholder</code></td><td><code dir="auto">string</code></td><td>Placeholder text for the input.</td></tr><tr><td><code dir="auto">userInputsAriaLabel</code></td><td><code dir="auto">string</code></td><td>ARIA label for user inputs.</td></tr><tr><td><code dir="auto">removeChipAriaLabel</code></td><td><code dir="auto">string</code></td><td>ARIA label for the remove chip button.</td></tr><tr><td><code dir="auto">userInputs</code></td><td><code dir="auto">Array&lt;string&gt;</code></td><td>The list of user inputs (chips).</td></tr><tr><td><code dir="auto">clearBtn</code></td><td><code dir="auto">WMLButtonOneProps</code></td><td>Properties for the clear button.</td></tr></tbody></table>

<h2 id="changelog">Changelog</h2>
<h3 id="v100">v1.0.0</h3>
<ul>
<li>ensured that there is support for ngx-translate and non ngx-translate features</li>
<li>to enable translation</li>
</ul>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="ts"><code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">export</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8D46B4">function</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">HttpLoaderFactory</span><span style="--0:#D9F5DD;--1:#111111">(</span><span style="--0:#D7DBE0;--1:#403F53">http</span><span style="--0:#7FDBCA;--1:#097174">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--1:#111111"><span style="--0:#FFCB8B">HttpClient</span><span style="--0:#D9F5DD">)</span></span><span style="--0:#D6DEEB;--1:#403F53"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#C792EA;--1:#8D46B4">return</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#7FDBCA;--1:#097174">new</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">TranslateHttpLoader</span><span style="--0:#D6DEEB;--1:#403F53">(http);</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">HttpClientModule,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">WMLChipsZeroModule</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">forChild</span><span style="--0:#D6DEEB;--1:#403F53">(</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#7FDBCA;--1:#097174">new</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">WMLModuleForRootProps</span><span style="--0:#D6DEEB;--1:#403F53">({</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">ngxTranslateLoaderFactory:HttpLoaderFactory</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">})</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">),</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="export function HttpLoaderFactory(http: HttpClient) {  return new TranslateHttpLoader(http);}    HttpClientModule,    WMLChipsZeroModule    .forChild(      new WMLModuleForRootProps({        ngxTranslateLoaderFactory:HttpLoaderFactory      })    ),"><div></div></button></div></figure></div>
<ul>
<li>to disable translation</li>
</ul>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="ts"><code><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">WMLChipsZeroModule</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="    WMLChipsZeroModule"><div></div></button></div></figure></div>
<h3 id="v101---v102">v1.0.1 -&gt; v1.0.2</h3>
<ul>
<li>atteptimg to fix dependencies</li>
</ul>
<h3 id="200">2.0.0</h3>
<ul>
<li>fixed major problems concerning ngx-translate</li>
</ul>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="ts"><code><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// translate</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// first make sure to have ONLY ONE in the imports for AppModule</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">TranslateModule</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">forRoot</span><span style="--0:#D6DEEB;--1:#403F53">({</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">defaultLanguage: </span><span style="--0:#D9F5DD;--1:#111111">&#39;</span><span style="--0:#ECC48D;--1:#9B504E">en</span><span style="--0:#D9F5DD;--1:#111111">&#39;</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">loader: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">provide: TranslateLoader,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">useFactory: HttpLoaderFactory,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">deps:[HttpClient]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">}),</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// then</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">WMLChipsZeroNGXTranslateModule</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// for regular</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">WmlChipsModule</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="// translate// first make sure to have ONLY ONE in the imports for AppModule    TranslateModule.forRoot({      defaultLanguage: &#39;en&#39;,      loader: {        provide: TranslateLoader,        useFactory: HttpLoaderFactory,        deps:[HttpClient]      }    }),// thenWMLChipsZeroNGXTranslateModule// for regularWmlChipsModule"><div></div></button></div></figure></div>
<h3 id="300">3.0.0</h3>
<ul>
<li>MAJOR : reanme to angular-wml-chips-zero
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
<li>updated package to reflect the version  ^17.0.2 of @angular/core package
,</li>
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
<li>updated package to reflect the version  ^17.3.0 of @angular/core package,</li>
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
<li>updated package to reflect the version  ^17.3.5 of @angular/core package</li>
</ul>
<h3 id="v1735100-42324">v17.3.5100 [4/23/24]</h3>
<ul>
<li>[BREAKING CHANGE] - removed mat-autocomplete from chip control</li>
</ul>
<h3 id="v1735110-42724">v17.3.5110 [4/27/24]</h3>
<ul>
<li>[UPDATE] added wmlField so now formArray does not need to be specified and comes from wml-form
[UPDATE]
Updated chip styling in wml-chips-zero component for a more modern look and feel.</li>
</ul>
<p>[PATCH]
Removed dependency on @angular/material in wml-chips-zero, reducing the package’s dependency footprint
[UPDATE]
Introduced @windmillcode/angular-wml-button-zero in dependencies to enhance button functionalities in wml-chips-zero.
,</p>
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
<li>updated package to reflect the version  ^18.1.2 of @angular/core package,</li>
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
</ul> </div> <footer class="sl-flex astro-3yyafb3n"> <div class="meta sl-flex astro-3yyafb3n">   </div> <div class="pagination-links astro-u2l5gyhi" dir="ltr"> <a href="/Windmillcode-Angular-CDK-Docs/components/wml-button/" rel="prev" class="astro-u2l5gyhi"> <svg aria-hidden="true" class="astro-u2l5gyhi astro-c6vsoqas" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1.5rem;"><path d="M17 11H9.41l3.3-3.29a1.004 1.004 0 1 0-1.42-1.42l-5 5a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l5 5a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095L9.41 13H17a1 1 0 0 0 0-2Z"></path></svg>  <span class="astro-u2l5gyhi"> Previous <br class="astro-u2l5gyhi"/> <span class="link-title astro-u2l5gyhi">WML Button</span> </span> </a> <a href="/Windmillcode-Angular-CDK-Docs/components/wml-field/" rel="next" class="astro-u2l5gyhi"> <svg aria-hidden="true" class="astro-u2l5gyhi astro-c6vsoqas" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1.5rem;"><path d="M17.92 11.62a1.001 1.001 0 0 0-.21-.33l-5-5a1.003 1.003 0 1 0-1.42 1.42l3.3 3.29H7a1 1 0 0 0 0 2h7.59l-3.3 3.29a1.002 1.002 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l5-5a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76Z"></path></svg>  <span class="astro-u2l5gyhi"> Next <br class="astro-u2l5gyhi"/> <span class="link-title astro-u2l5gyhi">WML Field</span> </span> </a> </div>   </footer>  </div> </div>   