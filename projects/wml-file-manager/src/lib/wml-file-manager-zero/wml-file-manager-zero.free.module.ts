import { CommonModule } from '@angular/common';
import {  NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { WMLFileUploadZeroComponent } from './wml-file-upload-zero/wml-file-upload-zero.component';
import { WMLDragNDropDirective } from './wml-drag-n-drop-zero/wml-drag-n-drop.directive';
import { WMLNGXTranslateLoader, WMLNGXTranslatePipe, WMLNGXTranslateMockPipe } from '@windmillcode/angular-wml-components-base';




let cpnts = [
  WMLFileUploadZeroComponent,
  WMLDragNDropDirective,
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
export class WMLFileManagerModule {

}


