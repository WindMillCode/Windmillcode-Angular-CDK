import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { WMLChipsZeroComponent } from './wml-chips-zero/wml-chips-zero.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { CommonModule } from '@angular/common';
import { WMLNGXTranslatePipe, WMLNGXTranslateMockPipe, WMLNGXTranslateLoader, WMLModuleForRootParams } from '@windmillcode/angular-wml-components-base';
import { WmlButtonZeroNGXTranslateModule } from '@windmillcode/angular-wml-button-zero';


let cpnts =[
  WMLChipsZeroComponent
]

@NgModule({
  declarations: [
    ...cpnts,
  ],
  imports: [
    WMLNGXTranslatePipe,
    CommonModule,
    ReactiveFormsModule,
    WmlButtonZeroNGXTranslateModule
  ],
  exports:[
    ...cpnts
  ],
  providers:[
    {provide: WMLNGXTranslatePipe,useValue: WMLNGXTranslateMockPipe}
  ],
})
export class WMLChipsZeroNGXTranslateModule {

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
    WMLChipsZeroNGXTranslateModule
  ]
})
export class WMLChipsZeroModule {

}
