// testing
import { ComponentFixture } from '@angular/core/testing';

// rxjs
import { Subject } from 'rxjs';

import { WMLLabelZeroComponent } from './wml-label-zero.component';
import { wmlTestUtils } from '../test-utils/test-utils';


describe('WMLLabelZeroComponent', () => {
  let cpnt: WMLLabelZeroComponent;
  let fixture: ComponentFixture<WMLLabelZeroComponent>;

  beforeEach(async () => {
    await wmlTestUtils.configureTestingModuleForComponents(WMLLabelZeroComponent);
    ({fixture, cpnt} = wmlTestUtils.grabComponentInstance(WMLLabelZeroComponent));
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
});
