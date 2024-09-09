// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding,  Input  , ViewEncapsulation   } from '@angular/core';

// rxjs
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';

// wml-components
import { WMLInfiniteDropdownZeroInputOptions, WMLInfiniteDropdownZeroOption, WMLInfiniteDropdownZeroProps } from '@windmillcode/angular-wml-infinite-dropdown';
import {WMLSelectZeroSelectComponent} from "../wml-select-zero-select/wml-select-zero-select.component";
import { FormControl } from '@angular/forms';
import { WMLFieldZeroProps } from '@windmillcode/angular-wml-field';
import { generateClassPrefix,WMLCustomComponent } from '@windmillcode/wml-components-base';

// misc


@Component({

  selector: 'wml-select-zero',
  templateUrl: './wml-select-zero.component.html',
  styleUrls: ['./wml-select-zero.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  encapsulation:ViewEncapsulation.None
})
export class WMLSelectZeroComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }

  classPrefix = generateClassPrefix('WMLSelectZero')
  @Input('props') props: WMLSelectZeroProps = new WMLSelectZeroProps()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()

  listenForChanges=()=>{
    return this.props.select.detectChangeSubj
    .pipe(
      takeUntil(this.ngUnsub),
      tap(()=>{
        this.cdref.detectChanges()
      })
    )

  }

  listenForFormControlValueChanges =()=>{
    return this.props.formControl.valueChanges
    .pipe(
      takeUntil(this.ngUnsub),
      tap((newVal)=>{
        let result = this.props.optionItems.find((option)=>{
          return option.value === newVal || option.value === newVal?.value
        })
        if(result){
          this.props.select.text = result.text
          this.props.formControl.patchValue(result,{emitEvent:false})
          this.props.select.cdref?.detectChanges()
          this.cdref.detectChanges()
        }

      })
    )

  }

  reInit =()=>{

    return this.props.initSubj
    .pipe(
      takeUntil(this.ngUnsub),
      tap(()=>{
        this.ngOnDestroy()
        this.listenForChanges().subscribe()
        this.listenForFormControlValueChanges().subscribe()
        this.props.formControl.patchValue(this.props.formControl.value)
      })
    )

  }

  ngOnInit(): void {
    this.reInit().subscribe()
    this.props.cdref = this.cdref

  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}


type WMLSelectZeroConstructorProps = Partial<Omit<WMLSelectZeroProps,"select"> & {select:string | WMLInfiniteDropdownZeroOption;resetDropdown:boolean }>

export class WMLSelectZeroProps {
  constructor(props:WMLSelectZeroConstructorProps={}){
    Object.assign(
      this,
      {
        ...props
      }
    )
    this.init(props);
  }
  private _formControl = new FormControl()
  get formControl (){
    return this.wmlField?.getReactiveFormControl() ?? this._formControl
  }

  get optionItems(){
    return (this.dropdown.options[1] as WMLInfiniteDropdownZeroProps).options
  }
  get chosenText(){
    return this.formControl.value.text
  }
  readonly selectText ="Please Select"
  select  = (()=>{
    return  new WMLInfiniteDropdownZeroOption({
      text:this.selectText,
      custom:new WMLCustomComponent({
        cpnt:WMLSelectZeroSelectComponent,
        props:this
      })
    })
  })()
  // @ts-ignore
  options :WMLInfiniteDropdownZeroInputOptions[]=["Please","Provide","Options","To","The","Options","Array"]
  .map((text,i)=>{
    return new WMLInfiniteDropdownZeroOption({
      text,
      value:i
    });
  })
  dropdown! :WMLInfiniteDropdownZeroProps
  cdref!: ChangeDetectorRef
  wmlField = new WMLFieldZeroProps()
  initSubj = new BehaviorSubject(false)
  checkForInvalidInitialFormValue = ()=>{
    let initialValue = this.formControl.value
    if(["",null,undefined].includes(initialValue)){
      return
    }
    let result = this.optionItems.find((option)=>{

      return option.value === initialValue || option.value === initialValue?.value
    })

    if(!result){
      console.warn("Initial form control value is not in the option items, please add the WMLInfiniteDropdownZeroOptions to the options array and try again  ")
    }
    if(result){
      result.click()
    }
  }
  private initToggleSelectBasedOnOptions = ()=>{
    this.optionItems.forEach((option)=>{
      option.click = ()=>{

        if(this.select.text === option.text ){
          this.select.text = this.selectText
          this.formControl?.reset()
        }
        else{
          this.select.text = option.text
          this.formControl?.patchValue(option)
        }
        this.select.closeDropdown()
        this.dropdown.cdref?.detectChanges()
        this.select.cdref?.detectChanges()


      }
    })
  }

  private initDropdown(props: WMLSelectZeroConstructorProps) {
    if (typeof props.select === "string") {
      this.select = new WMLInfiniteDropdownZeroOption({
        text: props.select,
        custom: new WMLCustomComponent({
          cpnt: WMLSelectZeroSelectComponent,
          props: this
        })
      });
      // @ts-ignore
      this.selectText = props.select
    }

    if (!props.dropdown || props.resetDropdown) {
      this.dropdown = new WMLInfiniteDropdownZeroProps({
        items: [this.select, this.options],
        customize: {
          interactionType: "click",
        }
      });
      this.optionItems.forEach((item)=>{
        item.style = Object.keys(item.style).length !== 0  ? item.style : {
          background: "var(--wml-select-secondary-gradient)",
        }
      })
      this.dropdown.options[1].style = {
        maxHeight: "calc(200/16 * 1rem)",
        overflow: "hidden auto"
      };
      let originalClick = this.select.click
      this.select.click = ()=>{
        if(!this.formControl.disabled){
          originalClick()
        }
      }
    }
  }

  private init = (props:WMLSelectZeroConstructorProps)=>{
    this.initDropdown(props);
    this.initToggleSelectBasedOnOptions()
    this.checkForInvalidInitialFormValue()
    this.initSubj.next(true)

  }

  reset = ()=>{
    this.init({
      ...this,
      resetDropdown:true
    })
  }

  // TODO this is being used in wml table understand how it works
  updateOptionValuesWithOptionText = (customValues:string[] = [])=>{
    this.optionItems.forEach((option,index0)=>{
      option.value = customValues[index0] ??option.text
    })
  }
}


