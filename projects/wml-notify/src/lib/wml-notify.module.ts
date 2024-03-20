import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WmlNotifyComponent } from './wml-notify.component';
import { WmlNotifyMsgComponent } from './wml-notify-msg/wml-notify-msg.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { WMLNGXTranslatePipe, WMLNGXTranslateMockPipe, WMLNGXTranslateLoader } from '@windmillcode/angular-wml-components-base';


let cpnts = [
  WmlNotifyComponent,
  WmlNotifyMsgComponent
]


@NgModule({
  declarations: [
    ...cpnts,
  ],
  imports: [
    WMLNGXTranslatePipe,
    CommonModule,
  ],
  exports:[
    ...cpnts
  ],
  providers:[
    {provide: WMLNGXTranslatePipe,useValue: WMLNGXTranslateMockPipe}
  ],
})
export class WmlNotifyNGXTranslateModule {

}

@NgModule({
  imports: [
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {

        provide: TranslateLoader,
        useFactory: ()=> new WMLNGXTranslateLoader(),
      }
    }),
  ],
  exports:[
    WmlNotifyNGXTranslateModule
  ]
})
export class WmlNotifyModule {

}
