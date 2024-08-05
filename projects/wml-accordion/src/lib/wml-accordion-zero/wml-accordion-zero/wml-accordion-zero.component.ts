// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding,  Input  , ViewEncapsulation   } from '@angular/core';



// rxjs
import { Subject } from 'rxjs';

// wml-components
import { generateClassPrefix } from '@windmillcode/angular-wml-components-base';
import { WMLAccordionZeroItemProps } from '../wml-accordion-zero-item/wml-accordion-zero-item.component';


// misc



@Component({

  selector: 'wml-accordion-zero',
  templateUrl: './wml-accordion-zero.component.html',
  styleUrls: ['./wml-accordion-zero.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  encapsulation:ViewEncapsulation.None
})
export class WMLAccordionZeroComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }

  classPrefix = generateClassPrefix('WMLAccordionZero')
  @Input('props') props: WMLAccordionZeroProps = new WMLAccordionZeroProps()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  @HostBinding('attr.id') myId?:string;

  ngUnsub= new Subject<void>()

  ngOnInit(): void {
    if(this.props.id){
      this.myId = this.props.id
    }
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}



export class WMLAccordionZeroProps {
  constructor(props:Partial<WMLAccordionZeroProps & {propItems?:WMLAccordionZeroItemProps[]}>={}){
    Object.assign(
      this,
      {
        ...props
      }
    )
    if(props.propItems){
      this.items = props.propItems.map((item)=>{
        return [item]
      })
    }
  }

  id?:string
  items : WMLAccordionZeroItemProps[][] =[
    Array(2)
    .fill(null)
    .map((nullVal,index0)=>{
      return new WMLAccordionZeroItemProps()
    }),
    Array(3)
    .fill(null)
    .map((nullVal,index0)=>{
      return new WMLAccordionZeroItemProps()
    }),
    Array(2)
    .fill(null)
    .map((nullVal,index0)=>{
      return new WMLAccordionZeroItemProps()
    }),
  ]

}


