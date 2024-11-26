# WML Mobile Nav

The Angular WML Mobile Nav library offers a comprehensive solution for integrating a mobile navigation menu into Angular applications. It’s designed to enhance user experience on mobile devices by providing a dynamic and responsive navigation system. The library leverages Angular’s powerful framework to offer a seamless and interactive menu system, which is both easy to integrate and customizable to fit the specific needs of an application. The primary goal of the library is to simplify the implementation of a mobile navigation menu, providing developers with a set of tools that facilitate the creation of a multi-level, collapsible, and accessible navigation structure.

Central to the library is the <code dir="auto">WMLMobileNavZeroComponent</code> , which acts as the main container for the navigation system. This component utilizes the <code dir="auto">WMLInfiniteDropdownZeroProps</code> to dynamically generate a mobile-friendly, nested dropdown structure. The interactivity within the components allows for a highly customizable user experience, enabling developers to define their navigation hierarchy and visual style with ease. Customization is further supported through a variety of parameters and methods, allowing for dynamic content loading and real-time updates to the navigation structure. The typical implementation involves integrating the <code dir="auto">WMLMobileNavZeroComponent</code> within an Angular application, configuring its parameters to define the navigation items, and customizing its appearance and behavior to match the application’s design and functional requirements.



## Installation

Terminal window <code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">-s</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--verbose</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">@windmillcode/angular-wml-mobile-nav</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">@windmillcode/angular-wml-infinite-dropdown</span></div></div></code> 

## Usage



### WMLMobileNavZero



### Getting Started

<iframe src="https://stackblitz.com/edit/stackblitz-starters-bmd9s5?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Adding A Logo Header

This is the same as adding custom components from wml infinite dropdown guide<iframe src="https://stackblitz.com/edit/stackblitz-starters-9fsvzy?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Decent Example

<iframe src="https://stackblitz.com/edit/stackblitz-starters-sayjvv?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>**For more guides refer to[WML Infinite Dropdown](https://windmillcode.github.io/Windmillcode-Angular-CDK-Docs/components/wml-infinite-dropdown)**



## Reference



### WMLMobileNavZeroProps

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>cdrefArray</td><td>Array&lt;ChangeDetectorRef&gt;</td><td>Array of ChangeDetectorRef instances for manual triggering of change detection</td></tr><tr><td>items</td><td>Array&lt;WMLInfiniteDropdownZeroProps&gt;</td><td>Array of dropdown properties to define navigation items</td></tr><tr><td>opened</td><td>Subject&lt;void&gt;</td><td>Subject that emits when the navigation is opened</td></tr><tr><td>closed</td><td>Subject&lt;void&gt;</td><td>Subject that emits when the navigation is closed</td></tr><tr><td>isPresent</td><td>boolean</td><td>Boolean flag to control the presence of the navigation on the DOM</td></tr><tr><td>state</td><td>”open” | “closed”</td><td>Current state of the navigation</td></tr></tbody></table>



## Changelog



### v0.0.1

project is not yet ready should be able to open and close

### v0.0.2

component is fully operational

### v1.0.4

you can safely rely on isPresent to by default show and hide the mobile nav on the domcorrected dependenciesensure if mobileProps.isPresent is set to true the component would appear on the domfixed major problems concerning ngx-translate<code><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// translate</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// first make sure to have ONLY ONE in the imports for AppModule</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">TranslateModule</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">forRoot</span><span style="--0:#D6DEEB;--1:#403F53">({</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">defaultLanguage: </span><span style="--0:#D9F5DD;--1:#111111">&#39;</span><span style="--0:#ECC48D;--1:#9B504E">en</span><span style="--0:#D9F5DD;--1:#111111">&#39;</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">loader: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">provide: TranslateLoader,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">useFactory: HttpLoaderFactory,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">deps:[HttpClient]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">}),</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// then</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">WmlMobileNavZeroNGXTranslateModule</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// for regular</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">WmlMobileNavZeroModule</span></div></div></code>

mobile nav can scroll if mobile screens are too big

fixed a css issues where nav items that opened to the side were not seen



### v16.2.4-0

started to name packages after angular core versioning

### v16.2.4-1

isolated css to not interfere with applcation css

### v16.2.5-0

made it easier to style component
%!(EXTRA string=

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

### v18.0.1 [5/22/24]

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

### v18.2.2 [8/21/24]

[FIX] fixed bug with mobile nav child elements

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

updated package to conform with @windmillcode/wml-components-base

### v18.2.12001 [11/17/24]

updated package to conform with @windmillcode/wml-components-base

### v19.0.0 [11/19/24]

updated package to conform with @windmillcode/wml-components-base

### v19.0.3 [11/20/24]

updated package to conform with @windmillcode/wml-components-base[](/Windmillcode-Angular-CDK-Docs/angular-components/wml-input/)[](/Windmillcode-Angular-CDK-Docs/angular-components/wml-notify/)