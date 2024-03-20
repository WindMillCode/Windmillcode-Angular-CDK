// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit,  Input, ViewContainerRef, ViewChild, ViewEncapsulation   } from '@angular/core';




// rxjs
import { Subject } from 'rxjs';
import { WmlInfiniteDropdownOption } from '../models';
import { updateClassString,WMLCustomComponent, addCustomComponent  } from '@windmillcode/angular-wml-components-base';


// misc



@Component({

  selector: 'wml-infinite-dropdown-item',
  templateUrl: './wml-infinite-dropdown-item.component.html',
  styleUrls: ['./wml-infinite-dropdown-item.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  encapsulation:ViewEncapsulation.None



})
export class WmlInfiniteDropdownItemComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }

  generateClassPrefix(prefix:string) {
    return (val: string) => {
      return prefix + val
    }
  }
  classPrefix = this.generateClassPrefix('WmlInfiniteDropdownItem')
  @Input('params') params: WmlInfiniteDropdownOption = new WmlInfiniteDropdownOption()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  @ViewChild("customItem", {read:ViewContainerRef,static:true}) customItem!:ViewContainerRef;
  ngUnsub= new Subject<void>()

  initCpnt =()=>{
    if(this.params instanceof WmlInfiniteDropdownOption){
      addCustomComponent(
        this.customItem,
        this.params.custom.cpnt,
        this.params.custom.params
      )
    }
    this.params.cdref = this.cdref
  }

  ngOnInit(): void {
      this.initCpnt()
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}





