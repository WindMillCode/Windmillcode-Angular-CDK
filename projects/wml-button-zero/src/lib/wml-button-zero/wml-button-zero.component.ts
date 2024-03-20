// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit,  Input   } from '@angular/core';




// rxjs
import { Subject, from } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';
import {WMLUIProperty,WMLButton2, WMLImage, WMLButton, generateClassPrefix} from "@windmillcode/angular-wml-components-base"
// misc
import {WMLButtonIconType, WMLButtonParamsTypeEnum} from '../models';


@Component({
  selector: 'wml-button-zero',
  templateUrl: './wml-button-zero.component.html',
  styleUrls: ['./wml-button-zero.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class WmlButtonZeroComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }


  classPrefix = generateClassPrefix('WmlButtonZero')


  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  @HostBinding('id') myId!:string
  @Input('params') params: WmlButtonZeroParams = new WmlButtonZeroParams()
  ngUnsub= new Subject<void>()

  listenForUpdate = ()=>{
    return this.params.updateSubj
    .pipe(
      takeUntil(this.ngUnsub),
      tap((res?)=>{
        this.params = new WmlButtonZeroParams({
          ...this.params,
          ...(res ?? this.params)
        })
        this.cdref.detectChanges()
      })
    )

  }

  checkParamsInstance = ()=>{
    return this.params.constructor.name
  }
  ngOnInit(): void {
    this.listenForUpdate().subscribe()
    this.params.cdref = this.cdref
    this.myId = this.params.id

  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}



export class WmlButtonZeroParams extends WMLButton2 {
  constructor(params:Partial<WmlButtonZeroParams >={}){
    super();

    Object.assign(
      this,
      {
        ...params
      }
    )
    this.updateBtnClasses(this.type)
    this.icons = this.icons.map((icon)=>{
      icon.type = icon.type ?? "img"
      return icon
    })


  }
  id = ""
  cdref?:ChangeDetectorRef
  updateSubj = new Subject<Partial<WmlButtonZeroParams>>()
  private _type =WMLButtonParamsTypeEnum.PRIMARY
  get type(){
    return this._type
  }
  set type(value:WMLButtonParamsTypeEnum){
    this.updateBtnClasses(value)
    // @ts-ignore
    this._type = value
  }
  private updateBtnClasses(value:WMLButtonParamsTypeEnum){
    let val = {
      [WMLButtonParamsTypeEnum.PRIMARY]:"0",
      [WMLButtonParamsTypeEnum.SECONDARY]:"1",
      [WMLButtonParamsTypeEnum.TERTIARY]:"2"
    }[value]
    this.button.class = "WmlButtonZeroMainButton"+val;
    this.text.class = "WmlButtonZeroMainButton" + val +"Text0"
  }
  override text = new WMLUIProperty({
    text:"Click Me",
  })
  override button = new WMLUIProperty({
    click:()=>{
      alert("This button was clicked")
    }
  })
  // @ts-ignore
  override icons = [new WMLImage<any,WMLButtonIconType>({
    isPresent:false,
    class:'fa-solid'
  })]


}


