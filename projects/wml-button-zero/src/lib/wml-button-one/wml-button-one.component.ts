// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit,  Input, ViewEncapsulation   } from '@angular/core';
import { WMLButton, generateClassPrefix, updateClassString } from '@windmillcode/angular-wml-components-base';




// rxjs
import { Subject } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';
import { WMLButtonIconType, WMLButtonParamsTypeEnum } from '../models';

// misc



@Component({

  selector: 'wml-button-one',
  templateUrl: './wml-button-one.component.html',
  styleUrls: ['./wml-button-one.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush



})
export class WmlButtonOneComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }


  classPrefix = generateClassPrefix('WmlButtonOne')
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  @HostBinding('id') myId!:string
  @Input('params') params: WmlButtonOneParams = new WmlButtonOneParams({})
  ngUnsub= new Subject<void>()

  listenForUpdate = ()=>{
    return this.params.updateSubj
    .pipe(
      takeUntil(this.ngUnsub),
      tap((res?)=>{
        this.params = new WmlButtonOneParams({
          ...this.params,
          ...(res ?? this.params)
        })
        this.cdref.detectChanges()
      })
    )

  }

  ngOnInit(): void {
    this.listenForUpdate().subscribe()
    this.params.cdref = this.cdref
    this.myId = this.params.id

    this.params.updateClassString = (...args)=>{
      updateClassString(this.params,"_class","_classList")(...args)
      this.cdref.detectChanges()
    }

    this.params.updateBtnClassString = (...args)=>{
      updateClassString(this.params,"_btnClass","_btnClassList")(...args)
      this.cdref.detectChanges()
    }

    this.params.updateIconClassString = (...args)=>{
      updateClassString(this.params,"_iconClass","_iconClassList")(...args)
      this.cdref.detectChanges()
    }


  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}


// @ts-ignore
export class WmlButtonOneParams extends WMLButton {
  constructor(params:Partial<WmlButtonOneParams>={}){
    super()
    Object.assign(
      this,
      {
        ...params
      }
    )
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
  private _type =WMLButtonParamsTypeEnum.PRIMARY
  // @ts-ignore
  override get type(){
    return this._type
  }
  override set type(value:WMLButtonParamsTypeEnum){
    this.updateBtnClasses(value)
    this._type = value
  }
  iconType:WMLButtonIconType = "img"

  override text = "Click Me"

  updateBtnClassString=updateClassString(this,"_btnClass","_btnClassList")
  private updateBtnClasses(value:WMLButtonParamsTypeEnum){
    let val = {
      [WMLButtonParamsTypeEnum.PRIMARY]:"0",
      [WMLButtonParamsTypeEnum.SECONDARY]:"1",
      [WMLButtonParamsTypeEnum.TERTIARY]:"2"
    }[value]
    this.updateBtnClassString("WmlButtonOneMainButton"+val);
    this.class = "WmlButtonOneMainButton" + val +"Text0"
  }
  override click =(evt?)=>{
    alert("This button was clicked")
  }
  updateSubj = new Subject<Partial<WmlButtonOneParams>>()
}


