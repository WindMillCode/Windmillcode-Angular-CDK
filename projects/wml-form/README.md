# WML Form

[starlightViewModes.switchTo](/Windmillcode-Angular-CDK-Docs/zen-mode/19.0.0/angular-components/wml-form)function h(){const t=window.location.hash;document.querySelectorAll(".starlight-view-modes-switcher-a").forEach(e=>{e.href&&(e.href=e.href.split("#")[0]+t)})}h();window.addEventListener("hashchange",h);The Angular WML Form Libary is a versatile and customizable library designed to streamline form creation and management in Angular applications. This component offers the following features:

**Dynamic Field Management**: Easily manage and update fields dynamically using the <code dir="auto">updateFields</code> and <code dir="auto">updateFieldsWrapper</code> methods.**Flexible Layouts**: Define field sections to organize and layout fields in a structured manner.**Responsive Design**: Ensures forms look great on various screen sizes with built-in media queries.**Custom Styling**: Supports custom styles including glassmorphism effects for a modern UI.**Input Handling**: Handles various types of inputs including standalone fields and WML cards.**Event Handling**: Emits events when fields are updated, allowing for reactive and interactive forms.

## Installation

[Section titled “Installation”](#installation)Terminal window<code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3B61B0">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">--verbose</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">@windmillcode/angular-wml-form</span></div></div><div class="ec-line"><div class="code"><span style="--0:#919F9F;--1:#5F636F"># to populate the field, submit form</span></div></div><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3B61B0">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">--verbose</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">@windmillcode/angular-wml-field</span></div></div><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3B61B0">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">--verbose</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">@windmillcode/angular-wml-input</span></div></div><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3B61B0">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">--verbose</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">@windmillcode/angular-wml-button</span></div></div></code>



## Usage

[Section titled “Usage”](#usage)

### WMLFormZero

[Section titled “WMLFormZero”](#wmlformzero)

### Basic Form Setup

[Section titled “Basic Form Setup”](#basic-form-setup)<iframe src="https://stackblitz.com/edit/stackblitz-starters-fgsk2e?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### [Form Submission](#form-submission)

[Section titled “Form Submission”](#form-submission)the FormGroup is applied at the field level not the form level so essentiallly you do not need wml-form-zero to create your custom formto see how this complex form works if you type in abc in the name field then the email field is required however if the name field is not abc then you can empty the email field and submit the form. WMLForm is very impervious<iframe src="https://stackblitz.com/edit/stackblitz-starters-4zvh8e?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### [Dynamic Field Update](#dynamic-field-update)

[Section titled “Dynamic Field Update”](#dynamic-field-update)it replaces so you need the orginal field in case of adding fields<iframe src="https://stackblitz.com/edit/stackblitz-starters-wgiqyj?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Field Sections

[Section titled “Field Sections”](#field-sections)using field sections helps style the layout of the formAll you have to do is to apply display flex to the target form<iframe src="https://stackblitz.com/edit/stackblitz-starters-24xsgt?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

## Reference

[Section titled “Reference”](#reference)

### WMLFormZeroComponent Properties

[Section titled “WMLFormZeroComponent Properties”](#wmlformzerocomponent-properties)<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">props</code></td><td><code dir="auto">WMLFormZeroProps</code></td><td>The main properties object for configuring the form.</td></tr></tbody></table>



### WMLFormZeroProps Properties

[Section titled “WMLFormZeroProps Properties”](#wmlformzeroprops-properties)<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">view</code></td><td><code dir="auto">WMLView</code></td><td>View configuration for the form.</td></tr><tr><td><code dir="auto">fields</code></td><td><code dir="auto">Array&lt;WMLFieldZeroProps&gt;</code></td><td>List of fields in the form.</td></tr><tr><td><code dir="auto">fieldSections</code></td><td><code dir="auto">Array&lt;number&gt;</code></td><td>Array defining the layout sections of the fields.</td></tr><tr><td><code dir="auto">fieldsUpdatedEvent</code></td><td><code dir="auto">Subject&lt;void&gt;</code></td><td>Event emitted when fields are updated.</td></tr><tr><td><code dir="auto">resetFieldSections</code></td><td><code dir="auto">() =&gt; void</code></td><td>Method to reset field sections.</td></tr><tr><td><code dir="auto">updateFields</code></td><td><code dir="auto">(fields: Array&lt;WMLFieldZeroProps&gt;) =&gt; void</code></td><td>Method to update fields.</td></tr></tbody></table>

This structured and organized documentation provides a clear and comprehensive guide for developers to understand and use the <code dir="auto">WMLFormZero</code> component effectively.



## Changelog

[Section titled “Changelog”](#changelog)

### v18.1.4 [7/13/24]

[Section titled “v18.1.4 [7/13/24]”](#v1814-71324)updated package to reflect the version  ^18.1.0 of @angular/core package,

### v18.1.6 [7/14/24]

[Section titled “v18.1.6 [7/14/24]”](#v1816-71424)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.1.1000 [7/18/24]

[Section titled “v18.1.1000 [7/18/24]”](#v1811000-71824)updated package to reflect the version  ^18.1.1 of @angular/core package,

### v18.1.2000 [7/24/24]

[Section titled “v18.1.2000 [7/24/24]”](#v1812000-72424)updated package to reflect the version  ^18.1.2 of @angular/core package,

### v18.1.2300 [7/27/24]

[Section titled “v18.1.2300 [7/27/24]”](#v1812300-72724)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.1.2301 [7/30/24]

[Section titled “v18.1.2301 [7/30/24]”](#v1812301-73024)updated package to conform with @windmillcode/angular-wml-components-base   ,

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

[Section titled “v19.0.1000 [11/26/24]”](#v1901000-112624)updated package to conform with @windmillcode/wml-components-base[Previous
WML File Manager](/Windmillcode-Angular-CDK-Docs/19.0.0/angular-components/wml-file-manager/)[Next
WML Infinite Dropdown](/Windmillcode-Angular-CDK-Docs/19.0.0/angular-components/wml-infinite-dropdown/)