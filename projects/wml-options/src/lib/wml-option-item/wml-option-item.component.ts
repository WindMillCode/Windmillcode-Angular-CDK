// angular
import { ChangeDetectorRef, Component, HostBinding, Input, ViewContainerRef, ViewChild } from '@angular/core';
import { addCustomComponent, generateClassPrefix } from '@windmillcode/angular-wml-components-base';

// rxjs
import { Subject } from 'rxjs';
import { WMLOptionItemParams } from '../models';

// misc

@Component({
  selector: 'wml-option-item',
  templateUrl: './wml-option-item.component.html',
  styleUrls: ['./wml-option-item.component.scss'],
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class WmlOptionItemComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }


  classPrefix = generateClassPrefix('WmlOptionItem')

  @HostBinding('id') myId!:string
  @Input('params') params: WMLOptionItemParams = new WMLOptionItemParams()
  ngUnsub= new Subject<void>()
  @ViewChild("customOption", {read:ViewContainerRef,static:true}) customOption!:ViewContainerRef;

  ngOnInit(): void {
    addCustomComponent(
      this.customOption,
      this.params.customCpnt.cpnt,
      this.params.customCpnt.params
    )
    this.myId = this.params.id
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}


