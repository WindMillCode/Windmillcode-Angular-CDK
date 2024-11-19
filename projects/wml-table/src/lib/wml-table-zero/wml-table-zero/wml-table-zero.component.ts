// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding,  Input, Renderer2, ViewContainerRef, ComponentRef, ViewEncapsulation   } from '@angular/core';


// rxjs
import { Observable, Subject, fromEvent, of } from 'rxjs';
import { distinctUntilChanged, map, startWith, takeUntil,tap } from 'rxjs/operators';
import { WMLAPIPaginationRequestModel, WMLAPIPaginationResponseModel,   WMLUIProperty,fillMissingProperties,WMLDeepPartial, generateClassPrefix } from '@windmillcode/wml-components-base';
import { WMLTableZeroItemProps } from '../wml-table-zero-item/wml-table-zero-item.component';
import { WMLInfiniteDropdownZeroOption, WMLInfiniteDropdownZeroProps } from '@windmillcode/angular-wml-infinite-dropdown';
import { WMLPopupZeroProps } from '@windmillcode/angular-wml-popup';
import { WMLTableZeroSelectPageComponent, WMLTableZeroSelectPageProps } from '../wml-table-zero-select-page/wml-table-zero-select-page.component';
import { WMLTableZeroPopupOverlayComponent, WMLTableZeroPopupOverlayProps } from '../wml-table-zero-popup-overlay/wml-table-zero-popup-overlay.component';
import { WMLTableZeroPageSizeComponent, WMLTableZeroPageSizeProps } from '../wml-table-zero-page-size/wml-table-zero-page-size.component';
import { WMLTableZeroFilterComponent, WMLTableZeroFilterProps } from '../wml-table-zero-filter/wml-table-zero-filter.component';
import { WMLTableZeroSortComponent, WMLTableZeroSortProps } from '../wml-table-zero-sort/wml-table-zero-sort.component';
import {  WMLTableZeroTablePredicateReturnValue } from '../models';
import { WMLTableZeroDropdownItemComponent, WMLTableZeroDropdownItemProps } from '../wml-table-zero-dropdown-item/wml-table-zero-dropdown-item.component';
import { WMLTableZeroRowTypeComponent, WMLTableZeroRowTypeProps } from '../wml-table-zero-row-type/wml-table-zero-row-type.component';
import { getCSSVARS } from '../private-utils/common-utils';
import { addCustomComponent, WMLAngularCustomComponent } from '@windmillcode/angular-wml-components-base';

// misc
@Component({
    selector: 'wml-table-zero',
    templateUrl: './wml-table-zero.component.html',
    styleUrls: ['./wml-table-zero.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class WMLTableZeroComponent  {

  constructor(
    public cdref:ChangeDetectorRef,
    public renderer2:Renderer2,
    public vcr:ViewContainerRef
  ) { }


  classPrefix = generateClassPrefix('WMLTableZero')
  @Input('props') props: WMLTableZeroProps = new WMLTableZeroProps()
  // @Input('props') props!: WMLTableZeroProps
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()
  updateRowTypeSubj=new Subject<number>()
  updatePageNumberSubj= new Subject<number>()
  updatePageSizeSubj = new Subject<number>()
  updateFilterSubj = new Subject<WMLAPIPaginationRequestModel["filter"]>()
  updateSortSubj = new Subject<WMLAPIPaginationRequestModel["sort"]>()
  overlayRef!:ComponentRef<any> | null

  closePopup=(evt?)=>{
    if(evt){
      if(evt.target.className !== "WMLPopupZeroPod1"){
        return
      }
    }
    this.renderer2.removeChild(document.querySelector("body"),this.overlayRef!.location.nativeElement)
    this.overlayRef = null
  }
  openPopup(cpntInfo:WMLAngularCustomComponent) {
    let popupProps = new WMLPopupZeroProps({
      cpnt : cpntInfo.cpnt,
      props : cpntInfo.props ?? {}
    })
    this.overlayRef = addCustomComponent(
      this.vcr,
      WMLTableZeroPopupOverlayComponent,
      new WMLTableZeroPopupOverlayProps({
        overlay:new WMLUIProperty({
          click:this.closePopup
        }),
        popupProps
      })
    )

    this.renderer2.appendChild( document.querySelector("body"),this.overlayRef.location.nativeElement);
    this.cdref.detectChanges();
  }
  updateTable(obs$?:Observable<{req:WMLAPIPaginationRequestModel, res:WMLAPIPaginationResponseModel}>){
    return obs$?.pipe(
      takeUntil(this.ngUnsub),
      map(({req,res})=>{
        this.props.instructionStackValues.unshift({req,res})
        if(this.props.instructionStackValues.length >= this.props.instructionStackLimit){
          this.props.instructionStackValues.pop()
        }
        return res
      }),
      tap((res)=>{

        this.props.displayRows = res.data
        this.cdref.detectChanges()
      })
    )
  }
  initTable(){
    this.props.cdref = this.cdref
    return this.updateTable(this.props.performTableAction())
    ?.pipe(
      takeUntil(this.ngUnsub),
      tap(()=>{
        this.props.changeRowType(this.props.currentRowType)
        this.changeRowTypeBasedOnWindowSize().subscribe()
      })
    )
    .subscribe()
  }
  listenForSelectPage = ()=>{
    return this.listenForTableEvent(this.updatePageNumberSubj,this.props.selectPage)
  }
  listenForPageSize = ()=>{
    return this.listenForTableEvent(this.updatePageSizeSubj,this.props.selectPageSize)
  }
  listenForFilter = ()=>{
    return this.listenForTableEvent(this.updateFilterSubj,this.props.filterTable)
  }
  listenForSort = ()=>{
    return this.listenForTableEvent(this.updateSortSubj,this.props.sortTable)
  }
  listenForRowType =()=>{
    return this.listenForTableEvent(this.updateRowTypeSubj,this.props.changeRowType)
  }
  listenForTableEvent = (listener:Subject<any>,callback:(reqBody:any)=>Observable<{
    req: WMLAPIPaginationRequestModel;
    res: WMLAPIPaginationResponseModel;
  }> | undefined)=>{

    return listener
    .pipe(
      takeUntil(this.ngUnsub),
      tap((res)=>{
        this.updateTable(callback(res))?.subscribe()
        this.closePopup()
        this.cdref.detectChanges()
      })
    )
  }

  listenForTableControls =()=>{
    return this.props.tableControlFiredSubj
    .pipe(
      takeUntil(this.ngUnsub),
      tap((key)=>{
        let instructions =  this.props.instructionStackValues[0]
        switch (key) {
          case WMLTableZeroControlEnums.PREV_PAGE:
            this.updateTable(this.props.previousPage())?.subscribe()
            break;

          case WMLTableZeroControlEnums.NEXT_PAGE:
            this.updateTable(this.props.nextPage())?.subscribe()
            break;

          case WMLTableZeroControlEnums.SELECT_PAGE:
            this.openPopup(new WMLAngularCustomComponent({
              cpnt:WMLTableZeroSelectPageComponent,
              props:new WMLTableZeroSelectPageProps({
                title:this.props.textContent.selectPage.title,
                pages:this.props.instructionStackValues[0].res.totalPages,
                updatePageNumberSubj:this.updatePageNumberSubj
              })
            }));
            break;

          case WMLTableZeroControlEnums.PAGE_SIZE:
            this.openPopup(new WMLAngularCustomComponent({
              cpnt:WMLTableZeroPageSizeComponent,
              props:new WMLTableZeroPageSizeProps({
                title:this.props.textContent.pageSize.title,
                pageSize:this.props.instructionStackValues[0].req.pageSize,
                updatePageSizeSubj:this.updatePageSizeSubj,

              })
            }));
            break;

          case WMLTableZeroControlEnums.FILTER:
            this.openPopup(new WMLAngularCustomComponent({
              cpnt:WMLTableZeroFilterComponent,
              props:new WMLTableZeroFilterProps({
                ...this.props.textContent.filter,
                filter:this.props.instructionStackValues[0].req.filter,
                updateFilterSubj:this.updateFilterSubj,
                availableColumns:instructions.res.columns.map((column)=>column.value)
              })
            }));
            break;

            case WMLTableZeroControlEnums.SORT:
              this.openPopup(new WMLAngularCustomComponent({
                cpnt:WMLTableZeroSortComponent,
                props:new WMLTableZeroSortProps({
                  ...this.props.textContent.sort,
                  sort:this.props.instructionStackValues[0].req.sort,
                  updateSortSubj:this.updateSortSubj,
                  availableColumns:instructions.res.columns.map((column)=>column.value)
                })
              }));
              break;

            case WMLTableZeroControlEnums.ROW_TYPE:
              this.openPopup(new WMLAngularCustomComponent({
                cpnt:WMLTableZeroRowTypeComponent,
                props:new WMLTableZeroRowTypeProps({
                  ...this.props.textContent.rowType,
                  updateRowTypeSubj:this.updateRowTypeSubj
                })
              }));
              break;


          default:
            break;
        }

      })
    )


  }

  changeRowTypeBasedOnWindowSize =()=>{
    if(!this.props.changeRowTypeBasedOnWindowSizeIsPresent){
      return of()
    }
    let CSSVARS = getCSSVARS()
    let mobile = window.matchMedia(CSSVARS.wmlMobile)
    let tablet = window.matchMedia(CSSVARS.wmlTablet);
    let desktop = window.matchMedia(CSSVARS.wmlDesktop)
    return fromEvent(window,"resize")
    .pipe(
      startWith({}),
      takeUntil(this.ngUnsub),
      map(()=>tablet.matches || desktop.matches),
      distinctUntilChanged(),
      tap(()=>{
        if(mobile.matches){
          this.props.changeRowType(0)
        }
        else if(tablet.matches || desktop.matches){
          this.props.changeRowType(1)
        }
      })
    )

  }

  ngOnInit(): void {
    this.initTable()
    this.listenForTableControls().subscribe()
    this.listenForSelectPage().subscribe()
    this.listenForPageSize().subscribe()
    this.listenForFilter().subscribe()
    this.listenForSort().subscribe()
    this.listenForRowType().subscribe()

  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
    // @ts-ignore
    this.props.ngUnsub.next();
    // @ts-ignore
    this.props.ngUnsub.complete()
  }

}


export enum WMLTableZeroEnums {
  MOVE_TO_PREV_PAGE_API_FAIL,
  MOVE_TO_PREV_PAGE_LIMIT_FAIL,
  MOVE_TO_PREV_PAGE_SUCCESS,
  MOVE_TO_NEXT_PAGE_API_FAIL,
  MOVE_TO_NEXT_PAGE_LIMIT_FAIL,
  MOVE_TO_NEXT_PAGE_SUCCESS,
  PAGE_SIZE_TOO_LARGE,
  PAGE_SIZE_TOO_SMALL
}

enum WMLTableZeroControlEnums{
  PREV_PAGE,
  NEXT_PAGE,
  SELECT_PAGE,
  PAGE_SIZE,
  FILTER,
  SORT,
  ROW_TYPE
}
type ArraySortPredicate = (a,b)=>number

export class WMLTableZeroProps {
  constructor(props:Partial<WMLTableZeroProps &{propsTextContent:WMLDeepPartial<WMLTableZeroProps["textContent"]>}>={}){
    Object.assign(
      this,
      {
        ...props
      }
    )
    if(!props.tablePredicate){
      this.businessRows =Array(70)
      .fill(null)
      .map((nullVal,index0)=>{
        return  new WMLTableZeroItemProps({
          overwriteBusinessDataValues:true
        })
      })
    }
    fillMissingProperties(props.propsTextContent ??{},this.textContent)

    this.tableControls= new WMLInfiniteDropdownZeroProps({
      items:this.generateTableControlItems()
    })
  }


  private readonly ngUnsub = new Subject()
  cdref!:ChangeDetectorRef
  instructionStackValues: Array<{
    req:WMLAPIPaginationRequestModel,
    res:WMLAPIPaginationResponseModel
  }> = []
  instructionStackCachingLimit =3
  instructionStackLimit =3
  displayRows : WMLTableZeroItemProps[] = []
  businessRows: WMLTableZeroItemProps[]=[]
  textContent = {
    controlItems:{
      previous: "Previous",
      next: "Next",
      selectPage: "Select Page",
      itemsPerPage: "Items Per Page",
      filter: "Filter",
      sort: "Sort",
      page:"Page",
      pageSize:"Page Size",
      rowType:"Row Type"
    },
    rowType:{
      title:"Select Row Type",
      options:["Card","Row"]
    },
    selectPage:{
      title:"Select Page"
    },
    pageSize:{
      title:"Enter Page Size"
    },
    filter:{
      title : "Modify Filters",
      subtitles : [
        "Filter values filter based on the beginning of the word in the column",
        "To specify global filter leave the Filter Key input empty"
      ],
      columnText : "Available Columns",
      add0BtnText : "Add Filter",
      remove0BtnText : "Remove",
      submit0Btn : "Submit",
      availableColumnsText : "",
      showAvailableColumnsByTranslate : false,
      fieldLabels : ["Filter Column","Filter Value"],
    },
    sort:{
      title : "Modify Sorting",
      subtitles : [
        "Sort values filter based on the beginning of the word in the column",
        "To specify global filter leave the Sort Key input empty"
      ],
      columnText : "Available Columns",
      add0BtnText : "Add Sort",
      remove0BtnText : "Remove",
      submit0Btn : "Submit",
      availableColumnsText : "",
      showAvailableColumnsByTranslate : false,
      fieldLabels : ["Sort Column","Sort Direction"],
      sortDirectionPropsOptions: ["ASC","DESC"]
    }
  }
  currentRowType = 0
  changeRowTypeBasedOnWindowSizeIsPresent = true


  private currentPageOption = new WMLInfiniteDropdownZeroOption({

    custom:new WMLAngularCustomComponent<WMLTableZeroDropdownItemComponent,WMLTableZeroDropdownItemProps>({
      cpnt:WMLTableZeroDropdownItemComponent,
      props:new WMLTableZeroDropdownItemProps({
        propTexts:[this.textContent.controlItems.page,""]
      })
    })
  })
  private currentPageSizeOption = new WMLInfiniteDropdownZeroOption({

    custom:new WMLAngularCustomComponent<WMLTableZeroDropdownItemComponent,WMLTableZeroDropdownItemProps>({
      cpnt:WMLTableZeroDropdownItemComponent,
      props:new WMLTableZeroDropdownItemProps({
        propTexts:[this.textContent.controlItems.pageSize,""]
      })
    })
  })
  generateSpacingOption =()=>new WMLInfiniteDropdownZeroOption({
    style:{
      height:"calc(35.6198/16 * 1rem)"
    }
  })
  tableControls!:WMLInfiniteDropdownZeroProps
  tableControlFiredSubj = new Subject<WMLTableZeroControlEnums>()
  turnToPrevPageEvent = new Subject<WMLTableZeroEnums>()
  turnToNextPageEvent = new Subject<WMLTableZeroEnums>()
  selectPageEvent =new Subject<WMLTableZeroEnums>()
  changePageSizeEvent =new Subject<WMLTableZeroEnums>()
  filterTableEvent = new Subject<WMLTableZeroEnums>()


  private generateTableControlItems(){
    let {previous,next,selectPage,itemsPerPage,filter,sort,page,pageSize,rowType} = this.textContent.controlItems
    let items = [previous,next,selectPage,itemsPerPage,filter,sort,rowType]
    .map((text,index0)=>{
      return new WMLInfiniteDropdownZeroOption({
        text,
        click:()=>{
          this.tableControlFiredSubj.next(index0)
        }
      })
    })

    this.currentPageOption.custom.props.texts[0].text = page
    this.currentPageSizeOption.custom.props.texts[0].text = pageSize
    items.splice(2,0,this.currentPageOption)
    items.splice(4,0,this.generateSpacingOption())
    items.splice(6,0,this.currentPageSizeOption)
    items.splice(7,0,this.generateSpacingOption())
    return items
  }
  previousPage = ()=>{
    let current = this.instructionStackValues[0]
    if(current.res.pageNum === 0){
      this.turnToPrevPageEvent.next(WMLTableZeroEnums.MOVE_TO_PREV_PAGE_LIMIT_FAIL)
      return
    }
    let reqBody = new WMLAPIPaginationRequestModel(current.req)
    reqBody.pageNum -=1
    this.updateCurrentPageCounter(reqBody);
    return this.performTableAction(reqBody)
  }

  nextPage = ()=>{
    let current = this.instructionStackValues[0]
    if(current.res.pageNum >= current.res.totalPages-1){
      this.turnToNextPageEvent.next(WMLTableZeroEnums.MOVE_TO_NEXT_PAGE_LIMIT_FAIL)
      return
    }
    let reqBody = new WMLAPIPaginationRequestModel(current.req)
    reqBody.pageNum +=1
    this.updateCurrentPageCounter(reqBody);
    return this.performTableAction(reqBody)
  }
  selectPage = (pageNum:number)=>{
    let current = this.instructionStackValues[0]
    if(pageNum > current.res.totalPages-1){
      this.selectPageEvent.next(WMLTableZeroEnums.MOVE_TO_NEXT_PAGE_LIMIT_FAIL)
      return
    }
    else if(pageNum < 0){
      this.selectPageEvent.next(WMLTableZeroEnums.MOVE_TO_PREV_PAGE_LIMIT_FAIL)
      return
    }
    let reqBody = new WMLAPIPaginationRequestModel(current.req)
    reqBody.pageNum = pageNum
    this.updateCurrentPageCounter(reqBody);
    return this.performTableAction(reqBody)
  }
  selectPageSize = (pageSize:number)=>{
    let current = this.instructionStackValues[0]
    if(pageSize > current.res.totalItems){
      this.changePageSizeEvent.next(WMLTableZeroEnums.PAGE_SIZE_TOO_LARGE)
      return
    }
    else if(pageSize < 0){
      this.changePageSizeEvent.next(WMLTableZeroEnums.PAGE_SIZE_TOO_SMALL)
      return
    }
    let reqBody = new WMLAPIPaginationRequestModel(current.req)
    let prevStartIndex = reqBody.pageSize*reqBody.pageNum
    let newPageNumber = Math.floor(prevStartIndex/pageSize)
    reqBody.pageNum =newPageNumber
    reqBody.pageSize = pageSize
    this.updateCurrentPageCounter(reqBody);
    this.updateCurrentPageSize(reqBody);
    return this.performTableAction(reqBody)
  }
  filterTable = (filters:{key:WMLInfiniteDropdownZeroOption,value:string}[])=>{
    let current = this.instructionStackValues[0]
    let reqBody = new WMLAPIPaginationRequestModel(current.req)

    filters.forEach((filter)=>{
      filter.key = filter.key.value
    })
    // @ts-ignore
    reqBody.filter =filters
    reqBody.pageNum  = 0
    return this.performTableAction(reqBody)
  }
  sortTable = (sorts:{key:WMLInfiniteDropdownZeroOption,direction:string}[])=>{
    let current = this.instructionStackValues[0]
    let reqBody = new WMLAPIPaginationRequestModel(current.req)
    sorts.forEach((sort)=>{
      sort.key = sort.key.value
    })
    // @ts-ignore
    reqBody.sort =sorts
    return this.performTableAction(reqBody)
  }
  updateRowTypeForEachRow(rows= this.displayRows) {
    rows.forEach((row) => {
      row.typeIndex = this.currentRowType;
      row.listenForUpdateRow.next(this.currentRowType);
    });
  }
  changeRowType = (typeIndex:number)=>{

    let current = this.instructionStackValues[0]
    let reqBody = new WMLAPIPaginationRequestModel(current.req)
    this.currentRowType = typeIndex
    this.updateRowTypeForEachRow();
    return this.performTableAction(reqBody)
  }

  private updateCurrentPageCounter(reqBody: WMLAPIPaginationRequestModel) {
    this.currentPageOption.custom.props.texts[1].text =  (reqBody.pageNum + 1);
    this.currentPageOption.custom.props.detectChangeSubj.next()
    this.currentPageOption.detectChangeSubj.next()
  }
  private updateCurrentPageSize(reqBody: WMLAPIPaginationRequestModel) {
    this.currentPageSizeOption.custom.props.texts[1].text =  (reqBody.pageSize);
    this.currentPageSizeOption.custom.props.detectChangeSubj.next()
    this.currentPageSizeOption.detectChangeSubj.next()
  }
  filterPredicate = (infos:WMLAPIPaginationRequestModel["filter"], rows:WMLTableZeroItemProps[])=>{

    let finalRows:WMLTableZeroItemProps[] = []

    infos.forEach((info,index0)=>{
      let targetRows = index0 === 0 ? rows : finalRows

      let result = targetRows.filter((row)=>{
        let {businessData} = row
        let infoValue = info.value.toLowerCase()
        if(info.key ===""){
          return Object.values(businessData).some((cell)=>{
            return (cell.value as string).toLowerCase().startsWith(infoValue)
          })
        }
        let cell = businessData?.[info.key]
        if(!cell){
          return true
        }
        if(cell.type ==="string"){
          return (cell.value as string).toLowerCase().startsWith(infoValue)
        }
        else{
          throw new Error("This table can only work with strings")
        }
      })
      finalRows =result
    })
    return finalRows
  }

  private removeInvalidRows= (infos:WMLAPIPaginationRequestModel["sort"], rows:WMLTableZeroItemProps[])=>{
    let newInfos = infos.filter((info)=>{
      return rows.every((row)=>{
        return row.businessData[info.key]
      })
    })
    return newInfos
  }
  private checkIfAllRowTypesMatch(targetRows: WMLTableZeroItemProps[], infos: WMLAPIPaginationRequestModel["sort"]) {

    infos.forEach((info,index0)=>{
      let firstRowType = targetRows[0].businessData[info.key].type;
      let doRowTypesMatch = targetRows.every((row) => {
        let { businessData } = row;
        return businessData[info.key].type === firstRowType;
      });
      if (!doRowTypesMatch) {
        throw new Error("all row values for sorting must have the same type, check each value in the row and try again");
      }
    })

  }
  private generateSortOrders(infos: WMLAPIPaginationRequestModel["sort"], rows: WMLTableZeroItemProps[]):Array<ArraySortPredicate> {
    let sortOrders:Array<ArraySortPredicate> = [];
    infos.forEach((info, index0) => {
      let { key, direction } = info;
      let { type } = rows[0].businessData[key];
      if (type === "string") {
        sortOrders.push(
          (a, b) => {
            let valueA:string =a.businessData[key].value
            let valueB:string =b.businessData[key].value
            let result =  direction === "DESC" ? valueB.localeCompare(valueA) : valueA.localeCompare(valueB)

            return result
          }
        );
      }
      else if (["number", "date"].includes(type)) {
        sortOrders.push(
          (a, b) => {
            let valueA:number =a.businessData[key].value
            let valueB:number =b.businessData[key].value
            return direction === "DESC" ? valueB - valueA : valueA - valueB
          }
        );
      }

    });
    return sortOrders;
  }
  private  multiLevelSort = (rows:any[], sortOrders:Array<ArraySortPredicate>)=> {
    const sortedArray = [...rows];


    [...sortOrders].reverse().forEach((sortOrder)=>{
        sortedArray.sort(sortOrder)
    });

    return sortedArray;
  }
  sortPredicate = (infos:WMLAPIPaginationRequestModel["sort"], rows:WMLTableZeroItemProps[])=>{

    let finalRows:WMLTableZeroItemProps[] = []
    infos = this.removeInvalidRows(infos,rows)
    this.checkIfAllRowTypesMatch(rows, infos);
    let sortOrders = this.generateSortOrders(infos, rows);
    finalRows = this.multiLevelSort(rows,sortOrders)
    return finalRows
  }

  readonly performTableAction = (reqBody?:  WMLAPIPaginationRequestModel)=>{

    let instructionStackValues = this.instructionStackValues.slice(0,this.instructionStackCachingLimit)
    let isSameCommand = instructionStackValues.length ===0 ? false:instructionStackValues
    .every((command)=>{
      return JSON.stringify(command.req) === JSON.stringify(reqBody)
    })

    let performTableAction$= isSameCommand? of({
      req:this.instructionStackValues[0].req,
      res:this.instructionStackValues[0].res
    }) : this.tablePredicate(reqBody)
    .pipe(
      map(({req,res})=>{
        this.updateCurrentPageCounter(req)
        this.updateCurrentPageSize(req)
        this.updateRowTypeForEachRow(res.data);

        if(res.columns.length === 0){
          if(res.data.length === 0){
            throw new Error("there is no way for the table to determine the columns, provide columns in the response body or ensure res.data.length is greater than 0 ")
          }
          res.columns =Object.keys(res.data[0].businessData).map((key)=>{
            return {value:key}
          })
        }

        return {req,res}
      })
    )
    return performTableAction$



  }
  tablePredicate = (reqBody = new WMLAPIPaginationRequestModel({pageSize:16}))=>{

    return of(reqBody)
    .pipe(
      takeUntil(this.ngUnsub),
      map((reqBody)=>{
        let rows:WMLTableZeroItemProps[] = []
        rows = reqBody.filter.length>=1 ? this.filterPredicate(reqBody.filter,this.businessRows) : this.businessRows
        if(reqBody.sort.length>=1 ){
          rows = this.sortPredicate(reqBody.sort,rows)
        }
        let beginIndex = reqBody.pageNum * reqBody.pageSize
        let endIndex = (reqBody.pageNum +1) * reqBody.pageSize
        let pageRows = rows.slice(beginIndex,endIndex)

        this.displayRows = rows
        let resBody =  new WMLAPIPaginationResponseModel<WMLTableZeroItemProps>({
          data:pageRows,
          pageNum:reqBody.pageNum,
          pageSize:reqBody.pageSize,
          totalPages:Math.ceil(rows.length/reqBody.pageSize),
          totalItems:rows.length,
          columns:["title","subtitle","price"]
          .map((value)=>{
            return {
              value
            }
          })
        })
        return new WMLTableZeroTablePredicateReturnValue({req:reqBody,res:resBody})
      }),


    )


  }

}


