


import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { WMLSelectZeroComponent } from './wml-select-zero/wml-select-zero.component';
import { CommonModule } from '@angular/common';
import { WMLNGXTranslateMockPipe, WMLNGXTranslatePipe } from '@windmillcode/angular-wml-components-base';
import { WMLInfiniteDropdownZeroModule } from '@windmillcode/angular-wml-infinite-dropdown';
import { WMLSelectZeroSelectComponent as WMLSelectZeroSelectComponent } from './wml-select-zero-select/wml-select-zero-select.component';

let cpnts= [
  WMLSelectZeroComponent,
  WMLSelectZeroSelectComponent
]

@NgModule({
  declarations: [
    ...cpnts,
  ],
  imports: [
    WMLNGXTranslatePipe,
    CommonModule,
    ReactiveFormsModule,
    WMLInfiniteDropdownZeroModule,
  ],
  exports:[
    ...cpnts
  ],
  providers:[
    {provide: WMLNGXTranslatePipe,useValue: WMLNGXTranslateMockPipe}
  ],
})
export class WMLSelectZeroModule {

}



