# Overview

The `wml-form` library is an Angular component library tailored to enhance and streamline the creation and management of forms within Angular applications. It provides a comprehensive suite of components and services designed to handle various aspects of form management, such as data binding, validation, dynamic field generation, and styling. The library aims to simplify the development process by offering a set of modular, reusable components that can be easily integrated into any Angular project, addressing common challenges in form development like dynamic field updates, form sectioning, and integration with other UI components.

Central to the `wml-form` library is the `WmlFormComponent`, which serves as the primary interface for creating and manipulating forms. This component is designed to be flexible, allowing developers to define form fields and sections declaratively or programmatically. It supports various field types and configurations, enabling the creation of complex forms with minimal code. The `WmlFormComponent` interacts closely with other components in the library, such as `WMLField`, which represents individual form fields and can be extended or customized to support custom field types. The library provides mechanisms for developers to react to form events, update field values, and validate form data, offering a high degree of interactivity and customization.

In terms of implementation, developers typically use the `WmlFormComponent` to define the structure of their forms, specifying fields and their corresponding attributes through the component's input properties. The component's reactive API allows for dynamic updates to the form's structure and data, responding to user interactions or application state changes. Customization is facilitated through input parameters and CSS, enabling developers to tailor the look and feel of their forms to match their application's design. Additionally, the library encourages best practices such as the use of Angular's form control mechanisms and reactive programming patterns, ensuring that forms are both performant and maintainable.

# Installation

```bash
npm install -d @windmillcode/angular-wml-form
```

# Usage

The `wml-form` library offers a flexible and efficient way to create and manage forms in Angular applications. Below are some usage examples demonstrating different developer needs.

## Basic Usage

First, ensure that you import the `WmlFormModule` in your Angular module:

```typescript
import { WmlFormModule } from '@windmillcode/angular-wml-form';

@NgModule({
  declarations: [...],
  imports: [
    ...
    WmlFormModule,
  ],
})
export class YourModule {}
```

### Example: Creating a Simple Form

#### HTML:

```html
<wml-form [params]="formParams"></wml-form>
```

#### TypeScript:

```typescript
import { Component } from '@angular/core';
import { WMLForm, WMLField } from '@windmillcode/angular-wml-form';

@Component({
  selector: 'app-your-component',
  templateUrl: './your-component.component.html',
})
export class YourComponent {
  formParams: WMLForm = new WMLForm({
    fields: [
      new WMLField({ label: 'First Name', type: 'text', name: 'firstName' }),
      new WMLField({ label: 'Last Name', type: 'text', name: 'lastName' }),
    ],
  });
}
```

## Dynamic Field Updates

### Example: Adding Fields Dynamically

#### HTML:

```html
<wml-form [params]="dynamicFormParams"></wml-form>
```

#### TypeScript:

```typescript
import { Component } from '@angular/core';
import { WMLForm, WMLField } from '@windmillcode/angular-wml-form';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
})
export class DynamicFormComponent {
  dynamicFormParams: WMLForm = new WMLForm({
    fields: [
      new WMLField({ label: 'Email', type: 'email', name: 'email' }),
    ],
  });

  addField() {
    const phoneField = new WMLField({ label: 'Phone', type: 'tel', name: 'phone' });
    this.dynamicFormParams.fields.push(phoneField);
    this.dynamicFormParams.updateFields(this.dynamicFormParams.fields);
  }
}
```

In this example, `addField` method dynamically adds a new field to the form. The `updateFields` method of `WMLForm` is used to refresh the form structure.

## Handling Form Submission

To handle form submission, bind a method to the `(ngSubmit)` event of the form.

### Example: Form Submission

#### HTML:

```html
<form (ngSubmit)="onSubmit()" [formGroup]="formGroup">
  <wml-form [params]="submitFormParams"></wml-form>
  <button type="submit">Submit</button>
</form>
```

#### TypeScript:

```typescript
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { WMLForm, WMLField } from '@windmillcode/angular-wml-form';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
})
export class SubmitFormComponent {
  formGroup: FormGroup;
  submitFormParams: WMLForm;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      username: [''],
      password: [''],
    });

    this.submitFormParams = new WMLForm({
      fields: [
        new WMLField({ label: 'Username', type: 'text', name: 'username' }),
        new WMLField({ label: 'Password', type: 'password', name: 'password' }),
      ],
    });
  }

  onSubmit() {
    console.log(this.formGroup.value);
  }
}
```

In this submission example, Angular's `FormGroup` is used alongside `wml-form` to handle form data and submission. The `onSubmit` method logs the form's current values.

```markdown
# Docs

## `WMLForm` Class Properties and Methods

| Property/Method                     | Type                                    | Description                                                                                                       |
|-------------------------------------|-----------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| `fields`                            | `Array<WMLField>`                       | An array of `WMLField` objects representing the fields in the form.                                               |
| `fieldSections`                     | `Array<number>`                         | An array indicating the grouping of fields into sections. Each number represents a group of fields in a section.  |
| `fieldsUpdateSubj`                  | `ReplaySubject<WMLFormFieldsUpdateSubjParams>` | Subject to emit events when fields need to be updated.                                                            |
| `fieldsUpdatedEvent`                | `Subject<void>`                         | Event emitted when fields are updated.                                                                            |
| `updateFields(fields: Array<WMLField>)` | Function                              | Method to update the fields of the form programmatically.                                                         |
| `resetFieldSections()`              | Function                                | Resets the field sections based on the existing fields if `fieldSections` is not explicitly provided.             |

## `WMLField` Class Properties

| Property        | Type    | Description                                                   |
|-----------------|---------|---------------------------------------------------------------|
| `label`         | `string`| The label of the form field.                                  |
| `type`          | `string`| The type of the form field (e.g., 'text', 'email', 'password'). |
| `name`          | `string`| The name attribute of the form field.                         |

## `WmlFormComponent` Input Properties

| Property   | Type       | Description                                                  |
|------------|------------|--------------------------------------------------------------|
| `params`   | `WMLForm`  | An instance of `WMLForm` to define the form's configuration. |




# Changelog

* v0.2.0
  added ability to access the html element for the field sections as displayFields property is availabile on the WMLForm params class
  however when using fieldsUpdateSubj , the developer must access the displayFields in this manner (not exact manner)

```ts
updateFields(){
    this.mainForm.fieldsUpdateSubj.next(new WMLFormFieldsUpdateSubjParams({
      fields:[this.filterKeyField,this.filterValueField]
    }))
}

listenForFormUpdate(){
  return this.mainForm.fieldsUpdatedEvent
  .pipe(
    takeUntil(this.ngUnsub),
    tap(()=>{
      this.mainForm.displayFields[0].style ={
        display:"flex",

      }
    })
  )

}

listenForFormUpdate()
updateFields()
```
* v0.2.1
  * fixed an issue where WMLForm#updateFields was undefined

* v0.3.0
  * removed matcard module and used simple glassmoprhish to activate wml-card

## 1.0.0
* MAJOR rename to angular-wml-form
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
WmlFormNGXTranslateModule
// for regular
WmlFormModule
```

## 16.2.60
* replace formGroup elemet from div to form

## v16.2.80
 * updated package to reflect the version  16.2.80 of @angular/core package,
## v16.2.90
 * updated package to reflect the version  16.2.90 of @angular/core package,
## v16.2.91
 * updated package to reflect the version  16.2.91 of @angular/core package

## v16.2.92
  * [FIX] added FormsModule to prevent page from reloading when a button element inside the form is click
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
 * updated package to conform with @windmillcode/angular-wml-components-base

## v17.0.8101
  * [PATCH] -made a human readable error in the case the updateFields does not line update with formSections
  reach out to use for suggestions if the formsSections should come from updateFields
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
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v18.0.1000 [5/29/24]
 * updated package to reflect the version  ^18.0.1 of @angular/core package,
## v18.0.2000 [6/6/24]
 * updated package to reflect the version  ^18.0.2 of @angular/core package,
## v18.0.3000 [6/13/24]
 * updated package to reflect the version  ^18.0.3 of @angular/core package,
## v18.0.3010 [6/18/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v18.0.4000 [6/23/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   