// angular
import { ChangeDetectorRef, Component, HostBinding,  Input   } from '@angular/core';

// rxjs
import { Subject } from 'rxjs';
import { WMLPanelZeroItemProps } from '../wml-panel-zero-item/wml-panel-zero-item.component';

import { generateClassPrefix, updateClassString,WMLUIProperty } from '@windmillcode/wml-components-base';

// misc



@Component({
    selector: 'wml-panel-zero',
    templateUrl: './wml-panel-zero.component.html',
    styleUrls: ['./wml-panel-zero.component.scss'],
    standalone: false
})
export class WMLPanelZeroComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }


  classPrefix = generateClassPrefix('WMLPanel')
  @Input('props') props: WMLPanelZeroProps = new WMLPanelZeroProps()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  private _classList =[]
  ngUnsub= new Subject<void>()
  updateClassString = updateClassString(this,"myClass","_classList")



  ngOnInit(): void {
    this.props.container.updateClassString = this.updateClassString
    this.props.container.updateClassString(this.classPrefix(`View`))
    // @ts-ignore
    this.props.container._classList
    .forEach((classStr)=>{
      this.props.container.updateClassString(classStr)
    })
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}



export class WMLPanelZeroProps {
  constructor(props:Partial<WMLPanelZeroProps>={}){
    Object.assign(
      this,
      {
        ...props
      }
    )
  }
  container=new WMLUIProperty({
  })
  items:Array<WMLPanelZeroItemProps> = [new WMLPanelZeroItemProps()]
}


