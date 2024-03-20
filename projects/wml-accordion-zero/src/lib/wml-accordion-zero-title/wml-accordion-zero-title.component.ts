// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit,  Input  , ViewEncapsulation   } from '@angular/core';



// rxjs
import { Subject } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';

// wml-components
import { generateClassPrefix, generateIdPrefix } from '@windmillcode/angular-wml-components-base';


// misc



@Component({

  selector: 'wml-accordion-zero-title',
  templateUrl: './wml-accordion-zero-title.component.html',
  styleUrls: ['./wml-accordion-zero-title.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,

  encapsulation:ViewEncapsulation.None

})
export class WMLAccordionZeroTitleComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }

  classPrefix = generateClassPrefix('WmlAccordionZeroTitle')


  @Input('params') params: WMLAccordionZeroTitleParams = new WMLAccordionZeroTitleParams()


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



export class WMLAccordionZeroTitleParams {
  constructor(params:Partial<WMLAccordionZeroTitleParams>={}){
    let origParams = Object.entries(params)
    .filter(([key,val]) => {
      return !key.startsWith('param');
    });
    Object.assign(this, { ...Object.fromEntries(origParams) })
  }

  id = ""
  title="My Accordion Title"
}


