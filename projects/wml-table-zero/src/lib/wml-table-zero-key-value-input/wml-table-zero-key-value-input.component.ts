// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit,  Input   } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { WmlButtonZeroParams } from '@windmillcode/angular-wml-button-zero';
import { WMLUIProperty } from '@windmillcode/angular-wml-components-base';
import { WMLField } from '@windmillcode/angular-wml-field';
import { WMLForm, WMLFormFieldsUpdateSubjParams } from '@windmillcode/angular-wml-form';
import { WmlInputComponent, WmlInputParams, WMLInputAreaParams } from '@windmillcode/angular-wml-input';
import { WMLOptionItemParams, WMLOptionsParams, WmlOptionsComponent } from '@windmillcode/angular-wml-options';
import { WMLSelectZeroComponent, WMLSelectZeroParams } from '@windmillcode/angular-wml-select-zero';


// rxjs
import { Subject } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';

// misc



@Component({

  selector: 'wml-table-zero-key-value-input',
  templateUrl: './wml-table-zero-key-value-input.component.html',
  styleUrls: ['./wml-table-zero-key-value-input.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush



})
export class WmlTableZeroKeyValueInputComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }

  generateClassPrefix(prefix:string) {
    return (val: string) => {
      return prefix + val
    }
  }
  classPrefix = this.generateClassPrefix('WmlTableZeroKeyValueInput')
  @Input('params') params: WmlTableZeroKeyValueInputParams = new WmlTableZeroKeyValueInputParams()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()

  filterKeyField!:WMLField
  filterValueField!:WMLField
  sortKeyField!:WMLField
  sortDirField!:WMLField
  mainForm =new WMLForm({
    fields:[],
    fieldSections:[2]
  })

  initFilterFields(){
    let filterKeyParams =  new WMLSelectZeroParams({

      options:this.params.columnOptions,
      wmlField:this.filterKeyField
    });
    filterKeyParams.updateOptionValuesWithOptionText()
    let filterValueParams =new WmlInputParams({
      input:new WMLInputAreaParams({
        style:{
          fontSize:"calc(32/16 * 1rem)",
        }
      }),
      wmlField:this.filterKeyField
    });
    [this.filterKeyField,this.filterValueField]=Array(2)
    .fill(null)
    .map((nullVal,index0)=>{
      let field=  new WMLField({
        type: "custom",
        custom: {
          selfType:  "standalone",
          fieldParentForm:this.params.parentForm,
          fieldFormControlName:["key","value"][index0],
          labelValue:this.params.filter.fieldLabels[index0],
          fieldCustomCpnt:[WMLSelectZeroComponent,WmlInputComponent][index0],
          fieldCustomMeta: [filterKeyParams,filterValueParams][index0],
        }
      })
      field.deleteRequiredLabelPart()
      return field
    })
  }

  initFilterForm(){
    this.mainForm.fieldsUpdateSubj.next(new WMLFormFieldsUpdateSubjParams({
      fields:[this.filterKeyField,this.filterValueField]
    }))
  }

  initSortFields(){
    let sortKeyParams =  new WMLSelectZeroParams({

      options:this.params.columnOptions,
    })
    sortKeyParams.updateOptionValuesWithOptionText(this.params.columnOptions)
    let sortDirectionParamsFormArray = this.params.parentForm.controls["direction"] as FormArray
    let sortDirectionParamsValues = this.params.sort.sortDirectionParamsOptions
    .map((dir,index0)=>{
      return new WMLOptionItemParams({
        text:dir ,
        value:this.params.sort.sortDirectionParamsValues[index0],
      })
    })
    let sortDirectionParams =  new WMLOptionsParams({
      limit:1,
      options:sortDirectionParamsValues,
      formArray:sortDirectionParamsFormArray
    })


    ;[this.sortKeyField,this.sortDirField]=Array(2)
    .fill(null)
    .map((nullVal,index0)=>{
      let field=  new WMLField({
        type: "custom",
        custom: {
          selfType:  "standalone",
          fieldParentForm:this.params.parentForm,
          fieldFormControlName:["key","direction"][index0],
          labelValue:this.params.sort.fieldLabels[index0],
          fieldCustomCpnt:[WMLSelectZeroComponent,WmlOptionsComponent][index0],
          fieldCustomMeta: [sortKeyParams,sortDirectionParams][index0]
        }
      })
      field.deleteRequiredLabelPart()
      if(index0 === 0){
        field.field.custom.params.wmlField=this.sortKeyField
      }
      return field
    })
  }

  initSortForm(){
    this.mainForm.fieldsUpdateSubj.next(new WMLFormFieldsUpdateSubjParams({
      fields:[this.sortKeyField,this.sortDirField]
    }))
  }

  listenForFormUpdate(){
    return this.mainForm.fieldsUpdatedEvent
    .pipe(
      takeUntil(this.ngUnsub),
      tap(()=>{
        this.mainForm.displayFields[0].style ={
          display:"flex",
        }
      })
    )

  }

  ngOnInit(): void {
    this.listenForFormUpdate().subscribe()
    if(this.params.type==="filter"){
      this.initFilterFields()
      this.initFilterForm()
    }
    else if(this.params.type ==="sort"){
      this.initSortFields()
      this.initSortForm()
    }

  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}



export class WmlTableZeroKeyValueInputParams {
  constructor(params:Partial<WmlTableZeroKeyValueInputParams>={}){
    Object.assign(
      this,
      {
        ...params
      }
    )
  }
  type:"sort"|"filter" = "filter"
  removeBtn = new WmlButtonZeroParams({
    text:new WMLUIProperty({
      text:"Remove"
    })
  })
  sort={
    fieldLabels : ["Sort Column","Sort Direction"],
    sortDirectionParamsOptions: ["ASC","DESC"],
    sortDirectionParamsValues: ["ASC","DESC"]
  }
  filter ={
    fieldLabels : ["Filter Column","Filter Value"],
  }
  columnOptions:Array<string>=[]
  parentForm!:FormGroup
}


