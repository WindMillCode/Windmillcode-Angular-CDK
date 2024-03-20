import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { WmlFileUploadComponent } from './wml-file-upload/wml-file-upload.component';
import { WmlDragNDropDirective } from './wml-drag-n-drop/wml-drag-n-drop.directive';
import { WMLNGXTranslateLoader, WMLNGXTranslatePipe, WMLNGXTranslateMockPipe, WMLModuleForRootParams } from '@windmillcode/angular-wml-components-base';




let cpnts = [
  WmlFileUploadComponent,
  WmlDragNDropDirective,
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
export class WmlFileManagerNGXTranslateModule {

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
    WmlFileManagerNGXTranslateModule
  ]
})
export class WmlFileManagerModule {

}
