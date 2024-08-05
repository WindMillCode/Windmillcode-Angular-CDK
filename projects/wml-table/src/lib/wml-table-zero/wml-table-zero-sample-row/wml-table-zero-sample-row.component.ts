// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding,  Input   } from '@angular/core';




// rxjs
import { Subject } from 'rxjs';
import { WMLTableZeroSampleCardProps } from '../wml-table-zero-sample-card/wml-table-zero-sample-card.component';
import { generateClassPrefix } from '@windmillcode/angular-wml-components-base';

// misc
@Component({
  selector: 'wml-table-zero-sample-row',
  templateUrl: './wml-table-zero-sample-row.component.html',
  styleUrls: ['./wml-table-zero-sample-row.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class WMLTableZeroSampleRowComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }

  classPrefix = generateClassPrefix('WMLTableZeroSampleRow')
  @Input('props') props: WMLTableZeroSampleRowProps = new WMLTableZeroSampleRowProps()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()

  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}



export class WMLTableZeroSampleRowProps extends WMLTableZeroSampleCardProps {
  constructor(props:Partial<WMLTableZeroSampleRowProps>={}){
    super(props)

  }
}


