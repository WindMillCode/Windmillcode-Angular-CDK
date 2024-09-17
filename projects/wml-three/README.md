# WML Components Base

This content is for the 18.2.3100 version. Switch to the[latest version](/Windmillcode-Angular-CDK-Docs/intro/three/)for up-to-date documentation.

When working on web applications, there is no standard baseline. The  WML Components Base Library establishes a foundation for your application, ensuring consistency and scalability. The core of this library is the <code dir="auto">WMLUIProperty</code> , which represents the basic building block of every element in a web application. This property encapsulates all the essential features, and there are several subclasses like <code dir="auto">WMLRoute</code> for routes, <code dir="auto">WMLView</code> to leverage change detection, <code dir="auto">WMLImage</code> for images  and <code dir="auto">WMLMotionUIProperty</code> for CSS animations and transitions. Each class has properties and methods to optimize your work in those features of  your application. You can use this package and leave out the rest of the library and you will get very far building very robust and scalable applications



## Installation

Terminal window <code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">-s</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--verbose</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">@windmillcode/three</span></div></div></code>

## Usage



### [WMLUIProperty](#wml-ui-property)

**The Building Blocks Of Web Apps**

<iframe src="https://stackblitz.com/edit/stackblitz-starters-ypqdk7?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### [WMLMotionUIProperty](#wml-motion-ui-property)

**Using CSS Animations**

<iframe src="https://stackblitz.com/edit/stackblitz-starters-bvamvi?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>**[Decent Example](#wml-animate-ui-property-decent-example)**

if you want a different animation for you animation states simply use a different keyframe mabye suffixing the keyframes with open and close for organization<iframe src="https://stackblitz.com/edit/stackblitz-starters-xkprmk?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### [WMLCustomComponent](#wml-custom-component)

**Custom Components**

<iframe src="https://stackblitz.com/edit/stackblitz-starters-kmsw3c?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

## References



### WMLUIProperty

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">isPresent</code></td><td><code dir="auto">boolean</code></td><td>Indicates if the UI property is currently present.</td></tr><tr><td><code dir="auto">value</code></td><td><code dir="auto">any</code></td><td>The value associated with this UI property.</td></tr><tr><td><code dir="auto">text</code></td><td><code dir="auto">string</code></td><td>The text associated with this property.</td></tr><tr><td><code dir="auto">class</code></td><td><code dir="auto">string</code></td><td>CSS class string for the property.</td></tr><tr><td><code dir="auto">style</code></td><td><code dir="auto">Partial&lt;CSSStyleDeclaration&gt;</code></td><td>Inline styles for the property.</td></tr><tr><td><code dir="auto">type</code></td><td><code dir="auto">any</code></td><td>The type of UI element (optional).</td></tr><tr><td><code dir="auto">click</code></td><td><code dir="auto">(evt?: Event) =&gt; void</code></td><td>Function to handle click events.</td></tr><tr><td><code dir="auto">id</code></td><td><code dir="auto">string</code></td><td>Unique identifier for the UI property.</td></tr></tbody></table>

Methods<table><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">updateClassString</code></td><td>Updates the class string based on the current state.</td></tr><tr><td><code dir="auto">toggleClassString</code></td><td>Toggles a class string on or off.</td></tr></tbody></table>



###  <code dir="auto">WMLUIGlobal</code>

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>framework</td><td><code dir="auto">Framework</code></td><td>Holds the detected framework information.</td></tr></tbody></table>

 <code dir="auto">framework</code> <table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>name</td><td><code dir="auto">WMLUIFrameworkType</code></td><td>The name of the detected UI framework.</td></tr></tbody></table>



### WMLEndpoint

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">url</code></td><td><code dir="auto">Function</code></td><td>Function that defines the endpoint’s URL.</td></tr><tr><td><code dir="auto">automate</code></td><td><code dir="auto">boolean</code></td><td>Indicates whether to automate API requests for the endpoint.</td></tr></tbody></table>



### WMLView

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">angular</code></td><td><code dir="auto">any</code></td><td>Object containing Angular-specific properties like <code dir="auto">cdref</code>.</td></tr><tr><td><code dir="auto">cdref</code></td><td><code dir="auto">any</code></td><td>Angular’s ChangeDetectorRef, used for detecting changes in Angular applications (deprecated).</td></tr></tbody></table>

Methods<table><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">get cdref</code></td><td>Retrieves the ChangeDetectorRef from the Angular-specific properties (deprecated).</td></tr><tr><td><code dir="auto">set cdref</code></td><td>Sets the ChangeDetectorRef in the Angular-specific properties (deprecated).</td></tr></tbody></table>

angular<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">cdref</code></td><td><code dir="auto">any</code></td><td>Angular’s ChangeDetectorRef used for change detection in Angular applications.</td></tr></tbody></table>



### WMLRoute

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">route</code></td><td><code dir="auto">string</code></td><td>Defines the route for the application, default is ”/“.</td></tr><tr><td><code dir="auto">link</code></td><td><code dir="auto">string</code></td><td>Optional link associated with the route.</td></tr><tr><td><code dir="auto">routerLink</code></td><td><code dir="auto">string</code></td><td>Optional router link for navigation.</td></tr></tbody></table>



### WMLMotionUIProperty

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">autoOpen</code></td><td><code dir="auto">boolean</code></td><td>Automatically opens the UI element when true.</td></tr><tr><td><code dir="auto">helperStyles</code></td><td><code dir="auto">Partial&lt;CSSStyleDeclaration&gt;</code></td><td>Necessary for animations to work properly.  Modify only if you know what you are doing.</td></tr><tr><td><code dir="auto">keyFrameStyles</code></td><td><code dir="auto">{ [k: string]: Partial&lt;CSSStyleDeclaration&gt; }</code></td><td>Object defining keyframe styles for animation. use 0% 10% 11% … 100% according to typicall css keyframes for the key values</td></tr><tr><td><code dir="auto">keyFrameName</code></td><td><code dir="auto">string</code></td><td>Name of the animation keyframe.</td></tr><tr><td><code dir="auto">motionState</code></td><td><code dir="auto">&#34;open&#34; | &#34;opening&#34; | &#34;closing&#34; | &#34;closed&#34;</code></td><td>Current state of the motion animation.</td></tr><tr><td><code dir="auto">style</code></td><td><code dir="auto">Partial&lt;CSSStyleDeclaration&gt;</code></td><td>Style applied to the motion property.</td></tr></tbody></table>

Methods<table><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">get keyFrameName</code></td><td>Retrieves the current keyframe name used for the animation.</td></tr><tr><td><code dir="auto">set keyFrameName</code></td><td>Sets a unique keyframe name for the motion animation.</td></tr><tr><td><code dir="auto">getGroupMotionState</code></td><td>Returns the current motion state of the animation group.</td></tr><tr><td><code dir="auto">animationEnd</code></td><td>Handles the animation end event and updates the motion state accordingly.</td></tr><tr><td><code dir="auto">openMotion</code></td><td>Triggers the opening animation.</td></tr><tr><td><code dir="auto">closeMotion</code></td><td>Triggers the closing animation.</td></tr><tr><td><code dir="auto">toggleMotion</code></td><td>Toggles the animation direction (forward or reverse).</td></tr><tr><td><code dir="auto">injectKeyframes</code></td><td>Injects custom keyframes for the motion animation into the document’s styles.</td></tr><tr><td><code dir="auto">motionEndEvent</code></td><td>Function called at the end of an animation state.</td></tr></tbody></table>

WMLMotionUIPropertyState<table><thead><tr><th>Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">open</code></td><td>The UI element is fully open.</td></tr><tr><td><code dir="auto">opening</code></td><td>The UI element is in the process of opening.</td></tr><tr><td><code dir="auto">closing</code></td><td>The UI element is in the process of closing.</td></tr><tr><td><code dir="auto">closed</code></td><td>The UI element is fully closed.</td></tr></tbody></table>



### WMLCustomComponent

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">cpnt</code></td><td><code dir="auto">C</code></td><td>The custom component being wrapped.</td></tr><tr><td><code dir="auto">props</code></td><td><code dir="auto">P</code></td><td>Properties associated with the custom component.</td></tr></tbody></table>



### WMLImage

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">src</code></td><td><code dir="auto">string</code></td><td>Source URL for the image.</td></tr><tr><td><code dir="auto">alt</code></td><td><code dir="auto">string</code></td><td>Alt text for accessibility purposes.</td></tr><tr><td><code dir="auto">ariaLabel</code></td><td><code dir="auto">string</code></td><td>ARIA label for screen readers.</td></tr><tr><td><code dir="auto">ariaExpanded</code></td><td><code dir="auto">boolean</code></td><td>Indicates whether the image is in an expanded state.</td></tr><tr><td><code dir="auto">onError</code></td><td><code dir="auto">Function</code></td><td>Function to handle errors when loading the image.</td></tr></tbody></table>



### WMLE2ETarget

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">runningONE2E</code></td><td><code dir="auto">boolean</code></td><td>Indicates if an E2E (end-to-end) test is currently running.</td></tr><tr><td><code dir="auto">data</code></td><td><code dir="auto">any</code></td><td>Data associated with the E2E test.</td></tr></tbody></table>



### WMLQueue

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">queue</code></td><td><code dir="auto">T[]</code></td><td>Internal array representing the queue of items.</td></tr></tbody></table>

Methods<table><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">enqueue(item: T)</code></td><td>Adds an item to the queue.</td></tr><tr><td><code dir="auto">dequeue()</code></td><td>Removes and returns the first item in the queue.</td></tr><tr><td><code dir="auto">isEmpty()</code></td><td>Checks if the queue is empty.</td></tr><tr><td><code dir="auto">size()</code></td><td>Returns the number of items in the queue.</td></tr><tr><td><code dir="auto">getElementAt(index: number)</code></td><td>Retrieves the element at a specific index in the queue.</td></tr></tbody></table>



### WMLAPIPageRequestModelFilterPredicateEnum

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">EQUALS</code></td><td><code dir="auto">string</code></td><td>Filter predicate to check if a value is equal.</td></tr><tr><td><code dir="auto">STARTSWITH</code></td><td><code dir="auto">string</code></td><td>Filter predicate to check if a value starts with a string.</td></tr><tr><td><code dir="auto">ENDSWITH</code></td><td><code dir="auto">string</code></td><td>Filter predicate to check if a value ends with a string.</td></tr><tr><td><code dir="auto">CONTAINS</code></td><td><code dir="auto">string</code></td><td>Filter predicate to check if a value contains a string.</td></tr></tbody></table>



### WMLAPIPaginationRequestModel

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">fields</code></td><td><code dir="auto">Array&lt;{ value: any }&gt;</code></td><td>Array of fields included in the request.</td></tr><tr><td><code dir="auto">filter</code></td><td><code dir="auto">Array&lt;{ key: string, value: any, predicate?: WMLAPIPageRequestModelFilterPredicateEnum }&gt;</code></td><td>Filter criteria with optional predicates.</td></tr><tr><td><code dir="auto">sort</code></td><td><code dir="auto">Array&lt;{ key: string, direction: &#34;ASC&#34; | &#34;DESC&#34; | &#34;&#34; }&gt;</code></td><td>Sorting criteria for the request.</td></tr><tr><td><code dir="auto">cursor</code></td><td><code dir="auto">{ value?: string, order?: number }</code></td><td>Cursor-based pagination options.</td></tr><tr><td><code dir="auto">pageNum</code></td><td><code dir="auto">number</code></td><td>Current page number in the pagination request.</td></tr><tr><td><code dir="auto">pageSize</code></td><td><code dir="auto">number</code></td><td>Number of items per page.</td></tr><tr><td><code dir="auto">errorOccuredIsPresent</code></td><td><code dir="auto">boolean</code></td><td>Indicates if an error occurred during the request.</td></tr></tbody></table>

Methods<table><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">getIndexInfo()</code></td><td>Returns start and end index information for the current page.</td></tr></tbody></table>



### WMLAPIPaginationResponseModel

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">columns</code></td><td><code dir="auto">Array&lt;{ value: string, type?: string }&gt;</code></td><td>Array of columns in the response data.</td></tr><tr><td><code dir="auto">data</code></td><td><code dir="auto">Array&lt;any&gt;</code></td><td>Array of data returned by the API.</td></tr><tr><td><code dir="auto">metadata</code></td><td><code dir="auto">{ startOrderValue?: number }</code></td><td>Metadata about the response, including start order values.</td></tr><tr><td><code dir="auto">pageNum</code></td><td><code dir="auto">number</code></td><td>Current page number in the response.</td></tr><tr><td><code dir="auto">pageSize</code></td><td><code dir="auto">number</code></td><td>Number of items per page in the response.</td></tr><tr><td><code dir="auto">totalPages</code></td><td><code dir="auto">number</code></td><td>Total number of pages in the response.</td></tr><tr><td><code dir="auto">totalItems</code></td><td><code dir="auto">number</code></td><td>Total number of items in the response.</td></tr></tbody></table>

Methods<table><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">getIndexInfo()</code></td><td>Returns start and end index information for the current page.</td></tr><tr><td><code dir="auto">calculateCurrentState()</code></td><td>Calculates pagination state based on total items and pages.</td></tr><tr><td><code dir="auto">calcSectionBasedOnPageDetails()</code></td><td>Slices data into sections based on page details.</td></tr></tbody></table>



### Types

WMLDeepPartial<table><thead><tr><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">WMLDeepPartial&lt;T&gt;</code> is a type that makes all properties of a type <code dir="auto">T</code> optional, and if a property is an object, it recursively makes all of its properties optional as well. Functions are left unchanged.</td></tr></tbody></table>

Type Behavior<table><thead><tr><th>Condition</th><th>Behavior</th></tr></thead><tbody><tr><td><code dir="auto">T[K]</code> is a function</td><td>Keeps the function type intact.</td></tr><tr><td><code dir="auto">T[K]</code> is an object</td><td>Recursively makes all properties of the object optional using <code dir="auto">WMLDeepPartial</code>.</td></tr><tr><td><code dir="auto">T[K]</code> is neither a function nor object</td><td>The property becomes optional.</td></tr></tbody></table>



### Functions

 <code dir="auto">updateGlobal</code> <table><thead><tr><th>Signature</th><th>Return Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">updateGlobal(props: WMLDeepPartial&lt;WMLUIGlobal &amp; { propFrameworkName?: string }&gt;)</code></td><td><code dir="auto">void</code></td><td>Updates the global <code dir="auto">WINDMILLCODE</code> object with provided properties and optionally changes framework name. useful if detectframework gets the framework name wrong</td></tr></tbody></table>

 <code dir="auto">props</code> <table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>propFrameworkName</td><td><code dir="auto">string</code> (optional)</td><td>Optionally updates the framework name in the global object.</td></tr><tr><td>…rest</td><td><code dir="auto">WMLDeepPartial&lt;WMLUIGlobal&gt;</code></td><td>All other properties of <code dir="auto">WMLUIGlobal</code> to be applied globally.</td></tr></tbody></table>

 <code dir="auto">getGlobalObject</code> <table><thead><tr><th>Signature</th><th>Return Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">getGlobalObject(): any</code></td><td><code dir="auto">any</code></td><td>Returns the appropriate global object based on the environment: <code dir="auto">globalThis</code>, <code dir="auto">window</code>, <code dir="auto">global</code>, or <code dir="auto">self</code>.</td></tr></tbody></table>

 <code dir="auto">Return Object</code> <table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>globalThis</td><td><code dir="auto">any</code></td><td>Standard ECMAScript global object.</td></tr><tr><td>window</td><td><code dir="auto">any</code></td><td>Global object for browser environments.</td></tr><tr><td>global</td><td><code dir="auto">any</code></td><td>Global object for Node.js environments.</td></tr><tr><td>self</td><td><code dir="auto">any</code></td><td>Global object for Web Workers.</td></tr><tr><td></td><td><code dir="auto">Object</code></td><td>Fallback empty object if none of the above globals are available.</td></tr></tbody></table>

 <code dir="auto">detectFramework</code> <table><thead><tr><th>Signature</th><th>Return Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">detectFramework(): WMLUIFrameworkType</code></td><td><code dir="auto">WMLUIFrameworkType</code></td><td>Detects the framework used in the environment (React, Angular, Vue.js, etc.).</td></tr></tbody></table>

 <code dir="auto">myWindow</code> <table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>myWindow</td><td><code dir="auto">any</code></td><td>Represents the global <code dir="auto">window</code> object or an empty object if <code dir="auto">window</code> is undefined.</td></tr></tbody></table>

 <code dir="auto">generateUUID(prefix: string)</code> <table><thead><tr><th>Description</th></tr></thead><tbody><tr><td>Generates a UUID with an optional prefix and returns it as a string.</td></tr></tbody></table>

 <code dir="auto">generateClassPrefix(prefix: string)</code> <table><thead><tr><th>Description</th></tr></thead><tbody><tr><td>Returns a function that generates class names based on the provided prefix. If the value is empty, it returns the first part of the prefix.</td></tr></tbody></table>

 <code dir="auto">generateIdPrefix(prefix: string)</code> <table><thead><tr><th>Description</th></tr></thead><tbody><tr><td>Returns a function that generates ID names based on the provided prefix. If the value is empty, it returns the first part of the prefix.</td></tr></tbody></table>

 <code dir="auto">fillMissingProperties(source: object, target: object)</code> <table><thead><tr><th>Description</th></tr></thead><tbody><tr><td>Recursively fills missing properties in the <code dir="auto">target</code> object from the <code dir="auto">source</code> object. If a property exists in both, the target keeps its value.</td></tr></tbody></table>

 <code dir="auto">updateClassString(obj: any, myClassDefault: string, classListDefault: string)</code> <table><thead><tr><th>Description</th></tr></thead><tbody><tr><td>Returns a function to manage the class list of an object. Can add, remove, toggle, or clear class names based on the current state of the object.</td></tr></tbody></table>

 <code dir="auto">toggleClassString(targetClass: string, classList: Array&lt;string&gt;, predicate: Function)</code> <table><thead><tr><th>Description</th></tr></thead><tbody><tr><td>Toggles a class string on or off within the provided class list. The <code dir="auto">predicate</code> function determines the action.</td></tr></tbody></table>

 <code dir="auto">generateRandomNumber(range: number, additional: number)</code> <table><thead><tr><th>Description</th></tr></thead><tbody><tr><td>Generates a random number within the specified range and adds the additional value.</td></tr></tbody></table>

 <code dir="auto">generateRandomColor()</code> <table><thead><tr><th>Description</th></tr></thead><tbody><tr><td>Generates a random hex color code.</td></tr></tbody></table>

 <code dir="auto">selectRandomOptionFromArray(myArray: Array&lt;any&gt;, index?: number)</code> <table><thead><tr><th>Description</th></tr></thead><tbody><tr><td>Selects a random element from an array. Optionally, an index can be provided to limit the range.</td></tr></tbody></table>

 <code dir="auto">replaceValuesWithPaths&lt;T&gt;(obj: any, path: string, predicate: Function): T</code> <table><thead><tr><th>Description</th></tr></thead><tbody><tr><td>Recursively replaces values in an object with their corresponding path. The <code dir="auto">predicate</code> function is used to modify the path value.</td></tr></tbody></table>

 <code dir="auto">WMLUIPropertyDecorator(target: any, key: any)</code> <table><thead><tr><th>Description</th></tr></thead><tbody><tr><td>Obsolete decorator for handling UI properties.</td></tr></tbody></table>



## Changelog

v0.9.4
added WMLQueue just a regular Queue data structure thats all

v0.9.5
added index accessing for WMLQueue



### 0.10.0

add generateRandomNumber, generateRandomColor,and selectRandomOptionFromArraywml



### 0.10.1

returned the ref created by addCustomComponent



### 0.10.2

WMLAPIPaginationRequestModel[“sort”][number][“direction”] enums are now “ASC” |“DESC” | ""



### 0.10.3

add WMLAPIPaginationResponseModel[“columns”] of type

<code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">Array</span><span style="--0:#D6DEEB;--1:#403F53">&lt;{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">value</span><span style="--0:#7FDBCA;--1:#097174">:</span><span style="--0:#C5E478;--1:#3C63B3">string</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">type</span><span style="--0:#7FDBCA;--1:#097174">?:</span><span style="--0:#C5E478;--1:#3C63B3">string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">}&gt;</span></div></div></code>

to provide the developer column information



### 0.10.4

made  WMLAPIPaginationResponseModel[“data”] Array generic



### 0.10.5

added generateClassPrefix method  to functions



### 0.10.6

updated Function signatuire on WMLUIProperty##click so the event option is optional

### 0.11.0

provided WMLNGXTranslateLoader to work with ngx-translateprovided WMLModuleForRootProps to work with

### 0.11.1

attempting to deal with an issue where numbers are being returned if no feature is present

### 1.0.0

major change
functions##addCustomComponent ref.instance.ngOnInit?.() only gets called if the angular versions is less than 14.1.0

### 1.1.0

minor changeadded WMLDeepPartial, a utility types that will make all your nested properties optionalmodified WMLNGXTranslateLoader##i18nLocation to return undefined so numbers dont turn to the indexes of the string

### 2.0.0

MAJOR rename to angular-three

### 2.1.1

added fn replaceValuesWithPaths which will recursively go through an object and return a new obj with its values in path representation great for i18n

### 2.1.2

made a fix in genearate random color, where some times 5 digits where returned

### 2.2.0

WMLUIProperty.id by default is "" should help with type should hurt if your code depends on it it is still optional

### 2.2.3

generateClassPrefix prefix parameter supports ="" as default use case,ids and will remove the subsequent _ if its thereWMLUIProperty[“id”] default param is ""

### 16.2.5-0

provided access to WMLOptionsProps to the the container cpnt

### 16.2.70

wmlapipaginationrequestmodel##filter[].value is now the any type
%!(EXTRA string=

### v16.2.80

updated package to reflect the version  16.2.80 of @angular/core package),

### v16.2.80

updated package to reflect the version  16.2.80 of @angular/core package,

### v16.2.90

updated package to reflect the version  16.2.90 of @angular/core package,

### v16.2.91

updated package to reflect the version  16.2.91 of @angular/core package

### 16.2.92

provided spyOnForES6Imports, which finally allows you to spyOnFunctions on es6 imports however refer to the stack overflow project on how to[configure your angular app](https://stackoverflow.com/a/77298152/7513181)in order to get this to work it will not work alone*in test.ts

<code><div class="ec-line"><div class="code"><span style="--0:#7FDBCA;--1:#097174">...</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">const { </span><span style="--0:#82AAFF;--1:#3C63B3">defineProperty</span><span style="--0:#C792EA;--1:#8D46B4"> } = </span><span style="--0:#D6DEEB;--1:#403F53">Object;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">Object</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">defineProperty</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8D46B4">=</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8D46B4">function</span><span style="--0:#D9F5DD;--1:#111111">(</span><span style="--1:#403F53"><span style="--0:#D7DBE0">object</span><span style="--0:#D6DEEB">, </span><span style="--0:#D7DBE0">name</span><span style="--0:#D6DEEB">, </span><span style="--0:#D7DBE0">meta</span></span><span style="--0:#D9F5DD;--1:#111111">)</span><span style="--0:#D6DEEB;--1:#403F53"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#C792EA;--1:#8D46B4">if</span><span style="--0:#D6DEEB;--1:#403F53"> (meta</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#7FDBCA;--1:#097174">get</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8D46B4">&amp;&amp;</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8D46B4">!</span><span style="--0:#D6DEEB;--1:#403F53">meta</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#7FDBCA;--1:#097174">configurable</span><span style="--0:#D6DEEB;--1:#403F53">) {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#809191;--1:#5E6578">// it might be an ES6 exports object</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#C792EA;--1:#8D46B4">return</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">defineProperty</span><span style="--0:#D6DEEB;--1:#403F53">(object</span><span style="--0:#7690A6;--1:#4F687D">,</span><span style="--0:#D6DEEB;--1:#403F53"> name</span><span style="--0:#7690A6;--1:#4F687D">,</span><span style="--0:#D6DEEB;--1:#403F53"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#7FDBCA;--1:#097174">...</span><span style="--0:#D6DEEB;--1:#403F53">meta</span><span style="--0:#7690A6;--1:#4F687D">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">configurable: </span><span style="--0:#FF5874;--1:#A54A4A">true</span><span style="--0:#7690A6;--1:#4F687D">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">});</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#C792EA;--1:#8D46B4">return</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">defineProperty</span><span style="--0:#D6DEEB;--1:#403F53">(object</span><span style="--0:#7690A6;--1:#4F687D">,</span><span style="--0:#D6DEEB;--1:#403F53"> name</span><span style="--0:#7690A6;--1:#4F687D">,</span><span style="--0:#D6DEEB;--1:#403F53"> meta);</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">};</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#7FDBCA;--1:#097174">...</span></div></div><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">getTestBed</span><span style="--0:#D6DEEB;--1:#403F53">()</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">initTestEnvironment</span><span style="--0:#D6DEEB;--1:#403F53">(</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">BrowserDynamicTestingModule,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#82AAFF;--1:#3C63B3">platformBrowserDynamicTesting</span><span style="--0:#D6DEEB;--1:#403F53">()</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">);</span></div></div></code>

tsconfig.spec.json<code><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">...</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#ECC48D;--1:#9B504E">compilerOptions</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#D6DEEB;--1:#403F53">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#7FDBCA;--1:#097174">&#34;outDir&#34;</span><span style="--0:#D6DEEB;--1:#403F53">: </span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#C789D6;--1:#7F5889">./out-tsc/spec</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#7FDBCA;--1:#097174">&#34;types&#34;</span><span style="--0:#D6DEEB;--1:#403F53">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#C789D6;--1:#7F5889">jasmine</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#D6DEEB;--1:#403F53">,</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#C789D6;--1:#7F5889">node</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#7FDBCA;--1:#097174">&#34;module&#34;</span><span style="--0:#D6DEEB;--1:#403F53">: </span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#C789D6;--1:#7F5889">commonjs</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">},</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">...</span></div></div></code>



### 16.2.93

added mockDeclarations to wmltestutils so users can add their declarations
,

### v16.2.93

updated package to conform with @windmillcode/angular-three for unit testing features  ,

### v16.2.100

updated package to conform with @windmillcode/angular-three for unit testing features  ,

### v16.2.110

updated package to conform with @windmillcode/angular-three for unit testing features

### v16.2.112

update type inference for replaceValuesWithPaths to be more friendly

### v16.2.113

added createBasicObservableError and WMLTestHttpHandler for interceptor test cases and throwing observable errors
,

### v16.2.120

updated package to conform with @windmillcode/angular-three for unit testing features  ,

### v17.0.10

updated package to conform with @windmillcode/angular-three for unit testing features  ,

### v17.0.11

updated package to conform with @windmillcode/angular-three for unit testing features  ,

### v17.0.20

updated package to reflect the version  ^17.0.2 of @angular/core package

### v17.0.21

added data-source-utils.ts to help with pagination and data source logic
,

### v17.0.40

updated package to reflect the version  ^17.0.4 of @angular/core package,

### v17.0.50

updated package to reflect the version  ^17.0.5 of @angular/core package,

### v17.0.60

updated package to reflect the version  ^17.0.6 of @angular/core package,

### v17.0.70

updated package to reflect the version  ^17.0.7 of @angular/core package

### v17.0.7300

added WMLAnimateUIProperty as the basis for all entities meant to be animated,



### v17.0.7300

updated package to conform with @windmillcode/angular-three
,

### v17.0.8300

updated package to conform with @windmillcode/angular-three   ,

### v17.0.7300

updated package to conform with @windmillcode/angular-three   ,

### v17.0.80

updated package to reflect the version  ^17.0.8 of @angular/core package

### v17.0.8100

prevented animation end event from propagating to child events, given the children are not exactly the same as the parent,
,

### v17.0.8100

updated package to conform with @windmillcode/angular-three

### v17.0.8102

added WMLAnimateUIProperty[“helperStyles”] to help animations run more smootly its value is<code><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">helperStyles:WMLUIProperty[</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#ECC48D;--1:#9B504E">style</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#D6DEEB;--1:#403F53">]</span><span style="--0:#C792EA;--1:#8D46B4">=</span><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">transform:</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#ECC48D;--1:#9B504E">translate3d(0,0,0)</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code>

and you can overwrite it as necessary
,



### v17.0.8103

updated package to conform with @windmillcode/angular-three
,

### v17.0.9000

updated package to conform with @windmillcode/angular-three

### v17.0.9001

added generateIdPrefix
,

### v17.0.9000

updated package to conform with @windmillcode/angular-three   ,

### v17.0.9001

updated package to conform with @windmillcode/angular-three   ,

### v17.1.0000

updated package to reflect the version  ^17.1.0 of @angular/core package

### v17.1.2

[BREAKING CHANGE] added WMLAnimateUIProperty.autoOpen, by default animations dont don anything
if you need your animations to autoOpen simply go through all your class instances and make the update,



### v17.1.2

updated package to conform with @windmillcode/angular-three   ,

### v17.1.1000

updated package to conform with @windmillcode/angular-three   ,

### v17.1.2000 [2/5/24]

updated package to reflect the version  ^17.1.2 of @angular/core package

### v17.1.2001 [2/8/24]

added toggle functionality for updateClassString
,

### v17.1.2001 [2/8/24]

updated package to conform with @windmillcode/angular-three   ,

### v17.1.3001 [2/8/24]

updated package to reflect the version  ^17.1.3 of @angular/core package,

### v17.1.3000 [2/8/24]

updated package to reflect the version  ^17.1.3 of @angular/core package,

### v17.2.1000 [2/17/24]

updated package to reflect the version  ^17.2.1 of @angular/core package,

### v17.2.2000 [2/23/24]

updated package to reflect the version  ^17.2.2 of @angular/core package,

### v17.2.2001 [2/23/24]

updated package to reflect the version  ^17.2.2 of @angular/core package,

### v17.2.3000 [2/28/24]

updated package to reflect the version  ^17.2.3 of @angular/core package

### v17.2.3001 [3/22/24]

created WMLComponentBaseZero which shortens and hides the complex logic of
our WMLComponentsNew FeaturesIntroduced <code dir="auto">WMLComponentBaseZero</code> , a new base class designed to simplify and encapsulate the complex logic associated with WML components. This enhancement aims to provide a cleaner and more intuitive interface for working with WML components.Enhancements in <code dir="auto">component-base.ts</code> :**Refactored <code dir="auto">WMLComponentBaseZeroProps</code> :**

Transitioned from a traditional class-based approach to a mixin-based pattern using <code dir="auto">WMLComponentBaseZeroPropsMixin</code> . This change is intended to enhance flexibility and reusability across different component implementations.The mixin <code dir="auto">WMLComponentBaseZeroPropsMixin</code> is now used to dynamically extend a base class, incorporating custom properties and methods essential for WML components.Introduced a new <code dir="auto">setState</code> method within the mixin, providing a streamlined way to update component state.**Introduced <code dir="auto">WMLComponentBaseZero</code> :**

This new base class leverages <code dir="auto">WMLComponentBaseZeroProps</code> to offer a robust foundation for component development.The constructor now initializes class and ID prefixes if they are provided, enabling more consistent and predictable styling and DOM structure.Enhanced the <code dir="auto">listenForSetState</code> method to work seamlessly with the new state management approach, ensuring changes are propagated efficiently and reliably.Key Changes to Note:The <code dir="auto">listenForSetState</code> method now listens to changes from <code dir="auto">setStateSubj</code> , aligning with the new state management strategy.Destructor ( <code dir="auto">ngOnDestroy</code> ) logic has been updated to ensure proper cleanup, reducing the risk of memory leaks and ensuring better resource management.Usage:To leverage the new <code dir="auto">WMLComponentBaseZero</code> , extend your components from this base class and utilize the provided mechanisms for state management and lifecycle handling.The mixin approach offers enhanced customization, allowing developers to inject additional properties or methods as needed.Recommendations:Review the updated implementation details in <code dir="auto">WMLComponentBaseZero</code> and <code dir="auto">WMLComponentBaseZeroPropsMixin</code> to fully understand the new component structure and behavior.Test your components thoroughly to ensure compatibility with the new base class and to leverage the improvements in state management and lifecycle handling.This update signifies our commitment to improving the developer experience and streamlining component development within the WML ecosystem.
,



### v17.2.3001 [3/2/24]

updated package to conform with @windmillcode/angular-three

### v17.2.3002 [3/5/24]

[UPDATE] Added a new <code dir="auto">fields</code> array of type <code dir="auto">Array&lt;{value:any}&gt;</code> to the <code dir="auto">WMLAPIPaginationRequestModel</code> class in <code dir="auto">data-source-utils.ts</code> . This new field is designed to hold additional data fields that may be required during pagination requests.

[PATCH] Modified the <code dir="auto">animationEnd</code> method in the <code dir="auto">WMLAnimateUIProperty</code> class within <code dir="auto">models.ts</code> . The condition now removes any spaces from <code dir="auto">this.animationClass</code> before checking its presence in the event target’s className. This ensures the animation end logic accurately identifies the target regardless of space characters in the class name.
,



### v17.2.3002 [3/5/24]

updated package to conform with @windmillcode/angular-three   ,

### v17.2.4000 [3/8/24]

updated package to reflect the version  ^17.2.4 of @angular/core package

### v17.2.4002 [3/12/24]

[PATCH] In <code dir="auto">three/src/lib/component-base.ts</code> , added a new <code dir="auto">ReplaySubject</code> called <code dir="auto">setStateEvent</code> , which enhances state management within the component. Also adjusted the RxJS pipe in the <code dir="auto">setState</code> method to include an additional operation that emits the updated state to <code dir="auto">setStateEvent</code> , improving the reactivity of the component state.,



### v17.2.4002 [3/12/24]

updated package to conform with @windmillcode/angular-three   ,

### v17.2.4003 [3/13/24]

updated package to conform with @windmillcode/angular-three   ,

### v17.2.4004 [3/13/24]

updated package to conform with @windmillcode/angular-three   ,

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

updated package to reflect the version  ^17.3.4 of @angular/core package

### v17.3.4001 [4/16/24]

added onError to wmlimage prperty
,

### v17.3.4001 [4/16/24]

updated package to conform with @windmillcode/angular-three   ,

### v17.3.5000 [4/20/24]

updated package to reflect the version  ^17.3.5 of @angular/core package

### v17.3.5110 [4/20/24]

[UPDATE] ensure dervied class passed type to base classes
Updated models.ts by add the WMLConstructorDecorator function, to streamline and optimize object initialization practices within the framework.<code><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#82AAFF;--1:#3C63B3">constructor</span><span style="--0:#D6DEEB;--1:#403F53">(props:Partial</span><span style="--0:#C792EA;--1:#8D46B4">&lt;</span><span style="--0:#82AAFF;--1:#3C63B3">T</span><span style="--0:#C792EA;--1:#8D46B4">&gt;=</span><span style="--0:#D6DEEB;--1:#403F53">{}){</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#C792EA;--1:#8D46B4">let </span><span style="--0:#D6DEEB;--1:#403F53">origProps</span><span style="--0:#C792EA;--1:#8D46B4"> = </span><span style="--0:#D6DEEB;--1:#403F53">Object</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">entries</span><span style="--0:#D6DEEB;--1:#403F53">(props)</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">filter</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#D9F5DD;--1:#111111">(</span><span style="--0:#C792EA;--1:#8D46B4">[</span><span style="--0:#D7DBE0;--1:#403F53">key</span><span style="--0:#C792EA;--1:#8D46B4">, </span><span style="--0:#D7DBE0;--1:#403F53">val</span><span style="--0:#C792EA;--1:#8D46B4">]</span><span style="--0:#D9F5DD;--1:#111111">)</span><span style="--0:#C792EA;--1:#8D46B4"> =&gt; {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#C792EA;--1:#8D46B4">      </span></span><span style="--0:#C792EA;--1:#8D46B4">return !</span><span style="--0:#D6DEEB;--1:#403F53">key</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">startsWith</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#D9F5DD;--1:#111111">&#39;</span><span style="--0:#ECC48D;--1:#9B504E">param</span><span style="--0:#D9F5DD;--1:#111111">&#39;</span><span style="--0:#D6DEEB;--1:#403F53">)</span><span style="--0:#C792EA;--1:#8D46B4">;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#C792EA;--1:#8D46B4">    </span></span><span style="--0:#C792EA;--1:#8D46B4">}</span><span style="--0:#D6DEEB;--1:#403F53">);</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">Object</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">assign</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#7FDBCA;--1:#097174">this</span><span style="--0:#D6DEEB;--1:#403F53">, { </span><span style="--0:#7FDBCA;--1:#097174">...</span><span style="--0:#D6DEEB;--1:#403F53">Object</span><span style="--0:#C792EA;--1:#8D46B4">.</span><span style="--0:#82AAFF;--1:#3C63B3">fromEntries</span><span style="--0:#D6DEEB;--1:#403F53">(origProps) });</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code>

so as not to overwhelm developers
to use

<code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">@</span><span style="--0:#D6DEEB;--1:#403F53">WMLConstructorDecorator</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8D46B4">export</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8D46B4">class</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#FFCB8B;--1:#111111">T</span><span style="--0:#D6DEEB;--1:#403F53"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#82AAFF;--1:#3C63B3">constructor</span><span style="--0:#D9F5DD;--1:#111111">(</span><span style="--0:#D7DBE0;--1:#403F53">props</span><span style="--0:#7FDBCA;--1:#097174">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#FFCB8B;--1:#111111">Partial</span><span style="--0:#D6DEEB;--1:#403F53">&lt;</span><span style="--0:#FFCB8B;--1:#111111">T</span><span style="--0:#D6DEEB;--1:#403F53">&gt; </span><span style="--0:#C792EA;--1:#8D46B4">=</span><span style="--0:#D6DEEB;--1:#403F53"> {}</span><span style="--0:#D9F5DD;--1:#111111">)</span><span style="--0:#D6DEEB;--1:#403F53"> { }</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code>

,



### v17.3.5110 [5/1/24]

updated package to conform with @windmillcode/angular-three   ,

### v17.3.6000 [5/1/24]

updated package to reflect the version  ^17.3.6 of @angular/core package,

### v17.3.7000 [5/4/24]

updated package to reflect the version  ^17.3.7 of @angular/core package,

### v17.3.7000 [5/9/24]

updated package to reflect the version  ^17.3.7 of @angular/core package,

### v17.3.8000 [5/9/24]

updated package to reflect the version  ^17.3.8 of @angular/core package,

### v17.3.9000 [5/16/24]

updated package to reflect the version  ^17.3.9 of @angular/core package,

### v18.0.0 [5/22/24]

updated package to reflect the version  ^18.0.0 of @angular/core package,

### v18.0.1 [5/22/24]

updated package to reflect the version  ^18.0.0 of @angular/core package

### v18.0.4 [5/25/2024 12:50:12 AM EST]

[UPDATE] Modified replaceValuesWithPaths function in functions.ts to include a predicate for custom assignments.

File: functions.ts
Section: replaceValuesWithPaths
Function: replaceValuesWithPaths()
,



### v18.0.4 [5/25/24]

updated package to conform with @windmillcode/angular-three   ,

### v18.0.1000 [5/29/24]

updated package to reflect the version  ^18.0.1 of @angular/core package
,

### v18.0.2000 [6/6/24]

updated package to reflect the version  ^18.0.2 of @angular/core package,

### v18.0.3000 [6/13/24]

updated package to reflect the version  ^18.0.3 of @angular/core package,

### v18.0.3000 [6/13/24]

updated package to reflect the version  ^18.0.3 of @angular/core package,

### v18.0.3000 [6/13/24]

updated package to reflect the version  ^18.0.3 of @angular/core package

### v18.0.3010 [6/18/2024 ]

[FIX] <code dir="auto">projects/three/src/lib/models.ts</code> - <code dir="auto">WMLConstructorDecorator</code> function: Added <code dir="auto">props</code> to <code dir="auto">this.wmlInit?.(props)</code> . This means developers can now pass <code dir="auto">props</code> to <code dir="auto">wmlInit</code> .
,

### v18.0.3010 [6/18/24]

updated package to conform with @windmillcode/angular-three   ,

### v18.0.3010 [6/18/24]

updated package to conform with @windmillcode/angular-three   ,

### v18.0.4010 [6/23/24]

updated package to conform with @windmillcode/angular-three   ,

### v18.0.4000 [6/23/24]

updated package to conform with @windmillcode/angular-three   ,

### v18.0.4000 [6/23/24]

updated package to conform with @windmillcode/angular-three   ,

### v18.0.5000 [6/26/24]

updated package to reflect the version  ^18.0.5 of @angular/core package,

### v18.0.6000 [7/5/24]

updated package to reflect the version  ^18.0.6 of @angular/core package,

### v18.1.0 [7/10/24]

updated package to reflect the version  ^18.1.0 of @angular/core package,

### v18.1.0 [7/13/24]

updated package to reflect the version  ^18.1.0 of @angular/core package,

### v18.1.3000 [7/13/24]

updated package to reflect the version  ^18.1.0 of @angular/core package,

### v18.1.3 [7/13/24]

updated package to reflect the version  ^18.1.0 of @angular/core package,

### v18.1.4 [7/13/24]

updated package to reflect the version  ^18.1.0 of @angular/core package,

### v18.1.4 [7/13/24]

updated package to reflect the version  ^18.1.0 of @angular/core package

### v18.1.6 [7/14/24]

[FIX] fixed an error with WMLConstructorDecorator where WMLInit was not being called
,

### v18.1.6 [7/14/24]

updated package to conform with @windmillcode/angular-three   ,

### v18.1.6 [7/14/24]

updated package to conform with @windmillcode/angular-three   ,

### v18.1.1000 [7/18/24]

updated package to reflect the version  ^18.1.1 of @angular/core package,

### v18.1.2000 [7/24/24]

updated package to reflect the version  ^18.1.2 of @angular/core package

### v18.1.2300

7/27/2024 02:15:42 PM EST

[update] WMLRoute now extends WMLView in models.ts. If you were using WMLRoute, you now have access to WMLView’s properties, like cdref.

[update] Added new properties link and routerLink to WMLRoute in models.ts. This gives more flexibility for routing in your components.

[UPDATE] Changed WMLImage class to extend WMLRoute instead of WMLUIProperty in models.ts. This means WMLImage now includes routing properties route, link, and routerLink as well as cdref from WMLView
,



### v18.1.2230 [7/27/24]

updated package to conform with @windmillcode/angular-three   ,

### v18.1.2300 [7/27/24]

updated package to conform with @windmillcode/angular-three   ,

### v18.1.2301 [7/30/24]

updated package to conform with @windmillcode/angular-three

### v18.1.3000 []

[MAJOR BREAKING CHANGES]WMLUIProperty id attribute is undefined by default this is for accessbility and QA so values are not all defined with ""
,

### v18.1.3000-beta0 [8/1/24]

updated package to conform with @windmillcode/angular-three   ,

### v18.1.3000-beta1 [8/1/24]

updated package to conform with @windmillcode/angular-three   ,

### v18.1.3000-beta2 [8/1/24]

updated package to conform with @windmillcode/angular-three   ,

### v18.1.3000-beta3 [8/1/24]

updated package to conform with @windmillcode/angular-three   ,

### v18.1.3000-beta4 [8/1/24]



### v18.1.3000-beta13 [8/4/24]

updated package to conform with @windmillcode/angular-three

### v18.1.3001 [8/4/24]

updated package to conform with @windmillcode/angular-three

### v18.1.3001 [8/4/24]

updated package to conform with @windmillcode/angular-three

### v18.1.3002 [8/4/24]

updated package to conform with @windmillcode/angular-three

### v18.1.3002 [8/5/24]

updated package to conform with @windmillcode/angular-three

### v18.1.3003 [8/5/24]

updated package to conform with @windmillcode/angular-three

### v18.1.3004 [8/5/24]

updated package to conform with @windmillcode/angular-three

### v18.1.3005 [8/5/24]

updated package to conform with @windmillcode/angular-three

### v18.1.3006 [8/5/24]

updated package to conform with @windmillcode/angular-three

### v18.1.3007 [8/5/24]

updated package to conform with @windmillcode/angular-three

### v18.1.4000 [8/14/24]

updated package to conform with @windmillcode/angular-three

### v18.1.4001 [8/14/24]

updated package to conform with @windmillcode/angular-three

### v18.2.0 [8/15/24]

updated package to conform with @windmillcode/angular-three

### v18.2.1 [8/20/24]

[BREAKING CHANGE] removed WMLButton and WMLButton2 use WMLButtonOneProps for WMLButton and WMLButtonZeroProps for WMLButton2

### v18.2.1 [8/20/24]

updated package to reflect the version  18.2.0 of @angular/core package

### v18.2.1 [8/20/24]

updated package to conform with @windmillcode/angular-three

### v18.2.1000 [8/22/24]

updated package to reflect the version  18.2.1 of @angular/core package

### v18.2.2000 [8/30/24]

updated package to reflect the version  18.2.2 of @angular/core package

### v18.2.2100 [9/1/2024]

[BREAKING CHANGE] <code dir="auto">projects/three/src/lib/models.ts</code> WMLAnimateUIProperty logic has changed to become more compact. Removed animationClass,beginOpenStyles beginCloseStyles endOpenStyles endCloseStyles animationClass , now using <code dir="auto">keyFrameName</code> and <code dir="auto">keyFrameStyles</code> instead. Your animations might break if you were relying on the class name. Update your code to use <code dir="auto">keyFrameName</code> .

[UPDATE] <code dir="auto">projects/three/src/lib/models.ts</code> Added <code dir="auto">keyFrameName</code> to name your keyframe. Every keyframe name must be unique. If you don’t follow this rule, you’ll get an error.

[UPDATE] <code dir="auto">projects/three/src/lib/models.ts</code> WMLAnimateUIProperty has <code dir="auto">injectKeyframes</code> method now generates and inserts keyframes based on <code dir="auto">keyFrameName</code> .



### v18.2.2101 [9/1/2024]

[UPDATE] IF  WMLAnimateUIProperty.keyFrameName is left out an internal one is generated



### v18.2.2200 [9/3/24]

[BREAKING CHANGE] WMLAnimateUIProperty is now WMLMotionUIProperty and anywhere you see animate on the class (careful not to confuse with css) change to motion

### v18.2.2200 [9/3/24]

updated package to conform with @windmillcode/angular-three

### v18.2.3000 [9/4/24]

updated package to reflect the version  18.2.3 of @angular/core package

### v18.2.3100 [9/8/24]

[BREAKING CHANGE] seperated angular features from core library to angular-three
moving WMLComponentBaseZeroPropsMixin, WMLComponentBaseZeroProps, WMLComponentBaseZero,addCustomComponent, WMLNGXTranslateLoader,WMLTestUtils to the angular base library
deleting WMLModuleForRootProps

### v18.2.3110 [9/10/2024 1:45:22 PM EST]

[UPDATE] Added new global object management functions <code dir="auto">updateGlobal</code> and <code dir="auto">getGlobalObject</code> in <code dir="auto">functions.ts</code> . This gives developers access to globally update and retrieve the framework’s global object easily.

[UPDATE] Added a new <code dir="auto">WMLUIGlobal</code> class in <code dir="auto">models.ts</code> to represent the global configuration options for the library

[FIX] All references to <code dir="auto">WMLUIProperty.framework</code> have been replaced with <code dir="auto">getGlobalObject().WINDMILLCODE.framework.name</code> . Developers should now use the global framework object instead of relying on the static <code dir="auto">WMLUIProperty.framework</code> .



### v18.2.3110 [9/10/24]

updated package to conform with @windmillcode/angular-three

### v18.2.3110 [9/10/24]

updated package to conform with @windmillcode/angular-three

### v18.2.3111 [9/10/24]

updated package to conform with @windmillcode/angular-three

### v18.2.3112 [9/10/24]

updated package to conform with @windmillcode/angular-three

### v18.2.4000 [9/16/24]

updated package to reflect the version  18.2.4 of @angular/core package[](/Windmillcode-Angular-CDK-Docs/18.2.3100/intro/wml-angular-components-base)
