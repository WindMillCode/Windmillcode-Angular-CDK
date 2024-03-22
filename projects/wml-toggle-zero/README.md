# Overview

The `wml-toggle-zero` library offers a specialized Angular component designed to enhance user interfaces with a toggle switch functionality. This library focuses on delivering a straightforward and efficient way to implement toggle switches in Angular applications, providing an intuitive and interactive element for users. The core purpose of this library is to offer a highly customizable toggle switch that can be seamlessly integrated into various Angular projects, facilitating user interactions for settings, preferences, or any scenario where a binary choice is required.

At the heart of the `wml-toggle-zero` library is the `WMLToggleZeroComponent`, a central component that embodies the toggle switch's functionality. This component allows for a high degree of customization and interactivity, offering developers the flexibility to adapt the toggle switch's appearance and behavior to fit their application's needs. Parameters such as `toggleBackgroundOffColor`, `toggleBackgroundOnColor`, and `textToggleLeftMargin` enable developers to customize the look and feel of the toggle, while properties like `toggleText` and `thumb` provide control over the switch's text labels and thumb indicator. Additionally, the `onToggle` method and `triggerToggle` function offer ways to interact with the toggle's state, enabling dynamic responses to user interactions. The library encourages a pattern where the `WMLToggleZeroComponent` acts as a standalone, reusable UI element, promoting modularity and ease of integration within larger application structures.


# Usage

To integrate and utilize the `wml-toggle-zero` component in your Angular application, follow the examples below. These examples demonstrate how to incorporate the toggle switch into your templates and manage its state and configurations through your component's TypeScript file.

## Basic Toggle Switch

### In Your Component's HTML

```html
<wml-toggle-zero [params]="basicToggleParams"></wml-toggle-zero>
```

### In Your Component's TypeScript

```typescript
import { Component } from '@angular/core';
import { WMLToggleZeroParams } from '@windmillcode/angular-wml-toggle-zero';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
})
export class ExampleComponent {
  basicToggleParams = new WMLToggleZeroParams({
    toggleText: { text: 'Off' },
    thumb: { value: false },
    onToggle: (self) => {
      self.toggleText.text = self.thumb.value ? 'On' : 'Off';
    }
  });
}
```

## Customized Toggle Switch

### In Your Component's HTML

```html
<wml-toggle-zero [params]="customToggleParams"></wml-toggle-zero>
```

### In Your Component's TypeScript

```typescript
import { Component } from '@angular/core';
import { WMLToggleZeroParams } from '@windmillcode/angular-wml-toggle-zero';

@Component({
  selector: 'app-custom-toggle',
  templateUrl: './custom-toggle.component.html',
})
export class CustomToggleComponent {
  customToggleParams = new WMLToggleZeroParams({
    toggleText: { text: 'Off', class: 'custom-toggle-text' },
    thumb: { value: false, class: 'custom-thumb' },
    container: { class: 'custom-container' },
    toggleBackgroundOffColor: 'rgba(255, 0, 0)',  // Red when off
    toggleBackgroundOnColor: 'rgba(0, 255, 0)',  // Green when on
    onToggle: (self) => {
      self.toggleText.text = self.thumb.value ? 'Active' : 'Inactive';
    }
  });
}
```

In the above examples, `WMLToggleZeroParams` is used to configure the toggle switch. The `toggleText` property sets the text label, `thumb` manages the toggle's thumb, and `container` styles the overall toggle component. The `onToggle` function updates the toggle's state and label dynamically based on user interaction.

# Docs
| Property                  | Type                    | Description                                                                                      |
|---------------------------|-------------------------|--------------------------------------------------------------------------------------------------|
| `id`                      | `string`                | Identifier for the toggle instance.                                                             |
| `container`               | `WMLUIProperty`         | An instance of the `WMLUIProperty` class representing the container of the toggle.               |
| `thumb`                   | `WMLUIProperty`         | An instance of the `WMLUIProperty` class representing the thumb of the toggle.                    |
| `toggleText`              | `WMLUIProperty`         | An instance of the `WMLUIProperty` class representing the text associated with the toggle.       |
| `textToggleLeftMargin`    | `number`                | The left margin for the toggle text.                                                             |
| `toggleBackgroundOffColor`| `string`                | The background color when the toggle is in the "Off" state.                                      |
| `toggleBackgroundOnColor` | `string`                | The background color when the toggle is in the "On" state.                                       |

| Method          | Description                                                                                                   |
|-----------------|---------------------------------------------------------------------------------------------------------------|
| `onToggle`      | Callback function triggered when the toggle state changes. Updates the toggle text based on the thumb value.|
| `triggerToggle`      | allows control of the toggle control.|


# Changelog


## v17.0.0
* component created and ready for production use

## v17.0.30
* added triggerToggle
,
## v17.0.40
 * updated package to reflect the version  ^17.0.4 of @angular/core package,
## v17.0.50
 * updated package to reflect the version  ^17.0.5 of @angular/core package,
## v17.0.60
 * updated package to reflect the version  ^17.0.6 of @angular/core package,
## v17.0.70
 * updated package to reflect the version  ^17.0.7 of @angular/core package

## v17.0.71
  * added support to be integrated with wml-form so that values can be passed to a form control

## v17.0.72
  * fixed code to remove deprecated scss warnings

## v17.0.73
* added listened so when form is edited via patchValue the changes apply

## v17.0.74
* added in disabled featured and corrected error when listenForFormValue changes was triggered till infinity
,
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
