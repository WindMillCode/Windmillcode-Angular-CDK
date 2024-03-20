import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WMLNGXTranslateLoader, WMLNGXTranslateMockPipe, WMLNGXTranslatePipe } from '@windmillcode/angular-wml-components-base';
import { WmlFormModule,WmlFormNGXTranslateModule } from '@windmillcode/angular-wml-form';
import {WmlInfiniteDropdownModule, WmlInfiniteDropdownNGXTranslateModule} from "@windmillcode/angular-wml-infinite-dropdown";
import { WmlInputModule,WmlInputNGXTranslateModule } from '@windmillcode/angular-wml-input';
import { WmlOptionsModule, WmlOptionsNGXTranslateModule } from '@windmillcode/angular-wml-options';
import { WmlPopupNGXTranslateModule,WmlPopupModule } from '@windmillcode/angular-wml-popup';
import { WmlButtonZeroModule, WmlButtonZeroNGXTranslateModule } from '@windmillcode/angular-wml-button-zero';

import { WmlTableZeroComponent } from './wml-table-zero/wml-table-zero.component';
import { WmlTableZeroSampleCardComponent } from './wml-table-zero-sample-card/wml-table-zero-sample-card.component';
import { WmlTableZeroItemComponent } from './wml-table-zero-item/wml-table-zero-item.component';
import { WmlTableZeroSelectPageComponent } from './wml-table-zero-select-page/wml-table-zero-select-page.component';
import { WmlTableZeroPopupOverlayComponent } from './wml-table-zero-popup-overlay/wml-table-zero-popup-overlay.component';
import { WmlTableZeroPageSizeComponent } from './wml-table-zero-page-size/wml-table-zero-page-size.component';
import { WmlTableZeroFilterComponent } from './wml-table-zero-filter/wml-table-zero-filter.component';
import { WmlTableZeroKeyValueInputComponent } from './wml-table-zero-key-value-input/wml-table-zero-key-value-input.component';
import { WmlTableZeroSortComponent } from './wml-table-zero-sort/wml-table-zero-sort.component';
import { WmlTableZeroDropdownItemComponent } from './wml-table-zero-dropdown-item/wml-table-zero-dropdown-item.component';
import { WmlTableZeroSampleRowComponent } from './wml-table-zero-sample-row/wml-table-zero-sample-row.component';
import { WmlTableZeroRowTypeComponent } from './wml-table-zero-row-type/wml-table-zero-row-type.component';

let cpnts = [
  WmlTableZeroComponent,
  WmlTableZeroItemComponent,
  WmlTableZeroSampleCardComponent,
  WmlTableZeroSelectPageComponent,
  WmlTableZeroPopupOverlayComponent,
  WmlTableZeroPageSizeComponent,
  WmlTableZeroFilterComponent,
  WmlTableZeroKeyValueInputComponent,
  WmlTableZeroSortComponent,
]

@NgModule({
  declarations: [
    ...cpnts,
    WmlTableZeroDropdownItemComponent,
    WmlTableZeroSampleRowComponent,
    WmlTableZeroRowTypeComponent,
  ],
  imports: [
    WMLNGXTranslatePipe,
    CommonModule,
    ReactiveFormsModule,
    WmlInfiniteDropdownNGXTranslateModule,
    WmlPopupNGXTranslateModule,
    WmlFormNGXTranslateModule,
    WmlOptionsNGXTranslateModule,
    WmlInputNGXTranslateModule,
    WmlButtonZeroNGXTranslateModule
  ],
  exports:[
    ...cpnts
  ],
  providers:[
    {provide: WMLNGXTranslatePipe,useValue: WMLNGXTranslateMockPipe}
  ],
})
export class WmlTableZeroNGXTranslateModule {

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
    WmlInfiniteDropdownModule,
    WmlPopupModule,
    WmlFormModule,
    WmlOptionsModule,
    WmlInputModule,
    WmlButtonZeroModule
  ],
  exports:[
    WmlTableZeroNGXTranslateModule
  ]
})
export class WmlTableZeroModule {

}
