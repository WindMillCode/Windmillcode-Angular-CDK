# WML Components Base

[starlightViewModes.switchTo](/Windmillcode-Angular-CDK-Docs/zen-mode/19.0.0/intro/wml-components-base)function h(){const t=window.location.hash;document.querySelectorAll(".starlight-view-modes-switcher-a").forEach(e=>{e.href&&(e.href=e.href.split("#")[0]+t)})}h();window.addEventListener("hashchange",h);When working on web applications, there is no standard baseline. The  WML Components Base Library establishes a foundation for your application, ensuring consistency and scalability. The core of this library is the <code dir="auto">WMLUIProperty</code> , which represents the basic building block of every element in a web application. This property encapsulates all the essential features, and there are several subclasses like <code dir="auto">WMLRoute</code> for routes, <code dir="auto">WMLView</code> to leverage change detection, <code dir="auto">WMLImage</code> for images  and <code dir="auto">WMLMotionUIProperty</code> for CSS animations and transitions. Each class has properties and methods to optimize your work in those features of  your application. You can use this package and leave out the rest of the library and you will get very far building very robust and scalable applications



## Installation

[Section titled “Installation”](#installation)Terminal window <code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3B61B0">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">-s</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">--verbose</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">@windmillcode/wml-components-base</span></div></div></code> 

## Usage

[Section titled “Usage”](#usage)

### [WMLUIProperty](#wml-ui-property)

[Section titled “WMLUIProperty”](#wmluiproperty)**The Building Blocks Of Web Apps**

<iframe src="https://stackblitz.com/edit/stackblitz-starters-ypqdk7?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### [WMLMotionUIProperty](#wml-motion-ui-property)

[Section titled “WMLMotionUIProperty”](#wmlmotionuiproperty)**Using CSS Animations**

<iframe src="https://stackblitz.com/edit/stackblitz-starters-bvamvi?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>**[Decent Example](#wml-motion-ui-property-decent-example)**

if you want a different animation for you animation states simply use a different keyframe mabye suffixing the keyframes with open and close for organization<iframe src="https://stackblitz.com/edit/stackblitz-starters-xkprmk?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>**[Pause And Play](#wml-motion-ui-property-pause-and-play)**

if you want a different animation for you animation states simply use a different keyframe mabye suffixing the keyframes with open and close for organization<iframe src="https://stackblitz.com/edit/stackblitz-starters-8ts1nz?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Using CSS transitions

[Section titled “Using CSS transitions”](#using-css-transitions)the percentage values at the keyframe styles for transtions are only conceptual becuase there are no percentage values with css transitionsif you pause and play the transition it will not reset the element it was transitioning, but the timer and transition function will reset to their beginning stages**[WMLMotionUIProperty Transition Simple Example](#wml-motion-ui-property-transition-simple-example)**

<iframe src="https://stackblitz.com/edit/stackblitz-starters-779xe4?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>**[WMLMotionUIProperty Transition Decent Example](#wml-motion-ui-property-transition-decent-example)**

<iframe src="https://stackblitz.com/edit/stackblitz-starters-y2crdv?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>**[WMLMotionUIProperty Transition Full Example](#wml-motion-ui-property-transition-full-example)**

<iframe src="https://stackblitz.com/edit/stackblitz-starters-779xe4?ctl=1&embed=1&file=src%2Fmain.ts" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### [WMLCustomComponent](#wml-custom-component)

[Section titled “WMLCustomComponent”](#wmlcustomcomponent)**Custom Components**

<iframe src="https://stackblitz.com/edit/stackblitz-starters-kmsw3c?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

## References

[Section titled “References”](#references)

### WMLUIProperty

[Section titled “WMLUIProperty”](#wmluiproperty-1)<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">isPresent</code></td><td><code dir="auto">boolean</code></td><td>Indicates if the UI property is currently present.</td></tr><tr><td><code dir="auto">value</code></td><td><code dir="auto">any</code></td><td>The value associated with this UI property.</td></tr><tr><td><code dir="auto">text</code></td><td><code dir="auto">string</code></td><td>The text associated with this property.</td></tr><tr><td><code dir="auto">class</code></td><td><code dir="auto">string</code></td><td>CSS class string for the property.</td></tr><tr><td><code dir="auto">style</code></td><td><code dir="auto">Partial&lt;CSSStyleDeclaration&gt;</code></td><td>Inline styles for the property.</td></tr><tr><td><code dir="auto">type</code></td><td><code dir="auto">any</code></td><td>The type of UI element (optional).</td></tr><tr><td><code dir="auto">click</code></td><td><code dir="auto">(evt?: Event) =&gt; void</code></td><td>Function to handle click events.</td></tr><tr><td><code dir="auto">id</code></td><td><code dir="auto">string</code></td><td>Unique identifier for the UI property.</td></tr></tbody></table>



### Methods

[Section titled “Methods”](#methods)<table><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">updateClassString</code></td><td>Updates the class string based on the current state.</td></tr><tr><td><code dir="auto">toggleClassString</code></td><td>Toggles a class string on or off.</td></tr></tbody></table>



###  <code dir="auto">WMLUIGlobal</code> 

[Section titled “WMLUIGlobal”](#wmluiglobal)<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>framework</td><td><code dir="auto">Framework</code></td><td>Holds the detected framework information.</td></tr></tbody></table>



###  <code dir="auto">framework</code> 

[Section titled “framework”](#framework)<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>name</td><td><code dir="auto">WMLUIFrameworkType</code></td><td>The name of the detected UI framework.</td></tr></tbody></table>



### WMLEndpoint

[Section titled “WMLEndpoint”](#wmlendpoint)<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">url</code></td><td><code dir="auto">Function</code></td><td>Function that defines the endpoint’s URL.</td></tr><tr><td><code dir="auto">automate</code></td><td><code dir="auto">boolean</code></td><td>Indicates whether to automate API requests for the endpoint.</td></tr></tbody></table>



###  <code dir="auto">WMLUri</code> 

[Section titled “WMLUri”](#wmluri)<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">url</code></td><td><code dir="auto">URL</code></td><td>Stores the constructed URL object based on provided properties.</td></tr></tbody></table>



###  <code dir="auto">Methods</code> 

[Section titled “Methods”](#methods-1)<table><thead><tr><th>Name</th><th>Signature</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">domain</code></td><td><code dir="auto">get domain(): string</code></td><td>Retrieves the domain, including port if present.</td></tr><tr><td><code dir="auto">fqdn</code></td><td><code dir="auto">get fqdn(): string</code></td><td>Returns the fully qualified domain name (FQDN).</td></tr><tr><td><code dir="auto">toString</code></td><td><code dir="auto">toString(): string</code></td><td>Converts the URL object to a string.</td></tr></tbody></table>



###  <code dir="auto">WMLUri Constructor Parameters</code> 

[Section titled “WMLUri Constructor Parameters”](#wmluri-constructor-parameters)<table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">scheme</code></td><td><code dir="auto">string</code></td><td>Optional, defaults to <code dir="auto">&#34;https&#34;</code>.</td></tr><tr><td><code dir="auto">host</code></td><td><code dir="auto">string</code></td><td>Required, specifies the host name.</td></tr><tr><td><code dir="auto">port</code></td><td><code dir="auto">number</code></td><td>Optional, specifies the port.</td></tr><tr><td><code dir="auto">path</code></td><td><code dir="auto">string</code></td><td>Optional, specifies the path.</td></tr><tr><td><code dir="auto">query</code></td><td><code dir="auto">string</code></td><td>Optional, specifies the query.</td></tr><tr><td><code dir="auto">fragment</code></td><td><code dir="auto">string</code></td><td>Optional, specifies the fragment.</td></tr></tbody></table>



### WMLView

[Section titled “WMLView”](#wmlview)<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">angular</code></td><td><code dir="auto">any</code></td><td>Object containing Angular-specific properties like <code dir="auto">cdref</code>.</td></tr><tr><td><code dir="auto">cdref</code></td><td><code dir="auto">any</code></td><td>Angular’s ChangeDetectorRef, used for detecting changes in Angular applications (deprecated).</td></tr></tbody></table>



### Methods

[Section titled “Methods”](#methods-2)<table><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">get cdref</code></td><td>Retrieves the ChangeDetectorRef from the Angular-specific properties (deprecated).</td></tr><tr><td><code dir="auto">set cdref</code></td><td>Sets the ChangeDetectorRef in the Angular-specific properties (deprecated).</td></tr></tbody></table>



### angular

[Section titled “angular”](#angular)<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">cdref</code></td><td><code dir="auto">any</code></td><td>Angular’s ChangeDetectorRef used for change detection in Angular applications.</td></tr></tbody></table>



### WMLRoute

[Section titled “WMLRoute”](#wmlroute)<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">route</code></td><td><code dir="auto">string</code></td><td>Defines the route for the application, default is ”/”.</td></tr><tr><td><code dir="auto">link</code></td><td><code dir="auto">string</code></td><td>Optional link associated with the route.</td></tr><tr><td><code dir="auto">routerLink</code></td><td><code dir="auto">string</code></td><td>Optional router link for navigation.</td></tr></tbody></table>



### WMLMotionUIProperty

[Section titled “WMLMotionUIProperty”](#wmlmotionuiproperty-1)<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">autoOpen</code></td><td><code dir="auto">boolean</code></td><td>Automatically opens the UI element when <code dir="auto">true</code>.</td></tr><tr><td><code dir="auto">helperStyles</code></td><td><code dir="auto">Partial&lt;CSSStyleDeclaration&gt;</code></td><td>Necessary for animations to work properly. Modify only if you know what you are doing.</td></tr><tr><td><code dir="auto">keyFrameStyles</code></td><td><code dir="auto">{ [k: string]: Partial&lt;CSSStyleDeclaration&gt; }</code></td><td>Object defining keyframe styles for animation. Use <code dir="auto">&#34;0%&#34;</code>, <code dir="auto">&#34;10%&#34;</code>, <code dir="auto">&#34;11%&#34;</code>, … <code dir="auto">&#34;100%&#34;</code> according to typical CSS keyframes for the key values.</td></tr><tr><td><code dir="auto">keyFrameName</code></td><td><code dir="auto">string</code></td><td>Name of the unique animation keyframe or unique css transition class .</td></tr><tr><td><code dir="auto">motionState</code></td><td><code dir="auto">&#34;open&#34; | &#34;opening&#34; | &#34;closing&#34; | &#34;closed&#34;</code></td><td>Current state of the motion .</td></tr><tr><td><code dir="auto">motionEndEvent</code></td><td><code dir="auto">any</code></td><td>Function called at the end of an motion state.</td></tr><tr><td><code dir="auto">motionKeyFrameEvent</code></td><td><code dir="auto">any</code></td><td>Function called at specific keyframes during the motion.</td></tr><tr><td><code dir="auto">currentTransitionInfo</code></td><td><code dir="auto">any</code></td><td>Information about the current transition state, including keyframe, current styles, transition end styles, and play state.</td></tr><tr><td><code dir="auto">type</code></td><td><code dir="auto">&#34;animation&#34; | &#34;transition&#34;</code></td><td>The type of motion to use, either CSS animations or CSS transitions.</td></tr><tr><td><code dir="auto">eventType</code></td><td><code dir="auto">&#34;subject&#34; | &#34;callback&#34;</code></td><td>Defines whether the motion events are handled using <code dir="auto">subject</code> (for Angular) or <code dir="auto">callback</code> (for all other JS Environment). This controls how <code dir="auto">motionEndEvent</code> and <code dir="auto">motionKeyFrameEvent</code> are triggered.</td></tr></tbody></table>



### Methods

[Section titled “Methods”](#methods-3)<table><thead><tr><th>Method</th><th>Signature</th><th>Return Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">get keyFrameName</code></td><td><code dir="auto">keyFrameName: string</code></td><td><code dir="auto">string</code></td><td>Retrieves the current keyframe name used for the animation.</td></tr><tr><td><code dir="auto">set keyFrameName</code></td><td><code dir="auto">keyFrameName(name: string): void</code></td><td><code dir="auto">void</code></td><td>Sets a unique keyframe name for the motion animation.</td></tr><tr><td><code dir="auto">getGroupMotionState</code></td><td><code dir="auto">getGroupMotionState(): WMLMotionUIPropertyState</code></td><td><code dir="auto">WMLMotionUIPropertyState</code></td><td>Returns the current motion state of the animation group.</td></tr><tr><td><code dir="auto">motionEndEvent</code></td><td><code dir="auto">motionEndEvent(state: WMLMotionUIPropertyState): void</code></td><td><code dir="auto">void</code></td><td>Function called at the end of an animation state.</td></tr><tr><td><code dir="auto">triggerMotionEndEvent</code></td><td><code dir="auto">triggerMotionEndEvent(motionState?: WMLMotionUIPropertyState): void</code></td><td><code dir="auto">void</code></td><td>Triggers the motion end event with an optional motion state.</td></tr><tr><td><code dir="auto">motionKeyFrameEvent</code></td><td><code dir="auto">motionKeyFrameEvent(keyFrame: string): void</code></td><td><code dir="auto">void</code></td><td>Function called at specific keyframes during transition animations.</td></tr><tr><td><code dir="auto">triggerMotionKeyFrameEvent</code></td><td><code dir="auto">triggerMotionKeyFrameEvent(keyFrame?: string): void</code></td><td><code dir="auto">void</code></td><td>Triggers the motion keyframe event with an optional keyframe.</td></tr><tr><td><code dir="auto">animationEnd</code></td><td><code dir="auto">animationEnd(evt?: AnimationEvent): void</code></td><td><code dir="auto">void</code></td><td>Handles the animation end event and updates the motion state accordingly.</td></tr><tr><td><code dir="auto">transitionEnd</code></td><td><code dir="auto">transitionEnd(evt?: TransitionEvent): void</code></td><td><code dir="auto">void</code></td><td>Handles the transition end event and updates the motion state accordingly.</td></tr><tr><td><code dir="auto">openMotion</code></td><td><code dir="auto">openMotion(): void</code></td><td><code dir="auto">void</code></td><td>Triggers the opening animation.</td></tr><tr><td><code dir="auto">closeMotion</code></td><td><code dir="auto">closeMotion(): void</code></td><td><code dir="auto">void</code></td><td>Triggers the closing animation.</td></tr><tr><td><code dir="auto">pauseMotion</code></td><td><code dir="auto">pauseMotion(): void</code></td><td><code dir="auto">void</code></td><td>Pauses the current motion animation or transition.</td></tr><tr><td><code dir="auto">resumeMotion</code></td><td><code dir="auto">resumeMotion(): void</code></td><td><code dir="auto">void</code></td><td>Resumes the motion animation or transition if it was paused.</td></tr><tr><td><code dir="auto">injectKeyFrames</code></td><td><code dir="auto">injectKeyFrames(): void</code></td><td><code dir="auto">void</code></td><td>Injects custom keyframes for the motion animation into the document’s styles.</td></tr><tr><td><code dir="auto">updateKeyFrames</code></td><td><code dir="auto">updateKeyFrames(props:WMLMotionUIProperty[&#34;keyFrameStyles&#34;]): void</code></td><td><code dir="auto">void</code></td><td>Injects custom keyframes for the motion animation into the document’s styles.</td></tr><tr><td><code dir="auto">createKeyFrameName</code></td><td><code dir="auto">createKeyFrameName(): void</code></td><td><code dir="auto">void</code></td><td>Creates a unique keyframe name for the motion animation.</td></tr><tr><td><code dir="auto">checkForDuplicateKeyFrameNames</code></td><td><code dir="auto">checkForDuplicateKeyFrameNames(): boolean</code></td><td><code dir="auto">boolean</code></td><td>Checks for duplicate keyframe names and returns <code dir="auto">true</code> if a duplicate is found.</td></tr><tr><td><code dir="auto">setupTransitions</code></td><td><code dir="auto">setupTransitions(): void</code></td><td><code dir="auto">void</code></td><td>Sets up transitions for motion when using the <code dir="auto">&#34;transition&#34;</code> type.</td></tr><tr><td><code dir="auto">getElement</code></td><td><code dir="auto">getElement(): Element</code></td><td><code dir="auto">Element</code></td><td>Returns the HTML element associated with this motion property.</td></tr><tr><td><code dir="auto">getTransitionProperties</code></td><td><code dir="auto">getTransitionProperties(): any</code></td><td><code dir="auto">any</code></td><td>Retrieves the transition properties of the element.</td></tr></tbody></table>

 <code dir="auto">currentTransitionInfo</code> [Section titled “currentTransitionInfo”](#currenttransitioninfo)<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">keyframe</code></td><td><code dir="auto">string</code></td><td>Current keyframe percentage (e.g., <code dir="auto">&#34;0%&#34;</code>).</td></tr><tr><td><code dir="auto">currentStyles</code></td><td><code dir="auto">object</code></td><td>Current styles applied to the element.</td></tr><tr><td><code dir="auto">transitionEndStyles</code></td><td><code dir="auto">Array&lt;string&gt;</code></td><td>List of CSS properties that have completed transitioning.</td></tr><tr><td><code dir="auto">playState</code></td><td><code dir="auto">string</code></td><td>Current play state of the transition (e.g., <code dir="auto">&#34;running&#34;</code>, <code dir="auto">&#34;paused&#34;</code>).</td></tr></tbody></table>



### WMLMotionUIPropertyState

[Section titled “WMLMotionUIPropertyState”](#wmlmotionuipropertystate)<table><thead><tr><th>Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">open</code></td><td>The UI element is fully open.</td></tr><tr><td><code dir="auto">opening</code></td><td>The UI element is in the process of opening.</td></tr><tr><td><code dir="auto">closing</code></td><td>The UI element is in the process of closing.</td></tr><tr><td><code dir="auto">closed</code></td><td>The UI element is fully closed.</td></tr></tbody></table>



### WMLCustomComponent

[Section titled “WMLCustomComponent”](#wmlcustomcomponent-1)<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">cpnt</code></td><td><code dir="auto">C</code></td><td>The custom component being wrapped.</td></tr><tr><td><code dir="auto">props</code></td><td><code dir="auto">P</code></td><td>Properties associated with the custom component.</td></tr></tbody></table>



###  <code dir="auto">WMLImage&lt;V=any,T=any&gt;</code> 

[Section titled “WMLImage<V=any,T=any>”](#wmlimagevanytany)<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">src</code></td><td><code dir="auto">string</code></td><td>Source URL for the image.</td></tr><tr><td><code dir="auto">alt</code></td><td><code dir="auto">string</code></td><td>Alt text for accessibility purposes.</td></tr><tr><td><code dir="auto">ariaLabel</code></td><td><code dir="auto">string</code></td><td>ARIA label for screen readers.</td></tr><tr><td><code dir="auto">ariaExpanded</code></td><td><code dir="auto">boolean</code></td><td>Indicates whether the image is in an expanded state. Default is <code dir="auto">false</code>.</td></tr></tbody></table>



###  <code dir="auto">Methods</code> 

[Section titled “Methods”](#methods-4)<table><thead><tr><th>Name</th><th>Signature</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">onError</code></td><td><code dir="auto">(event?: any) =&gt; void</code></td><td>Handles the error event when loading the image.</td></tr><tr><td></td><td></td><td></td></tr></tbody></table>



### WMLE2ETarget

[Section titled “WMLE2ETarget”](#wmle2etarget)<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">runningONE2E</code></td><td><code dir="auto">boolean</code></td><td>Indicates if an E2E (end-to-end) test is currently running.</td></tr><tr><td><code dir="auto">data</code></td><td><code dir="auto">any</code></td><td>Data associated with the E2E test.</td></tr></tbody></table>



### WMLQueue

[Section titled “WMLQueue”](#wmlqueue)<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">queue</code></td><td><code dir="auto">T[]</code></td><td>Internal array representing the queue of items.</td></tr></tbody></table>



### Methods

[Section titled “Methods”](#methods-5)<table><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">enqueue(item: T)</code></td><td>Adds an item to the queue.</td></tr><tr><td><code dir="auto">dequeue()</code></td><td>Removes and returns the first item in the queue.</td></tr><tr><td><code dir="auto">isEmpty()</code></td><td>Checks if the queue is empty.</td></tr><tr><td><code dir="auto">size()</code></td><td>Returns the number of items in the queue.</td></tr><tr><td><code dir="auto">getElementAt(index: number)</code></td><td>Retrieves the element at a specific index in the queue.</td></tr></tbody></table>



### WMLAPIPageRequestModelFilterPredicateEnum

[Section titled “WMLAPIPageRequestModelFilterPredicateEnum”](#wmlapipagerequestmodelfilterpredicateenum)<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">EQUALS</code></td><td><code dir="auto">string</code></td><td>Filter predicate to check if a value is equal.</td></tr><tr><td><code dir="auto">STARTSWITH</code></td><td><code dir="auto">string</code></td><td>Filter predicate to check if a value starts with a string.</td></tr><tr><td><code dir="auto">ENDSWITH</code></td><td><code dir="auto">string</code></td><td>Filter predicate to check if a value ends with a string.</td></tr><tr><td><code dir="auto">CONTAINS</code></td><td><code dir="auto">string</code></td><td>Filter predicate to check if a value contains a string.</td></tr></tbody></table>



### WMLAPIPaginationRequestModel

[Section titled “WMLAPIPaginationRequestModel”](#wmlapipaginationrequestmodel)<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">fields</code></td><td><code dir="auto">Array&lt;{ value: any }&gt;</code></td><td>Array of fields included in the request.</td></tr><tr><td><code dir="auto">filter</code></td><td><code dir="auto">Array&lt;{ key: string, value: any, predicate?: WMLAPIPageRequestModelFilterPredicateEnum }&gt;</code></td><td>Filter criteria with optional predicates.</td></tr><tr><td><code dir="auto">sort</code></td><td><code dir="auto">Array&lt;{ key: string, direction: &#34;ASC&#34; | &#34;DESC&#34; | &#34;&#34; }&gt;</code></td><td>Sorting criteria for the request.</td></tr><tr><td><code dir="auto">cursor</code></td><td><code dir="auto">{ value?: string, order?: number }</code></td><td>Cursor-based pagination options.</td></tr><tr><td><code dir="auto">pageNum</code></td><td><code dir="auto">number</code></td><td>Current page number in the pagination request.</td></tr><tr><td><code dir="auto">pageSize</code></td><td><code dir="auto">number</code></td><td>Number of items per page.</td></tr><tr><td><code dir="auto">errorOccuredIsPresent</code></td><td><code dir="auto">boolean</code></td><td>Indicates if an error occurred during the request.</td></tr></tbody></table>



### Methods

[Section titled “Methods”](#methods-6)<table><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">getIndexInfo()</code></td><td>Returns start and end index information for the current page.</td></tr></tbody></table>



### WMLAPIPaginationResponseModel

[Section titled “WMLAPIPaginationResponseModel”](#wmlapipaginationresponsemodel)<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">columns</code></td><td><code dir="auto">Array&lt;{ value: string, type?: string }&gt;</code></td><td>Array of columns in the response data.</td></tr><tr><td><code dir="auto">data</code></td><td><code dir="auto">Array&lt;any&gt;</code></td><td>Array of data returned by the API.</td></tr><tr><td><code dir="auto">metadata</code></td><td><code dir="auto">{ startOrderValue?: number }</code></td><td>Metadata about the response, including start order values.</td></tr><tr><td><code dir="auto">pageNum</code></td><td><code dir="auto">number</code></td><td>Current page number in the response.</td></tr><tr><td><code dir="auto">pageSize</code></td><td><code dir="auto">number</code></td><td>Number of items per page in the response.</td></tr><tr><td><code dir="auto">totalPages</code></td><td><code dir="auto">number</code></td><td>Total number of pages in the response.</td></tr><tr><td><code dir="auto">totalItems</code></td><td><code dir="auto">number</code></td><td>Total number of items in the response.</td></tr></tbody></table>



### Methods

[Section titled “Methods”](#methods-7)<table><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">getIndexInfo()</code></td><td>Returns start and end index information for the current page.</td></tr><tr><td><code dir="auto">calculateCurrentState()</code></td><td>Calculates pagination state based on total items and pages.</td></tr><tr><td><code dir="auto">calcSectionBasedOnPageDetails()</code></td><td>Slices data into sections based on page details.</td></tr></tbody></table>



### Types

[Section titled “Types”](#types)

### WMLDeepPartial

[Section titled “WMLDeepPartial”](#wmldeeppartial)<table><thead><tr><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">WMLDeepPartial&lt;T&gt;</code> is a type that makes all properties of a type <code dir="auto">T</code> optional, and if a property is an object, it recursively makes all of its properties optional as well. Functions are left unchanged.</td></tr></tbody></table>

Type Behavior[Section titled “Type Behavior”](#type-behavior)<table><thead><tr><th>Condition</th><th>Behavior</th></tr></thead><tbody><tr><td><code dir="auto">T[K]</code> is a function</td><td>Keeps the function type intact.</td></tr><tr><td><code dir="auto">T[K]</code> is an object</td><td>Recursively makes all properties of the object optional using <code dir="auto">WMLDeepPartial</code>.</td></tr><tr><td><code dir="auto">T[K]</code> is neither a function nor object</td><td>The property becomes optional.</td></tr></tbody></table>



### Functions

[Section titled “Functions”](#functions)

###  <code dir="auto">updateGlobal</code> 

[Section titled “updateGlobal”](#updateglobal)<table><thead><tr><th>Signature</th><th>Return Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">updateGlobal(props: WMLDeepPartial&lt;WMLUIGlobal &amp; { propFrameworkName?: string }&gt;)</code></td><td><code dir="auto">void</code></td><td>Updates the global <code dir="auto">WINDMILLCODE</code> object with provided properties and optionally changes framework name. useful if detectframework gets the framework name wrong</td></tr></tbody></table>

 <code dir="auto">props</code> [Section titled “props”](#props)<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>propFrameworkName</td><td><code dir="auto">string</code> (optional)</td><td>Optionally updates the framework name in the global object.</td></tr><tr><td>…rest</td><td><code dir="auto">WMLDeepPartial&lt;WMLUIGlobal&gt;</code></td><td>All other properties of <code dir="auto">WMLUIGlobal</code> to be applied globally.</td></tr></tbody></table>



###  <code dir="auto">getGlobalObject</code> 

[Section titled “getGlobalObject”](#getglobalobject)<table><thead><tr><th>Signature</th><th>Return Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">getGlobalObject(): any</code></td><td><code dir="auto">any</code></td><td>Returns the appropriate global object based on the environment: <code dir="auto">globalThis</code>, <code dir="auto">window</code>, <code dir="auto">global</code>, or <code dir="auto">self</code>.</td></tr></tbody></table>

 <code dir="auto">Return Object</code> [Section titled “Return Object”](#return-object)<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>globalThis</td><td><code dir="auto">any</code></td><td>Standard ECMAScript global object.</td></tr><tr><td>window</td><td><code dir="auto">any</code></td><td>Global object for browser environments.</td></tr><tr><td>global</td><td><code dir="auto">any</code></td><td>Global object for Node.js environments.</td></tr><tr><td>self</td><td><code dir="auto">any</code></td><td>Global object for Web Workers.</td></tr><tr><td></td><td><code dir="auto">Object</code></td><td>Fallback empty object if none of the above globals are available.</td></tr></tbody></table>



###  <code dir="auto">detectFramework</code> 

[Section titled “detectFramework”](#detectframework)<table><thead><tr><th>Signature</th><th>Return Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">detectFramework(): WMLUIFrameworkType</code></td><td><code dir="auto">WMLUIFrameworkType</code></td><td>Detects the framework used in the environment (React, Angular, Vue.js, etc.).</td></tr></tbody></table>

 <code dir="auto">myWindow</code> [Section titled “myWindow”](#mywindow)<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>myWindow</td><td><code dir="auto">any</code></td><td>Represents the global <code dir="auto">window</code> object or an empty object if <code dir="auto">window</code> is undefined.</td></tr></tbody></table>



###  <code dir="auto">generateUUID(prefix: string)</code> 

[Section titled “generateUUID(prefix: string)”](#generateuuidprefix-string)<table><thead><tr><th>Description</th></tr></thead><tbody><tr><td>Generates a UUID with an optional prefix and returns it as a string.</td></tr></tbody></table>



###  <code dir="auto">generateClassPrefix(prefix: string)</code> 

[Section titled “generateClassPrefix(prefix: string)”](#generateclassprefixprefix-string)<table><thead><tr><th>Description</th></tr></thead><tbody><tr><td>Returns a function that generates class names based on the provided prefix. If the value is empty, it returns the first part of the prefix.</td></tr></tbody></table>



###  <code dir="auto">generateIdPrefix(prefix: string)</code> 

[Section titled “generateIdPrefix(prefix: string)”](#generateidprefixprefix-string)<table><thead><tr><th>Description</th></tr></thead><tbody><tr><td>Returns a function that generates ID names based on the provided prefix. If the value is empty, it returns the first part of the prefix.</td></tr></tbody></table>



###  <code dir="auto">fillMissingProperties(source: object, target: object)</code> 

[Section titled “fillMissingProperties(source: object, target: object)”](#fillmissingpropertiessource-object-target-object)<table><thead><tr><th>Description</th></tr></thead><tbody><tr><td>Recursively fills missing properties in the <code dir="auto">target</code> object from the <code dir="auto">source</code> object. If a property exists in both, the target keeps its value.</td></tr></tbody></table>



###  <code dir="auto">updateClassString(obj: any, myClassDefault: string, classListDefault: string)</code> 

[Section titled “updateClassString(obj: any, myClassDefault: string, classListDefault: string)”](#updateclassstringobj-any-myclassdefault-string-classlistdefault-string)<table><thead><tr><th>Description</th></tr></thead><tbody><tr><td>Returns a function to manage the class list of an object. Can add, remove, toggle, or clear class names based on the current state of the object.</td></tr></tbody></table>



###  <code dir="auto">toggleClassString(targetClass: string, classList: Array&lt;string&gt;, predicate: Function)</code> 

[Section titled “toggleClassString(targetClass: string, classList: Array<string>, predicate: Function)”](#toggleclassstringtargetclass-string-classlist-arraystring-predicate-function)<table><thead><tr><th>Description</th></tr></thead><tbody><tr><td>Toggles a class string on or off within the provided class list. The <code dir="auto">predicate</code> function determines the action.</td></tr></tbody></table>



###  <code dir="auto">generateRandomNumber(range: number, additional: number)</code> 

[Section titled “generateRandomNumber(range: number, additional: number)”](#generaterandomnumberrange-number-additional-number)<table><thead><tr><th>Description</th></tr></thead><tbody><tr><td>Generates a random number within the specified range and adds the additional value.</td></tr></tbody></table>



###  <code dir="auto">generateRandomColor()</code> 

[Section titled “generateRandomColor()”](#generaterandomcolor)<table><thead><tr><th>Description</th></tr></thead><tbody><tr><td>Generates a random hex color code.</td></tr></tbody></table>



###  <code dir="auto">selectRandomOptionFromArray(myArray: Array&lt;any&gt;, index?: number)</code> 

[Section titled “selectRandomOptionFromArray(myArray: Array<any>, index?: number)”](#selectrandomoptionfromarraymyarray-arrayany-index-number)<table><thead><tr><th>Description</th></tr></thead><tbody><tr><td>Selects a random element from an array. Optionally, an index can be provided to limit the range.</td></tr></tbody></table>



###  <code dir="auto">replaceValuesWithPaths&lt;T&gt;(obj: any, path: string, predicate: Function): T</code> 

[Section titled “replaceValuesWithPaths<T>(obj: any, path: string, predicate: Function): T”](#replacevalueswithpathstobj-any-path-string-predicate-function-t)<table><thead><tr><th>Description</th></tr></thead><tbody><tr><td>Recursively replaces values in an object with their corresponding path. The <code dir="auto">predicate</code> function is used to modify the path value.</td></tr></tbody></table>



###  <code dir="auto">WMLUIPropertyDecorator(target: any, key: any)</code> 

[Section titled “WMLUIPropertyDecorator(target: any, key: any)”](#wmluipropertydecoratortarget-any-key-any)<table><thead><tr><th>Description</th></tr></thead><tbody><tr><td>Obsolete decorator for handling UI properties.</td></tr></tbody></table>



## Changelog

[Section titled “Changelog”](#changelog)

### v0.9.4

[Section titled “v0.9.4”](#v094)added WMLQueue just a regular Queue data structure thats all



### v0.9.5

[Section titled “v0.9.5”](#v095)added index accessing for WMLQueue



### v0.10.0

[Section titled “v0.10.0”](#v0100)add generateRandomNumber, generateRandomColor,and selectRandomOptionFromArraywml



### v0.10.1

[Section titled “v0.10.1”](#v0101)returned the ref created by addCustomComponent



### v0.10.2

[Section titled “v0.10.2”](#v0102)WMLAPIPaginationRequestModel[“sort”][number][“direction”] enums are now “ASC” |“DESC” | ""



### v0.10.3

[Section titled “v0.10.3”](#v0103)add WMLAPIPaginationResponseModel[“columns”] of type

<code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3B61B0">Array</span><span style="--0:#D6DEEB;--1:#403F53">&lt;{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">value</span><span style="--0:#7FDBCA;--1:#096E72">:</span><span style="--0:#C5E478;--1:#3B61B0">string</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">type</span><span style="--0:#7FDBCA;--1:#096E72">?:</span><span style="--0:#C5E478;--1:#3B61B0">string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">}&gt;</span></div></div></code>

to provide the developer column information



### v0.10.4

[Section titled “v0.10.4”](#v0104)made  WMLAPIPaginationResponseModel[“data”] Array generic



### v0.10.5

[Section titled “v0.10.5”](#v0105)added generateClassPrefix method  to functions



### v0.10.6

[Section titled “v0.10.6”](#v0106)updated Function signatuire on WMLUIProperty##click so the event option is optional

### v0.11.0

[Section titled “v0.11.0”](#v0110)provided WMLNGXTranslateLoader to work with ngx-translateprovided WMLModuleForRootProps to work with

### v0.11.1

[Section titled “v0.11.1”](#v0111)attempting to deal with an issue where numbers are being returned if no feature is present

### v1.0.0

[Section titled “v1.0.0”](#v100)major change
functions##addCustomComponent ref.instance.ngOnInit?.() only gets called if the angular versions is less than 14.1.0

### v1.1.0

[Section titled “v1.1.0”](#v110)minor changeadded WMLDeepPartial, a utility types that will make all your nested properties optionalmodified WMLNGXTranslateLoader##i18nLocation to return undefined so numbers dont turn to the indexes of the string

### v2.0.0

[Section titled “v2.0.0”](#v200)MAJOR rename to angular-wml-components-base

### v2.1.1

[Section titled “v2.1.1”](#v211)added fn replaceValuesWithPaths which will recursively go through an object and return a new obj with its values in path representation great for i18n

### v2.1.2

[Section titled “v2.1.2”](#v212)made a fix in genearate random color, where some times 5 digits where returned

### v2.2.0

[Section titled “v2.2.0”](#v220)WMLUIProperty.id by default is "" should help with type should hurt if your code depends on it it is still optional

### v2.2.3

[Section titled “v2.2.3”](#v223)generateClassPrefix prefix parameter supports ="" as default use case,ids and will remove the subsequent _ if its thereWMLUIProperty[“id”] default param is ""

### v16.2.5-0

[Section titled “v16.2.5-0”](#v1625-0)provided access to WMLOptionsProps to the the container cpnt

### v16.2.70

[Section titled “v16.2.70”](#v16270)wmlapipaginationrequestmodel##filter[].value is now the any type
%!(EXTRA string=

### v16.2.80

[Section titled “v16.2.80”](#v16280)updated package to reflect the version  16.2.80 of @angular/core package),

### v16.2.80

[Section titled “v16.2.80”](#v16280-1)updated package to reflect the version  16.2.80 of @angular/core package,

### v16.2.90

[Section titled “v16.2.90”](#v16290)updated package to reflect the version  16.2.90 of @angular/core package,

### v16.2.91

[Section titled “v16.2.91”](#v16291)updated package to reflect the version  16.2.91 of @angular/core package

### v16.2.92

[Section titled “v16.2.92”](#v16292)provided spyOnForES6Imports, which finally allows you to spyOnFunctions on es6 imports however refer to the stack overflow project on how to[configure your angular app](https://stackoverflow.com/a/77298152/7513181)in order to get this to work it will not work alone*in test.ts

<code><div class="ec-line"><div class="code"><span style="--0:#7FDBCA;--1:#096E72">...</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">const { </span><span style="--0:#82AAFF;--1:#3B61B0">defineProperty</span><span style="--0:#C792EA;--1:#8844AE"> } = </span><span style="--0:#D6DEEB;--1:#403F53">Object;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">Object</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#82AAFF;--1:#3B61B0">defineProperty</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8844AE">=</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8844AE">function</span><span style="--0:#D9F5DD;--1:#111111">(</span><span style="--1:#403F53"><span style="--0:#D7DBE0">object</span><span style="--0:#D6DEEB">, </span><span style="--0:#D7DBE0">name</span><span style="--0:#D6DEEB">, </span><span style="--0:#D7DBE0">meta</span></span><span style="--0:#D9F5DD;--1:#111111">)</span><span style="--0:#D6DEEB;--1:#403F53"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#C792EA;--1:#8844AE">if</span><span style="--0:#D6DEEB;--1:#403F53"> (meta</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#7FDBCA;--1:#096E72">get</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8844AE">&amp;&amp;</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8844AE">!</span><span style="--0:#D6DEEB;--1:#403F53">meta</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#7FDBCA;--1:#096E72">configurable</span><span style="--0:#D6DEEB;--1:#403F53">) {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#919F9F;--1:#5D6376">// it might be an ES6 exports object</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#C792EA;--1:#8844AE">return</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">defineProperty</span><span style="--0:#D6DEEB;--1:#403F53">(object</span><span style="--0:#889FB2;--1:#4D667B">,</span><span style="--0:#D6DEEB;--1:#403F53"> name</span><span style="--0:#889FB2;--1:#4D667B">,</span><span style="--0:#D6DEEB;--1:#403F53"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#7FDBCA;--1:#096E72">...</span><span style="--0:#D6DEEB;--1:#403F53">meta</span><span style="--0:#889FB2;--1:#4D667B">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">configurable: </span><span style="--0:#FF6A83;--1:#A24848">true</span><span style="--0:#889FB2;--1:#4D667B">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">});</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#C792EA;--1:#8844AE">return</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">defineProperty</span><span style="--0:#D6DEEB;--1:#403F53">(object</span><span style="--0:#889FB2;--1:#4D667B">,</span><span style="--0:#D6DEEB;--1:#403F53"> name</span><span style="--0:#889FB2;--1:#4D667B">,</span><span style="--0:#D6DEEB;--1:#403F53"> meta);</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">};</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#7FDBCA;--1:#096E72">...</span></div></div><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3B61B0">getTestBed</span><span style="--0:#D6DEEB;--1:#403F53">()</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#82AAFF;--1:#3B61B0">initTestEnvironment</span><span style="--0:#D6DEEB;--1:#403F53">(</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">BrowserDynamicTestingModule,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#82AAFF;--1:#3B61B0">platformBrowserDynamicTesting</span><span style="--0:#D6DEEB;--1:#403F53">()</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">);</span></div></div></code>

tsconfig.spec.json<code><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">...</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#ECC48D;--1:#984E4D">compilerOptions</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#D6DEEB;--1:#403F53">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#7FDBCA;--1:#096E72">&#34;outDir&#34;</span><span style="--0:#D6DEEB;--1:#403F53">: </span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#C789D6;--1:#7C5686">./out-tsc/spec</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#7FDBCA;--1:#096E72">&#34;types&#34;</span><span style="--0:#D6DEEB;--1:#403F53">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#C789D6;--1:#7C5686">jasmine</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#D6DEEB;--1:#403F53">,</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#C789D6;--1:#7C5686">node</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#7FDBCA;--1:#096E72">&#34;module&#34;</span><span style="--0:#D6DEEB;--1:#403F53">: </span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#C789D6;--1:#7C5686">commonjs</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">},</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">...</span></div></div></code>



### v16.2.93

[Section titled “v16.2.93”](#v16293)added mockDeclarations to wmltestutils so users can add their declarations
,

### v16.2.93

[Section titled “v16.2.93”](#v16293-1)updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,

### v16.2.100

[Section titled “v16.2.100”](#v162100)updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,

### v16.2.110

[Section titled “v16.2.110”](#v162110)updated package to conform with @windmillcode/angular-wml-components-base for unit testing features

### v16.2.112

[Section titled “v16.2.112”](#v162112)update type inference for replaceValuesWithPaths to be more friendly

### v16.2.113

[Section titled “v16.2.113”](#v162113)added createBasicObservableError and WMLTestHttpHandler for interceptor test cases and throwing observable errors
,

### v16.2.120

[Section titled “v16.2.120”](#v162120)updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,

### v17.0.10

[Section titled “v17.0.10”](#v17010)updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,

### v17.0.11

[Section titled “v17.0.11”](#v17011)updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,

### v17.0.20

[Section titled “v17.0.20”](#v17020)updated package to reflect the version  ^17.0.2 of @angular/core package

### v17.0.21

[Section titled “v17.0.21”](#v17021)added data-source-utils.ts to help with pagination and data source logic
,

### v17.0.40

[Section titled “v17.0.40”](#v17040)updated package to reflect the version  ^17.0.4 of @angular/core package,

### v17.0.50

[Section titled “v17.0.50”](#v17050)updated package to reflect the version  ^17.0.5 of @angular/core package,

### v17.0.60

[Section titled “v17.0.60”](#v17060)updated package to reflect the version  ^17.0.6 of @angular/core package,

### v17.0.70

[Section titled “v17.0.70”](#v17070)updated package to reflect the version  ^17.0.7 of @angular/core package

### v17.0.7300

[Section titled “v17.0.7300”](#v1707300)added WMLAnimateUIProperty as the basis for all entities meant to be animated,



### v17.0.7300

[Section titled “v17.0.7300”](#v1707300-1)updated package to conform with @windmillcode/angular-wml-components-base
,

### v17.0.8300

[Section titled “v17.0.8300”](#v1708300)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.0.7300

[Section titled “v17.0.7300”](#v1707300-2)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.0.80

[Section titled “v17.0.80”](#v17080)updated package to reflect the version  ^17.0.8 of @angular/core package

### v17.0.8100

[Section titled “v17.0.8100”](#v1708100)prevented animation end event from propagating to child events, given the children are not exactly the same as the parent,
,

### v17.0.8100

[Section titled “v17.0.8100”](#v1708100-1)updated package to conform with @windmillcode/angular-wml-components-base

### v17.0.8102

[Section titled “v17.0.8102”](#v1708102)added WMLAnimateUIProperty[“helperStyles”] to help animations run more smootly its value is<code><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">helperStyles:WMLUIProperty[</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#ECC48D;--1:#984E4D">style</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#D6DEEB;--1:#403F53">]</span><span style="--0:#C792EA;--1:#8844AE">=</span><span style="--0:#D6DEEB;--1:#403F53">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">transform:</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span><span style="--0:#ECC48D;--1:#984E4D">translate3d(0,0,0)</span><span style="--0:#D9F5DD;--1:#111111">&#34;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code>

and you can overwrite it as necessary
,



### v17.0.8103

[Section titled “v17.0.8103”](#v1708103)updated package to conform with @windmillcode/angular-wml-components-base
,

### v17.0.9000

[Section titled “v17.0.9000”](#v1709000)updated package to conform with @windmillcode/angular-wml-components-base

### v17.0.9001

[Section titled “v17.0.9001”](#v1709001)added generateIdPrefix
,

### v17.0.9000

[Section titled “v17.0.9000”](#v1709000-1)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.0.9001

[Section titled “v17.0.9001”](#v1709001-1)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.1.0000

[Section titled “v17.1.0000”](#v1710000)updated package to reflect the version  ^17.1.0 of @angular/core package

### v17.1.2

[Section titled “v17.1.2”](#v1712)[BREAKING CHANGE] added WMLAnimateUIProperty.autoOpen, by default animations dont don anything
if you need your animations to autoOpen simply go through all your class instances and make the update,



### v17.1.2

[Section titled “v17.1.2”](#v1712-1)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.1.1000

[Section titled “v17.1.1000”](#v1711000)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.1.2000 [2/5/24]

[Section titled “v17.1.2000 [2/5/24]”](#v1712000-2524)updated package to reflect the version  ^17.1.2 of @angular/core package

### v17.1.2001 [2/8/24]

[Section titled “v17.1.2001 [2/8/24]”](#v1712001-2824)added toggle functionality for updateClassString
,

### v17.1.2001 [2/8/24]

[Section titled “v17.1.2001 [2/8/24]”](#v1712001-2824-1)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.1.3001 [2/8/24]

[Section titled “v17.1.3001 [2/8/24]”](#v1713001-2824)updated package to reflect the version  ^17.1.3 of @angular/core package,

### v17.1.3000 [2/8/24]

[Section titled “v17.1.3000 [2/8/24]”](#v1713000-2824)updated package to reflect the version  ^17.1.3 of @angular/core package,

### v17.2.1000 [2/17/24]

[Section titled “v17.2.1000 [2/17/24]”](#v1721000-21724)updated package to reflect the version  ^17.2.1 of @angular/core package,

### v17.2.2000 [2/23/24]

[Section titled “v17.2.2000 [2/23/24]”](#v1722000-22324)updated package to reflect the version  ^17.2.2 of @angular/core package,

### v17.2.2001 [2/23/24]

[Section titled “v17.2.2001 [2/23/24]”](#v1722001-22324)updated package to reflect the version  ^17.2.2 of @angular/core package,

### v17.2.3000 [2/28/24]

[Section titled “v17.2.3000 [2/28/24]”](#v1723000-22824)updated package to reflect the version  ^17.2.3 of @angular/core package

### v17.2.3001 [3/22/24]

[Section titled “v17.2.3001 [3/22/24]”](#v1723001-32224)created WMLComponentBaseZero which shortens and hides the complex logic of
our WMLComponentsNew Features[Section titled “New Features”](#new-features)Introduced <code dir="auto">WMLComponentBaseZero</code> , a new base class designed to simplify and encapsulate the complex logic associated with WML components. This enhancement aims to provide a cleaner and more intuitive interface for working with WML components.Enhancements in <code dir="auto">component-base.ts</code> :[Section titled “Enhancements in component-base.ts:”](#enhancements-in-component-basets)**Refactored <code dir="auto">WMLComponentBaseZeroProps</code> :**

Transitioned from a traditional class-based approach to a mixin-based pattern using <code dir="auto">WMLComponentBaseZeroPropsMixin</code> . This change is intended to enhance flexibility and reusability across different component implementations.The mixin <code dir="auto">WMLComponentBaseZeroPropsMixin</code> is now used to dynamically extend a base class, incorporating custom properties and methods essential for WML components.Introduced a new <code dir="auto">setState</code> method within the mixin, providing a streamlined way to update component state.**Introduced <code dir="auto">WMLComponentBaseZero</code> :**

This new base class leverages <code dir="auto">WMLComponentBaseZeroProps</code> to offer a robust foundation for component development.The constructor now initializes class and ID prefixes if they are provided, enabling more consistent and predictable styling and DOM structure.Enhanced the <code dir="auto">listenForSetState</code> method to work seamlessly with the new state management approach, ensuring changes are propagated efficiently and reliably.Key Changes to Note:[Section titled “Key Changes to Note:”](#key-changes-to-note)The <code dir="auto">listenForSetState</code> method now listens to changes from <code dir="auto">setStateSubj</code> , aligning with the new state management strategy.Destructor ( <code dir="auto">ngOnDestroy</code> ) logic has been updated to ensure proper cleanup, reducing the risk of memory leaks and ensuring better resource management.Usage:[Section titled “Usage:”](#usage-1)To leverage the new <code dir="auto">WMLComponentBaseZero</code> , extend your components from this base class and utilize the provided mechanisms for state management and lifecycle handling.The mixin approach offers enhanced customization, allowing developers to inject additional properties or methods as needed.Recommendations:[Section titled “Recommendations:”](#recommendations)Review the updated implementation details in <code dir="auto">WMLComponentBaseZero</code> and <code dir="auto">WMLComponentBaseZeroPropsMixin</code> to fully understand the new component structure and behavior.Test your components thoroughly to ensure compatibility with the new base class and to leverage the improvements in state management and lifecycle handling.This update signifies our commitment to improving the developer experience and streamlining component development within the WML ecosystem.
,



### v17.2.3001 [3/2/24]

[Section titled “v17.2.3001 [3/2/24]”](#v1723001-3224)updated package to conform with @windmillcode/angular-wml-components-base

### v17.2.3002 [3/5/24]

[Section titled “v17.2.3002 [3/5/24]”](#v1723002-3524)[UPDATE] Added a new <code dir="auto">fields</code> array of type <code dir="auto">Array&lt;{value:any}&gt;</code> to the <code dir="auto">WMLAPIPaginationRequestModel</code> class in <code dir="auto">data-source-utils.ts</code> . This new field is designed to hold additional data fields that may be required during pagination requests.

[PATCH] Modified the <code dir="auto">animationEnd</code> method in the <code dir="auto">WMLAnimateUIProperty</code> class within <code dir="auto">models.ts</code> . The condition now removes any spaces from <code dir="auto">this.animationClass</code> before checking its presence in the event target’s className. This ensures the animation end logic accurately identifies the target regardless of space characters in the class name.
,



### v17.2.3002 [3/5/24]

[Section titled “v17.2.3002 [3/5/24]”](#v1723002-3524-1)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.2.4000 [3/8/24]

[Section titled “v17.2.4000 [3/8/24]”](#v1724000-3824)updated package to reflect the version  ^17.2.4 of @angular/core package

### v17.2.4002 [3/12/24]

[Section titled “v17.2.4002 [3/12/24]”](#v1724002-31224)[PATCH] In <code dir="auto">wml-components-base/src/lib/component-base.ts</code> , added a new <code dir="auto">ReplaySubject</code> called <code dir="auto">setStateEvent</code> , which enhances state management within the component. Also adjusted the RxJS pipe in the <code dir="auto">setState</code> method to include an additional operation that emits the updated state to <code dir="auto">setStateEvent</code> , improving the reactivity of the component state.,



### v17.2.4002 [3/12/24]

[Section titled “v17.2.4002 [3/12/24]”](#v1724002-31224-1)updated package to conform with @windmillcode/angular-wml-components-base   ,

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

[Section titled “v17.3.4000 [4/11/24]”](#v1734000-41124)updated package to reflect the version  ^17.3.4 of @angular/core package

### v17.3.4001 [4/16/24]

[Section titled “v17.3.4001 [4/16/24]”](#v1734001-41624)added onError to wmlimage prperty
,

### v17.3.4001 [4/16/24]

[Section titled “v17.3.4001 [4/16/24]”](#v1734001-41624-1)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.3.5000 [4/20/24]

[Section titled “v17.3.5000 [4/20/24]”](#v1735000-42024)updated package to reflect the version  ^17.3.5 of @angular/core package

### v17.3.5110 [4/20/24]

[Section titled “v17.3.5110 [4/20/24]”](#v1735110-42024)[UPDATE] ensure dervied class passed type to base classes
Updated models.ts by add the WMLConstructorDecorator function, to streamline and optimize object initialization practices within the framework.<code><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#82AAFF;--1:#3B61B0">constructor</span><span style="--0:#D6DEEB;--1:#403F53">(props:Partial</span><span style="--0:#C792EA;--1:#8844AE">&lt;</span><span style="--0:#82AAFF;--1:#3B61B0">T</span><span style="--0:#C792EA;--1:#8844AE">&gt;=</span><span style="--0:#D6DEEB;--1:#403F53">{}){</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#C792EA;--1:#8844AE">let </span><span style="--0:#D6DEEB;--1:#403F53">origProps</span><span style="--0:#C792EA;--1:#8844AE"> = </span><span style="--0:#D6DEEB;--1:#403F53">Object</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#82AAFF;--1:#3B61B0">entries</span><span style="--0:#D6DEEB;--1:#403F53">(props)</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#82AAFF;--1:#3B61B0">filter</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#D9F5DD;--1:#111111">(</span><span style="--0:#C792EA;--1:#8844AE">[</span><span style="--0:#D7DBE0;--1:#403F53">key</span><span style="--0:#C792EA;--1:#8844AE">, </span><span style="--0:#D7DBE0;--1:#403F53">val</span><span style="--0:#C792EA;--1:#8844AE">]</span><span style="--0:#D9F5DD;--1:#111111">)</span><span style="--0:#C792EA;--1:#8844AE"> =&gt; {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#C792EA;--1:#8844AE">      </span></span><span style="--0:#C792EA;--1:#8844AE">return !</span><span style="--0:#D6DEEB;--1:#403F53">key</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#82AAFF;--1:#3B61B0">startsWith</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#D9F5DD;--1:#111111">&#39;</span><span style="--0:#ECC48D;--1:#984E4D">param</span><span style="--0:#D9F5DD;--1:#111111">&#39;</span><span style="--0:#D6DEEB;--1:#403F53">)</span><span style="--0:#C792EA;--1:#8844AE">;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#C792EA;--1:#8844AE">    </span></span><span style="--0:#C792EA;--1:#8844AE">}</span><span style="--0:#D6DEEB;--1:#403F53">);</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">Object</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#82AAFF;--1:#3B61B0">assign</span><span style="--0:#D6DEEB;--1:#403F53">(</span><span style="--0:#7FDBCA;--1:#096E72">this</span><span style="--0:#D6DEEB;--1:#403F53">, { </span><span style="--0:#7FDBCA;--1:#096E72">...</span><span style="--0:#D6DEEB;--1:#403F53">Object</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#82AAFF;--1:#3B61B0">fromEntries</span><span style="--0:#D6DEEB;--1:#403F53">(origProps) });</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">  </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code>

so as not to overwhelm developers
to use

<code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3B61B0">@</span><span style="--0:#D6DEEB;--1:#403F53">WMLConstructorDecorator</span></div></div><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">export</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8844AE">class</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#FFCB8B;--1:#111111">T</span><span style="--0:#D6DEEB;--1:#403F53"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#82AAFF;--1:#3B61B0">constructor</span><span style="--0:#D9F5DD;--1:#111111">(</span><span style="--0:#D7DBE0;--1:#403F53">props</span><span style="--0:#7FDBCA;--1:#096E72">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#FFCB8B;--1:#111111">Partial</span><span style="--0:#D6DEEB;--1:#403F53">&lt;</span><span style="--0:#FFCB8B;--1:#111111">T</span><span style="--0:#D6DEEB;--1:#403F53">&gt; </span><span style="--0:#C792EA;--1:#8844AE">=</span><span style="--0:#D6DEEB;--1:#403F53"> {}</span><span style="--0:#D9F5DD;--1:#111111">)</span><span style="--0:#D6DEEB;--1:#403F53"> { }</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div></code>

,



### v17.3.5110 [5/1/24]

[Section titled “v17.3.5110 [5/1/24]”](#v1735110-5124)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.3.6000 [5/1/24]

[Section titled “v17.3.6000 [5/1/24]”](#v1736000-5124)updated package to reflect the version  ^17.3.6 of @angular/core package,

### v17.3.7000 [5/4/24]

[Section titled “v17.3.7000 [5/4/24]”](#v1737000-5424)updated package to reflect the version  ^17.3.7 of @angular/core package,

### v17.3.7000 [5/9/24]

[Section titled “v17.3.7000 [5/9/24]”](#v1737000-5924)updated package to reflect the version  ^17.3.7 of @angular/core package,

### v17.3.8000 [5/9/24]

[Section titled “v17.3.8000 [5/9/24]”](#v1738000-5924)updated package to reflect the version  ^17.3.8 of @angular/core package,

### v17.3.9000 [5/16/24]

[Section titled “v17.3.9000 [5/16/24]”](#v1739000-51624)updated package to reflect the version  ^17.3.9 of @angular/core package,

### v18.0.0 [5/22/24]

[Section titled “v18.0.0 [5/22/24]”](#v1800-52224)updated package to reflect the version  ^18.0.0 of @angular/core package,

### v18.0.1 [5/22/24]

[Section titled “v18.0.1 [5/22/24]”](#v1801-52224)updated package to reflect the version  ^18.0.0 of @angular/core package

### v18.0.4 [5/25/2024 12:50:12 AM EST]

[Section titled “v18.0.4 [5/25/2024 12:50:12 AM EST]”](#v1804-5252024-125012-am-est)[UPDATE] Modified replaceValuesWithPaths function in functions.ts to include a predicate for custom assignments.

File: functions.ts
Section: replaceValuesWithPaths
Function: replaceValuesWithPaths()
,



### v18.0.4 [5/25/24]

[Section titled “v18.0.4 [5/25/24]”](#v1804-52524)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.0.1000 [5/29/24]

[Section titled “v18.0.1000 [5/29/24]”](#v1801000-52924)updated package to reflect the version  ^18.0.1 of @angular/core package
,

### v18.0.2000 [6/6/24]

[Section titled “v18.0.2000 [6/6/24]”](#v1802000-6624)updated package to reflect the version  ^18.0.2 of @angular/core package,

### v18.0.3000 [6/13/24]

[Section titled “v18.0.3000 [6/13/24]”](#v1803000-61324)updated package to reflect the version  ^18.0.3 of @angular/core package,

### v18.0.3000 [6/13/24]

[Section titled “v18.0.3000 [6/13/24]”](#v1803000-61324-1)updated package to reflect the version  ^18.0.3 of @angular/core package,

### v18.0.3000 [6/13/24]

[Section titled “v18.0.3000 [6/13/24]”](#v1803000-61324-2)updated package to reflect the version  ^18.0.3 of @angular/core package

### v18.0.3010 [6/18/2024 ]

[Section titled “v18.0.3010 [6/18/2024 ]”](#v1803010-6182024)[FIX] <code dir="auto">projects/wml-components-base/src/lib/models.ts</code> - <code dir="auto">WMLConstructorDecorator</code> function: Added <code dir="auto">props</code> to <code dir="auto">this.wmlInit?.(props)</code> . This means developers can now pass <code dir="auto">props</code> to <code dir="auto">wmlInit</code> .
,

### v18.0.3010 [6/18/24]

[Section titled “v18.0.3010 [6/18/24]”](#v1803010-61824)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.0.3010 [6/18/24]

[Section titled “v18.0.3010 [6/18/24]”](#v1803010-61824-1)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.0.4010 [6/23/24]

[Section titled “v18.0.4010 [6/23/24]”](#v1804010-62324)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.0.4000 [6/23/24]

[Section titled “v18.0.4000 [6/23/24]”](#v1804000-62324)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.0.4000 [6/23/24]

[Section titled “v18.0.4000 [6/23/24]”](#v1804000-62324-1)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.0.5000 [6/26/24]

[Section titled “v18.0.5000 [6/26/24]”](#v1805000-62624)updated package to reflect the version  ^18.0.5 of @angular/core package,

### v18.0.6000 [7/5/24]

[Section titled “v18.0.6000 [7/5/24]”](#v1806000-7524)updated package to reflect the version  ^18.0.6 of @angular/core package,

### v18.1.0 [7/10/24]

[Section titled “v18.1.0 [7/10/24]”](#v1810-71024)updated package to reflect the version  ^18.1.0 of @angular/core package,

### v18.1.0 [7/13/24]

[Section titled “v18.1.0 [7/13/24]”](#v1810-71324)updated package to reflect the version  ^18.1.0 of @angular/core package,

### v18.1.3000 [7/13/24]

[Section titled “v18.1.3000 [7/13/24]”](#v1813000-71324)updated package to reflect the version  ^18.1.0 of @angular/core package,

### v18.1.3 [7/13/24]

[Section titled “v18.1.3 [7/13/24]”](#v1813-71324)updated package to reflect the version  ^18.1.0 of @angular/core package,

### v18.1.4 [7/13/24]

[Section titled “v18.1.4 [7/13/24]”](#v1814-71324)updated package to reflect the version  ^18.1.0 of @angular/core package,

### v18.1.4 [7/13/24]

[Section titled “v18.1.4 [7/13/24]”](#v1814-71324-1)updated package to reflect the version  ^18.1.0 of @angular/core package

### v18.1.6 [7/14/24]

[Section titled “v18.1.6 [7/14/24]”](#v1816-71424)[FIX] fixed an error with WMLConstructorDecorator where WMLInit was not being called
,

### v18.1.6 [7/14/24]

[Section titled “v18.1.6 [7/14/24]”](#v1816-71424-1)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.1.6 [7/14/24]

[Section titled “v18.1.6 [7/14/24]”](#v1816-71424-2)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.1.1000 [7/18/24]

[Section titled “v18.1.1000 [7/18/24]”](#v1811000-71824)updated package to reflect the version  ^18.1.1 of @angular/core package,

### v18.1.2000 [7/24/24]

[Section titled “v18.1.2000 [7/24/24]”](#v1812000-72424)updated package to reflect the version  ^18.1.2 of @angular/core package

### v18.1.2300

[Section titled “v18.1.2300”](#v1812300)7/27/2024 02:15:42 PM EST

[update] WMLRoute now extends WMLView in models.ts. If you were using WMLRoute, you now have access to WMLView’s properties, like cdref.

[update] Added new properties link and routerLink to WMLRoute in models.ts. This gives more flexibility for routing in your components.

[UPDATE] Changed WMLImage class to extend WMLRoute instead of WMLUIProperty in models.ts. This means WMLImage now includes routing properties route, link, and routerLink as well as cdref from WMLView
,



### v18.1.2230 [7/27/24]

[Section titled “v18.1.2230 [7/27/24]”](#v1812230-72724)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.1.2300 [7/27/24]

[Section titled “v18.1.2300 [7/27/24]”](#v1812300-72724)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.1.2301 [7/30/24]

[Section titled “v18.1.2301 [7/30/24]”](#v1812301-73024)updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3000 []

[Section titled “v18.1.3000 []”](#v1813000)[MAJOR BREAKING CHANGES]WMLUIProperty id attribute is undefined by default this is for accessbility and QA so values are not all defined with ""
,

### v18.1.3000-beta0 [8/1/24]

[Section titled “v18.1.3000-beta0 [8/1/24]”](#v1813000-beta0-8124)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.1.3000-beta1 [8/1/24]

[Section titled “v18.1.3000-beta1 [8/1/24]”](#v1813000-beta1-8124)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.1.3000-beta2 [8/1/24]

[Section titled “v18.1.3000-beta2 [8/1/24]”](#v1813000-beta2-8124)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.1.3000-beta3 [8/1/24]

[Section titled “v18.1.3000-beta3 [8/1/24]”](#v1813000-beta3-8124)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.1.3000-beta4 [8/1/24]

[Section titled “v18.1.3000-beta4 [8/1/24]”](#v1813000-beta4-8124)

### v18.1.3000-beta13 [8/4/24]

[Section titled “v18.1.3000-beta13 [8/4/24]”](#v1813000-beta13-8424)updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3001 [8/4/24]

[Section titled “v18.1.3001 [8/4/24]”](#v1813001-8424)updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3001 [8/4/24]

[Section titled “v18.1.3001 [8/4/24]”](#v1813001-8424-1)updated package to conform with @windmillcode/angular-wml-components-base

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

[Section titled “v18.2.1 [8/20/24]”](#v1821-82024)[BREAKING CHANGE] removed WMLButton and WMLButton2 use WMLButtonOneProps for WMLButton and WMLButtonZeroProps for WMLButton2

### v18.2.1 [8/20/24]

[Section titled “v18.2.1 [8/20/24]”](#v1821-82024-1)updated package to reflect the version  18.2.0 of @angular/core package

### v18.2.1 [8/20/24]

[Section titled “v18.2.1 [8/20/24]”](#v1821-82024-2)updated package to conform with @windmillcode/angular-wml-components-base

### v18.2.1000 [8/22/24]

[Section titled “v18.2.1000 [8/22/24]”](#v1821000-82224)updated package to reflect the version  18.2.1 of @angular/core package

### v18.2.2000 [8/30/24]

[Section titled “v18.2.2000 [8/30/24]”](#v1822000-83024)updated package to reflect the version  18.2.2 of @angular/core package

### v18.2.2100 [9/1/2024]

[Section titled “v18.2.2100 [9/1/2024]”](#v1822100-912024)[BREAKING CHANGE] <code dir="auto">projects/wml-components-base/src/lib/models.ts</code> WMLAnimateUIProperty logic has changed to become more compact. Removed animationClass,beginOpenStyles beginCloseStyles endOpenStyles endCloseStyles animationClass , now using <code dir="auto">keyFrameName</code> and <code dir="auto">keyFrameStyles</code> instead. Your animations might break if you were relying on the class name. Update your code to use <code dir="auto">keyFrameName</code> .

[UPDATE] <code dir="auto">projects/wml-components-base/src/lib/models.ts</code> Added <code dir="auto">keyFrameName</code> to name your keyframe. Every keyframe name must be unique. If you don’t follow this rule, you’ll get an error.

[UPDATE] <code dir="auto">projects/wml-components-base/src/lib/models.ts</code> WMLAnimateUIProperty has <code dir="auto">injectKeyFrames</code> method now generates and inserts keyframes based on <code dir="auto">keyFrameName</code> .



### v18.2.2101 [9/1/2024]

[Section titled “v18.2.2101 [9/1/2024]”](#v1822101-912024)[UPDATE] IF  WMLAnimateUIProperty.keyFrameName is left out an internal one is generated



### v18.2.2200 [9/3/24]

[Section titled “v18.2.2200 [9/3/24]”](#v1822200-9324)[BREAKING CHANGE] WMLAnimateUIProperty is now WMLMotionUIProperty and anywhere you see animate on the class (careful not to confuse with css) change to motion

### v18.2.2200 [9/3/24]

[Section titled “v18.2.2200 [9/3/24]”](#v1822200-9324-1)updated package to conform with @windmillcode/angular-wml-components-base

### v18.2.3000 [9/4/24]

[Section titled “v18.2.3000 [9/4/24]”](#v1823000-9424)updated package to reflect the version  18.2.3 of @angular/core package

### v18.2.3100 [9/8/24]

[Section titled “v18.2.3100 [9/8/24]”](#v1823100-9824)[BREAKING CHANGE] seperated angular features from core library to angular-wml-components-base
moving WMLComponentBaseZeroPropsMixin, WMLComponentBaseZeroProps, WMLComponentBaseZero,addCustomComponent, WMLNGXTranslateLoader,WMLTestUtils to the angular base library
deleting WMLModuleForRootProps

### v18.2.3110 [9/10/2024 1:45:22 PM EST]

[Section titled “v18.2.3110 [9/10/2024 1:45:22 PM EST]”](#v1823110-9102024-14522-pm-est)[UPDATE] Added new global object management functions <code dir="auto">updateGlobal</code> and <code dir="auto">getGlobalObject</code> in <code dir="auto">functions.ts</code> . This gives developers access to globally update and retrieve the framework’s global object easily.

[UPDATE] Added a new <code dir="auto">WMLUIGlobal</code> class in <code dir="auto">models.ts</code> to represent the global configuration options for the library

[FIX] All references to <code dir="auto">WMLUIProperty.framework</code> have been replaced with <code dir="auto">getGlobalObject().WINDMILLCODE.framework.name</code> . Developers should now use the global framework object instead of relying on the static <code dir="auto">WMLUIProperty.framework</code> .



### v18.2.3110 [9/10/24]

[Section titled “v18.2.3110 [9/10/24]”](#v1823110-91024)updated package to conform with @windmillcode/angular-wml-components-base

### v18.2.3110 [9/10/24]

[Section titled “v18.2.3110 [9/10/24]”](#v1823110-91024-1)updated package to conform with @windmillcode/angular-wml-components-base

### v18.2.3111 [9/10/24]

[Section titled “v18.2.3111 [9/10/24]”](#v1823111-91024)updated package to conform with @windmillcode/angular-wml-components-base

### v18.2.3112 [9/10/24]

[Section titled “v18.2.3112 [9/10/24]”](#v1823112-91024)updated package to conform with @windmillcode/angular-wml-components-base

### v18.2.3200 [9/16/24]

[Section titled “v18.2.3200 [9/16/24]”](#v1823200-91624)[UPDATE] added css transitions and pause & play functionaity to WMLMotionUIPropertyupdated package to conform with @windmillcode/wml-components-base

### v18.2.4000 [9/16/24]

[Section titled “v18.2.4000 [9/16/24]”](#v1824000-91624)updated package to reflect the version  18.2.4 of @angular/core package

### v18.2.4100 [9/19/24]

[Section titled “v18.2.4100 [9/19/24]”](#v1824100-91924)[FIX] fixed a bug where if the developer did not provided the keyframes in order the css transition would not follow the order according to the keyframe flags and even break[UPDATE] New helper function updateKeyFrames one simple step now to update your keyframes

### v18.2.4200 [9/21/24]

[Section titled “v18.2.4200 [9/21/24]”](#v1824200-92124)[BREAKING CHANGE] - chaned spelling error from injectKeyframes to injectKeyFrames IN WMLMotionUIProperty

### v18.2.4200 [9/21/24]

[Section titled “v18.2.4200 [9/21/24]”](#v1824200-92124-1)updated package to conform with @windmillcode/wml-components-base

### v18.2.5001 [9/22/24]

[Section titled “v18.2.5001 [9/22/24]”](#v1825001-92224)updated package to reflect the version  18.2.5 of @angular/core package

### v18.2.6000 [10/1/24]

[Section titled “v18.2.6000 [10/1/24]”](#v1826000-10124)updated package to reflect the version  18.2.6 of @angular/core package

### v18.2.7000 [10/2/24]

[Section titled “v18.2.7000 [10/2/24]”](#v1827000-10224)updated package to reflect the version  18.2.7 of @angular/core package

### v18.2.7001 [10/5/2024 11:03:42 AM EST]

[Section titled “v18.2.7001 [10/5/2024 11:03:42 AM EST]”](#v1827001-1052024-110342-am-est)[UPDATE] onError property updated in <code dir="auto">projects/wml-components-base/src/lib/models.ts</code> Previously <code dir="auto">onError</code> was optional. Now it’s an empty function by default.
This means if <code dir="auto">onError</code> is not set, it still exists as a function and won’t cause issues.
Developers don’t have to worry about <code dir="auto">onError</code> being undefined anymore.



### v18.2.7010 [10/9/2024 11:20:32 AM EST]

[Section titled “v18.2.7010 [10/9/2024 11:20:32 AM EST]”](#v1827010-1092024-112032-am-est)[UPDATE] projects/wml-components-base/src/lib/models.ts added WMLUri class, which lets you build URLs with scheme, host, port, path, query, and fragment. You can now use this to manage URLs and get domain or fqdn directly.



### v18.2.7020 [10/10/2024 2:15:30 PM EST]

[Section titled “v18.2.7020 [10/10/2024 2:15:30 PM EST]”](#v1827020-10102024-21530-pm-est)[PATCH]
In <code dir="auto">WMLMotionUIProperty</code> inside <code dir="auto">projects/wml-components-base/src/lib/models.ts</code> , added a new <code dir="auto">eventType</code> property to handle either “subject” or “callback” events. If you’re dealing with frameworks like Angular, expect this to default to “subject.” but you can override at your covenience just know that you cant use both becuase internally there would be a conflict with the management of static variables between the two classes

[UPDATE]
The <code dir="auto">triggerMotionEndEvent</code> and <code dir="auto">triggerMotionKeyFrameEvent</code> functions now use the <code dir="auto">eventType</code> to decide how to handle events, so make sure you adjust accordingly if your app isn’t Angular-based. in <code dir="auto">WMLMotionUIProperty</code> 

[UPDATE]
Deprecated comments on <code dir="auto">cdref</code> getter and setter were removed in <code dir="auto">WMLView</code> inside <code dir="auto">projects/wml-components-base/src/lib/models.ts</code> . You won’t see any more notes about using <code dir="auto">angular.cdref</code> —just use it directly now.



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

[Section titled “v19.0.1000 [11/26/24]”](#v1901000-112624)updated package to conform with @windmillcode/wml-components-base[](/Windmillcode-Angular-CDK-Docs/19.0.0/intro/wml-three)