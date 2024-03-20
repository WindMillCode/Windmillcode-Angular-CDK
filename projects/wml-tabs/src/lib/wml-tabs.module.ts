import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { WMLNGXTranslatePipe, WMLNGXTranslateMockPipe, WMLNGXTranslateLoader } from '@windmillcode/angular-wml-components-base';
import { WmlTabsComponent } from './wml-tabs/wml-tabs.component';
import { WmlTabBodyComponent } from './wml-tab-body/wml-tab-body.component';
import { WmlSampleTabBodyComponent } from './wml-sample-tab-body/wml-sample-tab-body.component';


let cpnts = [
  WmlTabsComponent,
  WmlTabBodyComponent,
  WmlSampleTabBodyComponent
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
export class WmlTabsNGXTranslateModule {

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
    WmlTabsNGXTranslateModule
  ]
})
export class WmlTabsModule {

}
