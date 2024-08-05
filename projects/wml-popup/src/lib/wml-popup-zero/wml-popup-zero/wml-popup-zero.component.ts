// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, Input, Type, ViewChild, ViewContainerRef } from '@angular/core';


// rxjs
import { Subject } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';

// misc
import { addCustomComponent, generateClassPrefix, WMLCustomComponent, WMLUIProperty, WMLView } from '@windmillcode/angular-wml-components-base';

@Component({
  selector: 'wml-popup-zero',
  templateUrl: './wml-popup-zero.component.html',
  styleUrls: ['./wml-popup-zero.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush

})
export class WMLPopupZeroComponent  {

  constructor(
    public cdref:ChangeDetectorRef,
  ) { }

  classPrefix = generateClassPrefix('WMLPopupZero')
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  @HostBinding('attr.id') myId?:string
  ngUnsub= new Subject<void>()
  @Input('props')props: WMLPopupZeroProps = new  WMLPopupZeroProps()
  @ViewChild("customPopup",{read:ViewContainerRef,static:true}) customPopup!:ViewContainerRef;

  listenForTogglePopup = ()=>{
    return this.props.togglePopupSubj
    .pipe(
      takeUntil(this.ngUnsub),
      tap(()=>{
        this.myId = this.props.view.id
        this.cdref.detectChanges()
      })
    )
  }

  updatePopup = ()=>{
    this.customPopup.clear()
    addCustomComponent(
      this.customPopup,
      this.props.cpnt,
      this.props.props
    )
    this.cdref.detectChanges()
  }

  ngOnInit(): void {
    this.myId = this.props.view.id
    this.props.view.cdref = this.cdref
    this.listenForTogglePopup().subscribe()
    this.updatePopup()
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}

export class WMLPopupZeroProps extends WMLCustomComponent  {
  constructor(props:Partial<WMLPopupZeroProps & {propViewId:string}>={}){
    super();
    let origProps = Object.entries(props).filter(([key, val]) => {
      return !key.startsWith('prop') || key === "props";
    });
    Object.assign(this, { ...Object.fromEntries(origProps) });
    if(props.propViewId){
      this.view.id = props.propViewId
    }
  }
  view = new WMLView()
  override cpnt:Type<any> =SampleForWMLPopupZeroCpntComponent
  popup = new WMLUIProperty()
  openPopup = ()=>{
    this.togglePopupSubj.next(true)
  }
  closePopup = ()=>{
    this.togglePopupSubj.next(false)
  }
  togglePopupSubj= new Subject<boolean>()
}
@Component({
  template:`
    <code>
    {{myStr}}
    </code>
  `
})
class SampleForWMLPopupZeroCpntComponent{
  @Input("props") props:any ={}
  myStr = `Use like so
  js
  ///
  popupProps= new WMLPopupZeroComponentProps({})

  openPopup =(props:WMLCustomComponent)=>{

    this.popupProps.cpnt = props.cpnt
    this.popupProps.props = props.props ?? {}
    this.togglePopupSubj.next(true)
  }
  closePopup = ()=>{
    this.togglePopupSubj.next(false)
  }
  ///
  html
  ///
  <div *ngIf="baseService.togglePopupSubj | async" [class]="classPrefix('Pod0')">
    <wml-popup-zero [props]="baseService.popupProps"></wml-popup-zero>
  </div>
  ///
  `
}
