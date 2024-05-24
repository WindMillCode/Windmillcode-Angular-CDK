// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, HostListener, Input, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';


// rxjs
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';

// misc
import { addCustomComponent, generateClassPrefix, WMLCustomComponent, WMLUIProperty, WMLView } from '@windmillcode/angular-wml-components-base';

@Component({
  selector: 'wml-popup',
  templateUrl: './wml-popup.component.html',
  styleUrls: ['./wml-popup.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush

})
export class WmlPopupComponent  {

  constructor(
    public cdref:ChangeDetectorRef,
  ) { }

  classPrefix = generateClassPrefix('WmlPopup')
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  @HostBinding('id') myId!:string
  ngUnsub= new Subject<void>()
  @Input('params')params: WMLPopupParams = new  WMLPopupParams()
  @ViewChild("customPopup",{read:ViewContainerRef,static:true}) customPopup!:ViewContainerRef;



  listenForTogglePopup = ()=>{
    return this.params.togglePopupSubj
    .pipe(
      takeUntil(this.ngUnsub),
      tap(()=>{
        this.myId = this.params.view.id
        this.cdref.detectChanges()
      })
    )
  }

  updatePopup = ()=>{
    this.customPopup.clear()
    addCustomComponent(
      this.customPopup,
      this.params.cpnt,
      this.params.meta
    )
    this.cdref.detectChanges()
  }

  ngOnInit(): void {
    this.myId = this.params.view.id
    this.params.view.cdref = this.cdref
    this.listenForTogglePopup().subscribe()
    this.updatePopup()
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}

export class WMLPopupParams extends WMLCustomComponent  {
  constructor(params:Partial<WMLPopupParams & {paramViewId:string}>={}){
    super();
    let origParams = Object.entries(params).filter(([key, val]) => {
      return !key.startsWith('param') || key === "params";
    });
    Object.assign(this, { ...Object.fromEntries(origParams) });
    if(params.paramViewId){
      this.view.id = params.paramViewId
    }
  }
  view = new WMLView()
  override cpnt:Type<any> =SampleForWMLPopupCpntComponent
  popup = new WMLUIProperty()
  updatePopup!:Function
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
class SampleForWMLPopupCpntComponent{
  @Input("params") params:any ={}
  myStr = `Use like so
  js
  ///
  popupParams= new WmlPopupComponentParams({})

  openPopup =(params:WMLCustomComponent)=>{

    this.popupParams.cpnt = params.cpnt
    this.popupParams.params = params.params ?? {}
    this.togglePopupSubj.next(true)
  }
  closePopup = ()=>{
    this.togglePopupSubj.next(false)
  }
  ///
  html
  ///
  <div *ngIf="baseService.togglePopupSubj | async" [class]="classPrefix('Pod0')">
    <wml-popup [params]="baseService.popupParams"></wml-popup>
  </div>
  ///
  `
}
