# WML Options

[starlightViewModes.switchTo](/Windmillcode-Angular-CDK-Docs/zen-mode/19.0.0/angular-components/wml-options)function h(){const t=window.location.hash;document.querySelectorAll(".starlight-view-modes-switcher-a").forEach(e=>{e.href&&(e.href=e.href.split("#")[0]+t)})}h();window.addEventListener("hashchange",h);The <code dir="auto">wml-options</code> library is an Angular-based toolkit designed to enhance the selection and management of options within applications. Its primary objective is to provide a streamlined and efficient way for developers to integrate and manage multiple choice selections, toggles, and option-related actions in their Angular projects. The library offers a set of components and services that enable the display and interaction with various types of options, supporting both default and custom components for dynamic and interactive content.

Key features of the <code dir="auto">wml-options</code> library include:

Customizable option items with dynamic content.Support for reactive forms, allowing easy integration with Angular’s form system.Ability to handle a large number of options efficiently.Customizable appearance through CSS and SCSS.Modular and flexible design, facilitating independent or combined usage of components.

## Installation

[Section titled “Installation”](#installation)Terminal window <code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3B61B0">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">--verbose</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">@windmillcode/angular-wml-options</span></div></div></code> 

## Usage

[Section titled “Usage”](#usage)

### WMLOptionsZero

[Section titled “WMLOptionsZero”](#wmloptionszero)

### Getting Started

[Section titled “Getting Started”](#getting-started)<iframe src="https://stackblitz.com/edit/stackblitz-starters-m7vxw9?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Displaying a List of Options

[Section titled “Displaying a List of Options”](#displaying-a-list-of-options)<iframe src="https://stackblitz.com/edit/stackblitz-starters-by1fgm?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Custom Option Content

[Section titled “Custom Option Content”](#custom-option-content)<iframe src="https://stackblitz.com/edit/stackblitz-starters-ikexg4?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Handling Option Selection

[Section titled “Handling Option Selection”](#handling-option-selection)<iframe src="https://stackblitz.com/edit/stackblitz-starters-eegmbl?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Default Values

[Section titled “Default Values”](#default-values)**IMPORTANT  WMLOptionZeroItemProps.isChosen is the only way to set default values on options!!!**

<iframe src="https://stackblitz.com/edit/stackblitz-starters-p1vhz5?ctl=1&embed=1file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

## Reference

[Section titled “Reference”](#reference)

###  <code dir="auto">WMLOptionsZeroProps</code> Properties

[Section titled “WMLOptionsZeroProps Properties”](#wmloptionszeroprops-properties)<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">hasBeenInitalized</code></td><td><code dir="auto">boolean</code></td><td>Indicates if the component has been initialized.</td></tr><tr><td><code dir="auto">chosen</code></td><td><code dir="auto">WMLOptionsZeroProps[&#34;options&#34;][]</code></td><td>The list of chosen options.</td></tr><tr><td><code dir="auto">options</code></td><td><code dir="auto">WMLOptionZeroItemProps[]</code></td><td>The list of available options.</td></tr><tr><td><code dir="auto">limit</code></td><td><code dir="auto">number</code></td><td>Maximum number of selectable options.</td></tr><tr><td><code dir="auto">wmlField</code></td><td><code dir="auto">WMLFieldZeroProps</code></td><td>The associated WML field for reactive form integration.</td></tr><tr><td><code dir="auto">formArray</code></td><td><code dir="auto">FormArray</code></td><td>The form array for managing selected options.</td></tr><tr><td><code dir="auto">listenForClearedFormIsEnabled</code></td><td><code dir="auto">boolean</code></td><td>Enables listening for form clear events.</td></tr><tr><td><code dir="auto">updateFormArrayPredicate</code></td><td><code dir="auto">(val: any) =&gt; any</code></td><td>Predicate function to update the form array.</td></tr><tr><td><code dir="auto">restoreInitalValuesInFormArray</code></td><td><code dir="auto">() =&gt; void</code></td><td>Function to restore initial values in the form array.</td></tr></tbody></table>



###  <code dir="auto">WMLOptionZeroItemProps</code> Properties

[Section titled “WMLOptionZeroItemProps Properties”](#wmloptionzeroitemprops-properties)<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">isChosen</code></td><td><code dir="auto">boolean</code></td><td>Indicates if the option is chosen.</td></tr><tr><td><code dir="auto">text</code></td><td><code dir="auto">string</code></td><td>The display text for the option.</td></tr><tr><td><code dir="auto">toggleClass</code></td><td><code dir="auto">string</code></td><td>CSS class to toggle for the option.</td></tr><tr><td><code dir="auto">clickPredicate</code></td><td><code dir="auto">Function</code></td><td>Predicate function to handle option click events.</td></tr><tr><td><code dir="auto">wmlOptions</code></td><td><code dir="auto">WMLOptionsZeroProps</code></td><td>The parent options configuration.</td></tr><tr><td><code dir="auto">customCpnt</code></td><td><code dir="auto">WMLCustomComponent</code></td><td>Custom component for the option content.</td></tr></tbody></table>



###  <code dir="auto">WMLOptionsZeroComponent</code> Methods

[Section titled “WMLOptionsZeroComponent Methods”](#wmloptionszerocomponent-methods)<table><thead><tr><th>Method</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">listenForClearedForm</code></td><td>None</td><td>Listens for form clear events and updates option states.</td></tr><tr><td><code dir="auto">populateFields</code></td><td><code dir="auto">init: boolean</code></td><td>Populates fields based on the selected options.</td></tr><tr><td><code dir="auto">updateFormArray</code></td><td>None</td><td>Updates the form array with the selected options.</td></tr><tr><td><code dir="auto">toggleChosen</code></td><td><code dir="auto">btn: WMLOptionZeroItemProps, init: boolean</code></td><td>Toggles the chosen state of an option.</td></tr><tr><td><code dir="auto">ngAfterViewInit</code></td><td>None</td><td>Lifecycle hook for after view initialization.</td></tr><tr><td><code dir="auto">ngOnDestroy</code></td><td>None</td><td>Lifecycle hook for component destruction.</td></tr></tbody></table>



## Changelog

[Section titled “Changelog”](#changelog)

### v18.1.3000-beta1 [8/1/24]

[Section titled “v18.1.3000-beta1 [8/1/24]”](#v1813000-beta1-8124)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.1.3000-beta2 [8/1/24]

[Section titled “v18.1.3000-beta2 [8/1/24]”](#v1813000-beta2-8124)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.1.3000-beta3 [8/1/24]

[Section titled “v18.1.3000-beta3 [8/1/24]”](#v1813000-beta3-8124)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.1.3000-beta4 [8/1/24]

[Section titled “v18.1.3000-beta4 [8/1/24]”](#v1813000-beta4-8124)updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3000

[Section titled “v18.1.3000”](#v1813000)fixed a bug with default options

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

[Section titled “v19.0.1000 [11/26/24]”](#v1901000-112624)updated package to conform with @windmillcode/wml-components-base[](/Windmillcode-Angular-CDK-Docs/19.0.0/angular-components/wml-notify/)[](/Windmillcode-Angular-CDK-Docs/19.0.0/angular-components/wml-panel/)