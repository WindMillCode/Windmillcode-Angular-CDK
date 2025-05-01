# WML Toggle

[starlightViewModes.switchTo](/Windmillcode-Angular-CDK-Docs/zen-mode/19.0.0/angular-components/wml-toggle)function h(){const t=window.location.hash;document.querySelectorAll(".starlight-view-modes-switcher-a").forEach(e=>{e.href&&(e.href=e.href.split("#")[0]+t)})}h();window.addEventListener("hashchange",h);The Angular WML Toggle library offers a customizable toggle switch component for Angular applications. This library provides an easy-to-integrate toggle switch that enhances user interfaces by allowing binary choices such as settings or preferences. The core component, <code dir="auto">WMLToggleZeroComponent</code> , is designed to be flexible and modular, enabling developers to tailor its appearance and behavior to fit their application’s requirements. Features include:

Customizable Appearance: Modify the toggle’s background colors, text, and styles.Event Handling: Define actions on toggle state changes.Integration with Forms: Supports reactive forms and updates based on form control status.Responsive Design: Adapts to different screen sizes for a consistent user experience.

## Installation

[Section titled “Installation”](#installation)To install the WML Toggle library, use the following command:

Terminal window <code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3B61B0">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">-s</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">--verbose</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">@windmillcode/angular-wml-toggle</span></div></div></code> 

## Usage

[Section titled “Usage”](#usage)Here are some possible examples of how to use the <code dir="auto">WMLToggleZeroComponent</code> in your Angular application:



### Getting Started

[Section titled “Getting Started”](#getting-started)you can sure to use onToggle to “listen for changes” how neat<iframe src="https://stackblitz.com/edit/stackblitz-starters-cmgmdk?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Programtic Toggle

[Section titled “Programtic Toggle”](#programtic-toggle)<iframe src="https://stackblitz.com/edit/stackblitz-starters-khfnfw?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Reactive Forms

[Section titled “Reactive Forms”](#reactive-forms)<iframe src="https://stackblitz.com/edit/stackblitz-starters-fk265u?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

## Reference

[Section titled “Reference”](#reference)

### WMLToggleZeroProps

[Section titled “WMLToggleZeroProps”](#wmltogglezeroprops)<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">id</code></td><td><code dir="auto">string</code></td><td>Identifier for the toggle instance.</td></tr><tr><td><code dir="auto">container</code></td><td><code dir="auto">WMLUIProperty</code></td><td>Configuration for the toggle container.</td></tr><tr><td><code dir="auto">thumb</code></td><td><code dir="auto">WMLUIProperty</code></td><td>Configuration for the toggle thumb.</td></tr><tr><td><code dir="auto">toggleText</code></td><td><code dir="auto">WMLUIProperty</code></td><td>Configuration for the toggle text.</td></tr><tr><td><code dir="auto">textToggleLeftMargin</code></td><td><code dir="auto">number</code></td><td>Left margin for the toggle text.</td></tr><tr><td><code dir="auto">toggleBackgroundOnColor</code></td><td><code dir="auto">string</code></td><td>Background color when the toggle is “On”.</td></tr><tr><td><code dir="auto">toggleBackgroundOffColor</code></td><td><code dir="auto">string</code></td><td>Background color when the toggle is “Off”.</td></tr><tr><td><code dir="auto">triggerToggle</code></td><td><code dir="auto">Function</code></td><td>Function to programmatically trigger the toggle.</td></tr><tr><td><code dir="auto">wmlField</code></td><td><code dir="auto">WMLFieldZeroProps</code></td><td>Integration with WML Field component.</td></tr><tr><td><code dir="auto">onToggle</code></td><td><code dir="auto">(self: WMLToggleZeroProps) =&gt; void</code></td><td>Callback function triggered on toggle state change.</td></tr></tbody></table>



## Changelog

[Section titled “Changelog”](#changelog)

### v17.0.0

[Section titled “v17.0.0”](#v1700)component created and ready for production use

### v17.0.30

[Section titled “v17.0.30”](#v17030)added triggerToggle
,

### v17.0.40

[Section titled “v17.0.40”](#v17040)updated package to reflect the version  ^17.0.4 of @angular/core package,

### v17.0.50

[Section titled “v17.0.50”](#v17050)updated package to reflect the version  ^17.0.5 of @angular/core package,

### v17.0.60

[Section titled “v17.0.60”](#v17060)updated package to reflect the version  ^17.0.6 of @angular/core package,

### v17.0.70

[Section titled “v17.0.70”](#v17070)updated package to reflect the version  ^17.0.7 of @angular/core package

### v17.0.71

[Section titled “v17.0.71”](#v17071)added support to be integrated with wml-form so that values can be passed to a form control

### v17.0.72

[Section titled “v17.0.72”](#v17072)fixed code to remove deprecated scss warnings

### v17.0.73

[Section titled “v17.0.73”](#v17073)added listened so when form is edited via patchValue the changes apply

### v17.0.74

[Section titled “v17.0.74”](#v17074)added in disabled featured and corrected error when listenForFormValue changes was triggered till infinity
,

### v17.0.7100

[Section titled “v17.0.7100”](#v1707100)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.0.7200

[Section titled “v17.0.7200”](#v1707200)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.0.7300

[Section titled “v17.0.7300”](#v1707300)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.0.80

[Section titled “v17.0.80”](#v17080)updated package to reflect the version  ^17.0.8 of @angular/core package,

### v17.0.8100

[Section titled “v17.0.8100”](#v1708100)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.0.8102

[Section titled “v17.0.8102”](#v1708102)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.0.8103

[Section titled “v17.0.8103”](#v1708103)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.0.9000

[Section titled “v17.0.9000”](#v1709000)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.0.9001

[Section titled “v17.0.9001”](#v1709001)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.1.0000

[Section titled “v17.1.0000”](#v1710000)updated package to reflect the version  ^17.1.0 of @angular/core package,

### v17.1.2

[Section titled “v17.1.2”](#v1712)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.1.1000

[Section titled “v17.1.1000”](#v1711000)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.1.2000 [2/5/24]

[Section titled “v17.1.2000 [2/5/24]”](#v1712000-2524)updated package to reflect the version  ^17.1.2 of @angular/core package,

### v17.1.2001 [2/8/24]

[Section titled “v17.1.2001 [2/8/24]”](#v1712001-2824)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.1.3000 [2/8/24]

[Section titled “v17.1.3000 [2/8/24]”](#v1713000-2824)updated package to reflect the version  ^17.1.3 of @angular/core package,

### v17.2.1000 [2/17/24]

[Section titled “v17.2.1000 [2/17/24]”](#v1721000-21724)updated package to reflect the version  ^17.2.1 of @angular/core package,

### v17.2.2001 [2/23/24]

[Section titled “v17.2.2001 [2/23/24]”](#v1722001-22324)updated package to reflect the version  ^17.2.2 of @angular/core package,

### v17.2.3000 [2/28/24]

[Section titled “v17.2.3000 [2/28/24]”](#v1723000-22824)updated package to reflect the version  ^17.2.3 of @angular/core package,

### v17.2.3001 [3/2/24]

[Section titled “v17.2.3001 [3/2/24]”](#v1723001-3224)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.2.3002 [3/5/24]

[Section titled “v17.2.3002 [3/5/24]”](#v1723002-3524)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.2.4000 [3/8/24]

[Section titled “v17.2.4000 [3/8/24]”](#v1724000-3824)updated package to reflect the version  ^17.2.4 of @angular/core package,

### v17.2.4001 [3/12/24]

[Section titled “v17.2.4001 [3/12/24]”](#v1724001-31224)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.2.4002 [3/12/24]

[Section titled “v17.2.4002 [3/12/24]”](#v1724002-31224)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.2.4003 [3/13/24]

[Section titled “v17.2.4003 [3/13/24]”](#v1724003-31324)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.2.4004 [3/13/24]

[Section titled “v17.2.4004 [3/13/24]”](#v1724004-31324)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.3.0 [3/17/24]

[Section titled “v17.3.0 [3/17/24]”](#v1730-31724)updated package to reflect the version  ^17.3.0 of @angular/core package
,

### v17.3.1000 [3/22/24]

[Section titled “v17.3.1000 [3/22/24]”](#v1731000-32224)updated package to reflect the version  ^17.3.1 of @angular/core package,

### v17.3.2000 [3/28/24]

[Section titled “v17.3.2000 [3/28/24]”](#v1732000-32824)updated package to reflect the version  ^17.3.2 of @angular/core package,

### v17.3.3000 [4/4/24]

[Section titled “v17.3.3000 [4/4/24]”](#v1733000-4424)updated package to reflect the version  ^17.3.3 of @angular/core package,

### v17.3.4000 [4/11/24]

[Section titled “v17.3.4000 [4/11/24]”](#v1734000-41124)updated package to reflect the version  ^17.3.4 of @angular/core package,

### v17.3.4001 [4/16/24]

[Section titled “v17.3.4001 [4/16/24]”](#v1734001-41624)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.3.5000 [4/20/24]

[Section titled “v17.3.5000 [4/20/24]”](#v1735000-42024)updated package to reflect the version  ^17.3.5 of @angular/core package,

### v17.3.5110 [5/1/24]

[Section titled “v17.3.5110 [5/1/24]”](#v1735110-5124)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.3.6000 [5/1/24]

[Section titled “v17.3.6000 [5/1/24]”](#v1736000-5124)updated package to reflect the version  ^17.3.6 of @angular/core package,

### v17.3.7000 [5/9/24]

[Section titled “v17.3.7000 [5/9/24]”](#v1737000-5924)updated package to reflect the version  ^17.3.7 of @angular/core package,

### v17.3.8000 [5/9/24]

[Section titled “v17.3.8000 [5/9/24]”](#v1738000-5924)updated package to reflect the version  ^17.3.8 of @angular/core package,

### v17.3.9000 [5/16/24]

[Section titled “v17.3.9000 [5/16/24]”](#v1739000-51624)updated package to reflect the version  ^17.3.9 of @angular/core package,

### v18.0.1 [5/23/24]

[Section titled “v18.0.1 [5/23/24]”](#v1801-52324)updated package to reflect the version  ^18.0.0 of @angular/core package,

### v18.0.4 [5/25/24]

[Section titled “v18.0.4 [5/25/24]”](#v1804-52524)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.0.1000 [5/29/24]

[Section titled “v18.0.1000 [5/29/24]”](#v1801000-52924)updated package to reflect the version  ^18.0.1 of @angular/core package,

### v18.0.2000 [6/6/24]

[Section titled “v18.0.2000 [6/6/24]”](#v1802000-6624)updated package to reflect the version  ^18.0.2 of @angular/core package

### v18.0.2002 [6/11/2024 10:21:45 AM EST]

[Section titled “v18.0.2002 [6/11/2024 10:21:45 AM EST]”](#v1802002-6112024-102145-am-est)[FIX]

In wml-toggle-zero.component.html, modified the click event to call toggle with parameters null and true.

Added distinctUntilChanged to listenForformControlChanges in wml-toggle-zero.component.ts to prevent redundant updates.
In wml-toggle-zero.component.ts, adjusted toggle method to conditionally patch form control based on the new updateFormControl parameter.
,



### v18.0.3000 [6/13/24]

[Section titled “v18.0.3000 [6/13/24]”](#v1803000-61324)updated package to reflect the version  ^18.0.3 of @angular/core package,

### v18.0.3010 [6/18/24]

[Section titled “v18.0.3010 [6/18/24]”](#v1803010-61824)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.0.4000 [6/23/24]

[Section titled “v18.0.4000 [6/23/24]”](#v1804000-62324)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.0.5000 [6/26/24]

[Section titled “v18.0.5000 [6/26/24]”](#v1805000-62624)updated package to reflect the version  ^18.0.5 of @angular/core package,

### v18.0.6000 [7/5/24]

[Section titled “v18.0.6000 [7/5/24]”](#v1806000-7524)updated package to reflect the version  ^18.0.6 of @angular/core package,

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

[Section titled “v18.1.2301 [7/30/24]”](#v1812301-73024)updated package to conform with @windmillcode/angular-wml-components-base
,

### v18.1.3000-beta3 [8/1/24]

[Section titled “v18.1.3000-beta3 [8/1/24]”](#v1813000-beta3-8124)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.1.3000-beta4 [8/1/24]

[Section titled “v18.1.3000-beta4 [8/1/24]”](#v1813000-beta4-8124)

### v18.1.3002 [8/4/24]

[Section titled “v18.1.3002 [8/4/24]”](#v1813002-8424)updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3001 [8/4/24]

[Section titled “v18.1.3001 [8/4/24]”](#v1813001-8424)updated package to conform with @windmillcode/angular-wml-components-base

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

### v18.2.3200 [9/16/24]

[Section titled “v18.2.3200 [9/16/24]”](#v1823200-91624)updated package to conform with @windmillcode/wml-components-base

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

### v18.2.7001 [10/6/24]

[Section titled “v18.2.7001 [10/6/24]”](#v1827001-10624)updated package to conform with @windmillcode/wml-components-base

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

[Section titled “v19.0.1000 [11/26/24]”](#v1901000-112624)updated package to conform with @windmillcode/wml-components-base[](/Windmillcode-Angular-CDK-Docs/19.0.0/angular-components/wml-tabs/)