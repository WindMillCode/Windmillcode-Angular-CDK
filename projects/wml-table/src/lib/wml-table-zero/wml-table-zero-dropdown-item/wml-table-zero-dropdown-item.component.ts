// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding,  Input, ViewEncapsulation   } from '@angular/core';
import { generateClassPrefix, WMLUIProperty } from '@windmillcode/angular-wml-components-base';

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
export class WMLTableZeroDropdownItemComponent  {

  constructor(
    public cdref:ChangeDetectorRef,
  ) { }

  classPrefix = generateClassPrefix('WMLTableZeroDropdownItem')
  @Input('props') props: WMLTableZeroDropdownItemProps = new WMLTableZeroDropdownItemProps()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()

  listenForChanges = ()=>{
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



export class WMLTableZeroDropdownItemProps {
  constructor(props:Partial<WMLTableZeroDropdownItemProps & {propTexts:Array<WMLUIProperty|string>}>={}){
    let {propTexts} = props
    if(propTexts){

      this.convert(propTexts);
    }
    Object.assign(
      this,
      {
        ...props
      }
    )
  }
  readonly detectChangeSubj = new Subject<void>()
  texts:WMLUIProperty[] = []

  convert(propTexts: (string | WMLUIProperty<any, any>)[]) {
    // @ts-ignore
    this.texts = propTexts.map((text) => {

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


