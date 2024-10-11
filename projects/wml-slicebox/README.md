# WML Slicebox (3D)

The Angular WML Slicebox library is an Angular-based library designed to enhance the visual interactivity of web applications by introducing a 3D slicebox carousel component. This library provides a sophisticated and engaging way to display images or content in a carousel format, with a 3D rotation effect that adds depth and dynamism to the user experience. Aimed at integrating seamlessly with Angular applications, Angular WML Slicebox offers a set of configurable options to tailor the carousel’s behavior and appearance, making it a versatile tool for developers looking to enhance their UI with 3D interactive elements.

At the heart of the Angular WML Slicebox library is the <code dir="auto">WMLSliceboxZeroComponent</code> , which serves as the central component orchestrating the 3D slicebox carousel’s functionality. This component manages the carousel’s state, handles user interactions, and renders the 3D slices that comprise the carousel’s visual structure. Developers can customize the carousel through a variety of parameters, such as orientation, rotation speed, and disperse factor, allowing for a high degree of control over the carousel’s behavior and appearance. Additionally, the library provides mechanisms for dynamically loading content into the carousel and responding to user interactions, making it a flexible solution for presenting content in an engaging and interactive format. The component’s design encourages modularity and reusability, adhering to Angular’s component-based architecture, and offering developers a straightforward way to incorporate 3D carousel functionality into their applications.



## Installation

Terminal window <code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">-s</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--verbose</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">@windmillcode/wml-slicebox</span></div></div></code> 

## Usage <code dir="auto">WMLSliceboxZeroModule</code> 



### Getting Started

<iframe src="https://stackblitz.com/edit/stackblitz-starters-st7qkj?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### [Full Example](#full-example)

<iframe src="https://stackblitz.com/edit/stackblitz-starters-qkcg3q?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

## Reference



###  <code dir="auto">WMLSliceboxZeroProps</code> Configurations

<table><thead><tr><th>Name</th><th>Type</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td>autoplay</td><td>boolean</td><td>Whether the carousel should continue or not</td><td><code dir="auto">true</code></td></tr><tr><td>colorHiddenSides</td><td>hex value, rgba, hsla</td><td>Color of the sides of the cuboid where the image is not shown</td><td>’#222’</td></tr><tr><td>cuboidsCount</td><td>number</td><td>The number of cuboids to be used in the slicebox</td><td>9</td></tr><tr><td>disperseFactor</td><td>number</td><td>How far away in pixels should the cuboids coordinate to move away from the center</td><td>40</td></tr><tr><td>disperseSpeed</td><td>number</td><td>Time in ms of how fast the cuboids coordinate to move away from the center</td><td>4000</td></tr><tr><td>easing</td><td>css animation easing types</td><td>The animation type</td><td>’ease-out’</td></tr><tr><td>images</td><td>WMLSliceboxZeroImg[]</td><td>An array of images to provide to the slicebox</td><td>[]</td></tr><tr><td>interval</td><td>number</td><td>Milliseconds before the carousel navigates if autoplay is true</td><td>3000</td></tr><tr><td>jumpToSlideSubj</td><td>subject</td><td>Not to be edited; used to indicate to the slicebox to jump to a specific slide when autoplay is false</td><td>-</td></tr><tr><td>moveToNextSlideSubj</td><td>subject</td><td>Not to be edited; used to indicate to the slicebox to move to the next slide when autoplay is false</td><td>-</td></tr><tr><td>moveToPrevSlideSubj</td><td>subject</td><td>Not to be edited; used to indicate to the slicebox to move to the previous slide when autoplay is false</td><td>-</td></tr><tr><td>nextRotationDegree</td><td>css degree string</td><td>When provided, overrides the default rotation to have the next slides rotate according to your desires</td><td><code dir="auto">&#39;-90deg&#39;</code> if <code dir="auto">reverse</code> is <code dir="auto">true</code>, else <code dir="auto">&#39;90deg&#39;</code></td></tr><tr><td>orientation</td><td>’v’ | ‘h’</td><td>Whether to rotate vertically or horizontally</td><td>’v’</td></tr><tr><td>perspective</td><td>px value</td><td>Same as perspective definition in graphic design</td><td>10000</td></tr><tr><td>prevRotationDegree</td><td>css degree string</td><td>When provided, overrides the default rotation to have the next slides rotate according to your desires</td><td>Opposite of <code dir="auto">nextRotationDegree</code></td></tr><tr><td>resizeDelay</td><td>number</td><td>Amount of time to debounce before the carousel resizes itself</td><td>10</td></tr><tr><td>reverse</td><td>boolean</td><td>Whether to reverse the default rotation overwritten of nextRotationDegree is set</td><td><code dir="auto">false</code></td></tr><tr><td>sequentialFactor</td><td>number</td><td>Time in ms before each cuboid consecutively rotates</td><td>350</td></tr><tr><td>sliceboxSizeUseProvidedValues</td><td>boolean</td><td>Whether to resize to fill the parent element or use specified height and width of the slicebox</td><td><code dir="auto">false</code></td></tr><tr><td>speed</td><td>number</td><td>How fast each cuboid is supposed to rotate</td><td>15660</td></tr></tbody></table>

Feel free to explore and use these configurations and methods to create a highly interactive and visually appealing carousel for your Angular applications!



## Changelog



### v0.0.1

wml-select complete and readydisabled supportdefault value supportupdate component supportupdate via formcontrol support

### v0.0.2

added WMLSelectZeroProps.updateOptionValuesWithOptionText so that if users wanted text and value they can usemade a minor change that will allow defaulr fields to populate under certain circumstances

### v16.2.60

updated dependencies

### v16.2.80

updated package to reflect the version  16.2.80 of @angular/core package),

### v16.2.80

updated package to reflect the version  16.2.80 of @angular/core package,

### v16.2.90

updated package to reflect the version  16.2.90 of @angular/core package,

### v16.2.91

updated package to reflect the version  16.2.91 of @angular/core package,

### v16.2.93

updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,

### v16.2.100

updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,

### v16.2.110

updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,

### v16.2.120

updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,

### v17.0.10

updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,

### v17.0.11

updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,

### v17.0.20

updated package to reflect the version  ^17.0.2 of @angular/core package,

### v17.0.40

updated package to reflect the version  ^17.0.4 of @angular/core package,

### v17.0.50

updated package to reflect the version  ^17.0.5 of @angular/core package,

### v17.0.60

updated package to reflect the version  ^17.0.6 of @angular/core package,

### v17.0.70

updated package to reflect the version  ^17.0.7 of @angular/core package,

### v17.0.7100

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.0.7200

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.0.7300

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.0.80

updated package to reflect the version  ^17.0.8 of @angular/core package,

### v17.0.8100

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.0.8102

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.0.8103

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.0.9000

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.0.9001

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.1.0000

updated package to reflect the version  ^17.1.0 of @angular/core package,

### v17.1.2

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.1.1000

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.1.2000 [2/5/24]

updated package to reflect the version  ^17.1.2 of @angular/core package,

### v17.1.2001 [2/8/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.1.3000 [2/8/24]

updated package to reflect the version  ^17.1.3 of @angular/core package,

### v17.2.1000 [2/17/24]

updated package to reflect the version  ^17.2.1 of @angular/core package,

### v17.2.2001 [2/23/24]

updated package to reflect the version  ^17.2.2 of @angular/core package,

### v17.2.3000 [2/28/24]

updated package to reflect the version  ^17.2.3 of @angular/core package,

### v17.2.3001 [3/2/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.2.3002 [3/5/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.2.4000 [3/8/24]

updated package to reflect the version  ^17.2.4 of @angular/core package,

### v17.2.4001 [3/12/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.2.4002 [3/12/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.2.4003 [3/13/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.2.4004 [3/13/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.3.0 [3/17/24]

updated package to reflect the version  ^17.3.0 of @angular/core package
,

### v17.3.1000 [3/22/24]

updated package to reflect the version  ^17.3.1 of @angular/core package,

### v17.3.2000 [3/28/24]

updated package to reflect the version  ^17.3.2 of @angular/core package,

### v17.3.3000 [4/4/24]

updated package to reflect the version  ^17.3.3 of @angular/core package,

### v17.3.4000 [4/11/24]

updated package to reflect the version  ^17.3.4 of @angular/core package,

### v17.3.4001 [4/16/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.3.5000 [4/20/24]

updated package to reflect the version  ^17.3.5 of @angular/core package,

### v17.3.5110 [5/1/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.3.6000 [5/1/24]

updated package to reflect the version  ^17.3.6 of @angular/core package,

### v17.3.7000 [5/9/24]

updated package to reflect the version  ^17.3.7 of @angular/core package,

### v17.3.8000 [5/9/24]

updated package to reflect the version  ^17.3.8 of @angular/core package,

### v17.3.9000 [5/16/24]

updated package to reflect the version  ^17.3.9 of @angular/core package,

### v18.0.1 [5/23/24]

updated package to reflect the version  ^18.0.0 of @angular/core package,

### v18.0.4 [5/25/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.0.1000 [5/29/24]

updated package to reflect the version  ^18.0.1 of @angular/core package,

### v18.0.2000 [6/6/24]

updated package to reflect the version  ^18.0.2 of @angular/core package,

### v18.0.3000 [6/13/24]

updated package to reflect the version  ^18.0.3 of @angular/core package,

### v18.0.3010 [6/18/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.0.4000 [6/23/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.0.5000 [6/26/24]

updated package to reflect the version  ^18.0.5 of @angular/core package,

### v18.0.6000 [7/5/24]

updated package to reflect the version  ^18.0.6 of @angular/core package,

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

updated package to conform with @windmillcode/angular-wml-components-base
,

### v18.1.3000-beta3 [8/1/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.1.3000-beta4 [8/1/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3001

[BREAKING CHANGES] changed from wml-slicebox to wml-slicebox-zero and replaced all Params with Props



### v18.1.3002 [8/4/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3001 [8/4/24]

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

updated package to conform with @windmillcode/angular-wml-components-base

### v18.2.3112 [9/10/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.2.3200 [9/16/24]

updated package to conform with @windmillcode/wml-components-base

### v18.2.4000 [9/16/24]

updated package to reflect the version  18.2.4 of @angular/core package

### v18.2.4100 [9/19/24]

updated package to conform with @windmillcode/wml-components-base

### v18.2.4200 [9/21/24]

updated package to conform with @windmillcode/wml-components-base

### v18.2.5001 [9/22/24]

updated package to reflect the version  18.2.5 of @angular/core package

### v18.2.6000 [10/1/24]

updated package to reflect the version  18.2.6 of @angular/core package

### v18.2.7000 [10/2/24]

updated package to reflect the version  18.2.7 of @angular/core package

### v18.2.7001 [10/6/24]

updated package to conform with @windmillcode/wml-components-base

### v18.2.7010 [10/9/24]

updated package to conform with @windmillcode/wml-components-base

### v18.2.7020 [10/10/24]

updated package to conform with @windmillcode/wml-components-base

### v18.2.8000 [10/10/24]

updated package to reflect the version  18.2.8 of @angular/core package[](/Windmillcode-Angular-CDK-Docs/angular-components/wml-select/)[](/Windmillcode-Angular-CDK-Docs/angular-components/wml-table/)