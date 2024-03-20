// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit,  Input   } from '@angular/core';
import { FormGroup, FormArray, AbstractControl } from '@angular/forms';
import { WMLField } from '@windmillcode/angular-wml-field';
import { WMLOptionItemParams, WMLOptionsParams, WmlOptionsComponent } from '@windmillcode/angular-wml-options';
import { WMLForm, WMLFormFieldsUpdateSubjParams } from '@windmillcode/angular-wml-form';




// rxjs
import { Subject } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';

// misc



@Component({

  selector: 'wml-table-zero-row-type',
  templateUrl: './wml-table-zero-row-type.component.html',
  styleUrls: ['./wml-table-zero-row-type.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush



})
export class WmlTableZeroRowTypeComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }

  generateClassPrefix(prefix:string) {
    return (val: string) => {
      return prefix + val
    }
  }
  classPrefix = this.generateClassPrefix('WmlTableZeroRowType')


  @Input('params') params: WmlTableZeroRowTypeParams = new WmlTableZeroRowTypeParams()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()

  fieldParentForm = new FormGroup({
    type:new FormArray<AbstractControl<WMLOptionItemParams>>([])
  })
  selectTypeField!:WMLField
  mainForm = new WMLForm({
    fields:[]
  })

  initForm = ()=>{
    this.selectTypeField = new WMLField({
      type: "custom",
      custom: {

        selfType:  "standalone",
        fieldParentForm:this.fieldParentForm,
        fieldFormControlName:"type",
        labelValue:"",

        fieldCustomCpnt:WmlOptionsComponent,
        fieldCustomMeta: new WMLOptionsParams({
          limit:1,
          options:this.params.options
          .map((text,index0)=>{
            return new WMLOptionItemParams({
              text,
              value:index0,
            })
          })
          ,
          formArray:this.fieldParentForm.controls.type
        })
      }
    })
    this.selectTypeField.deleteRequiredLabelPart()
    this.mainForm.fieldsUpdateSubj.next(new WMLFormFieldsUpdateSubjParams({
      fields:[this.selectTypeField]
    }))
  }
  listenForSelectedChanges = ()=>{
    return this.fieldParentForm.controls.type.valueChanges
    .pipe(
      takeUntil(this.ngUnsub),
      tap((res)=>{
        this.params.updateRowTypeSubj.next(res[0].value)
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



export class WmlTableZeroRowTypeParams {
  constructor(params:Partial<WmlTableZeroRowTypeParams>={}){
    Object.assign(
      this,
      {
        ...params
      }
    )
  }
  title="Select Row Type"
  options:string[] = ["Card","Row"]
  updateRowTypeSubj=new Subject<number>()
  
}


