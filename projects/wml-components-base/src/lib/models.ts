
import { detectFramework, updateClassString } from "./functions";


export type WMLUIFramework='React' | 'Angular' | 'Vue.js' | 'Svelte' | 'Ember.js' | 'Backbone.js' | 'Preact' | 'Next.js' | 'Nuxt.js' | 'Gatsby' | 'Remix' | 'NestJS' | 'VanillaJS'| 'Lit' | 'Alpine.js' | 'Mithril.js' | 'Aurelia' | 'Riot.js' | 'Inferno' | 'Stencil'
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


export class WMLUIProperty<V=any,T=any>{
  constructor(props:Partial<WMLUIProperty<V,T>> = {}){
    Object.assign(
      this,
      {
        ...props
      }
    )

    if(!WMLUIProperty.framework){
      WMLUIProperty.framework = detectFramework()
    }
  }

  static framework:WMLUIFramework

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

  /**
   * @deprecated use angular.cdref instead
  */
  get cdref(){
    return this.angular.cdref
  }
  /**
   * @deprecated use angular.cdref instead
  */
  set cdref(val){
    this.angular.cdref = val
  }
  angular:any = {
    // ChangeDetectorRef
    cdref:null
  }
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


export type WMLMotionUIPropertyState  ="open" | "opening" | "closing" | "closed"
export class WMLMotionUIProperty<V=any,T=any> extends WMLView<V,T> {
  constructor(props: Partial<WMLMotionUIProperty> = {}) {
    super()
    Object.assign(this.style, {
      ...this.helperStyles,
      ...this.style,
    })

    if (!props.keyFrameName) {
      let defaultName;
      let length = WMLMotionUIProperty.keyFrameNames.length;
      do {
        defaultName = `keyframe-${length}`;
        length++;
      } while (WMLMotionUIProperty.keyFrameNames.includes(defaultName));
      props.keyFrameName = defaultName;
    }
    let origProps = Object.entries(props)
    .filter(([key,val]) => {
      return !key.startsWith('prop');
    });
    Object.assign(this, { ...Object.fromEntries(origProps) });
    this.injectKeyframes()

    if (this.motionState === "closed") {
      Object.assign(this.style, this.keyFrameStyles["0%"]);
    } else {
      Object.assign(this.style, this.keyFrameStyles["100%"]);
    }

    if(this.autoOpen){
      this.motionState = "opening"
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
        WMLMotionUIProperty.keyFrameNames.filter((name)=>name !=this._keyFrameName)
      }
      WMLMotionUIProperty.keyFrameNames.push(name);
      this._keyFrameName = name;
    }
  }
  motionState:WMLMotionUIPropertyState = "closed"
  getGroupMotionState:()=> WMLMotionUIPropertyState =()=>{
    return this.motionState
  }
  motionEndEvent:any = (state:WMLMotionUIPropertyState)=>{
  }
  readonly animationEnd:(evt?:AnimationEvent)=> void =(evt)=>{

    let state = this.getGroupMotionState()
    let finalStyles ={
      "opening":this.keyFrameStyles["100%"],
      "closing":this.keyFrameStyles["0%"]
    }[state]
    this.motionState = {
      "closing":"closed",
      "opening":"open",
    }[state]

    Object.entries(finalStyles??{})
    .forEach(([key,value])=>{
      this.style[key]=value
    })
    if(["Angular"].includes(WMLMotionUIProperty.framework )){
      // @ts-ignore
      this.motionEndEvent.next?.(this.motionState)
    }
    else{
      this.motionEndEvent(this.motionState)
    }
    if(["Angular"].includes(WMLMotionUIProperty.framework )){
      this.angular.cdref?.detectChanges()
    }

  }
  openMotion =()=>this.toggleMotion("forward")
  closeMotion = ()=>this.toggleMotion("reverse")
  private toggleMotion=(val:'forward'|'reverse')=>{

    if(!["closed","open"].includes(this.motionState)){
      return
    }
    this.style.animationName = ""
    this.style.animationDirection = "normal"
    if(["Angular"].includes(WMLMotionUIProperty.framework )){
      this.cdref?.detectChanges()
    }
    this.style.animationDirection = val
    if(["Angular"].includes(WMLMotionUIProperty.framework )){
      this.cdref?.detectChanges()
    }
    // @ts-ignore
    this.motionState = {
      "forward":"opening",
      "reverse":"closing"
    }[val]
    let finalStyles ={
      "opening":this.keyFrameStyles["0%"],
      "closing":this.keyFrameStyles["100%"]
    }[this.motionState]
    Object.entries(finalStyles??{})
    .forEach(([key,value])=>{
      this.style[key]=value
    })

    if(["Angular"].includes(WMLMotionUIProperty.framework )){
      this.cdref?.detectChanges()
    }


    setTimeout(() => {
      this.style.animationName = this.keyFrameName
      if(["Angular"].includes(WMLMotionUIProperty.framework )){
        this.cdref?.detectChanges()
      }
    }, 100);

  }
  injectKeyframes=()=> {
    let name  = this.keyFrameName as string
    let timesKeyFrameOccurs = WMLMotionUIProperty.keyFrameNames.filter((keyFrame) => name === keyFrame).length
    if (timesKeyFrameOccurs >= 2) {

      if(timesKeyFrameOccurs ===2){
        console.warn(`The keyFrameName '${name}' must be unique among all instances of WMLMotionUIProperty. The keyFrameStyles of this class won't be processed.`);
        WMLMotionUIProperty.keyFrameNames.push(name);
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
  cpnt!:C
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


export type WMLDeepPartial<T> = {
  [K in keyof T]?: T[K] extends Function ? T[K] : T[K] extends object ? WMLDeepPartial<T[K]> : T[K];
};


