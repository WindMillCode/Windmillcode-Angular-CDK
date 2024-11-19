// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding,  Input, ViewChild, ViewContainerRef   } from '@angular/core';
import { updateClassString,WMLCustomComponent, generateClassPrefix  } from '@windmillcode/wml-components-base';

// rxjs
import { BehaviorSubject, Subject } from 'rxjs';
import { filter, takeUntil,tap } from 'rxjs/operators';
import { WMLSamplePanelItemComponent, WMLSamplePanelItemProps } from '../wml-panel-zero-item-example/wml-panel-zero-item-example.component';
import { addCustomComponent } from '@windmillcode/angular-wml-components-base';

// misc
@Component({
    selector: 'wml-panel-zero-item',
    templateUrl: './wml-panel-zero-item.component.html',
    styleUrls: ['./wml-panel-zero-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class WMLPanelZeroItemComponent  {

  constructor(
    public cdref:ChangeDetectorRef
  ) { }

  classPrefix = generateClassPrefix('WMLPanelItem')
  @Input('props') props: WMLPanelZeroItemProps = new WMLPanelZeroItemProps()
  @ViewChild("customPanel", {read:ViewContainerRef,static:true}) customPanel!:ViewContainerRef;
  @HostBinding('class') myClass!: string ;
  classList:Array<string> = []
  updateClassString = updateClassString(this,"myClass","classList")
  ngUnsub= new Subject<void>()

  initCpnt =()=>{
    addCustomComponent(
      this.customPanel,
      this.props.custom.cpnt,
      this.props.custom.props
    )
  }
  openPanel = ()=>{

    this.updateClassString(this.classPrefix(`View1`),"remove")
    this.updateClassString(this.classPrefix(`View0`))
    this.cdref.detectChanges()
  }
  listenForOpenCommand=()=>{
    return this.props.opened
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
    return this.props.closed
    .pipe(
      takeUntil(this.ngUnsub),
      filter((res)=>res===null),
      tap(this.closePanel)
    )

  }

  checkInitialState =()=>{
    if(this.props.state === "open"){
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



export class WMLPanelZeroItemProps {
  constructor(props:Partial<WMLPanelZeroItemProps>={}){
    Object.assign(
      this,
      {
        ...props
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
    cpnt:WMLSamplePanelItemComponent,
    props:new WMLSamplePanelItemProps({
      open:this.open,
      close:this.close
    })
  })
}


