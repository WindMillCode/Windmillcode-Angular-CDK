import { WMLCustomComponent } from "@windmillcode/angular-wml-components-base";

export class WMLNotifyOneBarMsgConfig {
  [when: string]: string;
}

export enum WMLNotifyOneBarType { Error, Info, Success, Warning }

export class WMLNotifyOneBarMsg {
  messages?: WMLNotifyOneBarMsgConfig;
}


export class WMLNotifyOneBarModel {

  constructor(props:Partial<WMLNotifyOneBarModel>={}){
    Object.assign(
      this,
      {
        ...props
      }
    )
  }


  shouldDisplay:(notifications:Array<WMLNotifyOneBarModel>,target:WMLNotifyOneBarModel)=>boolean = (notifications,target)=> {
    let lastNotification = notifications[notifications.length-1]

    if(lastNotification?.type === target.type && lastNotification?.message === target.message){
      return false
    }

    return true

  };
  // action?: boolean = false
  // actionable?: boolean = true
  // actionText?: string = "Learn More"
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
  type: WMLNotifyOneBarType = WMLNotifyOneBarType.Info ;
  typeValue?: string ='';
}


