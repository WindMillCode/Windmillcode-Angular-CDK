# Overview

The `wml-table-zero` library is an Angular-based toolkit designed to streamline the creation and management of tables within web applications. Its primary aim is to provide a robust and flexible solution for developers looking to integrate table functionalities into their Angular projects. The library encapsulates a range of features and tools that simplify the process of generating, populating, and managing tables, addressing common challenges such as data binding, pagination, sorting, and customization.

At the heart of `wml-table-zero` are its central components, each serving a distinct role within the library's ecosystem. These components are designed to work together harmoniously, allowing developers to construct tables that are both dynamic and interactive. Key components include the table container, row and cell definitions, and utilities for pagination and sorting. These elements offer a solid foundation, enabling developers to build tables that cater to a variety of use cases and data representations. The library's structure promotes interactivity and customization, offering various parameters and services that developers can leverage to tailor table behavior and appearance. Customization options extend to aspects like column configuration, data transformation, and event handling, providing a high degree of control over the table's functionality and presentation. Through the thoughtful integration of these components, `wml-table-zero` facilitates a coherent and streamlined approach to table implementation, encouraging best practices and efficient data handling within Angular applications.


# Installation

```bash
npm install -d @windmillcode/angular-wml-table-zero
```

# Usage

## Basic Table Setup

To create a basic table with `wml-table-zero`, you need to define your table structure in HTML and manage the data and configuration in your TypeScript component.

### HTML

```html
<wml-table-zero>
  <wml-table-zero-header>
    <wml-table-zero-header-cell>Column 1</wml-table-zero-header-cell>
    <wml-table-zero-header-cell>Column 2</wml-table-zero-header-cell>
  </wml-table-zero-header>
  <wml-table-zero-body>
    <wml-table-zero-row *ngFor="let row of rows">
      <wml-table-zero-cell>{{ row.col1 }}</wml-table-zero-cell>
      <wml-table-zero-cell>{{ row.col2 }}</wml-table-zero-cell>
    </wml-table-zero-row>
  </wml-table-zero-body>
</wml-table-zero>
```

### TypeScript

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
})
export class MyTableComponent {
  rows = [
    { col1: 'Data 11', col2: 'Data 12' },
    { col1: 'Data 21', col2: 'Data 22' },
  ];
}
```

## Table with Pagination

To add pagination to your `wml-table-zero`, you need to use the `wml-table-zero-pagination` component and manage the pagination logic in your TypeScript component.

### HTML

```html
<wml-table-zero>
  <!-- Table Header and Body as shown in the Basic Table Setup -->
</wml-table-zero>
<wml-table-zero-pagination
  [totalPages]="totalPages"
  [currentPage]="currentPage"
  (changePage)="onPageChange($event)">
</wml-table-zero-pagination>
```

### TypeScript

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-paginated-table',
  templateUrl: './my-paginated-table.component.html',
})
export class MyPaginatedTableComponent {
  currentPage = 1;
  totalPages = 5;

  onPageChange(page: number) {
    this.currentPage = page;
    // Load data for the current page
  }
}
```

## Table with Sorting

To implement sorting in your `wml-table-zero` table, you need to provide a way for the user to trigger sorting and handle the sorting logic in your component.

### HTML

```html
<wml-table-zero>
  <wml-table-zero-header>
    <wml-table-zero-header-cell (click)="sort('col1')">Column 1</wml-table-zero-header-cell>
    <wml-table-zero-header-cell (click)="sort('col2')">Column 2</wml-table-zero-header-cell>
  </wml-table-zero-header>
  <!-- Table Body as shown in the Basic Table Setup -->
</wml-table-zero>
```

### TypeScript

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-sortable-table',
  templateUrl: './my-sortable-table.component.html',
})
export class MySortableTableComponent {
  rows = [...]; // Initialize with data
  sortColumn = null;
  sortDirection = 'asc';

  sort(column: string) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
    this.sortData();
  }

  sortData() {
    this.rows.sort((a, b) => {
      // Sorting logic based on this.sortColumn and this.sortDirection
    });
  }
}
```

# Docs

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `rows` | `Array<Object>` | Array of objects representing the data for each row in the table. |
| `totalPages` | `number` | Total number of pages for pagination. Used in conjunction with pagination component. |
| `currentPage` | `number` | Current page number. Used in pagination to indicate the active page. |

## Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `onPageChange` | `(page: number) => void` | Method triggered when the page is changed in pagination. It updates the `currentPage` and loads the respective page data. |
| `sort` | `(column: string) => void` | Method to handle sorting logic. It is triggered when a table header cell is clicked for sorting. |

## Events

| Event | Payload Type | Description |
|-------|--------------|-------------|
| `changePage` | `number` | Event emitted by the pagination component when the page is changed. It sends the new page number as a payload. |

Note: The above documentation provides reference information on the main properties, methods, and events used in the `wml-table-zero` library from a developer's perspective, focusing on external functionalities that are accessible for integration and customization in Angular applications.


# Changelog
##  0.0.1
    * component deployed made available for use
    pass an instace of WMLTabsParams to the html like so
```ts
tabParams = new WMLTabsParams({
  tabs:[
    new WMLTab({
      header:{
        type:"wmlTabHeader",
        wmlTabHeader:new WMLTabHeader({
          text:"Tab "+index0
        }),
        body = new WMLCustomComponent({
          cpnt:YourComponent,
          params:new YourComponentParams()
        })
      }
    })
  ]
})
```
```html
<wml-tabs [params]=tabParams></wml-tabls>
```

## v1.0.0
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
WmlTabsNGXTranslateModule
// for regular
WmlTabsModule
```

## 1.0.1
* mimor dep update

## v16.2.80
 * updated package to reflect the version  16.2.80 of @angular/core package
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
 * updated package to reflect the version  ^17.3.9 of @angular/core package