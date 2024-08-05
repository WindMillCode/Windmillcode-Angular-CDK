// angular
import { ChangeDetectorRef, Component, HostBinding,  Input   } from '@angular/core';
import { WMLUIProperty, generateClassPrefix, updateClassString } from '@windmillcode/angular-wml-components-base';
import { WMLInfiniteDropdownZeroProps } from '@windmillcode/angular-wml-infinite-dropdown';

// rxjs
import { Subject } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';

// misc
@Component({
  selector: 'wml-mobile-nav-zero',
  templateUrl: './wml-mobile-nav-zero.component.html',
  styleUrls: ['./wml-mobile-nav-zero.component.scss'],
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class WMLMobileNavZeroComponent  {

  constructor(
    public cdref:ChangeDetectorRef,
  ) { }

  classPrefix = generateClassPrefix('WMLMobileNavZero')
  @Input('props') props: WMLMobileNavZeroProps = new WMLMobileNavZeroProps()
  @HostBinding('class') myClass!: string ;
  classList:Array<string> = []
  updateClassString = updateClassString(this,"myClass","classList")
  ngUnsub= new Subject<void>()

  open = (isInital=false)=>{
    this.updateClassString(this.classPrefix(`View1`),"remove")
    this.updateClassString(this.classPrefix(`View0`))
    ;[this.cdref,...this.props.cdrefArray]
    .map((cdref)=>{
      cdref.detectChanges()
    })
  }
  close =()=>{
    this.updateClassString(this.classPrefix(`View0`),"remove")
    this.updateClassString(this.classPrefix(`View1`))
    ;[this.cdref,...this.props.cdrefArray]
    .map((cdref)=>{
      cdref.detectChanges()
    })
  }

  listenForOpenCommand=()=>{
    return this.props.opened
    .pipe(
      // @ts-ignore
      takeUntil(this.ngUnsub),
      tap(this.open)
    )

  }
  listenForCloseCommand=()=>{
    return this.props.closed
    .pipe(
      takeUntil(this.ngUnsub),
      tap(this.close)
    )

  }

  checkInitialState =()=>{
    if(this.props.state === "open"){
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

export class WMLMobileNavZeroOpenEventProps {
  constructor(props:Partial<WMLMobileNavZeroOpenEventProps>={}){
    Object.assign(
      this,
      {
        ...props
      }
    )
  }
  cdref!:ChangeDetectorRef
}
export class WMLMobileNavZeroProps extends WMLUIProperty {
  constructor(props:Partial<WMLMobileNavZeroProps>={}){
    super();
    this.init(props);
  }
  cdrefArray:Array<ChangeDetectorRef> =[]
  items:WMLInfiniteDropdownZeroProps[]=Array(7)
  .fill(null)
  .map((nullVal,index0)=>{
    return new WMLInfiniteDropdownZeroProps({
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
  private init = (props: Partial<WMLMobileNavZeroProps>)=> {
    Object.assign(
      this,
      {
        ...props
      }
    );
    this.items =this.items.map((dropdown) => {
      if(!(dropdown instanceof WMLInfiniteDropdownZeroProps)){
        dropdown =new WMLInfiniteDropdownZeroProps({
          // @ts-ignore
          items: Array.isArray(dropdown)? dropdown:[dropdown]
        })
      }
      else{
        dropdown.options.map((item) => {
          if (item instanceof WMLInfiniteDropdownZeroProps) {

            dropdown.openClass = "WMLInfiniteDropdownMainStates0";
          }
        });
      }
      return dropdown

    });
    if (props.isPresent) {
      this._state = "open";
    }
  }
  update = (props: Partial<WMLMobileNavZeroProps>)=>{
    this.init(props)
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


