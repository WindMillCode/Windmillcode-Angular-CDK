// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding,   Input, ViewContainerRef, ViewChild, ViewEncapsulation   } from '@angular/core';

// rxjs
import { Subject } from 'rxjs';
import { addCustomComponent  } from '@windmillcode/angular-wml-components-base';
import { WMLInfiniteDropdownZeroOption } from '../models';
import { generateClassPrefix } from '@windmillcode/wml-components-base';
// misc

@Component({
    selector: 'wml-infinite-dropdown-zero-item',
    templateUrl: './wml-infinite-dropdown-zero-item.component.html',
    styleUrls: ['./wml-infinite-dropdown-zero-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class WMLInfiniteDropdownZeroItemComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }


  classPrefix = generateClassPrefix('WMLInfiniteDropdownItem')
  @Input('props') props: WMLInfiniteDropdownZeroOption = new WMLInfiniteDropdownZeroOption()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  @ViewChild("customItem", {read:ViewContainerRef,static:true}) customItem!:ViewContainerRef;
  ngUnsub= new Subject<void>()

  initCpnt =()=>{
    if(this.props instanceof WMLInfiniteDropdownZeroOption){
      addCustomComponent(
        this.customItem,
        this.props.custom.cpnt,
        this.props.custom.props
      )
    }
    this.props.cdref = this.cdref
  }

  ngOnInit(): void {
      this.initCpnt()
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}





