import { ChangeDetectionStrategy, ChangeDetectorRef, Component,  HostBinding,  Input, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { addCustomComponent, generateClassPrefix, WMLCustomComponent, WMLWrapper } from '@windmillcode/angular-wml-components-base';


// rxjs
import { Subject } from 'rxjs';
import { WmlLabelComponent, WmlLabelParams } from '../wml-label/wml-label.component';


@Component({
  selector: 'wml-field',
  templateUrl: './wml-field.component.html',
  styleUrls: ['./wml-field.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush

})
export class WmlFieldComponent  {

  constructor(
    public cdref:ChangeDetectorRef,
  ) { }

  classPrefix = generateClassPrefix('WmlField')
  @Input("field") wmlField = new WMLField()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  @HostBinding('id') myId!:string;
  ngUnsub= new Subject<void>()
  @ViewChild("customLabel",{read:ViewContainerRef,static:true}) customLabel!:ViewContainerRef;
  @ViewChild("customField", {read:ViewContainerRef,static:true}) customField!:ViewContainerRef;
  @ViewChild("customError", {read:ViewContainerRef,static:true}) customError!:ViewContainerRef;

  initComponent(){

    if(this.wmlField){
      this.wmlField.view.cdref = this.cdref
    }

    ["label","field","error"].forEach((key,index0)=>{
      if(  this.wmlField?.[key]?.type === "custom"){
        this.wmlField[key].custom.params.wmlField = this.wmlField
        addCustomComponent(
          [this.customLabel,this.customField,this.customError][index0],
          this.wmlField[key].custom.cpnt as Type<any>,
          this.wmlField[key].custom.params
        )
      }
    })

  }



  ngOnInit(): void {
    this.initComponent()
    this.myId = this.wmlField.view.id ?? ""
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}


export class WMLField<FC=any,FP=any> extends WMLWrapper {
  constructor(
    params:{
      type:"default" | "custom",
      default?:{
        wmlfield:Partial<WMLField>
      },
      custom?:{
        selfType?: WMLField["self"]["type"],
        fieldType?: WMLField["field"]["type"],
        fieldCustomCpnt?:WMLField["field"]["custom"]["cpnt"],
        fieldCustomMeta?:WMLField["field"]["custom"]["params"],

        fieldParentForm?:WMLField["field"]["parentForm"],
        fieldFormControlName?:WMLField["field"]["formControlName"],
        labelValue?:WmlLabelParams["labels"][number][number]["value"],
        labelRequired?:boolean,
        labelCpnt?:WMLField["label"]["custom"]["cpnt"]
        errorMsgs?:WmlLabelParams["errorMsgs"],
        errorCpnt?:WMLField["error"]["custom"]["cpnt"],
      }
    } = {
      type:"default",
      default:{
        wmlfield:{}
      },
      custom:{
        selfType:"wml-card"
      }
    }
  ){
    super();
    if(params.type === "default"){
      Object.assign(
        this,
        {
          ...params.default?.wmlfield
        }
      )
    }

    else if(params.type === "custom"){
      let custom = params.custom ?? {}
      let labelWMLLabelMeta:WmlLabelParams = this.label.custom.params
      let errorWMLFieldErrorMeta:WmlLabelParams = this.error.custom.params
      this.self.type = custom.selfType ?? "standalone"
      this.field.type = custom.fieldType ?? "custom"
      this.field.custom.cpnt = custom.fieldCustomCpnt ?? SampleCpntComponent
      this.field.custom.params = custom.fieldCustomMeta
      this.field.parentForm = custom.fieldParentForm ?? this.field.parentForm
      this.field.formControlName = custom.fieldFormControlName ?? this.field.formControlName
      this.label.custom.cpnt = custom.labelCpnt ?? this.label.custom.cpnt
      labelWMLLabelMeta.labels[0][1].value = custom.labelValue ?? labelWMLLabelMeta.labels[0][1].value
      if(custom.labelRequired === false){
        labelWMLLabelMeta.labels[0].shift()
      }
      this.error.custom.cpnt = custom.errorCpnt ?? this.error.custom.cpnt
      errorWMLFieldErrorMeta.errorMsgs = custom.errorMsgs ?? errorWMLFieldErrorMeta.errorMsgs
    }



  }
  self:{
    type:"standalone" | "wml-card"
  }= {
    type:"wml-card"
  }
  label = {
    type:"custom",
    custom:new WMLCustomComponent<WmlLabelComponent,WmlLabelParams>({
      cpnt:WmlLabelComponent,
      params:new WmlLabelParams()
    })
  }
  field:{

    type:"input" | "custom"  //may just make all components dynamic and provide metas
    parentForm:FormGroup
    formControlName:string
    custom:WMLCustomComponent<FC,FP>

    // should only use when not used in wml-form will break things unlss you know what you are doing
    formControl?:AbstractControl

  } = {
    type:"custom",
    custom:new WMLCustomComponent({
      cpnt:SampleCpntComponent,
      params:{}
    }),
    parentForm:new FormGroup({
      name:new FormControl()
    }),
    formControlName:"name",

  }

  error = {
    type:"custom",
    custom:new WMLCustomComponent({
      cpnt:WmlLabelComponent,
      meta:new WmlLabelParams({
        errorMsgs:{
          required:"This field is required"
        },
        type:"error",
        labels:[
          [
            {
              type:"error",
              value:"Please resolve the above errors",
            }
          ],
        ]
      })
    })
  }

  getFieldProps = ():FP =>{
    return this.field.custom.params
  }
  getReactiveFormControl = ():AbstractControl=>{
    return this.field.parentForm.controls[this.field.formControlName] ?? this.field.formControl
  }
  getParentForm = ():FormGroup=>{
    return this.field.parentForm
  }
  getFormControlName = ():string=>{
    return this.field.formControlName
  }
  getLabel=()=>{
    return this.getLabelPart([0,0])
  }
  getRequiredLabel=()=>{
    return this.getLabelPart()
  }
  getLabelPart = ([labelPart,part]:[number,number]=[0,1])=>{
    return this.label.custom.meta.labels[labelPart][part]
  }
  updateLabel=(label:string)=>{
    this.updateLabelPart(label,[0,0])
  }
  updateRequiredLabel=(label:string)=>{
    this.updateLabelPart(label)
  }
  updateLabelPart= (label:string,[labelPart,part]:[number,number]=[0,1])=>{
    this.label.custom.meta.labels[labelPart][part].value = label
  }
  deleteLabelPart=([labelPart,part]:[number,number]=[0,0])=>{
    this.label.custom.meta.labels[labelPart].splice(part,part+1)
  }

  deleteRequiredLabelPart=()=>{
    this.deleteLabelPart()
  }

  deleteLabel=()=>{
    this.deleteLabelPart()
    this.deleteLabelPart()
  }

}

@Component({
  template:`
    <p> please install wml-input and pass
    the component and params class like so to the wmlfield .custom constructor
    fieldCustomCpnt : WmlInputComponent,
    fieldCustomMeta : new WmlInputParams("{{ '{' }}"+ wmlField:this + "{{ '}' }}")
    This was meant to be used in wml-form so now you understand the example
    create your own form field component with the appropriate params and use accordingly
    </p>
  `
})
class SampleCpntComponent{}
