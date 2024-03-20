import { NgModule } from '@angular/core';
import { WmlMobileNavZeroComponent } from './wml-mobile-nav-zero/wml-mobile-nav-zero.component';
import { WmlInfiniteDropdownModule, WmlInfiniteDropdownNGXTranslateModule } from '@windmillcode/angular-wml-infinite-dropdown';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { WMLNGXTranslatePipe, WMLNGXTranslateMockPipe, WMLNGXTranslateLoader } from '@windmillcode/angular-wml-components-base';



let cpnts = [
  WmlMobileNavZeroComponent
]

@NgModule({
  declarations: [
    ...cpnts,
  ],
  imports: [
    WMLNGXTranslatePipe,
    CommonModule,
    ReactiveFormsModule,
    WmlInfiniteDropdownNGXTranslateModule
  ],
  exports:[
    ...cpnts
  ],
  providers:[
    {provide: WMLNGXTranslatePipe,useValue: WMLNGXTranslateMockPipe}
  ],
})
export class WmlMobileNavZeroNGXTranslateModule {

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
    WmlMobileNavZeroNGXTranslateModule
  ]
})
export class WmlMobileNavZeroModule {

}
