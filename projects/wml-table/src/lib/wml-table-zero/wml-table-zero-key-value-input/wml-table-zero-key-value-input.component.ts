// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding,  Input   } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { WMLButtonZeroProps } from '@windmillcode/angular-wml-button';
import { generateClassPrefix, WMLUIProperty } from '@windmillcode/angular-wml-components-base';
import { WMLFieldZeroProps } from '@windmillcode/angular-wml-field';
import { WMLFormZeroProps, WMLFormFieldsUpdateSubjProps } from '@windmillcode/angular-wml-form';
import { WMLInputZeroComponent, WMLInputZeroProps, WMLInputZeroAreaProps } from '@windmillcode/angular-wml-input';
import { WMLOptionZeroItemProps, WMLOptionsZeroProps, WMLOptionsZeroComponent } from '@windmillcode/angular-wml-options';
import { WMLSelectZeroComponent, WMLSelectZeroProps } from '@windmillcode/angular-wml-select';


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
export class WMLTableZeroKeyValueInputComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }


  classPrefix = generateClassPrefix('WMLTableZeroKeyValueInput')
  @Input('props') props: WMLTableZeroKeyValueInputProps = new WMLTableZeroKeyValueInputProps()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()

  filterKeyField!:WMLFieldZeroProps
  filterValueField!:WMLFieldZeroProps
  sortKeyField!:WMLFieldZeroProps
  sortDirField!:WMLFieldZeroProps
  mainForm =new WMLFormZeroProps({
    fields:[],
    fieldSections:[2]
  })

  initFilterFields(){
    let filterKeyProps =  new WMLSelectZeroProps({
      // @ts-ignore
      options:this.props.columnOptions,
      wmlField:this.filterKeyField
    });
    filterKeyProps.updateOptionValuesWithOptionText()
    let filterValueProps =new WMLInputZeroProps({
      input:new WMLInputZeroAreaProps({
        style:{
          fontSize:"calc(32/16 * 1rem)",
        }
      }),
      wmlField:this.filterKeyField
    });
    [this.filterKeyField,this.filterValueField]=Array(2)
    .fill(null)
    .map((nullVal,index0)=>{
      let field=  new WMLFieldZeroProps({
        type: "custom",
        custom: {
          selfType:  "standalone",
          fieldParentForm:this.props.parentForm,
          fieldFormControlName:["key","value"][index0],
          labelValue:this.props.filter.fieldLabels[index0],
          fieldCustomCpnt:[WMLSelectZeroComponent,WMLInputZeroComponent][index0],
          fieldCustomProps: [filterKeyProps,filterValueProps][index0],
        }
      })
      field.deleteRequiredLabelPart()
      return field
    })
  }

  initFilterForm(){
    this.mainForm.fieldsUpdateSubj.next(new WMLFormFieldsUpdateSubjProps({
      fields:[this.filterKeyField,this.filterValueField]
    }))
  }

  initSortFields(){
    let sortKeyProps =  new WMLSelectZeroProps({
      // @ts-ignore
      options:this.props.columnOptions,
    })
    sortKeyProps.updateOptionValuesWithOptionText(this.props.columnOptions)
    let sortDirectionPropsFormArray = this.props.parentForm.controls["direction"] as FormArray
    let sortDirectionPropsValues = this.props.sort.sortDirectionPropsOptions
    .map((dir,index0)=>{
      return new WMLOptionZeroItemProps({
        text:dir ,
        value:this.props.sort.sortDirectionPropsValues[index0],
      })
    })
    let sortDirectionProps =  new WMLOptionsZeroProps({
      limit:1,
      options:sortDirectionPropsValues,
      formArray:sortDirectionPropsFormArray
    })


    ;[this.sortKeyField,this.sortDirField]=Array(2)
    .fill(null)
    .map((nullVal,index0)=>{
      let field=  new WMLFieldZeroProps({
        type: "custom",
        custom: {
          selfType:  "standalone",
          fieldParentForm:this.props.parentForm,
          fieldFormControlName:["key","direction"][index0],
          labelValue:this.props.sort.fieldLabels[index0],
          fieldCustomCpnt:[WMLSelectZeroComponent,WMLOptionsZeroComponent][index0],
          fieldCustomProps: [sortKeyProps,sortDirectionProps][index0]
        }
      })
      field.deleteRequiredLabelPart()
      if(index0 === 0){
        field.field.custom.props.wmlField=this.sortKeyField
      }
      return field
    })
  }

  initSortForm(){
    this.mainForm.fieldsUpdateSubj.next(new WMLFormFieldsUpdateSubjProps({
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
    if(this.props.type==="filter"){
      this.initFilterFields()
      this.initFilterForm()
    }
    else if(this.props.type ==="sort"){
      this.initSortFields()
      this.initSortForm()
    }

  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}



export class WMLTableZeroKeyValueInputProps {
  constructor(props:Partial<WMLTableZeroKeyValueInputProps>={}){
    Object.assign(
      this,
      {
        ...props
      }
    )
  }
  type:"sort"|"filter" = "filter"
  removeBtn = new WMLButtonZeroProps({
    text:new WMLUIProperty({
      text:"Remove"
    })
  })
  sort={
    fieldLabels : ["Sort Column","Sort Direction"],
    sortDirectionPropsOptions: ["ASC","DESC"],
    sortDirectionPropsValues: ["ASC","DESC"]
  }
  filter ={
    fieldLabels : ["Filter Column","Filter Value"],
  }
  columnOptions:Array<string>=[]
  parentForm!:FormGroup
}


