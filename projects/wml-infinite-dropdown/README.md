# Overview

The `wml-infinite-dropdown` library provides a flexible and dynamic dropdown component for Angular applications, aiming to enhance user interfaces with nested and infinitely cascading options. It addresses the need for a versatile dropdown menu in Angular projects, offering a solution that supports multiple levels of navigation and interaction. This library is particularly useful for developers looking to implement complex menu structures without the hassle of managing intricate state logic or nested structures manually.

Central to this library is the `WmlInfiniteDropdownComponent`, which serves as the main container for the dropdown items. This component can be dynamically populated with a variety of options and sub-options, allowing for deep nesting and a hierarchical menu structure. Alongside it, the `WmlInfiniteDropdownItemComponent` represents individual items within the dropdown, which can be further customized using the `WmlSampleInfiniteDropdownItemComponent`. These components work in tandem to render the dropdown menu, manage its state, and handle user interactions. Developers can customize the appearance and behavior of the dropdown through parameters like `WmlInfiniteDropdownParams` and `WmlInfiniteDropdownOption`, which offer control over the items' content, styling, and interaction handlers. This level of interactivity and customization enables the creation of complex menu systems that are both functional and visually appealing. The library's design encourages a modular approach, where the main dropdown component acts as a container that can be filled with various configurable options, promoting reusability and maintainability in Angular applications.


# Installation

```bash
npm install -d @windmillcode/angular-wml-infinite-dropdown
```

# Usage

To integrate the `wml-infinite-dropdown` component into your Angular project, you can follow these examples to cater to various development needs. The examples demonstrate how to use the component in your template (HTML) and how to configure it in your TypeScript file.

## Basic Example

### HTML

```html
<wml-infinite-dropdown [params]="dropdownParams"></wml-infinite-dropdown>
```

### TypeScript

```typescript
import { Component, OnInit } from '@angular/core';
import { WmlInfiniteDropdownParams } from '@windmillcode/angular-wml-infinite-dropdown';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
})
export class MyComponent implements OnInit {
  dropdownParams: WmlInfiniteDropdownParams;

  ngOnInit() {
    this.dropdownParams = new WmlInfiniteDropdownParams({
      items: ['Option 1', ['Option 2', 'Sub-option 1', 'Sub-option 2'], 'Option 3'],
    });
  }
}
```

## Customizing Dropdown Options

### HTML

```html
<wml-infinite-dropdown [params]="customDropdownParams"></wml-infinite-dropdown>
```

### TypeScript

```typescript
import { WmlInfiniteDropdownParams, WmlInfiniteDropdownOption } from '@windmillcode/angular-wml-infinite-dropdown';

// Define your custom option component similar to WmlSampleInfiniteDropdownItemComponent in the library

this.customDropdownParams = new WmlInfiniteDropdownParams({
  items: [
    new WmlInfiniteDropdownOption({
      text: 'Custom Option 1',
      custom: {
        cpnt: MyCustomDropdownItemComponent,
        params: { /* custom params */ },
      },
    }),
    'Option 2',
  ],
});
```

## Handling Selection

You can handle selection by adding click event listeners to the dropdown options. Define your event handling logic in the TypeScript file and bind it to the `click` property of the `WmlInfiniteDropdownOption`.

### TypeScript

```typescript
this.selectionDropdownParams = new WmlInfiniteDropdownParams({
  items: [
    new WmlInfiniteDropdownOption({
      text: 'Selectable Option 1',
      click: () => this.onSelectOption(1),
    }),
    new WmlInfiniteDropdownOption({
      text: 'Selectable Option 2',
      click: () => this.onSelectOption(2),
    }),
  ],
});

onSelectOption(optionId: number) {
  console.log(`Option ${optionId} selected`);
}
```

In the HTML, you would use the same template as in the basic example, passing `selectionDropdownParams` to the `[params]` input of `wml-infinite-dropdown`.
```

```markdown
# Usage

To integrate the `wml-infinite-dropdown` component into your Angular project, you can follow these examples to cater to various development needs. The examples demonstrate how to use the component in your template (HTML) and how to configure it in your TypeScript file.

## Basic Example

### HTML

```html
<wml-infinite-dropdown [params]="dropdownParams"></wml-infinite-dropdown>
```

### TypeScript

```typescript
import { Component, OnInit } from '@angular/core';
import { WmlInfiniteDropdownParams } from '@windmillcode/angular-wml-infinite-dropdown';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
})
export class MyComponent implements OnInit {
  dropdownParams: WmlInfiniteDropdownParams;

  ngOnInit() {
    this.dropdownParams = new WmlInfiniteDropdownParams({
      items: ['Option 1', ['Option 2', 'Sub-option 1', 'Sub-option 2'], 'Option 3'],
    });
  }
}
```

## Customizing Dropdown Options

### HTML

```html
<wml-infinite-dropdown [params]="customDropdownParams"></wml-infinite-dropdown>
```

### TypeScript

```typescript
import { WmlInfiniteDropdownParams, WmlInfiniteDropdownOption } from '@windmillcode/angular-wml-infinite-dropdown';

// Define your custom option component similar to WmlSampleInfiniteDropdownItemComponent in the library

this.customDropdownParams = new WmlInfiniteDropdownParams({
  items: [
    new WmlInfiniteDropdownOption({
      text: 'Custom Option 1',
      custom: {
        cpnt: MyCustomDropdownItemComponent,
        params: { /* custom params */ },
      },
    }),
    'Option 2',
  ],
});
```

## Handling Selection

You can handle selection by adding click event listeners to the dropdown options. Define your event handling logic in the TypeScript file and bind it to the `click` property of the `WmlInfiniteDropdownOption`.

### TypeScript

```typescript
this.selectionDropdownParams = new WmlInfiniteDropdownParams({
  items: [
    new WmlInfiniteDropdownOption({
      text: 'Selectable Option 1',
      click: () => this.onSelectOption(1),
    }),
    new WmlInfiniteDropdownOption({
      text: 'Selectable Option 2',
      click: () => this.onSelectOption(2),
    }),
  ],
});

onSelectOption(optionId: number) {
  console.log(`Option ${optionId} selected`);
}
```

In the HTML, you would use the same template as in the basic example, passing `selectionDropdownParams` to the `[params]` input of `wml-infinite-dropdown`.



# Docs

## WmlInfiniteDropdownParams

| Property            | Type                                   | Description                                               |
|---------------------|----------------------------------------|-----------------------------------------------------------|
| `options`           | `Array<WmlInfiniteDropdownOption \| WmlInfiniteDropdownParams>` | List of options or sub-dropdowns.                         |
| `customize`         | `Object`                               | Object to customize dropdown and option properties.       |

## WmlInfiniteDropdownOption

| Property          | Type                               | Description                                            |
|-------------------|------------------------------------|--------------------------------------------------------|
| `text`            | `string`                           | Display text for the dropdown option.                  |
| `click`           | `Function`                         | Click event handler for the option.                    |
| `dropdown`        | `WmlInfiniteDropdownParams`        | Nested dropdown parameters, if any.                    |
| `openDropdown`    | `Function`                         | Function to programmatically open the dropdown.        |
| `closeDropdown`   | `Function`                         | Function to programmatically close the dropdown.       |
| `pointerleave`    | `Function`                         | Pointer leave event handler.                           |
| `pointerenter`    | `Function`                         | Pointer enter event handler.                           |
| `custom`          | `WMLCustomComponent`               | Custom component to be used as the dropdown item.      |

## Functions

### generateClassPrefix

| Parameter   | Type     | Description                           |
|-------------|----------|---------------------------------------|
| `prefix`    | `string` | Prefix to be added to the class name. |

**Returns:** A function that, when called with a string, concatenates the prefix and the provided string.

### updateClassString

| Parameter    | Type     | Description                                |
|--------------|----------|--------------------------------------------|
| `obj`        | `Object` | Object containing class-related properties.|
| `myClassDefault` | `string` | Default class string.                  |
| `classListDefault` | `string` | Default class list string.             |

**Returns:** A function to update the class string based on the provided parameters.

### addCustomComponent

| Parameter    | Type               | Description                          |
|--------------|--------------------|--------------------------------------|
| `vcf`        | `ViewContainerRef` | Reference to the view container.     |
| `cpnt`       | `Type<any>`        | Component type to be added.          |
| `params`     | `any`              | Parameters to be passed to the component. |

**Returns:** The reference to the created component.


# Changelog
## .0.0.1
  infinite dropdown supported
## . 0.0.2
  custom dropdown entries supported
## . 0.1.0
  able to customerize option containers
  able to specficy an interactionType of hover or click
##  0.1.1
  safari ios support replaced option tag with p tag to get component options to render
##  0.1.2
  proivded WmlInfiniteDropdownOption.detectChangeSubj the end developer can call to detectChanges when the developer makes an update that should reflect visually on the UI
## 0.1.3
  removed unneeded WmlInfiniteDropdownComponent.listenForOptions changes
## 0.1.4
  removed a console.log stmt
## 0.1.5
  * added cursor pointer to the WmlInfiniteDropdownItemComponent
## 0.2.0
  * added closeDropdown and openDropdown
## 0.2.1
  * addded WMLInfiniteDropdownOptionBase to help with typing issues using as base for options and dropdown classes. added id for optionsParams for e2e testing


## 1.0.1
* MAJOR rename to angular-wml-infinite-dropdown
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
WmlInfiniteDropdownNGXTranslateModule
// for regular
WmlInfiniteDropdownModule
```

## 1.0.2
* added isPresnt support to hide the p tag for wml-sample-dropdown-option

## 1.0.3
* remove max width for dropdown items

## 1.1.0
* added cdref access to WmlInfiniteDropdownOption and WmlInfiniteDropdownParams which extends WMLView

## 1.1.1
* added components cdref to WmlInfiniteDropdownParams
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
 * updated package to reflect the version  v16.2.93 of @angular/core package,  ,
## v16.2.100
 * updated package to reflect the version  v16.2.100 of @angular/core package,  ,
## v16.2.110
 * updated package to reflect the version  v16.2.110 of @angular/core package,  ,
## v16.2.120
 * updated package to reflect the version  v16.2.120 of @angular/core package,  ,
## v17.0.10
 * updated package to reflect the version  v17.0.10 of @angular/core package,  ,
## v17.0.11
 * updated package to reflect the version  v17.0.11 of @angular/core package,

## v17.0.12
* updated css and scss variables for the component to be indepent of windmillcode applications
,
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
 * updated package to reflect the version  ^17.1.3 of @angular/core package
## v17.1.3001 [2/8/24]
* added isPresent to WmlInfiniteDropdownParams constructor
,
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
 * updated package to reflect the version  ^17.3.1 of @angular/core package