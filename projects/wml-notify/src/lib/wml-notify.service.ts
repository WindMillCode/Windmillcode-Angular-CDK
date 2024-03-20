import { EventEmitter, Injectable } from '@angular/core';
import {WmlNotifyBarModel} from "./models";

@Injectable({
  providedIn: 'root'
})
export class WmlNotifyService {

  created = new EventEmitter<WmlNotifyBarModel>();
  cleared = new EventEmitter<void>();

  constructor() {}

  create(notificationBar: WmlNotifyBarModel) {
    this.created.emit(notificationBar);
  }

  clear(){
    this.cleared.emit();
  }
}
