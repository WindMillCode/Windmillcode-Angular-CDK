import { EventEmitter, Injectable } from '@angular/core';
import { WMLNotifyOneBarModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class WMLNotifyOneService {

  created = new EventEmitter<WMLNotifyOneBarModel>();
  cleared = new EventEmitter<void>();

  constructor() {}

  create(notificationBar: WMLNotifyOneBarModel) {
    this.created.emit(notificationBar);
  }

  clear(){
    this.cleared.emit();
  }
}
