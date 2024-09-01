import { ChangeDetectorRef, Type } from "@angular/core";
import { updateClassString } from "./functions";
import { TranslateLoader } from "@ngx-translate/core";
import { Subject, of } from "rxjs";

export class WMLUIProperty<V=any,T=any>{
  constructor(props:Partial<WMLUIProperty<V,T>> = {}){
    Object.assign(
      this,
      {
        ...props
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
  id?:string

}

export function WMLConstructorDecorator<T extends { new(...args: any[]): { } }>(ReversedBase: T) {

  return class extends ReversedBase {
      constructor(...args: any[]) {
        const props: Partial<T> = args[0] || {};
        super(props);
        Object.entries(props).forEach(([key, value]) => {
          if (!key.startsWith('prop')) {
            this[key] = value;
          }
        });
        // @ts-ignore
        this.wmlInit?.(props)

      }

      // wmlInit?:Function
  } ;
}

export class WMLEndpoint {
  constructor(props:Partial<WMLEndpoint>={}){
    Object.assign(
      this,
      {
        ...props
      }
    )
  }
  url!:Function
  automate =false
}

export class WMLView<V=any,T=any> extends WMLUIProperty<V,T>{
  constructor(props:Partial<WMLView<V,T>> ={}){
    super();
    Object.assign(
      this,
      {
        ...props
      }
    )
  }

  cdref?:ChangeDetectorRef

}

export class WMLRoute<V=any,T=any>  extends WMLView<V,T> {
  constructor(props:Partial<WMLRoute>={}){
    super()
    Object.assign(
      this,
      {
        ...props
      }
    )
  }
  route:string = "/"
  link?:string
  routerLink?:string
}

// TODO rename to WMLMotion
export type WMLAnimateUIPropertyState  ="open" | "opening" | "closing" | "closed"
export class WMLAnimateUIProperty<V=any,T=any> extends WMLView<V,T> {
  constructor(props: Partial<WMLAnimateUIProperty> = {}) {
    super()
    Object.assign(this.style, {
      ...this.helperStyles,
      ...this.style,
    })

    if (!props.keyFrameName) {
      let defaultName;
      let length = WMLAnimateUIProperty.keyFrameNames.length;
      do {
        defaultName = `keyframe-${length}`;
        length++;
      } while (WMLAnimateUIProperty.keyFrameNames.includes(defaultName));
      props.keyFrameName = defaultName;
    }
    let origProps = Object.entries(props)
    .filter(([key,val]) => {
      return !key.startsWith('prop');
    });
    Object.assign(this, { ...Object.fromEntries(origProps) });
    this.injectKeyframes()


    Object.assign(this.style, this.animationState === "closed" ?this.keyFrameStyles["0%"] : this.keyFrameStyles["100%"])
    if(this.autoOpen){
      this.animationState = "opening"
      this.style.animationName = this.keyFrameName
    }

  }

  autoOpen = false

 /**
 * Necessary for animations to work properly.
 * Modify only if you know what you are doing.
 */
  helperStyles:WMLUIProperty["style"]={
    transform:"translate3d(0,0,0)"
  }
  keyFrameStyles:{[k:string]:WMLUIProperty["style"]} ={

  }
  private static keyFrameNames:Array<string> = [];
  private _keyFrameName!:string;
  get keyFrameName(): string | undefined {
    return this._keyFrameName;
  }
  set keyFrameName(name: string | undefined) {
    if (name) {
      if (this._keyFrameName) {
        WMLAnimateUIProperty.keyFrameNames.filter((name)=>name !=this._keyFrameName)
      }
      WMLAnimateUIProperty.keyFrameNames.push(name);
      this._keyFrameName = name;
    }
  }
  animationState:WMLAnimateUIPropertyState = "closed"
  getGroupAnimationState:()=> WMLAnimateUIPropertyState =()=>{
    return this.animationState
  }
  animationEndEvent = new Subject<WMLAnimateUIPropertyState>()
  readonly animationEnd:(evt?:AnimationEvent)=> void =(evt)=>{

    let state = this.getGroupAnimationState()
    let finalStyles ={
      "opening":this.keyFrameStyles["100%"],
      "closing":this.keyFrameStyles["0%"]
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
    this.style.animationName = ""
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
      "opening":this.keyFrameStyles["0%"],
      "closing":this.keyFrameStyles["100%"]
    }[this.animationState]
    Object.entries(finalStyles??{})
    .forEach(([key,value])=>{
      this.style[key]=value
    })

    this.cdref?.detectChanges()


    setTimeout(() => {
      this.style.animationName = this.keyFrameName
      this.cdref?.detectChanges()
    }, 100);

  }
  injectKeyframes=()=> {
    let name  = this.keyFrameName as string
    let timesKeyFrameOccurs = WMLAnimateUIProperty.keyFrameNames.filter((keyFrame) => name === keyFrame).length
    if (timesKeyFrameOccurs >= 2) {

      if(timesKeyFrameOccurs ===2){
        console.warn(`The keyFrameName '${name}' must be unique among all instances of WMLAnimateUIProperty. The keyFrameStyles of this class won't be processed.`);
        WMLAnimateUIProperty.keyFrameNames.push(name);
      }

      return;
    }

    // Create a new style element
    const styleElement = document.createElement('style');
    document.head.appendChild(styleElement);

    // Generate the keyframes string from the keyFrameStyles property
    let keyframes = `@keyframes ${this.keyFrameName} {`;

    for (const key in this.keyFrameStyles) {
      keyframes += `
        ${key} {
          ${Object.entries(this.keyFrameStyles[key])
            .map(([property, value]) => `${property}: ${value};`)
            .join(' ')}
        }`;
    }

    keyframes += `
    }`;

    // Insert the keyframes rule into the style element
    let styleSheet = styleElement.sheet!
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

  }

}

export class WMLWrapper<V=any,T=any> {
  constructor(props:Partial<WMLWrapper> = {}){
    Object.assign(
      this,
      {
        ...props
      }
    )
  }
  view:WMLView<V,T> =new WMLView<V,T>()
}

export class WMLCustomComponent<C=any,P=any> {
  constructor(props:Partial<WMLCustomComponent> = {}){
    Object.assign(
      this,
      {
        ...props
      }
    )
  }
  cpnt!:Type<C>
  props!:P

}

export class WMLImage<V=any,T=any> extends WMLRoute<V,T> {
  constructor(props:Partial<WMLImage> = {}){
    super()
    Object.assign(
      this,
      {
        ...props
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
  constructor(props:Partial<WMLE2ETarget>={}){
    Object.assign(
      this,
      {
        ...props
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

export class WMLModuleForRootProps {
  constructor(props:Partial<WMLModuleForRootProps>={}){
    Object.assign(
      this,
      {
        ...props
      }
    )
  }

  ngxTranslateLoaderFactory = ()=> new WMLNGXTranslateLoader()
}

export type WMLDeepPartial<T> = {
  [K in keyof T]?: T[K] extends Function ? T[K] : T[K] extends object ? WMLDeepPartial<T[K]> : T[K];
};


