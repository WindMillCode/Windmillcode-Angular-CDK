// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, Input } from '@angular/core';
import { generateClassPrefix, WMLImage, WMLUIProperty } from '@windmillcode/wml-components-base';




// rxjs
import { Subject } from 'rxjs';
import { getRandomImage, getRandomProductPrice, getRandomProductSubTitle, getRandomProductTitle } from '../functions';


@Component({
    selector: 'wml-table-zero-sample-card',
    templateUrl: './wml-table-zero-sample-card.component.html',
    styleUrls: ['./wml-table-zero-sample-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class WMLTableZeroSampleCardComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }


  classPrefix = generateClassPrefix('WMLTableZeroSampleCard')


  @Input('props') props: WMLTableZeroSampleCardProps = new WMLTableZeroSampleCardProps()


  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()

  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}



export class WMLTableZeroSampleCardProps {
  constructor(props:Partial<WMLTableZeroSampleCardProps>={}){
    Object.assign(
      this,
      {
        ...props
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

  price = new WMLTableZeroSampleCardPriceProps({
    text:getRandomProductPrice(),
  })
  metadata:any = {}
}

export class WMLTableZeroSampleCardPriceProps extends WMLUIProperty {
  constructor(props:Partial<WMLTableZeroSampleCardPriceProps>={}){
    super();
    Object.assign(
      this,
      {
        ...props
      }
    )
  }
  currency = "USD"
}

