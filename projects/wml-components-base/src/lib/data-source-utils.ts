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
  pageSize:number = 0
  totalPages:number = 0
  totalItems:number = 0
  getIndexInfo (){
    return getIndexInfo(this.pageNum,this.pageSize)
  }
  calculateCurrentState(totalPages?: number, totalItems?: number, pageSize?: number) {
    let displayPageNum = this.pageNum + 1;

    if (totalItems) {
      this.pageSize = this.data.length;
      this.totalItems = totalItems;
      this.totalPages = Math.ceil(totalItems / (pageSize || this.pageSize));
    } else {
      totalPages = totalPages || displayPageNum;
      this.pageSize = this.data.length;
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
