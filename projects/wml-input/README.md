# Overview

The `wml-input` library is a specialized Angular component designed to enhance the form input experience in Angular applications. It provides a robust set of features that simplify the process of creating, validating, and managing form inputs, particularly focusing on user interaction and data binding. The library aims to solve common problems associated with form handling in Angular, such as maintaining sync between the UI and the model, providing instant feedback to users, and integrating seamlessly with Angular's form validation mechanisms. By offering a comprehensive suite of input-related functionalities, `wml-input` helps developers build more interactive, user-friendly forms with less boilerplate code.

At the heart of the `wml-input` library are its central components, which include `WmlInputTextComponent`, `WmlInputNumberComponent`, and `WmlInputDateComponent`, among others. Each of these components is tailored to handle specific types of input, offering features like formatting, validation, and custom styling. For instance, `WmlInputTextComponent` is optimized for text input and includes properties for trimming and formatting, while `WmlInputNumberComponent` focuses on numerical input with features for number formatting and validation. These components are designed to work together seamlessly, providing a consistent and intuitive API for developers. They can be easily customized through a variety of parameters and methods, allowing for dynamic content loading and real-time interaction. Additionally, the library encourages certain implementation patterns, such as using specific components as containers or specifying child components, to promote best practices in Angular form development and ensure optimal performance and usability.


# Installation

```bash
npm install -d @windmillcode/angular-wml-input
```

# Usage

## Text Input Example

In your component's HTML file, you can use `wml-input-text` to create a text input field. It's integrated with Angular forms to support features like data binding and validation.

```html
<!-- app.component.html -->
<form [formGroup]="form">
  <wml-input-text formControlName="textInput" placeholder="Enter text"></wml-input-text>
</form>
```

In the corresponding TypeScript file, you define the form control within an Angular form group.

```typescript
// app.component.ts
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      textInput: new FormControl(''),
    });
  }
}
```

## Number Input Example

For numerical inputs, use `wml-input-number` to allow users to enter numbers, which also supports Angular form validation and binding.

```html
<!-- app.component.html -->
<form [formGroup]="form">
  <wml-input-number formControlName="numberInput" placeholder="Enter number"></wml-input-number>
</form>
```

And in your TypeScript file:

```typescript
// app.component.ts
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      numberInput: new FormControl(0),
    });
  }
}
```

## Date Input Example

To include a date input, `wml-input-date` is used. This component facilitates the input of dates and integrates smoothly with Angular's reactive forms.

```html
<!-- app.component.html -->
<form [formGroup]="form">
  <wml-input-date formControlName="dateInput" placeholder="Select date"></wml-input-date>
</form>
```

The TypeScript setup might look like this:

```typescript
// app.component.ts
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      dateInput: new FormControl(new Date()),
    });
  }
}
```



# Docs

## WmlInputParams
| Property       | Type                  | Description                            |
|----------------|-----------------------|----------------------------------------|
| input          | WMLInputAreaParams    | Input area parameters                  |
| textarea       | WMLInputAreaParams    | Textarea parameters                    |
| range          | WMLInputAreaParams    | Range input parameters                 |
| checkbox       | WMLInputCheckboxParams | Checkbox input parameters              |
| datetime       | WMLInputDatetimeParams | Datetime input parameters              |
| type           | "datetime" \| "time" \| "date" \| "range" \| "input" \| "number" \| "password" \| "email" \| "tel" \| "textarea" \| "checkbox" | Input type |
| wmlField       | WMLField              | WMLField instance for customization    |
| checkboxDesc   | string                | Description for checkbox input         |

## WMLInputAreaParams
| Property      | Type   | Description                   |
|---------------|--------|-------------------------------|
| placeholder   | string | Placeholder for input area    |

## WMLInputCheckboxParams
| Property      | Type   | Description                   |
|---------------|--------|-------------------------------|
| desc          | any    | Description for checkbox input|

## WMLInputDatetimeParams
| Property      | Type   | Description                   |
|---------------|--------|-------------------------------|
| min           | Date   | Minimum date for input        |
| max           | Date   | Maximum date for input        |
| htmlMin       | string | HTML-formatted minimum date   |
| htmlMax       | string | HTML-formatted maximum date   |


# Changelog

## 2.0.0
  BREAKING CHANGE
    WmlInputParams.input,WmlInputParams.textarea now have the type WMLInputAreaParams which extends WMLUIProperty with the placeholder
    application code will break must be updated

## 3.0.1
* MAJOR rename to angular-wml-input
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
WmlInputNGXTranslateModule
// for regular
WmlInputModule
```
* all input types have id properties


## 16.2.6-0
* added in datetime support along with min max controls
* example
```ts
new WmlInputParams({
  type:"datetime",
  datetime:new WMLInputDatetimeParams({
    min:new Date()
  })
}),
```

## 16.2.61
* added support to help customize checkbox

## 16.2.70
* additional updates

## 16.2.71
[BREAKING CHANGE]
* input does not use the id from the wmlfield.view, it uses its own corresponding type id
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
 * updated package to conform with @windmillcode/angular-wml-components-base

## v17.0.8101
* replaced ControlValueAccessor with the use of the formcontrol from wmlField.getReactiveFormControl, making integration without wml-form much easier
,
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
 * updated package to conform with @windmillcode/angular-wml-components-base

## v17.1.1001 [2/5/24]
* added feature where each type can get its own class added to the target input element

,
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
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v18.0.1000 [5/29/24]
 * updated package to reflect the version  ^18.0.1 of @angular/core package,
## v18.0.2000 [6/6/24]
 * updated package to reflect the version  ^18.0.2 of @angular/core package,
## v18.0.3000 [6/13/24]
 * updated package to reflect the version  ^18.0.3 of @angular/core package,
## v18.0.3010 [6/18/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   