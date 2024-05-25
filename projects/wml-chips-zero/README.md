# Changelog

## v1.0.0

    * ensured that there is support for ngx-translate and non ngx-translate features
    * to enable translation
```ts
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
    HttpClientModule,
    WMLChipsZeroModule
    .forChild(
      new WMLModuleForRootParams({
        ngxTranslateLoaderFactory:HttpLoaderFactory
      })
    ),
```
    * to disable translation
```ts
    WMLChipsZeroModule
```
## v1.0.1 -> v1.0.2
  * atteptimg to fix dependencies
## 2.0.0
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
WMLChipsZeroNGXTranslateModule
// for regular
WmlChipsModule
```

## 3.0.0
* MAJOR : reanme to angular-wml-chips-zero
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
 * updated package to reflect the version  ^17.0.2 of @angular/core package
,
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
 * updated package to reflect the version  ^17.3.0 of @angular/core package,
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
 * updated package to reflect the version  ^17.3.5 of @angular/core package

## v17.3.5100 [4/23/24]
* [BREAKING CHANGE] - removed mat-autocomplete from chip control



## v17.3.5110 [4/27/24]
* [UPDATE] added wmlField so now formArray does not need to be specified and comes from wml-form
[UPDATE]
Updated chip styling in wml-chips-zero component for a more modern look and feel.

[PATCH]
Removed dependency on @angular/material in wml-chips-zero, reducing the package's dependency footprint
[UPDATE]
Introduced @windmillcode/angular-wml-button-zero in dependencies to enhance button functionalities in wml-chips-zero.
,
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
 * updated package to conform with @windmillcode/angular-wml-components-base   