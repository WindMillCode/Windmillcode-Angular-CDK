// angular
import { ChangeDetectorRef, Component, HostBinding, Input, ViewContainerRef, ViewChild } from '@angular/core';
import { addCustomComponent } from '@windmillcode/angular-wml-components-base';

// rxjs
import { Subject } from 'rxjs';
import { WMLOptionZeroItemProps } from '../models';
import { generateClassPrefix } from '@windmillcode/wml-components-base';

// misc

@Component({
  selector: 'wml-options-zero-item',
  templateUrl: './wml-options-zero-item.component.html',
  styleUrls: ['./wml-options-zero-item.component.scss'],
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class WMLOptionsZeroItemComponent  {

  constructor(
    public cdref:ChangeDetectorRef,
  ) { }

  classPrefix = generateClassPrefix('WMLOptionItem')
  @HostBinding('attr.id') myId?:string
  @Input('props') props: WMLOptionZeroItemProps = new WMLOptionZeroItemProps()
  ngUnsub= new Subject<void>()
  @ViewChild("customOption", {read:ViewContainerRef,static:true}) customOption!:ViewContainerRef;

  ngOnInit(): void {
    addCustomComponent(
      this.customOption,
      this.props.customCpnt.cpnt,
      this.props.customCpnt.props
    )
    if(this.props.id){
      this.myId = this.props.id
    }
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}


