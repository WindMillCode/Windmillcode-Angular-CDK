// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, Input, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
// rxjs

import { fromEvent, Subject } from 'rxjs';
import { startWith, takeUntil, tap } from 'rxjs/operators';

// wml-components
import { WMLConstructorDecorator, WMLUIProperty, generateClassPrefix } from '@windmillcode/wml-components-base';
import { WMLAngularMotionUIProperty } from '@windmillcode/angular-wml-components-base';
import { WMLCarouselOneSlideProps } from '../wml-carousel-one-slide/wml-carousel-one-slide.component';
import { WMLCarouselOneControlProps } from '../wml-carousel-one-control/wml-carousel-one-control.component';

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
  @HostBinding('attr.id') myId?: string
  @ViewChild("controller", { read: ViewContainerRef, static: true }) controller!: ViewContainerRef
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
    this.props.controllerVCF = this.controller
    this.props.ngUnsub = this.ngUnsub
    this.props.controller.angular.cdref =this.props.cdref = this.cdref

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
  controllerVCF!: ViewContainerRef
  ngUnsub = new Subject<void>();
  cdref!: ChangeDetectorRef
  //

  id = ""
  setStateSubj = new Subject<WMLCarouselOneProps>()
  setState = (value) => {
    this.setStateSubj.next(value)
  }

  private slideWidth = ""
  private slideHeight = ""
  slideDistanceFromCenter = ""
  slideDistanceFromTop = ''

  slideContainer = new WMLUIProperty({
    style: {

    },
  })
  controller = new WMLAngularMotionUIProperty({
    // type: "transition",
    style: {
      height: "100%",

      animationDuration:".3s"
    },
    keyFrameStyles: {
      '0%': {

      },
      '100%': {

      }
    }
  })

  controls!:Array<WMLCarouselOneControlProps>


  slides: Array<WMLCarouselOneSlideProps> = Array(8)
    .fill(null)
    .map((nullVal, index0) => {
      let prop = new WMLCarouselOneSlideProps({})
      prop.custom.props.value = index0
      return prop
    })

  init = () => {

    this.controls ??= this.slides.map((slide, index) => {
      let prop = new WMLCarouselOneControlProps({

      })
      prop.custom.props.value = index+1
      return prop
    })
    window.resizeTo(1520, 364)
    this.listenForSlideContainerResize().subscribe()
  }

  listenForSlideContainerResize = () => {
    return fromEvent(window, "resize")
      .pipe(
        takeUntil(this.ngUnsub),
        startWith(null),
        tap(() => {
          const parentElement = this.controllerVCF.element.nativeElement;
          const parentWidth = parseFloat(getComputedStyle(parentElement).width.split("px")[0]);
          const parentHeight = parseFloat(getComputedStyle(parentElement).height.split("px")[0]);




          this.slideContainer.style.perspectiveOrigin = `50% ${-5}%`;
          // this.controller.style.transform =`rotateY(60deg)`

          this.slideHeight = this.calculateSlideHeight(parentWidth, parentHeight) + "px"
          this.slideWidth = this.calculateSlideWidth(parentWidth, parentHeight) + "px"
          this.slideDistanceFromCenter = this.calculateSlideDistanceFromCenter(parentWidth, parentHeight) + "px"
          this.slideDistanceFromTop = this.calculateSlideDistanceFromTop(parentWidth, parentHeight) + "px"
          this.slideDistanceFromCenter = this.calculateSlideDistanceFromCenter(parentWidth, parentHeight) + "px"
          this.slideContainer.style.perspective = this.calculatePerspective(parentWidth, parentHeight) + "px"

          // this.slideHeight = "1420.18214293px"
          // this.slideWidth = "650.078010500000001px"
          // this.slideDistanceFromCenter = "905.48578629000001px"
          // this.slideDistanceFromTop = '-258.70568163px'
          // // TODO pass 1536px you must increase the perspective to preserve the shape
          // this.slideContainer.style.perspective = `3500px`;

          const slideInfo = {
            slideHeight: this.slideHeight,
            slideWidth: this.slideWidth,
            slideDistanceFromCenter: this.slideDistanceFromCenter,
            slideDistanceFromTop: this.slideDistanceFromTop,
            perspective: this.slideContainer.style.perspective,
            parentWidth: parentWidth,
            parentHeight: parentHeight
          };

          // console.log(slideInfo);



          this.updateSlides();
        }),
        tap(() => {
          this.cdref.detectChanges()
        })
      )

  }

  getAngle = () => {
    return 360 / this.slides.length;
  }

  calculateSlideHeight = (parentWidth, parentHeight) => {
    const x = parentWidth / parentHeight;
    const y = 0.97 - 0.075 * Math.log(1 + x);
    const slideHeight = parentHeight * y;
    return slideHeight;
  }

  calculateSlideWidth(parentWidth, parentHeight) {
    var slideWidth = 0.33 * parentWidth + 0.02 * parentHeight - 15;
    // Ensure slideWidth is not less than the minimum observed value
    if (slideWidth < 15.078) {
      slideWidth = 15.078;
    }
    return slideWidth;
  }


  calculateSlideDistanceFromCenter(parentWidth, parentHeight) {
    const slideDistanceFromCenter = (0.4646 * parentWidth) + (0.0001 * parentHeight) + 4.0;
    return slideDistanceFromCenter;
  }

  calculateSlideDistanceFromTop(parentWidth, parentHeight) {
    const a = -0.005; // Coefficient for parentWidth
    const b = -0.06;  // Coefficient for parentHeight
    const c = 5;      // Intercept

    return a * parentWidth + b * parentHeight + c;
  }

  calculatePerspective(parentWidth, parentHeight) {
    // Modify // Adjust the interpolation factors based on the given data.
    const widthFactor = parentWidth / 1000;
    const heightFactor = parentHeight / 1000;

    // Calculate perspective based on width and height factors
    let perspective = 1000 * Math.max(widthFactor, heightFactor);

    // Return the calculated perspective, rounding to the nearest integer
    return Math.round(perspective);
  }

  updateSlides = () => {
    this.slides = this.slides.map((slide, index0) => {
      let angle = this.getAngle();
      slide.view.style.transform = `rotateY(${index0 * angle}deg) translateZ(${this.slideDistanceFromCenter}) translateY(${this.slideDistanceFromTop})`;
      slide.view.style.height = this.slideHeight;
      slide.view.style.width = this.slideWidth;
      return slide;
    });
  }


  prevSlideNumber = 0
  rotateToSlide = (slideNumber:number)=>{
    if(this.prevSlideNumber === slideNumber){
      return
    }
    let angle = this.getAngle();
    let diff = slideNumber - this.prevSlideNumber
    // Handle the wrap-around case in both directions
    let totalSlides = this.slides.length;
    if (diff > 0) {
      diff = diff > totalSlides / 2 ? diff - totalSlides : diff;
    } else {
      diff = -diff > totalSlides / 2 ? totalSlides + diff : diff;
    }

    let prevAngle = parseFloat(this.controller.keyFrameStyles["100%"].transform?.split("rotateY(")[1]?.split("deg)")[0]??"0")
    let newAngle = prevAngle - diff * angle

    this.controller.updateKeyFrames({
      "0%":{
        transform: this.controller.keyFrameStyles["100%"].transform ?? `rotateY(0deg)`
      },
      "100%":{
        transform:`rotateY(${newAngle}deg)`
      }
    })

    this.prevSlideNumber = slideNumber


    // this.controller.motionState ="closed"
    this.controller.openMotion()

  }
}
