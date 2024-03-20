// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit,  Input  , ViewEncapsulation   } from '@angular/core';



// rxjs
import { BehaviorSubject, Subject, concat, timer } from 'rxjs';
import { concatMap, delay, startWith, takeUntil,tap } from 'rxjs/operators';

// wml-components
import { WMLCustomComponent, WMLUIProperty, generateClassPrefix } from '@windmillcode/angular-wml-components-base';
import { WMLInfiniteDropdownOptionBase, WmlInfiniteDropdownInputOptions, WmlInfiniteDropdownOption, WmlInfiniteDropdownParams } from '@windmillcode/angular-wml-infinite-dropdown';
import {WMLSelectZeroSelectComponent} from "../wml-select-zero-select/wml-select-zero-select.component";
import { AbstractControl, Form, FormControl } from '@angular/forms';
import { WMLField } from '@windmillcode/angular-wml-field';

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
  @Input('params') params: WMLSelectZeroParams = new WMLSelectZeroParams()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()

  listenForChanges=()=>{
    return this.params.select.detectChangeSubj
    .pipe(
      takeUntil(this.ngUnsub),
      tap(()=>{
        this.cdref.detectChanges()
      })
    )

  }

  listenForFormControlValueChanges =()=>{
    return this.params.formControl.valueChanges
    .pipe(
      takeUntil(this.ngUnsub),
      tap((newVal)=>{
        let result = this.params.optionItems.find((option)=>{
          return option.value === newVal || option.value === newVal?.value
        })
        if(result){
          this.params.select.text = result.text
          this.params.formControl.patchValue(result,{emitEvent:false})
          this.params.select.cdref?.detectChanges()
          this.cdref.detectChanges()
        }

      })
    )

  }

  reInit =()=>{

    return this.params.initSubj
    .pipe(
      takeUntil(this.ngUnsub),
      tap(()=>{
        this.ngOnDestroy()
        this.listenForChanges().subscribe()
        this.listenForFormControlValueChanges().subscribe()
        this.params.formControl.patchValue(this.params.formControl.value)
      })
    )

  }

  ngOnInit(): void {
    this.reInit().subscribe()
    this.params.cdref = this.cdref

  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}


type WMLSelectZeroConstructorParams = Partial<Omit<WMLSelectZeroParams,"select"> & {select:string | WmlInfiniteDropdownOption;resetDropdown:boolean }>
export class WMLSelectZeroParams {
  constructor(params:WMLSelectZeroConstructorParams={}){
    Object.assign(
      this,
      {
        ...params
      }
    )
    this.init(params);
  }
  get formControl (){
    return this.wmlField?.getReactiveFormControl() ?? new FormControl()
  }
  get optionItems(){
    return (this.dropdown.options[1] as WmlInfiniteDropdownParams).options
  }
  get chosenText(){
    return this.formControl.value.text
  }
  readonly selectText ="Please Select"
  select  =  new WmlInfiniteDropdownOption({
    text:this.selectText,
    custom:new WMLCustomComponent({
      cpnt:WMLSelectZeroSelectComponent,
      params:this
    })
  })
  options :WmlInfiniteDropdownInputOptions=["Please","Provide","Options","To","The","Options","Array"]
  dropdown! :WmlInfiniteDropdownParams
  cdref!: ChangeDetectorRef
  wmlField!:WMLField
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
      console.warn("Initial form control value is not in the option items, please add the WmlInfiniteDropdownOptions to the options array and try again  ")
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

  private initDropdown(params: WMLSelectZeroConstructorParams) {
    if (typeof params.select === "string") {
      this.select = new WmlInfiniteDropdownOption({
        text: params.select,
        custom: new WMLCustomComponent({
          cpnt: WMLSelectZeroSelectComponent,
          params: this
        })
      });
      // @ts-ignore
      this.selectText = params.select
    }
    if (!params.dropdown || params.resetDropdown) {
      this.dropdown = new WmlInfiniteDropdownParams({
        items: [this.select, this.options],
        customize: {
          interactionType: "click",
        }
      });
      this.optionItems.forEach((item)=>{
        item.style = Object.keys(item.style).length !== 0  ? item.style : {
          background: "var(--wml-select-zero-secondary-gradient)",
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

  private init = (params:WMLSelectZeroConstructorParams)=>{
    this.initDropdown(params);
    this.initToggleSelectBasedOnOptions()
    this.checkForInvalidInitialFormValue()
    this.initSubj.next(true)

  }

  reset = ()=>{
    this.init({
      ...this,resetDropdown:true
    })
  }

  updateOptionValuesWithOptionText = (customValues:string[] = [])=>{
    this.optionItems.forEach((option,index0)=>{
      option.value = customValues[index0] ??option.text
    })
  }
}


