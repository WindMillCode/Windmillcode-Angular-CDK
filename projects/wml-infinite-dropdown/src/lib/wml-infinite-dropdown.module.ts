import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { WmlInfiniteDropdownComponent } from './wml-infinite-dropdown/wml-infinite-dropdown.component';
import { WmlSampleInfiniteDropdownItemComponent } from './wml-sample-infinite-dropdown-item/wml-sample-infinite-dropdown-item.component';
import { WmlInfiniteDropdownItemComponent } from './wml-infinite-dropdown-item/wml-infinite-dropdown-item.component';
import { CommonModule } from '@angular/common';
import { WMLNGXTranslatePipe, WMLNGXTranslateMockPipe, WMLNGXTranslateLoader } from '@windmillcode/angular-wml-components-base';


let cpnts =[
  WmlInfiniteDropdownComponent,
  WmlInfiniteDropdownItemComponent,
  WmlSampleInfiniteDropdownItemComponent
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
export class WmlInfiniteDropdownNGXTranslateModule {

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
    WmlInfiniteDropdownNGXTranslateModule
  ]
})
export class WmlInfiniteDropdownModule {

}
