// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { addCustomComponent } from '@windmillcode/angular-wml-components-base';



// rxjs
import { Subject } from 'rxjs';
import { WMLNotifyOneBarModel } from '../models';

// misc




@Component({
  selector: 'wml-notify-one-msg',
  templateUrl: './wml-notify-one-msg.component.html',
  styleUrls: ['./wml-notify-one-msg.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush

})
export class WMLNotifyOneMsgComponent  {

  constructor(
    private cdref:ChangeDetectorRef,
  ) { }
  classPrefix = (val: string)=>{
    return "WMLNotifyOneMsg"+val
  }
  @Input('notify') notification!:WMLNotifyOneBarModel
  @ViewChild('customMsg',{read:ViewContainerRef}) customMsg!:ViewContainerRef;
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()

  ngAfterViewInit(): void {
    if(this.notification.msgtype === "custom"){

      addCustomComponent(
        this.customMsg,
        this.notification.custom.cpnt,
        this.notification.custom.props
      )
      this.cdref.detectChanges()
    }
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}

