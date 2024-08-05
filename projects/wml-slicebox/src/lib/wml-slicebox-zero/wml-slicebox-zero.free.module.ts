import { NgModule } from '@angular/core';
import { WMLSliceboxZeroComponent } from './wml-slicebox-zero/wml-slicebox-zero.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    WMLSliceboxZeroComponent,
  ],
  imports: [
    CommonModule

  ],
  exports:[
    WMLSliceboxZeroComponent
  ]
})
export class WMLSliceboxZeroModule { }
