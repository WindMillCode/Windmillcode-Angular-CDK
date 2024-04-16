# Overview

The `wml-notify` library is an Angular-based toolkit designed to enhance user notifications and messaging within applications. Its primary objective is to offer a streamlined and efficient way for developers to integrate and manage notifications, alerts, and informational messages in their Angular projects. The library provides a set of components and services that enable the display of various types of messages, such as errors, information, success, and warnings, with customizable options to cater to different needs and scenarios. It leverages Angular's powerful features to create a responsive and interactive user experience, addressing common challenges in handling user notifications with ease and precision.

At the heart of the `wml-notify` library are two central components: `WmlNotifyComponent` and `WmlNotifyMsgComponent`. `WmlNotifyComponent` acts as a container for individual notifications, managing their display and behavior, including auto-hiding, user-initiated closure, and actions. It integrates with the `WmlNotifyService` to listen for notification events and render them appropriately. `WmlNotifyMsgComponent`, on the other hand, is responsible for rendering the message content, supporting both default text messages and custom Angular components for more dynamic and interactive content. Developers can customize notifications using various attributes and methods provided by these components, such as message types, auto-hide functionality, and custom action handlers. The library encourages a modular approach, allowing developers to leverage these components either independently or together, facilitating a versatile implementation that aligns with the specific requirements of their Angular applications.

# Installation

```bash
npm install -d @windmillcode/angular-wml-notify
```


# Usage

To effectively utilize the `wml-notify` library in your Angular applications, you can follow the examples below which demonstrate various use cases catering to different developer needs. These examples show how to integrate `WmlNotifyComponent` and `WmlNotifyMsgComponent` within your Angular project.

### Displaying a Simple Notification

#### HTML:
```html
<wml-notify></wml-notify>
```

#### TypeScript:
```typescript
import { Component } from '@angular/core';
import { WmlNotifyService, WmlNotifyBarModel, WmlNotifyBarType } from '@windmillcode/angular-wml-notify';

@Component({
  selector: 'app-your-component',
  templateUrl: './your-component.component.html',
})
export class YourComponent {
  constructor(private notifyService: WmlNotifyService) {}

  showNotification() {
    const notification = new WmlNotifyBarModel({
      message: 'This is an info message!',
      type: WmlNotifyBarType.Info,
    });

    this.notifyService.create(notification);
  }
}
```

### Displaying a Notification with Custom Content

#### HTML:
```html
<wml-notify></wml-notify>
```

#### TypeScript:
```typescript
import { Component } from '@angular/core';
import { WmlNotifyService, WmlNotifyBarModel, WmlNotifyBarType, WMLCustomComponent } from '@windmillcode/angular-wml-notify';

@Component({
  selector: 'app-your-component',
  templateUrl: './your-component.component.html',
})
export class YourComponent {
  constructor(private notifyService: WmlNotifyService) {}

  showCustomNotification() {
    const customNotification = new WmlNotifyBarModel({
      message: 'This is a custom message!',
      type: WmlNotifyBarType.Success,
      msgtype: 'custom',
      custom: new WMLCustomComponent({
        cpnt: YourCustomComponent,
        params: { /* your custom params */ },
      }),
    });

    this.notifyService.create(customNotification);
  }
}
```

### Handling Notification Actions

#### HTML:
```html
<wml-notify (action)="onAction($event)" (closed)="onClosed($event)"></wml-notify>
```

#### TypeScript:
```typescript
import { Component } from '@angular/core';
import { WmlNotifyService, WmlNotifyBarModel, WmlNotifyBarType } from '@windmillcode/angular-wml-notify';

@Component({
  selector: 'app-your-component',
  templateUrl: './your-component.component.html',
})
export class YourComponent {
  constructor(private notifyService: WmlNotifyService) {}

  showActionNotification() {
    const actionNotification = new WmlNotifyBarModel({
      message: 'This message needs your action',
      type: WmlNotifyBarType.Warning,
      action: true,
      actionText: 'Retry',
    });

    this.notifyService.create(actionNotification);
  }

  onAction(notification: WmlNotifyBarModel) {
    console.log('Action clicked for notification:', notification);
  }

  onClosed(notification: WmlNotifyBarModel) {
    console.log('Notification closed:', notification);
  }
}
```

These examples demonstrate basic implementations of `wml-notify` for various scenarios, providing a foundational understanding of how to integrate and customize the library within your Angular applications.

# Docs

### `WmlNotifyBarModel` Properties

| Property          | Type                | Description                                                           |
|-------------------|---------------------|-----------------------------------------------------------------------|
| `message`         | `string`            | The message to be displayed in the notification.                      |
| `type`            | `WmlNotifyBarType`  | The type of the notification (Error, Info, Success, Warning).         |
| `action`          | `boolean`           | Indicates if the notification includes an action button.              |
| `actionText`      | `string`            | Text to display on the action button.                                 |
| `autoHide`        | `boolean`           | Determines if the notification should auto-hide.                      |
| `closed`          | `boolean`           | Indicates if the notification is closed.                              |
| `closeable`       | `boolean`           | Determines if the notification can be manually closed by the user.    |
| `hideDelay`       | `number`            | Time in milliseconds before the notification auto-hides.              |
| `hideOnHover`     | `boolean`           | Determines if the notification should hide when hovered.              |
| `style`           | `CSSStyleDeclaration` | Styles to be applied to the notification bar.                       |
| `msgtype`         | `string`            | Defines the message type (default or custom).                         |
| `custom`          | `WMLCustomComponent` | Custom component to be used as the notification content.              |

### `WmlNotifyService` Methods

| Method         | Parameters                 | Description                                     |
|----------------|----------------------------|-------------------------------------------------|
| `create`       | `notification: WmlNotifyBarModel` | Creates and displays a new notification.    |
| `clear`        | None                       | Clears all displayed notifications.             |

### `WmlNotifyComponent` Events

| Event         | Parameters                 | Description                                     |
|---------------|----------------------------|-------------------------------------------------|
| `action`      | `notification: WmlNotifyBarModel` | Emitted when an action on a notification is triggered. |
| `closed`      | `notification: WmlNotifyBarModel` | Emitted when a notification is closed.            |

### `WmlNotifyBarType` Enumeration

| Value         | Description                      |
|---------------|----------------------------------|
| `Error`       | Represents an error notification.|
| `Info`        | Represents an informational notification. |
| `Success`     | Represents a success notification.|
| `Warning`     | Represents a warning notification.|

# Changelog

## v1.0.0
  * MAJOR rename to angular-wml-notify
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
WmlNotifyNGXTranslateModule
// for regular
WmlNotifyModule
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
 * updated package to conform with @windmillcode/angular-wml-components-base   