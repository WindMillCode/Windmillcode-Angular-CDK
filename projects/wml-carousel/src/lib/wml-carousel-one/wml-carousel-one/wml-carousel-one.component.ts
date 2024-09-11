// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit, Input, ViewEncapsulation } from '@angular/core';
// rxjs

import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

// wml-components
import { WMLConstructorDecorator, generateClassPrefix, generateIdPrefix } from '@windmillcode/wml-components-base';
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

  ngOnInit(): void {
    if (this.props.id) {
      this.myId = this.props.id
    }
    this.listenForUpdate().subscribe()
  }

  ngOnDestroy() {
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}

@WMLConstructorDecorator
export class WMLCarouselOneProps {
  constructor(props: Partial<WMLCarouselOneProps> = {}) { }
  id = ""
  setStateSubj = new Subject<WMLCarouselOneProps>()
  setState = (value) => {
    this.setStateSubj.next(value)
  }

  controller  = new WMLAngularMotionUIProperty({
    style:{
      height:"300px",
      border:"calc(1/10.6 * 1em) solid red"
    },
    keyFrameStyles: {
      '0%': {

      },
      '100%': {

      },
    }
  })

  slides:Array<WMLCarouselOneSlideProps> =Array(8)
  .fill(null)
  .map((nullVal,index0)=>{
    return new WMLCarouselOneSlideProps({

    })
  })
}
