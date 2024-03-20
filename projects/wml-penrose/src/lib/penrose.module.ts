
import { NgModule } from '@angular/core';
import { PenroseComponent } from './penrose/penrose.component';
import { CommonModule } from '@angular/common';

let components = [
  PenroseComponent
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ...components
  ]
})
export class PenroseModule { }
