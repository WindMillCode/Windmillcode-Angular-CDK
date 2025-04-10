import { WMLConstructorDecorator } from "./models"

let getStartIndex = (pageNum,pageSize)=>{
  return pageNum * pageSize
}
let getEndIndex = (pageNum,pageSize)=>{
  return (pageNum+1) * pageSize
}
let getIndexInfo =(pageNum,pageSize)=>{
  return {
    startIndex:getStartIndex(pageNum,pageSize),
    endIndex:getEndIndex(pageNum,pageSize),
  }
}


export type WMLAPIPageRequestModelFilterPredicateEnum= {
  EQUALS,STARTSWITH,ENDSWITH,CONTAINS
}

/**
 * @deprecated use WMLAPIPageRequestModel instead
*/
@WMLConstructorDecorator
export class WMLAPIPaginationRequestModel {
  constructor(props: Partial<WMLAPIPaginationRequestModel> = {}) {}
  fields:Array<{value:any}> =[]
  filter:Array<{key:string,value:any,predicate?:WMLAPIPageRequestModelFilterPredicateEnum}> =[]
  sort:Array<{key:string,direction:"ASC" | "DESC" |"" }> =[]
  cursor:{
    value?:string
    order?:number
  } = {}
  pageNum:number = 0
  pageSize:number = 5
  errorOccuredIsPresent = false
  getIndexInfo (){
    return getIndexInfo(this.pageNum,this.pageSize)
  }
}

export let WMLAPIPageRequestModel = WMLAPIPaginationRequestModel

/**
 * @deprecated use WMLAPIPageResponseModel instead
*/
@WMLConstructorDecorator
export class WMLAPIPaginationResponseModel<DT=any>  {
  constructor(props: Partial<WMLAPIPaginationResponseModel<DT>> = {}) {}


  columns:Array<{
    value:string,
    type?:string
  }>=[]
  data:Array<DT> =[]
  metadata:{
    startOrderValue?:number
  }={}
  pageNum:number = 0
  pageSize:number = 5
  totalPages:number = 0
  totalItems:number = 0
  getIndexInfo (){
    return getIndexInfo(this.pageNum,this.pageSize)
  }
  calculateCurrentState(totalPages?: number, totalItems?: number, pageSize?: number) {
    let displayPageNum = this.pageNum + 1;

    this.pageSize = pageSize ?? this.data.length;
    if (totalItems) {
      this.totalItems = totalItems;
      this.totalPages = Math.ceil(totalItems / this.pageSize);
    } else {
      totalPages = totalPages ?? displayPageNum;
      this.totalPages = totalPages;
      this.totalItems = totalPages * this.pageSize;
    }

    return this;
  }

  calcSectionBasedOnPageDetails(data: any[] = [], pageSize: number = 1, pageNum: number = 1) {
    const startIndex = pageNum * pageSize;
    const endIndex = (pageNum + 1) * pageSize;
    this.pageNum = pageNum;
    this.pageSize = pageSize;
    this.totalItems = data.length;
    this.totalPages = Math.ceil(data.length / pageSize);
    this.data = data.slice(startIndex, endIndex);
  }
}

export let  WMLAPIPageResponseModel = WMLAPIPaginationResponseModel
