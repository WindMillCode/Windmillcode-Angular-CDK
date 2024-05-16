# Overview

The `wml-penrose` library is an Angular module that provides a specialized set of components designed to create and manage complex penrose patterns within Angular applications. This library serves as a toolkit for developers to integrate sophisticated penrose designs into their web interfaces, offering a blend of aesthetic appeal and interactivity. With a focus on customization and dynamic content integration, `wml-penrose` aims to enhance the visual dimension of Angular applications while providing a seamless user experience.

At the heart of the `wml-penrose` library is the `PenroseComponent`, a central component responsible for rendering penrose patterns. This component serves as the primary interface for developers, encapsulating the complexity of penrose generation while exposing customizable properties and methods. Through its well-defined API, the `PenroseComponent` allows for dynamic adjustments, enabling developers to modify aspects of the pattern such as size, color, and animation. Additionally, the library is structured to facilitate interactivity, allowing components to respond to user actions or application events. By leveraging Angular's data binding and event handling capabilities, developers can create interactive penrose patterns that adapt to user interactions or application state changes, offering a dynamic and engaging user experience.


# Installation

```bash
npm install -d @windmillcode/angular-wml-penrose
```

# Usage

## Basic Penrose Pattern

### HTML

```html
<wml-penrose></wml-penrose>
```

### TypeScript

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {}
```

## Penrose Pattern with Dynamic Style

### HTML

```html
<wml-penrose [style]="{'width': width, 'height': height}"></wml-penrose>
```

### TypeScript

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  width = '300px';
  height = '300px';
}
```

## Penrose Pattern with Toggle Visibility

### HTML

```html
<button (click)="toggleVisibility()">Toggle Penrose Visibility</button>
<wml-penrose *ngIf="isVisible"></wml-penrose>
```

### TypeScript

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  isVisible = true;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
```

## Penrose Pattern with External Control

### HTML

```html
<wml-penrose [isPresent]="isPresent"></wml-penrose>
<button (click)="togglePresent()">Toggle Presence</button>
```

### TypeScript

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  isPresent = true;

  togglePresent() {
    this.isPresent = !this.isPresent;
  }
}
```

# Docs

## Properties

| Property     | Type      | Description                                            |
|--------------|-----------|--------------------------------------------------------|
| `isPresent`  | `boolean` | Controls the visibility of the Penrose pattern.       |
| `style`      | `Object`  | Custom styles that can be applied to the Penrose component. |




# Changelong
## v16.2.80
 * updated package to reflect the version  16.2.80 of @angular/core package,
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
 * updated package to reflect the version  ^17.3.1 of @angular/core package
,
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
 * updated package to reflect the version  ^17.3.9 of @angular/core package