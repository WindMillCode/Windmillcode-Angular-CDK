import { NgModule } from '@angular/core';

// reactive forms module
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WMLNGXTranslatePipe, WMLNGXTranslateMockPipe, WMLNGXTranslateLoader } from '@windmillcode/angular-wml-components-base';
import { WMLInputZeroComponent } from './wml-input-zero/wml-input-zero.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

let cpnts = [
  WMLInputZeroComponent
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
export class WMLInputZeroModule {

}

