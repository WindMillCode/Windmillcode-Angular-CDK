# WML Carousel (3D)

[starlightViewModes.switchTo](/Windmillcode-Angular-CDK-Docs/zen-mode/19.0.0/angular-components/wml-carousel)function h(){const t=window.location.hash;document.querySelectorAll(".starlight-view-modes-switcher-a").forEach(e=>{e.href&&(e.href=e.href.split("#")[0]+t)})}h();window.addEventListener("hashchange",h);The library is for carousels of all different types

The <code dir="auto">WMLCarouselOneComponent</code> is an Angular component that provides a customizable 3D carousel experience. It allows developers to create interactive and dynamic carousels with customizable slides and controls. The functionality of the component is in the prop class passed to the component so if you have your own 3d carousel you would like to design all you need to worry about is styling.It is designed to be flexible and extendable, enabling developers to tailor the carousel to their specific needs.

Key features include:

**Customizable Slides**: Each slide can be customized with its own content and styling.**Customizable Controls**: Controls for navigating the carousel can be customized.**Responsive Design**: The carousel adjusts its layout based on the window size.**Dynamic Animation**: Smooth transitions and animations when rotating between slides.

## Installation

[Section titled “Installation”](#installation)Terminal window <code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3B61B0">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">-s</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">--verbose</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">@windmillcode/wml-carousel</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">@windmillcode/wml-components-base</span></div></div></code> 

## Caveats

[Section titled “Caveats”](#caveats)increasing the height of the container seems to mess with it because of the margining you would mostly likely have to resize the custom component you pass in the classes for sliadesafter 8 slides there are issues re arraging the slides to not overlapif you are to put elements directly beneath the carousel you may have margin and resize problms

## Usage

[Section titled “Usage”](#usage)

### WMLCarouselOneComponent

[Section titled “WMLCarouselOneComponent”](#wmlcarouselonecomponent)

### Getting Started

[Section titled “Getting Started”](#getting-started)<iframe src="https://stackblitz.com/edit/stackblitz-starters-zxawib?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Handling Slide Events

[Section titled “Handling Slide Events”](#handling-slide-events)<iframe src="https://stackblitz.com/edit/stackblitz-starters-yp9ufe?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### [Customizing Slides](#customizing-slides)

[Section titled “Customizing Slides”](#customizing-slides)<iframe src="https://stackblitz.com/edit/stackblitz-starters-adpxnh?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Customizing Controls

[Section titled “Customizing Controls”](#customizing-controls)<iframe src="https://stackblitz.com/edit/stackblitz-starters-gyjcoq?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

## References

[Section titled “References”](#references)

###  <code dir="auto">WMLCarouselOneProps</code> 

[Section titled “WMLCarouselOneProps”](#wmlcarouseloneprops)

### Properties

[Section titled “Properties”](#properties)<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">id</code></td><td><code dir="auto">string</code></td><td>Unique identifier for the carousel</td></tr><tr><td><code dir="auto">slides</code></td><td><code dir="auto">Array&lt;WMLCarouselOneSlideProps&gt;</code></td><td>Array of slide object</td></tr><tr><td><code dir="auto">controls</code></td><td><code dir="auto">Array&lt;WMLCarouselOneControlProps&gt;</code></td><td>Array of control objects</td></tr><tr><td><code dir="auto">slideContainer</code></td><td><code dir="auto">WMLUIProperty</code></td><td>Style and class configuration for the slide container</td></tr><tr><td><code dir="auto">controller</code></td><td><code dir="auto">WMLAngularMotionUIProperty</code></td><td>Configuration for the carousel controller</td></tr><tr><td><code dir="auto">currentSlideNumber</code></td><td><code dir="auto">number</code></td><td>Index of the current slide</td></tr><tr><td><code dir="auto">setStateSubj</code></td><td><code dir="auto">Subject&lt;WMLCarouselOneProps&gt;</code></td><td>Subject to handle state updates</td></tr><tr><td><code dir="auto">setState</code></td><td><code dir="auto">(WMLCarouselOneProps)=&gt;void</code></td><td>Updates the state of the class</td></tr><tr><td><code dir="auto">slideDistanceFromCenter</code></td><td><code dir="auto">string</code></td><td>Distance of slides from the center</td></tr><tr><td><code dir="auto">slideDistanceFromTop</code></td><td><code dir="auto">string</code></td><td>Distance of slides from the top</td></tr></tbody></table>



### Methods

[Section titled “Methods”](#methods)<table><thead><tr><th>Name</th><th>Signature</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">init</code></td><td><code dir="auto">(): void</code></td><td>Initializes the carousel properties</td></tr><tr><td><code dir="auto">listenForSlideContainerResize</code></td><td><code dir="auto">(): Observable&lt;void&gt;</code></td><td>Listens for window resize events to approriately resize the slide container</td></tr><tr><td><code dir="auto">rotateToSlide</code></td><td><code dir="auto">(slideNumber: number): void</code></td><td>Rotates to the specified slide number</td></tr><tr><td><code dir="auto">updateSlides</code></td><td><code dir="auto">(): void</code></td><td>Updates the slide configurations</td></tr><tr><td><code dir="auto">getAngle</code></td><td><code dir="auto">(): number</code></td><td>Calculates the angle between slides</td></tr><tr><td><code dir="auto">calculateSlideHeight</code></td><td><code dir="auto">(parentWidth: number, parentHeight: number): number</code></td><td>Calculates the slide height based on container size</td></tr><tr><td><code dir="auto">calculateSlideWidth</code></td><td><code dir="auto">(parentWidth: number, parentHeight: number): number</code></td><td>Calculates the slide width based on container size</td></tr><tr><td><code dir="auto">calculateSlideDistanceFromCenter</code></td><td><code dir="auto">(parentWidth: number, parentHeight: number): number</code></td><td>Calculates the distance of slides from the center</td></tr><tr><td><code dir="auto">calculateSlideDistanceFromTop</code></td><td><code dir="auto">(parentWidth: number, parentHeight: number): number</code></td><td>Calculates the distance of slides from the top</td></tr><tr><td><code dir="auto">calculatePerspective</code></td><td><code dir="auto">(parentWidth: number, parentHeight: number): number</code></td><td>Calculates the perspective for the carousel</td></tr></tbody></table>



###  <code dir="auto">WMLCarouselOneSlideProps</code> 

[Section titled “WMLCarouselOneSlideProps”](#wmlcarouseloneslideprops)

### Properties

[Section titled “Properties”](#properties-1)<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">id</code></td><td><code dir="auto">string</code></td><td>Unique identifier for the slide</td></tr><tr><td><code dir="auto">custom</code></td><td><code dir="auto">WMLCustomComponent</code></td><td>Custom component for the slide content</td></tr><tr><td><code dir="auto">view</code></td><td><code dir="auto">WMLMotionUIProperty</code></td><td>Style and motion configuration for the slide</td></tr><tr><td><code dir="auto">setStateSubj</code></td><td><code dir="auto">Subject&lt;WMLCarouselOneSlideProps&gt;</code></td><td>Subject to handle state updates</td></tr><tr><td><code dir="auto">setState</code></td><td><code dir="auto">(WMLCarouselOneSlideProps)=&gt;void</code></td><td>Updates the state of the class</td></tr><tr><td><code dir="auto">slideViewContainerRef</code></td><td><code dir="auto">ViewContainerRef</code></td><td>Reference to the slide’s view container</td></tr></tbody></table>



### Methods

[Section titled “Methods”](#methods-1)<table><thead><tr><th>Name</th><th>Signature</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">init</code></td><td><code dir="auto">(): void</code></td><td>Initializes the slide properties and adds the custom component</td></tr></tbody></table>



###  <code dir="auto">WMLCarouselOneControlProps</code> 

[Section titled “WMLCarouselOneControlProps”](#wmlcarouselonecontrolprops)

### Properties

[Section titled “Properties”](#properties-2)<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">id</code></td><td><code dir="auto">string</code></td><td>Unique identifier for the control</td></tr><tr><td><code dir="auto">custom</code></td><td><code dir="auto">WMLCustomComponent</code></td><td>Custom component for the control content</td></tr><tr><td><code dir="auto">view</code></td><td><code dir="auto">WMLMotionUIProperty</code></td><td>Style and motion configuration for the control</td></tr><tr><td><code dir="auto">setStateSubj</code></td><td><code dir="auto">Subject&lt;WMLCarouselOneControlProps&gt;</code></td><td>Subject to handle state updates</td></tr><tr><td><code dir="auto">setState</code></td><td><code dir="auto">(WMLCarouselOneControlProps)=&gt;void</code></td><td>Updates the state of the class</td></tr><tr><td><code dir="auto">controlViewContainerRef</code></td><td><code dir="auto">ViewContainerRef</code></td><td>Reference to the control’s view container</td></tr></tbody></table>



### Methods

[Section titled “Methods”](#methods-2)<table><thead><tr><th>Name</th><th>Signature</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">init</code></td><td><code dir="auto">(): void</code></td><td>Initializes the control properties and adds the custom component</td></tr></tbody></table>



###  <code dir="auto">WMLCarouselOneSlideExampleProps</code> 

[Section titled “WMLCarouselOneSlideExampleProps”](#wmlcarouseloneslideexampleprops)

### Properties

[Section titled “Properties”](#properties-3)<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">id</code></td><td><code dir="auto">string</code></td><td>Unique identifier for the slide example</td></tr><tr><td><code dir="auto">value</code></td><td><code dir="auto">any</code></td><td>Value to display in the slide example</td></tr><tr><td><code dir="auto">setStateSubj</code></td><td><code dir="auto">Subject&lt;WMLCarouselOneSlideExampleProps&gt;</code></td><td>Subject to handle state updates</td></tr><tr><td><code dir="auto">setState</code></td><td><code dir="auto">(WMLCarouselOneSlideExampleProps)=&gt;void</code></td><td>Updates the state of the class</td></tr></tbody></table>



###  <code dir="auto">WMLCarouselOneControlExampleProps</code> 

[Section titled “WMLCarouselOneControlExampleProps”](#wmlcarouselonecontrolexampleprops)

### Properties

[Section titled “Properties”](#properties-4)<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">id</code></td><td><code dir="auto">string</code></td><td>Unique identifier for the control example</td></tr><tr><td><code dir="auto">value</code></td><td><code dir="auto">any</code></td><td>Value to display in the control example</td></tr><tr><td><code dir="auto">setStateSubj</code></td><td><code dir="auto">Subject&lt;WMLCarouselOneControlExampleProps&gt;</code></td><td>Subject to handle state updates</td></tr><tr><td><code dir="auto">setState</code></td><td><code dir="auto">(WMLCarouselOneControlExampleProps)=&gt;void</code></td><td>Updates the state of the class</td></tr></tbody></table>



## Changelog

[Section titled “Changelog”](#changelog)

### v18.2.4200 [9/21/24]

[Section titled “v18.2.4200 [9/21/24]”](#v1824200-92124)first version of library

### v18.2.4200 [9/21/24]

[Section titled “v18.2.4200 [9/21/24]”](#v1824200-92124-1)updated package to conform with @windmillcode/wml-components-base

### v18.2.5001 [9/22/24]

[Section titled “v18.2.5001 [9/22/24]”](#v1825001-92224)updated package to reflect the version  18.2.5 of @angular/core package

### v18.2.6000 [10/1/24]

[Section titled “v18.2.6000 [10/1/24]”](#v1826000-10124)updated package to reflect the version  18.2.6 of @angular/core package

### v18.2.7000 [10/2/24]

[Section titled “v18.2.7000 [10/2/24]”](#v1827000-10224)updated package to reflect the version  18.2.7 of @angular/core package

### v18.2.7001 [10/5/2024 10:45:12 AM EST]

[Section titled “v18.2.7001 [10/5/2024 10:45:12 AM EST]”](#v1827001-1052024-104512-am-est)[PATCH] Changed WMLCarouselOneProps in wml-carousel-one.component.ts. You can now only change the slide when controller.motionState is either “closed” or “open”. This helps stop unwanted changes to slides during transitions.

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
WML Button](/Windmillcode-Angular-CDK-Docs/19.0.0/angular-components/wml-button/)[Next
WML Chips](/Windmillcode-Angular-CDK-Docs/19.0.0/angular-components/wml-chips/)