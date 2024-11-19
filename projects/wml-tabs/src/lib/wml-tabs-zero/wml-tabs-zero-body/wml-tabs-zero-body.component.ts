// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, Input, ViewChild, ViewContainerRef } from '@angular/core';




// rxjs
import { Subject } from 'rxjs';

// misc

import { addCustomComponent } from '@windmillcode/angular-wml-components-base';
import { WMLTabsZero } from '../models';
import { generateClassPrefix } from '@windmillcode/wml-components-base';


@Component({
    selector: 'wml-tabs-zero-body',
    templateUrl: './wml-tabs-zero-body.component.html',
    styleUrls: ['./wml-tabs-zero-body.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class WMLTabBodyComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }


  classPrefix = generateClassPrefix('WMLTabBody')
  @Input("props")props: WMLTabsZero = new WMLTabsZero()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()
  @ViewChild("customTabBody",{read:ViewContainerRef,static:true}) customTabBody!:ViewContainerRef;

  ngOnInit(): void {
    this.applyCustomBody()
  }

  applyCustomBody = ()=>{
    addCustomComponent(
      this.customTabBody,
      this.props.body.cpnt,
      this.props.body.props
    )
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}
