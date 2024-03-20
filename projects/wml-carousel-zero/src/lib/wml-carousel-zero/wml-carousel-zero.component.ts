// Angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit, Input, ViewEncapsulation } from '@angular/core';

// RxJS
import { ReplaySubject, Subject, interval, of } from 'rxjs';
import { concatMap, takeUntil, takeWhile, tap } from 'rxjs/operators';

// WML-components
import { generateClassPrefix } from '@windmillcode/angular-wml-components-base';
import { WMLCarouselZeroItemParams } from '../wml-carousel-zero-item/wml-carousel-zero-item.component';

@Component({
  selector: 'wml-carousel-zero',
  templateUrl: './wml-carousel-zero.component.html',
  styleUrls: ['./wml-carousel-zero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class WMLCarouselZeroComponent implements OnInit {
  constructor(
    public cdref: ChangeDetectorRef
  ) {}

  classPrefix = generateClassPrefix('WMLCarouselZero');
  @Input('params') params: WMLCarouselZeroParams = new WMLCarouselZeroParams();
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  @HostBinding('id') myId!: string;
  ngUnsub = new Subject<void>();

  ngOnInit(): void {
    this.myId = this.params.id;

  }

  ngOnDestroy() {
    this.ngUnsub.next();
    this.ngUnsub.complete();
  }
}

export type WMLCarouselZeroParamsMoveDirection<I extends WMLCarouselZeroItemParams> = Omit<WMLCarouselZeroParams<I>["direction"],"still">
export class WMLCarouselZeroParams<I extends WMLCarouselZeroItemParams =WMLCarouselZeroItemParams > {
  constructor(params: Partial<WMLCarouselZeroParams<I>> = {}) {
    let origParams = Object.entries(params).filter(([key, val]) => {
      return !key.startsWith('param');
    });
    Object.assign(this, { ...Object.fromEntries(origParams) });

    this.items.forEach((item,index0)=>{
      item.index = item.index ?? index0
    })
    this.listenForAutoPlay().subscribe()
    if(this.initAutoPlay){
      this.autoPlayResumeSubj.next(true)
    }
  }
  id = '';
  initAutoPlay = false
  autoPlayResumeSubj = new Subject<boolean>()
  private autoPlayPauseSubj  = new Subject<void>()
  beforeMoveToNextEvent = new ReplaySubject<void>(Infinity)
  afterMoveToNextEvent = new ReplaySubject<void>(Infinity)
  beforeMoveToPrevEvent = new ReplaySubject<void>(Infinity)
  afterMoveToPrevEvent = new ReplaySubject<void>(Infinity)
  beforeMoveToEvent = new ReplaySubject<WMLCarouselZeroParamsMoveDirection<I>>(Infinity)
  afterMoveToEvent = new ReplaySubject<WMLCarouselZeroParamsMoveDirection<I>>(Infinity)

  moveFinishedEvent = new ReplaySubject<void>(Infinity)
  ngUnsub = new Subject<void>();


  items: I[] = Array(5)
  .fill(null)
  .map((nullVal,index0)=>{
    return new WMLCarouselZeroItemParams() as I
  })
  autoPlayInterval=17000

  autoPlayDirection:WMLCarouselZeroParamsMoveDirection<I> ="next"
  direction: 'prev' | 'next' | 'still' = 'still';

  destroy() {
    this.ngUnsub.next();
    this.ngUnsub.complete();
  }

  listenForAutoPlay = ()=>{
    return this.autoPlayResumeSubj
    .pipe(
      takeUntil(this.ngUnsub),
      tap((play)=>{
        if(!play){
          this.autoPlayPauseSubj.next()
        }
        else{
          this.autoPlay().subscribe()
        }
      })
    )

  }

  autoPlay = ()=>{
    return interval(this.autoPlayInterval)
    .pipe(
      takeUntil(this.ngUnsub),
      takeUntil(this.autoPlayPauseSubj),
      tap(()=>{
        this.autoPlayDirection === "next"?
        this.moveToNext():this.moveToPrev()
      })
    )

  }

  moveToPrev() {
    if (this.direction !== 'still') {
      return;
    }

    this.beforeMoveToPrevEvent.next()
    let item = this.items.splice(
      this.items.length - 1,
      this.items.length
    )[0];
    this.items.unshift(item);

    this.direction = 'prev';
    this.afterMoveToPrevEvent.next()
    this.cleanup()
  }

  moveToNext() {
    if (this.direction !== 'still') {
      return;
    }

    this.beforeMoveToNextEvent.next()
    let item = this.items.shift();
    // @ts-ignore
    this.items.push(item);
    this.direction = 'next';
    this.afterMoveToNextEvent.next()
    this.cleanup()
  }

  moveTo(index:number,dir?:WMLCarouselZeroParamsMoveDirection<I>){
    if(index=== this.items[0].index){
      return
    }
    if(!dir){
      if(this.items[0].index > index){
        dir = "prev"
      }
      if(this.items[0].index < index){
        dir = "next"
      }
    }
    // @ts-ignore
    this.direction = dir
    this.beforeMoveToEvent.next(dir!)
    if(dir=="prev"){
      while (this.items[0].index !== index) {
        const lastItem = this.items.pop();
        // @ts-ignore
        this.items.unshift(lastItem);
      }
    }
    if(dir ==="next"){
      while (this.items[0].index !== index) {
        const firstItem = this.items.shift();
        // @ts-ignore
        this.items.push(firstItem);
      }
    }
    this.afterMoveToEvent.next(dir!)
    this.cleanup()
  }

  cleanup(){
    this.direction ="still"
    this.moveFinishedEvent.next()
  }

}
