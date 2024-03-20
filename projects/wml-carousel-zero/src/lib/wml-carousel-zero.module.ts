


import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { WMLCarouselZeroComponent } from './wml-carousel-zero/wml-carousel-zero.component';
import { CommonModule } from '@angular/common';
import { WMLNGXTranslateLoader, WMLNGXTranslateMockPipe, WMLNGXTranslatePipe } from '@windmillcode/angular-wml-components-base';
import { WMLCarouselZeroItemComponent } from './wml-carousel-zero-item/wml-carousel-zero-item.component';
import { WMLCarouselZeroSampleItemComponent } from './wml-carousel-zero-sample-item/wml-carousel-zero-sample-item.component';

let cpnts= [
  WMLCarouselZeroComponent,
  WMLCarouselZeroComponent,
  WMLCarouselZeroItemComponent,
  WMLCarouselZeroSampleItemComponent
]

@NgModule({
  declarations: [
    ...cpnts,
  ],
  imports: [
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
export class WMLCarouselZeroNGXTranslateModule {

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
    WMLCarouselZeroNGXTranslateModule
  ]
})
export class WMLCarouselZeroModule {

}



