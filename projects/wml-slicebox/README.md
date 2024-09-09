    <div class="content-panel astro-7nkwcw3z"> <div class="sl-container astro-7nkwcw3z"> <h1 id="_top" class="astro-j6tvhyss">WML Slicebox</h1>  </div> </div>  <div class="content-panel astro-7nkwcw3z"> <div class="sl-container astro-7nkwcw3z"> <div class="sl-markdown-content"> <p>The Angular WML Slicebox library is an Angular-based library designed to enhance the visual interactivity of web applications by introducing a 3D slicebox carousel component. This library provides a sophisticated and engaging way to display images or content in a carousel format, with a 3D rotation effect that adds depth and dynamism to the user experience. Aimed at integrating seamlessly with Angular applications, Angular WML Slicebox offers a set of configurable options to tailor the carousel’s behavior and appearance, making it a versatile tool for developers looking to enhance their UI with 3D interactive elements.</p>
<p>At the heart of the Angular WML Slicebox library is the <code dir="auto">WMLSliceboxZeroComponent</code>, which serves as the central component orchestrating the 3D slicebox carousel’s functionality. This component manages the carousel’s state, handles user interactions, and renders the 3D slices that comprise the carousel’s visual structure. Developers can customize the carousel through a variety of parameters, such as orientation, rotation speed, and disperse factor, allowing for a high degree of control over the carousel’s behavior and appearance. Additionally, the library provides mechanisms for dynamically loading content into the carousel and responding to user interactions, making it a flexible solution for presenting content in an engaging and interactive format. The component’s design encourages modularity and reusability, adhering to Angular’s component-based architecture, and offering developers a straightforward way to incorporate 3D carousel functionality into their applications.</p>
<h2 id="installation">Installation</h2>
<div class="expressive-code"><link rel="stylesheet" href="/Windmillcode-Angular-CDK-Docs/_astro/ec.j8ofn.css"/><script type="module" src="/Windmillcode-Angular-CDK-Docs/_astro/ec.8zarh.js"></script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre data-language="shell"><code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">-s</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--verbose</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">@windmillcode/wml-slicebox</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="npm install -s --verbose @windmillcode/wml-slicebox"><div></div></button></div></figure></div>
<h2 id="usage-wmlsliceboxzeromodule">Usage <code dir="auto">WMLSliceboxZeroModule</code></h2>
<h3 id="getting-started">Getting Started</h3>
<iframe src="https://stackblitz.com/edit/stackblitz-starters-st7qkj?ctl=1&amp;embed=1&amp;file=src%2Fmain.ts&amp;theme=dark"></iframe>
<h3 id="full-example"><a href="#full-example">Full Example</a></h3>
<iframe src="https://stackblitz.com/edit/stackblitz-starters-qkcg3q?ctl=1&amp;embed=1&amp;file=src%2Fmain.ts&amp;theme=dark"></iframe>
<h2 id="reference">Reference</h2>
<h3 id="wmlsliceboxzeroprops-configurations"><code dir="auto">WMLSliceboxZeroProps</code> Configurations</h3>



































































































































<table><thead><tr><th>Name</th><th>Type</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td>autoplay</td><td>boolean</td><td>Whether the carousel should continue or not</td><td><code dir="auto">true</code></td></tr><tr><td>colorHiddenSides</td><td>hex value, rgba, hsla</td><td>Color of the sides of the cuboid where the image is not shown</td><td>’#222’</td></tr><tr><td>cuboidsCount</td><td>number</td><td>The number of cuboids to be used in the slicebox</td><td>9</td></tr><tr><td>disperseFactor</td><td>number</td><td>How far away in pixels should the cuboids coordinate to move away from the center</td><td>40</td></tr><tr><td>disperseSpeed</td><td>number</td><td>Time in ms of how fast the cuboids coordinate to move away from the center</td><td>4000</td></tr><tr><td>easing</td><td>css animation easing types</td><td>The animation type</td><td>’ease-out’</td></tr><tr><td>images</td><td>WMLSliceboxZeroImg[]</td><td>An array of images to provide to the slicebox</td><td>[]</td></tr><tr><td>interval</td><td>number</td><td>Milliseconds before the carousel navigates if autoplay is true</td><td>3000</td></tr><tr><td>jumpToSlideSubj</td><td>subject</td><td>Not to be edited; used to indicate to the slicebox to jump to a specific slide when autoplay is false</td><td>-</td></tr><tr><td>moveToNextSlideSubj</td><td>subject</td><td>Not to be edited; used to indicate to the slicebox to move to the next slide when autoplay is false</td><td>-</td></tr><tr><td>moveToPrevSlideSubj</td><td>subject</td><td>Not to be edited; used to indicate to the slicebox to move to the previous slide when autoplay is false</td><td>-</td></tr><tr><td>nextRotationDegree</td><td>css degree string</td><td>When provided, overrides the default rotation to have the next slides rotate according to your desires</td><td><code dir="auto">&#39;-90deg&#39;</code> if <code dir="auto">reverse</code> is <code dir="auto">true</code>, else <code dir="auto">&#39;90deg&#39;</code></td></tr><tr><td>orientation</td><td>’v’ | ‘h’</td><td>Whether to rotate vertically or horizontally</td><td>’v’</td></tr><tr><td>perspective</td><td>px value</td><td>Same as perspective definition in graphic design</td><td>10000</td></tr><tr><td>prevRotationDegree</td><td>css degree string</td><td>When provided, overrides the default rotation to have the next slides rotate according to your desires</td><td>Opposite of <code dir="auto">nextRotationDegree</code></td></tr><tr><td>resizeDelay</td><td>number</td><td>Amount of time to debounce before the carousel resizes itself</td><td>10</td></tr><tr><td>reverse</td><td>boolean</td><td>Whether to reverse the default rotation overwritten of nextRotationDegree is set</td><td><code dir="auto">false</code></td></tr><tr><td>sequentialFactor</td><td>number</td><td>Time in ms before each cuboid consecutively rotates</td><td>350</td></tr><tr><td>sliceboxSizeUseProvidedValues</td><td>boolean</td><td>Whether to resize to fill the parent element or use specified height and width of the slicebox</td><td><code dir="auto">false</code></td></tr><tr><td>speed</td><td>number</td><td>How fast each cuboid is supposed to rotate</td><td>15660</td></tr></tbody></table>
<p>Feel free to explore and use these configurations and methods to create a highly interactive and visually appealing carousel for your Angular applications!</p>
<h2 id="changelog">Changelog</h2>
<h3 id="v001">v0.0.1</h3>
<ul>
<li>wml-select complete and ready
<ul>
<li>disabled support</li>
<li>default value support</li>
<li>update component support</li>
<li>update via formcontrol support</li>
</ul>
</li>
</ul>
<h3 id="v002">v0.0.2</h3>
<ul>
<li>added WMLSelectZeroProps.updateOptionValuesWithOptionText so that if users wanted text and value they can use</li>
<li>made a minor change that will allow defaulr fields to populate under certain circumstances</li>
</ul>
<h3 id="16260">16.2.60</h3>
<ul>
<li>updated dependencies</li>
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
<h3 id="v1813000-beta3-8124">v18.1.3000-beta3 [8/1/24]</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base   ,</li>
</ul>
<h3 id="v1813000-beta4-8124">v18.1.3000-beta4 [8/1/24]</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base</li>
</ul>
<h3 id="v1813001">v18.1.3001</h3>
<p>[BREAKING CHANGES] changed from wml-slicebox to wml-slicebox-zero and replaced all Params with Props</p>
<h3 id="v1813002-8424">v18.1.3002 [8/4/24]</h3>
<ul>
<li>updated package to conform with @windmillcode/angular-wml-components-base</li>
</ul>
<h3 id="v1813001-8424">v18.1.3001 [8/4/24]</h3>
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
</ul> </div> <footer class="sl-flex astro-3yyafb3n"> <div class="meta sl-flex astro-3yyafb3n">   </div> <div class="pagination-links astro-u2l5gyhi" dir="ltr"> <a href="/Windmillcode-Angular-CDK-Docs/components/wml-select/" rel="prev" class="astro-u2l5gyhi"> <svg aria-hidden="true" class="astro-u2l5gyhi astro-c6vsoqas" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1.5rem;"><path d="M17 11H9.41l3.3-3.29a1.004 1.004 0 1 0-1.42-1.42l-5 5a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l5 5a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095L9.41 13H17a1 1 0 0 0 0-2Z"></path></svg>  <span class="astro-u2l5gyhi"> Previous <br class="astro-u2l5gyhi"/> <span class="link-title astro-u2l5gyhi">WML Select</span> </span> </a> <a href="/Windmillcode-Angular-CDK-Docs/components/wml-table/" rel="next" class="astro-u2l5gyhi"> <svg aria-hidden="true" class="astro-u2l5gyhi astro-c6vsoqas" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1.5rem;"><path d="M17.92 11.62a1.001 1.001 0 0 0-.21-.33l-5-5a1.003 1.003 0 1 0-1.42 1.42l3.3 3.29H7a1 1 0 0 0 0 2h7.59l-3.3 3.29a1.002 1.002 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l5-5a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76Z"></path></svg>  <span class="astro-u2l5gyhi"> Next <br class="astro-u2l5gyhi"/> <span class="link-title astro-u2l5gyhi">WML Table (Beta Unstable Unmaintainable)</span> </span> </a> </div>   </footer>  </div> </div>   