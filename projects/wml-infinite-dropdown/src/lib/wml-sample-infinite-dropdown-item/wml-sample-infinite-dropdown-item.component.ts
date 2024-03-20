// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit,  Input, ViewEncapsulation   } from '@angular/core';
import { WMLUIProperty } from '@windmillcode/angular-wml-components-base';




// rxjs
import { Subject } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';
import { WmlInfiniteDropdownOption } from '../models';

// misc



@Component({

  selector: 'wml-sample-infinite-dropdown-item',
  templateUrl: './wml-sample-infinite-dropdown-item.component.html',
  styleUrls: ['./wml-sample-infinite-dropdown-item.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  encapsulation:ViewEncapsulation.None


})
export class WmlSampleInfiniteDropdownItemComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }

  generateClassPrefix(prefix:string) {
    return (val: string) => {
      return prefix + val
    }
  }
  classPrefix = this.generateClassPrefix('WmlSampleInfiniteDropdownItem')


  @Input('params') params: WmlInfiniteDropdownOption = new WmlInfiniteDropdownOption()


  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()

  listenForChanges=()=>{
    return this.params.detectChangeSubj
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





