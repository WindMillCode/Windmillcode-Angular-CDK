// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding,  Input   } from '@angular/core';
import { FormGroup, FormArray, AbstractControl } from '@angular/forms';
import { WMLFieldZeroProps } from '@windmillcode/angular-wml-field';
import { WMLOptionZeroItemProps, WMLOptionsZeroProps, WMLOptionsZeroComponent } from '@windmillcode/angular-wml-options';
import {  WMLFormFieldsUpdateSubjProps, WMLFormZeroProps } from '@windmillcode/angular-wml-form';

// rxjs
import { Subject } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';
import { generateClassPrefix } from '@windmillcode/wml-components-base';

// misc



@Component({

  selector: 'wml-table-zero-row-type',
  templateUrl: './wml-table-zero-row-type.component.html',
  styleUrls: ['./wml-table-zero-row-type.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush



})
export class WMLTableZeroRowTypeComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }


  classPrefix = generateClassPrefix('WMLTableZeroRowType')


  @Input('props') props: WMLTableZeroRowTypeProps = new WMLTableZeroRowTypeProps()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()

  fieldParentForm = new FormGroup({
    type:new FormArray<AbstractControl<WMLOptionZeroItemProps>>([])
  })
  selectTypeField!:WMLFieldZeroProps
  mainForm = new WMLFormZeroProps({
    fields:[]
  })

  initForm = ()=>{
    this.selectTypeField = new WMLFieldZeroProps({
      type: "custom",
      custom: {

        selfType:  "standalone",
        fieldParentForm:this.fieldParentForm,
        fieldFormControlName:"type",
        labelValue:"",

        fieldCustomCpnt:WMLOptionsZeroComponent,
        fieldCustomProps: new WMLOptionsZeroProps({
          limit:1,
          options:this.props.options
          .map((text,index0)=>{
            return new WMLOptionZeroItemProps({
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
    this.mainForm.fieldsUpdateSubj.next(new WMLFormFieldsUpdateSubjProps({
      fields:[this.selectTypeField]
    }))
  }
  listenForSelectedChanges = ()=>{
    return this.fieldParentForm.controls.type.valueChanges
    .pipe(
      takeUntil(this.ngUnsub),
      tap((res)=>{
        this.props.updateRowTypeSubj.next(res[0].value)
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



export class WMLTableZeroRowTypeProps {
  constructor(props:Partial<WMLTableZeroRowTypeProps>={}){
    Object.assign(
      this,
      {
        ...props
      }
    )
  }
  title="Select Row Type"
  options:string[] = ["Card","Row"]
  updateRowTypeSubj=new Subject<number>()

}


