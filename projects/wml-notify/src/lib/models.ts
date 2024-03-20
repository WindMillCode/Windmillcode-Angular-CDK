import { WMLCustomComponent } from "@windmillcode/angular-wml-components-base";

export class WmlNotifyBarMsgConfig {
  [when: string]: string;
}

export enum WmlNotifyBarType { Error, Info, Success, Warning }

export class WmlNotifyBarMsg {
  messages?: WmlNotifyBarMsgConfig;
}


export class WmlNotifyBarModel {

  constructor(params:Partial<WmlNotifyBarModel>={}){
    Object.assign(
      this,
      {
        ...params
      }
    )
  }


  shouldDisplay:(notifications:Array<WmlNotifyBarModel>,target:WmlNotifyBarModel)=>boolean = (notifications,target)=> {
    let lastNotification = notifications[notifications.length-1]

    if(lastNotification?.type === target.type && lastNotification?.message === target.message){
      return false
    }

    return true

  };
  action?: boolean = false
  actionable?: boolean = true
  actionText?: string = "Learn More"
  autoHide?: boolean = false
  closed?: boolean = false
  closeable?: boolean = true
  hideDelay?: number = 3000
  hideOnHover?: boolean = false
  id: number = 0
  style:Partial<CSSStyleDeclaration> = {}
  msgtype:"default" | "custom" = "default"
  custom!:WMLCustomComponent
  message: string = "My message";
  type: WmlNotifyBarType = WmlNotifyBarType.Info ;
  typeValue?: string ='';
}


