// Angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit, Input, ViewEncapsulation } from '@angular/core';

// RxJS
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

// WML-components
import { generateClassPrefix } from '@windmillcode/angular-wml-components-base';

@Component({
  selector: 'wml-carousel-zero-sample-item',
  templateUrl: './wml-carousel-zero-sample-item.component.html',
  styleUrls: ['./wml-carousel-zero-sample-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class WMLCarouselZeroSampleItemComponent {

  constructor(
    public cdref: ChangeDetectorRef
  ) { }

  classPrefix = generateClassPrefix('WmlCarouselZeroSampleItem');

  @Input('params') params: WMLCarouselZeroSampleItemParams = new WMLCarouselZeroSampleItemParams();

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

export class WMLCarouselZeroSampleItemParams {
  constructor(params: Partial<WMLCarouselZeroSampleItemParams> = {}) {
    let origParams = Object.entries(params).filter(([key, val]) => {
      return !key.startsWith('param');
    });
    Object.assign(this, { ...Object.fromEntries(origParams) });
  }

  id = '';
}
