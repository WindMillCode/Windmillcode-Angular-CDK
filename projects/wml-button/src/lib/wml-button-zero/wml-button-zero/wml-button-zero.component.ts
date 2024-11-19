// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding,  Input   } from '@angular/core';




// rxjs
import { Subject } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';
import {WMLUIProperty, WMLImage, generateClassPrefix} from "@windmillcode/wml-components-base"
// misc
import {WMLButtonIconType, WMLButtonPropsTypeEnum} from '../../models';


@Component({
    selector: 'wml-button-zero',
    templateUrl: './wml-button-zero.component.html',
    styleUrls: ['./wml-button-zero.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class WMLButtonZeroComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }


  classPrefix = generateClassPrefix('WMLButtonZero')


  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  @HostBinding('attr.id') myId?:string
  @Input('props') props: WMLButtonZeroProps = new WMLButtonZeroProps()
  ngUnsub= new Subject<void>()

  listenForUpdate = ()=>{
    return this.props.updateSubj
    .pipe(
      takeUntil(this.ngUnsub),
      tap((res?)=>{
        this.props = new WMLButtonZeroProps({
          ...this.props,
          ...(res ?? this.props)
        })
        this.cdref.detectChanges()
      })
    )
  }

  checkPropsInstance = ()=>{
    return this.props.constructor.name
  }
  ngOnInit(): void {
    this.listenForUpdate().subscribe()
    this.props.cdref = this.cdref
    if(this.props.id){
      this.myId = this.props.id
    }

  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}



export class WMLButtonZeroProps {
  constructor(props:Partial<WMLButtonZeroProps >={}){
    Object.assign(
      this,
      {
        ...props
      }
    )
    this.updateBtnClasses(this.type)
    this.icons = this.icons.map((icon)=>{
      icon.type = icon.type ?? "img"
      return icon
    })


  }


  id?:string
  cdref?:ChangeDetectorRef
  updateSubj = new Subject<Partial<WMLButtonZeroProps>>()
  private _type =WMLButtonPropsTypeEnum.PRIMARY
  get type(){
    return this._type
  }
  set type(value:WMLButtonPropsTypeEnum){
    this.updateBtnClasses(value)
    this._type = value
  }
  private updateBtnClasses(value:WMLButtonPropsTypeEnum){
    let val = {
      [WMLButtonPropsTypeEnum.PRIMARY]:"0",
      [WMLButtonPropsTypeEnum.SECONDARY]:"1",
      [WMLButtonPropsTypeEnum.TERTIARY]:"2"
    }[value]
    this.button.class = "WMLButtonZeroMainButton"+val;
    this.text.class = "WMLButtonZeroMainButton" + val +"Text0"
  }
  text = new WMLUIProperty({
    text:"Click Me",
  })
  button = new WMLUIProperty({
    click:()=>{
      alert("This button was clicked")
    }
  })
  icons = [new WMLImage<any,WMLButtonIconType>({
    isPresent:false,
    class:'fa-solid'
  })]

  attr ={
    /**
     * The type of the button.
     * Possible values: "submit" | "reset" | "button"
     * @type {"submit" | "reset" | "button"}
     */
    type:"button"
  }
}


