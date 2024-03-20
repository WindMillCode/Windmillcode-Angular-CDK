# Changelog
## .0.0.1
  infinite dropdown supported
## . 0.0.2
  custom dropdown entries supported
## . 0.1.0
  able to customerize option containers
  able to specficy an interactionType of hover or click
##  0.1.1
  safari ios support replaced option tag with p tag to get component options to render
##  0.1.2
  proivded WmlInfiniteDropdownOption.detectChangeSubj the end developer can call to detectChanges when the developer makes an update that should reflect visually on the UI
## 0.1.3
  removed unneeded WmlInfiniteDropdownComponent.listenForOptions changes
## 0.1.4
  removed a console.log stmt
## 0.1.5
  * added cursor pointer to the WmlInfiniteDropdownItemComponent
## 0.2.0
  * added closeDropdown and openDropdown
## 0.2.1
  * addded WMLInfiniteDropdownOptionBase to help with typing issues using as base for options and dropdown classes. added id for optionsParams for e2e testing


## 1.0.1
* MAJOR rename to angular-wml-infinite-dropdown
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
WmlInfiniteDropdownNGXTranslateModule
// for regular
WmlInfiniteDropdownModule
```

## 1.0.2
* added isPresnt support to hide the p tag for wml-sample-dropdown-option

## 1.0.3
* remove max width for dropdown items

## 1.1.0
* added cdref access to WmlInfiniteDropdownOption and WmlInfiniteDropdownParams which extends WMLView

## 1.1.1
* added components cdref to WmlInfiniteDropdownParams
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
 * updated package to reflect the version  v16.2.93 of @angular/core package,  ,
## v16.2.100
 * updated package to reflect the version  v16.2.100 of @angular/core package,  ,
## v16.2.110
 * updated package to reflect the version  v16.2.110 of @angular/core package,  ,
## v16.2.120
 * updated package to reflect the version  v16.2.120 of @angular/core package,  ,
## v17.0.10
 * updated package to reflect the version  v17.0.10 of @angular/core package,  ,
## v17.0.11
 * updated package to reflect the version  v17.0.11 of @angular/core package,

## v17.0.12
* updated css and scss variables for the component to be indepent of windmillcode applications
,
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
 * updated package to reflect the version  ^17.1.3 of @angular/core package
## v17.1.3001 [2/8/24]
* added isPresent to WmlInfiniteDropdownParams constructor
,
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