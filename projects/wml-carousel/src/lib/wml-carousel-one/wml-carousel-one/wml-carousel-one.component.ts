// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding,  Input, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
// rxjs

import { fromEvent, Subject } from 'rxjs';
import { startWith, takeUntil, tap } from 'rxjs/operators';

// wml-components
import { WMLConstructorDecorator, WMLUIProperty, generateClassPrefix } from '@windmillcode/wml-components-base';
import { WMLAngularMotionUIProperty } from '@windmillcode/angular-wml-components-base';
import { WMLCarouselOneSlideProps } from '../wml-carousel-one-slide/wml-carousel-one-slide.component';

@Component({
  selector: 'wml-carousel-one',
  templateUrl: './wml-carousel-one.component.html',
  styleUrls: ['./wml-carousel-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class WMLCarouselOneComponent {

  constructor(
    public cdref: ChangeDetectorRef
  ) { }
  classPrefix = generateClassPrefix('WMLCarouselOne')
  @Input('props') props: WMLCarouselOneProps = new WMLCarouselOneProps()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  @HostBinding('attr.id') myId?:string
  @ViewChild("slideContainer",{read:ViewContainerRef,static:true}) slideContainer! :ViewContainerRef
  ngUnsub = new Subject<void>()

  listenForUpdate = () => {
    return this.props.setStateSubj
    .pipe(
      takeUntil(this.ngUnsub),
      tap((res?) => {
        this.props = new WMLCarouselOneProps({
          ...this.props,
          ...(res ?? this.props)
        })
        this.cdref.detectChanges()
      })
    )
  }

  ngAfterViewInit(): void {
    if (this.props.id) {
      this.myId = this.props.id
    }
    this.props.slideContainerVCF = this.slideContainer
    this.props.ngUnsub = this.ngUnsub
    this.cdref = this.cdref
    this.listenForUpdate().subscribe()
    this.props.init()
  }

  ngOnDestroy() {
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}

@WMLConstructorDecorator
export class WMLCarouselOneProps {
  constructor(props: Partial<WMLCarouselOneProps> = {}) { }

  // component proeprties
  slideContainerVCF!:ViewContainerRef
  ngUnsub = new Subject<void>();
  cdref!:ChangeDetectorRef
  //

  id = ""
  setStateSubj = new Subject<WMLCarouselOneProps>()
  setState = (value) => {
    this.setStateSubj.next(value)
  }

  slideWidth  = "23%"
  slideHeight = "33%"
  distanceFromCenter= "300px"

  slideContainer = new WMLUIProperty({
    style:{
      perspective:"1000px",
      perspectiveOrigin:"50% -95%"
    }
  })
  controller  = new WMLAngularMotionUIProperty({
    type:"transition",
    style:{
      height:"300px",
      border:"calc(1/10.6 * 1em) solid red"
    },
    keyFrameStyles: {
      '0%': {

      },
      '100%': {

      }
    }
  })


  slides:Array<WMLCarouselOneSlideProps> =Array(8)
  .fill(null)
  .map((nullVal,index0)=>{
    return new WMLCarouselOneSlideProps({
      view:new WMLUIProperty({

      })
    })
  })

  init= ()=>{


    this.listenForSlideContainerResize().subscribe()
  }

  listenForSlideContainerResize = ()=>{
    return fromEvent(window,"resize")
    .pipe(
      takeUntil(this.ngUnsub),
      startWith(null),
      tap(()=>{
        const parentElement = this.slideContainerVCF.element.nativeElement;
        const parentWidth =  parseFloat(getComputedStyle(parentElement).width.split("px")[0]);
        const parentHeight = parseFloat(getComputedStyle(parentElement).height.split("px")[0]);

        console.log(parentWidth)
        console.log(parentHeight)
        // this.slideWidth = `${Math.min(parentWidth * 0.2, parentHeight * 0.2)}px`;
        // this.slideHeight = `${Math.min(parentWidth * 0.3, parentHeight * 0.3)}px`;
        // this.distanceFromCenter = `${parentWidth / 3}px`;

        // this.slideContainer.style.perspective = `${parentWidth}px`;
        // this.slideContainer.style.perspectiveOrigin = `50% ${-90}px`;

        this.updateSlides();
      }),
      tap(()=>{
        this.cdref.detectChanges()
      })
    )

  }

  getAngle =()=> {
    return 360 / this.slides.length;
  }

  updateSlides = ()=> {
    this.slides = this.slides.map((slide, index0) => {
      let angle = this.getAngle();
      slide.view.style.transform = `rotateY(${index0 * angle}deg) translateZ(${this.distanceFromCenter})`;
      slide.view.style.height = this.slideHeight;
      slide.view.style.width = this.slideWidth;
      return slide;
    });
  }
}
