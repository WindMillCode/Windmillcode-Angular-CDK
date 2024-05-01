# Overview
When working on web application there is no basis point. This angular library makes a foundation from which all your application should be based on. WMLUIProperty represents the basic building block of every single thing (down to the pixel) that exists in a web application.
When in a development you are always dealing with an element proeprty as defined in the  WMLUIProperty of the docs
all those features are encapsulated into WMLUIProperty
then there are subclasses like WMLRoute for routes WMLView for dynamic compoennts and WMLAnimateUIProperty for css animations
check out the docs below!

# Installation

```bash
npm install -s @windmillcode/angular-wml-components-base

```

# Docs

## WMLUIProperty
| Property | Type | Description |
| --- | --- | --- |
| `isPresent` | `boolean` | Indicates whether the target HTMLElement is present. Default is `true`. |
| `value` | `V` | The value property . Default is an empty string (`""`). |
| `text` | `string` | Optional text . |
| `class` | `string` | Gets or sets the CSS class of the target HTMLElement. |
| `style` | `Partial<CSSStyleDeclaration>` | Partial CSS styles for the target HTMLElement. |
| `type` | `T` | Type property for when an entity can have more than one type. |
| `click` | `(evt?: Event) => void` | Click event handler for target HTMLElement. |
| `id` | `string` | Identifier for the target HTMLElement. Default is an empty string (`""`). |


## WMLView
| Property | Type | Description |
| --- | --- | --- |
| `cdref` | `ChangeDetectorRef` | Angular `ChangeDetectorRef` associated with the component. |

## WMLRoute
| Property | Type | Description |
| --- | --- | --- |
| `route` | `string` | Route property specific to `WMLRoute`. Default is `"/"`. |

## WMLAnimateUIProperty
### Properties
|Property|Type|Description|
|--- |--- |--- |
|beginOpenStyles|WMLUIProperty["style"]|Styles for the beginning of the open animation.|
|beginCloseStyles|WMLUIProperty["style"]|Styles for the beginning of the close animation.|
|endOpenStyles|WMLUIProperty["style"]|Styles for the end of the open animation.|
|endCloseStyles|WMLUIProperty["style"]|Styles for the end of the close animation.|
|helperStyles|WMLUIProperty["style"]|Helper styles to prevent animation jank you can overwrite with {} if it intereferes with your work.|
|animationClass|string|CSS class specifically for animations.|
|animationState|WMLAnimateUIPropertyState|Current state of the animation.|
|animationEndEvent|Subject<WMLAnimateUIPropertyState>| triggers when aninamtion is finally opened or closed.|

### Methods
|Method|Signature|Description|
|--- |--- |--- |
|getGroupAnimationState|() => WMLAnimateUIPropertyState|Returns the current state of the animation.|
|animationEnd|(evt?: Event) => void|Handles the animation end event.|
|openAnimation|() => void|Triggers the open animation.|
|closeAnimation|() => void|Triggers the close animation.|
|toggleAnimation|(val: 'forward' \| 'reverse') => void|Toggles the animation based on the direction.|


### Example
```html
<div
  [ngStyle]="readme.style"
  (animationend)="readme.animationEnd($event)"
  [class]="readme.class">
</div>
```
```scss
  @keyframes toggle-readme{
    0%{
      left: 100%;
    }
    100%{
      left: 0%;
    }
  }

  .Readme {
    padding:2em;
    position: relative;
    flex: 0 0 50%;
  }
  .ReadmeAnimation0{
    // you could want to setup multiple animations for the same element in yoru code
    animation: toggle-readme;
    animation-delay: 1s;
    animation-duration: 3s;
  }

```
```ts
  readme = new WMLAnimateUIProperty({
    class:this.classPrefix("Readme"),
    endOpenStyles:{
      left:"0%"
    },
    endCloseStyles:{
      left:"100%",
      display:"none"
    },
    beginOpenStyles:{
      display:"block",
      left:"100%",
    }
  })

  initAnimationObjects() {
    ;[ this.readme]
    .forEach((uiProperty, index0) => {
      uiProperty.cdref =this.cdref
    });
  }

```


# Changelog

v0.9.4
  added WMLQueue just a regular Queue data structure thats all

v0.9.5
  added index accessing for WMLQueue


##  0.10.0
  add generateRandomNumber, generateRandomColor,and selectRandomOptionFromArraywml

## 0.10.1
  returned the ref created by addCustomComponent

## 0.10.2
  WMLAPIPaginationRequestModel["sort"][number]["direction"] enums are now "ASC" |"DESC" | ""

## 0.10.3
  add WMLAPIPaginationResponseModel["columns"] of type
```ts
Array<{
    value:string,
    type?:string
  }>
```
  to provide the developer column information

## 0.10.4
  made  WMLAPIPaginationResponseModel["data"] Array generic

## 0.10.5
  added generateClassPrefix method  to functions

## 0.10.6
  * updated Function signatuire on WMLUIProperty#click so the event option is optional

## 0.11.0
  * provided WMLNGXTranslateLoader to work with ngx-translate
  * provided WMLModuleForRootParams to work with

## 0.11.1
  * attempting to deal with an issue where numbers are being returned if no feature is present

## 1.0.0
  * major change
  functions#addCustomComponent ref.instance.ngOnInit?.() only gets called if the angular versions is less than 14.1.0

## 1.1.0
* minor change
* added WMLDeepPartial, a utility types that will make all your nested properties optional
* modified WMLNGXTranslateLoader#i18nLocation to return undefined so numbers dont turn to the indexes of the string

## 2.0.0
* MAJOR rename to angular-wml-components-base


## 2.1.1
* added fn replaceValuesWithPaths which will recursively go through an object and return a new obj with its values in path representation great for i18n

## 2.1.2
* made a fix in genearate random color, where some times 5 digits where returned

## 2.2.0
* WMLUIProperty.id by default is "" should help with type should hurt if your code depends on it it is still optional

## 2.2.3
* generateClassPrefix prefix parameter supports ="" as default use case,ids and will remove the subsequent _ if its there
* WMLUIProperty["id"] default param is ""

## 16.2.5-0
* provided access to WMLOptionsParams to the the container cpnt

## 16.2.70
* wmlapipaginationrequestmodel#filter[].value is now the any type
%!(EXTRA string=
## v16.2.80
 * updated package to reflect the version  16.2.80 of @angular/core package),
## v16.2.80
 * updated package to reflect the version  16.2.80 of @angular/core package,
## v16.2.90
 * updated package to reflect the version  16.2.90 of @angular/core package,
## v16.2.91
 * updated package to reflect the version  16.2.91 of @angular/core package

## 16.2.92
  * provided spyOnForES6Imports, which finally allows you to spyOnFunctions on es6 imports however refer to the stack overflow project on how to [configure your angular app](https://stackoverflow.com/a/77298152/7513181) in order to get this to work it will not work alone

*in test.ts
```ts
...
const { defineProperty } = Object;
Object.defineProperty = function(object, name, meta) {
  if (meta.get && !meta.configurable) {
    // it might be an ES6 exports object
    return defineProperty(object, name, {
      ...meta,
      configurable: true,
    });
  }

  return defineProperty(object, name, meta);
};

...
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
```
* tsconfig.spec.json
```json
...
  "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "types": [
      "jasmine","node"
    ],
    "module": "commonjs"
  },
...
```

## 16.2.93
* added mockDeclarations to wmltestutils so users can add their declarations
,
## v16.2.93
 * updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,
## v16.2.100
 * updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,

## v16.2.110
 * updated package to conform with @windmillcode/angular-wml-components-base for unit testing features



## v16.2.112
* update type inference for replaceValuesWithPaths to be more friendly

## v16.2.113
* added createBasicObservableError and WMLTestHttpHandler for interceptor test cases and throwing observable errors
,
## v16.2.120
 * updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,
## v17.0.10
 * updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,
## v17.0.11
 * updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,
## v17.0.20
 * updated package to reflect the version  ^17.0.2 of @angular/core package

## v17.0.21
  * added data-source-utils.ts to help with pagination and data source logic
,
## v17.0.40
 * updated package to reflect the version  ^17.0.4 of @angular/core package,
## v17.0.50
 * updated package to reflect the version  ^17.0.5 of @angular/core package,
## v17.0.60
 * updated package to reflect the version  ^17.0.6 of @angular/core package,
## v17.0.70
 * updated package to reflect the version  ^17.0.7 of @angular/core package

## v17.0.7300
 * added WMLAnimateUIProperty as the basis for all entities meant to be animated


,
## v17.0.7300
 * updated package to conform with @windmillcode/angular-wml-components-base
,
## v17.0.8300
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.0.7300
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.0.80
 * updated package to reflect the version  ^17.0.8 of @angular/core package

## v17.0.8100
* prevented animation end event from propagating to child events, given the children are not exactly the same as the parent,
,
## v17.0.8100
 * updated package to conform with @windmillcode/angular-wml-components-base

## v17.0.8102
* added WMLAnimateUIProperty["helperStyles"] to help animations run more smootly its value is
```ts
  helperStyles:WMLUIProperty["style"]={
    transform:"translate3d(0,0,0)"
  }
```
and you can overwrite it as necessary
,
## v17.0.8103
 * updated package to conform with @windmillcode/angular-wml-components-base
,
## v17.0.9000
 * updated package to conform with @windmillcode/angular-wml-components-base

## v17.0.9001
* added generateIdPrefix
,
## v17.0.9000
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.0.9001
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.1.0000
 * updated package to reflect the version  ^17.1.0 of @angular/core package

## v17.1.2
* [BREAKING CHANGE] added WMLAnimateUIProperty.autoOpen, by default animations dont don anything
if you need your animations to autoOpen simply go through all your class instances and make the update

,
## v17.1.2
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.1.1000
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.1.2000 [2/5/24]
 * updated package to reflect the version  ^17.1.2 of @angular/core package

## v17.1.2001 [2/8/24]
* added toggle functionality for updateClassString
,
## v17.1.2001 [2/8/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.1.3001 [2/8/24]
 * updated package to reflect the version  ^17.1.3 of @angular/core package,
## v17.1.3000 [2/8/24]
 * updated package to reflect the version  ^17.1.3 of @angular/core package,
## v17.2.1000 [2/17/24]
 * updated package to reflect the version  ^17.2.1 of @angular/core package,
## v17.2.2000 [2/23/24]
 * updated package to reflect the version  ^17.2.2 of @angular/core package,
## v17.2.2001 [2/23/24]
 * updated package to reflect the version  ^17.2.2 of @angular/core package,
## v17.2.3000 [2/28/24]
 * updated package to reflect the version  ^17.2.3 of @angular/core package

## v17.2.3001 [3/22/24]
* created WMLComponentBaseZero which shortens and hides the complex logic of
our WMLComponents

#### New Features
- Introduced `WMLComponentBaseZero`, a new base class designed to simplify and encapsulate the complex logic associated with WML components. This enhancement aims to provide a cleaner and more intuitive interface for working with WML components.

#### Enhancements in `component-base.ts`:

1. **Refactored `WMLComponentBaseZeroProps`:**
   - Transitioned from a traditional class-based approach to a mixin-based pattern using `WMLComponentBaseZeroPropsMixin`. This change is intended to enhance flexibility and reusability across different component implementations.
   - The mixin `WMLComponentBaseZeroPropsMixin` is now used to dynamically extend a base class, incorporating custom properties and methods essential for WML components.
   - Introduced a new `setState` method within the mixin, providing a streamlined way to update component state.

2. **Introduced `WMLComponentBaseZero`:**
   - This new base class leverages `WMLComponentBaseZeroProps` to offer a robust foundation for component development.
   - The constructor now initializes class and ID prefixes if they are provided, enabling more consistent and predictable styling and DOM structure.
   - Enhanced the `listenForSetState` method to work seamlessly with the new state management approach, ensuring changes are propagated efficiently and reliably.

#### Key Changes to Note:
- The `listenForSetState` method now listens to changes from `setStateSubj`, aligning with the new state management strategy.
- Destructor (`ngOnDestroy`) logic has been updated to ensure proper cleanup, reducing the risk of memory leaks and ensuring better resource management.

#### Usage:
- To leverage the new `WMLComponentBaseZero`, extend your components from this base class and utilize the provided mechanisms for state management and lifecycle handling.
- The mixin approach offers enhanced customization, allowing developers to inject additional properties or methods as needed.

#### Recommendations:
- Review the updated implementation details in `WMLComponentBaseZero` and `WMLComponentBaseZeroPropsMixin` to fully understand the new component structure and behavior.
- Test your components thoroughly to ensure compatibility with the new base class and to leverage the improvements in state management and lifecycle handling.

This update signifies our commitment to improving the developer experience and streamlining component development within the WML ecosystem.
,
## v17.2.3001 [3/2/24]
 * updated package to conform with @windmillcode/angular-wml-components-base

## v17.2.3002 [3/5/24]
* [UPDATE] Added a new `fields` array of type `Array<{value:any}>` to the `WMLAPIPaginationRequestModel` class in `data-source-utils.ts`. This new field is designed to hold additional data fields that may be required during pagination requests.

* [PATCH] Modified the `animationEnd` method in the `WMLAnimateUIProperty` class within `models.ts`. The condition now removes any spaces from `this.animationClass` before checking its presence in the event target's className. This ensures the animation end logic accurately identifies the target regardless of space characters in the class name.
,
## v17.2.3002 [3/5/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.2.4000 [3/8/24]
 * updated package to reflect the version  ^17.2.4 of @angular/core package

## v17.2.4002 [3/12/24]
* [PATCH] In `wml-components-base/src/lib/component-base.ts`, added a new `ReplaySubject` called `setStateEvent`, which enhances state management within the component. Also adjusted the RxJS pipe in the `setState` method to include an additional operation that emits the updated state to `setStateEvent`, improving the reactivity of the component state.

,
## v17.2.4002 [3/12/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.2.4003 [3/13/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.2.4004 [3/13/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.3.0 [3/17/24]
 * updated package to reflect the version  ^17.3.0 of @angular/core package
,
## v17.3.1000 [3/22/24]
 * updated package to reflect the version  ^17.3.1 of @angular/core package,
## v17.3.2000 [3/28/24]
 * updated package to reflect the version  ^17.3.2 of @angular/core package,
## v17.3.3000 [4/4/24]
 * updated package to reflect the version  ^17.3.3 of @angular/core package,
## v17.3.4000 [4/11/24]
 * updated package to reflect the version  ^17.3.4 of @angular/core package

## v17.3.4001 [4/16/24]
  * added onError to wmlimage prperty
,
## v17.3.4001 [4/16/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.3.5000 [4/20/24]
 * updated package to reflect the version  ^17.3.5 of @angular/core package

## v17.3.5110 [4/20/24]
* [UPDATE] ensure dervied class passed type to base classes
Updated models.ts by add the WMLConstructorDecorator function, to streamline and optimize object initialization practices within the framework.

```ts
  constructor(params:Partial<T>={}){
    let origParams = Object.entries(params).filter(([key, val]) => {
      return !key.startsWith('param');
    });
    Object.assign(this, { ...Object.fromEntries(origParams) });
  }
```
so as not to overwhelm developers
to use
```ts
@WMLConstructorDecorator
export class T {
  constructor(params: Partial<T> = {}) { }
}
```

,
## v17.3.5110 [5/1/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   