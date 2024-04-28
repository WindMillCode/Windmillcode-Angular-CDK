import { FormArray, FormControl } from "@angular/forms"
import { WMLButton, WMLCustomComponent } from "@windmillcode/angular-wml-components-base"
import { WmlSampleOptionItemComponent } from "./wml-sample-option-item/wml-sample-option-item.component"
import { WMLField } from "@windmillcode/angular-wml-field"


export class WMLOptionsParams {
  constructor(params:Partial<WMLOptionsParams>={}){
    Object.assign(
      this,
      {
        ...params
      }
    )
  }
  hasBeenInitalized = false
  chosen:WMLOptionsParams["options"]=[]
  options:WMLOptionItemParams[]= ["Provide","Options","in","the","WMLOptionsParams['options']","array"]
  .map((text,index0)=>{
    return new WMLOptionItemParams({
      text
    })
  })
  limit= Infinity
  wmlField!:WMLField
  formArray=  new FormArray<any>([])
  listenForClearedFormIsEnabled = true
  updateFormArrayPredicate:(val:any) => any =(val)=> val
  readonly restoreInitalValuesInFormArray=()=>{
    let values = this.formArray.value
    .map((value)=>{
      let finalValue
      if(value instanceof WMLOptionItemParams){
        finalValue =value.value
      }
      else{
        finalValue =value
      }
      return new FormControl(finalValue)
    })
    this.formArray.clear()
    this.formArray.patchValue(values)
  }
}

export class WMLOptionItemParams<V=any,T=any> extends WMLButton {
  constructor(params:Partial<WMLOptionItemParams>={}){
    super();
    Object.assign(
      this,
      {
        ...params
      }
    )
    this.customCpnt.params.wmlOptionItem = this
  }
  isChosen: boolean = false
  override text:string = ""
  toggleClass!:string
  clickPredicate!:Function
  /**
   * @experimental warning feature is experiemental, property may be removed
  */
  wmlOptions!:WMLOptionsParams
  customCpnt= new WMLCustomComponent({
    cpnt:WmlSampleOptionItemComponent,
    params:new WmlSampleOptionItemParams()
  })
}

export class WmlSampleOptionItemParams {
  constructor(params:Partial<WmlSampleOptionItemParams>={}){
    Object.assign(
      this,
      {
        ...params
      }
    )
  }
  wmlOptionItem!:WMLOptionItemParams
}
