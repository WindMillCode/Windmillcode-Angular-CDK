# WML Infinite Dropdown

The Angular WML Infinite Dropdown library library provides a flexible and dynamic dropdown component for Angular applications, aiming to enhance user interfaces with nested and infinitely cascading options. It addresses the need for a versatile dropdown menu in Angular projects, offering a solution that supports multiple levels of navigation and interaction. This library is particularly useful for developers looking to implement complex menu structures without the hassle of managing intricate state logic or nested structures manually.

Central to this library is the <code dir="auto">WmlInfiniteDropdownComponent</code> , which serves as the main container for the dropdown items. This component can be dynamically populated with a variety of options and sub-options, allowing for deep nesting and a hierarchical menu structure. Alongside it, the <code dir="auto">WmlInfiniteDropdownItemComponent</code> represents individual items within the dropdown, which can be further customized using the <code dir="auto">WmlSampleInfiniteDropdownItemComponent</code> . These components work in tandem to render the dropdown menu, manage its state, and handle user interactions. Developers can customize the appearance and behavior of the dropdown through parameters like <code dir="auto">WmlInfiniteDropdownProps</code> and <code dir="auto">WmlInfiniteDropdownOption</code> , which offer control over the items’ content, styling, and interaction handlers. This level of interactivity and customization enables the creation of complex menu systems that are both functional and visually appealing. The library’s design encourages a modular approach, where the main dropdown component acts as a container that can be filled with various configurable options, promoting reusability and maintainability in Angular applications.



## Installation

Terminal window <code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">-s</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--verbose</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">@windmillcode/angular-wml-infinite-dropdown</span></div></div></code> 

## Usage

To integrate the <code dir="auto">wml-infinite-dropdown</code> component into your Angular project, you can follow these examples to cater to various development needs. The examples demonstrate how to use the component in your template (HTML) and how to configure it in your TypeScript file.



### WMLInfiniteDropdownZero



### Basic Example

<iframe src="https://stackblitz.com/edit/stackblitz-starters-g5sj1z?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Customizing Dropdown Options

<iframe src="https://stackblitz.com/edit/stackblitz-starters-fbsnop?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Adding Options

open the preview in a browser and view the hierachy for the true infinite dropdown<iframe src="https://stackblitz.com/edit/stackblitz-starters-cpmz6f?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Clicking On A Menu Item

<iframe src="https://stackblitz.com/edit/stackblitz-starters-gmewlq?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

## Reference



### WMLInfiniteDropdownZeroProps

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">options</code></td><td><code dir="auto">Array&lt;WMLInfiniteDropdownZeroOption | WMLInfiniteDropdownZeroProps&gt;</code></td><td>List of options or sub-dropdowns.</td></tr><tr><td><code dir="auto">customize</code></td><td><code dir="auto">Object</code></td><td>Object to customize dropdown and option properties.</td></tr><tr><td><code dir="auto">optionsSubj</code></td><td><code dir="auto">Subject&lt;WMLInfiniteDropdownZeroInputOptions&gt;</code></td><td>Subject to handle options updates.</td></tr><tr><td><code dir="auto">style</code></td><td><code dir="auto">any</code></td><td>Style object for custom styling.</td></tr><tr><td><code dir="auto">openClass</code></td><td><code dir="auto">string</code></td><td>Class name to be applied when the dropdown is open.</td></tr><tr><td><code dir="auto">closedClass</code></td><td><code dir="auto">string</code></td><td>Class name to be applied when the dropdown is closed.</td></tr><tr><td><code dir="auto">updateOptions</code></td><td><code dir="auto">Function</code></td><td>Function to update the dropdown options.</td></tr><tr><td><code dir="auto">getDropdownStates</code></td><td><code dir="auto">Function</code></td><td>Function to get the open and closed states of the dropdown.</td></tr><tr><td><code dir="auto">toggleDropdownViaDropdown</code></td><td><code dir="auto">Function</code></td><td>Function to toggle the dropdown on hover interaction.</td></tr><tr><td><code dir="auto">toggleDropdown</code></td><td><code dir="auto">Function</code></td><td>Function to programmatically toggle the dropdown.</td></tr></tbody></table>



### WMLInfiniteDropdownZeroOption

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">text</code></td><td><code dir="auto">string</code></td><td>Display text for the dropdown option.</td></tr><tr><td><code dir="auto">dropdown</code></td><td><code dir="auto">WMLInfiniteDropdownZeroProps</code></td><td>Nested dropdown parameters, if any.</td></tr><tr><td><code dir="auto">openDropdown</code></td><td><code dir="auto">Function</code></td><td>Function to programmatically open the dropdown.</td></tr><tr><td><code dir="auto">closeDropdown</code></td><td><code dir="auto">Function</code></td><td>Function to programmatically close the dropdown.</td></tr><tr><td><code dir="auto">custom</code></td><td><code dir="auto">WMLCustomComponent</code></td><td>Custom component to be used as the dropdown item.</td></tr><tr><td><code dir="auto">detectChangeSubj</code></td><td><code dir="auto">Subject&lt;void&gt;</code></td><td>Subject to handle change detection.</td></tr><tr><td><code dir="auto">clickPredicate</code></td><td><code dir="auto">Function</code></td><td>Predicate function to be called on click.</td></tr></tbody></table>



## Changelog



### .0.0.1

infinite dropdown supported



### . 0.0.2

custom dropdown entries supported



### . 0.1.0

able to customerize option containers
able to specficy an interactionType of hover or click



### 0.1.1

safari ios support replaced option tag with p tag to get component options to render



### 0.1.2

proivded WmlInfiniteDropdownOption.detectChangeSubj the end developer can call to detectChanges when the developer makes an update that should reflect visually on the UI



### 0.1.3

removed unneeded WmlInfiniteDropdownComponent.listenForOptions changes



### 0.1.4

removed a console.log stmt



### 0.1.5

added cursor pointer to the WmlInfiniteDropdownItemComponent

### 0.2.0

added closeDropdown and openDropdown

### 0.2.1

addded WMLInfiniteDropdownOptionBase to help with typing issues using as base for options and dropdown classes. added id for optionsProps for e2e testing

### 1.0.1

MAJOR rename to angular-wml-infinite-dropdownfixed major problems concerning ngx-translate<code><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// translate</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// first make sure to have ONLY ONE in the imports for AppModule</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">TranslateModule</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">forRoot</span><span style="--0:#D6DEEB;--1:#403F53">({</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">defaultLanguage: </span><span style="--0:#D9F5DD;--1:#111111">&#39;</span><span style="--0:#ECC48D;--1:#9B504E">en</span><span style="--0:#D9F5DD;--1:#111111">&#39;</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">loader: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">provide: TranslateLoader,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">useFactory: HttpLoaderFactory,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">deps:[HttpClient]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">}),</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// then</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">WmlInfiniteDropdownZeroNGXTranslateModule</span></div></div><div class="ec-line"><div class="code"><span style="--0:#809191;--1:#5E6578">// for regular</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">WmlInfiniteDropdownZeroModule</span></div></div></code>



### 1.0.2

added isPresnt support to hide the p tag for wml-sample-dropdown-option

### 1.0.3

remove max width for dropdown items

### 1.1.0

added cdref access to WmlInfiniteDropdownOption and WmlInfiniteDropdownProps which extends WMLView

### 1.1.1

added components cdref to WmlInfiniteDropdownProps
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

updated package to reflect the version  v16.2.93 of @angular/core package,  ,

### v16.2.100

updated package to reflect the version  v16.2.100 of @angular/core package,  ,

### v16.2.110

updated package to reflect the version  v16.2.110 of @angular/core package,  ,

### v16.2.120

updated package to reflect the version  v16.2.120 of @angular/core package,  ,

### v17.0.10

updated package to reflect the version  v17.0.10 of @angular/core package,  ,

### v17.0.11

updated package to reflect the version  v17.0.11 of @angular/core package,

### v17.0.12

updated css and scss variables for the component to be indepent of windmillcode applications
,

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

updated package to reflect the version  ^17.1.3 of @angular/core package

### v17.1.3001 [2/8/24]

added isPresent to WmlInfiniteDropdownProps constructor
,

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

updated package to reflect the version  ^18.1.2 of @angular/core package

### v18.1.2300 [7/26/2024 3:45:00 PM EST]

[UPDATE] Updated models.ts file, replaced WMLView with WMLRoute for WMLInfiniteDropdownOptionBase

[UPDATE] Added conditional links to wml-sample-infinite-dropdown-item.component.html for routerLink and href properties

[CHECKPOINT] Updated *ngIf conditions to handle props.routerLink and props.link in wml-sample-infinite-dropdown-item.component.html
,



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

updated package to conform with @windmillcode/angular-wml-components-base[Previous
WML Form](/Windmillcode-Angular-CDK-Docs/components/wml-form/)[Next
WML Input](/Windmillcode-Angular-CDK-Docs/components/wml-input/)