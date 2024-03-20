// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit,  Input   } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';
import { WMLField } from '@windmillcode/angular-wml-field';
import { WMLForm, WMLFormFieldsUpdateSubjParams } from '@windmillcode/angular-wml-form';
import { WMLOptionItemParams, WMLOptionsParams, WmlOptionsComponent } from '@windmillcode/angular-wml-options';




// rxjs
import { Subject } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';

// misc



@Component({

  selector: 'wml-table-zero-select-page',
  templateUrl: './wml-table-zero-select-page.component.html',
  styleUrls: ['./wml-table-zero-select-page.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush



})
export class WmlTableZeroSelectPageComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }

  generateClassPrefix(prefix:string) {
    return (val: string) => {
      return prefix + val
    }
  }
  classPrefix = this.generateClassPrefix('WmlTableZeroSelectPage')
  @Input('params') params: WmlTableZeroSelectPageParams = new WmlTableZeroSelectPageParams()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()
  fieldParentForm = new FormGroup({
    pages:new FormArray<AbstractControl<WMLOptionItemParams>>([])
  })
  selectPageField!:WMLField
  mainForm =new WMLForm({
    fields:[]
  })

  initForm = ()=>{
    this.selectPageField = new WMLField({
      type: "custom",
      custom: {

        selfType:  "standalone",
        fieldParentForm:this.fieldParentForm,
        fieldFormControlName:"pages",
        labelValue:"",

        fieldCustomCpnt:WmlOptionsComponent,
        fieldCustomMeta: new WMLOptionsParams({
          limit:1,
          options:Array(this.params.pages)
          .fill(null)
          .map((nullVal,index0)=>{
            return new WMLOptionItemParams({
              text:(index0 +1).toString() ,
              value:index0,
            })
          })
          ,
          formArray:this.fieldParentForm.controls.pages
        })
      }
    })
    this.selectPageField.deleteRequiredLabelPart()
    this.mainForm.fieldsUpdateSubj.next(new WMLFormFieldsUpdateSubjParams({
      fields:[this.selectPageField]
    }))
  }
  listenForSelectedChanges = ()=>{
    return this.fieldParentForm.controls.pages.valueChanges
    .pipe(
      takeUntil(this.ngUnsub),
      tap((res)=>{
        this.params.updatePageNumberSubj.next(res[0].value)
      })
    )

  }


  ngOnInit(): void {
    this.initForm()
    this.listenForSelectedChanges().subscribe()
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}



export class WmlTableZeroSelectPageParams {
  constructor(params:Partial<WmlTableZeroSelectPageParams>={}){
    Object.assign(
      this,
      {
        ...params
      }
    )
  }
  title = "Select Page"
  pages!:number
  updatePageNumberSubj=new Subject<number>()
}


