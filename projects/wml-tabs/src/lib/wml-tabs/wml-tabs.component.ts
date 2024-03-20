// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, Input, OnInit } from '@angular/core';

// rxjs
import { Subject, takeUntil, tap } from 'rxjs';

// misc
import {  WMLUIProperty } from '@windmillcode/angular-wml-components-base';
import { WMLTab, WMLTabsParams, WMLTabsParamsUpdateTabsSubjParams } from '../models';


@Component({
  selector: 'wml-tabs',
  templateUrl: './wml-tabs.component.html',
  styleUrls: ['./wml-tabs.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class WmlTabsComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }

  generateClassPrefix(prefix:string) {
    return (val: string) => {
      return prefix + val
    }
  }
  classPrefix = this.generateClassPrefix('WmlTabs')
  @Input('params') params = new WMLTabsParams()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()



  listenForUpdateTabs = ()=>{
    return this.params.updateTabsSubj
    .pipe(
      takeUntil(this.ngUnsub),
      tap((res)=>{
        this.updateTabs(res as any)
      })
    )

  }

  updateTabs = (res= new WMLTabsParamsUpdateTabsSubjParams())=>{
    this.params.tabs.forEach((tab,index0)=>{
      tab.index = index0
      //@ts-ignore
      tab.header.wmlTabHeader.clickPredicate = this.toggleSelectedTab
    })
    this.toggleSelectedTab(this.params.tabs[res.currentTable])
  }

  toggleSelectedTab = (targetTab:WMLTab) => {

    this.params.tabs.forEach((tab)=>{
      if(targetTab === tab){
        tab.isChosen = true
        if(tab.header.wmlTabHeader){
          tab.header.wmlTabHeader.updateClassString("","clear")
          tab.header.wmlTabHeader.updateClassString(tab.header.wmlTabHeader.isChosenClass)

        }
      }
      else{
        tab.isChosen  = false
        if(tab.header.wmlTabHeader){
          tab.header.wmlTabHeader.updateClassString("","clear")
          tab.header.wmlTabHeader.updateClassString(tab.header.wmlTabHeader.isNotChosenClass)


        }
      }
    })
    this.cdref.detectChanges()
    this.params.tabChangedEvent.next(targetTab)
  }

  ngOnInit(): void {
    this.listenForUpdateTabs().subscribe()
    this.params.updateTabsSubj.next(new WMLTabsParamsUpdateTabsSubjParams())
  }
  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}



