// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding,  Input, ViewEncapsulation   } from '@angular/core';
import { WMLButton, generateClassPrefix, updateClassString } from '@windmillcode/angular-wml-components-base';

// rxjs
import { Subject } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';
import { WMLButtonIconType, WMLButtonPropsTypeEnum } from '../../models';

// misc
@Component({
  selector: 'wml-button-one',
  templateUrl: './wml-button-one.component.html',
  styleUrls: ['./wml-button-one.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  encapsulation:ViewEncapsulation.None
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


// @ts-ignore
export class WMLButtonOneProps extends WMLButton {
  constructor(props:Partial<WMLButtonOneProps>={}){
    super()
    Object.assign(
      this,
      {
        ...props
      }
    )
    // TODO this needs to be here because typescript decided to be a pain
    // @ts-ignore
    if([null,undefined].includes( this.type) ){
      this.type = WMLButtonPropsTypeEnum.PRIMARY
    }
    this.updateBtnClasses(this.type)

  }

  private override  buttonClass =""
  private _btnClass:string = ""
  private _btnClassList:string[] = []
  get btnClass (){
    return this._btnClass
  }
  set btnClass(val){
    this.updateBtnClassString(val)
  }
  btnStyle:Partial<CSSStyleDeclaration> = {}
  btnIsPresent = true
  private _type =WMLButtonPropsTypeEnum.PRIMARY
  // @ts-ignore
  override get type(){
    return this._type
  }
  override set type(value:WMLButtonPropsTypeEnum){
    this.updateBtnClasses(value)
    this._type = value
  }
  iconType:WMLButtonIconType = "img"

  override text = "Click Me"

  updateBtnClassString=updateClassString(this,"_btnClass","_btnClassList")
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
}


