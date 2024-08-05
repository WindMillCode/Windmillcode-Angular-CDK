// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding,  Input   } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { WMLButtonZeroProps, WMLButtonPropsTypeEnum } from '@windmillcode/angular-wml-button';
import { generateClassPrefix, WMLAPIPaginationRequestModel, WMLUIProperty } from '@windmillcode/angular-wml-components-base';
import { WMLFieldZeroProps } from '@windmillcode/angular-wml-field';
import {  WMLFormFieldsUpdateSubjProps, WMLFormZeroProps } from '@windmillcode/angular-wml-form';


// rxjs
import { Subject } from 'rxjs';
import { WMLTableZeroKeyValueInputComponent, WMLTableZeroKeyValueInputProps } from '../wml-table-zero-key-value-input/wml-table-zero-key-value-input.component';
import { checkIfFieldExists } from '../functions';
import { WMLOptionZeroItemProps } from '@windmillcode/angular-wml-options';

// misc


@Component({
  selector: 'wml-table-zero-sort',
  templateUrl: './wml-table-zero-sort.component.html',
  styleUrls: ['./wml-table-zero-sort.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class WMLTableZeroSortComponent  {

  constructor(
    public cdref:ChangeDetectorRef
  ) { }


  classPrefix = generateClassPrefix('WMLTableZeroSort')
  @Input('props') props: WMLTableZeroSortProps = new WMLTableZeroSortProps()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()
  fieldParentForm = new FormGroup<{[k:string]:FormGroup<{
    key:FormControl<any>,
    direction:FormArray<any>
  }>}>({})
  sortFields:WMLFieldZeroProps[] = []
  mainForm =new WMLFormZeroProps({
    fields:this.sortFields
  })

  initForm = ()=>{
    let sorts = this.props.sort.length === 0 ? [{key:"",direction:""}] :this.props.sort
    this.sortFields = sorts.map((sort,index0)=>{
      // @ts-ignore
      return this.createSortField(index0,sort);
    })


    this.mainForm.fieldsUpdateSubj.next(new WMLFormFieldsUpdateSubjProps({
      fields:this.sortFields
    }))

  }

  submitBtnClick = ()=>{
    if(this.fieldParentForm.valid){
      this.fixSortDirectionFields()
      let result =Object.values(this.fieldParentForm.value).map((value)=>{
        // @ts-ignore
        value.direction = value.direction[0]
        return value
      })
      // @ts-ignore
      this.props.updateSortSubj.next(Object.values(result))
    }
  }
  submitBtn = new WMLButtonZeroProps({
    text:new WMLUIProperty({
      text:"Submit",

    }),
    button:new WMLUIProperty({
      click:this.submitBtnClick
    })
  })

  addSortBtnClick = ()=>{
    let controlName = this.sortFields.length
    let field =this.createSortField(controlName);
    this.sortFields.push(field)
    this.fixSortDirectionFields()
    this.mainForm.fieldsUpdateSubj.next(new WMLFormFieldsUpdateSubjProps({
      fields:this.sortFields
    }))
  }
  fixSortDirectionFields=()=>{

    Object.entries(this.fieldParentForm.controls)
    .forEach(([key,value])=>{
      let directionValue = value.controls.direction.value[0]
      if(directionValue instanceof WMLOptionZeroItemProps){
        value.controls.direction.clear()
        value.controls.direction.push(new FormControl(directionValue.value))

      }
    })
  }
  addSortBtn =new WMLButtonZeroProps({
    type:WMLButtonPropsTypeEnum.SECONDARY,
    text:new WMLUIProperty({
      text:"Add Sort",
    }),
    button:new WMLUIProperty({
      click:this.addSortBtnClick,
      style:{
        border:"calc(4/16 * 1rem) solid black"
      }
    })
  })


  removeSortField(field: WMLFieldZeroProps<any>) {
    let index1 = this.sortFields.findIndex((wmlField) => {
      return wmlField === field;
    });
    this.sortFields.splice(index1, 1);
    this.sortFields.forEach((wmlField, index2) => {
      let controlLabel = (index2 + 1).toString() + ".";
      wmlField.updateLabel(controlLabel);
    });
    // @ts-ignore
    this.fieldParentForm.removeControl(field.field.formControlName)
    this.mainForm.fieldsUpdateSubj.next(new WMLFormFieldsUpdateSubjProps({
      fields: this.sortFields
    }));
  }

  private createSortField(index0: number,sort:WMLAPIPaginationRequestModel["sort"][number]={key:"",direction:""}) {
    let controlName = checkIfFieldExists(index0,this.fieldParentForm);
    let controlLabel = (index0 + 1).toString() + "."


    // @ts-ignore
    this.fieldParentForm.addControl(
      controlName,
      new FormGroup({
        key: new FormControl(sort.key),
        direction: new FormArray([new FormControl(sort.direction)])
      })
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
          type:"sort",
          sort:{
            fieldLabels:this.props.fieldLabels,
            sortDirectionPropsOptions:this.props.sortDirectionPropsOptions,
            sortDirectionPropsValues:this.props.sortDirectionPropsValues,
          },
          removeBtn : new WMLButtonZeroProps({
            text:new WMLUIProperty({
              text:this.props.remove0BtnText
            }),
            button:new WMLUIProperty({
              click:()=>{
                this.removeSortField(field);
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
    this.addSortBtn.text.text = this.props.add0BtnText
    this.submitBtn.text.text = this.props.submit0Btn
    this.initForm()
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}



export class WMLTableZeroSortProps {
  constructor(props:Partial<WMLTableZeroSortProps>={}){
    Object.assign(
      this,
      {
        ...props
      }
    )
  }
  title = "Modify Sorting"
  subtitles = [
    "Sort values filter based on the beginning of the word in the column",
    "To specify global filter leave the Sort Key input empty"
  ]
  columnText = "Available Columns"
  add0BtnText = "Add Filter"
  remove0BtnText = "Remove"
  submit0Btn = "Submit"
  availableColumnsText = ""
  fieldLabels = ["Sort Column","Sort Direction"]
  sortDirectionPropsOptions= ["ASC","DESC"]
  sortDirectionPropsValues =["ASC","DESC"]
  sort!:WMLAPIPaginationRequestModel["sort"]
  updateSortSubj!:Subject<WMLTableZeroSortProps["sort"]>
  availableColumns:Array<string> = []
  get displayAvailableColumns(){
    return this.availableColumns.join(" , ")
  }
  showAvailableColumnsByTranslate = false
}


