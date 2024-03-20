import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WmlOptionsComponent } from './wml-options/wml-options.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {  WmlOptionItemComponent } from './wml-option-item/wml-option-item.component';
import { WmlSampleOptionItemComponent } from './wml-sample-option-item/wml-sample-option-item.component';
import { WMLModuleForRootParams, WMLNGXTranslateLoader, WMLNGXTranslateMockPipe, WMLNGXTranslatePipe } from '@windmillcode/angular-wml-components-base';


let cpnts =[
  WmlOptionsComponent,
  WmlOptionItemComponent,
  WmlSampleOptionItemComponent
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
export class WmlOptionsNGXTranslateModule {

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
    WmlOptionsNGXTranslateModule
  ]
})
export class WmlOptionsModule {

}
