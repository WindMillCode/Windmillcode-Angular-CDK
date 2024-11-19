// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding,  Input, ViewEncapsulation   } from '@angular/core';
import {  WMLView, generateClassPrefix, updateClassString } from '@windmillcode/wml-components-base';

// rxjs
import { Subject } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';
import { WMLButtonIconType, WMLButtonPropsTypeEnum } from '../../models';

// misc
@Component({
    selector: 'wml-button-one',
    templateUrl: './wml-button-one.component.html',
    styleUrls: ['./wml-button-one.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class WMLButtonOneComponent  {

  constructor(
    public cdref:ChangeDetectorRef,
  ) { }

  classPrefix = generateClassPrefix('WMLButtonOne')
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  @HostBinding('attr.id') myId?:string
  @Input('props') props: WMLButtonOneProps = new WMLButtonOneProps({})
  ngUnsub= new Subject<void>()

  listenForUpdate = ()=>{
    return this.props.updateSubj
    .pipe(
      takeUntil(this.ngUnsub),
      tap((res?)=>{
        this.props = new WMLButtonOneProps({
          ...this.props,
          ...(res ?? this.props)
        })
        this.cdref.detectChanges()
      })
    )

  }

  ngOnInit(): void {
    this.listenForUpdate().subscribe()
    this.props.cdref = this.cdref
    if(this.props.id){
      this.myId = this.props.id
    }

    this.props.updateClassString = (...args)=>{
      updateClassString(this.props,"_class","_classList")(...args)
      this.cdref.detectChanges()
    }

    this.props.updateBtnClassString = (...args)=>{
      updateClassString(this.props,"_btnClass","_btnClassList")(...args)
      this.cdref.detectChanges()
    }

    this.props.updateIconClassString = (...args)=>{
      updateClassString(this.props,"_iconClass","_iconClassList")(...args)
      this.cdref.detectChanges()
    }


  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}


export class WMLButtonOneProps<V=any,T=WMLButtonPropsTypeEnum>  extends WMLView<V,WMLButtonPropsTypeEnum>  {
  constructor(props:Partial<WMLButtonOneProps>={}){
    super()
    Object.defineProperty(this, 'type', {
      get: () => {
        return this._type
      },
      set: (value: WMLButtonPropsTypeEnum) => {
        this.updateBtnClasses(value)
        this._type = value
      }
    });
    Object.assign(
      this,
      {
        ...props
      }
    )

    // @ts-ignore
    if([null,undefined].includes( this.type) ){
      this.type = WMLButtonPropsTypeEnum.PRIMARY
    }
    this.updateBtnClasses(this.type!)
  }


  private _iconClass:string = ""
  private _iconClassList:string[] = []
  updateIconClassString=updateClassString(this,"_iconClass","_iconClassList")
  get iconClass(){
    return this._iconClass
  }
  set iconClass(val){
    this.updateIconClassString(val)
  }
  textIsPresent:boolean = true
  iconSrc?:string = ""
  iconAlt?:string = ""
  iconIsPresent:boolean = false
  private  buttonClass =""
  private _btnClass:string = ""
  private _btnClassList:string[] = []
  updateBtnClassString=updateClassString(this,"_btnClass","_btnClassList")
  get btnClass (){
    return this._btnClass
  }
  set btnClass(val){
    this.updateBtnClassString(val)
  }
  btnStyle:Partial<CSSStyleDeclaration> = {}
  btnIsPresent = true
  private _type =WMLButtonPropsTypeEnum.PRIMARY
  iconType:WMLButtonIconType = "img"
  override text = "Click Me"
  private updateBtnClasses(value:WMLButtonPropsTypeEnum){
    let val = {
      [WMLButtonPropsTypeEnum.PRIMARY]:"0",
      [WMLButtonPropsTypeEnum.SECONDARY]:"1",
      [WMLButtonPropsTypeEnum.TERTIARY]:"2"
    }[value]
    this.updateBtnClassString("WMLButtonOneMainButton"+val);
    this.class = "WMLButtonOneMainButton" + val +"Text0"
  }
  override click =(evt?)=>{
    alert("This button was clicked")
  }
  updateSubj = new Subject<Partial<WMLButtonOneProps>>()

  link?:string
  routerLink?: string

  attr ={
  /**
   * The type of the button.
   * Possible values: "submit" | "reset" | "button"
   * @type {"submit" | "reset" | "button"}
   */
    type:"button"
  }
}


