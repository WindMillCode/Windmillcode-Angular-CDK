import { ChangeDetectionStrategy, ChangeDetectorRef, Component,  HostBinding,  Input, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import {  generateClassPrefix, WMLCustomComponent, WMLDeepPartial, WMLWrapper } from '@windmillcode/wml-components-base';
import {addCustomComponent} from '@windmillcode/angular-wml-components-base';

// rxjs
import { Subject } from 'rxjs';
import { WMLLabelZeroComponent, WMLLabelZeroProps } from '../wml-label-zero/wml-label-zero.component';


@Component({
    selector: 'wml-field-zero',
    templateUrl: './wml-field-zero.component.html',
    styleUrls: ['./wml-field-zero.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class WMLFieldZeroPropsComponent  {

  constructor(
    public cdref:ChangeDetectorRef,
  ) { }

  classPrefix = generateClassPrefix('WMLField')
  @Input("props") wmlField = new WMLFieldZeroProps()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  @HostBinding('attr.id') myId?:string;
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
        this.wmlField[key].custom.props.wmlField = this.wmlField
        addCustomComponent(
          [this.customLabel,this.customField,this.customError][index0],
          this.wmlField[key].custom.cpnt as Type<any>,
          this.wmlField[key].custom.props
        )
      }
    })

  }

  ngOnInit(): void {
    this.initComponent()
    this.myId = this.wmlField.view.id
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}


export class WMLFieldZeroProps<FC=any,FP=any> extends WMLWrapper {
  constructor(
    props:{
      type:"default" | "custom",
      default?:WMLDeepPartial<WMLFieldZeroProps>,
      custom?:{
        selfType?: WMLFieldZeroProps["self"]["type"],
        fieldType?: WMLFieldZeroProps["field"]["type"],
        fieldCustomCpnt?:WMLFieldZeroProps["field"]["custom"]["cpnt"],
        fieldCustomProps?:WMLFieldZeroProps["field"]["custom"]["props"],

        fieldParentForm?:WMLFieldZeroProps["field"]["parentForm"],
        fieldFormControlName?:WMLFieldZeroProps["field"]["formControlName"],
        labelValue?:WMLLabelZeroProps["labels"][number][number]["value"],
        labelRequired?:boolean,
        labelCpnt?:WMLFieldZeroProps["label"]["custom"]["cpnt"]
        errorMsgs?:WMLLabelZeroProps["errorMsgs"],
        errorCpnt?:WMLFieldZeroProps["error"]["custom"]["cpnt"],
      }
    } = {
      type:"default",
      default:{},
      custom:{
        selfType:"wml-card"
      }
    }
  ){
    super();
    if(props.type === "default"){
      Object.assign(
        this,
        {
          ...props.default
        }
      )
    }

    else if(props.type === "custom"){
      let custom = props.custom ?? {}
      let labelWMLLabelZeroProps:WMLLabelZeroProps = this.label.custom.props
      let errorWMLFieldErrorprops:WMLLabelZeroProps = this.error.custom.props
      this.self.type = custom.selfType ?? "standalone"
      this.field.type = custom.fieldType ?? "custom"
      this.field.custom.cpnt = custom.fieldCustomCpnt ?? SampleCpntComponent
      this.field.custom.props = custom.fieldCustomProps
      this.field.parentForm = custom.fieldParentForm ?? this.field.parentForm
      this.field.formControlName = custom.fieldFormControlName ?? this.field.formControlName
      this.label.custom.cpnt = custom.labelCpnt ?? this.label.custom.cpnt
      labelWMLLabelZeroProps.labels[0][1].value = custom.labelValue ?? labelWMLLabelZeroProps.labels[0][1].value
      if(custom.labelRequired === false){
        labelWMLLabelZeroProps.labels[0].shift()
      }
      this.error.custom.cpnt = custom.errorCpnt ?? this.error.custom.cpnt
      errorWMLFieldErrorprops.errorMsgs = custom.errorMsgs ?? errorWMLFieldErrorprops.errorMsgs
    }



  }
  self:{
    type:"standalone" | "wml-card"
  }= {
    type:"wml-card"
  }
  label = {
    type:"custom",
    custom:new WMLCustomComponent<WMLLabelZeroComponent,WMLLabelZeroProps>({
      cpnt:WMLLabelZeroComponent,
      props:new WMLLabelZeroProps()
    })
  }
  field:{
    // TODO whats input for
    type:"input" | "custom"  //may just make all components dynamic and provide propss
    parentForm:FormGroup
    formControlName:string
    custom:WMLCustomComponent<FC,FP>

    // should only use when not used in wml-form will break things unlss you know what you are doing
    formControl?:AbstractControl

  } = {
    type:"custom",
    custom:new WMLCustomComponent({
      cpnt:SampleCpntComponent,
      props:{}
    }),
    parentForm:new FormGroup({
      name:new FormControl()
    }),
    formControlName:"name",

  }

  error = {
    type:"custom",
    custom:new WMLCustomComponent({
      cpnt:WMLLabelZeroComponent,
      props:new WMLLabelZeroProps({
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
    return this.field.custom.props
  }
  getReactiveFormControl = ():AbstractControl=>{
    return this.field.parentForm?.controls[this.field.formControlName] ?? this.field.formControl
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
    return this.label.custom.props.labels[labelPart][part]
  }
  updateLabel=(label:string)=>{
    this.updateLabelPart(label,[0,0])
  }
  updateRequiredLabel=(label:string)=>{
    this.updateLabelPart(label)
  }
  updateLabelPart= (label:string,[labelPart,part]:[number,number]=[0,1])=>{
    this.label.custom.props.labels[labelPart][part].value = label
  }
  deleteLabelPart=([labelPart,part]:[number,number]=[0,0])=>{
    this.label.custom.props.labels[labelPart].splice(part,part+1)
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
    template: `
    <p> please install wml-input and pass
    the component and props class like so to the wmlfield .custom constructor
    fieldCustomCpnt : WMLInputZeroComponent,
    fieldCustomProps : new WMLInputZeroProps("{{ '{' }}"+ wmlField:this + "{{ '}' }}")
    This was meant to be used in wml-form so now you understand the example
    create your own form field component with the appropriate props and use accordingly
    </p>
  `,
    standalone: false
})
class SampleCpntComponent{}
