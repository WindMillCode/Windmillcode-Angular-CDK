// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit,  Input   } from '@angular/core';




// rxjs
import { Subject } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';

// misc



@Component({

  selector: 'wml-sample-panel-item',
  templateUrl: './wml-sample-panel-item.component.html',
  styleUrls: ['./wml-sample-panel-item.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush



})
export class WmlSamplePanelItemComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }

  generateClassPrefix(prefix:string) {
    return (val: string) => {
      return prefix + val
    }
  }
  classPrefix = this.generateClassPrefix('WmlSamplePanelItem')


  @Input('params') params: WMLSamplePanelItemParams = new WMLSamplePanelItemParams()


  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()

  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}



export class WMLSamplePanelItemParams {
  constructor(params:Partial<WMLSamplePanelItemParams>={}){
    Object.assign(
      this,
      {
        ...params
      }
    )
  }
  open!:Function
  close!:Function
  text= `Provide a WMLCustomComponent class to
  the WMLPanelItemParams.custom property to
  provide your own component in place like so


  new WMLPanelItemParams({
    ...
  }
  custom = new WMLCustomComponent({
    cpnt:WmlSamplePanelItemComponent,
    params:new WMLSamplePanelItemParams()
  })
  })
  `
}


