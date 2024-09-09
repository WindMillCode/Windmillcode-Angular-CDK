    <div class="content-panel astro-7nkwcw3z"> <div class="sl-container astro-7nkwcw3z"> <h1 id="_top" class="astro-j6tvhyss">WML Popup</h1>  </div> </div>  <div class="content-panel astro-7nkwcw3z"> <div class="sl-container astro-7nkwcw3z"> <div class="sl-markdown-content"> <p>The Angular WML Popup library is an Angular-based toolkit designed to simplify the creation and management of pop-up components within web applications. It provides developers with a streamlined approach to integrate pop-ups, facilitating interactions and enhancing user engagement without the need for extensive boilerplate code. The library is crafted to address common challenges associated with pop-up management, such as dynamic content loading, positioning, and responsiveness, ensuring a versatile solution adaptable to various application scenarios.</p>
<p>Central to the Angular WML Popup library is the <code dir="auto">WMLPopupZeroComponent</code>, which serves as the foundational element for pop-up creation and manipulation. This component is designed to be flexible, allowing for the embedding of custom content and the adjustment of its behavior and appearance through a range of input parameters. Developers can leverage the <code dir="auto">WMLPopupProps</code> class to configure the pop-up, defining properties such as the component to display, its initialization parameters, and control mechanisms for opening and closing the pop-up. The library emphasizes interactivity and customization, providing mechanisms such as the <code dir="auto">togglePopupSubj</code> subject to programmatically control the pop-up’s visibility. Furthermore, the library supports inter-component communication and dynamic content loading, enabling developers to create rich, interactive user experiences. By adhering to the library’s design patterns, such as utilizing <code dir="auto">WMLPopupZeroComponent</code> as a container for dynamic content, developers can implement consistent and effective pop-up functionalities within their Angular applications.</p>
<h2 id="installation">Installation</h2>
<div class="expressive-code"><link rel="stylesheet" href="/Windmillcode-Angular-CDK-Docs/_astro/ec.j8ofn.css"/><script type="module" src="/Windmillcode-Angular-CDK-Docs/_astro/ec.8zarh.js"></script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre data-language="bash"><code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">-s</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--verbose</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">@windmillcode/angular-wml-popup</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="npm install -s --verbose @windmillcode/angular-wml-popup"><div></div></button></div></figure></div>
<h2 id="usage--wmlpopupzerocomponent">Usage  <code dir="auto">WMLPopupZeroComponent</code></h2>
<h3 id="getting-started">Getting Started</h3>
<iframe src="https://stackblitz.com/edit/stackblitz-starters-d2uois?ctl=1&amp;embed=1&amp;file=src%2Fmain.ts&amp;theme=dark"></iframe>
<h2 id="reference">Reference</h2>
<h3 id="wmlpopupzeroprops-methods">WMLPopupZeroProps Methods</h3>






























<table><thead><tr><th>Method</th><th>Signature</th><th>Description</th></tr></thead><tbody><tr><td>cpnt</td><td><code dir="auto">Type&lt;any&gt;</code></td><td>Component to be displayed within the popup.</td></tr><tr><td>openPopup</td><td><code dir="auto">() =&gt; void</code></td><td>Opens the popup.</td></tr><tr><td>closePopup</td><td><code dir="auto">() =&gt; void</code></td><td>Closes the popup.</td></tr><tr><td>togglePopupSubj</td><td><code dir="auto">Subject&lt;boolean&gt;</code></td><td>Subject to toggle popup visibility (<code dir="auto">true</code> for open, <code dir="auto">false</code> for close).</td></tr></tbody></table>
<h2 id="changelog">Changelog</h2>
<ul>
<li>v1.0.0
<ul>
<li>added optional support for ngx translate to use ngxtranslate</li>
</ul>
</li>
</ul>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="ts"><code><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// to use ngxtranslate</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">WMLPopupNgxTranslateModule</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// to use regaular</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">WMLPopupModule</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="// to use ngxtranslateWMLPopupNgxTranslateModule// to use regaularWMLPopupModule"><div></div></button></div></figure></div>
<h3 id="v100">v1.0.0</h3>
<ul>
<li>MAJOR rename to @windmillcode/angular-wml-popup</li>
<li>fixed major problems concerning ngx-translate</li>
</ul>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="ts"><code><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// translate</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// first make sure to have ONLY ONE in the imports for AppModule</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">TranslateModule</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">forRoot</span><span style="--0:#D6DEEB;--1:#403F53">({</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">defaultLanguage: </span><span style="--0:#D9F5DD;--1:#111111">&#39;</span><span style="--0:#ECC48D;--1:#9B504E">en</span><span style="--0:#D9F5DD;--1:#111111">&#39;</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">loader: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">provide: TranslateLoader,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">useFactory: HttpLoaderFactory,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">deps:[HttpClient]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">}),</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// then</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">WmlPanelNGXTranslateModule</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// for regular</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">WmlPanelModule</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="// translate// first make sure to have ONLY ONE in the imports for AppModule    TranslateModule.forRoot({      defaultLanguage: &#39;en&#39;,      loader: {        provide: TranslateLoader,        useFactory: HttpLoaderFactory,        deps:[HttpClient]      }    }),// thenWmlPanelNGXTranslateModule// for regularWmlPanelModule"><div></div></button></div></figure></div>
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
<li>updated package to reflect the version  ^17.0.7 of @angular/core package</li>
</ul>
<h3 id="v17071">v17.0.71</h3>
<ul>
<li>added openPopup closePopup and togglePopupSubj so developers can write less code
,</li>
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
<li>updated package to conform with @windmillcode/angular-wml-components-base</li>
</ul>
<h3 id="v1709002">v17.0.9002</h3>
<p>[UPDATE] can now set id on the popup by calling props.openPopup
or props.closePopup for example</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="ts"><code><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#7FDBCA;--1:#097174">this</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#FAF39F;--1:#111111">baseService</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#FAF39F;--1:#111111">popupProps</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#FAF39F;--1:#111111">view</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#7FDBCA;--1:#097174">id</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8D46B4">=</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#7FDBCA;--1:#097174">this</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">idPrefix</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#ECC48D;--1:#9B504E">Pricing</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#D6DEEB;--1:#403F53">)</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#7FDBCA;--1:#097174">this</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#FAF39F;--1:#111111">baseService</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#FAF39F;--1:#111111">popupProps</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">openPopup</span><span style="--0:#D6DEEB;--1:#403F53">()</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="      this.baseService.popupProps.view.id = this.idPrefix(&#34;Pricing&#34;)      this.baseService.popupProps.openPopup()"><div></div></button></div></figure></div>
<p>,</p>
<h3 id="v1710000">v17.1.0000</h3>
<ul>
<li>updated package to reflect the version  ^17.1.0 of @angular/core package</li>
</ul>
<h3 id="v1710001">v17.1.0001</h3>
<ul>
<li>[FIX] fixed a bug where the param key passed to the WMLPopupProps was filtered out causing the component to not work properly
,</li>
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
<h3 id="v1801-52324">v18.0.1 [5/23/24]</h3>
<ul>
<li>updated package to reflect the version  ^18.0.0 of @angular/core package</li>
</ul>
<h3 id="v1802-5242024-124523-pm-est">v18.0.2 [5/24/2024 12:45:23 PM EST]</h3>
<p>[UPDATE] when clicking on the outer space of the popup the popup now closes without having to provide a feature to close it</p>
<h3 id="v1803-5242024-110323-am-est">v18.0.3 [5/24/2024 11:03:23 AM EST]</h3>
<p>[FIX] prevent the popup from closing click on the non-close area
,</p>
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
<h3 id="v1813000-beta2-8124">v18.1.3000-beta2 [8/1/24]</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base   ,</li>
</ul>
<h3 id="v1813000-beta3-8124">v18.1.3000-beta3 [8/1/24]</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base   ,</li>
</ul>
<h3 id="v1813000-beta4-8124">v18.1.3000-beta4 [8/1/24]</h3>
<h3 id="v1813001-8424">v18.1.3001 [8/4/24]</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base</li>
</ul>
<h3 id="v1813002-8424">v18.1.3002 [8/4/24]</h3>
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
<h3 id="v1813004-8524-1">v18.1.3004 [8/5/24]</h3>
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
</ul> </div> <footer class="sl-flex astro-3yyafb3n"> <div class="meta sl-flex astro-3yyafb3n">   </div> <div class="pagination-links astro-u2l5gyhi" dir="ltr"> <a href="/Windmillcode-Angular-CDK-Docs/components/wml-panel/" rel="prev" class="astro-u2l5gyhi"> <svg aria-hidden="true" class="astro-u2l5gyhi astro-c6vsoqas" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1.5rem;"><path d="M17 11H9.41l3.3-3.29a1.004 1.004 0 1 0-1.42-1.42l-5 5a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l5 5a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095L9.41 13H17a1 1 0 0 0 0-2Z"></path></svg>  <span class="astro-u2l5gyhi"> Previous <br class="astro-u2l5gyhi"/> <span class="link-title astro-u2l5gyhi">WML Panel</span> </span> </a> <a href="/Windmillcode-Angular-CDK-Docs/components/wml-select/" rel="next" class="astro-u2l5gyhi"> <svg aria-hidden="true" class="astro-u2l5gyhi astro-c6vsoqas" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1.5rem;"><path d="M17.92 11.62a1.001 1.001 0 0 0-.21-.33l-5-5a1.003 1.003 0 1 0-1.42 1.42l3.3 3.29H7a1 1 0 0 0 0 2h7.59l-3.3 3.29a1.002 1.002 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l5-5a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76Z"></path></svg>  <span class="astro-u2l5gyhi"> Next <br class="astro-u2l5gyhi"/> <span class="link-title astro-u2l5gyhi">WML Select</span> </span> </a> </div>   </footer>  </div> </div>   