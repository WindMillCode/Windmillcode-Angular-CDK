# WML File Manager

[starlightViewModes.switchTo](/Windmillcode-Angular-CDK-Docs/zen-mode/19.0.0/angular-components/wml-file-manager)function h(){const t=window.location.hash;document.querySelectorAll(".starlight-view-modes-switcher-a").forEach(e=>{e.href&&(e.href=e.href.split("#")[0]+t)})}h();window.addEventListener("hashchange",h);The Angular WML File Manager library is designed to enhance Angular applications by providing robust file upload capabilities. This library streamlines the process of integrating file upload functionality, addressing common challenges such as handling multiple file formats, validating file sizes, and providing feedback on the upload process. Its primary goal is to offer a configurable and efficient solution for developers to incorporate file upload features into their applications, with a focus on ease of use and flexibility.

At the heart of the library are several key components that facilitate its core functionality. The library includes components for file selection, upload progress indication, and error handling. These components work in concert to provide a seamless user experience, allowing for the asynchronous upload of files with real-time progress feedback. Developers have the ability to customize these components, tailoring the file upload experience to their application’s specific needs. Parameters and services are exposed to enable customization, such as defining file size limits, specifying allowed file types, and customizing the UI elements. The library also supports interactivity, offering hooks and events that developers can leverage to create dynamic responses to the file upload process. In terms of implementation, the library encourages a modular approach, where developers can integrate and configure the file upload components within their existing Angular applications, ensuring flexibility and adaptability to various use cases.



## Installation

[Section titled “Installation”](#installation)Terminal window <code><div class="ec-line"><div class="code"><span style="--0:#82AAFF;--1:#3B61B0">npm</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">install</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">-s</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">--verbose</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#ECC48D;--1:#3B61B0">@windmillcode/angular-wml-file-manager</span></div></div></code> 

## Usage

[Section titled “Usage”](#usage)

## WMLFileUploadZero

[Section titled “WMLFileUploadZero”](#wmlfileuploadzero)

### Getting Started

[Section titled “Getting Started”](#getting-started)<iframe src="https://stackblitz.com/edit/stackblitz-starters-gmecxv?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Change Field Text

[Section titled “Change Field Text”](#change-field-text)<iframe src="https://stackblitz.com/edit/stackblitz-starters-xhaocw?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Change Limit

[Section titled “Change Limit”](#change-limit)<iframe src="https://stackblitz.com/edit/stackblitz-starters-ekpyrw?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Allow Duplicates

[Section titled “Allow Duplicates”](#allow-duplicates)<iframe src="https://stackblitz.com/edit/stackblitz-starters-pci9ga?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Custom Validation

[Section titled “Custom Validation”](#custom-validation)when this is applied you are replacing validation for duplicates and limit and must reimplement again its planned to make it plug and play<iframe src="https://stackblitz.com/edit/stackblitz-starters-dh4beu?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

### Handling File Upload

[Section titled “Handling File Upload”](#handling-file-upload)[Diode Reverse Proxy](https://support.diode.io/article/uvmsbqnlqi-host-a-decentralized-private-proxy-server)

<iframe src="https://stackblitz.com/edit/stackblitz-starters-meialj?ctl=1&embed=1&file=src%2Fmain.ts&theme=dark" style="width: 100%; height: calc(500/16 * 1em) !important;"></iframe>

## Reference

[Section titled “Reference”](#reference)

###  <code dir="auto">WMLFileUploadZeroProps</code> Properties

[Section titled “WMLFileUploadZeroProps Properties”](#wmlfileuploadzeroprops-properties)<table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">files</code></td><td><code dir="auto">WMLFileUploadZeroItem[]</code></td><td>The list of files to be uploaded.</td></tr><tr><td></td><td></td><td></td></tr><tr><td><code dir="auto">dragDropText</code></td><td><code dir="auto">string</code></td><td>Text displayed for the drag-and-drop area.</td></tr><tr><td><code dir="auto">browseFileText</code></td><td><code dir="auto">string</code></td><td>Text displayed on the browse button.</td></tr><tr><td><code dir="auto">limit</code></td><td><code dir="auto">number</code></td><td>The maximum number of files that can be uploaded.</td></tr><tr><td><code dir="auto">formArray</code></td><td><code dir="auto">FormArray&lt;AbstractControl&gt;</code></td><td>Angular FormArray to track the state of uploads.</td></tr><tr><td><code dir="auto">duplicates</code></td><td><code dir="auto">boolean</code></td><td>Whether to allow duplicate files.</td></tr><tr><td><code dir="auto">uploadFn</code></td><td><code dir="auto">(item:WMLFileUploadZeroItem)=&gt; Observable&lt;any&gt;</code></td><td>Function to call when a file is uploaded. This is where you usually upload files to a server</td></tr><tr><td><code dir="auto">updateFormArrayPredicate</code></td><td><code dir="auto">Function</code></td><td>Function to update the FormArray based on current files.</td></tr><tr><td><code dir="auto">uploadAllowedPredicate</code></td><td><code dir="auto">(file: File, fileList: File[]) =&gt; boolean</code></td><td>Function to determine if a file upload is allowed.</td></tr><tr><td><code dir="auto">afterUploadPredicate</code></td><td><code dir="auto">() =&gt; WMLFileUploadZeroItem[]</code></td><td>Function called after files are selected/uploaded.</td></tr></tbody></table>



## Changelog

[Section titled “Changelog”](#changelog)

### v0.1.7

[Section titled “v0.1.7”](#v017)uploadAllowedPredicate - allows developer to edit the files list after the uploadAllowedPredicate validation for additional modfication or aux tasks as needed
be sure to return WMLFileUploadZeroItem[] | this.props.files as necessary



### v1.0.0

[Section titled “v1.0.0”](#v100)ensured that there is support for ngx-translate and non ngx-translate featuresto enable translation<code><div class="ec-line"><div class="code"><span style="--0:#C792EA;--1:#8844AE">export</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#C792EA;--1:#8844AE">function</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">HttpLoaderFactory</span><span style="--0:#D9F5DD;--1:#111111">(</span><span style="--0:#D7DBE0;--1:#403F53">http</span><span style="--0:#7FDBCA;--1:#096E72">:</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--1:#111111"><span style="--0:#FFCB8B">HttpClient</span><span style="--0:#D9F5DD">)</span></span><span style="--0:#D6DEEB;--1:#403F53"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#C792EA;--1:#8844AE">return</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#7FDBCA;--1:#096E72">new</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">TranslateHttpLoader</span><span style="--0:#D6DEEB;--1:#403F53">(http);</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">HttpClientModule,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">WmlFileManagerModule</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#82AAFF;--1:#3B61B0">forChild</span><span style="--0:#D6DEEB;--1:#403F53">(</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#7FDBCA;--1:#096E72">new</span><span style="--0:#D6DEEB;--1:#403F53"> </span><span style="--0:#82AAFF;--1:#3B61B0">WMLModuleForRootProps</span><span style="--0:#D6DEEB;--1:#403F53">({</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">ngxTranslateLoaderFactory:HttpLoaderFactory</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">})</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">),</span></div></div></code>

to disable translation <code><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">WmlFileManagerModule</span></div></div></code> 

### v1.0.1

[Section titled “v1.0.1”](#v101)minor dependency update

### v2.0.0

[Section titled “v2.0.0”](#v200)MAJOR rename to angular-wml-file-managerfixed major problems concerning ngx-translate<code><div class="ec-line"><div class="code"><span style="--0:#919F9F;--1:#5D6376">// translate</span></div></div><div class="ec-line"><div class="code"><span style="--0:#919F9F;--1:#5D6376">// first make sure to have ONLY ONE in the imports for AppModule</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">TranslateModule</span><span style="--0:#C792EA;--1:#8844AE">.</span><span style="--0:#82AAFF;--1:#3B61B0">forRoot</span><span style="--0:#D6DEEB;--1:#403F53">({</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">defaultLanguage: </span><span style="--0:#D9F5DD;--1:#111111">&#39;</span><span style="--0:#ECC48D;--1:#984E4D">en</span><span style="--0:#D9F5DD;--1:#111111">&#39;</span><span style="--0:#D6DEEB;--1:#403F53">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">loader: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">provide: TranslateLoader,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">useFactory: HttpLoaderFactory,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">        </span></span><span style="--0:#D6DEEB;--1:#403F53">deps:[HttpClient]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">      </span></span><span style="--0:#D6DEEB;--1:#403F53">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#D6DEEB;--1:#403F53">    </span></span><span style="--0:#D6DEEB;--1:#403F53">}),</span></div></div><div class="ec-line"><div class="code"><span style="--0:#919F9F;--1:#5D6376">// then</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">WmlFileManagerNGXTranslateModule</span></div></div><div class="ec-line"><div class="code"><span style="--0:#919F9F;--1:#5D6376">// for regular</span></div></div><div class="ec-line"><div class="code"><span style="--0:#D6DEEB;--1:#403F53">WmlFileManagerModule</span></div></div></code>

%!(EXTRA string=



### v16.2.80

[Section titled “v16.2.80”](#v16280)updated package to reflect the version  16.2.80 of @angular/core package),

### v16.2.80

[Section titled “v16.2.80”](#v16280-1)updated package to reflect the version  16.2.80 of @angular/core package,

### v16.2.90

[Section titled “v16.2.90”](#v16290)updated package to reflect the version  16.2.90 of @angular/core package,

### v16.2.91

[Section titled “v16.2.91”](#v16291)updated package to reflect the version  16.2.91 of @angular/core package,

### v16.2.93

[Section titled “v16.2.93”](#v16293)updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,

### v16.2.100

[Section titled “v16.2.100”](#v162100)updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,

### v16.2.110

[Section titled “v16.2.110”](#v162110)updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,

### v16.2.120

[Section titled “v16.2.120”](#v162120)updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,

### v17.0.10

[Section titled “v17.0.10”](#v17010)updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,

### v17.0.11

[Section titled “v17.0.11”](#v17011)updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,

### v17.0.20

[Section titled “v17.0.20”](#v17020)updated package to reflect the version  ^17.0.2 of @angular/core package,

### v17.0.40

[Section titled “v17.0.40”](#v17040)updated package to reflect the version  ^17.0.4 of @angular/core package,

### v17.0.50

[Section titled “v17.0.50”](#v17050)updated package to reflect the version  ^17.0.5 of @angular/core package,

### v17.0.60

[Section titled “v17.0.60”](#v17060)updated package to reflect the version  ^17.0.6 of @angular/core package,

### v17.0.70

[Section titled “v17.0.70”](#v17070)updated package to reflect the version  ^17.0.7 of @angular/core package,

### v17.0.7100

[Section titled “v17.0.7100”](#v1707100)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.0.7200

[Section titled “v17.0.7200”](#v1707200)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.0.7300

[Section titled “v17.0.7300”](#v1707300)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.0.80

[Section titled “v17.0.80”](#v17080)updated package to reflect the version  ^17.0.8 of @angular/core package,

### v17.0.8100

[Section titled “v17.0.8100”](#v1708100)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.0.8102

[Section titled “v17.0.8102”](#v1708102)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.0.8103

[Section titled “v17.0.8103”](#v1708103)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.0.9000

[Section titled “v17.0.9000”](#v1709000)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.0.9001

[Section titled “v17.0.9001”](#v1709001)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.1.0000

[Section titled “v17.1.0000”](#v1710000)updated package to reflect the version  ^17.1.0 of @angular/core package,

### v17.1.2

[Section titled “v17.1.2”](#v1712)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.1.1000

[Section titled “v17.1.1000”](#v1711000)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.1.2000 [2/5/24]

[Section titled “v17.1.2000 [2/5/24]”](#v1712000-2524)updated package to reflect the version  ^17.1.2 of @angular/core package,

### v17.1.2001 [2/8/24]

[Section titled “v17.1.2001 [2/8/24]”](#v1712001-2824)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.1.3000 [2/8/24]

[Section titled “v17.1.3000 [2/8/24]”](#v1713000-2824)updated package to reflect the version  ^17.1.3 of @angular/core package,

### v17.2.1000 [2/17/24]

[Section titled “v17.2.1000 [2/17/24]”](#v1721000-21724)updated package to reflect the version  ^17.2.1 of @angular/core package,

### v17.2.2000 [2/23/24]

[Section titled “v17.2.2000 [2/23/24]”](#v1722000-22324)updated package to reflect the version  ^17.2.2 of @angular/core package,

### v17.2.2001 [2/23/24]

[Section titled “v17.2.2001 [2/23/24]”](#v1722001-22324)updated package to reflect the version  ^17.2.2 of @angular/core package,

### v17.2.3000 [2/28/24]

[Section titled “v17.2.3000 [2/28/24]”](#v1723000-22824)updated package to reflect the version  ^17.2.3 of @angular/core package,

### v17.2.3001 [3/2/24]

[Section titled “v17.2.3001 [3/2/24]”](#v1723001-3224)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.2.3002 [3/5/24]

[Section titled “v17.2.3002 [3/5/24]”](#v1723002-3524)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.2.4000 [3/8/24]

[Section titled “v17.2.4000 [3/8/24]”](#v1724000-3824)updated package to reflect the version  ^17.2.4 of @angular/core package,

### v17.2.4001 [3/12/24]

[Section titled “v17.2.4001 [3/12/24]”](#v1724001-31224)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.2.4002 [3/12/24]

[Section titled “v17.2.4002 [3/12/24]”](#v1724002-31224)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.2.4003 [3/13/24]

[Section titled “v17.2.4003 [3/13/24]”](#v1724003-31324)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.2.4004 [3/13/24]

[Section titled “v17.2.4004 [3/13/24]”](#v1724004-31324)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.3.0 [3/17/24]

[Section titled “v17.3.0 [3/17/24]”](#v1730-31724)updated package to reflect the version  ^17.3.0 of @angular/core package
,

### v17.3.1000 [3/22/24]

[Section titled “v17.3.1000 [3/22/24]”](#v1731000-32224)updated package to reflect the version  ^17.3.1 of @angular/core package,

### v17.3.2000 [3/28/24]

[Section titled “v17.3.2000 [3/28/24]”](#v1732000-32824)updated package to reflect the version  ^17.3.2 of @angular/core package,

### v17.3.3000 [4/4/24]

[Section titled “v17.3.3000 [4/4/24]”](#v1733000-4424)updated package to reflect the version  ^17.3.3 of @angular/core package,

### v17.3.4000 [4/11/24]

[Section titled “v17.3.4000 [4/11/24]”](#v1734000-41124)updated package to reflect the version  ^17.3.4 of @angular/core package,

### v17.3.4001 [4/16/24]

[Section titled “v17.3.4001 [4/16/24]”](#v1734001-41624)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.3.5000 [4/20/24]

[Section titled “v17.3.5000 [4/20/24]”](#v1735000-42024)updated package to reflect the version  ^17.3.5 of @angular/core package

### v17.3.5110 [5/1/24]

[Section titled “v17.3.5110 [5/1/24]”](#v1735110-5124)[UPDATE]
Changed the updateFormArrayPredicate function in WMLFileUploadZeroComponent of wml-file-upload.component.ts to wrap the file parameter in a new WMLFileUploadZeroItem. This helps ensure that items are handled correctly in the form array, affecting how files are uploaded using the component.
,

### v17.3.5110 [5/1/24]

[Section titled “v17.3.5110 [5/1/24]”](#v1735110-5124-1)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v17.3.6000 [5/1/24]

[Section titled “v17.3.6000 [5/1/24]”](#v1736000-5124)updated package to reflect the version  ^17.3.6 of @angular/core package,

### v17.3.7000 [5/9/24]

[Section titled “v17.3.7000 [5/9/24]”](#v1737000-5924)updated package to reflect the version  ^17.3.7 of @angular/core package,

### v17.3.8000 [5/9/24]

[Section titled “v17.3.8000 [5/9/24]”](#v1738000-5924)updated package to reflect the version  ^17.3.8 of @angular/core package,

### v17.3.9000 [5/16/24]

[Section titled “v17.3.9000 [5/16/24]”](#v1739000-51624)updated package to reflect the version  ^17.3.9 of @angular/core package,

### v18.0.1 [5/22/24]

[Section titled “v18.0.1 [5/22/24]”](#v1801-52224)updated package to reflect the version  ^18.0.0 of @angular/core package,

### v18.0.4 [5/25/24]

[Section titled “v18.0.4 [5/25/24]”](#v1804-52524)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.0.1000 [5/29/24]

[Section titled “v18.0.1000 [5/29/24]”](#v1801000-52924)updated package to reflect the version  ^18.0.1 of @angular/core package,

### v18.0.2000 [6/6/24]

[Section titled “v18.0.2000 [6/6/24]”](#v1802000-6624)updated package to reflect the version  ^18.0.2 of @angular/core package,

### v18.0.3000 [6/13/24]

[Section titled “v18.0.3000 [6/13/24]”](#v1803000-61324)updated package to reflect the version  ^18.0.3 of @angular/core package,

### v18.0.3010 [6/18/24]

[Section titled “v18.0.3010 [6/18/24]”](#v1803010-61824)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.0.4000 [6/23/24]

[Section titled “v18.0.4000 [6/23/24]”](#v1804000-62324)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.0.5000 [6/26/24]

[Section titled “v18.0.5000 [6/26/24]”](#v1805000-62624)updated package to reflect the version  ^18.0.5 of @angular/core package,

### v18.0.6000 [7/5/24]

[Section titled “v18.0.6000 [7/5/24]”](#v1806000-7524)updated package to reflect the version  ^18.0.6 of @angular/core package,

### v18.1.4 [7/13/24]

[Section titled “v18.1.4 [7/13/24]”](#v1814-71324)updated package to reflect the version  ^18.1.0 of @angular/core package,

### v18.1.6 [7/14/24]

[Section titled “v18.1.6 [7/14/24]”](#v1816-71424)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.1.1000 [7/18/24]

[Section titled “v18.1.1000 [7/18/24]”](#v1811000-71824)updated package to reflect the version  ^18.1.1 of @angular/core package,

### v18.1.2000 [7/24/24]

[Section titled “v18.1.2000 [7/24/24]”](#v1812000-72424)updated package to reflect the version  ^18.1.2 of @angular/core package,

### v18.1.2300 [7/27/24]

[Section titled “v18.1.2300 [7/27/24]”](#v1812300-72724)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.1.2301 [7/30/24]

[Section titled “v18.1.2301 [7/30/24]”](#v1812301-73024)updated package to conform with @windmillcode/angular-wml-components-base
,

### v18.1.3000-beta1 [8/1/24]

[Section titled “v18.1.3000-beta1 [8/1/24]”](#v1813000-beta1-8124)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.1.3000-beta2 [8/1/24]

[Section titled “v18.1.3000-beta2 [8/1/24]”](#v1813000-beta2-8124)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.1.3000-beta3 [8/1/24]

[Section titled “v18.1.3000-beta3 [8/1/24]”](#v1813000-beta3-8124)updated package to conform with @windmillcode/angular-wml-components-base   ,

### v18.1.3000-beta4 [8/1/24]

[Section titled “v18.1.3000-beta4 [8/1/24]”](#v1813000-beta4-8124)updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3001 [8/4/24]

[Section titled “v18.1.3001 [8/4/24]”](#v1813001-8424)updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3002 [8/4/24]

[Section titled “v18.1.3002 [8/4/24]”](#v1813002-8424)updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3002 [8/5/24]

[Section titled “v18.1.3002 [8/5/24]”](#v1813002-8524)updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3003 [8/5/24]

[Section titled “v18.1.3003 [8/5/24]”](#v1813003-8524)updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3004 [8/5/24]

[Section titled “v18.1.3004 [8/5/24]”](#v1813004-8524)updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3005 [8/5/24]

[Section titled “v18.1.3005 [8/5/24]”](#v1813005-8524)updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3006 [8/5/24]

[Section titled “v18.1.3006 [8/5/24]”](#v1813006-8524)updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.3007 [8/5/24]

[Section titled “v18.1.3007 [8/5/24]”](#v1813007-8524)updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.4000 [8/14/24]

[Section titled “v18.1.4000 [8/14/24]”](#v1814000-81424)updated package to conform with @windmillcode/angular-wml-components-base

### v18.1.4001 [8/14/24]

[Section titled “v18.1.4001 [8/14/24]”](#v1814001-81424)updated package to conform with @windmillcode/angular-wml-components-base

### v18.2.0 [8/15/24]

[Section titled “v18.2.0 [8/15/24]”](#v1820-81524)updated package to conform with @windmillcode/angular-wml-components-base

### v18.2.1 [8/20/24]

[Section titled “v18.2.1 [8/20/24]”](#v1821-82024)updated package to conform with @windmillcode/angular-wml-components-base

### v18.2.1000 [8/22/24]

[Section titled “v18.2.1000 [8/22/24]”](#v1821000-82224)updated package to reflect the version  18.2.1 of @angular/core package

### v18.2.2000 [8/30/24]

[Section titled “v18.2.2000 [8/30/24]”](#v1822000-83024)updated package to reflect the version  18.2.2 of @angular/core package

### v18.2.2100 [9/1/24]

[Section titled “v18.2.2100 [9/1/24]”](#v1822100-9124)updated package to conform with @windmillcode/angular-wml-components-base

### v18.2.2101 [9/1/24]

[Section titled “v18.2.2101 [9/1/24]”](#v1822101-9124)updated package to conform with @windmillcode/angular-wml-components-base

### v18.2.2200 [9/3/24]

[Section titled “v18.2.2200 [9/3/24]”](#v1822200-9324)updated package to conform with @windmillcode/angular-wml-components-base

### v18.2.3000 [9/4/24]

[Section titled “v18.2.3000 [9/4/24]”](#v1823000-9424)updated package to reflect the version  18.2.3 of @angular/core package

### v18.2.3100 [9/8/24]

[Section titled “v18.2.3100 [9/8/24]”](#v1823100-9824)updated package to reflect the version  18.2.3 of @angular/core package

### v18.2.3110 [9/10/24]

[Section titled “v18.2.3110 [9/10/24]”](#v1823110-91024)updated package to conform with @windmillcode/angular-wml-components-base

### v18.2.3112 [9/10/24]

[Section titled “v18.2.3112 [9/10/24]”](#v1823112-91024)updated package to conform with @windmillcode/angular-wml-components-base

### v18.2.3200 [9/16/24]

[Section titled “v18.2.3200 [9/16/24]”](#v1823200-91624)updated package to conform with @windmillcode/wml-components-base

### v18.2.4000 [9/16/24]

[Section titled “v18.2.4000 [9/16/24]”](#v1824000-91624)updated package to reflect the version  18.2.4 of @angular/core package

### v18.2.4100 [9/19/24]

[Section titled “v18.2.4100 [9/19/24]”](#v1824100-91924)updated package to conform with @windmillcode/wml-components-base

### v18.2.4200 [9/21/24]

[Section titled “v18.2.4200 [9/21/24]”](#v1824200-92124)updated package to conform with @windmillcode/wml-components-base

### v18.2.5001 [9/22/24]

[Section titled “v18.2.5001 [9/22/24]”](#v1825001-92224)updated package to reflect the version  18.2.5 of @angular/core package

### v18.2.6000 [10/1/24]

[Section titled “v18.2.6000 [10/1/24]”](#v1826000-10124)updated package to reflect the version  18.2.6 of @angular/core package

### v18.2.7000 [10/2/24]

[Section titled “v18.2.7000 [10/2/24]”](#v1827000-10224)updated package to reflect the version  18.2.7 of @angular/core package

### v18.2.7001 [10/5/24]

[Section titled “v18.2.7001 [10/5/24]”](#v1827001-10524)updated package to conform with @windmillcode/wml-components-base

### v18.2.7010 [10/9/24]

[Section titled “v18.2.7010 [10/9/24]”](#v1827010-10924)updated package to conform with @windmillcode/wml-components-base

### v18.2.7020 [10/10/24]

[Section titled “v18.2.7020 [10/10/24]”](#v1827020-101024)updated package to conform with @windmillcode/wml-components-base

### v18.2.8000 [10/10/24]

[Section titled “v18.2.8000 [10/10/24]”](#v1828000-101024)updated package to reflect the version  18.2.8 of @angular/core package

### v18.2.8000 [10/11/24]

[Section titled “v18.2.8000 [10/11/24]”](#v1828000-101124)updated package to reflect the version  18.2.8 of @angular/core package

### v18.2.8001 [10/11/24]

[Section titled “v18.2.8001 [10/11/24]”](#v1828001-101124)updated package to conform with @windmillcode/wml-components-base

### v18.2.9000 [10/23/24]

[Section titled “v18.2.9000 [10/23/24]”](#v1829000-102324)updated package to conform with @windmillcode/wml-components-base

### v18.2.10000 [10/31/24]

[Section titled “v18.2.10000 [10/31/24]”](#v18210000-103124)updated package to conform with @windmillcode/wml-components-base

### v18.2.11000 [11/7/24]

[Section titled “v18.2.11000 [11/7/24]”](#v18211000-11724)updated package to conform with @windmillcode/wml-components-base

### v18.2.12000 [11/15/24]

[Section titled “v18.2.12000 [11/15/24]”](#v18212000-111524)updated package to conform with @windmillcode/wml-components-base

### v18.2.12001 [11/17/24]

[Section titled “v18.2.12001 [11/17/24]”](#v18212001-111724)updated package to conform with @windmillcode/wml-components-base

### v19.0.0 [11/19/24]

[Section titled “v19.0.0 [11/19/24]”](#v1900-111924)updated package to conform with @windmillcode/wml-components-base

### v19.0.3 [11/20/24]

[Section titled “v19.0.3 [11/20/24]”](#v1903-112024)updated package to conform with @windmillcode/wml-components-base

### v19.0.4 [11/26/24]

[Section titled “v19.0.4 [11/26/24]”](#v1904-112624)updated package to conform with @windmillcode/wml-components-base

### v19.0.1000 [11/26/24]

[Section titled “v19.0.1000 [11/26/24]”](#v1901000-112624)updated package to conform with @windmillcode/wml-components-base[Previous
WML Field](/Windmillcode-Angular-CDK-Docs/19.0.0/angular-components/wml-field/)[Next
WML Form](/Windmillcode-Angular-CDK-Docs/19.0.0/angular-components/wml-form/)