// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding,   Input, ViewChild, ViewContainerRef, ViewEncapsulation   } from '@angular/core';
import {  generateClassPrefix } from '@windmillcode/angular-wml-components-base';

// rxjs
import { Subject } from 'rxjs';
import { WMLInfiniteDropdownZeroProps } from '../models';

// misc
@Component({
  selector: 'wml-infinite-dropdown-zero',
  templateUrl: './wml-infinite-dropdown-zero.component.html',
  styleUrls: ['./wml-infinite-dropdown-zero.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  encapsulation:ViewEncapsulation.None
})
export class WMLInfiniteDropdownZeroComponent  {

  constructor(
    public cdref:ChangeDetectorRef,
  ) { }

  classPrefix = generateClassPrefix('WMLInfiniteDropdown')
  @Input('props') props: WMLInfiniteDropdownZeroProps = new WMLInfiniteDropdownZeroProps()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  @ViewChild("customItem", {read:ViewContainerRef,static:true}) customItem!:ViewContainerRef;
  ngUnsub= new Subject<void>()

  ngOnInit(): void {
    this.props.cdref = this.cdref
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}





