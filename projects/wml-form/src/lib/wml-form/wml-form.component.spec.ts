// testing
import { HttpClient } from '@angular/common/http';
import { Type, NO_ERRORS_SCHEMA, ChangeDetectorRef, Component, Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Route } from '@angular/router';
import { RouterTestingModule } from "@angular/router/testing";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { WMLField } from '@windmillcode/angular-wml-field';

// rxjs
import { Subject } from 'rxjs';

import { WMLForm, WmlFormComponent } from './wml-form.component';
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
export class TestRootComponent {
}

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

export functionwmlTestUtils.grabComponentInstance(targetcomponent: Type<any>) {
  let fixture = TestBed.createComponent(targetcomponent);
  let component = fixture.componentInstance;
  if(component.hasOwnProperty("renderer2")){
    component.renderer2 = mockRenderer2
  }
  return { fixture,  component };
}




describe('WmlFormComponent', () => {
  let component: WmlFormComponent;
  let fixture: ComponentFixture<WmlFormComponent>;

  beforeEach(async () => {
    await wmlTestUtils.configureTestingModuleForComponents(WmlFormComponent,{mockTranslateService});
    ({fixture, component} = wmlTestUtils.grabComponentInstance(WmlFormComponent));
    fixture.detectChanges()
  })

  describe("init", () => {

    it("should create", () => {
      expect(component).toBeTruthy()
    })

    it("should have all values initalize properly", () => {
      expect(component.myClass).toEqual('View')
    })

    it("should have all properties be the correct class instance", () => {
      expect(component.ngUnsub).toBeInstanceOf(Subject<void>)
    })
  })

  describe("ngOnDestroy",()=>{

    beforeEach(()=>{
      spyOn(component.ngUnsub,'next')
      spyOn(component.ngUnsub,'complete')
    })

    it(` when called |
     as appropriate |
     does the required action `,()=>{
        // act
        component.ngOnDestroy();

        // assert
        expect(component.ngUnsub.next).toHaveBeenCalled();
        expect(component.ngUnsub.complete).toHaveBeenCalled();
    })
  })

  describe("updateFields",()=>{
    it('should set displayFields to an empty array when params.fields is empty', () => {
      // Arrange;
      component.params = new WMLForm({ fields: [] });

      // Act
      component.updateFields();

      // Assert
      expect(component.displayFields.length).toBe(0);
    });

    it('should set displayFields to an array of length one when params.fieldSections is an array of length one', () => {
      // Arrange
      component.params = new WMLForm({
        fields: [new WMLField({ type:"default" }), new WMLField({ type:"default" }), new WMLField({ type:"default" })],
        fieldSections: [3],
      });

      // Act
      component.updateFields();

      // Assert
      expect(component.displayFields.length).toBe(1);
      expect(component.displayFields[0].length).toBe(3);
    });

    it('should set displayFields to an array of arrays of fields with the correct lengths', () => {
      // Arrange
      component.params = new WMLForm({
        fields: [new WMLField({ type:"default" }), new WMLField({ type:"default" }), new WMLField({ type:"default" })],
        fieldSections: [2, 1, 3],
      });

      // Act
      component.updateFields();

      // Assert
      expect(component.displayFields.length).toBe(3);
      expect(component.displayFields[0].length).toBe(2);
      expect(component.displayFields[1].length).toBe(1);
      expect(component.displayFields[2].length).toBe(3);
    });

    it('should update displayFields when params.fields is updated', () => {
      // Arrange
      component.params = new WMLForm({
        fields: [new WMLField({ type:"default" })],
        fieldSections: [2],
      });
      component.updateFields();
      component.params.fields = [new WMLField({ type:"default" }), new WMLField({ type:"default" }), new WMLField({ type:"default" })];

      // Act
      component.updateFields();

      // Assert
      expect(component.displayFields.length).toBe(1);
      expect(component.displayFields[0].length).toBe(3);
    });
  })
});
