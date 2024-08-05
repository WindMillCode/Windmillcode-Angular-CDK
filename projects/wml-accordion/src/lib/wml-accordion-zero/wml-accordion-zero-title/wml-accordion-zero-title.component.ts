// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding,  Input  , ViewEncapsulation   } from '@angular/core';



// rxjs
import { Subject } from 'rxjs';

// wml-components
import { generateClassPrefix } from '@windmillcode/angular-wml-components-base';


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

  classPrefix = generateClassPrefix('WMLAccordionZeroTitle')
  @Input('props') props: WMLAccordionZeroTitleProps = new WMLAccordionZeroTitleProps()
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



export class WMLAccordionZeroTitleProps {
  constructor(props:Partial<WMLAccordionZeroTitleProps>={}){
    let origProps = Object.entries(props)
    .filter(([key,val]) => {
      return !key.startsWith('prop');
    });
    Object.assign(this, { ...Object.fromEntries(origProps) })
  }

  id?:string
  title="My Accordion Title"
}


