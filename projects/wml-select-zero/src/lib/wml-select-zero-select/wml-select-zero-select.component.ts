// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit,  Input  , ViewEncapsulation   } from '@angular/core';



// rxjs
import { Subject } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';

// wml-components
import { generateClassPrefix } from '@windmillcode/angular-wml-components-base';
import { WmlInfiniteDropdownOption } from '@windmillcode/angular-wml-infinite-dropdown';
import { WMLSelectZeroParams } from '../wml-select-zero/wml-select-zero.component';


// misc



@Component({
  selector: 'wml-select-zero-select',
  templateUrl: './wml-select-zero-select.component.html',
  styleUrls: ['./wml-select-zero-select.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  encapsulation:ViewEncapsulation.None
})
export class WMLSelectZeroSelectComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }

  classPrefix = generateClassPrefix('WmlSelectZeroSelect')

  @Input('params') params: WMLSelectZeroParams = new WMLSelectZeroParams()


  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()

  ngOnInit(): void {
    this.params.select.cdref = this.cdref
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}



export class WMLSelectZeroSelectParams {
  constructor(params:Partial<WMLSelectZeroSelectParams>={}){
    Object.assign(
      this,
      {
        ...params
      }
    )
  }
}


