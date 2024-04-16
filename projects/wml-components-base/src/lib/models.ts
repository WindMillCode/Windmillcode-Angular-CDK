import { ChangeDetectorRef, Type } from "@angular/core";
import { updateClassString } from "./functions";
import { TranslateLoader } from "@ngx-translate/core";
import { Subject, of } from "rxjs";

export class WMLEndpoint {
  constructor(params:Partial<WMLEndpoint>={}){
    Object.assign(
      this,
      {
        ...params
      }
    )
  }
  url!:Function
  automate =false
}


export class WMLUIProperty<V=any,T=any>{
  constructor(params:Partial<WMLUIProperty<V,T>> = {}){
    Object.assign(
      this,
      {
        ...params
      }
    )
  }
  isPresent:boolean = true
  // @ts-ignore
  value:V = ""
  text?:string = ""
  get class(){
    return this._class
  }
  set class(val){
    this.updateClassString(val)
  }
  private _class:string = ""
  private _classList:string[] = []
  updateClassString=updateClassString(this,"_class","_classList")
  toggleClassString =(targetClass:string,predicate=this.updateClassString)=>{
    if(this.class.includes(targetClass)){
      predicate(targetClass,"remove")
    }
    else{
      predicate(targetClass)
    }
  }
  style:Partial<CSSStyleDeclaration> = {}
  type?:T
  click:(evt?:Event)=> void = (evt?:Event)=>{
    evt?.stopImmediatePropagation()
  }
  id:string =""

}


export class WMLRoute<V=any,T=any>  extends WMLUIProperty {
  constructor(params:Partial<WMLRoute>={}){
    super()
    Object.assign(
      this,
      {
        ...params
      }
    )
  }
  route:string = "/"
}


export class WMLView<V=any,T=any> extends WMLUIProperty<V,T>{
  constructor(params:Partial<WMLView<V,T>> ={}){
    super();
    Object.assign(
      this,
      {
        ...params
      }
    )
  }

  cdref?:ChangeDetectorRef

}

export type WMLAnimateUIPropertyState  ="open" | "opening" | "closing" | "closed"
export class WMLAnimateUIProperty<V=any,T=any> extends WMLView<V,T> {
  constructor(params: Partial<WMLAnimateUIProperty> = {}) {
    super()
    Object.assign(this.style, {
      ...this.helperStyles,
      ...this.style,
    })
    let origParams = Object.entries(params)
      .filter(([key,val]) => {
        return !key.startsWith('param');
      });
    Object.assign(this, { ...Object.fromEntries(origParams) });
    if(!this.animationClass){
      // @ts-ignore
      this.animationClass = (this._classList[0] +"Animation0").replace(/\s/g, '');
    }

    Object.assign(this.style, this.animationState === "closed" ?this.beginOpenStyles : this.beginCloseStyles)
    if(this.autoOpen){
      this.animationState = "opening"
      this.updateClassString(this.animationClass)
    }

  }

  autoOpen = false
  beginOpenStyles:WMLUIProperty["style"]={}
  beginCloseStyles:WMLUIProperty["style"]={}
  endOpenStyles:WMLUIProperty["style"]={}
  endCloseStyles:WMLUIProperty["style"]={}
  helperStyles:WMLUIProperty["style"]={
    transform:"translate3d(0,0,0)"
  }
  animationClass!:string
  animationState:WMLAnimateUIPropertyState = "closed"
  getGroupAnimationState:()=> WMLAnimateUIPropertyState =()=>{
    return this.animationState
  }
  animationEndEvent = new Subject<WMLAnimateUIPropertyState>()
  readonly animationEnd:(evt?:AnimationEvent)=> void =(evt)=>{

    // @ts-ignore
    if(!evt?.target?.className.includes(this.animationClass.replace(/\s/g, ''))){
      return
    }

    let state = this.getGroupAnimationState()
    let finalStyles ={
      "opening":this.endOpenStyles,
      "closing":this.endCloseStyles
    }[state]
    this.animationState = {
      "closing":"closed",
      "opening":"open",
    }[state]
    Object.entries(finalStyles??{})
    .forEach(([key,value])=>{
      this.style[key]=value
    })
    this.animationEndEvent.next(this.animationState)
    this.cdref?.detectChanges()

  }
  openAnimation =()=>this.toggleAnimation("forward")
  closeAnimation = ()=>this.toggleAnimation("reverse")
  private toggleAnimation=(val:'forward'|'reverse')=>{

    if(!["closed","open"].includes(this.animationState)){
      return
    }
    this.updateClassString(this.animationClass,"remove")
    this.style.animationDirection = "normal"
    this.cdref?.detectChanges()
    this.style.animationDirection = val
    this.cdref?.detectChanges()
    // @ts-ignore
    this.animationState = {
      "forward":"opening",
      "reverse":"closing"
    }[val]
    let finalStyles ={
      "opening":this.beginOpenStyles,
      "closing":this.beginCloseStyles
    }[this.animationState]
    Object.entries(finalStyles??{})
    .forEach(([key,value])=>{
      this.style[key]=value
    })

    this.cdref?.detectChanges()


    setTimeout(() => {
      this.updateClassString(this.animationClass)
      this.cdref?.detectChanges()
    }, 100);

  }

}

export class WMLWrapper {
  constructor(params:Partial<WMLWrapper> = {}){
    Object.assign(
      this,
      {
        ...params
      }
    )
  }
  view:WMLView =new WMLView()
}


export class WMLButton<V=any,T=any>  extends WMLView {
  constructor(params:Partial<WMLButton> = {}){
    super()
    Object.assign(
      this,
      {
        ...params
      }
    )
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

}

export class WMLButton2 {
  constructor(params:Partial<WMLButton2>={}){
    Object.assign(
      this,
      {
        ...params
      }
    )
  }

  button =new WMLUIProperty();
  text = new WMLUIProperty();
  icon = [new WMLImage()]
}

export class WMLCustomComponent<C=any,P=any> {
  constructor(params:Partial<WMLCustomComponent> = {}){
    Object.assign(
      this,
      {
        ...params
      }
    )
  }
  cpnt!:Type<C>
  /**
   * @deprecated use params instead
  */
  meta!:P
  get params(){
    return this.meta
  }
  set params(value){
    this.meta = value
  }
}

export class WMLImage<V=any,T=any> extends WMLUIProperty {
  constructor(params:Partial<WMLImage> = {}){
    super()
    Object.assign(
      this,
      {
        ...params
      }
    )
  }
  src!:string
  alt!:string
  ariaLabel!:string
  ariaExpanded= false
  onError?:Function

}

export class WMLE2ETarget {
  constructor(params:Partial<WMLE2ETarget>={}){
    Object.assign(
      this,
      {
        ...params
      }
    )
  }
  runningONE2E=false
  data={}
}

export class WMLQueue<T> {
  private queue: T[];

  constructor() {
    this.queue = [];
  }

  enqueue(item: T): void {
    this.queue.push(item);
  }

  dequeue(): T | undefined {
    return this.queue.shift();
  }

  isEmpty(): boolean {
    return this.queue.length === 0;
  }

  size(): number {
    return this.queue.length;
  }

  getElementAt(index: number): T | undefined {
    if (index < 0 || index >= this.size()) {
      return undefined;
    }
    return this.queue[index];
  }
}

export class WMLNGXTranslateLoader implements TranslateLoader {
  constructor(
    private i18nLocation:(lang:string)=>any = (lang="en")=> undefined
  ) {}

  getTranslation(lang: string) {
    return of(this.i18nLocation(lang))

  }
}

export class WMLModuleForRootParams {
  constructor(params:Partial<WMLModuleForRootParams>={}){
    Object.assign(
      this,
      {
        ...params
      }
    )
  }

  ngxTranslateLoaderFactory = ()=> new WMLNGXTranslateLoader()
}

export type WMLDeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? WMLDeepPartial<T[K]> : T[K];
};
