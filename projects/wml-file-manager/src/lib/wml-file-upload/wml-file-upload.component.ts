// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormArray, FormControl } from '@angular/forms';




// rxjs
import { fromEvent, Observable, of, Subject } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';

// misc
@Component({
  selector: 'wml-file-upload',
  templateUrl: './wml-file-upload.component.html',
  styleUrls: ['./wml-file-upload.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class WmlFileUploadComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }

  generateClassPrefix(prefix:string) {
    return (val: string) => {
      return prefix + val
    }
  }

  classPrefix = this.generateClassPrefix('WmlFileUpload')
  @ViewChild("fileInput",{static:true}) browseFileElementRef!:ElementRef
  browseFileElement!:HTMLInputElement
  @Input('params') params: WMLFileUploadParams = new WMLFileUploadParams()

  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.browseFileElement = this.browseFileElementRef.nativeElement;
    // specifacally for automation purposes
    if(this.params.automation){
      ;(this.browseFileElement as any).chooseFiles = this.chooseFiles
    }
    this.listenForFileUpload().subscribe()
    this.populateFields()
  }


  populateFields = ()=>{
    let myFileList = this.params.formArray.value
    .map((fileUploadItem)=>{
      return fileUploadItem.file
    })
    this.chooseFiles(myFileList)
  }

  openFileBrowserToUploadFile = ()=>{
    this.browseFileElement.click()
  }

  updateFormArray= ()=>{
    if(this.params.formArray){
      this.params.formArray.clear()
      this.params.files
      .forEach((file:WMLFileUploadItem)=>{
        let result = this.params.updateFormArrayPredicate(file)
        this.params.formArray.push(new FormControl(result))
      })
      this.params.formArray.markAsDirty()
    }

  }

  chooseFiles =(myFileList?:FileList | Array<any>)=>{
    // @ts-ignore
    let fileArray = Array.from(this.browseFileElement.files.length > 0 ?
      this.browseFileElement.files:
      myFileList
      )
    let fileObjs = fileArray
    .filter((file:File)=>{
      return this.params.uploadAllowedPredicate(file,fileArray)
    })
    .map((file:File)=>{
      return new WMLFileUploadItem({
        file,
        uploadIsPresent:!!this.params.uploadFn
      })
    })
    this.params.files.push(...fileObjs)
    this.params.files = this.params.afterUploadPredicate()
    this.browseFileElement.value = ''

    this.updateFormArray()

    this.cdref.detectChanges()

  }
  listenForFileUpload = ()=>{
    return fromEvent(
      this.browseFileElement,
      "change"
    )
    .pipe(
      // @ts-ignore
      takeUntil(this.ngUnsub),
      // @ts-ignore
      tap(this.chooseFiles)
    )

  }


  uploadFile = (item:WMLFileUploadItem)=>{

  }
  deleteFile = (item:WMLFileUploadItem)=>{
    this.params.files = this.params.files
    .filter((file:WMLFileUploadItem)=>{
      return file !== item
    })
    this.cdref.detectChanges()
    this.updateFormArray()
  }
  retryUpload = (item:WMLFileUploadItem)=>{

  }
  cancelUpload = (item:WMLFileUploadItem)=>{

  }


  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}

export class WMLFileUploadParams {
  constructor(params:Partial<WMLFileUploadParams>={}){
    Object.assign(
      this,
      {
        ...params
      }
    )
  }
  automation = false
  files:WMLFileUploadItem[] | any = Array(2)
  .fill(null)
  .map((nullVal,index0)=>{
    return new WMLFileUploadItem({
      file:{
        name:["Beta.jpg","Alpha.jpg"][index0]
      }
    })
  })
  dragDropText ='Drag and drop the file(s) here or click on "Browse Files".'
  browseFileText= "Browse Files"
  limit = 4
  formArray =new FormArray<AbstractControl<WMLFileUploadItem>>([])
  duplicates = false
  uploadFn! : ()=> Observable<any>
  updateFormArrayPredicate:(val:any) => any =(val)=> val
  uploadAllowedPredicate:(file:File,fileList:File[])=>boolean =(file,fileList)=>{

    let fileIndex = fileList.findIndex((item)=>{
      return item === file
    })

    let limitNotReached = (fileIndex+ this.files.length) < this.limit

    if(!this.duplicates){
      let result =  this.files.find((fileItem:WMLFileUploadItem)=>{
        return fileItem.file.name === file.name &&
        fileItem.file.type === file.type &&
        fileItem.file.size === file.size &&
        fileItem.file.lastModified === file.lastModified
      })
      return result === undefined && limitNotReached
    }
    else {
      return limitNotReached

    }
  }
  afterUploadPredicate:()=> WMLFileUploadParams["files"] =()=>{
    return this.files
  }
}


export class WMLFileUploadItem {
  constructor(params:Partial<WMLFileUploadItem>={}){
    Object.assign(
      this,
      {
        ...params
      }
    )
  }
  file:File | any
  uploadIsPresent = false
  deleteIsPresent = true
  retryIsPresent = false
  cancelIsPresent = false
  state: "attachSuccess" | "attachError" | "fileUploading" |  "uploadError" | "uploadSuccess" = "attachSuccess"
}

