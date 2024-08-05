import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { WMLNGXTranslatePipe, WMLNGXTranslateMockPipe, WMLNGXTranslateLoader } from '@windmillcode/angular-wml-components-base';
import { WMLNotifyOneMsgComponent } from './wml-notify-one-msg/wml-notify-one-msg.component';
import { WMLNotifyOneComponent } from './wml-notify-one/wml-notify-one.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';


let cpnts = [
  WMLNotifyOneComponent,
  WMLNotifyOneMsgComponent
]


@NgModule({
  declarations: [
    ...cpnts,
  ],
  imports: [
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {

        provide: TranslateLoader,
        useFactory: ()=> new WMLNGXTranslateLoader(),
      }
    }),
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
export class WMLNotifyOneModule {

}


