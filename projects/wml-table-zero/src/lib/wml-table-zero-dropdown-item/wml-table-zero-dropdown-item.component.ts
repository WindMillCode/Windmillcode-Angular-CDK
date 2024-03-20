// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit,  Input, ViewEncapsulation   } from '@angular/core';
import { WMLUIProperty } from '@windmillcode/angular-wml-components-base';




// rxjs
import { Subject } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';

// misc



@Component({

  selector: 'wml-table-zero-dropdown-item',
  templateUrl: './wml-table-zero-dropdown-item.component.html',
  styleUrls: ['./wml-table-zero-dropdown-item.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None


})
export class WmlTableZeroDropdownItemComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }

  generateClassPrefix(prefix:string) {
    return (val: string) => {
      return prefix + val
    }
  }
  classPrefix = this.generateClassPrefix('WmlTableZeroDropdownItem')


  @Input('params') params: WmlTableZeroDropdownItemParams = new WmlTableZeroDropdownItemParams()


  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()

  listenForChanges = ()=>{
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



export class WmlTableZeroDropdownItemParams {
  constructor(params:Partial<WmlTableZeroDropdownItemParams & {paramTexts:Array<WMLUIProperty|string>}>={}){
    let {paramTexts} = params
    if(paramTexts){

      this.convert(paramTexts);
    }
    Object.assign(
      this,
      {
        ...params
      }
    )
  }
  readonly detectChangeSubj = new Subject<void>()
  texts:WMLUIProperty[] = []

  convert(paramTexts: (string | WMLUIProperty<any, any>)[]) {
    // @ts-ignore
    this.texts = paramTexts.map((text) => {

      if (text.constructor.name === "WMLUIProperty") {
        return text;
      }
      else {
        return new WMLUIProperty({
          // @ts-ignore
          text
        });
      }

    });
  }
}


