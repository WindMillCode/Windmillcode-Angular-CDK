// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit,  Input  , ViewEncapsulation   } from '@angular/core';



// rxjs
import { Subject } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';

// wml-components
import { generateClassPrefix } from '@windmillcode/angular-wml-components-base';


// misc



@Component({

  selector: 'wml-accordion-zero-sample',
  templateUrl: './wml-accordion-zero-sample.component.html',
  styleUrls: ['./wml-accordion-zero-sample.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,

  encapsulation:ViewEncapsulation.None




})
export class WMLAccordionZeroSampleComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }

  classPrefix = generateClassPrefix('WmlAccordionZeroSample')


  @Input('params') params: WMLAccordionZeroSampleParams = new WMLAccordionZeroSampleParams()


  @HostBinding('class') myClass: string = this.classPrefix(`View`);


  @HostBinding('id') myId!:string

  ngUnsub= new Subject<void>()

  ngOnInit(): void {

    this.myId = this.params.id

  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}



export class WMLAccordionZeroSampleParams {
  constructor(params:Partial<WMLAccordionZeroSampleParams>={}){
    Object.assign(
      this,
      {
        ...params
      }
    )
  }

  id = ""

}


