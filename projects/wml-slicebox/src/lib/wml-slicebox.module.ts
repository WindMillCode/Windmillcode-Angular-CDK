

import { NgModule } from '@angular/core';
import { WmlSliceboxComponent } from './wml-slicebox/wml-slicebox.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    WmlSliceboxComponent,
  ],
  imports: [
    CommonModule

  ],
  exports:[
    WmlSliceboxComponent
  ]
})
export class WmlSliceboxModule { }
