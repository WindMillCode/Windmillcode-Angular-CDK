// angular
import { ChangeDetectorRef, Component, ElementRef, HostBinding, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormArray, FormControl } from '@angular/forms';
import { generateClassPrefix } from '@windmillcode/wml-components-base';
import { WMLFieldZeroProps } from '@windmillcode/angular-wml-field';

// rxjs
import { fromEvent, Observable, Subject } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';

// misc
@Component({
  selector: 'wml-file-upload-zero',
  templateUrl: './wml-file-upload-zero.component.html',
  styleUrls: ['./wml-file-upload-zero.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class WMLFileUploadZeroComponent  {

  constructor(
    public cdref:ChangeDetectorRef,
  ) { }

  classPrefix = generateClassPrefix('WMLFileUploadZero')
  @ViewChild("fileInput",{static:true}) browseFileElementRef!:ElementRef
  browseFileElement!:HTMLInputElement
  @Input('props') props: WMLFileUploadZeroProps = new WMLFileUploadZeroProps()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()


  populateFields = ()=>{
    let myFileList = this.props.formArray.value
    .map((fileUploadItem)=>{
      return fileUploadItem.file
    })
    this.chooseFiles(myFileList)
  }

  openFileBrowserToUploadFile = ()=>{
    this.browseFileElement.click()
  }

  updateFormArray= ()=>{
    if(this.props.formArray){
      this.props.formArray.clear()
      this.props.files
      .forEach((file:WMLFileUploadZeroItem)=>{
        let result = this.props.updateFormArrayPredicate(new WMLFileUploadZeroItem(file))
        this.props.formArray.push(new FormControl(result))
      })
      this.props.formArray.markAsDirty()
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
      return this.props.uploadAllowedPredicate(file,fileArray)
    })
    .map((file:File)=>{
      return new WMLFileUploadZeroItem({
        file,
        uploadIsPresent:!!this.props.uploadFn
      })
    })
    this.props.files.push(...fileObjs)
    this.props.files = this.props.afterUploadPredicate()
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


  deleteFile = (item:WMLFileUploadZeroItem)=>{
    this.props.files = this.props.files
    .filter((file:WMLFileUploadZeroItem)=>{
      return file !== item
    })
    this.cdref.detectChanges()
    this.updateFormArray()
  }
  retryUpload = (item:WMLFileUploadZeroItem)=>{

  }
  cancelUpload = (item:WMLFileUploadZeroItem)=>{

  }


  ngOnInit(): void {
    // TODO when view encapsulation is none this does not work
    this.browseFileElementRef.nativeElement.style.display ="none"
  }

  ngAfterViewInit(): void {
    if(this.props.wmlField){
      this.props.formArray = this.props.wmlField.getReactiveFormControl() as FormArray
    }
    this.browseFileElement = this.browseFileElementRef.nativeElement;
    // specifacally for automation purposes
    if(this.props.automation){
      (this.browseFileElement as any).chooseFiles = this.chooseFiles
    }
    this.listenForFileUpload().subscribe()
    this.populateFields()

  }


  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}

export class WMLFileUploadZeroProps {
  constructor(props:Partial<WMLFileUploadZeroProps>={}){
    Object.assign(
      this,
      {
        ...props
      }
    )
  }
  automation = false
  files:WMLFileUploadZeroItem[] | any = Array(2)
  .fill(null)
  .map((nullVal,index0)=>{
    return new WMLFileUploadZeroItem({
      file:{
        name:["Beta.jpg","Alpha.jpg"][index0]
      }
    })
  })
  dragDropText ='Drag and drop the file(s) here or click on "Browse Files".'
  browseFileText= "Browse Files"
  limit = 4
  formArray =new FormArray<AbstractControl<WMLFileUploadZeroItem>>([])
  wmlField!:WMLFieldZeroProps
  duplicates = false
  uploadFn! : (item:WMLFileUploadZeroItem)=> Observable<any>
  updateFormArrayPredicate:(val:any) => any =(val)=> val
  uploadAllowedPredicate:(file:File,fileList:File[])=>boolean =(file,fileList)=>{

    let fileIndex = fileList.findIndex((item)=>{
      return item === file
    })

    let limitNotReached = (fileIndex+ this.files.length) < this.limit

    if(!this.duplicates){
      let result =  this.files.find((fileItem:WMLFileUploadZeroItem)=>{
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
  afterUploadPredicate:()=> WMLFileUploadZeroProps["files"] =()=>{
    return this.files
  }
}


export class WMLFileUploadZeroItem {
  constructor(props:Partial<WMLFileUploadZeroItem>={}){
    Object.assign(
      this,
      {
        ...props
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

