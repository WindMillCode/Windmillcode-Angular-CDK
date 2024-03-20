// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit,  Input   } from '@angular/core';




// rxjs
import { Subject } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';
import { WMLPopupParams } from '@windmillcode/angular-wml-popup';
import { WMLUIProperty } from '@windmillcode/angular-wml-components-base';
// misc



@Component({

  selector: 'wml-table-zero-popup-overlay',
  templateUrl: './wml-table-zero-popup-overlay.component.html',
  styleUrls: ['./wml-table-zero-popup-overlay.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush



})
export class WmlTableZeroPopupOverlayComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }

  generateClassPrefix(prefix:string) {
    return (val: string) => {
      return prefix + val
    }
  }
  classPrefix = this.generateClassPrefix('WmlTableZeroPopupOverlay')


  @Input('params') params: WmlTableZeroPopupOverlayParams = new WmlTableZeroPopupOverlayParams()


  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()

  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}



export class WmlTableZeroPopupOverlayParams {
  constructor(params:Partial<WmlTableZeroPopupOverlayParams>={}){
    Object.assign(
      this,
      {
        ...params
      }
    )
  }
  popupParams = new WMLPopupParams()
  overlay = new WMLUIProperty()
}


