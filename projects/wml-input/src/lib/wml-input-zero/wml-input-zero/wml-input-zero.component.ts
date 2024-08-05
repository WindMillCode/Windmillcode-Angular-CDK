// angular
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

// reactive forms
import { AbstractControl } from '@angular/forms';
import { generateClassPrefix, WMLUIProperty } from '@windmillcode/angular-wml-components-base';
import { WMLFieldZeroProps } from '@windmillcode/angular-wml-field';
import { Subject } from 'rxjs';

@Component({
  selector: 'wml-input-zero',
  templateUrl: './wml-input-zero.component.html',
  styleUrls: ['./wml-input-zero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WMLInputZeroComponent  {

  @Input('props') props: WMLInputZeroProps = new WMLInputZeroProps();
  classPrefix = generateClassPrefix('WMLInputZero')
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()
  formControl!:AbstractControl



  triggerChange(evt:any) {
    if(["checkbox"].includes(this.props.type)){
      this.formControl.patchValue(evt.target.checked)
    }
    else{
      this.formControl.patchValue(evt.target.value)
    }
  }


  ngOnInit(){
    this.formControl = this.props.wmlField?.getReactiveFormControl()
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }


}

export class WMLInputZeroProps {
  constructor(props: Partial<WMLInputZeroProps> = {}) {
    Object.assign(
      this,
      {
        ...props
      }
    )
  }


  input =new WMLInputZeroAreaProps({})
  textarea =new WMLInputZeroAreaProps({})
  range =new WMLInputZeroAreaProps({})
  checkbox = new WMLInputZeroCheckboxProps({})
  datetime = new WMLInputZeroDatetimeProps({})
  type:"datetime"| "time"| "date"| "range"| "input" | "number" | "password" | "email" | "tel" | "textarea" | "checkbox" = "input";
  wmlField: WMLFieldZeroProps = new WMLFieldZeroProps()
}

export class WMLInputZeroAreaProps extends WMLUIProperty{
  constructor(props:Partial<WMLInputZeroAreaProps>={}){
    super()
    Object.assign(
      this,
      {
        ...props
      }
    )
  }
  placeholder=""
  autocomplete=""
}

export class WMLInputZeroCheckboxProps extends WMLUIProperty{
  constructor(props:Partial<WMLInputZeroCheckboxProps>={}){
    super()
    Object.assign(
      this,
      {
        ...props
      }
    )
  }
  desc
}

export class WMLInputZeroDatetimeProps extends WMLUIProperty {
  constructor(props:Partial<WMLInputZeroDatetimeProps>={}){
    super()
    Object.assign(
      this,
      {
        ...props
      }
    )
  }
  min =new Date("0000-01-01")
  max =new Date("9999-12-31")
  autocomplete=""
  get htmlMin(){
    return this.min?.toISOString().split(".")[0]
  }
  get htmlMax(){
    return this.max?.toISOString().split(".")[0]
  }
  placeholder=""
}
