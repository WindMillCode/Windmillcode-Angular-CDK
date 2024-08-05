import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { WMLNGXTranslatePipe, WMLNGXTranslateMockPipe } from '@windmillcode/angular-wml-components-base';
import { WMLPanelZeroComponent } from './wml-panel-zero/wml-panel-zero.component';
import { WMLPanelZeroItemComponent } from './wml-panel-zero-item/wml-panel-zero-item.component';
import { WMLSamplePanelItemComponent } from './wml-panel-zero-item-example/wml-panel-zero-item-example.component';


let cpnts =[
    WMLPanelZeroComponent,
    WMLPanelZeroItemComponent,
    WMLSamplePanelItemComponent
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
export class WMLPanelZeroModule {

}


