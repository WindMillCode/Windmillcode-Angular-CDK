// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding,  Input   } from '@angular/core';
import { generateClassPrefix } from '@windmillcode/angular-wml-components-base';

// rxjs
import { Subject } from 'rxjs';

// misc



@Component({

  selector: 'wml-panel-zero-item-example',
  templateUrl: './wml-panel-zero-item-example.component.html',
  styleUrls: ['./wml-panel-zero-item-example.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush

})
export class WMLSamplePanelItemComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }


  classPrefix = generateClassPrefix('WMLSamplePanelItem')


  @Input('props') props: WMLSamplePanelItemProps = new WMLSamplePanelItemProps()


  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()

  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}



export class WMLSamplePanelItemProps {
  constructor(props:Partial<WMLSamplePanelItemProps>={}){
    Object.assign(
      this,
      {
        ...props
      }
    )
  }
  open!:Function
  close!:Function
  text= `Provide a WMLCustomComponent class to
  the WMLPanelZeroItemProps.custom property to
  provide your own component in place like so


  new WMLPanelZeroItemProps({
    ...
  }
  custom = new WMLCustomComponent({
    cpnt:WMLSamplePanelItemComponent,
    props:new WMLSamplePanelItemProps()
  })
  })
  `
}


