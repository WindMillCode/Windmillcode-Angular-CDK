import { WMLCustomComponent, WMLUIProperty } from "@windmillcode/angular-wml-components-base"
import { WmlSampleTabBodyComponent } from "./wml-sample-tab-body/wml-sample-tab-body.component"
import { Subject } from "rxjs"

export class WMLTab {
  constructor(params:Partial<WMLTab>={}){
    Object.assign(
      this,
      {
        ...params
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
    wmlTabHeader:new WMLTabHeader()
  }
  body = new WMLCustomComponent({
    cpnt:WmlSampleTabBodyComponent,
    params:new WmlSampleTabBodyComponentParams()
  })
}

export class WmlSampleTabBodyComponentParams  {
  constructor(params:Partial<WmlSampleTabBodyComponentParams>={}){
    WmlSampleTabBodyComponentParams.index++
    Object.assign(
      this,
      {
        ...params
      }
    )
  }
  static index =0
  text:string ="my component work "+ WmlSampleTabBodyComponentParams.index
}

export  class WMLTabsParamsUpdateTabsSubjParams  {
  constructor(params:Partial<WMLTabsParamsUpdateTabsSubjParams>={}){
    Object.assign(
      this,
      {
        ...params
      }
    )
  }
  currentTable:number = 0

}
export class WMLTabsParams {
  constructor(params:Partial<WMLTabsParams>={}){
    Object.assign(
      this,
      {
        ...params
      }
    )
  }
  tabs:Array<WMLTab> = Array(4)
  .fill(null)
  .map((nullVal,index0)=>{
    return new WMLTab({
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
  readonly updateTabsSubj= new Subject<WMLTabsParamsUpdateTabsSubjParams | void>()
  readonly tabChangedEvent = new Subject<WMLTab>()
}



export class WMLTabHeader extends WMLUIProperty{
  constructor(params:Partial<WMLTabHeader>={}){
    super();
    Object.assign(
      this,
      {
        ...params
      }
    )
    this.updateClassString("WmlTabsPod0Item0")
  }
  isChosenClass ="WmlTabsPod0Item2"
  isNotChosenClass="WmlTabsPod0Item0"
  icon = new WMLUIProperty({
    isPresent:false
  })
  override click!:(val?:any)=>void
  // @ts-ignore
  override text:WMLUIProperty[] =[]
}
