// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';
// rxjs

import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

// wml-components
import { WMLConstructorDecorator, generateClassPrefix } from '@windmillcode/wml-components-base';

@Component({
    selector: 'wml-carousel-zero',
    templateUrl: './wml-carousel-zero.component.html',
    styleUrls: ['./wml-carousel-zero.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class WMLCarouselZeroComponent {

  constructor(public cdref: ChangeDetectorRef) { }
  classPrefix = generateClassPrefix('WMLCarouselZero')
  @Input('props') props: WMLCarouselZeroProps = new WMLCarouselZeroProps()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  @HostBinding('id') myId!: string
  ngUnsub = new Subject<void>()

  listenForUpdate = () => {
    return this.props.setStateSubj
      .pipe(
        takeUntil(this.ngUnsub),
        tap((res?) => {
          this.props = new WMLCarouselZeroProps({
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
export class WMLCarouselZeroProps {
  constructor(props: Partial<WMLCarouselZeroProps> = {}) { }
  id = ""
  setStateSubj = new Subject<WMLCarouselZeroProps>()
  setState = (value) => {
    this.setStateSubj.next(value)
  }
}
