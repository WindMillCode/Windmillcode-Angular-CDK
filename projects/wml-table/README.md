# WML Table (Beta Unstable Unmaintainable)

The Angular WML Table library is an Angular-based toolkit designed to enhance the development of table components within Angular applications. It focuses on providing developers with a streamlined and efficient way to create and manage tables, addressing common challenges such as data binding, sorting, and pagination. The library’s aim is to simplify the integration of complex table functionalities, ensuring that developers can focus on the unique aspects of their applications while leveraging robust, pre-built solutions for table management.

Central to the Angular WML Table library are its core components, which facilitate the creation and manipulation of tables. One of the key components is the <code dir="auto">WMLTableZeroComponent</code> , which serves as the primary interface for table creation and configuration. This component allows for the dynamic loading of data, sorting, and pagination, making it a versatile tool for developers. Additionally, the library offers customization options through various parameters and services, enabling developers to tailor the table’s behavior and appearance to their specific needs. Through the use of these components, the Angular WML Table library promotes a pattern of modularity and reusability, encouraging developers to construct table functionalities in a scalable and maintainable manner.



## Installation

Terminal window <code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3C63B3">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">-s</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3C63B3">--verbose</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3C63B3">@windmillcode/angular-wml-table</span></div></div></code> 

## Usage



## Basic Table Setup

<iframe src="https://stackblitz.com/edit/stackblitz-starters-jj1djc?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

## Customizing Columns

<iframe src="[stackblits url placeholder]" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

## Handling User Interactions

<iframe src="[stackblits url placeholder]" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

## Integrating Pagination

<iframe src="[stackblits url placeholder]" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

## Reference



### WMLTableZeroProps

Configuration parameters for <code dir="auto">wml-table-zero</code> component.

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">columns</code></td><td><code dir="auto">WmlTableColumn[]</code></td><td>Array defining the columns of the table, including header text and corresponding field names in the data.</td></tr><tr><td><code dir="auto">rows</code></td><td><code dir="auto">any[]</code></td><td>Array containing the data to be displayed in the table rows. Each object in the array represents a row.</td></tr><tr><td><code dir="auto">sortable</code></td><td><code dir="auto">boolean</code></td><td>Determines if the table columns are sortable.</td></tr><tr><td><code dir="auto">paginationConfig</code></td><td><code dir="auto">PaginationConfig</code></td><td>Configuration object for pagination, specifying items per page and other related settings.</td></tr><tr><td><code dir="auto">filterConfig</code></td><td><code dir="auto">FilterConfig</code></td><td>Configuration for enabling and handling data filtering.</td></tr></tbody></table>



### PaginationConfig

Configuration for table pagination.

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">itemsPerPage</code></td><td><code dir="auto">number</code></td><td>Number of items to display per page.</td></tr><tr><td><code dir="auto">currentPage</code></td><td><code dir="auto">number</code></td><td>Current active page.</td></tr><tr><td><code dir="auto">totalItems</code></td><td><code dir="auto">number</code></td><td>Total number of items across all pages.</td></tr></tbody></table>



### FilterConfig

Configuration for table filtering.

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">enabled</code></td><td><code dir="auto">boolean</code></td><td>Determines if filtering is enabled for the table.</td></tr><tr><td><code dir="auto">fields</code></td><td><code dir="auto">string[]</code></td><td>Array of field names that can be filtered.</td></tr></tbody></table>



### WmlTableColumn

Defines the structure and behavior of a table column.

<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">header</code></td><td><code dir="auto">string</code></td><td>The text to display in the column header.</td></tr><tr><td><code dir="auto">field</code></td><td><code dir="auto">string</code></td><td>The field name in the row data to display in this column.</td></tr><tr><td><code dir="auto">sortable</code></td><td><code dir="auto">boolean</code></td><td>Indicates if the column is sortable.</td></tr></tbody></table>



### v18.1.3002 [8/4/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3001 [8/4/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3003 [8/5/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3004 [8/5/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3005 [8/5/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3006 [8/5/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3007 [8/5/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.4000 [8/14/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.4001 [8/14/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.2.0 [8/15/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.2.1 [8/20/24]

updated package to conform with @windmillcode/angular-wml-components-base

### v18.2.1000 [8/22/24]

updated package to reflect the version  18.2.1 of @angular/core package

### v18.2.2000 [8/30/24]

updated package to reflect the version  18.2.2 of @angular/core package[Previous
WML Slicebox](/Windmillcode-Angular-CDK-Docs/components/wml-slicebox/)[Next
WML Tabs](/Windmillcode-Angular-CDK-Docs/components/wml-tabs/)