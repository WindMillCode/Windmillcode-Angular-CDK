// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding,  Input  , ViewEncapsulation   } from '@angular/core';

// rxjs
import { Subject } from 'rxjs';

// wml-components
import { generateClassPrefix } from '@windmillcode/wml-components-base';
import { WMLSelectZeroProps } from '../wml-select-zero/wml-select-zero.component';

// misc


@Component({
    selector: 'wml-select-zero-select',
    templateUrl: './wml-select-zero-select.component.html',
    styleUrls: ['./wml-select-zero-select.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class WMLSelectZeroSelectComponent  {

  constructor(
    public cdref:ChangeDetectorRef,
  ) { }

  classPrefix = generateClassPrefix('WMLSelectZeroSelect')
  @Input('props') props: WMLSelectZeroProps = new WMLSelectZeroProps()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()

  ngOnInit(): void {
    this.props.select.cdref = this.cdref
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}

