import { NgModule } from '@angular/core';
import { WMLMobileNavZeroComponent } from './wml-mobile-nav-zero/wml-mobile-nav-zero.component';
import {  WMLInfiniteDropdownZeroModule } from '@windmillcode/angular-wml-infinite-dropdown';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { WMLNGXTranslatePipe, WMLNGXTranslateMockPipe, WMLNGXTranslateLoader } from '@windmillcode/angular-wml-components-base';



let cpnts = [
  WMLMobileNavZeroComponent
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
    WMLInfiniteDropdownZeroModule
  ],
  exports:[
    ...cpnts
  ],
  providers:[
    {provide: WMLNGXTranslatePipe,useValue: WMLNGXTranslateMockPipe}
  ],
})
export class WMLMobileNavZeroModule {

}

