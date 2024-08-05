// testing
import { ComponentFixture } from '@angular/core/testing';

// rxjs
import { Subject } from 'rxjs';

import { WMLAccordionZeroSampleComponent } from './wml-accordion-zero-sample.component';
import { wmlTestUtils } from '../test-utils/test-utils';
import { resetImports } from '../test-utils/mock-imports';
import { resetProviders } from '../test-utils/mock-providers';




describe('WMLAccordionZeroSampleComponent', () => {
  let cpnt: WMLAccordionZeroSampleComponent;
  let fixture: ComponentFixture<WMLAccordionZeroSampleComponent>;

  beforeEach(async () => {
    resetImports()
    resetProviders()
    await wmlTestUtils.configureTestingModuleForComponents(
      WMLAccordionZeroSampleComponent
    );


    ({fixture, cpnt} =  wmlTestUtils
      .grabComponentInstance(WMLAccordionZeroSampleComponent));
    fixture.detectChanges()
  })

  describe("init", () => {

    it("should create", () => {
      expect(cpnt).toBeTruthy()
    })

    it("should have all values initalize properly", () => {
      expect(cpnt.myClass).toEqual('WMLAccordionZeroSampleView ')
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
