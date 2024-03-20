// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit,  Input   } from '@angular/core';
import { WMLUIProperty, updateClassString } from '@windmillcode/angular-wml-components-base';
import { WmlInfiniteDropdownParams } from '@windmillcode/angular-wml-infinite-dropdown';

// rxjs
import { BehaviorSubject, Subject, timer } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';

// misc



@Component({

  selector: 'wml-mobile-nav-zero',
  templateUrl: './wml-mobile-nav-zero.component.html',
  styleUrls: ['./wml-mobile-nav-zero.component.scss'],
  // changeDetection:ChangeDetectionStrategy.OnPush



})
export class WmlMobileNavZeroComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }

  generateClassPrefix(prefix:string) {
    return (val: string) => {
      return prefix + val
    }
  }
  classPrefix = this.generateClassPrefix('WmlMobileNavZero')

  @Input('params') params!: WmlMobileNavZeroParams
  @HostBinding('class') myClass!: string ;
  classList:Array<string> = []
  updateClassString = updateClassString(this,"myClass","classList")
  ngUnsub= new Subject<void>()

  open = (isInital=false)=>{
    this.updateClassString(this.classPrefix(`View1`),"remove")
    this.updateClassString(this.classPrefix(`View0`))
    ;[this.cdref,...this.params.cdrefArray]
    .map((cdref)=>{
      cdref.detectChanges()
    })
  }
  close =()=>{
    this.updateClassString(this.classPrefix(`View0`),"remove")
    this.updateClassString(this.classPrefix(`View1`))
    ;[this.cdref,...this.params.cdrefArray]
    .map((cdref)=>{
      cdref.detectChanges()
    })
  }

  listenForOpenCommand=()=>{
    return this.params.opened
    .pipe(
      // @ts-ignore
      takeUntil(this.ngUnsub),
      tap(this.open)
    )

  }
  listenForCloseCommand=()=>{
    return this.params.closed
    .pipe(
      takeUntil(this.ngUnsub),
      tap(this.close)
    )

  }

  checkInitialState =()=>{
    if(this.params.state === "open"){
      this.open()
    }

  }

  ngOnInit(): void {
    this.updateClassString(this.classPrefix(`View`))
    this.updateClassString(this.classPrefix(`View1`))
    this.checkInitialState()
    this.listenForOpenCommand().subscribe()
    this.listenForCloseCommand().subscribe()
  }



  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}

export class WmlMobileNavZeroOpenEventParams {
  constructor(params:Partial<WmlMobileNavZeroOpenEventParams>={}){
    Object.assign(
      this,
      {
        ...params
      }
    )
  }
  cdref!:ChangeDetectorRef
}
export class WmlMobileNavZeroParams extends WMLUIProperty {
  constructor(params:Partial<WmlMobileNavZeroParams>={}){
    super();
    this.init(params);
  }
  cdrefArray:Array<ChangeDetectorRef> =[]
  items:WmlInfiniteDropdownParams[]=Array(7)
  .fill(null)
  .map((nullVal,index0)=>{
    return new WmlInfiniteDropdownParams({
      items:[
        ["Home"],
        ["Account",["Login","Logout","Register"]],
        ["About"],
        ["Media", ["Blog", "Events", ["Online", "In-Person"], "Labs"]],
        ["Courses"],
        ["Pricing", ["Plans", "Store",["Products","Cart","Checkout"], "Donate"]],
        ["Contact Us"]
      ][index0]
    })
  })
  readonly opened = new Subject()
  readonly closed = new Subject()
  private _state:"open" |"closed" ="closed"
  private init = (params: Partial<WmlMobileNavZeroParams>)=> {
    Object.assign(
      this,
      {
        ...params
      }
    );
    this.items.forEach((dropdown) => {
      dropdown.options.map((item) => {
        if (item instanceof WmlInfiniteDropdownParams) {

          dropdown.openClass = "WmlInfiniteDropdownMainStates0";
        }
      });

    });
    if (params.isPresent) {
      this._state = "open";
    }
  }
  update = (params: Partial<WmlMobileNavZeroParams>)=>{
    this.init(params)
  }


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
}


