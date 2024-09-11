# WML Form

The Angular WML Form Libary is a versatile and customizable library designed to streamline form creation and management in Angular applications. This component offers the following features:

**Dynamic Field Management**: Easily manage and update fields dynamically using the <code dir="auto">updateFields</code> and <code dir="auto">updateFieldsWrapper</code> methods.**Flexible Layouts**: Define field sections to organize and layout fields in a structured manner.**Responsive Design**: Ensures forms look great on various screen sizes with built-in media queries.**Custom Styling**: Supports custom styles including glassmorphism effects for a modern UI.**Input Handling**: Handles various types of inputs including standalone fields and WML cards.**Event Handling**: Emits events when fields are updated, allowing for reactive and interactive forms.

## Installation

Terminal window<code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--verbose</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">@windmillcode/angular-wml-form</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#616671"># to populate the field, submit form</span></div></div><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--verbose</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">@windmillcode/angular-wml-field</span></div></div><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--verbose</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">@windmillcode/angular-wml-input</span></div></div><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--verbose</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">@windmillcode/angular-wml-button</span></div></div></code>



## Usage



### WMLFormZero



### Basic Form Setup

<iframe src="https://stackblitz.com/edit/stackblitz-starters-fgsk2e?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### [Form Submission](#form-submission)

the FormGroup is applied at the field level not the form level so essentiallly you do not need wml-form-zero to create your custom formto see how this complex form works if you type in abc in the name field then the email field is required however if the name field is not abc then you can empty the email field and submit the form. WMLForm is very impervious<iframe src="https://stackblitz.com/edit/stackblitz-starters-4zvh8e?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### [Dynamic Field Update](#dynamic-field-update)

it replaces so you need the orginal field in case of adding fields<iframe src="https://stackblitz.com/edit/stackblitz-starters-wgiqyj?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Field Sections

using field sections helps style the layout of the formAll you have to do is to apply display flex to the target form<iframe src="https://stackblitz.com/edit/stackblitz-starters-24xsgt?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

## Reference



### WMLFormZeroComponent Properties

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">props</code></td><td><code dir="auto">WMLFormZeroProps</code></td><td>The main properties object for configuring the form.</td></tr></tbody></table>



### WMLFormZeroProps Properties

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">view</code></td><td><code dir="auto">WMLView</code></td><td>View configuration for the form.</td></tr><tr><td><code dir="auto">fields</code></td><td><code dir="auto">Array&lt;WMLFieldZeroProps&gt;</code></td><td>List of fields in the form.</td></tr><tr><td><code dir="auto">fieldSections</code></td><td><code dir="auto">Array&lt;number&gt;</code></td><td>Array defining the layout sections of the fields.</td></tr><tr><td><code dir="auto">fieldsUpdatedEvent</code></td><td><code dir="auto">Subject&lt;void&gt;</code></td><td>Event emitted when fields are updated.</td></tr><tr><td><code dir="auto">resetFieldSections</code></td><td><code dir="auto">() =&gt; void</code></td><td>Method to reset field sections.</td></tr><tr><td><code dir="auto">updateFields</code></td><td><code dir="auto">(fields: Array&lt;WMLFieldZeroProps&gt;) =&gt; void</code></td><td>Method to update fields.</td></tr></tbody></table>

This structured and organized documentation provides a clear and comprehensive guide for developers to understand and use the <code dir="auto">WMLFormZero</code> component effectively.



## Changelog



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

updated package to conform with @windmillcode/angular-wml-components-base[](/Windmillcode-Angular-CDK-Docs/components/wml-file-manager/)[](/Windmillcode-Angular-CDK-Docs/components/wml-infinite-dropdown/)