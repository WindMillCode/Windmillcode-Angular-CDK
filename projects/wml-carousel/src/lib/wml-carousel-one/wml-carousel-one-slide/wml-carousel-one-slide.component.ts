// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding,  Input  , ViewEncapsulation, ViewChild, ViewContainerRef   } from '@angular/core';

// rxjs
import { Subject } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';

// wml-components
import { WMLConstructorDecorator, WMLCustomComponent, WMLMotionUIProperty, generateClassPrefix } from '@windmillcode/wml-components-base';
import { WMLCarouselOneSlideExampleComponent, WMLCarouselOneSlideExampleProps } from '../wml-carousel-one-slide-example/wml-carousel-one-slide-example.component';
import { addCustomComponent } from '@windmillcode/angular-wml-components-base';


// misc



@Component({
    selector: 'wml-carousel-one-slide',
    templateUrl: './wml-carousel-one-slide.component.html',
    styleUrls: ['./wml-carousel-one-slide.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class WMLCarouselOneSlideComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }

  classPrefix = generateClassPrefix('WMLCarouselOneSlide')
  @Input('props') props: WMLCarouselOneSlideProps = new WMLCarouselOneSlideProps()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  @HostBinding('attr.id') myId?:string
  ngUnsub= new Subject<void>()
  @ViewChild("customSlide",{read:ViewContainerRef}) customSlide;


  listenForUpdate = ()=>{
    return this.props.setStateSubj
    .pipe(
      takeUntil(this.ngUnsub),
      tap((res?)=>{
        this.props = new WMLCarouselOneSlideProps({
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
    this.props.slideViewContainerRef = this.customSlide
    this.props.init()
  }


  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}



@WMLConstructorDecorator
export class WMLCarouselOneSlideProps {
  constructor(props:Partial<WMLCarouselOneSlideProps>={}){ }

  id = ""
  custom = new WMLCustomComponent({
    cpnt:WMLCarouselOneSlideExampleComponent,
    props:new WMLCarouselOneSlideExampleProps()
  })
  setStateSubj = new Subject<WMLCarouselOneSlideProps>()
  setState = (value)=>{
    this.setStateSubj.next(value)
  }
  view = new WMLMotionUIProperty({

  })

  // component properties
  slideViewContainerRef!:ViewContainerRef
  //

  init=()=>{
    addCustomComponent(
      this.slideViewContainerRef,
      this.custom.cpnt,
      this.custom.props
    )
  }
}


