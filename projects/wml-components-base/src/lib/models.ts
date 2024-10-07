
import { detectFramework, getGlobalObject, updateClassString } from "./functions";


export type WMLUIFrameworkType='React' | 'Angular' | 'Vue.js' | 'Svelte' | 'Ember.js' | 'Backbone.js' | 'Preact' | 'Next.js' | 'Nuxt.js' | 'Gatsby' | 'Remix' | 'NestJS' | 'VanillaJS'| 'Lit' | 'Alpine.js' | 'Mithril.js' | 'Aurelia' | 'Riot.js' | 'Inferno' | 'Stencil'

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

@WMLConstructorDecorator
export class WMLUIGlobal {
  constructor(params: Partial<WMLUIGlobal> = {}) { }

  framework={
    name: detectFramework(),
  }
}

getGlobalObject().WINDMILLCODE = new WMLUIGlobal()


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

export class WMLUri {

  url: URL;
  constructor(props:{
    scheme?:string, host:string, port?:number, path?:string, query?:string, fragment ?:string
  }) {
    let { scheme, host, port, path, query, fragment } = props;
    scheme ??= "https"
    
    this.url = new URL(`${scheme}://${host}${port ? `:${port}` : ''}`);
    if (path) this.url.pathname = path;
    if (query) this.url.search = query;
    if (fragment) this.url.hash = fragment;
  }

  get domain() {
    return this.url.port === '' ? this.url.hostname : `${this.url.hostname}:${this.url.port}`;
  }

  get fqdn() {
    return `${this.url.protocol}//${this.url.hostname}${this.url.port ? `:${this.url.port}` : ''}`;
  }

  toString() {
    return this.url.toString();
  }
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
export class WMLMotionUIProperty<V=any,T="animation" | "transition"> extends WMLView<V,T> {
  constructor(props: Partial<WMLMotionUIProperty<V,T>> = {}) {
    super()

    Object.assign(this.style, {
      ...this.helperStyles,
      ...this.style,
    })

    if (!props.keyFrameName) {
      this.createKeyFrameName();
    }

    let origProps = Object.entries(props)
    .filter(([key,val]) => {
      return !key.startsWith('prop');
    });
    Object.assign(
      this,
      {
        type:"animation",
        ...Object.fromEntries(origProps)
      }
    );

    if(this.type === "animation"){
      this.injectKeyFrames()
    }
    else if(this.type === "transition"){
      this.setupTransitions()
    }


    let keyframe = this.motionState === "closed" ? "0%" : "100%";
    Object.assign(this.style, this.keyFrameStyles[keyframe]);
    setTimeout(() => {

      if (this.type === "transition") {
        this.currentTransitionInfo.keyframe = keyframe;
      }

      if(this.autoOpen){
        if(this.type === "animation"){
          this.motionState = "opening"
          this.style.animationName = this.keyFrameName
        }
        else {
          this.openMotion()
        }
      }
    }, 0);

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

  get keyFrameName(): string  {
    return this._keyFrameName;
  }
  set keyFrameName(name: string ) {
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
  triggerMotionEndEvent=(motionState?:WMLMotionUIPropertyState)=>{
    motionState ??= this.motionState
    if(["Angular"].includes(getGlobalObject().WINDMILLCODE.framework.name )){
      // @ts-ignore
      this.motionEndEvent.next?.(motionState)
    }
    else{
      this.motionEndEvent(motionState)
    }
  }
  motionKeyFrameEvent:any =(keyFrame:string)=>{
  }
  triggerMotionKeyFrameEvent=(keyFrame?:string)=>{
    keyFrame ??= this.currentTransitionInfo.keyframe
    if(["Angular"].includes(getGlobalObject().WINDMILLCODE.framework.name )){
      // @ts-ignore
      this.motionKeyFrameEvent.next?.(keyFrame)
    }
    else{
      this.motionKeyFrameEvent(keyFrame)
    }
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

    this.triggerMotionEndEvent()
    if(["Angular"].includes(getGlobalObject().WINDMILLCODE.framework.name )){
      this.angular.cdref?.detectChanges()
    }

  }

  readonly transitionEnd:(evt?:TransitionEvent)=> void =(evt)=>{
    let state = this.getGroupMotionState()
    this.currentTransitionInfo.transitionEndStyles.push(evt?.propertyName.replace(/-./g, (match) => match.charAt(1).toUpperCase()))

    let keyFramePropertyKeys =Object.keys(this.keyFrameStyles[this.currentTransitionInfo.keyframe])


    if(this.motionState === "closing"){
      let keyFrameStyleKeys = Object.keys(this.keyFrameStyles)
      .sort((a, b)=>{
        return parseFloat(a) - parseFloat(b);
      })

      let previousKeyFrameIndex = keyFrameStyleKeys.findIndex((key)=>key === this.currentTransitionInfo.keyframe)+1
      let previousKeyFramePropertyKeys = Object.keys(this.keyFrameStyles[keyFrameStyleKeys[previousKeyFrameIndex]])
      keyFramePropertyKeys =keyFramePropertyKeys
      .filter((key)=>{
        return previousKeyFramePropertyKeys.includes(key)
      })
    }

    keyFramePropertyKeys = keyFramePropertyKeys
    .filter((key)=>!key.includes("transition"))

    if(keyFramePropertyKeys.includes("borderRadius")){
      let index = keyFramePropertyKeys.findIndex(key => key === "borderRadius");
      keyFramePropertyKeys.splice(index, 1, ...["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]);
    }

    if(keyFramePropertyKeys.includes("margin")){
      let index = keyFramePropertyKeys.findIndex(key => key === "margin");
      keyFramePropertyKeys.splice(index, 1, ...["marginTop", "marginRight", "marginBottom", "marginLeft"]);
    }

    if(keyFramePropertyKeys.includes("padding")){
      let index = keyFramePropertyKeys.findIndex(key => key === "padding");
      keyFramePropertyKeys.splice(index, 1, ...["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"]);
    }

    if(keyFramePropertyKeys.includes("border")){
      let index = keyFramePropertyKeys.findIndex(key => key === "border");
      keyFramePropertyKeys.splice(index, 1, ...["borderTop", "borderRight", "borderBottom", "borderLeft"]);
    }

    if(keyFramePropertyKeys.includes("borderColor")){
      let index = keyFramePropertyKeys.findIndex(key => key === "borderColor");
      keyFramePropertyKeys.splice(index, 1, ...["borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"]);
    }

    if(keyFramePropertyKeys.includes("borderWidth")){
      let index = keyFramePropertyKeys.findIndex(key => key === "borderWidth");
      keyFramePropertyKeys.splice(index, 1, ...["borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth"]);
    }

    if(keyFramePropertyKeys.includes("borderStyle")){
      let index = keyFramePropertyKeys.findIndex(key => key === "borderStyle");
      keyFramePropertyKeys.splice(index, 1, ...["borderTopStyle", "borderRightStyle", "borderBottomStyle", "borderLeftStyle"]);
    }

    if(keyFramePropertyKeys.includes("background")){
      let index = keyFramePropertyKeys.findIndex(key => key === "background");
      keyFramePropertyKeys.splice(index, 1, ...["backgroundImage", "backgroundPosition", "backgroundSize", "backgroundRepeat", "backgroundAttachment", "backgroundOrigin", "backgroundClip", "backgroundColor"]);
    }

    if(keyFramePropertyKeys.includes("font")){
      let index = keyFramePropertyKeys.findIndex(key => key === "font");
      keyFramePropertyKeys.splice(index, 1, ...["fontStyle", "fontVariant", "fontWeight", "fontSize", "lineHeight", "fontFamily"]);
    }

    if(keyFramePropertyKeys.includes("animation")){
      let index = keyFramePropertyKeys.findIndex(key => key === "animation");
      keyFramePropertyKeys.splice(index, 1, ...["animationName", "animationDuration", "animationTimingFunction", "animationDelay", "animationIterationCount", "animationDirection", "animationFillMode", "animationPlayState"]);
    }


    if(keyFramePropertyKeys.includes("flex")){
      let index = keyFramePropertyKeys.findIndex(key => key === "flex");
      keyFramePropertyKeys.splice(index, 1, ...["flexGrow", "flexShrink", "flexBasis"]);
    }

    if(keyFramePropertyKeys.includes("grid")){
      let index = keyFramePropertyKeys.findIndex(key => key === "grid");
      keyFramePropertyKeys.splice(index, 1, ...["gridTemplateRows", "gridTemplateColumns", "gridTemplateAreas", "gridAutoRows", "gridAutoColumns", "gridAutoFlow"]);
    }



    let frameCompleted = keyFramePropertyKeys
    .every((key)=>{

      return this.currentTransitionInfo.transitionEndStyles.includes(key)
    })
    if(!frameCompleted){
      return
    }

    this.currentTransitionInfo.transitionEndStyles= []
    if(["0%","100%"].includes(this.currentTransitionInfo.keyframe)){
      this.motionState = {
        "closing":"closed",
        "opening":"open",
      }[state]
      this.triggerMotionEndEvent()
    }
    else{
      let val = {
        "closing":"reverse",
        "opening":"forward"
      }[state]
      this.triggerMotionKeyFrameEvent()
      this.toggleMotionViaTransition({val,override:true})
    }
  }
  openMotion =()=>this.toggleMotion("forward")
  closeMotion = ()=>this.toggleMotion("reverse")
  pauseMotion =()=>{
    if(this.type ==="animation"){
      this.style.animationPlayState ="paused"
    }
    else if(this.type ==="transition"){
      if(this.currentTransitionInfo.playState !== "paused"){
        this.currentTransitionInfo.playState = "paused"
        let allStyles = getComputedStyle(this.getElement())
        let currentStyles = Object.fromEntries(Object.entries(this.style)
        .map(([k,v])=>{
          return [k,allStyles[k]]
        }))
        this.currentTransitionInfo.currentStyles = {
          ...currentStyles,
          transition:allStyles["transition"]
        }
        Object.assign(this.style,{
          ...currentStyles,
          transition:"none"
        })
      }
    }
  }
  resumeMotion =()=>{

    if(this.type ==="animation"){
      this.style.animationPlayState ="running"
    }
    else if(this.type ==="transition"){
      if(this.currentTransitionInfo.playState !== "running"){
        this.currentTransitionInfo.playState = "running"
        Object.assign(this.style,{
          ...this.currentTransitionInfo.currentStyles,
          ...this.keyFrameStyles[this.currentTransitionInfo.keyframe]
        })
      }


    }
  }
  private toggleMotion=(val:'forward'|'reverse')=>{
    if(this.type ==="animation"){
      this.toggleMotionViaAnimation(val)
    }
    else if(this.type ==="transition"){
      this.toggleMotionViaTransition({val})
    }
  }
  private toggleMotionViaAnimation=(val:'forward'|'reverse')=>{
    if(!["closed","open"].includes(this.motionState)){
      return
    }
    this.style.animationName = ""
    this.style.animationDirection = "normal"
    if(["Angular"].includes(getGlobalObject().WINDMILLCODE.framework.name )){
      this.cdref?.detectChanges()
    }
    this.style.animationDirection = val
    if(["Angular"].includes(getGlobalObject().WINDMILLCODE.framework.name )){
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

    if(["Angular"].includes(getGlobalObject().WINDMILLCODE.framework.name )){
      this.angular.cdref?.detectChanges()
    }


    setTimeout(() => {
      this.style.animationName = this.keyFrameName
      if(["Angular"].includes(getGlobalObject().WINDMILLCODE.framework.name )){
        this.angular.cdref?.detectChanges()
      }
    }, 100);

  }
  checkForDuplicateKeyFrameNames=()=>{
    let name  = this.keyFrameName as string
    let timesKeyFrameOccurs = WMLMotionUIProperty.keyFrameNames.filter((keyFrame) => name === keyFrame).length
    if (timesKeyFrameOccurs >= 2) {

      if(timesKeyFrameOccurs ===2){
        console.warn(`The keyFrameName '${name}' must be unique among all instances of WMLMotionUIProperty. The keyFrameStyles of this class won't be processed.`);
        WMLMotionUIProperty.keyFrameNames.push(name);
      }

      return true;
    }
    return false
  }
  currentStyleElement?: HTMLStyleElement
  injectKeyFrames=()=> {
    let shouldReturn =this.checkForDuplicateKeyFrameNames()
    if(shouldReturn){
      return
    }
    // Create a new style element
    this.currentStyleElement = document.createElement('style');
    document.head.appendChild(this.currentStyleElement);

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
    let styleSheet = this.currentStyleElement.sheet!
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

  }
  createKeyFrameName = ()=> {
    let defaultName;
    let length = WMLMotionUIProperty.keyFrameNames.length;
    do {
      defaultName = `keyframe-${length}`;
      length++;
    } while (WMLMotionUIProperty.keyFrameNames.includes(defaultName));
    this.keyFrameName = defaultName;
  }
  updateKeyFrames =(props:WMLMotionUIProperty["keyFrameStyles"])=>{
    this.keyFrameStyles = props

    if(this.type ==="animation"){
      this.currentStyleElement?.remove()
    }
    if(this.type ==="transition"){
      this.updateClassString(this.keyFrameName,"remove")
    }
    this.createKeyFrameName()
    if(this.type === "transiton"){
      this.updateClassString(this.keyFrameName)
    }
    if(this.type === "animation"){
      this.injectKeyFrames()
    }
    if(["Angular"].includes(getGlobalObject().WINDMILLCODE.framework.name )){
      this.angular.cdref?.detectChanges()
    }
  }


  currentTransitionInfo:any ={
    keyframe:"0%",
    currentStyles:{},
    transitionEndStyles:[],
    playState:""
  }

  setupTransitions =()=>{
    this.updateClassString(this.keyFrameName)
  }
  private toggleMotionViaTransition=(props:{val:'forward'|'reverse',override?:boolean})=>{
    let {val,override} = props
    if(!["closed","open"].includes(this.motionState) && override !==true){
      return
    }

    // @ts-ignore
    this.motionState = {
      "forward":"opening",
      "reverse":"closing"
    }[val]

    let sortedStyles = Object.entries(this.keyFrameStyles)
    .sort(([a], [b])=>{
      return parseFloat(a) - parseFloat(b);
    })
    let currentTransitionIndex = sortedStyles.findIndex(([key])=>key == this.currentTransitionInfo.keyframe)

    let nextTransitionIndex = {
      "opening": currentTransitionIndex + 1,
      "closing": currentTransitionIndex - 1
    }[this.motionState];
    this.currentTransitionInfo.keyframe = sortedStyles[nextTransitionIndex][0]


    Object.assign(this.style, {
      ...sortedStyles[nextTransitionIndex][1]
    })
    let currentTransitionDuration = sortedStyles[currentTransitionIndex][1].transitionDuration
    if(this.motionState ==="closing" && currentTransitionDuration ){
      this.style.transitionDuration = currentTransitionDuration
    }
  }
  getElement = ()=> {
    return document.getElementsByClassName(this.keyFrameName)[0];
  }
  getTransitionProperties = ()=> {
    let htmlElement = this.getElement();
    let transitionProperties = Object.entries(getComputedStyle(htmlElement))
      .filter((item) => {
        return item[0].includes("transition");
      });
    return Object.fromEntries(transitionProperties);
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
  onError = (event?)=>{}

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


