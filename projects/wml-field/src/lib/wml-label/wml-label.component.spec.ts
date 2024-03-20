// testing
import { ComponentFixture } from '@angular/core/testing';

// rxjs
import { Subject } from 'rxjs';

import { WmlLabelComponent } from './wml-label.component';
import { wmlTestUtils } from '../test-utils/test-utils';


describe('WmlLabelComponent', () => {
  let cpnt: WmlLabelComponent;
  let fixture: ComponentFixture<WmlLabelComponent>;

  beforeEach(async () => {
    await wmlTestUtils.configureTestingModuleForComponents(WmlLabelComponent);
    ({fixture, cpnt} = wmlTestUtils.grabComponentInstance(WmlLabelComponent));
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
