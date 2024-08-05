import { HttpClient } from "@angular/common/http";
import { Renderer2, ChangeDetectorRef, Component, NO_ERRORS_SCHEMA, ViewContainerRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";

import { WMLNotifyOneService } from "@windmillcode/angular-wml-notify";
import { Subject } from "rxjs";
// @ts-ignore
import { wmlTestUtils } from "./test-utils";

class MockChangeDetectorRef extends ChangeDetectorRef{
  constructor(){
    super()
  }
  reattach(): void {

  }
  markForCheck(): void {

  }
  checkNoChanges(): void {

  }
  detectChanges(): void {

  }
  detach(): void {

  }
}

@Component({
  template: `<router-outlet></router-outlet>`,
  standalone:true,
  schemas:[
    NO_ERRORS_SCHEMA
  ]
})
class TestRootComponent {
}

let mockTranslateService = ()=>{
  return {
    get:()=> new Subject(),
    onTranslationChange:new Subject(),
    onLangChange:new Subject(),
    onDefaultLangChange:new Subject(),
  }
}

let mockRenderer2 =()=>{
  let createElementResult = {}
  return {
    appendChild:()=>{},
    removeChild:()=>{},
    createElementResult,
    createElement:()=> createElementResult,
  }
}
let mockCdref = ()=>{
  return new MockChangeDetectorRef()
}


const mockHttpClient = () => {
  return {
    get: () => new Subject(),
    post: () => new Subject(),
  };
};

const mockActivatedRoute = () => {
  return {};
};



const mockViewContainerRef = () => {
  return {};
};






const mockUtilService = () => {
  let navigateByUrlResult ={}
  return {
    router:{
      navigateByUrl:()=> navigateByUrlResult
    }
  };
};



let createMockProviders = ()=> {
  return [
    // calendarDate,
    // {provide:StoreRootModule,useValue: mockStoreRootModule},
    // {provide:ReducerManager,useValue:mockReducerManager},
    // {provide:Store,useValue:mockStore},17
    {provide:TranslateService,useValue:wmlTestUtils.mock.mockTranslateService},
    {provide:Renderer2,useValue: wmlTestUtils.mock.mockRenderer2},
    {provide:ViewContainerRef,useValue:wmlTestUtils.mock.mockViewContainerRef},
    {provide:HttpClient,useValue:wmlTestUtils.mock.mockHttpClient},
    {provide:WMLNotifyOneService,useValue:wmlTestUtils.mock.mockWMLNotifyOneService},
    {provide:ChangeDetectorRef,useValue:wmlTestUtils.mock.mockCdref},
    {provide:ActivatedRoute,useValue:wmlTestUtils.mock.mockActivatedRoute},
  ]
}



export let resetProviders = (target?:any)=>{
  wmlTestUtils.mock.mockTranslateService = mockTranslateService()
  wmlTestUtils.mock.mockRenderer2 = mockRenderer2()
  wmlTestUtils.mock.mockHttpClient = mockHttpClient()
  wmlTestUtils.mock.mockActivatedRoute = mockActivatedRoute()
  wmlTestUtils.mock.mockCdref = mockCdref()
  wmlTestUtils.mock.mockViewContainerRef = mockViewContainerRef()
  wmlTestUtils.mock.mockUtilService = mockUtilService()
  wmlTestUtils.mockProviders = createMockProviders()
  if(target){
    wmlTestUtils.mockProviders = wmlTestUtils.mockProviders.filter((provider)=>{
      return  provider.provide !== target
    })
  }
}
resetProviders()



