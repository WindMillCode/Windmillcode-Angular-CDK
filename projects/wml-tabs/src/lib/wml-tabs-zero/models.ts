import { WMLCustomComponent, WMLUIProperty } from "@windmillcode/angular-wml-components-base"
import { WMLSampleTabBodyComponent } from "./wml-tabs-zero-body-example/wml-tabs-zero-body-example.component"
import { Subject } from "rxjs"

export class WMLTabsZero {
  constructor(props:Partial<WMLTabsZero>={}){
    Object.assign(
      this,
      {
        ...props
      }
    )
  }
  index!:number
  isChosen:boolean = false
  header:{
    type:"custom" |"wmlTabHeader",
    wmlTabHeader?:WMLTabHeader,
    custom?:WMLCustomComponent
  } = {
    type:"wmlTabHeader",
    wmlTabHeader:new WMLTabHeader({
      text:[
        new WMLUIProperty({
          text:"Tab "
        })
      ]
    })
  }
  body = new WMLCustomComponent({
    cpnt:WMLSampleTabBodyComponent,
    props:new WMLSampleTabBodyComponentProps()
  })
}

export class WMLSampleTabBodyComponentProps  {
  constructor(props:Partial<WMLSampleTabBodyComponentProps>={}){
    WMLSampleTabBodyComponentProps.index++
    Object.assign(
      this,
      {
        ...props
      }
    )
  }
  static index =0
  text:string ="my component work "+ WMLSampleTabBodyComponentProps.index
}

export  class WMLTabsZeroPropsUpdateTabsSubjProps  {
  constructor(props:Partial<WMLTabsZeroPropsUpdateTabsSubjProps>={}){
    Object.assign(
      this,
      {
        ...props
      }
    )
  }
  currentTable:number = 0

}
export class WMLTabsZeroProps {
  constructor(props:Partial<WMLTabsZeroProps>={}){
    Object.assign(
      this,
      {
        ...props
      }
    )
  }
  tabs:Array<WMLTabsZero> = Array(4)
  .fill(null)
  .map((nullVal,index0)=>{
    return new WMLTabsZero({
      header:{
        type:"wmlTabHeader",
        wmlTabHeader:new WMLTabHeader({
          text:[
            new WMLUIProperty({
              text:"Tab "+index0
            })
          ]
        })
      }
    })
  })
  readonly updateTabsSubj= new Subject<WMLTabsZeroPropsUpdateTabsSubjProps | void>()
  readonly tabChangedEvent = new Subject<WMLTabsZero>()
  setState =(val)=>{
    this.updateTabsSubj.next(val)
  }
}



export class WMLTabHeader extends WMLUIProperty{
  constructor(props:Partial<WMLTabHeader>={}){
    super();
    Object.assign(
      this,
      {
        ...props
      }
    )
    this.updateClassString("WMLTabsZeroPod0Item0")
    this.updateClassString("WMLTabsZeroPod0Item3")
  }
  isChosenClass ="WMLTabsZeroPod0Item2"
  isNotChosenClass="WMLTabsZeroPod0Item0"
  icon = new WMLUIProperty({
    isPresent:false
  })
  override click!:(val?:any)=>void
  // @ts-ignore
  override text:WMLUIProperty[] =[]
  get title (){
    return this.text[0].text
  }
}
