# Usage
```html
    <wml-input
    [params]="searchInput"></wml-input>
```

```js
searchInput = new WmlInputParams()
```
* by default the type is input

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