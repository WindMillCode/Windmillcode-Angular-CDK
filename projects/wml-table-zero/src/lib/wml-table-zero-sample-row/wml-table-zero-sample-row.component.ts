// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit,  Input   } from '@angular/core';




// rxjs
import { Subject } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';
import { WmlTableZeroSampleCardParams } from '../wml-table-zero-sample-card/wml-table-zero-sample-card.component';

// misc



@Component({

  selector: 'wml-table-zero-sample-row',
  templateUrl: './wml-table-zero-sample-row.component.html',
  styleUrls: ['./wml-table-zero-sample-row.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush



})
export class WmlTableZeroSampleRowComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }

  generateClassPrefix(prefix:string) {
    return (val: string) => {
      return prefix + val
    }
  }
  classPrefix = this.generateClassPrefix('WmlTableZeroSampleRow')


  @Input('params') params: WmlTableZeroSampleRowParams = new WmlTableZeroSampleRowParams()


  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()

  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}



export class WmlTableZeroSampleRowParams extends WmlTableZeroSampleCardParams {
  constructor(params:Partial<WmlTableZeroSampleRowParams>={}){
    super(params)

  }
}


