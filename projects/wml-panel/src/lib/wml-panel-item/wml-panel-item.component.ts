// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit,  Input, EventEmitter, ViewChild, ViewContainerRef   } from '@angular/core';
import { updateClassString,WMLCustomComponent, addCustomComponent  } from '@windmillcode/angular-wml-components-base';




// rxjs
import { BehaviorSubject, Subject, interval } from 'rxjs';
import { filter, takeUntil,tap } from 'rxjs/operators';
import {  WmlSamplePanelItemComponent,WMLSamplePanelItemParams } from '../wml-sample-panel-item/wml-sample-panel-item.component';


// misc



@Component({
  selector: 'wml-panel-item',
  templateUrl: './wml-panel-item.component.html',
  styleUrls: ['./wml-panel-item.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class WmlPanelItemComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }

  generateClassPrefix(prefix:string) {
    return (val: string) => {
      return prefix + val
    }
  }
  classPrefix = this.generateClassPrefix('WmlPanelItem')
  @Input('params') params: WMLPanelItemParams = new WMLPanelItemParams()
  @ViewChild("customPanel", {read:ViewContainerRef,static:true}) customPanel!:ViewContainerRef;
  @HostBinding('class') myClass!: string ;
  classList:Array<string> = []
  updateClassString = updateClassString(this,"myClass","classList")
  ngUnsub= new Subject<void>()

  initCpnt =()=>{
    addCustomComponent(
      this.customPanel,
      this.params.custom.cpnt,
      this.params.custom.params
    )
  }
  openPanel = ()=>{

    this.updateClassString(this.classPrefix(`View1`),"remove")
    this.updateClassString(this.classPrefix(`View0`))
    this.cdref.detectChanges()
  }
  listenForOpenCommand=()=>{
    return this.params.opened
    .pipe(
      takeUntil(this.ngUnsub),
      filter((res)=>res===null),
      tap(this.openPanel)
    )

  }
  closePanel =()=>{
    this.updateClassString(this.classPrefix(`View0`),"remove")
    this.updateClassString(this.classPrefix(`View1`))
    this.cdref.detectChanges()
  }
  listenForCloseCommand=()=>{
    return this.params.closed
    .pipe(
      takeUntil(this.ngUnsub),
      filter((res)=>res===null),
      tap(this.closePanel)
    )

  }

  checkInitialState =()=>{
    if(this.params.state === "open"){
      this.openPanel()
    }

  }

  ngOnInit(): void {
    this.initCpnt()
    this.listenForOpenCommand().subscribe()
    this.listenForCloseCommand().subscribe()
    this.updateClassString(this.classPrefix(`View`))
    this.checkInitialState()
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}



export class WMLPanelItemParams {
  constructor(params:Partial<WMLPanelItemParams>={}){
    Object.assign(
      this,
      {
        ...params
      }
    )
  }
  readonly opened = new BehaviorSubject<boolean | null>(true)
  readonly closed = new BehaviorSubject<boolean | null>(true)
  private _state:"open" |"closed" ="closed"
  get state(){
    return this._state
  }
  toggle=()=>{
    if(this._state === "open"){
      this.close()
    }
    else{
      this.open()
    }
  }
  open =()=>{
    this._state = "open"
    this.opened.next(null)
  }
  close = ()=>{

    this._state="closed"
    this.closed.next(null)
  }
  custom = new WMLCustomComponent({
    cpnt:WmlSamplePanelItemComponent,
    params:new WMLSamplePanelItemParams({
      open:this.open,
      close:this.close
    })
  })
}


