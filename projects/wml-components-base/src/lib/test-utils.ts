// angular
import { HttpHandler, HttpResponse, provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { Component, NO_ERRORS_SCHEMA, Type, ViewChild } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { Route } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { SingletonError } from "./error-utils";
import { throwError, Observable, of } from "rxjs";

// i18n


export class WMLTestUtils {
  constructor(params: Partial<WMLTestUtils> = {}) {
    this.checkForSingleton();
    let origParams = Object.entries(params)
      .filter(([key,val]) => {
        return !key.startsWith('param');
      });
    Object.assign(this, { ...Object.fromEntries(origParams) });
  }

  static isInit = false
  mock:any = {}
  mockImports:any[] = []
  mockProviders:any[] = []
  mockDeclarations:any[] = []

  private checkForSingleton() {
    if (WMLTestUtils.isInit) {
      throw new SingletonError();
    }
    else {
      WMLTestUtils.isInit = true;
    }
  }

  configureTestingModuleForComponents = async (targetCpnt:Type<any>,routes:Route[] =[])=>{


    if(routes.length !== 0){
      this.mockImports.push(
        RouterTestingModule.withRoutes(routes)
      )
    }

    await TestBed.configureTestingModule({
      imports:this.mockImports,
      declarations: [
        targetCpnt,
        ...this.mockDeclarations
      ],
      providers:this.mockProviders,
      schemas:[
        NO_ERRORS_SCHEMA
      ]

    }).compileComponents();


  }

  configureTestingModuleForStandaloneComponents = async (targetCpnt:Type<any>,routes:Route[] =[])=>{

    this.mockImports.push(
      targetCpnt
    )
    if(routes.length !== 0){
      this.mockImports.push(
        RouterTestingModule.withRoutes(routes)
      )
    }

    await TestBed.configureTestingModule({
      imports:this.mockImports,
      declarations:[
        ...this.mockDeclarations
      ],
      providers:[
        ...this.mockProviders,
        targetCpnt
      ],
      schemas:[
        NO_ERRORS_SCHEMA
      ]

    }).compileComponents();


  }

  configureTestingModuleForServices =  (
    targetService:Function
  )=>{
    TestBed.configureTestingModule({
    imports: [],
    providers: [provideHttpClient(withInterceptorsFromDi())]
})

    let service = TestBed.inject(targetService);
    return service

  }

  /**
   * @ experimental
  */
  // configureTestingModuleForDirectives = (
  //   targetDirective:Type<any>,
  //   myParams:Function,
  // )=>{


  //   @Component({
  //     selector:"app-my-test",
  //     template:`
  //     <div class='myTestCpnt' [scrollBottomPagination]="params">
  //     `
  //   })
  //   class TestComponent {

  //     params=myParams()
  //     @ViewChild(targetDirective) myDirective;
  //   }

  //   TestBed.configureTestingModule({
  //     declarations:[
  //       targetDirective,TestComponent
  //     ],
  //     imports:[
  //       HttpClientModule
  //     ],
  //     providers:this.mockProviders
  //   })

  //   let  { fixture,  cpnt } = this.grabComponentInstance(TestComponent)
  //   fixture.detectChanges();
  //   return { fixture,  cpnt,directive:cpnt.myDirective }

  // }

  grabComponentInstance = (targetCpnt: Type<any>)=> {
    let fixture = TestBed.createComponent(targetCpnt);
    let cpnt = fixture.componentInstance;
    if(cpnt.hasOwnProperty("renderer2")){
      cpnt.renderer2 = this.mock.mockRenderer2
    }
    return { fixture,  cpnt };
  }

  // @ts-ignore
  spyOnForES6Imports<T>(target: T, prop: keyof T) {
    // @ts-ignore
    const spy = jasmine.createSpy(`${String(prop)}Spy`);
    // @ts-ignore
    spyOnProperty(target, prop).and.returnValue(spy);
    return spy;
  }



}


export let createBasicObservableError = (err= new Error())=>{
  return  throwError(()=>err)
}


export class WMLTestHttpHandler extends HttpHandler {
  constructor(params: Partial<WMLTestHttpHandler> = {}) {
    super()
    let origParams = Object.entries(params)
      .filter(([key,val]) => {
        return !key.startsWith('param');
      });
    Object.assign(this, { ...Object.fromEntries(origParams) });
  }

  successHandle$:(resp?:HttpResponse<any>)=> Observable<HttpResponse<any>> = (resp = new HttpResponse())=> of(resp)
  errorHandle$:  (resp?:HttpResponse<any>)=> Observable<HttpResponse<any>> = (resp = new HttpResponse())=> throwError(()=>resp)
  handle$ = this.successHandle$()
  updateHandle = (handle$)=>{
    this.handle$ = handle$
  }
  handle = ()=>{
    return this.handle$
  }
}









