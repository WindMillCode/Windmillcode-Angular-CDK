// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding,  Input   } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { WMLButtonZeroProps, WMLButtonPropsTypeEnum } from '@windmillcode/angular-wml-button';
import { generateClassPrefix, WMLAPIPaginationRequestModel, WMLUIProperty } from '@windmillcode/angular-wml-components-base';
import { WMLFieldZeroProps } from '@windmillcode/angular-wml-field';
import { WMLFormZeroProps, WMLFormFieldsUpdateSubjProps } from '@windmillcode/angular-wml-form';

// rxjs
import { Subject } from 'rxjs';
import { WMLTableZeroKeyValueInputComponent, WMLTableZeroKeyValueInputProps } from '../wml-table-zero-key-value-input/wml-table-zero-key-value-input.component';
import { checkIfFieldExists } from '../functions';

// misc

@Component({
  selector: 'wml-table-zero-filter',
  templateUrl: './wml-table-zero-filter.component.html',
  styleUrls: ['./wml-table-zero-filter.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush

})
export class WMLTableZeroFilterComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }


  classPrefix = generateClassPrefix('WMLTableZeroFilter')
  @Input('props') props: WMLTableZeroFilterProps = new WMLTableZeroFilterProps()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()

  fieldParentForm = new FormGroup<{[k:string]:FormGroup<{
    key:FormControl<any>,
    value:FormControl<any>
  }>}>({})
  filterFields:WMLFieldZeroProps[] = []
  mainForm =new WMLFormZeroProps({
    fields:this.filterFields
  })

  initForm = ()=>{
    let filters = this.props.filter.length === 0 ? [{key:"",value:""}] :this.props.filter
    this.filterFields = filters.map((filter,index0)=>{
      return this.createFilterField(index0,filter);
    })


    this.mainForm.fieldsUpdateSubj.next(new WMLFormFieldsUpdateSubjProps({
      fields:this.filterFields
    }))
  }


  submitBtnClick = ()=>{
    if(this.fieldParentForm.valid){
      // @ts-ignore
      this.props.updateFilterSubj.next(Object.values(this.fieldParentForm.value))
    }
  }
  submitBtn = new WMLButtonZeroProps({
    text:new WMLUIProperty({
      text:this.props.submit0Btn,

    }),
    button:new WMLUIProperty({
      click:this.submitBtnClick
    })
  })
  addFilterBtnClick = ()=>{
    let controlName = this.filterFields.length
    let field =this.createFilterField(controlName);
    this.filterFields.push(field)
    this.mainForm.fieldsUpdateSubj.next(new WMLFormFieldsUpdateSubjProps({
      fields:this.filterFields
    }))
  }
  addFilterBtn =new WMLButtonZeroProps({
    type:WMLButtonPropsTypeEnum.SECONDARY,
    text:new WMLUIProperty({
      text:this.props.add0BtnText
    }),
    button:new WMLUIProperty({
      click:this.addFilterBtnClick,
      style:{
        border:"calc(4/16 * 1rem) solid black"
      }
    })
  })
  removeFilterField(field: WMLFieldZeroProps<any>) {
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
    this.mainForm.fieldsUpdateSubj.next(new WMLFormFieldsUpdateSubjProps({
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
    let field = new WMLFieldZeroProps({
      type: "custom",
      custom: {
        selfType: "standalone",
        fieldParentForm: this.fieldParentForm,
        labelValue: controlLabel,
        fieldFormControlName: controlName,
        fieldCustomCpnt: WMLTableZeroKeyValueInputComponent,
        fieldCustomProps: new WMLTableZeroKeyValueInputProps({
          filter:{
            fieldLabels:this.props.fieldLabels
          },
          removeBtn : new WMLButtonZeroProps({
            text:new WMLUIProperty({
              text:this.props.remove0BtnText
            }),
            button:new WMLUIProperty({
              click:()=>{
                this.removeFilterField(field);
              }
            })
          }),
          parentForm:this.fieldParentForm.controls[controlName],
          columnOptions:this.props.availableColumns
        })
      }
    });
    field.deleteRequiredLabelPart();
    return field;
  }



  ngOnInit(): void {
    this.addFilterBtn.text.text = this.props.add0BtnText
    this.submitBtn.text.text = this.props.submit0Btn
    this.initForm()
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}



export class WMLTableZeroFilterProps {
  constructor(props:Partial<WMLTableZeroFilterProps>={}){
    Object.assign(
      this,
      {
        ...props
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
  updateFilterSubj!:Subject<WMLTableZeroFilterProps["filter"]>
  availableColumns:Array<string> = []
  get displayAvailableColumns(){
    return this.availableColumns.join(" , ")
  }

}


