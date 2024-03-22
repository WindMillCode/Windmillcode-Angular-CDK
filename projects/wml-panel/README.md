# This project has been renamed to @windmillcode/angular-wml-panel

# Overview

The wml-options library is designed to enhance Angular applications by providing a structured and versatile way to handle options and configurations dynamically. This library's main objective is to streamline the process of managing multiple configurations, allowing developers to create more maintainable and scalable Angular applications. By abstracting common functionality related to options handling into a set of reusable components, wml-options aids in reducing boilerplate code and promoting a more declarative approach to handling dynamic configurations.

Central to the library are its core components, which serve as the building blocks for creating dynamic and interactive user interfaces. These components are designed to interact seamlessly, providing a cohesive experience when managing various options within an application. For instance, a primary component might be responsible for displaying options, while another handles user interactions and state management, showcasing the library's modularity and interactivity. Developers can customize these components through a well-defined API, which includes a variety of parameters, methods, and services, enabling the integration of dynamic content and the tailoring of component behavior to fit specific requirements. When implementing wml-options, developers typically employ a hierarchical structure where container components manage the overall context, and child components handle more granular functionalities. This approach, encouraged by the library's design, facilitates the creation of sophisticated and interactive options management solutions within Angular applications.

# Usage

## Basic Usage of `WmlPanelComponent`

### HTML

```html
<wml-panel [params]="panelParams"></wml-panel>
```

### TypeScript

```typescript
import { Component } from '@angular/core';
import { WMLPanelParams, WMLPanelItemParams, WMLCustomComponent } from '@windmillcode/angular-wml-panel';
import { YourCustomComponent } from './path/to/your-custom.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  panelParams: WMLPanelParams;

  constructor() {
    this.panelParams = new WMLPanelParams({
      container: new WMLCustomComponent({
        cpnt: YourCustomComponent,
        params: { /* Your custom parameters */ },
      }),
      items: [
        new WMLPanelItemParams({
          custom: new WMLCustomComponent({
            cpnt: YourCustomComponent,
            params: { /* Your custom parameters */ },
          }),
        }),
      ],
    });
  }
}
```

## Dynamic Interaction

### HTML

```html
<wml-panel [params]="panelParams"></wml-panel>
```

### TypeScript

```typescript
import { Component } from '@angular/core';
import { WMLPanelParams, WMLPanelItemParams, WMLCustomComponent } from '@windmillcode/angular-wml-panel';
import { YourCustomComponent } from './path/to/your-custom.component';

@Component({
  selector: 'app-dynamic-panel',
  templateUrl: './dynamic-panel.component.html',
})
export class DynamicPanelComponent {
  panelParams: WMLPanelParams;

  constructor() {
    this.panelParams = new WMLPanelParams({
      items: this.generatePanelItems(),
    });
  }

  generatePanelItems(): WMLPanelItemParams[] {
    // Dynamically generate panel items
    return [
      new WMLPanelItemParams({
        custom: new WMLCustomComponent({
          cpnt: YourCustomComponent,
          params: { /* Parameters for component */ },
        }),
      }),
      // Add more items as needed
    ];
  }
}
```

These examples illustrate basic and dynamic usage of the `WmlPanelComponent`, demonstrating how to initialize the panel with custom components and dynamically generate panel items.

# Docs

## WMLPanelParams Properties

| Property  | Type                      | Description                                           |
|-----------|---------------------------|-------------------------------------------------------|
| container | `WMLUIProperty`           | A property to customize the container of the panel.   |
| items     | `Array<WMLPanelItemParams>` | An array of `WMLPanelItemParams` to define panel items. |

## WMLPanelItemParams Properties

| Property | Type                    | Description                                                                 |
|----------|-------------------------|-----------------------------------------------------------------------------|
| opened   | `BehaviorSubject<boolean \| null>` | A subject to control the opening of the panel item.                         |
| closed   | `BehaviorSubject<boolean \| null>` | A subject to control the closure of the panel item.                         |
| state    | `"open" \| "closed"`    | Represents the current state of the panel item.                             |
| custom   | `WMLCustomComponent`    | A custom component to be used as the panel item's content.                  |

## WMLPanelItemParams Methods

| Method  | Signature                         | Description                                       |
|---------|-----------------------------------|---------------------------------------------------|
| toggle  | `() => void`                      | Toggles the state of the panel item.              |
| open    | `() => void`                      | Opens the panel item.                             |
| close   | `() => void`                      | Closes the panel item.                            |

## WMLCustomComponent Properties

| Property | Type      | Description                                       |
|----------|-----------|---------------------------------------------------|
| cpnt     | `Type<any>` | The Angular component to be rendered.            |
| params   | `any`     | Parameters to be passed to the component.        |

The provided documentation outlines the main properties and methods available for `WMLPanelParams`, `WMLPanelItemParams`, and `WMLCustomComponent`, which developers can use to interact with the wml-panel library. These properties and methods enable customization and dynamic interaction with the panel components.

# Changelog
## 0.1.0
  made WMLPanelItemParams.state private and ensured that you can  have default state by calling WMLPanelItemParams.open if you want the panel open
## 0.1.1
* closed panels dont slide back
## 0.1.2
  * update to v16
## 0.1.3
  * added a feature where the developer can added the container class

## 0.2.0
  * fixed an issue where on it the panel would animate into the closed position
## v1.0.0
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
WmlPanelNGXTranslateModule
// for regular
WmlPanelModule
```
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
