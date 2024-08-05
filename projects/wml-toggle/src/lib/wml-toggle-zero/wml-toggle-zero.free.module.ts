import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { WMLToggleZeroComponent } from './wml-toggle-zero/wml-toggle-zero.component';
import { CommonModule } from '@angular/common';
import {  WMLNGXTranslateLoader, WMLNGXTranslateMockPipe, WMLNGXTranslatePipe } from '@windmillcode/angular-wml-components-base';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

let cpnts= [
  WMLToggleZeroComponent,
  WMLToggleZeroComponent
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
    ReactiveFormsModule,
  ],
  exports:[
    ...cpnts
  ],
  providers:[
    {provide: WMLNGXTranslatePipe,useValue: WMLNGXTranslateMockPipe}
  ],
})
export class WMLToggleZeroModule {

}



