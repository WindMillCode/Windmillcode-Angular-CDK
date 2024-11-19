// angular
import {
  ChangeDetectionStrategy,ChangeDetectorRef,Component,HostBinding,Input,ViewChild,ViewContainerRef,
} from '@angular/core';
import { generateClassPrefix,WMLCustomComponent, WMLUIProperty } from '@windmillcode/wml-components-base';

import { WMLTableZeroSampleCardProps,WMLTableZeroSampleCardComponent, WMLTableZeroSampleCardPriceProps } from '../wml-table-zero-sample-card/wml-table-zero-sample-card.component';

// rxjs
import { Subject, takeUntil, tap } from 'rxjs';
import { getRandomProductTitle, getRandomProductSubTitle, getRandomProductPrice } from '../functions';
import { WMLTableZeroSampleRowComponent, WMLTableZeroSampleRowProps } from '../wml-table-zero-sample-row/wml-table-zero-sample-row.component';
import { addCustomComponent } from '@windmillcode/angular-wml-components-base';



@Component({
    selector: 'wml-table-zero-item',
    templateUrl: './wml-table-zero-item.component.html',
    styleUrls: ['./wml-table-zero-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class WMLTableZeroItemComponent  {

  constructor(
    public cdref:ChangeDetectorRef,
  ) { }

  classPrefix = generateClassPrefix('WMLTableZeroCardItem')
  @Input('props') props: WMLTableZeroItemProps = new WMLTableZeroItemProps()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  @ViewChild("customItem", {read:ViewContainerRef}) customItem!:ViewContainerRef;
  ngUnsub= new Subject<void>()

  initCpnt =(typeIndex)=>{
    this.props.typeIndex = typeIndex

    addCustomComponent(
      this.customItem,
      this.props.currentCpnt.custom.cpnt,
      this.props.currentCpnt.custom.props
    )
    this.cdref.detectChanges()
  }

  listenForUpdateCpnt =()=>{
    return this.props.listenForUpdateRow
    .pipe(
      takeUntil(this.ngUnsub),
      tap((typeIndex)=>{
        this.customItem.clear()
        this.initCpnt(typeIndex)

      })
    )

  }

  ngAfterViewInit(): void {
    this.initCpnt(this.props.typeIndex)
    this.listenForUpdateCpnt().subscribe()
  }
  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}



export class WMLTableZeroItemProps<CC = any,CP = any> {
  constructor(props:Partial<Omit<WMLTableZeroItemProps,"businessData"> & {
    businessData:{
      [row:string]:string | number | Date | {type?:"string" | "number" |"date",value:any}
    }
   }>={}){
    Object.assign(
      this,
      {
        ...props
      }
    )

    if(this.overwriteBusinessDataValues){

      this.businessData = {
        // @ts-ignore
        title:this.customCpnts[0].custom.props.title.text,
        // @ts-ignore
        subtitle:this.customCpnts[0].custom.props.subtitle.text,
        // @ts-ignore
        price:this.customCpnts[0].custom.props.price.text,
      }
    }
    let arrayBusinessData = Object.entries(this.businessData)
    .map(([key,value])=>{
      let newValue:WMLTableZeroItemProps["businessData"][string] = {type:"string",value}
      if(value.value){
        newValue = value
      }
      if(!value.type){
        if(typeof value === "string"){
          newValue = {type:"string",value}
        }
        if(typeof value === "number"){
          newValue = {type:"number",value}
        }
        if(value instanceof Date){
          newValue = {type:"date",value}
        }

      }


      return [key, newValue]
    })

    this.businessData =Object.fromEntries(arrayBusinessData)
    if(this.overriteDisplayDataValues){

      this.customCpnts[0].custom.props = new WMLTableZeroSampleCardProps({
        title : new WMLUIProperty({
          text:this.businessData.title.value
        }),
        subtitle : new WMLUIProperty({
          text:this.businessData.subtitle.value
        }),
        price : new WMLTableZeroSampleCardPriceProps({
          text:this.businessData.price.value
        })
      })
    }
  }
  overwriteBusinessDataValues = false
  overriteDisplayDataValues = false
  businessData:{
    [row:string]:{type:"string" | "number" |"date",value:any}
  } ={}


  private customCard =new WMLCustomComponent<any,WMLTableZeroSampleCardProps>({
    cpnt:WMLTableZeroSampleCardComponent,
    props:new WMLTableZeroSampleCardProps({
      title : new WMLUIProperty({
        text:getRandomProductTitle()
      }),
      subtitle : new WMLUIProperty({
        text:getRandomProductSubTitle()
      }),
      price : new WMLTableZeroSampleCardPriceProps({
        text:getRandomProductPrice()
      })
    })
  })
  private customRow =new WMLCustomComponent<WMLTableZeroSampleCardComponent,WMLTableZeroSampleCardProps>({
    cpnt:WMLTableZeroSampleRowComponent,
    props:new WMLTableZeroSampleRowProps({
      title : new WMLUIProperty({
        text:getRandomProductTitle()
      }),
      subtitle : new WMLUIProperty({
        text:getRandomProductSubTitle()
      }),
      price : new WMLTableZeroSampleCardPriceProps({
        text:getRandomProductPrice()
      })
    })
  })
  customCpnts = [
    {
      custom:this.customCard,
      trContainer: new WMLUIProperty({})
    },
    {
      custom:this.customRow,
      trContainer: new WMLUIProperty({
        style:{
          flex:"1 0 100%",
          height:"10rem",
          minHeight:"10rem"
        }
      })
    }
  ]
  typeIndex = 0
  get currentCpnt (){
    return this.customCpnts[this.typeIndex]
  }
  listenForUpdateRow = new Subject<number>()

}


