# Overview

The `wml-select-zero` library is a specialized Angular component library designed to enhance form inputs by providing a robust and flexible select component. Its primary objective is to offer a more dynamic and feature-rich alternative to the native HTML select element, catering to the diverse needs of modern web applications. With its advanced functionalities, the library addresses common challenges faced in creating user-friendly, interactive forms, such as handling dynamic data sets, enabling search and filtering capabilities, and offering better control over the styling and behavior of select menus.

At the core of the `wml-select-zero` library are its central components: `WmlSelectComponent` and `WmlSelectOptionComponent`. The `WmlSelectComponent` acts as the main container for the select functionality, encapsulating the logic for opening and closing the dropdown, managing selections, and triggering custom events. The `WmlSelectOptionComponent` represents individual selectable items within the dropdown, providing a flexible structure for displaying options and handling user interactions. Developers can leverage these components to create highly interactive and customizable select menus, with support for single or multiple selections, search and filtering, and even asynchronous data loading. The library's design encourages a modular approach, where the `WmlSelectComponent` can be dynamically populated with `WmlSelectOptionComponent` instances, allowing for a high degree of customization and adaptability in different usage scenarios.


# Installation

```bash
npm install -d @windmillcode/angular-wml-select-zero
```

# Usage


## Basic Example

This example demonstrates how to integrate a simple select component with static options.

### HTML

```html
<wml-select [params]="selectParams">
  <wml-select-option *ngFor="let option of options" [value]="option.value">
    {{ option.label }}
  </wml-select-option>
</wml-select>
```

### TypeScript

```typescript
import { Component, OnInit } from '@angular/core';
import { WmlSelectParams } from 'wml-select-zero';

@Component({
  selector: 'app-my-select',
  templateUrl: './my-select.component.html'
})
export class MySelectComponent implements OnInit {
  selectParams: WmlSelectParams;
  options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' }
  ];

  ngOnInit() {
    this.selectParams = new WmlSelectParams({
      placeholder: 'Select an option',
      multiple: false
    });
  }
}
```

## Customizing Options

In this example, we customize the appearance of select options.

### HTML

```html
<wml-select [params]="customSelectParams">
  <wml-select-option *ngFor="let option of options" [value]="option.value" [customClass]="'custom-option-class'">
    {{ option.label }}
  </wml-select-option>
</wml-select>
```

### TypeScript

```typescript
import { Component, OnInit } from '@angular/core';
import { WmlSelectParams } from 'wml-select-zero';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html'
})
export class CustomSelectComponent implements OnInit {
  customSelectParams: WmlSelectParams;
  options = [
    { label: 'Custom Option 1', value: '1' },
    { label: 'Custom Option 2', value: '2' },
    { label: 'Custom Option 3', value: '3' }
  ];

  ngOnInit() {
    this.customSelectParams = new WmlSelectParams({
      placeholder: 'Select a custom option',
      multiple: true
    });
  }
}
```



## Changelog
### v0.0.1
* wml-select complete and ready
  * disabled support
  * default value support
  * update component support
  * update via formcontrol support

### v0.0.2
  * added WMLSelectZeroParams.updateOptionValuesWithOptionText so that if users wanted text and value they can use
  * made a minor change that will allow defaulr fields to populate under certain circumstances

### 16.2.60
* updated dependencies
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
## v18.0.1 [5/23/24]
 * updated package to reflect the version  ^18.0.0 of @angular/core package,
## v18.0.4 [5/25/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v18.0.1000 [5/29/24]
 * updated package to reflect the version  ^18.0.1 of @angular/core package,
## v18.0.2000 [6/6/24]
 * updated package to reflect the version  ^18.0.2 of @angular/core package,
## v18.0.3000 [6/13/24]
 * updated package to reflect the version  ^18.0.3 of @angular/core package,
## v18.0.3010 [6/18/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   