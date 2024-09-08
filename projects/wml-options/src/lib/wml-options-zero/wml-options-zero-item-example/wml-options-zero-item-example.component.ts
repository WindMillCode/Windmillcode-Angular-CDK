// angular
import { ChangeDetectorRef, Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';
// rxjs
import { Subject } from 'rxjs';
import { WMLOptionsZeroItemExampleProps } from '../models';
import { generateClassPrefix } from '@windmillcode/wml-components-base';

// misc
@Component({
  selector: 'wml-options-zero-item-example',
  templateUrl: './wml-options-zero-item-example.component.html',
  styleUrls: ['./wml-options-zero-item-example.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class WMLOptionsZeroItemExampleComponent  {
  constructor(
    public cdref: ChangeDetectorRef,
  ) { }

  classPrefix = generateClassPrefix('WMLSampleOptionItem')
  @Input('props') props = new WMLOptionsZeroItemExampleProps()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()

  ngOnInit(): void {
    this.props.wmlOptionItem.toggleClass = this.classPrefix('MainBtn1')
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }
}
