# WML File Upload
The `wml-file-upload` library is designed to enhance Angular applications by providing robust file upload capabilities. This library streamlines the process of integrating file upload functionality, addressing common challenges such as handling multiple file formats, validating file sizes, and providing feedback on the upload process. Its primary goal is to offer a configurable and efficient solution for developers to incorporate file upload features into their applications, with a focus on ease of use and flexibility.

At the heart of the `wml-file-upload` library are several key components that facilitate its core functionality. The library includes components for file selection, upload progress indication, and error handling. These components work in concert to provide a seamless user experience, allowing for the asynchronous upload of files with real-time progress feedback. Developers have the ability to customize these components, tailoring the file upload experience to their application's specific needs. Parameters and services are exposed to enable customization, such as defining file size limits, specifying allowed file types, and customizing the UI elements. The library also supports interactivity, offering hooks and events that developers can leverage to create dynamic responses to the file upload process. In terms of implementation, the library encourages a modular approach, where developers can integrate and configure the file upload components within their existing Angular applications, ensuring flexibility and adaptability to various use cases.

# Installation

```bash
npm install -d @windmillcode/angular-wml-file-manager
```

# Usage


## `wml-file-upload` Component Usage

The `wml-file-upload` component from the `@windmillcode/angular-wml-file-manager` library provides a robust solution for implementing file upload functionality in Angular applications. This guide illustrates how to use the component for various developer needs.

### Basic Usage

To start using `wml-file-upload`, first ensure that the `WmlFileManagerModule` is imported into your module:

```typescript
import { WmlFileManagerModule } from '@windmillcode/angular-wml-file-manager';

@NgModule({
  declarations: [
    // other components
  ],
  imports: [
    // other modules
    WmlFileManagerModule,
  ],
})
export class YourModule {}
```

#### HTML

Create a simple file upload interface:

```html
<wml-file-upload [params]="uploadParams"></wml-file-upload>
```

#### TypeScript

Configure the `uploadParams` in your component:

```typescript
import { WMLFileUploadParams } from '@windmillcode/angular-wml-file-manager';

@Component({
  selector: 'your-component',
  templateUrl: './your-component.component.html',
})
export class YourComponent {
  uploadParams = new WMLFileUploadParams({
    dragDropText: 'Drag and drop files here or click to browse',
    browseFileText: 'Browse Files',
  });

  constructor() {}
}
```

### Advanced Usage

#### Custom Validation

You can provide custom file validation logic by defining the `uploadAllowedPredicate` function:

#### TypeScript

```typescript
uploadParams = new WMLFileUploadParams({
  dragDropText: 'Drag and drop files here or click to browse',
  browseFileText: 'Browse Files',
  uploadAllowedPredicate: (file: File, fileList: File[]) => {
    // Custom validation logic, for example, restrict file size and type
    return file.size <= 1048576 && ['image/jpeg', 'image/png'].includes(file.type);
  },
});
```

#### Handling File Upload

To handle file uploads, define an `uploadFn` function that returns an `Observable` to handle the upload process:

#### TypeScript

```typescript
uploadParams = new WMLFileUploadParams({
  dragDropText: 'Drag and drop files here or click to browse',
  browseFileText: 'Browse Files',
  uploadFn: (fileItem: WMLFileUploadItem) => {
    // Return an Observable from the upload service
    return this.fileUploadService.upload(fileItem.file);
  },
});
```

#### TypeScript: File Upload Service

An example upload service method:

```typescript
@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  constructor(private httpClient: HttpClient) {}

  upload(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    return this.httpClient.post('/api/upload', formData);
  }
}
```

By following these examples, you can configure the `wml-file-upload` component for basic and advanced use cases, including custom validation and file upload handling.




---

# Docs
### Properties

| Property                 | Type                                  | Description                                                   |
|--------------------------|---------------------------------------|---------------------------------------------------------------|
| `params`                 | `WMLFileUploadParams`                 | Configuration parameters for the file upload component.      |

### `WMLFileUploadParams` Configuration

| Property                  | Type                              | Description                                                     |
|---------------------------|-----------------------------------|-----------------------------------------------------------------|
| `automation`              | `boolean`                         | If set to true, enables automation features.                    |
| `files`                   | `WMLFileUploadItem[]`             | The list of files to be uploaded.                               |
| `dragDropText`            | `string`                          | Text displayed for the drag-and-drop area.                      |
| `browseFileText`          | `string`                          | Text displayed on the browse button.                            |
| `limit`                   | `number`                          | The maximum number of files that can be uploaded.               |
| `formArray`               | `FormArray<AbstractControl>`      | Angular FormArray to track the state of uploads.                |
| `duplicates`              | `boolean`                         | Whether to allow duplicate files.                               |
| `uploadFn`                | `Function`                        | Function to call when a file is uploaded.                       |
| `updateFormArrayPredicate`| `Function`                        | Function to update the FormArray based on current files.        |
| `uploadAllowedPredicate`  | `(file: File, fileList: File[]) => boolean` | Function to determine if a file upload is allowed.  |
| `afterUploadPredicate`    | `() => WMLFileUploadItem[]`       | Function called after files are selected/uploaded.              |

### Methods

These are methods you might need to interact with in your component:

| Method                   | Parameters                  | Return Type | Description                                              |
|--------------------------|-----------------------------|-------------|----------------------------------------------------------|
| `chooseFiles`            | `myFileList: FileList | Array<any>` | `void`      | Triggers the file selection and processes the selected files. |
| `uploadFile`             | `item: WMLFileUploadItem`   | `void`      | Initiates the upload process for a single file item.     |
| `deleteFile`             | `item: WMLFileUploadItem`   | `void`      | Removes a file from the list of files to be uploaded.    |
| `retryUpload`            | `item: WMLFileUploadItem`   | `void`      | Retries the upload process for a file.                   |
| `cancelUpload`           | `item: WMLFileUploadItem`   | `void`      | Cancels the upload process for a file.                   |


## Changelog

### 0.1.7
uploadAllowedPredicate - allows developer to edit the files list after the uploadAllowedPredicate validation for additional modfication or aux tasks as needed
be sure to return WMLFileUploadItem[] | this.params.files as necessary

### 1.0.0

    * ensured that there is support for ngx-translate and non ngx-translate features
    * to enable translation
```ts
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
    HttpClientModule,
    WmlFileManagerModule
    .forChild(
      new WMLModuleForRootParams({
        ngxTranslateLoaderFactory:HttpLoaderFactory
      })
    ),
```
    * to disable translation
```ts
    WmlFileManagerModule
```

### 1.0.1
* minor dependency update
## 2.0.0
* MAJOR rename to angular-wml-file-manager
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
WmlFileManagerNGXTranslateModule
// for regular
WmlFileManagerModule
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
 * updated package to reflect the version  ^17.3.2 of @angular/core package,
## v17.3.3000 [4/4/24]
 * updated package to reflect the version  ^17.3.3 of @angular/core package,
## v17.3.4000 [4/11/24]
 * updated package to reflect the version  ^17.3.4 of @angular/core package,
## v17.3.4001 [4/16/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   