
// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, Input } from '@angular/core';

// rxjs
import { Subject, takeUntil, tap } from 'rxjs';

// misc
import {generateClassPrefix } from '@windmillcode/angular-wml-components-base';
import { WMLTabsZero, WMLTabsZeroProps, WMLTabsZeroPropsUpdateTabsSubjProps } from '../models';


@Component({
  selector: 'wml-tabs-zero',
  templateUrl: './wml-tabs-zero.component.html',
  styleUrls: ['./wml-tabs-zero.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class WMLTabsZeroComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }


  classPrefix = generateClassPrefix('WMLTabsZero')
  @Input('props') props = new WMLTabsZeroProps()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()



  listenForUpdateTabs = ()=>{
    return this.props.updateTabsSubj
    .pipe(
      takeUntil(this.ngUnsub),
      tap((res)=>{
        this.updateTabs(res as any)
      })
    )

  }

  updateTabs = (res= new WMLTabsZeroPropsUpdateTabsSubjProps())=>{
    this.props.tabs.forEach((tab,index0)=>{
      tab.index = index0
      if(tab.header.type ==="wmlTabHeader"){
        tab.header.wmlTabHeader!.click = this.toggleSelectedTab
      }
      if(tab.header.type ==="custom"){
        tab.header.custom!.props.click = this.toggleSelectedTab
      }
    })
    this.toggleSelectedTab(this.props.tabs[res.currentTable])
  }

  toggleSelectedTab = (targetTab:WMLTabsZero) => {

    this.props.tabs.forEach((tab)=>{
      if(targetTab === tab){
        tab.isChosen = true
        if(tab.header.wmlTabHeader){

          tab.header.wmlTabHeader.updateClassString(tab.header.wmlTabHeader.isNotChosenClass,"remove")
          tab.header.wmlTabHeader.updateClassString(tab.header.wmlTabHeader.isChosenClass)

        }
      }
      else{
        tab.isChosen  = false
        if(tab.header.wmlTabHeader){

          tab.header.wmlTabHeader.updateClassString(tab.header.wmlTabHeader.isChosenClass,"remove")

          tab.header.wmlTabHeader.updateClassString(tab.header.wmlTabHeader.isNotChosenClass)


        }
      }
    })
    this.cdref.detectChanges()
    this.props.tabChangedEvent.next(targetTab)
  }

  ngOnInit(): void {
    this.listenForUpdateTabs().subscribe()
    this.props.updateTabsSubj.next(new WMLTabsZeroPropsUpdateTabsSubjProps())
  }
  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}



