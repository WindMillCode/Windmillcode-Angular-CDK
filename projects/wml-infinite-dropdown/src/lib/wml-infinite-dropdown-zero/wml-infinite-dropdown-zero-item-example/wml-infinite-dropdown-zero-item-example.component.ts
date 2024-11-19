// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding,  Input, ViewEncapsulation   } from '@angular/core';

// rxjs
import { Subject } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';
import { WMLInfiniteDropdownZeroOption } from '../models';
import { generateClassPrefix } from '@windmillcode/wml-components-base';

// misc



@Component({
    selector: 'wml-infinite-dropdown-zero-item-example',
    templateUrl: './wml-infinite-dropdown-zero-item-example.component.html',
    styleUrls: ['./wml-infinite-dropdown-zero-item-example.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class WMLInfiniteDropdownZeroItemExampleComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }

  classPrefix = generateClassPrefix('WMLSampleInfiniteDropdownItem')
  @Input('props') props: WMLInfiniteDropdownZeroOption = new WMLInfiniteDropdownZeroOption()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()

  listenForChanges=()=>{
    return this.props.detectChangeSubj
    .pipe(
      takeUntil(this.ngUnsub),
      tap(()=>{
        this.cdref.detectChanges()
      })
    )

  }
  ngOnInit(): void {
    this.listenForChanges().subscribe()
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}





