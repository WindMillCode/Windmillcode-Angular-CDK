// testing
import { ComponentFixture } from '@angular/core/testing';

// rxjs
import { Subject } from 'rxjs';

import { WMLAccordionZeroComponent, WMLAccordionZeroProps } from './wml-accordion-zero.component';
import { resetImports } from '../test-utils/mock-imports';
import { resetProviders } from '../test-utils/mock-providers';
import { wmlTestUtils } from '../test-utils/test-utils';
import { WMLAccordionZeroItemProps } from '../wml-accordion-zero-item/wml-accordion-zero-item.component';


describe('WMLAccordionZeroComponent', () => {
  let cpnt: WMLAccordionZeroComponent;
  let fixture: ComponentFixture<WMLAccordionZeroComponent>;

  beforeEach(async () => {


    resetImports()
    resetProviders()
    await wmlTestUtils.configureTestingModuleForComponents(WMLAccordionZeroComponent);


    ({fixture, cpnt} =  wmlTestUtils.grabComponentInstance(WMLAccordionZeroComponent));
    fixture.detectChanges()
  })

  describe("init", () => {

    it("should create", () => {
      expect(cpnt).toBeTruthy()
    })

    it("should have all values initalize properly", () => {
      expect(cpnt.myClass).toEqual('WMLAccordionZeroView ')
    })

    it("should have all properties be the correct class instance", () => {
      expect(cpnt.ngUnsub).toBeInstanceOf(Subject<void>)
    })
  })

  describe("ngOnInit",()=>{
    it(` when called |
    under normal conditions |
    does the required action `,()=>{
      // arrange
      let id
      cpnt.props.id = id = "id"
      // act
      cpnt.ngOnInit()
      // assert
      expect(cpnt.myId).toEqual(id)

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
});


describe("WMLAccordionZeroProps",()=>{

  let helper:WMLAccordionZeroProps
  beforeEach(()=>{
    helper = new WMLAccordionZeroProps()
  })
  describe("init",()=>{
    it("should create", () => {
      expect(helper).toBeTruthy()
    })

    it("should have all values initalize properly", () => {
      expect(helper.id).toEqual('')
    })

    it("should have all properties be the correct class instance", () => {
      helper.items
      .forEach((group)=>{
        group.forEach((item)=>{
          expect(item).toBeInstanceOf(WMLAccordionZeroItemProps)
        })
      })
    })
  })
})
