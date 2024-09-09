    <div class="content-panel astro-7nkwcw3z"> <div class="sl-container astro-7nkwcw3z"> <h1 id="_top" class="astro-j6tvhyss">WML Form</h1>  </div> </div>  <div class="content-panel astro-7nkwcw3z"> <div class="sl-container astro-7nkwcw3z"> <div class="sl-markdown-content"> <p>The Angular WML Form Libary is a versatile and customizable library designed to streamline form creation and management in Angular applications. This component offers the following features:</p>
<ul>
<li><strong>Dynamic Field Management</strong>: Easily manage and update fields dynamically using the <code dir="auto">updateFields</code> and <code dir="auto">updateFieldsWrapper</code> methods.</li>
<li><strong>Flexible Layouts</strong>: Define field sections to organize and layout fields in a structured manner.</li>
<li><strong>Responsive Design</strong>: Ensures forms look great on various screen sizes with built-in media queries.</li>
<li><strong>Custom Styling</strong>: Supports custom styles including glassmorphism effects for a modern UI.</li>
<li><strong>Input Handling</strong>: Handles various types of inputs including standalone fields and WML cards.</li>
<li><strong>Event Handling</strong>: Emits events when fields are updated, allowing for reactive and interactive forms.</li>
</ul>
<h2 id="installation">Installation</h2>
<div class="expressive-code"><link rel="stylesheet" href="/Windmillcode-Angular-CDK-Docs/_astro/ec.j8ofn.css"/><script type="module" src="/Windmillcode-Angular-CDK-Docs/_astro/ec.8zarh.js"></script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre data-language="bash"><code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--verbose</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">@windmillcode/angular-wml-form</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#616671"># to populate the field, submit form</span></div></div><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--verbose</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">@windmillcode/angular-wml-field</span></div></div><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--verbose</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">@windmillcode/angular-wml-input</span></div></div><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--verbose</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">@windmillcode/angular-wml-button</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="npm install --verbose @windmillcode/angular-wml-formnpm install --verbose @windmillcode/angular-wml-fieldnpm install --verbose @windmillcode/angular-wml-inputnpm install --verbose @windmillcode/angular-wml-button"><div></div></button></div></figure></div>
<h2 id="usage">Usage</h2>
<h3 id="wmlformzero">WMLFormZero</h3>
<h3 id="basic-form-setup">Basic Form Setup</h3>
<iframe src="https://stackblitz.com/edit/stackblitz-starters-fgsk2e?ctl=1&amp;embed=1&amp;file=src%2Fmain.ts&amp;theme=dark"></iframe>
<h3 id="form-submission"><a href="#form-submission">Form Submission</a></h3>
<ul>
<li>the FormGroup is applied at the field level not the form level so essentiallly you do not need wml-form-zero to create your custom form</li>
<li>to see how this complex form works if you type in abc in the name field then the email field is required however if the name field is not abc then you can empty the email field and submit the form. WMLForm is very impervious</li>
</ul>
<iframe src="https://stackblitz.com/edit/stackblitz-starters-4zvh8e?ctl=1&amp;embed=1&amp;file=src%2Fmain.ts&amp;theme=dark"></iframe>
<h3 id="dynamic-field-update"><a href="#dynamic-field-update">Dynamic Field Update</a></h3>
<ul>
<li>it replaces so you need the orginal field in case of adding fields</li>
</ul>
<iframe src="https://stackblitz.com/edit/stackblitz-starters-wgiqyj?ctl=1&amp;embed=1&amp;file=src%2Fmain.ts&amp;theme=dark"></iframe>
<h3 id="field-sections">Field Sections</h3>
<ul>
<li>using field sections helps style the layout of the form</li>
<li>All you have to do is to apply display flex to the target form</li>
</ul>

<iframe src="https://stackblitz.com/edit/stackblitz-starters-24xsgt?ctl=1&amp;embed=1&amp;file=src%2Fmain.ts&amp;theme=dark"></iframe>
<h2 id="reference">Reference</h2>
<h3 id="wmlformzerocomponent-properties">WMLFormZeroComponent Properties</h3>















<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">props</code></td><td><code dir="auto">WMLFormZeroProps</code></td><td>The main properties object for configuring the form.</td></tr></tbody></table>
<h3 id="wmlformzeroprops-properties">WMLFormZeroProps Properties</h3>








































<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">view</code></td><td><code dir="auto">WMLView</code></td><td>View configuration for the form.</td></tr><tr><td><code dir="auto">fields</code></td><td><code dir="auto">Array&lt;WMLFieldZeroProps&gt;</code></td><td>List of fields in the form.</td></tr><tr><td><code dir="auto">fieldSections</code></td><td><code dir="auto">Array&lt;number&gt;</code></td><td>Array defining the layout sections of the fields.</td></tr><tr><td><code dir="auto">fieldsUpdatedEvent</code></td><td><code dir="auto">Subject&lt;void&gt;</code></td><td>Event emitted when fields are updated.</td></tr><tr><td><code dir="auto">resetFieldSections</code></td><td><code dir="auto">() =&gt; void</code></td><td>Method to reset field sections.</td></tr><tr><td><code dir="auto">updateFields</code></td><td><code dir="auto">(fields: Array&lt;WMLFieldZeroProps&gt;) =&gt; void</code></td><td>Method to update fields.</td></tr></tbody></table>


<p>This structured and organized documentation provides a clear and comprehensive guide for developers to understand and use the <code dir="auto">WMLFormZero</code> component effectively.</p>
<h2 id="changelog">Changelog</h2>
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
</ul> </div> <footer class="sl-flex astro-3yyafb3n"> <div class="meta sl-flex astro-3yyafb3n">   </div> <div class="pagination-links astro-u2l5gyhi" dir="ltr"> <a href="/Windmillcode-Angular-CDK-Docs/components/wml-file-manager/" rel="prev" class="astro-u2l5gyhi"> <svg aria-hidden="true" class="astro-u2l5gyhi astro-c6vsoqas" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1.5rem;"><path d="M17 11H9.41l3.3-3.29a1.004 1.004 0 1 0-1.42-1.42l-5 5a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l5 5a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095L9.41 13H17a1 1 0 0 0 0-2Z"></path></svg>  <span class="astro-u2l5gyhi"> Previous <br class="astro-u2l5gyhi"/> <span class="link-title astro-u2l5gyhi">WML File Manager</span> </span> </a> <a href="/Windmillcode-Angular-CDK-Docs/components/wml-infinite-dropdown/" rel="next" class="astro-u2l5gyhi"> <svg aria-hidden="true" class="astro-u2l5gyhi astro-c6vsoqas" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="--sl-icon-size: 1.5rem;"><path d="M17.92 11.62a1.001 1.001 0 0 0-.21-.33l-5-5a1.003 1.003 0 1 0-1.42 1.42l3.3 3.29H7a1 1 0 0 0 0 2h7.59l-3.3 3.29a1.002 1.002 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l5-5a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76Z"></path></svg>  <span class="astro-u2l5gyhi"> Next <br class="astro-u2l5gyhi"/> <span class="link-title astro-u2l5gyhi">WML Infinite Dropdown</span> </span> </a> </div>   </footer>  </div> </div>   