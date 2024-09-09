    <div class="content-panel astro-7nkwcw3z"> <div class="sl-container astro-7nkwcw3z"> <h1 id="_top" class="astro-j6tvhyss">WML Options</h1>  </div> </div>  <div class="content-panel astro-7nkwcw3z"> <div class="sl-container astro-7nkwcw3z"> <div class="sl-markdown-content"> <p>The <code dir="auto">wml-options</code> library is an Angular-based toolkit designed to enhance the selection and management of options within applications. Its primary objective is to provide a streamlined and efficient way for developers to integrate and manage multiple choice selections, toggles, and option-related actions in their Angular projects. The library offers a set of components and services that enable the display and interaction with various types of options, supporting both default and custom components for dynamic and interactive content.</p>
<p>Key features of the <code dir="auto">wml-options</code> library include:</p>
<ul>
<li>Customizable option items with dynamic content.</li>
<li>Support for reactive forms, allowing easy integration with Angular’s form system.</li>
<li>Ability to handle a large number of options efficiently.</li>
<li>Customizable appearance through CSS and SCSS.</li>
<li>Modular and flexible design, facilitating independent or combined usage of components.</li>
</ul>
<h2 id="installation">Installation</h2>
<div class="expressive-code"><link rel="stylesheet" href="/Windmillcode-Angular-CDK-Docs/_astro/ec.j8ofn.css"/><script type="module" src="/Windmillcode-Angular-CDK-Docs/_astro/ec.8zarh.js"></script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre data-language="bash"><code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--verbose</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">@windmillcode/angular-wml-options</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="npm install --verbose @windmillcode/angular-wml-options"><div></div></button></div></figure></div>
<h2 id="usage">Usage</h2>
<h3 id="wmloptionszero">WMLOptionsZero</h3>
<h3 id="getting-started">Getting Started</h3>
<iframe src="https://stackblitz.com/edit/stackblitz-starters-m7vxw9?ctl=1&amp;embed=1&amp;file=src%2Fmain.ts&amp;theme=dark"></iframe>
<h3 id="displaying-a-list-of-options">Displaying a List of Options</h3>
<iframe src="https://stackblitz.com/edit/stackblitz-starters-by1fgm?ctl=1&amp;embed=1&amp;file=src%2Fmain.ts&amp;theme=dark"></iframe>
<h3 id="custom-option-content">Custom Option Content</h3>
<iframe src="https://stackblitz.com/edit/stackblitz-starters-ikexg4?ctl=1&amp;embed=1&amp;file=src%2Fmain.ts&amp;theme=dark"></iframe>
<h3 id="handling-option-selection">Handling Option Selection</h3>
<iframe src="https://stackblitz.com/edit/stackblitz-starters-eegmbl?ctl=1&amp;embed=1&amp;file=src%2Fmain.ts&amp;theme=dark"></iframe>
<h3 id="default-values">Default Values</h3>
<p><strong>IMPORTANT  WMLOptionZeroItemProps.isChosen is the only way to set default values on options!!!</strong></p>
<iframe src="https://stackblitz.com/edit/stackblitz-starters-p1vhz5?ctl=1&amp;embed=1file=src%2Fmain.ts&amp;theme=dark"></iframe>
<h2 id="reference">Reference</h2>
<h3 id="wmloptionszeroprops-properties"><code dir="auto">WMLOptionsZeroProps</code> Properties</h3>























































<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">hasBeenInitalized</code></td><td><code dir="auto">boolean</code></td><td>Indicates if the component has been initialized.</td></tr><tr><td><code dir="auto">chosen</code></td><td><code dir="auto">WMLOptionsZeroProps[&#34;options&#34;][]</code></td><td>The list of chosen options.</td></tr><tr><td><code dir="auto">options</code></td><td><code dir="auto">WMLOptionZeroItemProps[]</code></td><td>The list of available options.</td></tr><tr><td><code dir="auto">limit</code></td><td><code dir="auto">number</code></td><td>Maximum number of selectable options.</td></tr><tr><td><code dir="auto">wmlField</code></td><td><code dir="auto">WMLFieldZeroProps</code></td><td>The associated WML field for reactive form integration.</td></tr><tr><td><code dir="auto">formArray</code></td><td><code dir="auto">FormArray</code></td><td>The form array for managing selected options.</td></tr><tr><td><code dir="auto">listenForClearedFormIsEnabled</code></td><td><code dir="auto">boolean</code></td><td>Enables listening for form clear events.</td></tr><tr><td><code dir="auto">updateFormArrayPredicate</code></td><td><code dir="auto">(val: any) =&gt; any</code></td><td>Predicate function to update the form array.</td></tr><tr><td><code dir="auto">restoreInitalValuesInFormArray</code></td><td><code dir="auto">() =&gt; void</code></td><td>Function to restore initial values in the form array.</td></tr></tbody></table>
<h3 id="wmloptionzeroitemprops-properties"><code dir="auto">WMLOptionZeroItemProps</code> Properties</h3>








































<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">isChosen</code></td><td><code dir="auto">boolean</code></td><td>Indicates if the option is chosen.</td></tr><tr><td><code dir="auto">text</code></td><td><code dir="auto">string</code></td><td>The display text for the option.</td></tr><tr><td><code dir="auto">toggleClass</code></td><td><code dir="auto">string</code></td><td>CSS class to toggle for the option.</td></tr><tr><td><code dir="auto">clickPredicate</code></td><td><code dir="auto">Function</code></td><td>Predicate function to handle option click events.</td></tr><tr><td><code dir="auto">wmlOptions</code></td><td><code dir="auto">WMLOptionsZeroProps</code></td><td>The parent options configuration.</td></tr><tr><td><code dir="auto">customCpnt</code></td><td><code dir="auto">WMLCustomComponent</code></td><td>Custom component for the option content.</td></tr></tbody></table>
<h3 id="wmloptionszerocomponent-methods"><code dir="auto">WMLOptionsZeroComponent</code> Methods</h3>








































<table><thead><tr><th>Method</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">listenForClearedForm</code></td><td>None</td><td>Listens for form clear events and updates option states.</td></tr><tr><td><code dir="auto">populateFields</code></td><td><code dir="auto">init: boolean</code></td><td>Populates fields based on the selected options.</td></tr><tr><td><code dir="auto">updateFormArray</code></td><td>None</td><td>Updates the form array with the selected options.</td></tr><tr><td><code dir="auto">toggleChosen</code></td><td><code dir="auto">btn: WMLOptionZeroItemProps, init: boolean</code></td><td>Toggles the chosen state of an option.</td></tr><tr><td><code dir="auto">ngAfterViewInit</code></td><td>None</td><td>Lifecycle hook for after view initialization.</td></tr><tr><td><code dir="auto">ngOnDestroy</code></td><td>None</td><td>Lifecycle hook for component destruction.</td></tr></tbody></table>
<h2 id="changelog">Changelog</h2>
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
<h3 id="v1813000">v18.1.3000</h3>
<ul>
<li>fixed a bug with default options</li>
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
</ul> </div> <footer class="sl-flex astro-3yyafb3n"> <div class="meta sl-flex astro-3yyafb3n">   </div> <div class="pagination-links astro-u2l5gyhi" dir="ltr"> <a href="/Windmillcode-Angular-CDK-Docs/components/wml-notify/" rel="prev" class="astro-u2l5gyhi"> <svg aria-hidden="true" class="astro-u2l5gyhi astro-c6vsoqas" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1.5rem;"><path d="M17 11H9.41l3.3-3.29a1.004 1.004 0 1 0-1.42-1.42l-5 5a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l5 5a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095L9.41 13H17a1 1 0 0 0 0-2Z"></path></svg>  <span class="astro-u2l5gyhi"> Previous <br class="astro-u2l5gyhi"/> <span class="link-title astro-u2l5gyhi">WML Notify</span> </span> </a> <a href="/Windmillcode-Angular-CDK-Docs/components/wml-panel/" rel="next" class="astro-u2l5gyhi"> <svg aria-hidden="true" class="astro-u2l5gyhi astro-c6vsoqas" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1.5rem;"><path d="M17.92 11.62a1.001 1.001 0 0 0-.21-.33l-5-5a1.003 1.003 0 1 0-1.42 1.42l3.3 3.29H7a1 1 0 0 0 0 2h7.59l-3.3 3.29a1.002 1.002 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l5-5a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76Z"></path></svg>  <span class="astro-u2l5gyhi"> Next <br class="astro-u2l5gyhi"/> <span class="link-title astro-u2l5gyhi">WML Panel</span> </span> </a> </div>   </footer>  </div> </div>   