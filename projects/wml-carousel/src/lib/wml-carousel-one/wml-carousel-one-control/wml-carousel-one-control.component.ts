// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding,  Input  , ViewEncapsulation, ViewContainerRef, ViewChild   } from '@angular/core';



// rxjs
import { Subject } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';

// wml-components
import { WMLConstructorDecorator, WMLCustomComponent, WMLMotionUIProperty, generateClassPrefix } from '@windmillcode/wml-components-base';
import { WMLCarouselOneControlExampleComponent, WMLCarouselOneControlExampleProps } from '../wml-carousel-one-control-example/wml-carousel-one-control-example.component';
import { addCustomComponent } from '@windmillcode/angular-wml-components-base';


// misc



@Component({
    selector: 'wml-carousel-one-control',
    templateUrl: './wml-carousel-one-control.component.html',
    styleUrls: ['./wml-carousel-one-control.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class WMLCarouselOneControlComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }

  classPrefix = generateClassPrefix('WMLCarouselOneControl')
  @Input('props') props: WMLCarouselOneControlProps = new WMLCarouselOneControlProps()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  @HostBinding('attr.id') myId?:string
  ngUnsub= new Subject<void>()
  @ViewChild("customControl",{read:ViewContainerRef}) customControl;


  listenForUpdate = ()=>{
    return this.props.setStateSubj
    .pipe(
      takeUntil(this.ngUnsub),
      tap((res?)=>{
        this.props = new WMLCarouselOneControlProps({
          ...this.props,
          ...(res ?? this.props)
        })
        this.cdref.detectChanges()
      })
    )
  }


  ngOnInit(): void {

    if(this.props.id){
      this.myId = this.props.id
    }


    this.listenForUpdate().subscribe()

  }

  ngAfterViewInit(){
    this.props.controlViewContainerRef = this.customControl
    this.props.init()
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}

@WMLConstructorDecorator
export class WMLCarouselOneControlProps {
  constructor(props:Partial<WMLCarouselOneControlProps>={}){ }

  id = ""

  setStateSubj = new Subject<WMLCarouselOneControlProps>()
  setState = (value)=>{
    this.setStateSubj.next(value)
  }

  custom = new WMLCustomComponent({
    cpnt:WMLCarouselOneControlExampleComponent,
    props:new WMLCarouselOneControlExampleProps()
  })

  view = new WMLMotionUIProperty({

  })

  // component properties
  controlViewContainerRef!:ViewContainerRef
  //

  init=()=>{
    addCustomComponent(
      this.controlViewContainerRef,
      this.custom.cpnt,
      this.custom.props
    )
  }
}


