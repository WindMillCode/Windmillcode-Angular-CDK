//angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Inject, InjectionToken, Optional, Output } from '@angular/core';

// rxjs
import {  takeUntil, tap, timer,Subject } from 'rxjs';
import { WMLNotifyOneBarModel, WMLNotifyOneBarMsg, WMLNotifyOneBarType } from '../models';
import { WMLNotifyOneService } from './wml-notify-one.service';

// wml-components


export const NOTIFICATION_BAR_MESSAGES_CONFIG = new InjectionToken('notification-bar.messages.config');

@Component({

  selector: 'wml-notify-one',
  templateUrl:"./wml-notify-one.component.html",
  styleUrls: ["./wml-notify-one.component.scss"],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class WMLNotifyOneComponent  {

  notifications: WMLNotifyOneBarModel[] = [];
  @Output() closed = new EventEmitter<any>();
  @Output() action =  new EventEmitter<any>();
  ngUnsub = new Subject<void>();

  constructor(
    private cdref:ChangeDetectorRef,
    private notifyService: WMLNotifyOneService,
    @Inject(NOTIFICATION_BAR_MESSAGES_CONFIG) @Optional() private config?: WMLNotifyOneBarMsg,
  ) {}

  ngOnInit(){
    this.listenForNotifications().subscribe()
    this.listenToClearNotes().subscribe()
  }

  listenToClearNotes(){
    return this.notifyService.cleared
    .pipe(
      takeUntil(this.ngUnsub),
      tap(()=>{
        this.notifications = []
        this.cdref.detectChanges()
      })
    )

  }


  listenForNotifications(){
    return this.notifyService.created
    .pipe(
      takeUntil(this.ngUnsub),
      tap((bar)=>{
        this.addNotificationBar(bar)
      })
    )
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

  addNotificationBar=(notificationBar: WMLNotifyOneBarModel)=> {

    if(!notificationBar.shouldDisplay(this.notifications,notificationBar)){
      return
    }

    notificationBar.typeValue = WMLNotifyOneBarType[notificationBar.type].toLowerCase();

    if (this.config?.messages) {
      notificationBar.message = this.config.messages[notificationBar.message] || notificationBar.message;
    }
    this.notifications.push(notificationBar);
    this.cdref.detectChanges()

    timer(100)
    .pipe(
      takeUntil(this.ngUnsub),
      tap(()=>{
        notificationBar.style.top = "0"
        this.cdref.detectChanges()

      })
    )
    .subscribe()

    if (notificationBar.autoHide) {
      window.setTimeout(() => {
          this.hideNotification(notificationBar);
      }, notificationBar.hideDelay);
    }
  }

  hideNotification(notificationBar: WMLNotifyOneBarModel) {
    delete notificationBar.style.top
    notificationBar.closed = true
    this.cdref.detectChanges()

  }

  manageTransition($evt:Event,bar:WMLNotifyOneBarModel){
    $evt.stopImmediatePropagation()
    if(bar.closed){
      let index = this.notifications.indexOf(bar);
      this.notifications.splice(index, 1);
    }
  }

  hideOnHover(notificationBar: WMLNotifyOneBarModel) {
    if (notificationBar.hideOnHover) {
        this.hideNotification(notificationBar);
    }
  }

  onAction(notificationBar: WMLNotifyOneBarModel, index: number) {
    notificationBar.id = index;
    this.action.emit(notificationBar)
  }

  onClose(notificationBar: WMLNotifyOneBarModel, index: number) {
    if(!notificationBar.hideOnHover){
      return
    }
    notificationBar.id = index;
    this.hideNotification(notificationBar);
    this.closed.emit(notificationBar);
  }

}
