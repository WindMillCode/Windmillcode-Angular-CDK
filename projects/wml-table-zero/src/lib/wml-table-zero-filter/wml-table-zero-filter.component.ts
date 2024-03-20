// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit,  Input   } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { WmlButtonZeroParams, WMLButtonParamsTypeEnum } from '@windmillcode/angular-wml-button-zero';
import { WMLAPIPaginationRequestModel, WMLUIProperty } from '@windmillcode/angular-wml-components-base';
import { WMLField } from '@windmillcode/angular-wml-field';
import { WMLForm, WMLFormFieldsUpdateSubjParams } from '@windmillcode/angular-wml-form';
import { WmlInputComponent, WmlInputParams, WMLInputAreaParams } from '@windmillcode/angular-wml-input';




// rxjs
import { Subject } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';
import { WmlTableZeroKeyValueInputComponent, WmlTableZeroKeyValueInputParams } from '../wml-table-zero-key-value-input/wml-table-zero-key-value-input.component';
import { checkIfFieldExists } from '../functions';

// misc



@Component({

  selector: 'wml-table-zero-filter',
  templateUrl: './wml-table-zero-filter.component.html',
  styleUrls: ['./wml-table-zero-filter.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush



})
export class WmlTableZeroFilterComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }

  generateClassPrefix(prefix:string) {
    return (val: string) => {
      return prefix + val
    }
  }
  classPrefix = this.generateClassPrefix('WmlTableZeroFilter')


  @Input('params') params: WmlTableZeroFilterParams = new WmlTableZeroFilterParams()


  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()

  fieldParentForm = new FormGroup<{[k:string]:FormGroup<{
    key:FormControl<any>,
    value:FormControl<any>
  }>}>({})
  filterFields:WMLField[] = []
  mainForm =new WMLForm({
    fields:this.filterFields
  })

  initForm = ()=>{
    let filters = this.params.filter.length === 0 ? [{key:"",value:""}] :this.params.filter
    this.filterFields = filters.map((filter,index0)=>{
      return this.createFilterField(index0,filter);
    })


    this.mainForm.fieldsUpdateSubj.next(new WMLFormFieldsUpdateSubjParams({
      fields:this.filterFields
    }))
  }


  submitBtnClick = ()=>{
    if(this.fieldParentForm.valid){
      // @ts-ignore
      this.params.updateFilterSubj.next(Object.values(this.fieldParentForm.value))
    }
  }
  submitBtn = new WmlButtonZeroParams({
    text:new WMLUIProperty({
      text:this.params.submit0Btn,

    }),
    button:new WMLUIProperty({
      click:this.submitBtnClick
    })
  })
  addFilterBtnClick = ()=>{
    let controlName = this.filterFields.length
    let field =this.createFilterField(controlName);
    this.filterFields.push(field)
    this.mainForm.fieldsUpdateSubj.next(new WMLFormFieldsUpdateSubjParams({
      fields:this.filterFields
    }))
  }
  addFilterBtn =new WmlButtonZeroParams({
    type:WMLButtonParamsTypeEnum.SECONDARY,
    text:new WMLUIProperty({
      text:this.params.add0BtnText
    }),
    button:new WMLUIProperty({
      click:this.addFilterBtnClick,
      style:{
        border:"calc(4/16 * 1rem) solid black"
      }
    })
  })
  removeFilterField(field: WMLField<any>) {
    let index1 = this.filterFields.findIndex((wmlField) => {
      return wmlField === field;
    });
    this.filterFields.splice(index1, 1);
    this.filterFields.forEach((wmlField, index2) => {
      let controlLabel = (index2 + 1).toString() + ".";
      wmlField.updateLabel(controlLabel);
    });
    // @ts-ignore
    this.fieldParentForm.removeControl(field.field.formControlName)
    this.mainForm.fieldsUpdateSubj.next(new WMLFormFieldsUpdateSubjParams({
      fields: this.filterFields
    }));
  }


  private createFilterField(index0: number,filter:WMLAPIPaginationRequestModel["filter"][number]={key:"",value:""}) {
    let controlName = checkIfFieldExists(index0,this.fieldParentForm);
    let controlLabel = (index0 + 1).toString() + "."
    // @ts-ignore
    this.fieldParentForm.addControl(
      controlName,
      new FormGroup({ key: new FormControl(filter.key), value: new FormControl(filter.value) })
    );
    let field = new WMLField({
      type: "custom",
      custom: {
        selfType: "standalone",
        fieldParentForm: this.fieldParentForm,
        labelValue: controlLabel,
        fieldFormControlName: controlName,
        fieldCustomCpnt: WmlTableZeroKeyValueInputComponent,
        fieldCustomMeta: new WmlTableZeroKeyValueInputParams({
          filter:{
            fieldLabels:this.params.fieldLabels
          },
          removeBtn : new WmlButtonZeroParams({
            text:new WMLUIProperty({
              text:this.params.remove0BtnText
            }),
            button:new WMLUIProperty({
              click:()=>{
                this.removeFilterField(field);
              }
            })
          }),
          parentForm:this.fieldParentForm.controls[controlName],
          columnOptions:this.params.availableColumns
        })
      }
    });
    field.deleteRequiredLabelPart();
    return field;
  }



  ngOnInit(): void {
    this.addFilterBtn.text.text = this.params.add0BtnText
    this.submitBtn.text.text = this.params.submit0Btn
    this.initForm()
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}



export class WmlTableZeroFilterParams {
  constructor(params:Partial<WmlTableZeroFilterParams>={}){
    Object.assign(
      this,
      {
        ...params
      }
    )
  }
  title = "Modify Filters"
  subtitles = [
    "Filter values filter based on the beginning of the word in the column",
    "To specify global filter leave the Filter Key input empty"
  ]
  columnText = "Available Columns"
  add0BtnText = "Add Filter"
  remove0BtnText = "Remove"
  submit0Btn = "Submit"
  availableColumnsText = ""
  fieldLabels = ["Filter Column","Filter Direction"]
  showAvailableColumnsByTranslate = false
  filter!:WMLAPIPaginationRequestModel["filter"]
  updateFilterSubj!:Subject<WmlTableZeroFilterParams["filter"]>
  availableColumns:Array<string> = []
  get displayAvailableColumns(){
    return this.availableColumns.join(" , ")
  }

}


