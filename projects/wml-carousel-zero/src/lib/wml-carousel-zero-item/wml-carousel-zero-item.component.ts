// Angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit, Input, ViewEncapsulation, ViewChild, ViewContainerRef } from '@angular/core';

// RxJS
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

// WML-components
import { WMLCustomComponent, addCustomComponent, generateClassPrefix } from '@windmillcode/angular-wml-components-base';
import { WMLCarouselZeroSampleItemComponent,WMLCarouselZeroSampleItemParams } from '../wml-carousel-zero-sample-item/wml-carousel-zero-sample-item.component';

@Component({
  selector: 'wml-carousel-zero-item',
  templateUrl: './wml-carousel-zero-item.component.html',
  styleUrls: ['./wml-carousel-zero-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class WMLCarouselZeroItemComponent {

  constructor(
    public cdref: ChangeDetectorRef
  ) { }

  classPrefix = generateClassPrefix('WmlCarouselZeroItem');

  @Input('params') params: WMLCarouselZeroItemParams = new WMLCarouselZeroItemParams();
  @ViewChild("customItem", {read:ViewContainerRef,static:true}) customItem!:ViewContainerRef;

  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  @HostBinding('id') myId!: string;
  ngUnsub = new Subject<void>();

  ngOnInit(): void {
    addCustomComponent(
      this.customItem,
      this.params.customCpnt.cpnt,
      this.params.customCpnt.params
    )
    this.myId = this.params.id;
  }

  ngOnDestroy() {
    this.ngUnsub.next();
    this.ngUnsub.complete();
  }
}

export class WMLCarouselZeroItemParams {
  constructor(params: Partial<WMLCarouselZeroItemParams> = {}) {
    let origParams = Object.entries(params).filter(([key, val]) => {
      return !key.startsWith('param');
    });
    Object.assign(this, { ...Object.fromEntries(origParams) });
    this.customCpnt.params.wmlCarouselZeroItem ={
      ...this,
      customCpnt:null
    }
  }

  id = '';
  index!:number
  get displayIndex(){
    return (this.index+1).toString()
  }

  customCpnt = new WMLCustomComponent<any,any>({
    cpnt:WMLCarouselZeroSampleItemComponent,
    params:new WMLCarouselZeroSampleItemParams()
  })
}
