
// @ts-nocheck
// testing
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Type, NO_ERRORS_SCHEMA, ChangeDetectorRef, Component, Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Route } from '@angular/router';
import { RouterTestingModule } from "@angular/router/testing";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { WMLFieldZeroProps } from '@windmillcode/angular-wml-field';

// rxjs
import { Subject } from 'rxjs';

import { WMLFormZeroProps, WMLFormZeroComponent } from './wml-form-zero.component';
import { wmlTestUtils } from '../../test-utils/test-utils';
export class ChangeDetectorRefExtension extends ChangeDetectorRef{
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

export  let mockTranslateService = {
  get:()=> new Subject(),
  onTranslationChange:new Subject(),
  onLangChange:new Subject(),
  onDefaultLangChange:new Subject(),
}

export let mockRenderer2 =(()=>{
  let createElementResult = {}
  return {
    appendChild:()=>{},
    removeChild:()=>{},
    createElementResult,
    createElement:()=> createElementResult,
  }
})()


export let mockHttpClient = {
  get:()=> new Subject(),
  post:()=> new Subject(),
}
export let mockActivatedRoute ={

}
export let mockCdref = new ChangeDetectorRefExtension()
export let mockStore = {}
@Component({
  template: `<router-outlet></router-outlet>`,
  standalone:true,
  schemas:[
    NO_ERRORS_SCHEMA
  ]
})


export let mockStoreRootModule = {}

let mockProviders = [
  // calendarDate,
  {provide:Renderer2,useValue: mockRenderer2},
  // {provide:Store,useValue:mockStore},
  {provide:TranslateService,useValue:mockTranslateService},
  {provide:HttpClient,useValue:mockHttpClient},
  {provide:ChangeDetectorRef,useValue:mockCdref},
  {provide:ActivatedRoute,useValue:mockActivatedRoute}
]


let configureTestingModuleForComponents = async (
  targetcomponent:Type<any>,
  myProviders:Partial<{
    mockTranslateService:any
    mockCdref:any,
    mockHttpClient:any,
    mockStore:any
  }> = {},
  routes:Route[] =[]
)=>{



  let imports:any[] = [
    RouterTestingModule,
    TranslateModule,
    HttpClientModule,
  ]

  if(routes.length !== 0){
    imports.push(
      RouterTestingModule.withRoutes(routes)
    )
  }

  await TestBed.configureTestingModule({
    imports,
    declarations: [
      targetcomponent
    ],
    providers:mockProviders,
    schemas:[
      NO_ERRORS_SCHEMA
    ]

  }).compileComponents();


}

export function grabComponentInstance(targetcomponent: Type<any>) {
  let fixture = TestBed.createComponent(targetcomponent);
  let component = fixture.componentInstance;
  if(component.hasOwnProperty("renderer2")){
    component.renderer2 = mockRenderer2
  }
  return { fixture,  component };
}




describe('WMLFormZeroComponent', () => {
  let cpnt: WMLFormZeroComponent;
  let fixture: ComponentFixture<WMLFormZeroComponent>;

  beforeEach(async () => {
    await wmlTestUtils.configureTestingModuleForComponents(WMLFormZeroComponent,{mockTranslateService});
    ({fixture,  cpnt} = wmlTestUtils.grabComponentInstance(WMLFormZeroComponent));
    fixture.detectChanges()
  })

  describe("init", () => {

    it("should create", () => {
      expect(cpnt).toBeTruthy()
    })

    it("should have all values initalize properly", () => {
      expect(cpnt.myClass).toEqual('View')
    })

    it("should have all properties be the correct class instance", () => {
      expect(cpnt.ngUnsub).toBeInstanceOf(Subject<void>)
    })
  })

  describe("ngOnDestroy",()=>{

    beforeEach(()=>{
      spyOn(cpnt.ngUnsub,'next')
      spyOn(cpnt.ngUnsub,'complete')
    })

    it(` when called |
     as appropriate |
     does the required action `,()=>{
        // act
        cpnt.ngOnDestroy();

        // assert
        expect(cpnt.ngUnsub.next).toHaveBeenCalled();
        expect(cpnt.ngUnsub.complete).toHaveBeenCalled();
    })
  })

  describe("updateFields",()=>{
    it('should set displayFields to an empty array when props.fields is empty', () => {
      // Arrange;
      cpnt.props = new WMLFormZeroProps({ fields: [] });

      // Act
      cpnt.updateFields();

      // Assert
      expect(cpnt.displayFields.length).toBe(0);
    });

    it('should set displayFields to an array of length one when props.fieldSections is an array of length one', () => {
      // Arrange
      cpnt.props = new WMLFormZeroProps({
        fields: [new WMLFieldZeroProps({ type:"default" }), new WMLFieldZeroProps({ type:"default" }), new WMLFieldZeroProps({ type:"default" })],
        fieldSections: [3],
      });

      // Act
      cpnt.updateFields();

      // Assert
      expect(cpnt.displayFields.length).toBe(1);
      expect(cpnt.displayFields[0].length).toBe(3);
    });

    it('should set displayFields to an array of arrays of fields with the correct lengths', () => {
      // Arrange
      cpnt.props = new WMLFormZeroProps({
        fields: [new WMLFieldZeroProps({ type:"default" }), new WMLFieldZeroProps({ type:"default" }), new WMLFieldZeroProps({ type:"default" })],
        fieldSections: [2, 1, 3],
      });

      // Act
      cpnt.updateFields();

      // Assert
      expect(cpnt.displayFields.length).toBe(3);
      expect(cpnt.displayFields[0].length).toBe(2);
      expect(cpnt.displayFields[1].length).toBe(1);
      expect(cpnt.displayFields[2].length).toBe(3);
    });

    it('should update displayFields when props.fields is updated', () => {
      // Arrange
      cpnt.props = new WMLFormZeroProps({
        fields: [new WMLFieldZeroProps({ type:"default" })],
        fieldSections: [2],
      });
      cpnt.updateFields();
      cpnt.props.fields = [new WMLFieldZeroProps({ type:"default" }), new WMLFieldZeroProps({ type:"default" }), new WMLFieldZeroProps({ type:"default" })];

      // Act
      cpnt.updateFields();

      // Assert
      expect(cpnt.displayFields.length).toBe(1);
      expect(cpnt.displayFields[0].length).toBe(3);
    });
  })
});
