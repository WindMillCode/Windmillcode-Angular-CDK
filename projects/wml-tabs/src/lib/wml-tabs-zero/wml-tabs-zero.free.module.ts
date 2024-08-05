import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { WMLNGXTranslatePipe, WMLNGXTranslateMockPipe, WMLNGXTranslateLoader } from '@windmillcode/angular-wml-components-base';
import { WMLTabsZeroComponent } from './wml-tabs-zero/wml-tabs-zero.component';
import { WMLTabBodyComponent } from './wml-tabs-zero-body/wml-tabs-zero-body.component';
import { WMLSampleTabBodyComponent } from './wml-tabs-zero-body-example/wml-tabs-zero-body-example.component';

let cpnts = [
  WMLTabsZeroComponent,
  WMLTabBodyComponent,
  WMLSampleTabBodyComponent
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
export class WMLTabsZeroModule {

}

