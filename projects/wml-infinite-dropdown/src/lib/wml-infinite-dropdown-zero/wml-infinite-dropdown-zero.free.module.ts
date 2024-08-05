import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { WMLNGXTranslatePipe, WMLNGXTranslateMockPipe, WMLNGXTranslateLoader } from '@windmillcode/angular-wml-components-base';
import { RouterModule } from '@angular/router';
import { WMLInfiniteDropdownZeroComponent } from './wml-infinite-dropdown-zero/wml-infinite-dropdown-zero.component';
import { WMLInfiniteDropdownZeroItemComponent } from './wml-infinite-dropdown-zero-item/wml-infinite-dropdown-zero-item.component';
import { WMLInfiniteDropdownZeroItemExampleComponent } from './wml-infinite-dropdown-zero-item-example/wml-infinite-dropdown-zero-item-example.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';




let cpnts =[
  WMLInfiniteDropdownZeroComponent,
  WMLInfiniteDropdownZeroItemComponent,
  WMLInfiniteDropdownZeroItemExampleComponent
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
    RouterModule
  ],
  exports:[
    ...cpnts
  ],
  providers:[
  {provide: WMLNGXTranslatePipe,useValue: WMLNGXTranslateMockPipe}
  ],
})
export class WMLInfiniteDropdownZeroModule {

}

