import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { WMLOptionsZeroComponent } from './wml-options-zero/wml-options-zero.component';
import { CommonModule } from '@angular/common';
import { WMLNGXTranslateLoader, WMLNGXTranslateMockPipe, WMLNGXTranslatePipe } from '@windmillcode/angular-wml-components-base';
import { WMLOptionsZeroItemExampleComponent } from './wml-options-zero-item-example/wml-options-zero-item-example.component';
import { WMLOptionsZeroItemComponent } from './wml-options-zero-item/wml-options-zero-item.component';

let cpnts= [
  WMLOptionsZeroItemExampleComponent,
  WMLOptionsZeroItemComponent,
  WMLOptionsZeroComponent
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
export class WMLOptionsZeroModule {

}



