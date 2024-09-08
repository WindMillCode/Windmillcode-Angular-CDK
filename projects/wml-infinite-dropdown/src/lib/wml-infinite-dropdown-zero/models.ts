import { WMLUIProperty, WMLCustomComponent,  WMLRoute } from "@windmillcode/wml-components-base";
import { Subject } from "rxjs";
import { WMLInfiniteDropdownZeroItemExampleComponent } from "./wml-infinite-dropdown-zero-item-example/wml-infinite-dropdown-zero-item-example.component";

export type WMLInfiniteDropdownZeroInputOptions = Array<string  | WMLInfiniteDropdownZeroOption | WMLInfiniteDropdownZeroInputOptions>;

export class WMLInfiniteDropdownZeroOptionBase extends WMLRoute {
  clickPredicate:Function = ()=>{}
}
export class WMLInfiniteDropdownZeroOption extends WMLInfiniteDropdownZeroOptionBase {
  constructor(props:Partial<WMLInfiniteDropdownZeroOption>={}){
    super()
    Object.assign(
      this,
      {
        ...props
      }
    )
  }
  override id =""
  readonly detectChangeSubj = new Subject<void>()
  dropdown?:WMLInfiniteDropdownZeroProps
  pointerleave:Function = ()=>{}
  pointerenter:Function = ()=>{}
  openDropdown:Function = ()=>{throw new Error("Not the head of a dropdown no functionality here")}
  closeDropdown:Function = ()=>{throw new Error("Not the head of a dropdown no functionality here")}
  custom = new WMLCustomComponent({
    cpnt:WMLInfiniteDropdownZeroItemExampleComponent,
    props:this
  })

}

export class WMLInfiniteDropdownZeroProps extends WMLInfiniteDropdownZeroOptionBase {


  constructor(props:Partial<WMLInfiniteDropdownZeroProps & {items:WMLInfiniteDropdownZeroInputOptions}>={}){
    super();
    this.isPresent = props.isPresent ?? this.isPresent

    this.customize = this.customize ??{}
    if(!this.customize){
      this.customize = {
        interactionType:"click"
      }
    }
    // @ts-ignore
    this._root = props._root ?? this._root
    this.style = props.style ?? this.style
    this.customize = props.customize ?? {
      interactionType:"click"
    }
    this.customize.interactionType = this.customize.interactionType ?? "click"
    this.customize.dropdown = this.customize.dropdown ?? new WMLUIProperty()
    this.customize.option = this.customize.option ?? new WMLUIProperty()

    let items = props.items ??["Media", ["Blog", "Events", ["Online", "In-Person"], "Labs"]]

    this.updateOptions(items as WMLInfiniteDropdownZeroInputOptions)
  }

  // options:Array<WMLInfiniteDropdownZeroOption | WMLInfiniteDropdownZeroProps | WMLInfiniteDropdownZeroInputOptions> = []
  options:Array<any> = []
  optionsSubj =new Subject<WMLInfiniteDropdownZeroInputOptions>()
  customize! : {
    dropdown?: WMLUIProperty,
    option?: WMLUIProperty,
    interactionType?: "click" | "hover"
  }
  private _root = true
  openClass!:string
  closedClass!:string
  updateOptions = (options:WMLInfiniteDropdownZeroInputOptions)=>{

    this.options = options?.map((option,index0)=>{
      if(Array.isArray(option)){

        let dropdown = new WMLInfiniteDropdownZeroProps({
          ...this.customize.dropdown,
          customize:this.customize,
          items:option,
          // @ts-ignore
          _root:false
        })
        dropdown.updateClassString("WMLInfiniteDropdownMainStates2")
        return dropdown
      }
      else{
        // @ts-ignore
        if( option instanceof  WMLInfiniteDropdownZeroOption){
          return option
        }

        let {style} = this.customize.option as WMLUIProperty
        return new WMLInfiniteDropdownZeroOption({
          text:option ,
          style
        })
      }

    })

    this.options?.map((option,index0)=>{
      if(option instanceof WMLInfiniteDropdownZeroProps){
        let optionHead = this.options[index0-1]
        if(!(optionHead instanceof WMLInfiniteDropdownZeroOption)  ){
          return
        }

        optionHead.openDropdown =this.createOpenDropdownMethod(option)
        optionHead.closeDropdown = this.createCloseDropdownMethod(option)
        optionHead.pointerleave = this.toggleDropdownViaDropdown(option)
        optionHead.pointerenter = this.toggleDropdownViaDropdown(option)
        optionHead.click =()=>{
          optionHead.clickPredicate()
          if(this.customize.interactionType === "click"){
            let { closedClass, openClass } = this.getDropdownStates();
            option.toggleClassString(closedClass)
            option.toggleClassString(openClass)
          }
          this.cdref?.detectChanges()
        }
        // @ts-ignore
        optionHead.dropdown =option
      }
    })
  }


  getDropdownStates() {
    let openClass =  this._root ? "WMLInfiniteDropdownMainStates1" : "WMLInfiniteDropdownMainStates0";
    let closedClass =  "WMLInfiniteDropdownMainStates2";
    if(this.openClass){
      openClass  =this.openClass
    }
    if(this.closedClass){
      closedClass = this.closedClass
    }
    return { closedClass, openClass };
  }

  toggleDropdownViaDropdown(dropdown:WMLInfiniteDropdownZeroProps): Function {

    return (evt: Event) => {
      if(this.customize.interactionType === "hover"){
        if(evt.type ==="pointerenter" ){
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

  toggleDropdown(option?:WMLInfiniteDropdownZeroOption){
    option ??=this.options[0] as any
    option?.click()
  }

  createCloseDropdownMethod(dropdown: WMLInfiniteDropdownZeroProps) {
    return ()=>{
      let { closedClass, openClass } = this.getDropdownStates();
      dropdown.updateClassString(openClass, "remove");
      dropdown.updateClassString(closedClass);
    }
  }

  createOpenDropdownMethod(dropdown: WMLInfiniteDropdownZeroProps) {
    return ()=>{
      let { closedClass, openClass } = this.getDropdownStates();
      dropdown.updateClassString(closedClass, "remove");
      dropdown.updateClassString(openClass);
    }
  }
}


