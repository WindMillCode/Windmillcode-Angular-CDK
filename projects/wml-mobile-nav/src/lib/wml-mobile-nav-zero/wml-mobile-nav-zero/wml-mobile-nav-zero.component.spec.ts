// testing
import { ComponentFixture } from '@angular/core/testing';
import { wmlTestUtils } from '../../test-utils/test-utils';
// rxjs
import { Subject } from 'rxjs';

import { WMLMobileNavZeroComponent } from './wml-mobile-nav-zero.component';


describe('WMLMobileNavZeroComponent', () => {
  let cpnt: WMLMobileNavZeroComponent;
  let fixture: ComponentFixture<WMLMobileNavZeroComponent>;

  beforeEach(async () => {



    await wmlTestUtils.configureTestingModuleForComponents(WMLMobileNavZeroComponent);


    ({fixture, cpnt} = wmlTestUtils.grabComponentInstance(WMLMobileNavZeroComponent));
    fixture.detectChanges()
  })

  describe("init", () => {

    it("should create", () => {
      expect(cpnt).toBeTruthy()
    })

    it("should have all values initalize properly", () => {
      expect(cpnt.myClass).toEqual('WMLMobileNavZeroView')
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
