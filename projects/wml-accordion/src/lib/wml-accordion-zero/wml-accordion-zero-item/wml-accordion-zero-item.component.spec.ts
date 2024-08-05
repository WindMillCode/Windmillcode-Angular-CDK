// testing
import { ComponentFixture } from '@angular/core/testing';

// rxjs
import { Subject } from 'rxjs';

import { WMLAccordionZeroItemComponent, WMLAccordionZeroItemProps } from './wml-accordion-zero-item.component';
import { resetImports } from '../test-utils/mock-imports';
import { resetProviders } from '../test-utils/mock-providers';
import { wmlTestUtils } from '../test-utils/test-utils';
import { WMLCustomComponent, WMLUIProperty } from '@windmillcode/angular-wml-components-base';



let wmlComponetsBase = require("@windmillcode/angular-wml-components-base")


describe('WMLAccordionZeroItemComponent', () => {
  let cpnt: WMLAccordionZeroItemComponent;
  let fixture: ComponentFixture<WMLAccordionZeroItemComponent>;

  beforeEach(async () => {
    resetImports()
    resetProviders()

    await wmlTestUtils.configureTestingModuleForComponents(WMLAccordionZeroItemComponent);


    ({fixture, cpnt} =  wmlTestUtils.grabComponentInstance(WMLAccordionZeroItemComponent));
    fixture.detectChanges()
    spyOn(cpnt,"updateCssValues").and.callThrough()
    spyOn(cpnt,"toggleAccordion").and.callThrough()

    wmlTestUtils
    .spyOnForES6Imports(wmlComponetsBase,"addCustomComponent")
    .and.callThrough()

    spyOn(cpnt.el.nativeElement.style,"setProperty")
    spyOn(cpnt.cdref,"detectChanges")
    spyOn(cpnt.contentPod,"updateClassString")



  })

  describe("init", () => {

    it("should create", () => {
      expect(cpnt).toBeTruthy()
    })

    it("should have all values initalize properly", () => {
      expect(cpnt.myClass).toEqual('WMLAccordionZeroItemView ')
    })

    it("should have all properties be the correct class instance", () => {
      expect(cpnt.ngUnsub).toBeInstanceOf(Subject<void>)
      expect(cpnt.contentPod).toBeInstanceOf(WMLUIProperty)
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
      expect(wmlComponetsBase.addCustomComponent ).toHaveBeenCalledWith(
        cpnt.customAccordionBody,
        cpnt.props.accordionBody.cpnt,
        cpnt.props.accordionBody.props
      )
      expect(cpnt.updateCssValues).toHaveBeenCalled()


    })

    it(` when called |
    and (!this.props.isClosed) === true |
    does the required action `,()=>{
      // arrange
      let id
      cpnt.props.id = id = "id"
      cpnt.props.isClosed = false
      // act
      cpnt.ngOnInit()
      // assert
      expect(cpnt.myId).toEqual(id)
      expect(wmlComponetsBase.addCustomComponent ).toHaveBeenCalledWith(
        cpnt.customAccordionBody,
        cpnt.props.accordionBody.cpnt,
        cpnt.props.accordionBody.props
      )
      expect(cpnt.updateCssValues).toHaveBeenCalled()
      expect(cpnt.toggleAccordion).toHaveBeenCalledWith(
        cpnt.props.isClosed
      )


    })
  })

  describe("updateCssValues",()=>{
    it(` when called |
    under normal conditions |
    does the required action `,()=>{

      // act
      cpnt.updateCssValues();
      // arrange
      [
        "startHeight",
        "endHeight0",
        "endHeight1",
        "animationDuration0",
        "animationDuration1",
      ]
      .forEach((val)=>{

      // assert
        expect(cpnt.el.nativeElement.style.setProperty).toHaveBeenCalledWith(
          '--wml-accordion-zero-'+val,
          cpnt.props[val]
        )
      })

      // assert
      expect(cpnt.cdref.detectChanges).toHaveBeenCalled()

    })


  })

  describe("toggleAccordion",()=>{
    describe("val",()=>{
      it(` when called |
      under normal conditions |
      does the required action `,()=>{
        // arrange
        let val = true
        // act
        cpnt.toggleAccordion(val)
        // assert
        expect(cpnt.contentPod.updateClassString).toHaveBeenCalledWith(
          cpnt.classPrefix('Pod1Closing')
        )
        expect(cpnt.cdref.detectChanges).toHaveBeenCalled()
        expect(cpnt.props.isClosed).toEqual(val)

      })

      it(` when called |
      under (val === false)  |
      does the required action `,()=>{
        // arrange
        let val = false
        // act
        cpnt.toggleAccordion(val)
        // assert
        expect(cpnt.contentPod.updateClassString).toHaveBeenCalledWith(
          cpnt.classPrefix('Pod1Closing'),"remove"
        )
        expect(cpnt.contentPod.isPresent).toEqual(true)
        expect(cpnt.cdref.detectChanges).toHaveBeenCalled()


      })
    })

  })

  describe("triggerCloseAnimation",()=>{
    it(` when called |
    under normal conditions |
    does the required action `,()=>{
      // arrange
      cpnt.props.isClosed = true
      // act
      cpnt.triggerCloseAnimation()
      // assert
      expect(cpnt.contentPod.isPresent).toEqual(false)
      expect(cpnt.cdref.detectChanges).toHaveBeenCalled()

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


describe("WMLAccordionZeroItemProps",()=>{
  let cpnt:WMLAccordionZeroItemProps
  beforeEach(()=>{
    cpnt = new WMLAccordionZeroItemProps()
  })
  describe("init", () => {

    it("should create", () => {
      expect(cpnt).toBeTruthy()
    })

    it("should have all values initalize properly", () => {
      expect(cpnt.title).toEqual('My Accordion Item')
      expect(cpnt.isClosed).toEqual(true)
      expect(cpnt.startHeight).toEqual("calc(0/10.6 * 1rem)")
      expect(cpnt.endHeight0).toEqual("calc(20000/10.6 * 1rem)")
      expect(cpnt.endHeight1).toEqual("calc(2000/10.6 * 1rem)")
      expect(cpnt.animationDuration0).toEqual("10s")
      expect(cpnt.animationDuration1).toEqual("1.25s")
    })

    it("should have all properties be the correct class instance", () => {
      expect(cpnt.accordionBody).toBeInstanceOf(WMLCustomComponent)
    })
  })
})
