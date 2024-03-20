// angular
import { ChangeDetectionStrategy, Component, forwardRef, HostBinding, Input, OnInit } from '@angular/core';

// reactive forms
import { AbstractControl } from '@angular/forms';
import { generateClassPrefix, WMLUIProperty } from '@windmillcode/angular-wml-components-base';
import { WMLField } from '@windmillcode/angular-wml-field';
import { Subject } from 'rxjs';

@Component({
  selector: 'wml-input',
  templateUrl: './wml-input.component.html',
  styleUrls: ['./wml-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WmlInputComponent  {

  @Input('params') params: WmlInputParams = new WmlInputParams();
  classPrefix = generateClassPrefix('WMLInput')
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()
  formControl!:AbstractControl



  triggerChange(evt:any) {
    if(["checkbox"].includes(this.params.type)){
      this.formControl.patchValue(evt.target.checked)
    }
    else{
      this.formControl.patchValue(evt.target.value)
    }
  }


  ngOnInit(){
    this.formControl = this.params.wmlField?.getReactiveFormControl()
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }


}

export class WmlInputParams {
  constructor(params: Partial<WmlInputParams> = {}) {
    Object.assign(
      this,
      {
        ...params
      }
    )
  }


  input =new WMLInputAreaParams({})
  textarea =new WMLInputAreaParams({})
  range =new WMLInputAreaParams({})
  checkbox = new WMLInputCheckboxParams({})
  datetime = new WMLInputDatetimeParams({})
  type:"datetime"| "time"| "date"| "range"| "input" | "number" | "password" | "email" | "tel" | "textarea" | "checkbox" = "input";
  wmlField: WMLField = new WMLField()
  checkboxDesc!:string
}

export class WMLInputAreaParams extends WMLUIProperty{
  constructor(params:Partial<WMLInputAreaParams>={}){
    super()
    Object.assign(
      this,
      {
        ...params
      }
    )
  }
  placeholder=""
}

export class WMLInputCheckboxParams extends WMLUIProperty{
  constructor(params:Partial<WMLInputCheckboxParams>={}){
    super()
    Object.assign(
      this,
      {
        ...params
      }
    )
  }
  desc
}

export class WMLInputDatetimeParams extends WMLUIProperty {
  constructor(params:Partial<WMLInputDatetimeParams>={}){
    super()
    Object.assign(
      this,
      {
        ...params
      }
    )
  }
  min =new Date("0000-01-01")
  max =new Date("9999-12-31")
  get htmlMin(){
    return this.min?.toISOString().split(".")[0]
  }
  get htmlMax(){
    return this.max?.toISOString().split(".")[0]
  }
  placeholder=""
}
