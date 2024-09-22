


import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { WMLCarouselOneComponent } from './wml-carousel-one/wml-carousel-one.component';
import { CommonModule } from '@angular/common';
import { WMLNGXTranslateLoader, WMLNGXTranslatePipe } from '@windmillcode/angular-wml-components-base';
import { WMLCarouselOneSlideExampleComponent } from './wml-carousel-one-slide-example/wml-carousel-one-slide-example.component';
import { WMLCarouselOneControlExampleComponent } from './wml-carousel-one-control-example/wml-carousel-one-control-example.component';
import { WMLCarouselOneControlComponent } from './wml-carousel-one-control/wml-carousel-one-control.component';
import { WMLCarouselOneSlideComponent } from './wml-carousel-one-slide/wml-carousel-one-slide.component';

let cpnts = [
  WMLCarouselOneComponent,
  WMLCarouselOneSlideExampleComponent,
  WMLCarouselOneControlExampleComponent,
  WMLCarouselOneControlComponent,
  WMLCarouselOneSlideComponent
]



@NgModule({
  declarations: [
    ...cpnts
  ],
  imports: [
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {

        provide: TranslateLoader,
        useFactory: () => new WMLNGXTranslateLoader(),
      }
    }),
    WMLNGXTranslatePipe,
    CommonModule,
  ],
  exports:[
    ...cpnts
  ],
})
export class WMLCarouselOneModule {

}



