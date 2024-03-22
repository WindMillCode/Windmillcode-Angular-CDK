# Overview

The `wml-options` library is an Angular-based toolkit designed to enhance the handling and presentation of selectable options within Angular applications. It simplifies the process of creating, managing, and interacting with options, providing a robust foundation for developers to build upon. Key features of the library include dynamic option management, easy integration with forms, and extensive customization capabilities. It's engineered to solve common challenges in handling user choices in a scalable and efficient manner, making it an invaluable resource for developers seeking to implement sophisticated option selection mechanisms.

Central to the `wml-options` library are its core components: `WmlOptionsComponent`, `WmlOptionItemComponent`, and `WmlSampleOptionItemComponent`. The `WmlOptionsComponent` acts as a container, orchestrating the overall behavior of the options, including their presentation and state management. `WmlOptionItemComponent` represents individual selectable items, providing the necessary hooks for interactivity and state tracking. The `WmlSampleOptionItemComponent` serves as an example implementation, showcasing how option items can be customized and styled. These components work in concert, allowing for a high degree of interactivity and customization. Developers can tailor the behavior and appearance of the components using input parameters, methods, and services provided by the library, facilitating the creation of a user experience that aligns with the specific requirements of their application.

The library encourages a pattern where `WmlOptionsComponent` is used as a container to hold multiple `WmlOptionItemComponent` instances, representing individual selectable options. This architecture enables a clear separation of concerns, making the management of options more intuitive and maintainable. Through the use of input parameters and services, developers can dynamically load content, bind data, and handle user interactions, allowing for a flexible and dynamic implementation of option selection features within Angular applications.

# Installation

```bash
npm install -d @windmillcode/angular-wml-options
```


# Usage

The `wml-options` library provides a flexible way to incorporate options selection functionality into Angular applications. It allows developers to easily create and manage a set of selectable options, handling user interactions and state management seamlessly.

## Basic Usage

To use `wml-options` in your component, you need to include it in your module's imports and declare it in your component. Here's a basic example of how to integrate `wml-options` into your application.

### HTML

```html
<wml-options [params]="optionsParams"></wml-options>
```

### TypeScript

```typescript
import { Component } from '@angular/core';
import { WMLOptionsParams, WMLOptionItemParams } from '@windmillcode/angular-wml-options';

@Component({
  selector: 'app-options-example',
  templateUrl: './options-example.component.html',
})
export class OptionsExampleComponent {
  optionsParams: WMLOptionsParams;

  constructor() {
    this.optionsParams = new WMLOptionsParams({
      options: [
        new WMLOptionItemParams({ text: 'Option 1' }),
        new WMLOptionItemParams({ text: 'Option 2' }),
        new WMLOptionItemParams({ text: 'Option 3' }),
      ],
      chosen: [],
      formArray: null,
    });
  }
}
```

This setup creates a basic options component with three selectable options. The `WMLOptionsParams` and `WMLOptionItemParams` classes are used to configure the options component and its items.

## Customizing Options

You can customize each option by modifying `WMLOptionItemParams`. For instance, you can provide a custom click behavior or assign specific classes based on the option's state.

### TypeScript

```typescript
this.optionsParams = new WMLOptionsParams({
  options: [
    new WMLOptionItemParams({
      text: 'Custom Option 1',
      clickPredicate: () => console.log('Custom Option 1 clicked'),
    }),
    // Other options...
  ],
  chosen: [],
  formArray: null,
});
```

## Interacting with FormArray

`wml-options` can be integrated with Angular's `FormArray` to capture user selections and react to changes.

### TypeScript

```typescript
import { FormArray, FormControl } from '@angular/forms';

this.optionsParams = new WMLOptionsParams({
  options: [
    // Option definitions...
  ],
  chosen: [],
  formArray: new FormArray([
    new FormControl('Option 1'),
    new FormControl('Option 2'),
  ]),
});
```

In this example, `formArray` is used to track the selected options, enabling integration with Angular forms.

By following these examples, developers can leverage `wml-options` to add customizable, interactive options components to their Angular applications, enhancing user interaction and data collection.


# Docs

Below are the reference details for the `wml-options` library, focusing on properties, methods, and functions relevant to developers.

## WMLOptionsParams

Configuration parameters for `wml-options` component.

| Property                        | Type                   | Description                                                  |
| ------------------------------- | ---------------------- | ------------------------------------------------------------ |
| `options`                       | `WMLOptionItemParams[]`| Array of options to be displayed.                            |
| `chosen`                        | `WMLOptionItemParams[]`| Array of chosen (selected) options.                          |
| `limit`                         | `number`               | Limit on the number of selectable options.                   |
| `formArray`                     | `FormArray`            | Angular FormArray to track the chosen options.               |
| `listenForClearedFormIsEnabled` | `boolean`              | Determines if the component listens for the clearing of the form. |
| `updateFormArrayPredicate`      | `Function`             | Function to transform option data before updating the FormArray. |

## WMLOptionItemParams

Configuration parameters for each option item in `wml-options`.

| Property          | Type        | Description                                                    |
| ----------------- | ----------- | -------------------------------------------------------------- |
| `isChosen`        | `boolean`   | Indicates if the option is selected.                           |
| `text`            | `string`    | Text to be displayed for the option.                           |
| `toggleClass`     | `string`    | Class to toggle when the option is chosen or unchosen.         |
| `clickPredicate`  | `Function`  | Custom function to execute when the option is clicked.         |
| `wmlOptions`      | `WMLOptionsParams` | Reference to the parent `WMLOptionsParams`.                    |
| `customCpnt`      | `WMLCustomComponent` | Custom component to be used for rendering the option.         |

These tables offer a comprehensive guide to the properties and methods available for developers when integrating and customizing the `wml-options` library in Angular applications.

# Changelog
## 1.0.4
  * added WMLOptionsParams.restoreInitalValuesInFormArray a readyonly function that will reset the FormArray for wmloptions useful when reusing the same formArray in a WMLOptionsComponent
## 2.0.0
  * user has the option to enable/disable i18n support
* to enable
```ts
// in a utils file
import enTranslations from "src/assets/i18n/en.json";
import { WMLModuleForRootParams, WMLNGXTranslateLoader} from '@windmillcode/wml-components-base'
let getI18NObj = (lang)=>{
  let i18nObj ={
    en:enTranslations
  }[lang]
  return i18nObj
}
//


    WmlOptionsModule
    .forChild(
      new WMLModuleForRootParams({
        ngxTranslateLoaderFactory:()=> new WMLNGXTranslateLoader(getI18NObj)
      })
    ),
```
* to disable
```ts
    WmlOptionsModule

```

## v3.0.1
  * MAJOR rename to angular-wml-options
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
WmlOptionsNGXTranslateModule
// for regular
WmlOptionsModule
```

## v4.0.0
  * added support for additional functionality for the end developer to allow for a clickPredicate on wmloptionsItems
  * simply assign a value to the click fn and everything works!

## v4.0.1
  * option item has its own id on the selctor

## v16.2.5-2
* provided WMLOptionsParams.listenForClearedFormIsEnabled to automtically toggle off all option classes, so the developer wont have to do them their selves
* provided wmlOptions as a property of wmlOptionsParams
%!(EXTRA string=
## v16.2.80
 * updated package to reflect the version  16.2.80 of @angular/core package),
## v16.2.80
 * updated package to reflect the version  16.2.80 of @angular/core package,
## v16.2.90
 * updated package to reflect the version  16.2.90 of @angular/core package,
## v16.2.91
 * updated package to reflect the version  16.2.91 of @angular/core package

##  v16.2.92
* MAJOR update, fixed critical bug where even through the form is clear when the user wants to clear the form, the point where updateFormArray is called should not emit event as the formArray updates itself to the current state

## 16.2.93
* [FIX]  fix logic errors with wml-options based where fields and chosen values were not toggling properly along with unit test cases
,
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
