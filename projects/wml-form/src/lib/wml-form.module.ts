import { NgModule } from '@angular/core';
import { WmlFormComponent } from './wml-form/wml-form.component';




import { CommonModule } from '@angular/common';
import { WmlFieldModule,WmlFieldNGXTranslateModule } from '@windmillcode/angular-wml-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { WMLNGXTranslatePipe, WMLNGXTranslateMockPipe, WMLNGXTranslateLoader } from '@windmillcode/angular-wml-components-base';

let cpnts =[
  WmlFormComponent
]

@NgModule({
  declarations: [
    ...cpnts,
  ],
  imports: [
    WMLNGXTranslatePipe,
    WmlFieldNGXTranslateModule,
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
export class WmlFormNGXTranslateModule {

}

@NgModule({
  imports: [
    WmlFieldModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {

        provide: TranslateLoader,
        useFactory: ()=> new WMLNGXTranslateLoader(),
      }
    }),
  ],
  exports:[
    WmlFormNGXTranslateModule
  ]
})
export class WmlFormModule {

}
