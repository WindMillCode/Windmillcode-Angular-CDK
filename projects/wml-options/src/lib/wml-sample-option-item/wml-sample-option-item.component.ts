// angular
import { ChangeDetectorRef, Component, HostBinding, Input } from '@angular/core';
// rxjs
import { Subject } from 'rxjs';
import { WmlSampleOptionItemParams } from '../models';
import { generateClassPrefix } from '@windmillcode/angular-wml-components-base';

// misc
@Component({
  selector: 'wml-sample-option-item',
  templateUrl: './wml-sample-option-item.component.html',
  styleUrls: ['./wml-sample-option-item.component.scss'],
})
export class WmlSampleOptionItemComponent  {
  constructor(
    public cdref: ChangeDetectorRef,
  ) { }

  classPrefix = generateClassPrefix('WmlSampleOptionItem')
  @Input('params') params = new WmlSampleOptionItemParams()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()

  ngOnInit(): void {
    this.params.wmlOptionItem.toggleClass = this.classPrefix('MainBtn1')
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }
}
