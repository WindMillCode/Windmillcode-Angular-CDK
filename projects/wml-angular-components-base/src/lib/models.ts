import {  Type } from "@angular/core";
import { TranslateLoader } from "@ngx-translate/core";
import { Subject, of } from "rxjs";
import { WMLMotionUIProperty,WMLMotionUIPropertyState } from "@windmillcode/wml-components-base";


export class WMLAngularMotionUIProperty<V=any,T=any> extends WMLMotionUIProperty<V,T>{

  constructor(props:Partial<WMLAngularMotionUIProperty> = {}) {
    super({
      motionEndEvent: new Subject<WMLMotionUIPropertyState>(),
      motionKeyFrameEvent: new Subject<string>(),
      ...props
    });
  }

}


export class WMLAngularCustomComponent<C=any,P=any> {
  constructor(params: Partial<WMLAngularCustomComponent> = {}) {
    let origParams = Object.entries(params)
      .filter(([key,val]) => {
        return !key.startsWith('param');
      });
    Object.assign(this, { ...Object.fromEntries(origParams) });
  }

  cpnt!:Type<C>
  props!:P
}

export class WMLAngularModuleForRootProps {
  constructor(props:Partial<WMLAngularModuleForRootProps>={}){
    Object.assign(
      this,
      {
        ...props
      }
    )
  }

  ngxTranslateLoaderFactory = ()=> new WMLNGXTranslateLoader()
}

export class WMLNGXTranslateLoader implements TranslateLoader {
  constructor(
    private i18nLocation:(lang:string)=>any = (lang="en")=> undefined
  ) {}

  getTranslation(lang: string) {
    return of(this.i18nLocation(lang))
  }
}



