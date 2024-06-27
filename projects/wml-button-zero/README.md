
# Overview

The `wml-button-zero` library is an Angular-focused toolkit designed to provide developers with versatile and customizable button components. Its primary goal is to offer a streamlined approach to implementing interactive buttons within Angular applications, addressing common challenges such as dynamic content loading, user interaction handling, and flexible styling. By delivering a set of modular and adaptable components, the library aims to enhance the development workflow and enrich the user experience across diverse application scenarios.

Within this library, WmlButtonZeroComponent stands as the central component, offering a comprehensive suite of customization options. It's built to cater to developers seeking to implement buttons with specific behaviors, styles, and functionalities, providing a deep level of control over the component's properties. On the other hand, WmlButtonOneComponent serves as a simpler alternative, designed for use cases that demand a straightforward button with less complexity in customization. While it retains core interactive features, it's streamlined for easier implementation, making it suitable for scenarios where a basic button suffices. This structural differentiation within the library ensures that developers have access to both detailed and simplified button components, aligning with varied application requirements and developer preferences.


# Installation

```bash
npm install -d @windmillcode/angular-wml-button-zero
```
## WmlButtonZeroParams

### Properties

| Property       | Type                               | Description |
| -------------- | ---------------------------------- | ----------- |
| `id`           | `string`                           | The unique identifier for the button component. |
| `cdref`        | `ChangeDetectorRef`                | Optional. Angular's `ChangeDetectorRef` associated with the component for triggering change detection manually. |
| `updateSubj`   | `Subject<Partial<WmlButtonZeroParams>>` | Subject to emit updates for the component. Useful for reactive programming patterns. |
| `type`         | `WMLButtonParamsTypeEnum`          | The type of the button, which determines its styling. Can be `PRIMARY`, `SECONDARY`, or `TERTIARY`. |
| `text`         | `WMLUIProperty`                    | Overrides the `text` property to set the button's display text. |
| `button`       | `WMLUIProperty`                    | Overrides the `button` property to customize click behavior. |
| `icons`        | `Array<WMLImage<any, WMLButtonIconType>>` | Overrides the `icons` property to customize the button's icons. |

### Methods

- `constructor(params: Partial<WmlButtonZeroParams> = {})`: Initializes a new instance of the `WmlButtonZeroParams` class with optional parameters for customization.
- `updateBtnClasses(value: WMLButtonParamsTypeEnum)`: Updates the button's classes based on the specified type (`PRIMARY`, `SECONDARY`, or `TERTIARY`).

### Example Usage

```typescript
let wmlButtonZeroParams = new WmlButtonZeroParams({
  type: WMLButtonParamsTypeEnum.PRIMARY,
  text: new WMLUIProperty({ text: "Click Me" }),
  button: new WMLUIProperty({
    click: () => {
      alert("This button was clicked");
    }
  }),
  // Assuming WMLImage and WMLButtonIconType are defined elsewhere
  icons: [new WMLImage<any, WMLButtonIconType>({ isPresent: false, class: 'fa-solid' })]
});
```

## WmlButtonOneParams

### Properties

| Property      | Type                               | Description |
| ------------- | ---------------------------------- | ----------- |
| `btnClass`    | `string`                           | Gets or sets the button's primary CSS class. |
| `btnStyle`    | `Partial<CSSStyleDeclaration>`     | Partial CSS styles for the button. |
| `btnIsPresent`| `boolean`                          | Indicates whether the button is present in the DOM. |
| `type`        | `WMLButtonParamsTypeEnum`          | The type of the button, influencing its styling. Can be `PRIMARY`, `SECONDARY`, or `TERTIARY`. |
| `iconType`    | `WMLButtonIconType`                | The type of icon used in the button. |
| `text`        | `string`                           | The display text of the button. |
| `updateSubj`  | `Subject<Partial<WmlButtonOneParams>>` | Subject to emit updates for the component. |

### Methods

- `constructor(params: Partial<WmlButtonOneParams> = {})`: Initializes a new instance of the `WmlButtonOneParams` class with optional parameters for customization.
- `updateBtnClassString(value: string)`: Updates the button's primary CSS class.
- `updateBtnClasses(value: WMLButtonParamsTypeEnum)`: Updates the button's classes based on the specified type (`PRIMARY`, `SECONDARY`, or `TERTIARY`).
- `click(evt?)`: Custom click handler for the button.

### Example Usage

```typescript
let wmlButtonOneParams = new WmlButtonOneParams({
  type: WMLButtonParamsTypeEnum.SECONDARY,
  text: "Click Me",
  click: (evt?) => {
    alert("This button was clicked");
  }
});
```


# CSS Customization
* to globally customize in your  css file
&[number] represents the button
&Text&0 represents the btn text
```py
.WmlButtonOneMainButton{
  &0 {
    &Text {
      &0 {

      }
    }
  }

  &1 {
    &Text {
      &0 {

      }
    }
  }

  &2 {
    &Text {
      &0 {

      }
    }
  }
}
```


# Changelog
  * v0.0.1
    button is ready to be used
  * v0.0.2
    include cursor pointer for the button view
  * v0.0.3
    gave hover functionality to the button
  * 1.0.0
    BREAKING change  WmlButtonZeroParams.icon changed to WmlButtonZeroParams.icons to represent the multiple icons one can have on the button
    WmlButtonZeroParams.icons[number] which is a WMLImage now has type of img or icon, if a type is not specified an img is used
    the icon comes before the text and not after the text
  * 2.0.0
    BREAKING CHANGE
    WmlButtonZeroParamsTypeEnum renamed to WMLButtonParamsTypeEnum
    created wml-button-one component which leverages wmlButton for easier button creation
  * 2.1.0
    * full support for wml-button-one
  * 2.1.1
    * add WmlButtonOneParams.btnIsPresent to show and hide buttons
  * 3.0.0
    * ensured that there is support for ngx-translate and non ngx-translate features
    * to enable translation
```ts
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

    HttpClientModule,
    WmlButtonZeroModule
    .forChild(
      new WMLModuleForRootParams({
        ngxTranslateLoaderFactory:HttpLoaderFactory
      })
    ),
```
    * to disable translation
```ts
    WmlButtonZeroModule
```

# 4.0.1
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
WmlButtonZeroNGXTranslateModule
// for regular
WmlButtonZeroModule
```
# 4.0.5
* added css id support, and made cdref available on the params

# 4.0.7
* add id support on the selector element itself

# 16.2.70
* for wmlbuttonzero, added additional wmluiproperty to button zero

,
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
 * updated package to reflect the version  ^17.0.6s of @angular/core package,
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
 * updated package to conform with @windmillcode/angular-wml-components-base
## v17.0.8103
 * [FIX] ensured that change detection was working for buttons
,
## v17.0.8103
 * updated package to conform with @windmillcode/angular-wml-components-base

## v17.0.8104
  * [FIX] toggle margin between icon and text for wml-button-one when iconIsPresent is set to true
,
## v17.0.9000
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.0.9001
 * updated package to conform with @windmillcode/angular-wml-components-base
## v17.0.9002
  * updated WmlButtonOneParams.click to have optional evt paramaeter
,
## v17.1.0000
 * updated package to reflect the version  ^17.1.0 of @angular/core package,
## v17.1.2
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.1.1000
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.1.2000 [2/5/24]
 * updated package to reflect the version  ^17.1.2 of @angular/core package,
## v17.1.2001 [2/8/24]
 * updated package to conform with @windmillcode/angular-wml-components-base
## v17.1.2002 [2/8/24]
* corrected code so no text should wrap if the text overflows the button
,
## v17.1.3000 [2/8/24]
 * updated package to reflect the version  ^17.1.3 of @angular/core package,
## v17.2.1000 [2/17/24]
 * updated package to reflect the version  ^17.2.1 of @angular/core package

# 17.2.1001 [2/21/24]
* [UPDATE] added WmlButtonZeroParams.listenForUpdate amd WmlButtonOneParams.listenForUpdate so changes that dont reflect by assignment would reflect this way

,
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
## v18.0.0 [5/22/24]
 * updated package to reflect the version  ^18.0.0 of @angular/core package,
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
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v18.0.5000 [6/26/24]
 * updated package to reflect the version  ^18.0.5 of @angular/core package