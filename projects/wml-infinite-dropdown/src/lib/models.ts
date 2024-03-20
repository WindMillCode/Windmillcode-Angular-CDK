import { WMLUIProperty, WMLCustomComponent, WMLView } from "@windmillcode/angular-wml-components-base";
import { Subject } from "rxjs";
import { WmlSampleInfiniteDropdownItemComponent } from "./wml-sample-infinite-dropdown-item/wml-sample-infinite-dropdown-item.component";

export type WmlInfiniteDropdownInputOptions = Array<string  | WmlInfiniteDropdownOption | WmlInfiniteDropdownInputOptions>;

export class WMLInfiniteDropdownOptionBase extends WMLView {

}
export class WmlInfiniteDropdownOption extends WMLInfiniteDropdownOptionBase {
  constructor(params:Partial<WmlInfiniteDropdownOption>={}){
    super()
    Object.assign(
      this,
      {
        ...params
      }
    )
  }
  override id =""
  readonly detectChangeSubj = new Subject<void>()
  dropdown?:WmlInfiniteDropdownParams
  pointerleave:Function = ()=>{}
  pointerenter:Function = ()=>{}
  openDropdown:Function = ()=>{throw new Error("Not the head of a dropdown no functionality here")}
  closeDropdown:Function = ()=>{throw new Error("Not the head of a dropdown no functionality here")}
  custom = new WMLCustomComponent({
    cpnt:WmlSampleInfiniteDropdownItemComponent,
    params:this
  })
}

export class WmlInfiniteDropdownParams extends WMLInfiniteDropdownOptionBase {


  constructor(params:Partial<WmlInfiniteDropdownParams & {items:WmlInfiniteDropdownInputOptions}>={}){
    super();
    this.isPresent = params.isPresent ?? this.isPresent

    this.customize = this.customize ??{}
    if(!this.customize){
      this.customize = {
        interactionType:"click"
      }
    }
    // @ts-ignore
    this._root = params._root ?? this._root
    this.style = params.style ?? this.style
    this.customize = params.customize ?? {
      interactionType:"click"
    }
    this.customize.interactionType = this.customize.interactionType ?? "click"
    this.customize.dropdown = this.customize.dropdown ?? new WMLUIProperty()
    this.customize.option = this.customize.option ?? new WMLUIProperty()

    let items = params.items ??["Media", ["Blog", "Events", ["Online", "In-Person"], "Labs"]]

    this.updateOptions(items as WmlInfiniteDropdownInputOptions)
  }

  options:Array<WmlInfiniteDropdownOption | WmlInfiniteDropdownParams> = []
  optionsSubj =new Subject<WmlInfiniteDropdownInputOptions>()
  customize! : {
    dropdown?: WMLUIProperty,
    option?: WMLUIProperty,
    interactionType?: "click" | "hover"
  }
  private _root = true
  openClass!:string
  closedClass!:string
  updateOptions = (options:WmlInfiniteDropdownInputOptions)=>{

    this.options = options?.map((option,index0)=>{
      if(Array.isArray(option)){

        let dropdown = new WmlInfiniteDropdownParams({
          ...this.customize.dropdown,
          customize:this.customize,
          items:option,
          // @ts-ignore
          _root:false
        })
        dropdown.updateClassString("WmlInfiniteDropdownMainStates2")
        return dropdown
      }
      else{
        let {style} = this.customize.option as WMLUIProperty
        // @ts-ignore
        if( option instanceof  WmlInfiniteDropdownOption){

          return option
        }
        return new WmlInfiniteDropdownOption({
          text:option ,
          style
        })
      }

    })

    this.options?.map((option,index0)=>{
      if(option instanceof WmlInfiniteDropdownParams){
        let optionHead = this.options[index0-1]
        if(!(optionHead instanceof WmlInfiniteDropdownOption)  ){
          return
        }

        optionHead.openDropdown =this.createOpenDropdownMethod(option)
        optionHead.closeDropdown = this.createCloseDropdownMethod(option)
        optionHead.pointerleave = this.toggleDropdown(option)
        optionHead.pointerenter = this.toggleDropdown(option)
        optionHead.click =()=>{
          if(this.customize.interactionType === "click"){
            let { closedClass, openClass } = this.getDropdownStates();
            option.toggleClassString(closedClass)
            option.toggleClassString(openClass)
          }
        }
        // @ts-ignore
        optionHead.dropdown =option
      }
    })
  }


  private getDropdownStates() {
    let openClass =  this._root ? "WmlInfiniteDropdownMainStates1" : "WmlInfiniteDropdownMainStates0";
    let closedClass =  "WmlInfiniteDropdownMainStates2";
    if(this.openClass){
      openClass  =this.openClass
    }
    if(this.closedClass){
      closedClass = this.closedClass
    }
    return { closedClass, openClass };
  }

  private toggleDropdown(dropdown:WmlInfiniteDropdownParams): Function {

    return (evt: Event) => {
      if(this.customize.interactionType === "hover"){
        if(evt.type ==="pointerenter"){
          let openDropdown = this.createOpenDropdownMethod(dropdown);
          openDropdown()
        }
        else{
          let closeDropdown = this.createCloseDropdownMethod(dropdown);
          closeDropdown()
        }
      }

    };
  }

  private createCloseDropdownMethod(dropdown: WmlInfiniteDropdownParams) {
    return ()=>{
      let { closedClass, openClass } = this.getDropdownStates();
      dropdown.updateClassString(openClass, "remove");
      dropdown.updateClassString(closedClass);
    }
  }

  private createOpenDropdownMethod(dropdown: WmlInfiniteDropdownParams) {
    return ()=>{
      let { closedClass, openClass } = this.getDropdownStates();
      dropdown.updateClassString(closedClass, "remove");
      dropdown.updateClassString(openClass);
    }

  }
}


