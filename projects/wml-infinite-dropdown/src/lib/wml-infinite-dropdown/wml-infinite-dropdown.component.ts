// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit,  Input, ViewChild, ViewContainerRef, ViewEncapsulation   } from '@angular/core';
import { WMLCustomComponent, WMLUIProperty, generateClassPrefix } from '@windmillcode/angular-wml-components-base';




// rxjs
import { Subject } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';
import { WmlInfiniteDropdownParams, WmlInfiniteDropdownInputOptions } from '../models';

// misc



@Component({

  selector: 'wml-infinite-dropdown',
  templateUrl: './wml-infinite-dropdown.component.html',
  styleUrls: ['./wml-infinite-dropdown.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  encapsulation:ViewEncapsulation.None

})
export class WmlInfiniteDropdownComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }


  classPrefix = generateClassPrefix('WmlInfiniteDropdown')
  @Input('params') params: WmlInfiniteDropdownParams = new WmlInfiniteDropdownParams()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  @ViewChild("customItem", {read:ViewContainerRef,static:true}) customItem!:ViewContainerRef;
  ngUnsub= new Subject<void>()

  ngOnInit(): void {
    this.params.cdref = this.cdref
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }



}





