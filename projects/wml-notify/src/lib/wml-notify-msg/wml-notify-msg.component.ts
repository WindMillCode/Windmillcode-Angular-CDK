// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, Input, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { addCustomComponent } from '@windmillcode/angular-wml-components-base';



// rxjs
import { Subject } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';

// misc
import { WmlNotifyBarModel } from '../models';




@Component({
  selector: 'wml-notify-msg',
  templateUrl: './wml-notify-msg.component.html',
  styleUrls: ['./wml-notify-msg.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush

})
export class WmlNotifyMsgComponent  {

  constructor(
    private cdref:ChangeDetectorRef,
  ) { }
  classPrefix = (val: string)=>{
    return "WmlNotifyMsg"+val
  }
  @Input('notify') notification!:WmlNotifyBarModel
  @ViewChild('customMsg',{read:ViewContainerRef}) customMsg!:ViewContainerRef;
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()

  ngAfterViewInit(): void {
    if(this.notification.msgtype === "custom"){

      addCustomComponent(
        this.customMsg,
        this.notification.custom.cpnt,
        this.notification.custom.meta
      )
      this.cdref.detectChanges()
    }
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}

