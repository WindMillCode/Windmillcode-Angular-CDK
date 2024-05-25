# Overview

The `wml-mobile-nav-zero` library offers a comprehensive solution for integrating a mobile navigation menu into Angular applications. It's designed to enhance user experience on mobile devices by providing a dynamic and responsive navigation system. The library leverages Angular's powerful framework to offer a seamless and interactive menu system, which is both easy to integrate and customizable to fit the specific needs of an application. The primary goal of `wml-mobile-nav-zero` is to simplify the implementation of a mobile navigation menu, providing developers with a set of tools that facilitate the creation of a multi-level, collapsible, and accessible navigation structure.

Central to the `wml-mobile-nav-zero` library is the `WmlMobileNavZeroComponent`, which acts as the main container for the navigation system. This component utilizes the `WmlInfiniteDropdownParams` to dynamically generate a mobile-friendly, nested dropdown structure. The interactivity within the components allows for a highly customizable user experience, enabling developers to define their navigation hierarchy and visual style with ease. Customization is further supported through a variety of parameters and methods, allowing for dynamic content loading and real-time updates to the navigation structure. The typical implementation involves integrating the `WmlMobileNavZeroComponent` within an Angular application, configuring its parameters to define the navigation items, and customizing its appearance and behavior to match the application's design and functional requirements.

# Installation

```bash
npm install -d @windmillcode/angular-wml-mobile-nav-zero
```

# Usage

To integrate the `wml-mobile-nav-zero` component into your Angular project, you can follow these examples to cater to various development needs. These examples illustrate how to use the component in your template (HTML) and how to configure it in your TypeScript file.

## Basic Example

To use the `wml-mobile-nav-zero` component, you first need to define the dropdown items using `WmlInfiniteDropdownParams`. Then, incorporate the `wml-mobile-nav-zero` component in your template and bind the parameters.

### HTML

```html
<wml-mobile-nav-zero [params]="mobileNavParams"></wml-mobile-nav-zero>
```

### TypeScript

```typescript
import { Component, OnInit } from '@angular/core';
import { WmlMobileNavZeroParams, WmlInfiniteDropdownParams } from '@windmillcode/angular-wml-mobile-nav-zero';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
})
export class MyComponent implements OnInit {
  mobileNavParams: WmlMobileNavZeroParams;

  ngOnInit() {
    this.mobileNavParams = new WmlMobileNavZeroParams({
      items: [
        new WmlInfiniteDropdownParams({ items: ['Home'] }),
        new WmlInfiniteDropdownParams({ items: ['About'] }),
        new WmlInfiniteDropdownParams({ items: ['Contact'] }),
      ],
      isPresent: true, // Initially visible
    });
  }
}
```

## Interactive Dropdown

To create an interactive dropdown where each item has a different action or navigation path, you can add click event handlers to the `WmlInfiniteDropdownOption` items.

### TypeScript

```typescript
import { WmlInfiniteDropdownParams, WmlInfiniteDropdownOption } from '@windmillcode/angular-wml-mobile-nav-zero';

this.mobileNavParams = new WmlMobileNavZeroParams({
  items: [
    new WmlInfiniteDropdownParams({
      items: [
        new WmlInfiniteDropdownOption({
          text: 'Interactive Option 1',
          click: () => this.onSelectOption(1),
        }),
        new WmlInfiniteDropdownOption({
          text: 'Interactive Option 2',
          click: () => this.onSelectOption(2),
        }),
      ],
    }),
  ],
});

onSelectOption(optionId: number) {
  console.log(`Option ${optionId} selected`);
}
```

In the HTML, you would use the same template as in the basic example, binding `mobileNavParams` to the `[params]` input of `wml-mobile-nav-zero`.


```markdown
# Docs

## WmlMobileNavZeroParams

| Property       | Type                          | Description                                              |
|----------------|-------------------------------|----------------------------------------------------------|
| `items`        | `WmlInfiniteDropdownParams[]` | An array of `WmlInfiniteDropdownParams` to define the dropdown items in the navigation. |
| `isPresent`    | `boolean`                     | Determines if the mobile navigation is present on the DOM. |
| `state`        | `"open" \| "closed"`          | The initial state of the mobile navigation ("open" or "closed"). |

## Methods

### WmlMobileNavZeroParams

| Method     | Parameters | Return Type | Description                                           |
|------------|------------|-------------|-------------------------------------------------------|
| `open`     | None       | `void`      | Opens the mobile navigation.                          |
| `close`    | None       | `void`      | Closes the mobile navigation.                         |
| `toggle`   | None       | `void`      | Toggles the mobile navigation's open/close state.     |
| `update`   | `params: Partial<WmlMobileNavZeroParams>` | `void` | Updates the parameters of the mobile navigation. |

## Events

### WmlMobileNavZeroParams

| Event      | Type       | Description                                              |
|------------|------------|----------------------------------------------------------|
| `opened`   | `Subject<void>` | Observable that emits when the navigation is opened.    |
| `closed`   | `Subject<void>` | Observable that emits when the navigation is closed.    |
```





# Changelog

## v0.0.1
  * project is not yet ready should be able to open and close
## v0.0.2
  * component is fully operational
## 1.0.4
  * you can safely rely on isPresent to by default show and hide the mobile nav on the dom
  * corrected dependencies
  * ensure if mobileParams.isPresent is set to true the component would appear on the dom
  * fixed major problems concerning ngx-translate
```ts
// translate
// first make sure to have ONLY ONE in the imports for AppModule
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps:[HttpClient]
      }
    }),
// then
WmlMobileNavZeroNGXTranslateModule
// for regular
WmlMobileNavZeroModule
```
* mobile nav can scroll if mobile screens are too big


* fixed a css issues where nav items that opened to the side were not seen


## 16.2.4-0
* started to name packages after angular core versioning

## 16.2.4-1
* isolated css to not interfere with applcation css

## 16.2.5-0
* made it easier to style component
%!(EXTRA string=
## v16.2.80
 * updated package to reflect the version  16.2.80 of @angular/core package),
## v16.2.80
 * updated package to reflect the version  16.2.80 of @angular/core package,
## v16.2.90
 * updated package to reflect the version  16.2.90 of @angular/core package,
## v16.2.91
 * updated package to reflect the version  16.2.91 of @angular/core package,
## v16.2.93
 * updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,
## v16.2.100
 * updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,
## v16.2.110
 * updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,
## v16.2.120
 * updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,
## v17.0.10
 * updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,
## v17.0.11
 * updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,
## v17.0.20
 * updated package to reflect the version  ^17.0.2 of @angular/core package,
## v17.0.40
 * updated package to reflect the version  ^17.0.4 of @angular/core package,
## v17.0.50
 * updated package to reflect the version  ^17.0.5 of @angular/core package,
## v17.0.60
 * updated package to reflect the version  ^17.0.6 of @angular/core package,
## v17.0.70
 * updated package to reflect the version  ^17.0.7 of @angular/core package,
## v17.0.7100
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.0.7200
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.0.7300
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.0.80
 * updated package to reflect the version  ^17.0.8 of @angular/core package,
## v17.0.8100
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.0.8102
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.0.8103
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.0.9000
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.0.9001
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.1.0000
 * updated package to reflect the version  ^17.1.0 of @angular/core package,
## v17.1.2
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.1.1000
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.1.2000 [2/5/24]
 * updated package to reflect the version  ^17.1.2 of @angular/core package,
## v17.1.2001 [2/8/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.1.3000 [2/8/24]
 * updated package to reflect the version  ^17.1.3 of @angular/core package,
## v17.2.1000 [2/17/24]
 * updated package to reflect the version  ^17.2.1 of @angular/core package,
## v17.2.2000 [2/23/24]
 * updated package to reflect the version  ^17.2.2 of @angular/core package,
## v17.2.2001 [2/23/24]
 * updated package to reflect the version  ^17.2.2 of @angular/core package,
## v17.2.3000 [2/28/24]
 * updated package to reflect the version  ^17.2.3 of @angular/core package,
## v17.2.3001 [3/2/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.2.3002 [3/5/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.2.4000 [3/8/24]
 * updated package to reflect the version  ^17.2.4 of @angular/core package,
## v17.2.4001 [3/12/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
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
 * updated package to reflect the version  ^17.3.4 of @angular/core package,
## v17.3.4001 [4/16/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.3.5000 [4/20/24]
 * updated package to reflect the version  ^17.3.5 of @angular/core package,
## v17.3.5110 [5/1/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.3.6000 [5/1/24]
 * updated package to reflect the version  ^17.3.6 of @angular/core package,
## v17.3.7000 [5/9/24]
 * updated package to reflect the version  ^17.3.7 of @angular/core package,
## v17.3.8000 [5/9/24]
 * updated package to reflect the version  ^17.3.8 of @angular/core package,
## v17.3.9000 [5/16/24]
 * updated package to reflect the version  ^17.3.9 of @angular/core package,
## v18.0.1 [5/22/24]
 * updated package to reflect the version  ^18.0.0 of @angular/core package,
## v18.0.4 [5/25/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   