// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit,  Input   } from '@angular/core';
import { FormGroup, FormArray, AbstractControl, FormControl, Validators } from '@angular/forms';
import { WMLField } from '@windmillcode/angular-wml-field';
import { WMLForm, WMLFormFieldsUpdateSubjParams } from '@windmillcode/angular-wml-form';
import { WMLInputAreaParams, WmlInputComponent, WmlInputParams } from '@windmillcode/angular-wml-input';




// rxjs
import { Subject } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';
import { WMLUIProperty } from '@windmillcode/angular-wml-components-base';
import { WmlButtonZeroParams } from '@windmillcode/angular-wml-button-zero';

// misc



@Component({

  selector: 'wml-table-zero-page-size',
  templateUrl: './wml-table-zero-page-size.component.html',
  styleUrls: ['./wml-table-zero-page-size.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush



})
export class WmlTableZeroPageSizeComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }

  generateClassPrefix(prefix:string) {
    return (val: string) => {
      return prefix + val
    }
  }
  classPrefix = this.generateClassPrefix('WmlTableZeroPageSize')
  @Input('params') params: WmlTableZeroPageSizeParams = new WmlTableZeroPageSizeParams()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()

  fieldParentForm = new FormGroup({
    // @ts-ignore
    pageSize:new FormControl<number>(null,[Validators.min(0)])
  })
  pageSizeField!:WMLField
  mainForm =new WMLForm({
    fields:[]
  })

  initForm = ()=>{
    this.fieldParentForm.patchValue({
      pageSize:this.params.pageSize
    })
    this.pageSizeField = new WMLField({
      type: "custom",
      custom: {
        selfType:  "standalone",
        fieldParentForm:this.fieldParentForm,
        fieldFormControlName:"pageSize",
        labelValue:"",
        errorMsgs:{
          min:"The value cannot be less than zero"
        },
        fieldCustomCpnt:WmlInputComponent,
        fieldCustomMeta: new WmlInputParams({
          input:new WMLInputAreaParams({
            style:{
              textAlign:"center",
              fontSize:"calc(48/16 * 1rem)",
            }
          }),
          wmlField:this.pageSizeField
        })
      }
    })
    this.pageSizeField.deleteRequiredLabelPart()
    this.mainForm.fieldsUpdateSubj.next(new WMLFormFieldsUpdateSubjParams({
      fields:[this.pageSizeField]
    }))
  }


  submitBtnClick = ()=>{
    if(this.fieldParentForm.valid){
      let pageSize = this.fieldParentForm.controls.pageSize.value
      this.params.updatePageSizeSubj.next(pageSize)
    }
  }
  submitBtn = new WmlButtonZeroParams({
    text:new WMLUIProperty({
      text:"Submit",
      style:{

      }
    }),
    button:new WMLUIProperty({
      click:this.submitBtnClick
    })
  })




  ngOnInit(): void {
    this.initForm()
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}



export class WmlTableZeroPageSizeParams {
  constructor(params:Partial<WmlTableZeroPageSizeParams>={}){
    Object.assign(
      this,
      {
        ...params
      }
    )
  }
  title ="Enter Page Size"
  pageSize!:number
  updatePageSizeSubj!:Subject<WmlTableZeroPageSizeParams["pageSize"]>
}


