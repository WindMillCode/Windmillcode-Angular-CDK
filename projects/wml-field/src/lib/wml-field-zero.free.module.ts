import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WMLFieldZeroPropsComponent } from '../public-api';
import { WMLLabelZeroComponent } from './wml-label-zero/wml-label-zero.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { WMLNGXTranslateLoader,
  WMLNGXTranslateMockPipe, WMLNGXTranslatePipe } from '@windmillcode/angular-wml-components-base';



let cpnts= [
  WMLFieldZeroPropsComponent,
  WMLLabelZeroComponent
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
export class WMLFieldZeroModule {

}

