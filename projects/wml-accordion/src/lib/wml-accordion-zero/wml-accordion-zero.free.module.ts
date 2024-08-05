


import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { WMLAccordionZeroComponent } from './wml-accordion-zero/wml-accordion-zero.component';
import { CommonModule } from '@angular/common';
import { WMLNGXTranslateLoader, WMLNGXTranslateMockPipe, WMLNGXTranslatePipe } from '@windmillcode/angular-wml-components-base';
import { WMLAccordionZeroSampleComponent } from './wml-accordion-zero-sample/wml-accordion-zero-sample.component';
import { WMLAccordionZeroItemComponent } from './wml-accordion-zero-item/wml-accordion-zero-item.component';
import { WMLAccordionZeroTitleComponent } from './wml-accordion-zero-title/wml-accordion-zero-title.component';

let cpnts= [
  WMLAccordionZeroComponent,
  WMLAccordionZeroSampleComponent,
  WMLAccordionZeroItemComponent,
  WMLAccordionZeroTitleComponent,
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
        useFactory: ()=> new WMLNGXTranslateLoader()
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
export class WMLAccordionZeroModule {

}




