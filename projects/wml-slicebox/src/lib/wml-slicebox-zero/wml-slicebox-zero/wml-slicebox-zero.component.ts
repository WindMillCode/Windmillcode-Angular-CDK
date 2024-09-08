// angular
import {
  ChangeDetectionStrategy,ChangeDetectorRef,Component,ElementRef,HostBinding,Input,Renderer2,ViewChild,
} from '@angular/core';
import { WMLButtonOneProps } from '@windmillcode/angular-wml-button';
import {generateClassPrefix, selectRandomOptionFromArray,WMLImage,WMLUIProperty,} from '@windmillcode/wml-components-base';

// rxjs
import {combineLatest,debounceTime,filter,fromEvent,of,Subject,takeUntil,tap,timer,} from 'rxjs';

let retriveValueFromCSSUnit = (str: string) => {
  // @ts-ignore
  return parseFloat(str.match(/-?\d+/)[0]);
};
let updateClassString=(obj:any,myClassDefault:string,classListDefault:string)=>{

  return (val:string,type:"add"|"remove"="add")=>{
      let myClass=myClassDefault
      let classList=classListDefault
      if(type === "add"){
        obj[classList].push(val)
      }
      else if(type === "remove"){
        obj[classList] = (obj[classList])
        .filter((myClass: string)=>{
          return myClass !== val
        })
      }
      obj[myClass] = obj[classList]
      .reduce((acc: string,x: string,i: any)=>{
        return acc+ " " +  x
      },"")
    }
}

// misc

@Component({
  selector: 'wml-slicebox-zero',
  templateUrl: './wml-slicebox-zero.component.html',
  styleUrls: ['./wml-slicebox-zero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WMLSliceboxZeroComponent {
  constructor(
    public cdref: ChangeDetectorRef,
    public renderer2: Renderer2,
    public el: ElementRef
  ) {}


  classPrefix =generateClassPrefix('WMLSliceboxZero');
  targetPerspectiveComputedStyle!: CSSStyleDeclaration;
  @Input('props') props: WMLSliceboxZeroProps = new WMLSliceboxZeroProps() ;
  @ViewChild('targetPerspective') targetPerspective!: ElementRef;

  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub = new Subject<void>();
  perspective = new WMLUIProperty();
  // TODO possible development no way to pause transitions, may refactor to use animations
  togglePauseBtn = new WMLButtonOneProps({
    // @ts-ignore
    clickPredicate: () => {
      this.props._cuboids?.forEach((cuboid) => {
        cuboid.style.transition = 'none';
        cuboid.style.animationPlayState =
          cuboid.style.animationPlayState !== 'paused' ? 'paused' : 'running';
        // cuboid.style.animationPlayState = "paused"
      });
      this.cdref.detectChanges();
    },
  });

  cacheImages = () => {
    let savedImages$ = this.props.images.map((sliceboxImg) => {
      let image = new Image();
      image.crossOrigin = 'Anonymous';
      image.style.height = this.props.sliceboxSize.height + 'px';
      image.style.width = this.props.sliceboxSize.width + 'px';
      this.cdref.detectChanges();
      let savedImage$ = fromEvent(image, 'load').pipe(
        takeUntil(this.ngUnsub),
        tap((res) => {
          let canvas: HTMLCanvasElement =
            this.renderer2.createElement('canvas');
          let context = canvas.getContext('2d');
          canvas.height = this.props.sliceboxSize.height;
          canvas.width = this.props.sliceboxSize.width;
          context!.drawImage(image, 0, 0, canvas.width, canvas.height);
          sliceboxImg.cachedSrc = canvas.toDataURL('image/png');
        })
      );
      image.src = sliceboxImg.src;
      return savedImage$;
    });
    return combineLatest(savedImages$);
  };

  hostStyle =()=> getComputedStyle(this.el.nativeElement);
  updateCssVars = () => {
    this.el.nativeElement.style.setProperty(
      '--time-for-one-cuboid-rotation',
      this.props.speed / 1000 + 's'
    );
    this.el.nativeElement.style.setProperty(
      '--vertical-rotate',
      this.props.orientation === 'v' ? -1 : 0
    );
    this.el.nativeElement.style.setProperty(
      '--horizontal-rotate',
      this.props.orientation === 'h' ? -1 : 0
    );
    this.el.nativeElement.style.setProperty(
      '--reverse-deg-end',
      this.props.nextRotationDegree ??
        this.hostStyle().getPropertyValue('--reverse-deg-end')
    );
    this.el.nativeElement.style.setProperty(
      '--disperse-speed',
      this.props.disperseSpeed / 1000 + 's'
    );
    this.el.nativeElement.style.setProperty(
      '--animation-easing',
      this.props.easing
    );
    this.el.nativeElement.style.setProperty(
      '--side-background-color',
      this.props.colorHiddenSides
    );

    this.cdref.detectChanges();
  };

  setSliceBoxDims() {
    if (this.props.sliceboxSizeUseProvidedValues) {
      if (!this.props.sliceboxSize.height || !this.props.sliceboxSize.width) {
        throw new Error(
          'you have indicated that you want to use provided values for width and height for the size of the slicebox, please provide them in the sliceboxSize or set sliceboxSizeUseProvidedValues to false'
        );
      }
    } else {
      this.props.sliceboxSize.height = retriveValueFromCSSUnit(
        this.targetPerspectiveComputedStyle.getPropertyValue('height')
      );
      this.props.sliceboxSize.width = retriveValueFromCSSUnit(
        this.targetPerspectiveComputedStyle.getPropertyValue('width')
      );
    }
  }

  sliceBoxInit = () => {
    this.props.itemsCount = this.props.images.length;
    this.targetPerspectiveComputedStyle = getComputedStyle(
      this.targetPerspective.nativeElement
    );
    this.setSliceBoxDims();
    this.props.isReady = true;

    return this.startSlideShow();
  };

  stopSlideShowSubj =new Subject<void>()
  startSlideShow = () => {
    this.slideshowQueue.push("1")
    // @ts-ignore
    this.navigate(this.props.autoplay ? 'next':null);
  };
  waitToStartSlideShow =(delay?:number)=>{
    delay ??= this.props.interval

    return timer(delay)
    .pipe(
      takeUntil(this.ngUnsub),
      tap(()=>{
        this.startSlideShow()
      })
    )

  }
  slideshowQueue:any[] = []
  queueNewSlideShow =()=>{
    if(this.props.isFinishedResizing && !this.props.isAnimating){
      if(this.slideshowQueue.pop() === "1"){
        this.waitToStartSlideShow().subscribe()
      }
    }else{
      this.slideshowQueue.push("1")
    }
  }

  navigate = (dir: 'next' | 'prev' , jumpTo?: number | undefined) => {
    this.stopSlideShowSubj.next()
    if (
      this.checkIfSliceboxCanAnimate()
    ) {
      return;
    }

    this.props.prev.index = this.props.current.index;
    this.determineNextSlide(dir,jumpTo);
    this.setupCuboids();
    this.setupSlides();
  };

  setupCuboids = () => {
    let boxStyle: any = {
      width: this.props.sliceboxSize.width,
      height: this.props.sliceboxSize.height,
      perspective: this.props.perspective + 'px',
    };
    this.perspective.style = boxStyle;
    let config = {
      ...this.props,
      items: this.props.images,
      prev: this.props.prev,
      current: this.props.current,
      o: this.props.orientation,
      reverse:this.props._reverse
    };
    this.props._cuboids = Array(this.props.cuboidsCount)
      .fill(null)
      .map((nullVal, index0) => {
        let cuboid = new WMLSliceboxZeroCuboidProps({
          pos: index0,
          ...config,
        });
        this.setCuboidSize(cuboid);
        this.configureCuboidStyles(cuboid);
        return cuboid;
      });
    this.cdref.detectChanges();
  };

  setupSlides = () => {

      if(this.props.autoplay){
        this.props.isAnimating = true;
        this.rotateSlide("next");
      }
      else if(!this.props.autoplay) {
        this.props._cuboids.forEach((cuboid) => {
          this.setupImagesBeforeRotation(cuboid);
        });
      }

  };
  showImageCuboid = (cuboid: WMLSliceboxZeroCuboidProps, imgPos: number, cuboidSide: number) => {

    let sideIdx;
    let item = cuboid.images[imgPos];
    let imgParam = {
      'background-size':
        cuboid.sliceboxSize.width + 'px ' + cuboid.sliceboxSize.height + 'px',
      'background-image': 'url(' + item.cachedSrc + ')',
    };

    switch (cuboidSide) {
      case 1:
        sideIdx = 0;
        break;
      case 2:
        sideIdx = cuboid.o === 'v' ? 4 : 2;
        break;
      case 3:
        sideIdx = 1;
        break;
      case 4:
        sideIdx = cuboid.o === 'v' ? 5 : 3;
        break;
    }

    imgParam['background-position'] =
      cuboid.o === 'v'
        ? -(cuboid.pos * cuboid.size.width) + 'px 0px'
        : '0px -' + cuboid.pos * cuboid.size.height + 'px';

    let val: WMLUIProperty =
      cuboid[
        [
          'frontSide',
          'backSide',
          'rightSide',
          'leftSide',
          'topSide',
          'bottomSide',
        ][sideIdx]
      ];
    Object.assign(val.style, imgParam);
    // val.value = item.src
    this.cdref.detectChanges();
  };
  checkIfSliceboxCanAnimate =() =>{
    let result =!this.props.isFinishedResizing ||
      this.props.isAnimating ||
      !this.props.isReady ||
      this.props.itemsCount < 2;

    return result
  }
  determineNextRotation =(dir: WMLSliceboxZeroDirection)=>{
    if(dir === "prev") {
      this.el.nativeElement.style.setProperty(
        '--reverse-deg-end',
        this.props.prevRotationDegree
      );
    }
    else{
      this.el.nativeElement.style.setProperty(
        '--reverse-deg-end',
        this.props.nextRotationDegree
      );
    }
  }
  determineNextSlide( dir: WMLSliceboxZeroDirection,jumpTo?: number) {

    if (typeof jumpTo === "number") {
      this.props.current.index = jumpTo;
    }
    else if (dir === 'next') {
      this.props.current.index =
        this.props.current.index < this.props.itemsCount - 1
          ? this.props.current.index + 1
          : 0;
    }
    else if (dir === 'prev' ) {
    this.props.current.index =
      this.props.current.index > 0
        ? this.props.current.index - 1
        : this.props.itemsCount - 1;
      }
    this.determineNextRotation(dir)

  }

  updateDispersionPoints(cuboid: WMLSliceboxZeroCuboidProps,resizing=false) {
    cuboid.transitionStartTop = cuboid.style.top;
    cuboid.transitionStartLeft = cuboid.style.left;
    if(!resizing) {
      if (cuboid.o === 'h') {
        let base = retriveValueFromCSSUnit(cuboid.style.top as string);
        cuboid.style.top = cuboid.appliedDisperseFactor + base + 'px';
      } else if (cuboid.o === 'v') {
        let base = retriveValueFromCSSUnit(cuboid.style.left as string);
        cuboid.style.left = cuboid.appliedDisperseFactor + base + 'px';
      }
    }

  }

  rotateCuboid = (
    cuboid: WMLSliceboxZeroCuboidProps,
    oneScndBfrCallaback: { (): void; (arg0: number): void; },
    finishedCallback: { (pos: any): void; (arg0: number): void; },
    dir?:WMLSliceboxZeroDirection
  ) => {
    cuboid.isRotateComplete = false;
    cuboid.isInDispersion = true
    this.setupImagesBeforeRotation(cuboid,dir);


    timer(cuboid.sequentialFactor * cuboid.pos + 30)
      .pipe(
        takeUntil(this.ngUnsub),

        tap(() => {
          this.updateDispersionPoints(cuboid);

          cuboid.updateClassString('WMLSliceboxZeroPod1Rotate0');
          this.cdref.detectChanges();

          timer(cuboid.speed / 2)
            .pipe(
              takeUntil(this.ngUnsub),
              tap(() => {
                cuboid.isInDispersion = false
                cuboid.style.top = cuboid.transitionStartTop;
                cuboid.style.left = cuboid.transitionStartLeft;
                this.cdref.detectChanges();
              })
            )
            .subscribe();

          timer(cuboid.speed - cuboid.speed * 0.0761904761904762)
            .pipe(
              takeUntil(this.ngUnsub),

              tap((res) => {
                cuboid.isRotateComplete = true;
                oneScndBfrCallaback(cuboid.pos);
              })
            )
            .subscribe();

          timer(cuboid.speed)
            .pipe(
              takeUntil(this.ngUnsub),

              tap((res) => {
                finishedCallback(cuboid.pos);
              })
            )
            .subscribe();
        })
      )
      .subscribe();
  };
  rotateSlide=(dir:WMLSliceboxZeroDirection)=> {
    this.props._dir = dir
    this.props._cuboids
    .forEach((cuboid) => {
      this.rotateCuboid(
        cuboid,
        () => {
          // updates the frontface early for next transition
          this.showImageCuboid(cuboid, cuboid.current.index, 1);
          cuboid.updateClassString('WMLSliceboxZeroPod1Rotate0', 'remove');
        },
        (pos: number) => {
          if (pos === this.props.cuboidsCount - 1) {
            this.props.isAnimating = false;
            if(this.props.autoplay){
              this.queueNewSlideShow()
            }
            this.cdref.detectChanges();
          }
        },
        dir
      );
    });
  }
  setCuboidSize = (cuboid: WMLSliceboxZeroCuboidProps) => {
    cuboid.size = {
      width:
        cuboid.o === 'v'
          ? Math.floor(this.props.sliceboxSize.width / cuboid.cuboidsCount)
          : this.props.sliceboxSize.width,
      height:
        cuboid.o === 'v'
          ? this.props.sliceboxSize.height
          : Math.floor(this.props.sliceboxSize.height / cuboid.cuboidsCount),
    };
    // extra space to fix gaps
    cuboid.extra =
      cuboid.o === 'v'
        ? this.props.sliceboxSize.width -
          cuboid.size.width * cuboid.cuboidsCount
        : this.props.sliceboxSize.height -
          cuboid.size.height * cuboid.cuboidsCount;
  };

  setupImagesBeforeRotation(cuboid: WMLSliceboxZeroCuboidProps,dir?:WMLSliceboxZeroDirection) {

    this.showImageCuboid(cuboid, cuboid.prev.index, 1);
    if(dir){
      this.showImageCuboid(cuboid, cuboid.current.index, dir==="next" ?2 : 4);
    }
  }

  configureMainCuboidStyle(cuboid: WMLSliceboxZeroCuboidProps) {
    let middlepos = Math.ceil(cuboid.cuboidsCount / 2);

    let positionStyle =
      cuboid.pos < middlepos
        ? {
            zIndex: ((cuboid.pos + 1) * 100).toString(),
            left:
              (cuboid.o === 'v' ? cuboid.size.width * cuboid.pos : 0) + 'px',
            top:
              (cuboid.o === 'v' ? 0 : cuboid.size.height * cuboid.pos) + 'px',
          }
        : {
            zIndex: ((cuboid.cuboidsCount - cuboid.pos) * 100).toString(),
            left:
              (cuboid.o === 'v' ? cuboid.size.width * cuboid.pos : 0) + 'px',
            top:
              (cuboid.o === 'v' ? 0 : cuboid.size.height * cuboid.pos) + 'px',
          };

    cuboid.style = {
      ...positionStyle,
    };
    ['width', 'height'].forEach((val) => {
      cuboid.style[val] = cuboid.size[val] + 'px';
    });
    // how much cuboid cuboid is going to move (left or top values)
    cuboid.appliedDisperseFactor =
      cuboid.disperseFactor * (cuboid.pos + 1 - middlepos);
  }

  configureSideCuboidStyles(
    cuboid: WMLSliceboxZeroCuboidProps,
    updateDimsOnly = false
  ) {
    let rotationDirection = cuboid.reverse ? '' : '-'; //default negative
    let oppositeRotationDirection = cuboid.reverse ? '-' : ''; //default positive

    let measure: any =
      cuboid.o === 'v' ? cuboid.sliceboxSize.height : cuboid.sliceboxSize.width;

    cuboid.sidesStyles = {
      frontSide: {
        width:
          (cuboid.o === 'v'
            ? cuboid.size.width + cuboid.extra
            : cuboid.size.width) + 'px',
        height:
          (cuboid.o === 'v'
            ? cuboid.size.height
            : cuboid.size.height + cuboid.extra) + 'px',

        transform:
          'rotate3d( 0, 1, 0, 0deg ) translate3d( 0, 0, ' +
          measure / 2 +
          'px )',
      },
      backSide: {
        width: cuboid.size.width + 'px',
        height: cuboid.size.height + 'px',
        transform:
          'rotate3d( 0, 1, 0, ' +
          oppositeRotationDirection +
          '180deg ) translate3d( 0, 0, ' +
          measure / 2 +
          'px ) rotateZ( ' +
          oppositeRotationDirection +
          '180deg )',
      },
      rightSide: {
        width: measure + 'px',
        height:
          (cuboid.o === 'v'
            ? cuboid.size.height
            : cuboid.size.height + cuboid.extra) + 'px',
        left:
          (cuboid.o === 'v'
            ? cuboid.size.width / 2 - cuboid.size.height / 2
            : 0) + 'px',
        transform:
          'rotate3d( 0, 1, 0, ' +
          oppositeRotationDirection +
          '90deg ) translate3d( 0, 0, ' +
          cuboid.size.width / 2 +
          'px )',
      },
      leftSide: {
        width: measure + 'px',
        height:
          (cuboid.o === 'v'
            ? cuboid.size.height
            : cuboid.size.height + cuboid.extra) + 'px',
        left:
          (cuboid.o === 'v'
            ? cuboid.size.width / 2 - cuboid.size.height / 2
            : 0) + 'px',

        transform:
          'rotate3d( 0, 1, 0, ' +
          rotationDirection +
          '90deg ) translate3d( 0, 0, ' +
          cuboid.size.width / 2 +
          'px )',
      },
      topSide: {
        width:
          (cuboid.o === 'v'
            ? cuboid.size.width + cuboid.extra
            : cuboid.size.width) + 'px',
        top:
          (cuboid.o === 'v'
            ? 0
            : cuboid.size.height / 2 - cuboid.size.width / 2) + 'px',
        height: measure + 'px',

        transform:
          'rotate3d( 1, 0, 0, ' +
          oppositeRotationDirection +
          '90deg ) translate3d( 0, 0, ' +
          cuboid.size.height / 2 +
          'px )',
      },
      bottomSide: {
        width:
          (cuboid.o === 'v'
            ? cuboid.size.width + cuboid.extra
            : cuboid.size.width) + 'px',
        top:
          (cuboid.o === 'v'
            ? 0
            : cuboid.size.height / 2 - cuboid.size.width / 2) + 'px',
        height: measure + 'px',
        transform:
          'rotate3d( 1, 0, 0, ' +
          rotationDirection +
          '90deg ) translate3d( 0, 0, ' +
          cuboid.size.height / 2 +
          'px )',
      },
    };

    [
      'frontSide',
      'backSide',
      'rightSide',
      'leftSide',
      'topSide',
      'bottomSide',
    ].forEach((otherVal) => {
      if (updateDimsOnly) {
        delete cuboid.sidesStyles[otherVal].transform;
      }
      let myVal = cuboid[otherVal];
      Object.assign(myVal.style, cuboid.sidesStyles[otherVal]);
    });
  }

  configureCuboidStyles = (cuboid: WMLSliceboxZeroCuboidProps) => {
    this.configureMainCuboidStyle(cuboid);
    this.configureSideCuboidStyles(cuboid);
  };

  finishResizing  =($event:TransitionEvent ,cuboid:WMLSliceboxZeroCuboidProps)=>{

    if(
      ["width","height"].includes($event.propertyName) &&
      cuboid.cuboidsCount=== cuboid.pos+1 &&
      ($event.elapsedTime > 1 || !this.props.isFinishedResizing)
    ){
      this.props.isFinishedResizing = true;
      if(this.props.autoplay  ){
        this.queueNewSlideShow()
      }
      this.cdref.detectChanges();
    }
  }

  updateSliceboxOnResize = () => {
    return fromEvent(window, 'resize').pipe(
      takeUntil(this.ngUnsub),
      debounceTime(this.props.resizeDelay),
      tap(() => {
        this.props.isFinishedResizing = false
        this.setSliceBoxDims();
        let boxStyle: any = {
          width: this.props.sliceboxSize.width,
          height: this.props.sliceboxSize.height,
          perspective: this.props.perspective + 'px',
        };
        this.perspective.style = boxStyle;
        this.props._cuboids.forEach((cuboid,index0) => {

          this.setCuboidSize(cuboid);
          this.configureMainCuboidStyle(cuboid);
          this.configureSideCuboidStyles(cuboid);
          if (!cuboid.isRotateComplete) {
            this.setupImagesBeforeRotation(cuboid,this.props._dir)
          } else {
            this.showImageCuboid(cuboid, cuboid.current.index, 1);
          }
          if(cuboid.isInDispersion){

            this.updateDispersionPoints(cuboid,true);

          }

        });
        this.cdref.detectChanges();
        // this.firstInit()
      })
    );
  };

  firstInit = () => {
    this.updateCssVars();
    this.updateSliceboxOnResize().subscribe();
    this.cacheImages()
      .pipe(

        takeUntil(this.ngUnsub),
        tap(() => {
          this.sliceBoxInit();
        })
      )
      .subscribe();
  };

  listenForJumpToSlideSubj = ()=>{
    return this.props.jumpToSlideSubj
    .pipe(
      takeUntil(this.ngUnsub),
      filter((index)=>{return index !== this.props.current.index}),
      filter(()=>!this.checkIfSliceboxCanAnimate()),
      tap((index)=>{
        let dir:WMLSliceboxZeroDirection =  index  > this.props.current.index ? "next" :"prev"
        this.props.isAnimating =true
        this.determineNextSlide(dir,index)
        this.rotateSlide(dir);
      })
    )
  }

  // TODO implement this mabye
  listenForToggleAutoPlaySubj = ()=>{
    return of([])
    // return this.props.toggleAutoPlaySubj
    // .pipe(
    //   takeUntil(this.ngUnsub),
    //   filter(()=>!this.checkIfSliceboxCanAnimate()),
    //   tap(()=>{
    //     console.log("fire3")
    //   })
    // )
  }

  listenForMoveToPrevSubj = ()=>{
    return this.props.moveToPrevSlideSubj
    .pipe(
      takeUntil(this.ngUnsub),
      filter(()=>!this.checkIfSliceboxCanAnimate()),
      tap(()=>{
        let dir:WMLSliceboxZeroDirection = "prev"
        this.props.isAnimating =true
        this.determineNextSlide(dir)
        this.rotateSlide(dir);
      })
    )
  }


  listenForMoveToNextSubj = ()=>{
    return this.props.moveToNextSlideSubj
    .pipe(
      takeUntil(this.ngUnsub),
      filter(()=>!this.checkIfSliceboxCanAnimate()),
      tap(()=>{
        let dir:WMLSliceboxZeroDirection = "next"
        this.props.isAnimating =true
        this.determineNextSlide(dir)
        this.rotateSlide(dir);
      })
    )
  }


  ngAfterViewInit(): void {
    this.firstInit();
    this.listenForMoveToNextSubj().subscribe()
    this.listenForToggleAutoPlaySubj().subscribe()
    this.listenForMoveToPrevSubj().subscribe()
    this.listenForJumpToSlideSubj().subscribe()

  }

  ngOnDestroy() {
    this.ngUnsub.next();
    this.ngUnsub.complete();
  }
}

class WMLSliceboxZeroDefaults {
  constructor() {
    this.disperseSpeed = this.disperseSpeed ?? this.speed;
  }

  prev = {
    index: 0,
  };
  current = {
    index: 0,
  };
  sliceboxSize!: {
    height?: number;
    width?: number;
  };
  sliceboxSizeUseProvidedValues: boolean = false;
  orientation: 'v' | 'h' = 'v';
  perspective = 10000;
  interval = 3000;
  cuboidsCount = 9;
  disperseFactor = 40;
  disperseSpeed:number=4000;
  colorHiddenSides = '#222';
  sequentialFactor = 350;
  speed = 15660;
  easing = 'ease-out';
  autoplay = true;
  nextRotationDegree?: string;
  prevRotationDegree?:string;

  onBeforeChange = function (position: any) {};
  onAfterChange = function (position: any) {};
  onReady = function () {};

  reverse = false;
  images: WMLSliceboxZeroImg[] =
  Array(7)
  .fill(null)
  .map((imgSrc, index0) => {

    let img = new WMLSliceboxZeroImg({
      src:selectRandomOptionFromArray([
        "https://loremflickr.com/640/480/nature",
        "https://loremflickr.com/640/480/food",
        "https://loremflickr.com/640/480/business",
        "https://loremflickr.com/640/480/cats",

       ]),
      value: index0.toString(),
    });


    return img;
  });

}

export class WMLSliceboxZeroProps extends WMLSliceboxZeroDefaults {
  constructor(props: Partial<WMLSliceboxZeroProps> = {}) {
    super();
    Object.assign(this, {
      ...props,
    });
    this._reverse = this.reverse

    this.nextRotationDegree = this.nextRotationDegree ?? (this._reverse ? '-90deg' : '90deg')

    let degree:any=this.nextRotationDegree
    degree = retriveValueFromCSSUnit(degree)

    degree *= -1
    degree +="deg"
    this.prevRotationDegree = this.prevRotationDegree ?? degree
  }

  _reverse :boolean
  override sliceboxSize = {
    height: 500,
    width: 500,
  };
  _dir!:WMLSliceboxZeroDirection
  resizeDelay = 10
  isAnimating = false;
  isFinishedResizing =true
  isReady = false;
  itemsCount!: number;
  _cuboids!: WMLSliceboxZeroCuboidProps[];
  moveToNextSlideSubj = new Subject<void>()
  moveToPrevSlideSubj = new Subject<void>()
  jumpToSlideSubj = new Subject<number>()
  // TODO mabye implemnt
  // toggleAutoPlaySubj = new Subject<boolean |void>()

}

class WMLSliceboxZeroCuboidProps extends WMLSliceboxZeroDefaults {
  constructor(props: Partial<WMLSliceboxZeroCuboidProps> = {}) {
    super();
    Object.assign(this, {
      ...props,
    });
  }

  transitionStartTop: string | undefined;
  transitionStartLeft: string | undefined;
  appliedDisperseFactor!:number
  class = '';
  classes = [];
  // updateClassString:any=()=>{}
  updateClassString = updateClassString(this, 'class', 'classes');
  size!: {
    width: number;
    height: number;
  };
  side = 1;
  pos!: number;
  extra!: number;
  style!: Partial<CSSStyleDeclaration>;
  isRotateComplete = false;
  isInDispersion = false
  sidesStyles!: { [k: string]: Partial<CSSStyleDeclaration> };
  o!: WMLSliceboxZeroProps['orientation'];
  direction!: 'next' | 'prev';
  frontSide = new WMLUIProperty();
  backSide = new WMLUIProperty();
  rightSide = new WMLUIProperty();
  leftSide = new WMLUIProperty();
  topSide = new WMLUIProperty();
  bottomSide = new WMLUIProperty();
}

export class WMLSliceboxZeroImg extends WMLImage {
  constructor(props: Partial<WMLSliceboxZeroImg> = {}) {
    super(props);
    Object.assign(this, {
      ...props,
    });
  }

  // TODO allow developer to specific rotation for each string
  rotationDegree!:string
  cachedSrc!: string;
}


type WMLSliceboxZeroDirection = "next" |"prev"
