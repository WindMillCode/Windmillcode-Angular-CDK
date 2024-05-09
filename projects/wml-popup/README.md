# Overview

The `wml-popup` library is an Angular-based toolkit designed to simplify the creation and management of pop-up components within web applications. It provides developers with a streamlined approach to integrate pop-ups, facilitating interactions and enhancing user engagement without the need for extensive boilerplate code. The library is crafted to address common challenges associated with pop-up management, such as dynamic content loading, positioning, and responsiveness, ensuring a versatile solution adaptable to various application scenarios.

Central to the `wml-popup` library is the `WmlPopupComponent`, which serves as the foundational element for pop-up creation and manipulation. This component is designed to be flexible, allowing for the embedding of custom content and the adjustment of its behavior and appearance through a range of input parameters. Developers can leverage the `WMLPopupParams` class to configure the pop-up, defining properties such as the component to display, its initialization parameters, and control mechanisms for opening and closing the pop-up. The library emphasizes interactivity and customization, providing mechanisms such as the `togglePopupSubj` subject to programmatically control the pop-up's visibility. Furthermore, the library supports inter-component communication and dynamic content loading, enabling developers to create rich, interactive user experiences. By adhering to the library's design patterns, such as utilizing `WmlPopupComponent` as a container for dynamic content, developers can implement consistent and effective pop-up functionalities within their Angular applications.



# Installation

```bash
npm install -d @windmillcode/angular-wml-popup
```


# Docs

## WMLPopupParams
| Property | Type | Description |
| --- | --- | --- |
| `cpnt` | `Type<any>` | Overrides the component type with `SampleForWMLPopupCpntComponent`. |
| `popup` | `WMLUIProperty` | Instance of `WMLUIProperty` representing the popup properties. |
| `updatePopup` | `Function` | Function to update the popup. |
| `openPopup` | `() => void` | Function to trigger opening the popup. |
| `closePopup` | `() => void` | Function to trigger closing the popup. |
| `togglePopupSubj` | `Subject<boolean>` | Subject for toggling the popup state (`true` for open, `false` for close). |

### Example
```html
<wml-popup
*ngIf="popupParams.togglePopupSubj | async"
 [class]="classPrefix('Pod2')" [params]="popupParams"></wml-popup>
```

```ts
popupParams = new WMLPopupParams({
  cpnt:YourSampleComponent,
  params:new YourSampleComponentParams({})
})

...
@Component({
  template:`

  `
})
class YourSampleComponent{
  @Input("params") params =new YourSampleComponentParams()
}

export class YourSampleComponentParams {
  constructor(params: Partial<YourSampleComponentParams> = {}) {
    let origParams = Object.entries(params)
      .filter(([key,val]) => {
        return !key.startsWith('param');
      });
    Object.assign(this, { ...Object.fromEntries(origParams) });
  }
}
```

# Changelog
* v1.0.0
  * added optional support for ngx translate to use ngxtranslate
```ts
// to use ngxtranslate
WMLPopupNgxTranslateModule

// to use regaular
WMLPopupModule
```

## v1.0.0
  * MAJOR rename to @windmillcode/angular-wml-popup
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
 * updated package to reflect the version  ^17.0.7 of @angular/core package

## v17.0.71
* added openPopup closePopup and togglePopupSubj so developers can write less code
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
 * updated package to conform with @windmillcode/angular-wml-components-base
## v17.0.9002
 [UPDATE] can now set id on the popup by calling params.openPopup
 or params.closePopup for example
```ts
      this.baseService.popupParams.view.id = this.idPrefix("Pricing")
      this.baseService.popupParams.openPopup()
```
,
## v17.1.0000
 * updated package to reflect the version  ^17.1.0 of @angular/core package

## v17.1.0001
* [FIX] fixed a bug where the param key passed to the WMLPopupParams was filtered out causing the component to not work properly
,
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
 * updated package to reflect the version  ^17.3.8 of @angular/core package