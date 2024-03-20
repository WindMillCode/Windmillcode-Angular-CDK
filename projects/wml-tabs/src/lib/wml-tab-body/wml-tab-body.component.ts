// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';




// rxjs
import { Subject } from 'rxjs';

// misc

import { addCustomComponent } from '@windmillcode/angular-wml-components-base';
import { WMLTab } from '../models';


@Component({

  selector: 'wml-tab-body',
  templateUrl: './wml-tab-body.component.html',
  styleUrls: ['./wml-tab-body.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush


})
export class WmlTabBodyComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }

  generateClassPrefix(prefix:string) {
    return (val: string) => {
      return prefix + val
    }
  }
  classPrefix = this.generateClassPrefix('WmlTabBody')
  @Input("params")params: WMLTab = new WMLTab()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()
  @ViewChild("customTabBody",{read:ViewContainerRef,static:true}) customTabBody!:ViewContainerRef;

  ngOnInit(): void {
    this.applyCustomBody()
  }

  applyCustomBody = ()=>{
    addCustomComponent(
      this.customTabBody,
      this.params.body.cpnt,
      this.params.body.params
    )
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}
