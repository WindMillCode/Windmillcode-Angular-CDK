import { FormArray, FormControl } from "@angular/forms"
import { updateClassString, WMLView } from "@windmillcode/wml-components-base"
import { WMLFieldZeroProps } from "@windmillcode/angular-wml-field"
import { WMLOptionsZeroItemExampleComponent } from "./wml-options-zero-item-example/wml-options-zero-item-example.component"
import { WMLAngularCustomComponent } from "@windmillcode/angular-wml-components-base"

export class WMLOptionsZeroProps {
  constructor(props:Partial<WMLOptionsZeroProps>={}){
    Object.assign(
      this,
      {
        ...props
      }
    )
  }
  // usedUUIDs = new Set();
  // getNewUUID= () =>  {
  //   let newUUID: string;
  //   do {
  //     newUUID = generateUUID();
  //   } while (this.usedUUIDs.has(newUUID));
  //   this.usedUUIDs.add(newUUID);
  //   return newUUID;
  // }

  hasBeenInitalized = false
  chosen:WMLOptionsZeroProps["options"]=[]
  options:WMLOptionZeroItemProps[]= ["Provide","Options","in","the","WMLOptionsZeroProps['options']","array"]
  .map((text,index0)=>{
    return new WMLOptionZeroItemProps({
      text
    })
  })
  limit= Infinity
  wmlField!:WMLFieldZeroProps
  formArray=  new FormArray<any>([])
  listenForClearedFormIsEnabled = true
  updateFormArrayPredicate:(val:any) => any =(val)=> val
  readonly restoreInitalValuesInFormArray=()=>{
    let values = this.formArray.value
    .map((value)=>{
      let finalValue
      if(value instanceof WMLOptionZeroItemProps){
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

export class WMLOptionZeroItemProps<V=any,T=any> extends WMLView<V,T> {
  constructor(props:Partial<WMLOptionZeroItemProps>={}){
    super()
    Object.assign(
      this,
      {
        ...props
      }
    )
    this.customCpnt.props.wmlOptionItem = this
  }

  get iconClass(){
    return this._iconClass
  }
  set iconClass(val){
    this.updateIconClassString(val)
  }
  private _iconClass:string = ""
  private _iconClassList:string[] = []
  updateIconClassString=updateClassString(this,"_iconClass","_iconClassList")
  textIsPresent:boolean = true
  iconSrc?:string = ""
  iconAlt?:string = ""
  iconIsPresent:boolean = false
  buttonClass?:string
  uniqueId!:string
  isChosen: boolean = false
  override text:string = ""
  toggleClass!:string
  clickPredicate!:Function
  /**
   * @experimental warning feature is experiemental, property may be removed
  */
  wmlOptions!:WMLOptionsZeroProps
  // TODO have it enforced that props must be instance of WMLOptionsZeroItemExampleProps
  customCpnt= new WMLAngularCustomComponent<any,WMLOptionsZeroItemExampleProps>({
    cpnt:WMLOptionsZeroItemExampleComponent,
    props:new WMLOptionsZeroItemExampleProps()
  })
}

export class WMLOptionsZeroItemExampleProps {
  constructor(props:Partial<WMLOptionsZeroItemExampleProps>={}){
    Object.assign(
      this,
      {
        ...props
      }
    )
  }
  // TODO ensure that all
  wmlOptionItem!:WMLOptionZeroItemProps
}
