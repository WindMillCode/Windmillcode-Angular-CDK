// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, Input, OnInit } from '@angular/core';




// rxjs
import { Subject } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';
import { WmlSampleTabBodyComponentParams } from '../models';

// misc


@Component({

  selector: 'wml-sample-tab-body',
  templateUrl: './wml-sample-tab-body.component.html',
  styleUrls: ['./wml-sample-tab-body.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush



})
export class WmlSampleTabBodyComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }

  generateClassPrefix(prefix:string) {
    return (val: string) => {
      return prefix + val
    }
  }
  classPrefix = this.generateClassPrefix('WmlSampleTabBody')
  @Input('params') params!:WmlSampleTabBodyComponentParams
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()

  ngOnInit(): void {

  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}


