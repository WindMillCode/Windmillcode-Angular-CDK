# Overview

The `angular-wml-field` library is an Angular-based framework designed to enhance the functionality and management of form fields within web applications. It provides a robust set of components and services that simplify the creation, validation, and handling of form fields, addressing common challenges faced by developers in form management. The library integrates seamlessly with Angular's reactive forms module, offering additional utilities for field state management, validation messaging, and dynamic content loading, thereby streamlining the form development process and improving user interaction.

At the core of the `angular-wml-field` library are several central components, including `WMLField` and `WmlLabelComponent`, each serving a distinct purpose within the form management ecosystem. `WMLField` acts as a container for individual form fields, encapsulating the logic for field rendering, validation, and interaction. It allows for the integration of custom components, enhancing flexibility and extensibility. `WmlLabelComponent`, on the other hand, is dedicated to managing field labels and validation messages, supporting dynamic content and translation capabilities. These components are designed to work in unison, with `WMLField` typically serving as a parent container that orchestrates the behavior of nested label and input components. Developers can customize these components through various input parameters and methods, enabling the creation of tailored form experiences that cater to specific application needs.

# Installation

```bash
npm install -d @windmillcode/angular-wml-field
```

# Usage

### HTML Template (`app.component.html`):

```html
<form [formGroup]="myForm">
  <wml-field [field]="customField"></wml-field>
</form>
```

This template includes a form with a single `wml-field` component. The `[field]` input property of `wml-field` is bound to the `customField` property in the component class, allowing customization of the field.

### TypeScript Component (`app.component.ts`):

```typescript
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { WMLField } from '@windmillcode/angular-wml-field';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  myForm: FormGroup;
  customField: WMLField;

  ngOnInit() {
    this.myForm = new FormGroup({
      customInput: new FormControl('')
    });

    this.customField = new WMLField({
      type: 'custom',
      custom: {
        fieldType: 'input',
        fieldParentForm: this.myForm,
        fieldFormControlName: 'customInput',
        labelValue: 'Custom Label',
        errorMsgs: {
          required: 'This field is required',
          pattern: 'Invalid format'
        }
      }
    });
  }
}
```

In this TypeScript component, we initialize a reactive form (`myForm`) with a single control (`customInput`). The `customField` property is an instance of `WMLField`, configured to use a custom input field. It is linked to the `customInput` form control and includes a label and error messages for validation purposes.

By setting the `type` to `'custom'` and providing a configuration object, developers can specify the type of field, associate it with a form control, define a label, and set custom error messages. This approach demonstrates how `WMLField` can be adapted to various development needs, allowing for a high degree of customization and interactivity within Angular forms.

* Instead of writing excess amount of code here is some functions where you can call once and get the field you want

```ts
// base.ts

export class GenerateFieldParams<F=any> {
  constructor(params:Partial<GenerateFieldParams<F>>={}){
    Object.assign(
      this,
      {
        ...params
      }
    )
  }

  labelValue?:string
  fieldFormControlName:string
  fieldParentForm:FormGroup
  errorMsgs:WmlLabelParams["errorMsgs"] ={
    "required":"global.errorRequired"
  }
  selfType:WMLField["self"]["type"] ="standalone"
  fieldCustomParams?:F
  id?:string

}

export   let createWMLFormField = (params:GenerateFieldParams<any>)=>{
  let {
    labelValue,
    fieldFormControlName,
    fieldParentForm,
    errorMsgs,
    selfType,
    fieldCustomParams,
    id
  } = params
  let wmlField:WMLField
  wmlField =  new WMLField({
    type: "custom",
    custom: {

      selfType: selfType ?? "standalone",
      fieldParentForm,
      fieldFormControlName,
      labelValue,
      fieldCustomCpnt:WmlInputComponent,
      errorMsgs:errorMsgs??{
        required:"global.errorRequired"
      },
      fieldCustomMeta:new WmlInputParams({
        ...fieldCustomParams,
        wmlField
      })
    }
  })
  wmlField.view.id = id
  return wmlField
}
  createInputFormField=(params:GenerateFieldParams)=>{
    let wmlField = createWMLFormField(params)
    return wmlField
  }

  createTextAreaFormField=(params:GenerateFieldParams)=>{

    let wmlField = createWMLFormField(params)
    wmlField.field.custom.params.type  ="textarea"
    return wmlField
  }

  createRangeFormField=(params:GenerateFieldParams )=>{

    let wmlField = createWMLFormField(params)
    wmlField.field.custom.params.type  ="range"
    return wmlField
  }

  createCheckboxFormField=(params:GenerateFieldParams )=>{

    let wmlField = createWMLFormField(params)
    wmlField.field.custom.params.type  ="checkbox"
    return wmlField
  }

// everyhwere in your component code

let fields = [
  createInputFormField(),
  createTextAreaFormField(),
  createRangeFormField(),
  createCheckboxFormField()
  ...
]
```

## Additional help fns
```ts
export let useFormControlNamesAsFieldVariableNames =(param:{[k:string]:string})=>{
  return Object.values(param)
  .map((val)=>{
    return val+"Field"
  })
}

export let resetFormControls =(formGroup: FormGroup | FormArray)=> {
  // Iterate through all the controls in the form group
  Object.keys(formGroup.controls).forEach(key => {
    const control = formGroup.get(key);

    if (control instanceof FormGroup) {
      // Recursively reset controls in nested FormGroup
      resetFormControls(control);
    } else if (control instanceof FormArray) {
      // Reset FormArray to its initial state
      control.clear();
      control.markAsPristine()
    } else if (control instanceof FormControl) {
      // Reset FormControl to its initial state
      control.reset();
    }
  });
}


export let createI18nErrorMsgsBasedOnValidations = (prefix:string,val:string,checklist:Array<string>=[])=>{
  let obj = checklist
  .map((errorKey)=>{
    let errorVal = [prefix,val,"error",errorKey].join(".")
    return [errorKey,errorVal]
  })
  let result = Object.fromEntries(obj)
  result["required"] ??= "global.errorRequired"
  result["email"] ??= "global.errorEmail"
  return result
}

export let createFieldString =(field:string)=>{
  return {
    base:field,
    get field(){
      return this.base +"Field"
    },
    get fieldFormControlName(){
      return this.base + 'FormControlName'
    }
  }
}
```


Based on the properties, methods, and functions available for developers using the `angular-wml-field` library, here's a documentation table in raw markdown format. This table includes the public-facing aspects of the library that developers would typically interact with:

### WMLField  Properties

| Property | Type | Description |
|----------|------|-------------|
| `self.type` | `"standalone" \| "wml-card"` | Determines the type of field, either standalone or wrapped in a card. |
| `label.type` | `"custom"` | Specifies the type of label component; currently, only custom labels are supported. |
| `field.type` | `"input" \| "custom"` | Indicates the type of field, either a standard input or a custom field component. |
| `field.parentForm` | `FormGroup` | The parent `FormGroup` instance to which this field belongs. |
| `field.formControlName` | `string` | The name of the form control within the parent form group. |
| `error.type` | `"custom"` | Specifies the type of error display; currently, only custom error components are supported. |

### WMLField  Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `getReactiveFormControl` | `() => AbstractControl` | Retrieves the `AbstractControl` associated with this field. |
| `getParentForm` | `() => FormGroup` | Returns the parent `FormGroup` of this field. |
| `getFormControlName` | `() => string` | Gets the name of the form control associated with this field. |
| `getLabel` | `() => string` | Retrieves the label's text value. |
| `getRequiredLabel` | `() => string` | Fetches the required label's text value if it exists. |
| `updateLabel` | `(label: string) => void` | Updates the label's text value. |
| `updateRequiredLabel` | `(label: string) => void` | Updates the required label's text value. |
| `deleteLabel` | `() => void` | Removes the label text. |
| `deleteRequiredLabelPart` | `() => void` | Removes the required label text. |

### WmlLabelParams Class Properties

| Property | Type | Description |
|----------|------|-------------|
| `type` | `'label' \| 'error'` | Determines the label type, either for standard labels or error messages. |
| `isPresent` | `boolean` | Flag indicating if the label should be displayed. |
| `errorMsgs` | `Object` | An object containing error message mappings. |
| `labels` | `Array<Array<{ type?: string, value: string, isPresent?: boolean }>>` | Defines the label parts and their properties. |
| `wmlField` | `WMLField` | Reference to the associated `WMLField` instance. |

### WmlLabelParams Class Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `toggleErrors` | `(formControl: AbstractControl) => string[]` | Determines which error messages to display based on the form control's state. |



# Changelog

## v0.0.6
  added updateLabel and updateRequiredLabel wrappers for updateLabelPart which allow to update the input of a field
## v1.0.0

    * ensured that there is support for ngx-translate and non ngx-translate features
    * to enable translation
```ts
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
    HttpClientModule,
    WmlFieldModule
    .forChild(
      new WMLModuleForRootParams({
        ngxTranslateLoaderFactory:HttpLoaderFactory
      })
    ),
```
    * to disable translation
```ts
    WmlFieldModule
```

## 2.0.0
* MAJOR rename to angular-wml-field
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
WmlFieldNGXTranslateModule
// for regular
WmlFieldModule
```
* package uses @windmillcode/angular-wml-components-base
## 2.1.0
* provided serveral methods to help with retrieving different values realted to the fields
```ts
getReactiveFormControl
getLabel
getRequiredLabel
getLabelPart
updateLabel
updateRequiredLabel
updateLabelPart
deleteLabelPart
deleteRequiredLabelPart
deleteLabel
```


## 2.1.1
* made id accessible on selector itself, access via wmlField.view.id

## 16.2.60
* added
WMLField#getParentForm
WMLField#getFormControlName
as additional methods

## 16.2.70
* added addititional features
%!(EXTRA string=
## v16.2.80
 * updated package to reflect the version  16.2.80 of @angular/core package),
## v16.2.80
 * updated package to reflect the version  16.2.80 of @angular/core package,
## v16.2.90
 * updated package to reflect the version  16.2.90 of @angular/core package,
## v16.2.91
 * updated package to reflect the version  16.2.91 of @angular/core package
## v16.2.92
  * made BREAKING CHANGES to wmlfield replacing all WMLCustomComponent.meta with WMLCustomComponent.params
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
,
## v17.3.1000 [3/22/24]
 * updated package to reflect the version  ^17.3.1 of @angular/core package,
## v17.3.2000 [3/28/24]
 * updated package to reflect the version  ^17.3.2 of @angular/core package