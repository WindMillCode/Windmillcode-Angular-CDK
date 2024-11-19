// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding,  Input  , ViewEncapsulation   } from '@angular/core';

// rxjs
import { Subject } from 'rxjs';

// wml-components
import { generateClassPrefix } from '@windmillcode/wml-components-base';


// misc

@Component({
    selector: 'wml-accordion-zero-sample',
    templateUrl: './wml-accordion-zero-sample.component.html',
    styleUrls: ['./wml-accordion-zero-sample.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class WMLAccordionZeroSampleComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }

  classPrefix = generateClassPrefix('WMLAccordionZeroSample')
  @Input('props') props: WMLAccordionZeroSampleProps = new WMLAccordionZeroSampleProps()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  @HostBinding('attr.id') myId?:string
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


export class WMLAccordionZeroSampleProps {
  constructor(props:Partial<WMLAccordionZeroSampleProps>={}){
    Object.assign(
      this,
      {
        ...props
      }
    )
  }

  id = ""

}


