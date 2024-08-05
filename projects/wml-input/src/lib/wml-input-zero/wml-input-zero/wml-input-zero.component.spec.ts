// testing
import { ComponentFixture } from '@angular/core/testing';
import { mockTranslateService } from '@app/core/utility/test-utils';

// rxjs
import { Subject } from 'rxjs';

import { WMLInputZeroComponent } from './wml-input.component';


describe('WMLInputZeroComponent', () => {
  let cpnt: WMLInputZeroComponent;
  let fixture: ComponentFixture<WMLInputZeroComponent>;

  beforeEach(async () => {
    await wmlTestUtils.configureTestingModuleForComponents(WMLInputZeroComponent,{mockTranslateService});
    ({fixture, cpnt} = wmlTestUtils.grabComponentInstance(WMLInputZeroComponent));
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
