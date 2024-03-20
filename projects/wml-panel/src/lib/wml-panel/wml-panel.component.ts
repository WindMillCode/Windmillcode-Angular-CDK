// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit,  Input   } from '@angular/core';

// rxjs
import { Subject } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';
import { WMLPanelItemParams } from '../wml-panel-item/wml-panel-item.component';

import { updateClassString,WMLUIProperty } from '@windmillcode/angular-wml-components-base';

// misc



@Component({

  selector: 'wml-panel',
  templateUrl: './wml-panel.component.html',
  styleUrls: ['./wml-panel.component.scss'],
  // changeDetection:ChangeDetectionStrategy.OnPush



})
export class WmlPanelComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }

  generateClassPrefix(prefix:string) {
    return (val: string) => {
      return prefix + val
    }
  }
  classPrefix = this.generateClassPrefix('WmlPanel')
  @Input('params') params: WMLPanelParams = new WMLPanelParams()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  private _classList =[]
  ngUnsub= new Subject<void>()
  updateClassString = updateClassString(this,"myClass","_classList")



  ngOnInit(): void {
    this.params.container.updateClassString = this.updateClassString
    this.params.container.updateClassString(this.classPrefix(`View`))
    // @ts-ignore
    this.params.container._classList
    .forEach((classStr)=>{
      this.params.container.updateClassString(classStr)
    })
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}



export class WMLPanelParams {
  constructor(params:Partial<WMLPanelParams>={}){
    Object.assign(
      this,
      {
        ...params
      }
    )
  }
  container=new WMLUIProperty({
  })
  items:Array<WMLPanelItemParams> = [new WMLPanelItemParams()]
}


