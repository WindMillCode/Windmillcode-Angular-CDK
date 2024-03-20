// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, Input } from '@angular/core';
import { WMLImage, WMLUIProperty } from '@windmillcode/angular-wml-components-base';




// rxjs
import { Subject } from 'rxjs';
import { getRandomImage, getRandomProductPrice, getRandomProductSubTitle, getRandomProductTitle } from '../functions';


@Component({

  selector: 'wml-table-zero-sample-card',
  templateUrl: './wml-table-zero-sample-card.component.html',
  styleUrls: ['./wml-table-zero-sample-card.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush



})
export class WmlTableZeroSampleCardComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }

  generateClassPrefix(prefix:string) {
    return (val: string) => {
      return prefix + val
    }
  }
  classPrefix = this.generateClassPrefix('WmlTableZeroSampleCard')


  @Input('params') params: WmlTableZeroSampleCardParams = new WmlTableZeroSampleCardParams()


  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()

  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}



export class WmlTableZeroSampleCardParams {
  constructor(params:Partial<WmlTableZeroSampleCardParams>={}){
    Object.assign(
      this,
      {
        ...params
      }
    )

    this.img = new WMLImage({
      src:getRandomImage(),
      alt:"Windmillcode logo"
    })
  }

  container = new WMLUIProperty({
    click:()=>{
      console.log("clicked card "+this.title.text)
    }
  })
  img!:WMLImage
  title = new WMLUIProperty({
    text:getRandomProductTitle()
  })
  subtitle = new WMLUIProperty({
    text:getRandomProductSubTitle()
  })

  price = new WmlTableZeroSampleCardPriceParams({
    text:getRandomProductPrice(),
  })
  metadata:any = {}
}

export class WmlTableZeroSampleCardPriceParams extends WMLUIProperty {
  constructor(params:Partial<WmlTableZeroSampleCardPriceParams>={}){
    super();
    Object.assign(
      this,
      {
        ...params
      }
    )
  }
  currency = "USD"
}

