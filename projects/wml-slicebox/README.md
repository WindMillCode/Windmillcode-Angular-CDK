# WML Slicebox (3D)

[starlightViewModes.switchTo](/Windmillcode-Angular-CDK-Docs/zen-mode/19.0.0/angular-components/wml-slicebox)function h(){const t=window.location.hash;document.querySelectorAll(".starlight-view-modes-switcher-a").forEach(e=>{e.href&&(e.href=e.href.split("#")[0]+t)})}h();window.addEventListener("hashchange",h);The Angular WML Slicebox library is an Angular-based library designed to enhance the visual interactivity of web applications by introducing a 3D slicebox carousel component. This library provides a sophisticated and engaging way to display images or content in a carousel format, with a 3D rotation effect that adds depth and dynamism to the user experience. Aimed at integrating seamlessly with Angular applications, Angular WML Slicebox offers a set of configurable options to tailor the carousel’s behavior and appearance, making it a versatile tool for developers looking to enhance their UI with 3D interactive elements.

At the heart of the Angular WML Slicebox library is the <code dir="auto">WMLSliceboxZeroComponent</code> , which serves as the central component orchestrating the 3D slicebox carousel’s functionality. This component manages the carousel’s state, handles user interactions, and renders the 3D slices that comprise the carousel’s visual structure. Developers can customize the carousel through a variety of parameters, such as orientation, rotation speed, and disperse factor, allowing for a high degree of control over the carousel’s behavior and appearance. Additionally, the library provides mechanisms for dynamically loading content into the carousel and responding to user interactions, making it a flexible solution for presenting content in an engaging and interactive format. The component’s design encourages modularity and reusability, adhering to Angular’s component-based architecture, and offering developers a straightforward way to incorporate 3D carousel functionality into their applications.



## Installation

[Section titled “Installation”](#installation)Terminal window <code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3B61B0">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">-s</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">--verbose</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">@windmillcode/wml-slicebox</span></div></div></code> 

## Usage <code dir="auto">WMLSliceboxZeroModule</code> 

[Section titled “Usage WMLSliceboxZeroModule”](#usage-wmlsliceboxzeromodule)

### Getting Started

[Section titled “Getting Started”](#getting-started)<iframe src="https://stackblitz.com/edit/stackblitz-starters-st7qkj?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### [Full Example](#full-example)

[Section titled “Full Example”](#full-example)<iframe src="https://stackblitz.com/edit/stackblitz-starters-qkcg3q?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

## Reference

[Section titled “Reference”](#reference)

###  <code dir="auto">WMLSliceboxZeroProps</code> Configurations

[Section titled “WMLSliceboxZeroProps Configurations”](#wmlsliceboxzeroprops-configurations)<table><thead><tr><th>Name</th><th>Type</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td>autoplay</td><td>boolean</td><td>Whether the carousel should continue or not</td><td><code dir="auto">true</code></td></tr><tr><td>colorHiddenSides</td><td>hex value, rgba, hsla</td><td>Color of the sides of the cuboid where the image is not shown</td><td>’#222’</td></tr><tr><td>cuboidsCount</td><td>number</td><td>The number of cuboids to be used in the slicebox</td><td>9</td></tr><tr><td>disperseFactor</td><td>number</td><td>How far away in pixels should the cuboids coordinate to move away from the center</td><td>40</td></tr><tr><td>disperseSpeed</td><td>number</td><td>Time in ms of how fast the cuboids coordinate to move away from the center</td><td>4000</td></tr><tr><td>easing</td><td>css animation easing types</td><td>The animation type</td><td>’ease-out’</td></tr><tr><td>images</td><td>WMLSliceboxZeroImg[]</td><td>An array of images to provide to the slicebox</td><td>[]</td></tr><tr><td>interval</td><td>number</td><td>Milliseconds before the carousel navigates if autoplay is true</td><td>3000</td></tr><tr><td>jumpToSlideSubj</td><td>subject</td><td>Not to be edited; used to indicate to the slicebox to jump to a specific slide when autoplay is false</td><td>-</td></tr><tr><td>moveToNextSlideSubj</td><td>subject</td><td>Not to be edited; used to indicate to the slicebox to move to the next slide when autoplay is false</td><td>-</td></tr><tr><td>moveToPrevSlideSubj</td><td>subject</td><td>Not to be edited; used to indicate to the slicebox to move to the previous slide when autoplay is false</td><td>-</td></tr><tr><td>nextRotationDegree</td><td>css degree string</td><td>When provided, overrides the default rotation to have the next slides rotate according to your desires</td><td><code dir="auto">&#39;-90deg&#39;</code> if <code dir="auto">reverse</code> is <code dir="auto">true</code>, else <code dir="auto">&#39;90deg&#39;</code></td></tr><tr><td>orientation</td><td>’v&#39;</td><td>&#39;h’</td><td>Whether to rotate vertically or horizontally</td></tr><tr><td>perspective</td><td>px value</td><td>Same as perspective definition in graphic design</td><td>10000</td></tr><tr><td>prevRotationDegree</td><td>css degree string</td><td>When provided, overrides the default rotation to have the next slides rotate according to your desires</td><td>Opposite of <code dir="auto">nextRotationDegree</code></td></tr><tr><td>resizeDelay</td><td>number</td><td>Amount of time to debounce before the carousel resizes itself</td><td>10</td></tr><tr><td>reverse</td><td>boolean</td><td>Whether to reverse the default rotation overwritten of nextRotationDegree is set</td><td><code dir="auto">false</code></td></tr><tr><td>sequentialFactor</td><td>number</td><td>Time in ms before each cuboid consecutively rotates</td><td>350</td></tr><tr><td>sliceboxSizeUseProvidedValues</td><td>boolean</td><td>Whether to resize to fill the parent element or use specified height and width of the slicebox</td><td><code dir="auto">false</code></td></tr><tr><td>speed</td><td>number</td><td>How fast each cuboid is supposed to rotate</td><td>15660</td></tr></tbody></table>

Feel free to explore and use these configurations and methods to create a highly interactive and visually appealing carousel for your Angular applications!



## Changelog

[Section titled “Changelog”](#changelog)

### v0.0.1

[Section titled “v0.0.1”](#v001)wml-select complete and readydisabled supportdefault value supportupdate component supportupdate via formcontrol support

### v0.0.2

[Section titled “v0.0.2”](#v002)added WMLSelectZeroProps.updateOptionValuesWithOptionText so that if users wanted text and value they can usemade a minor change that will allow defaulr fields to populate under certain circumstances

### v16.2.60

[Section titled “v16.2.60”](#v16260)updated dependencies

### v16.2.80

[Section titled “v16.2.80”](#v16280)updated package to reflect the version  16.2.80 of @angular/core package),

### v16.2.80

[Section titled “v16.2.80”](#v16280-1)updated package to reflect the version  16.2.80 of @angular/core package,

### v16.2.90

[Section titled “v16.2.90”](#v16290)updated package to reflect the version  16.2.90 of @angular/core package,

### v16.2.91

[Section titled “v16.2.91”](#v16291)updated package to reflect the version  16.2.91 of @angular/core package,

### v16.2.93

[Section titled “v16.2.93”](#v16293)updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,

### v16.2.100

[Section titled “v16.2.100”](#v162100)updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,

### v16.2.110

[Section titled “v16.2.110”](#v162110)updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,

### v16.2.120

[Section titled “v16.2.120”](#v162120)updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,

### v17.0.10

[Section titled “v17.0.10”](#v17010)updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,

### v17.0.11

[Section titled “v17.0.11”](#v17011)updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,

### v17.0.20

[Section titled “v17.0.20”](#v17020)updated package to reflect the version  ^17.0.2 of @angular/core package,

### v17.0.40

[Section titled “v17.0.40”](#v17040)updated package to reflect the version  ^17.0.4 of @angular/core package,

### v17.0.50

[Section titled “v17.0.50”](#v17050)updated package to reflect the version  ^17.0.5 of @angular/core package,

### v17.0.60

[Section titled “v17.0.60”](#v17060)updated package to reflect the version  ^17.0.6 of @angular/core package,

### v17.0.70

[Section titled “v17.0.70”](#v17070)updated package to reflect the version  ^17.0.7 of @angular/core package,

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

[Section titled “v18.0.2000 [6/6/24]”](#v1802000-6624)updated package to reflect the version  ^18.0.2 of @angular/core package,

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

[Section titled “v18.1.3000-beta4 [8/1/24]”](#v1813000-beta4-8124)updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3001

[Section titled “v18.1.3001”](#v1813001)[BREAKING CHANGES] changed from wml-slicebox to wml-slicebox-zero and replaced all Params with Props



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

[Section titled “v19.0.1000 [11/26/24]”](#v1901000-112624)updated package to conform with @windmillcode/wml-components-base[Previous
WML Select](/Windmillcode-Angular-CDK-Docs/19.0.0/angular-components/wml-select/)[Next
WML Table (Beta Unstable Unmaintainable)](/Windmillcode-Angular-CDK-Docs/19.0.0/angular-components/wml-table/)