import { NgModule } from '@angular/core';
import { WMLPopupZeroComponent } from './wml-popup-zero/wml-popup-zero.component';
import { CommonModule } from '@angular/common';
import { WMLNGXTranslatePipe, WMLNGXTranslateMockPipe } from '@windmillcode/angular-wml-components-base';


let cpnts =[
  WMLPopupZeroComponent
]


@NgModule({
  declarations: [
    ...cpnts,
  ],
  imports: [
    WMLNGXTranslatePipe,
    CommonModule,
  ],
  exports:[
    ...cpnts
  ],
  providers:[
    {provide: WMLNGXTranslatePipe,useValue: WMLNGXTranslateMockPipe}
  ],
})
export class WMLPopupZeroModule {

}

