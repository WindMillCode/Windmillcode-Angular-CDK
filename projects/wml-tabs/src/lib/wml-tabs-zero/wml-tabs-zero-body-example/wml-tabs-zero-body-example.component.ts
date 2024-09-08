// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, Input } from '@angular/core';

// rxjs
import { Subject } from 'rxjs';
import { WMLSampleTabBodyComponentProps } from '../models';
import { generateClassPrefix } from '@windmillcode/wml-components-base';

// misc


@Component({

  selector: 'wml-tabs-zero-body-example',
  templateUrl: './wml-tabs-zero-body-example.component.html',
  styleUrls: ['./wml-tabs-zero-body-example.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush



})
export class WMLSampleTabBodyComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }
  classPrefix = generateClassPrefix('WMLSampleTabBody')
  @Input('props') props!:WMLSampleTabBodyComponentProps
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()

  ngOnInit(): void {

  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}


