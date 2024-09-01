# WML Options

The <code dir="auto">wml-options</code> library is an Angular-based toolkit designed to enhance the selection and management of options within applications. Its primary objective is to provide a streamlined and efficient way for developers to integrate and manage multiple choice selections, toggles, and option-related actions in their Angular projects. The library offers a set of components and services that enable the display and interaction with various types of options, supporting both default and custom components for dynamic and interactive content.

Key features of the <code dir="auto">wml-options</code> library include:

Customizable option items with dynamic content.Support for reactive forms, allowing easy integration with Angular’s form system.Ability to handle a large number of options efficiently.Customizable appearance through CSS and SCSS.Modular and flexible design, facilitating independent or combined usage of components.

## Installation

Terminal window <code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--verbose</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">@windmillcode/angular-wml-options</span></div></div></code> 

## Usage



### WMLOptionsZero



### Getting Started

<iframe src="https://stackblitz.com/edit/stackblitz-starters-m7vxw9?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Displaying a List of Options

<iframe src="https://stackblitz.com/edit/stackblitz-starters-by1fgm?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Custom Option Content

<iframe src="https://stackblitz.com/edit/stackblitz-starters-ikexg4?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Handling Option Selection

<iframe src="https://stackblitz.com/edit/stackblitz-starters-eegmbl?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Default Values

**IMPORTANT  WMLOptionZeroItemProps.isChosen is the only way to set default values on options!!!**

<iframe src="https://stackblitz.com/edit/stackblitz-starters-p1vhz5?ctl=1&embed=1file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

## Reference



###  <code dir="auto">WMLOptionsZeroProps</code> Properties

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">hasBeenInitalized</code></td><td><code dir="auto">boolean</code></td><td>Indicates if the component has been initialized.</td></tr><tr><td><code dir="auto">chosen</code></td><td><code dir="auto">WMLOptionsZeroProps[&#34;options&#34;][]</code></td><td>The list of chosen options.</td></tr><tr><td><code dir="auto">options</code></td><td><code dir="auto">WMLOptionZeroItemProps[]</code></td><td>The list of available options.</td></tr><tr><td><code dir="auto">limit</code></td><td><code dir="auto">number</code></td><td>Maximum number of selectable options.</td></tr><tr><td><code dir="auto">wmlField</code></td><td><code dir="auto">WMLFieldZeroProps</code></td><td>The associated WML field for reactive form integration.</td></tr><tr><td><code dir="auto">formArray</code></td><td><code dir="auto">FormArray</code></td><td>The form array for managing selected options.</td></tr><tr><td><code dir="auto">listenForClearedFormIsEnabled</code></td><td><code dir="auto">boolean</code></td><td>Enables listening for form clear events.</td></tr><tr><td><code dir="auto">updateFormArrayPredicate</code></td><td><code dir="auto">(val: any) =&gt; any</code></td><td>Predicate function to update the form array.</td></tr><tr><td><code dir="auto">restoreInitalValuesInFormArray</code></td><td><code dir="auto">() =&gt; void</code></td><td>Function to restore initial values in the form array.</td></tr></tbody></table>



###  <code dir="auto">WMLOptionZeroItemProps</code> Properties

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">isChosen</code></td><td><code dir="auto">boolean</code></td><td>Indicates if the option is chosen.</td></tr><tr><td><code dir="auto">text</code></td><td><code dir="auto">string</code></td><td>The display text for the option.</td></tr><tr><td><code dir="auto">toggleClass</code></td><td><code dir="auto">string</code></td><td>CSS class to toggle for the option.</td></tr><tr><td><code dir="auto">clickPredicate</code></td><td><code dir="auto">Function</code></td><td>Predicate function to handle option click events.</td></tr><tr><td><code dir="auto">wmlOptions</code></td><td><code dir="auto">WMLOptionsZeroProps</code></td><td>The parent options configuration.</td></tr><tr><td><code dir="auto">customCpnt</code></td><td><code dir="auto">WMLCustomComponent</code></td><td>Custom component for the option content.</td></tr></tbody></table>



###  <code dir="auto">WMLOptionsZeroComponent</code> Methods

<table><thead><tr><th>Method</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">listenForClearedForm</code></td><td>None</td><td>Listens for form clear events and updates option states.</td></tr><tr><td><code dir="auto">populateFields</code></td><td><code dir="auto">init: boolean</code></td><td>Populates fields based on the selected options.</td></tr><tr><td><code dir="auto">updateFormArray</code></td><td>None</td><td>Updates the form array with the selected options.</td></tr><tr><td><code dir="auto">toggleChosen</code></td><td><code dir="auto">btn: WMLOptionZeroItemProps, init: boolean</code></td><td>Toggles the chosen state of an option.</td></tr><tr><td><code dir="auto">ngAfterViewInit</code></td><td>None</td><td>Lifecycle hook for after view initialization.</td></tr><tr><td><code dir="auto">ngOnDestroy</code></td><td>None</td><td>Lifecycle hook for component destruction.</td></tr></tbody></table>



## Changelog



### v18.1.3000-beta1 [8/1/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.1.3000-beta2 [8/1/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.1.3000-beta3 [8/1/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.1.3000-beta4 [8/1/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3000

fixed a bug with default options

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

updated package to reflect the version  18.2.2 of @angular/core package[Previous
WML Notify](/Windmillcode-Angular-CDK-Docs/components/wml-notify/)[Next
WML Panel](/Windmillcode-Angular-CDK-Docs/components/wml-panel/)