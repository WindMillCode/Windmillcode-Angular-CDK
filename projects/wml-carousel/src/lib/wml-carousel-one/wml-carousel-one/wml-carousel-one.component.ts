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
  @ViewChild("controller",{read:ViewContainerRef,static:true}) controller! :ViewContainerRef
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
    this.props.cdref = this.cdref
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
  controllerVCF!:ViewContainerRef
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
  slideDistanceFromCenter= "300px"
  slideDistanceFromTop='-53px'
  classPrefix = generateClassPrefix('WMLCarouselOne')

  slideContainer = new WMLUIProperty({
    style:{
      // perspective:"1000px",
      // perspectiveOrigin:"50% -95%"
    },
    class:this.classPrefix('Pod1')
  })
  controller  = new WMLAngularMotionUIProperty({
    type:"transition",
    class:this.classPrefix('Pod1Item0'),
    style:{
      height:"250px",
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
        class:this.classPrefix('Pod1Item1'),
      })
    })
  })

  init= ()=>{

    window.resizeTo(1520,364)
    this.listenForSlideContainerResize().subscribe()
  }

  listenForSlideContainerResize = ()=>{
    return fromEvent(window,"resize")
    .pipe(
      takeUntil(this.ngUnsub),
      startWith(null),
      tap(()=>{
        const parentElement = this.controllerVCF.element.nativeElement;
        const parentWidth =  parseFloat(getComputedStyle(parentElement).width.split("px")[0]);
        const parentHeight = parseFloat(getComputedStyle(parentElement).height.split("px")[0]);


        this.slideWidth = `${parentWidth * 0.315}px`;
        this.slideHeight = `${ parentHeight * 0.52}px`;
        this.slideDistanceFromCenter = `${parentWidth * .42}px`;


        this.slideContainer.style.perspectiveOrigin = `50% ${-5}%`;
        // this.controller.style.transform =`rotateY(60deg)`

        this.slideHeight =this.calculateSlideHeight(parentWidth, parentHeight)+"px"
        this.slideDistanceFromCenter = this.calculateSlideDistanceFromCenter(parentWidth, parentHeight)+"px"
        this.slideDistanceFromTop = this.calculateSlideDistanceFromTop(parentWidth, parentHeight)+"px"

        // this.slideHeight ="204px"
        // this.slideDistanceFromCenter ="153.82446px"
        // this.slideDistanceFromTop ='-20.226021999999997px'
        // TODO pass 1536px you must increase the perspective to preserve the shape
        this.slideContainer.style.perspective = `1000px`;

        console.log(`Slide Height ${this.slideHeight}`)
        // console.log(`Slide Width ${this.slideWidth}`)
        console.log(`Slide Distance from Center ${this.slideDistanceFromCenter}`)
        console.log(`Distance from top ${this.slideDistanceFromTop}`)
        console.warn(`Parent Width ${parentWidth}`)
        console.warn(`Parent Height ${parentHeight}`)


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

  calculateSlideHeight = (parentWidth, parentHeight)=> {
    // Slope and intercept calculated based on the provided data points
    const slope = -0.1121;
    const intercept = 241.548;

    // Calculate result based on the linear relationship
    const result = (parentWidth * slope) + intercept;

    return result;
  }

  calculateSlideDistanceFromCenter = (parentWidth, parentHeight)=> {
    const slope = 0.3887;      // Updated slope based on linear regression
    const intercept = 32.88;   // Updated intercept based on linear regression
    const result = (parentWidth * slope) + intercept;
    return result;
  }

  calculateSlideDistanceFromTop = (parentWidth, parentHeight)=> {
    const slopeWidth = -0.0489;      // Coefficient for parentWidth
    const slopeHeight = -0.0173;     // Coefficient for parentHeight
    const result = (parentWidth * slopeWidth) + (parentHeight * slopeHeight);
    return result;
  }



  updateSlides = ()=> {
    this.slides = this.slides.map((slide, index0) => {
      let angle = this.getAngle();
      slide.view.style.transform = `rotateY(${index0 * angle}deg) translateZ(${this.slideDistanceFromCenter }) translateY(${this.slideDistanceFromTop})`;
      slide.view.style.height = this.slideHeight;
      slide.view.style.width = this.slideWidth;
      return slide;
    });
  }
}
