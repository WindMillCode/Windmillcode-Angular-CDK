import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { WMLButtonZeroComponent } from './wml-button-zero/wml-button-zero.component';
import { CommonModule } from '@angular/common';
import { WMLNGXTranslateLoader, WMLNGXTranslateMockPipe, WMLNGXTranslatePipe } from '@windmillcode/angular-wml-components-base';
import { RouterModule } from '@angular/router';

let cpnts= [
  WMLButtonZeroComponent
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
    RouterModule
  ],
  exports:[
    ...cpnts
  ],
  providers:[
    {provide: WMLNGXTranslatePipe,useValue: WMLNGXTranslateMockPipe}
  ],
})
export class WMLButtonZeroModule {

}




