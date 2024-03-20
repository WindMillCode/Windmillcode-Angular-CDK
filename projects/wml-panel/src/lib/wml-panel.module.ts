import { NgModule } from '@angular/core';
import { WmlPanelComponent } from './wml-panel/wml-panel.component';
import { WmlPanelItemComponent } from './wml-panel-item/wml-panel-item.component';
import { WmlSamplePanelItemComponent } from './wml-sample-panel-item/wml-sample-panel-item.component';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { WMLNGXTranslatePipe, WMLNGXTranslateMockPipe, WMLNGXTranslateLoader } from '@windmillcode/angular-wml-components-base';


let cpnts =[
    WmlPanelComponent,
    WmlPanelItemComponent,
    WmlSamplePanelItemComponent
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
export class WmlPanelNGXTranslateModule {

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
    WmlPanelNGXTranslateModule
  ]
})
export class WmlPanelModule {

}
