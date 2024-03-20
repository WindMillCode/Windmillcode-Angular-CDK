// angular
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  Input,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { addCustomComponent,WMLCustomComponent, WMLUIProperty } from '@windmillcode/angular-wml-components-base';

import { WmlTableZeroSampleCardParams,WmlTableZeroSampleCardComponent, WmlTableZeroSampleCardPriceParams } from '../wml-table-zero-sample-card/wml-table-zero-sample-card.component';





// rxjs
import { Subject, takeUntil, tap } from 'rxjs';
import { getRandomProductTitle, getRandomProductSubTitle, getRandomProductPrice } from '../functions';
import { WmlTableZeroSampleRowComponent, WmlTableZeroSampleRowParams } from '../wml-table-zero-sample-row/wml-table-zero-sample-row.component';



@Component({

  selector: 'wml-table-zero-item',
  templateUrl: './wml-table-zero-item.component.html',
  styleUrls: ['./wml-table-zero-item.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush



})
export class WmlTableZeroItemComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }

  generateClassPrefix(prefix:string) {
    return (val: string) => {
      return prefix + val
    }
  }
  classPrefix = this.generateClassPrefix('WmlTableZeroCardItem')
  @Input('params') params: WmlTableZeroItemParams = new WmlTableZeroItemParams()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  @ViewChild("customItem", {read:ViewContainerRef}) customItem!:ViewContainerRef;
  ngUnsub= new Subject<void>()

  initCpnt =(typeIndex)=>{
    this.params.typeIndex = typeIndex

    addCustomComponent(
      this.customItem,
      this.params.currentCpnt.custom.cpnt,
      this.params.currentCpnt.custom.params
    )
    this.cdref.detectChanges()
  }

  listenForUpdateCpnt =()=>{
    return this.params.listenForUpdateRow
    .pipe(
      takeUntil(this.ngUnsub),
      tap((typeIndex)=>{
        this.customItem.clear()
        this.initCpnt(typeIndex)

      })
    )

  }

  ngAfterViewInit(): void {
    this.initCpnt(this.params.typeIndex)
    this.listenForUpdateCpnt().subscribe()
  }
  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}



export class WmlTableZeroItemParams<CC = any,CP = any> {
  constructor(params:Partial<Omit<WmlTableZeroItemParams,"businessData"> & {
    businessData:{
      [row:string]:string | number | Date | {type?:"string" | "number" |"date",value:any}
    }
   }>={}){
    Object.assign(
      this,
      {
        ...params
      }
    )

    if(this.overwriteBusinessDataValues){

      this.businessData = {
        // @ts-ignore
        title:this.customCpnts[0].custom.params.title.text,
        // @ts-ignore
        subtitle:this.customCpnts[0].custom.params.subtitle.text,
        // @ts-ignore
        price:this.customCpnts[0].custom.params.price.text,
      }
    }
    let arrayBusinessData = Object.entries(this.businessData)
    .map(([key,value])=>{
      let newValue:WmlTableZeroItemParams["businessData"][string] = {type:"string",value}
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

      this.customCpnts[0].custom.params = new WmlTableZeroSampleCardParams({
        title : new WMLUIProperty({
          text:this.businessData.title.value
        }),
        subtitle : new WMLUIProperty({
          text:this.businessData.subtitle.value
        }),
        price : new WmlTableZeroSampleCardPriceParams({
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


  private customCard =new WMLCustomComponent<any,WmlTableZeroSampleCardParams>({
    cpnt:WmlTableZeroSampleCardComponent,
    params:new WmlTableZeroSampleCardParams({
      title : new WMLUIProperty({
        text:getRandomProductTitle()
      }),
      subtitle : new WMLUIProperty({
        text:getRandomProductSubTitle()
      }),
      price : new WmlTableZeroSampleCardPriceParams({
        text:getRandomProductPrice()
      })
    })
  })
  private customRow =new WMLCustomComponent<WmlTableZeroSampleCardComponent,WmlTableZeroSampleCardParams>({
    cpnt:WmlTableZeroSampleRowComponent,
    params:new WmlTableZeroSampleRowParams({
      title : new WMLUIProperty({
        text:getRandomProductTitle()
      }),
      subtitle : new WMLUIProperty({
        text:getRandomProductSubTitle()
      }),
      price : new WmlTableZeroSampleCardPriceParams({
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


