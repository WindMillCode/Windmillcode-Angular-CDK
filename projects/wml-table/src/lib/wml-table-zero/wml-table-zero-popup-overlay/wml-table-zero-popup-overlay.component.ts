// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding,  Input   } from '@angular/core';

// rxjs
import { Subject } from 'rxjs';
import { WMLPopupZeroProps } from '@windmillcode/angular-wml-popup';
import { generateClassPrefix, WMLUIProperty } from '@windmillcode/angular-wml-components-base';
// misc

@Component({

  selector: 'wml-table-zero-popup-overlay',
  templateUrl: './wml-table-zero-popup-overlay.component.html',
  styleUrls: ['./wml-table-zero-popup-overlay.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush

})
export class WMLTableZeroPopupOverlayComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }


  classPrefix = generateClassPrefix('WMLTableZeroPopupOverlay')
  @Input('props') props: WMLTableZeroPopupOverlayProps = new WMLTableZeroPopupOverlayProps()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()


  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}



export class WMLTableZeroPopupOverlayProps {
  constructor(props:Partial<WMLTableZeroPopupOverlayProps>={}){
    Object.assign(
      this,
      {
        ...props
      }
    )
  }
  popupProps = new WMLPopupZeroProps()
  overlay = new WMLUIProperty()
}


