import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WMLNGXTranslateMockPipe, WMLNGXTranslatePipe } from '@windmillcode/angular-wml-components-base';
import { WMLFormZeroModule } from '@windmillcode/angular-wml-form';
import { WMLInfiniteDropdownZeroModule} from "@windmillcode/angular-wml-infinite-dropdown";
import { WMLInputZeroModule } from '@windmillcode/angular-wml-input';
import {  WMLOptionsZeroModule } from '@windmillcode/angular-wml-options';
import { WMLPopupZeroModule } from '@windmillcode/angular-wml-popup';
import {  WMLButtonZeroModule } from '@windmillcode/angular-wml-button';

import { WMLTableZeroComponent } from './wml-table-zero/wml-table-zero.component';
import { WMLTableZeroSampleCardComponent } from './wml-table-zero-sample-card/wml-table-zero-sample-card.component';
import { WMLTableZeroItemComponent } from './wml-table-zero-item/wml-table-zero-item.component';
import { WMLTableZeroSelectPageComponent } from './wml-table-zero-select-page/wml-table-zero-select-page.component';
import { WMLTableZeroPopupOverlayComponent } from './wml-table-zero-popup-overlay/wml-table-zero-popup-overlay.component';
import { WMLTableZeroPageSizeComponent } from './wml-table-zero-page-size/wml-table-zero-page-size.component';
import { WMLTableZeroFilterComponent } from './wml-table-zero-filter/wml-table-zero-filter.component';
import { WMLTableZeroKeyValueInputComponent } from './wml-table-zero-key-value-input/wml-table-zero-key-value-input.component';
import { WMLTableZeroSortComponent } from './wml-table-zero-sort/wml-table-zero-sort.component';
import { WMLTableZeroDropdownItemComponent } from './wml-table-zero-dropdown-item/wml-table-zero-dropdown-item.component';
import { WMLTableZeroSampleRowComponent } from './wml-table-zero-sample-row/wml-table-zero-sample-row.component';
import { WMLTableZeroRowTypeComponent } from './wml-table-zero-row-type/wml-table-zero-row-type.component';

let cpnts = [
  WMLTableZeroComponent,
  WMLTableZeroItemComponent,
  WMLTableZeroSampleCardComponent,
  WMLTableZeroSelectPageComponent,
  WMLTableZeroPopupOverlayComponent,
  WMLTableZeroPageSizeComponent,
  WMLTableZeroFilterComponent,
  WMLTableZeroKeyValueInputComponent,
  WMLTableZeroSortComponent,
]

@NgModule({
  declarations: [
    ...cpnts,
    WMLTableZeroDropdownItemComponent,
    WMLTableZeroSampleRowComponent,
    WMLTableZeroRowTypeComponent,
  ],
  imports: [
    WMLNGXTranslatePipe,
    CommonModule,
    ReactiveFormsModule,
    WMLInfiniteDropdownZeroModule,
    WMLPopupZeroModule,
    WMLFormZeroModule,
    WMLOptionsZeroModule,
    WMLInputZeroModule,
    WMLButtonZeroModule
  ],
  exports:[
    ...cpnts
  ],
  providers:[
    {provide: WMLNGXTranslatePipe,useValue: WMLNGXTranslateMockPipe}
  ],
})
export class WMLTableZeroModule {

}

