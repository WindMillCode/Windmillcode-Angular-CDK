# WML Accordion

The Windmillcode Angular WML Accordion  library provides a set of components and services to create accordion functionalities in Angular applications.  This library facilitates the development of accordions with customizable sections, and animation controls, using WMLUIProperty  to ensure consistency in development practices. Developers can construct accordions that are responsive and adaptable to various content types and user interactions, enhancing the informational architecture of Angular-based web applications.

WMLAccordionZeroComponent is the container which is populated with WMLAccordionZeroItemComponent to populate the accordion. WMLAccordionZeroItemComponent is a dynamic component and by defuault is uses WMLAccordionZeroSampleComponent as the accordion body and WMLAccordionZeroTitleComponent as the title of the accordion. you will want to replace



## Installation

Terminal window <code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">-s</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--verbose</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">@windmillcode/angular-wml-accordion</span></div></div></code> 

## Usage

Below are some usage examples of the WML Accordion Zero library for various development needs:



### Getting Started

at its very core this is all you need to get started with the accordion
as default parameters already exist to show you how to use the accordion

<iframe src="https://stackblitz.com/edit/stackblitz-starters-cs3awz?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### To configure the amount of sections:

items is a 2D array of WMLAccordionZeroItemProps so  if you want x sections you can add WMLAccordionZeroItemProps in whatever Array 2d configuration you like

<iframe src="https://stackblitz.com/edit/stackblitz-starters-vqbw42?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Use Custom Components

<iframe src="https://stackblitz.com/edit/stackblitz-starters-zg7smf?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Dynamic Update

This example shows how to dynamically load content into the accordion sections:

<iframe src="https://stackblitz.com/edit/stackblitz-starters-rrxnns?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Programmatically Open And Close

<iframe src="https://stackblitz.com/edit/stackblitz-starters-s1dkef?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Customization

There are the[color pallete](https://github.com/WindMillCode/Windmillcode-Angular-CDK/blob/main/projects/wml-accordion-zero/_color_pallete.scss),[media queries](https://github.com/WindMillCode/Windmillcode-Angular-CDK/blob/main/projects/wml-accordion-zero/_media_queries.scss),[spacing](https://github.com/WindMillCode/Windmillcode-Angular-CDK/blob/main/projects/wml-accordion-zero/_spacing.scss)and[common](https://github.com/WindMillCode/Windmillcode-Angular-CDK/blob/main/projects/wml-accordion-zero/_common.scss)that you can use to customize the accordion. in your css simply replace the values with the ones you want to use and the component will take on the look. the variables are very specific and even named after the component to avoid any overlapping issues



## Docs



### WMLAccordionZeroProps

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">id</code></td><td><code dir="auto">string</code></td><td>An optional identifier for the accordion component.</td></tr><tr><td><code dir="auto">items</code></td><td><code dir="auto">&lt;WMLAccordionZeroItemProps[][]&gt;</code></td><td>A 2D array of accordion item parameters to define each section.</td></tr></tbody></table>



### WMLAccordionZeroItemProps

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">id</code></td><td><code dir="auto">string</code></td><td>An optional identifier for the accordion item.</td></tr><tr><td><code dir="auto">propTitle</code></td><td><code dir="auto">string</code></td><td>The title text for the accordion item.</td></tr><tr><td><code dir="auto">isClosed</code></td><td><code dir="auto">boolean</code></td><td>Indicates whether the accordion item is initially closed.</td></tr><tr><td><code dir="auto">toggleAccordionEvent</code></td><td><code dir="auto">Subject&lt;boolean&gt;</code></td><td>An event that toggles the accordion item’s open/close state.</td></tr><tr><td><code dir="auto">toggleAccordionSubj</code></td><td><code dir="auto">Subject&lt;{ val: boolean; emit: boolean }&gt;</code></td><td>Subject to programmatically toggle the accordion’s state.</td></tr><tr><td><code dir="auto">accordionBody</code></td><td><code dir="auto">WMLCustomComponent</code></td><td>The component to render as the accordion item’s body.</td></tr><tr><td><code dir="auto">updateAccordionBodySubj</code></td><td><code dir="auto">Subject&lt;WMLCustomComponent&gt;</code></td><td>Subject to dynamically update the content of the accordion body.</td></tr><tr><td><code dir="auto">startHeight</code></td><td><code dir="auto">string</code></td><td>CSS value for the starting height during the opening animation.</td></tr><tr><td><code dir="auto">endHeight0</code></td><td><code dir="auto">string</code></td><td>CSS value for the end height during the opening animation.</td></tr><tr><td><code dir="auto">endHeight1</code></td><td><code dir="auto">string</code></td><td>CSS value for the end height during the closing animation.</td></tr><tr><td><code dir="auto">animationDuration0</code></td><td><code dir="auto">string</code></td><td>Duration of the opening animation.</td></tr><tr><td><code dir="auto">animationDuration1</code></td><td><code dir="auto">string</code></td><td>Duration of the closing animation.</td></tr></tbody></table>



### WMLAccordionZeroSampleProps

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td><code dir="auto">id</code></td><td><code dir="auto">string</code></td><td>Identifier for the sample component.</td><td><code dir="auto">&#34;&#34;</code></td></tr></tbody></table>



### WMLAccordionZeroTitleProps

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td><code dir="auto">id</code></td><td><code dir="auto">string</code></td><td>Identifier for the sample component.</td><td><code dir="auto">&#34;&#34;</code></td></tr><tr><td><code dir="auto">title</code></td><td><code dir="auto">string</code></td><td>Text for the accordion title.</td><td><code dir="auto">&#34;My Accordion Title&#34;</code></td></tr></tbody></table>

These tables provide an overview of the key elements within the WML Accordion Zero library that developers can interact with to customize and control accordion behavior in their Angular applications.



## Changelog



### v0.0.1

can specify multiple accordion with in the component and specifiy your child compoennt as wellif you want the accordion body to be the same width as its header fintd the target accordion and specify its width<code><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#C5E478;--1:#3C63B3">.WMLAccordionZeroPod0</span><span style="--0:#C792EA;--1:#8D46B4"> </span><span style="--0:#FF6363;--1:#9B504E">wml-accordion-zero-item</span><span style="--0:#C5E478;--1:#3C63B3">:nth-child</span><span style="--0:#C792EA;--1:#8D46B4">(</span><span style="--0:#F78C6C;--1:#AA0982">1</span><span style="--0:#C792EA;--1:#8D46B4">)</span><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#80CBC4;--1:#097174">flex</span><span style="--0:#D6DEEB;--1:#403F53">: </span><span style="--0:#F78C6C;--1:#AA0982">0</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#F78C6C;--1:#AA0982">0</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--1:#AA0982"><span style="--0:#F78C6C">20</span><span style="--0:#FFEB95">%</span></span><span style="--0:#D6DEEB;--1:#403F53">!;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code>



### v0.0.2

coorect dependencies

### v0.0.3

end devs can now decide whether an accordion is open on init or not

### v16.2.5-0

end devs can control animations values for the the accordion
here are the default values that get passed to the scss<code><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">startHeight </span><span style="--0:#C792EA;--1:#8D46B4">=</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#ECC48D;--1:#9B504E">calc(0/10.6 * 1rem)</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">endHeight0 </span><span style="--0:#C792EA;--1:#8D46B4">=</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#ECC48D;--1:#9B504E">calc(20000/10.6 * 1rem)</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">endHeight1 </span><span style="--0:#C792EA;--1:#8D46B4">=</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#ECC48D;--1:#9B504E">calc(2000/10.6 * 1rem)</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">animationDuration0 </span><span style="--0:#C792EA;--1:#8D46B4">=</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#ECC48D;--1:#9B504E">10s</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">animationDuration1 </span><span style="--0:#C792EA;--1:#8D46B4">=</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#ECC48D;--1:#9B504E">1.25s</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span></div></div></code>

,



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

updated package to reflect the version  ^17.2.1 of @angular/core package

### v17.2.1001 [2/21/24]

[UPDATE]  added WMLAccordionZeroItemProps.updateAccordionBodySubj to toggle the accordion body as needed,[UPDATE]  you can customize the title via WMLAccordionZeroItemProps.accordionTitle
,

### v17.2.2000 [2/23/24]

updated package to reflect the version  ^17.2.2 of @angular/core package,

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

### v18.0.0 [5/22/24]

updated package to reflect the version  ^18.0.0 of @angular/core package,

### v18.0.1 [5/22/24]

updated package to reflect the version  ^18.0.0 of @angular/core package,

### v18.0.4 [5/25/24]

updated package to conform with @windmillcode/angular-wml-components-base   ,
,

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

### v18.1.0 [7/10/24]

updated package to reflect the version  ^18.1.0 of @angular/core package,

### v18.1.3 [7/13/24]

updated package to reflect the version  ^18.1.0 of @angular/core package,

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

### v18.1.3000-beta13 [8/4/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3001 [8/4/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3002 [8/4/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3001 [8/5/24]

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

updated package to reflect the version  18.2.0 of @angular/core package

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

### v18.2.7001 [10/5/24]

updated package to conform with @windmillcode/wml-components-base

### v18.2.7010 [10/9/24]

updated package to conform with @windmillcode/wml-components-base

### v18.2.7020 [10/10/24]

updated package to conform with @windmillcode/wml-components-base

### v18.2.8000 [10/10/24]

updated package to reflect the version  18.2.8 of @angular/core package

### v18.2.8000 [10/11/24]

updated package to reflect the version  18.2.8 of @angular/core package

### v18.2.8001 [10/11/24]

updated package to conform with @windmillcode/wml-components-base

### v18.2.9000 [10/23/24]

updated package to conform with @windmillcode/wml-components-base

### v18.2.10000 [10/31/24]

updated package to conform with @windmillcode/wml-components-base

### v18.2.11000 [11/7/24]

updated package to conform with @windmillcode/wml-components-base

### v18.2.12000 [11/15/24]

updated package to conform with @windmillcode/wml-components-base[](/Windmillcode-Angular-CDK-Docs/intro/wml-three)[](/Windmillcode-Angular-CDK-Docs/angular-components/wml-angular-components-base/)