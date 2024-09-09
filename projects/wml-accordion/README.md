    <div class="content-panel astro-7nkwcw3z"> <div class="sl-container astro-7nkwcw3z"> <h1 id="_top" class="astro-j6tvhyss">WML Accordion</h1>  </div> </div>  <div class="content-panel astro-7nkwcw3z"> <div class="sl-container astro-7nkwcw3z"> <div class="sl-markdown-content"> <p>The Windmillcode Angular WML Accordion  library provides a set of components and services to create accordion functionalities in Angular applications.  This library facilitates the development of accordions with customizable sections, and animation controls, using WMLUIProperty  to ensure consistency in development practices. Developers can construct accordions that are responsive and adaptable to various content types and user interactions, enhancing the informational architecture of Angular-based web applications.</p>
<p>WMLAccordionZeroComponent is the container which is populated with WMLAccordionZeroItemComponent to populate the accordion. WMLAccordionZeroItemComponent is a dynamic component and by defuault is uses WMLAccordionZeroSampleComponent as the accordion body and WMLAccordionZeroTitleComponent as the title of the accordion. you will want to replace</p>
<h2 id="installation">Installation</h2>
<div class="expressive-code"><link rel="stylesheet" href="/Windmillcode-Angular-CDK-Docs/_astro/ec.j8ofn.css"/><script type="module" src="/Windmillcode-Angular-CDK-Docs/_astro/ec.8zarh.js"></script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre data-language="bash"><code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">-s</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--verbose</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">@windmillcode/angular-wml-accordion</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="npm install -s --verbose @windmillcode/angular-wml-accordion"><div></div></button></div></figure></div>
<h2 id="usage">Usage</h2>
<p>Below are some usage examples of the WML Accordion Zero library for various development needs:</p>
<h3 id="getting-started">Getting Started</h3>
<p>at its very core this is all you need to get started with the accordion
as default parameters already exist to show you how to use the accordion</p>
<iframe src="https://stackblitz.com/edit/stackblitz-starters-cs3awz?ctl=1&amp;embed=1&amp;file=src%2Fmain.ts&amp;theme=dark"></iframe>
<h3 id="to-configure-the-amount-of-sections">To configure the amount of sections:</h3>
<p>items is a 2D array of WMLAccordionZeroItemProps so  if you want x sections you can add WMLAccordionZeroItemProps in whatever Array 2d configuration you like</p>
<iframe src="https://stackblitz.com/edit/stackblitz-starters-vqbw42?ctl=1&amp;embed=1&amp;file=src%2Fmain.ts&amp;theme=dark"></iframe>
<h3 id="use-custom-components">Use Custom Components</h3>
<iframe src="https://stackblitz.com/edit/stackblitz-starters-zg7smf?ctl=1&amp;embed=1&amp;file=src%2Fmain.ts&amp;theme=dark"></iframe>
<h3 id="dynamic-update">Dynamic Update</h3>
<p>This example shows how to dynamically load content into the accordion sections:</p>
<iframe src="https://stackblitz.com/edit/stackblitz-starters-rrxnns?ctl=1&amp;embed=1&amp;file=src%2Fmain.ts&amp;theme=dark"></iframe>
<h3 id="programmatically-open-and-close">Programmatically Open And Close</h3>
<iframe src="https://stackblitz.com/edit/stackblitz-starters-s1dkef?ctl=1&amp;embed=1&amp;file=src%2Fmain.ts&amp;theme=dark"></iframe>

<h3 id="customization">Customization</h3>
<p>There are the <a href="https://github.com/WindMillCode/Windmillcode-Angular-CDK/blob/main/projects/wml-accordion-zero/_color_pallete.scss">color pallete</a>
, <a href="https://github.com/WindMillCode/Windmillcode-Angular-CDK/blob/main/projects/wml-accordion-zero/_media_queries.scss">media queries</a> ,<a href="https://github.com/WindMillCode/Windmillcode-Angular-CDK/blob/main/projects/wml-accordion-zero/_spacing.scss">spacing</a>  and <a href="https://github.com/WindMillCode/Windmillcode-Angular-CDK/blob/main/projects/wml-accordion-zero/_common.scss">common</a> that you can use to customize the accordion. in your css simply replace the values with the ones you want to use and the component will take on the look. the variables are very specific and even named after the component to avoid any overlapping issues</p>

<h2 id="docs">Docs</h2>
<h3 id="wmlaccordionzeroprops">WMLAccordionZeroProps</h3>




















<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">id</code></td><td><code dir="auto">string</code></td><td>An optional identifier for the accordion component.</td></tr><tr><td><code dir="auto">items</code></td><td><code dir="auto">&lt;WMLAccordionZeroItemProps[][]&gt;</code></td><td>A 2D array of accordion item parameters to define each section.</td></tr></tbody></table>
<h3 id="wmlaccordionzeroitemprops">WMLAccordionZeroItemProps</h3>






































































<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">id</code></td><td><code dir="auto">string</code></td><td>An optional identifier for the accordion item.</td></tr><tr><td><code dir="auto">propTitle</code></td><td><code dir="auto">string</code></td><td>The title text for the accordion item.</td></tr><tr><td><code dir="auto">isClosed</code></td><td><code dir="auto">boolean</code></td><td>Indicates whether the accordion item is initially closed.</td></tr><tr><td><code dir="auto">toggleAccordionEvent</code></td><td><code dir="auto">Subject&lt;boolean&gt;</code></td><td>An event that toggles the accordion item’s open/close state.</td></tr><tr><td><code dir="auto">toggleAccordionSubj</code></td><td><code dir="auto">Subject&lt;{ val: boolean; emit: boolean }&gt;</code></td><td>Subject to programmatically toggle the accordion’s state.</td></tr><tr><td><code dir="auto">accordionBody</code></td><td><code dir="auto">WMLCustomComponent</code></td><td>The component to render as the accordion item’s body.</td></tr><tr><td><code dir="auto">updateAccordionBodySubj</code></td><td><code dir="auto">Subject&lt;WMLCustomComponent&gt;</code></td><td>Subject to dynamically update the content of the accordion body.</td></tr><tr><td><code dir="auto">startHeight</code></td><td><code dir="auto">string</code></td><td>CSS value for the starting height during the opening animation.</td></tr><tr><td><code dir="auto">endHeight0</code></td><td><code dir="auto">string</code></td><td>CSS value for the end height during the opening animation.</td></tr><tr><td><code dir="auto">endHeight1</code></td><td><code dir="auto">string</code></td><td>CSS value for the end height during the closing animation.</td></tr><tr><td><code dir="auto">animationDuration0</code></td><td><code dir="auto">string</code></td><td>Duration of the opening animation.</td></tr><tr><td><code dir="auto">animationDuration1</code></td><td><code dir="auto">string</code></td><td>Duration of the closing animation.</td></tr></tbody></table>
<h3 id="wmlaccordionzerosampleprops">WMLAccordionZeroSampleProps</h3>

















<table><thead><tr><th>Property</th><th>Type</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td><code dir="auto">id</code></td><td><code dir="auto">string</code></td><td>Identifier for the sample component.</td><td><code dir="auto">&#34;&#34;</code></td></tr></tbody></table>
<h3 id="wmlaccordionzerotitleprops">WMLAccordionZeroTitleProps</h3>























<table><thead><tr><th>Property</th><th>Type</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td><code dir="auto">id</code></td><td><code dir="auto">string</code></td><td>Identifier for the sample component.</td><td><code dir="auto">&#34;&#34;</code></td></tr><tr><td><code dir="auto">title</code></td><td><code dir="auto">string</code></td><td>Text for the accordion title.</td><td><code dir="auto">&#34;My Accordion Title&#34;</code></td></tr></tbody></table>
<p>These tables provide an overview of the key elements within the WML Accordion Zero library that developers can interact with to customize and control accordion behavior in their Angular applications.</p>
<h2 id="changelog">Changelog</h2>
<h3 id="v001">v0.0.1</h3>
<ul>
<li>can specify multiple accordion with in the component and specifiy your child compoennt as well</li>
<li>if you want the accordion body to be the same width as its header fintd the target accordion and specify its width</li>
</ul>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="css"><code><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#C5E478;--1:#3C63B3">.WMLAccordionZeroPod0</span><span style="--0:#C792EA;--1:#8D46B4"> </span><span style="--0:#FF6363;--1:#9B504E">wml-accordion-zero-item</span><span style="--0:#C5E478;--1:#3C63B3">:nth-child</span><span style="--0:#C792EA;--1:#8D46B4">(</span><span style="--0:#F78C6C;--1:#AA0982">1</span><span style="--0:#C792EA;--1:#8D46B4">)</span><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#80CBC4;--1:#097174">flex</span><span style="--0:#D6DEEB;--1:#403F53">: </span><span style="--0:#F78C6C;--1:#AA0982">0</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#F78C6C;--1:#AA0982">0</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--1:#AA0982"><span style="--0:#F78C6C">20</span><span style="--0:#FFEB95">%</span></span><span style="--0:#D6DEEB;--1:#403F53">!;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="  .WMLAccordionZeroPod0 wml-accordion-zero-item:nth-child(1){    flex: 0 0 20%!;  }"><div></div></button></div></figure></div>
<h3 id="v-002">v 0.0.2</h3>
<ul>
<li>coorect dependencies</li>
</ul>
<p>v 0.0.3</p>
<ul>
<li>end devs can now decide whether an accordion is open on init or not</li>
</ul>
<h3 id="v-1625-0">v 16.2.5-0</h3>
<ul>
<li>end devs can control animations values for the the accordion
here are the default values that get passed to the scss</li>
</ul>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre data-language="ts"><code><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">startHeight </span><span style="--0:#C792EA;--1:#8D46B4">=</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#ECC48D;--1:#9B504E">calc(0/10.6 * 1rem)</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">endHeight0 </span><span style="--0:#C792EA;--1:#8D46B4">=</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#ECC48D;--1:#9B504E">calc(20000/10.6 * 1rem)</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">endHeight1 </span><span style="--0:#C792EA;--1:#8D46B4">=</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#ECC48D;--1:#9B504E">calc(2000/10.6 * 1rem)</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">animationDuration0 </span><span style="--0:#C792EA;--1:#8D46B4">=</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#ECC48D;--1:#9B504E">10s</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">animationDuration1 </span><span style="--0:#C792EA;--1:#8D46B4">=</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#ECC48D;--1:#9B504E">1.25s</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="  startHeight = &#34;calc(0/10.6 * 1rem)&#34;  endHeight0 = &#34;calc(20000/10.6 * 1rem)&#34;  endHeight1 = &#34;calc(2000/10.6 * 1rem)&#34;  animationDuration0 = &#34;10s&#34;  animationDuration1 = &#34;1.25s&#34;"><div></div></button></div></figure></div>
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
<li>updated package to reflect the version  ^17.2.1 of @angular/core package</li>
</ul>
<h3 id="v1721001-22124">v17.2.1001 [2/21/24]</h3>
<ul>
<li>[UPDATE]  added WMLAccordionZeroItemProps.updateAccordionBodySubj to toggle the accordion body as needed,</li>
<li>[UPDATE]  you can customize the title via WMLAccordionZeroItemProps.accordionTitle
,</li>
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
<li>updated package to conform with @windmillcode/angular-wml-components-base   ,
,</li>
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
<li>updated package to conform with @windmillcode/angular-wml-components-base</li>
</ul>
<h3 id="v1813000-beta13-8424">v18.1.3000-beta13 [8/4/24]</h3>
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
<h3 id="v1813001-8524">v18.1.3001 [8/5/24]</h3>
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
<li>updated package to reflect the version  18.2.0 of @angular/core package</li>
</ul>
<h3 id="v1821-82024-1">v18.2.1 [8/20/24]</h3>
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
</ul> </div> <footer class="sl-flex astro-3yyafb3n"> <div class="meta sl-flex astro-3yyafb3n">   </div> <div class="pagination-links astro-u2l5gyhi" dir="ltr"> <a href="/Windmillcode-Angular-CDK-Docs/schematics/wml-schematics/" rel="prev" class="astro-u2l5gyhi"> <svg aria-hidden="true" class="astro-u2l5gyhi astro-c6vsoqas" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1.5rem;"><path d="M17 11H9.41l3.3-3.29a1.004 1.004 0 1 0-1.42-1.42l-5 5a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l5 5a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095L9.41 13H17a1 1 0 0 0 0-2Z"></path></svg>  <span class="astro-u2l5gyhi"> Previous <br class="astro-u2l5gyhi"/> <span class="link-title astro-u2l5gyhi">WML Schematics</span> </span> </a> <a href="/Windmillcode-Angular-CDK-Docs/components/wml-button/" rel="next" class="astro-u2l5gyhi"> <svg aria-hidden="true" class="astro-u2l5gyhi astro-c6vsoqas" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1.5rem;"><path d="M17.92 11.62a1.001 1.001 0 0 0-.21-.33l-5-5a1.003 1.003 0 1 0-1.42 1.42l3.3 3.29H7a1 1 0 0 0 0 2h7.59l-3.3 3.29a1.002 1.002 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l5-5a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76Z"></path></svg>  <span class="astro-u2l5gyhi"> Next <br class="astro-u2l5gyhi"/> <span class="link-title astro-u2l5gyhi">WML Button</span> </span> </a> </div>   </footer>  </div> </div>   