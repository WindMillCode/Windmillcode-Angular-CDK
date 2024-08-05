import { NgModule } from '@angular/core';
import { WMLFormZeroComponent } from './wml-form-zero/wml-form-zero.component';


import { CommonModule } from '@angular/common';
import { WMLFieldZeroModule } from '@windmillcode/angular-wml-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { WMLNGXTranslatePipe, WMLNGXTranslateMockPipe, WMLNGXTranslateLoader } from '@windmillcode/angular-wml-components-base';

let cpnts =[
  WMLFormZeroComponent
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
    WMLFieldZeroModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
],
  exports:[
    ...cpnts
  ],
  providers:[
    {provide: WMLNGXTranslatePipe,useValue: WMLNGXTranslateMockPipe}
  ],
})
export class WMLFormZeroModule {

}

