# Changelog
  ## 0.0.1
  developer has a full table that supports server side pagination if you want to use for client side just transform and pass your data to businessRows on the WmlTableZeroParams and use the table, the table handles the rest
  * for server side support you must provide this replacement function signature, where the Observable is your api call to the server to gather data,
```ts
(reqBody?: WMLAPIPaginationRequestModel) => Observable<{
    req: WMLAPIPaginationRequestModel<WmlTableZeroItemParams>;
    res: WMLAPIPaginationResponseModel;
}>
```
## 0.0.2
  * added prod flag in script to see if we can miniification
## 0.1.0
  * fixed prod flag issue
## 0.2.0
  * removed faker-js from the application which reduced bundled size by over 500%!
(string=
## v16.2.80
 * updated package to reflect the version  16.2.80 of @angular/core package)## 0.2.1
  * when filter is modified the page num goes to 0
## 0.3.0
  * added WMLTableZeroTablePredicateReturnValue for the end developer it will be easier to implement the table predicate function
  * max height on the sample card component is about 200/10.6 * 1rem
  * added overrideDisplayData to WmlTableZeroItemParams for easier init of display values
  * added generic type parameters to WmlTableZeroItemParams to help specify types concering customCpnts via CC & CP
  * added instructionStackCachingLimit so that when an action is taken that results in the same request params as the last x instructions, no API call is made until the last x instructions are reached it should not be higher than the instructionStackLimit
  * added metadata property to WmlTableZeroSampleCardParams for data placeholder if someone clicks on a card
## 0.3.1
  * added scroll finctionality for  the card containers
## 1.0.0
  * BREAKING CHANGE
    *     "@windmillcode/angular-wml-button-zero": ">=2.0.0" is needed for this package to work if you need less use major version 0

## v2.0.0
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
WmlMobileNavZeroNGXTranslateModule
// for regular
WmlMobileNavZeroModule
```


  * provided textContent object if you would like to modify parts of the text on the table use paramsTextContent property and use the following object to update the text you want so say and you wanted to update the next page all you have to do is obj 1 and the component will take care of the rest
```ts
// obj1
    paramsTextContent:{
      controlItems:{
        previous:"WMLTable.controlItems.previous",
      }
    }
// original type
    paramsTextContent:{
      controlItems:{
        previous:"WMLTable.controlItems.previous",
        next:"WMLTable.controlItems.next",
        selectPage:"WMLTable.controlItems.selectPage",
        itemsPerPage:"WMLTable.controlItems.itemsPerPage",
        filter:"WMLTable.controlItems.filter",
        sort:"WMLTable.controlItems.sort",
        page:"WMLTable.controlItems.page",
        pageSize:"WMLTable.controlItems.pageSize",
      },
      "selectPage": {
        "title": "WMLTable.selectPage.title"
      },
      "pageSize": {
        "title": "WMLTable.pageSize.title"
      },
      "filter": {
        "title": "WMLTable.filter.title",
        "subtitles": enTranslations.WMLTable.filter.subtitles
        .map((x,i)=>{
          return "WMLTable.filter.subtitles."+i
        }),
        "columnText": "WMLTable.filter.columnText",
        "add0BtnText": "WMLTable.filter.add0BtnText",
        "remove0BtnText": "WMLTable.filter.remove0BtnText",
        "submit0Btn": "WMLTable.filter.submit0Btn",
        availableColumnsText : "",
        showAvailableColumnsByTranslate : false,
        fieldLabels:enTranslations.WMLTable.filter.fieldLabels
        .map((x,i)=>{
          return "WMLTable.filter.fieldLabels."+i
        }),
      },
      "sort": {
        "title": "WMLTable.sort.title",
        "subtitles": enTranslations.WMLTable.sort.subtitles
        .map((x,i)=>{
          return "WMLTable.sort.subtitles."+i
        }),
        "columnText": "WMLTable.sort.columnText",
        "add0BtnText": "WMLTable.sort.add0BtnText",
        "remove0BtnText": "WMLTable.sort.remove0BtnText",
        "submit0Btn": "WMLTable.sort.submit0Btn",
        availableColumnsText : "",
        showAvailableColumnsByTranslate : false,
        fieldLabels:enTranslations.WMLTable.sort.fieldLabels
        .map((x,i)=>{
          return "WMLTable.sort.fieldLabels."+i
        }),
        sortDirectionParamsOptions:enTranslations.WMLTable.sort.sortDirectionParamsOptions
        .map((x,i)=>{
          return "WMLTable.sort.sortDirectionParamsOptions."+i
        })
      }
    }
```

## 2.0.4
* fixed an error where it showed "Filter Direction" instad of "Filter Value" for the table

## 3.0.0
* BREAKING CHANGE, no more WmlTableZeroItemParams["custom"]
rewrite all logic from WmlTableZeroItemParams["custom"] to WmlTableZeroItemParams["customCpnts"][0]["custom"]
* end developer can toggle between row and card types
* automatic support for resizing to card and row on mobile which can be turned off with  WmlTableZeroItemParams["changeRowTypeBasedOnWindowSizeIsPresent"] = false

## 3.1.0
* fixed error where pagesize update filter panel came from res not req res only should provide page data based on its query results, req provides data based on the current request
* fixed error where that overrides the default params for table predicate when users provide one

## 3.2.2
  * replaced inputs for filter and sort panel keys with input dropdowns
  * fixed an issue where sort was not working on desc

## 16.2.6-0.0.0
* update to avoid peer dependency issues
## 16.2.6-0.0.1
* bug fix

## 16.2.6-1
* bug fix

## 16.2.6-3
* bug fix

## 16.2.70
* update dependecines for angular-wml-select-zero

## 16.2.71
* update angular-wml-button to 16.2.70
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