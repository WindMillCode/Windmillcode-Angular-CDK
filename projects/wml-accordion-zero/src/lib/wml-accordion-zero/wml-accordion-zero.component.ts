// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit,  Input  , ViewEncapsulation, ViewContainerRef, ViewChild   } from '@angular/core';



// rxjs
import { Subject } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';

// wml-components
import { WMLCustomComponent, WMLUIProperty, addCustomComponent, generateClassPrefix } from '@windmillcode/angular-wml-components-base';
import { WMLAccordionZeroSampleComponent, WMLAccordionZeroSampleParams } from '../wml-accordion-zero-sample/wml-accordion-zero-sample.component';
import { WMLAccordionZeroItemParams } from '../wml-accordion-zero-item/wml-accordion-zero-item.component';


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
  @Input('params') params: WMLAccordionZeroParams = new WMLAccordionZeroParams()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  @HostBinding('id') myId!:string;

  ngUnsub= new Subject<void>()

  ngOnInit(): void {
    this.myId = this.params.id
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}



export class WMLAccordionZeroParams {
  constructor(params:Partial<WMLAccordionZeroParams & {paramItems?:WMLAccordionZeroItemParams[]}>={}){
    Object.assign(
      this,
      {
        ...params
      }
    )
    if(params.paramItems){
      this.items = params.paramItems.map((item)=>{
        return [item]
      })
    }
  }

  id = ""
  items : WMLAccordionZeroItemParams[][] =[
    Array(2)
    .fill(null)
    .map((nullVal,index0)=>{
      return new WMLAccordionZeroItemParams()
    }),
    Array(3)
    .fill(null)
    .map((nullVal,index0)=>{
      return new WMLAccordionZeroItemParams()
    }),
    Array(2)
    .fill(null)
    .map((nullVal,index0)=>{
      return new WMLAccordionZeroItemParams()
    }),
  ]

}


