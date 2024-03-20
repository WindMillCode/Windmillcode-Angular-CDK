// testing
import { ComponentFixture } from '@angular/core/testing';
import { resetImports } from '../test-utils/mock-imports';
import { resetProviders } from '../test-utils/mock-providers';
import { wmlTestUtils } from '../test-utils/test-utils';
// rxjs
import { Subject } from 'rxjs';

import { WmlTableZeroPopupOverlayComponent } from './wml-table-zero-popup-overlay.component';


describe('WmlTableZeroPopupOverlayComponent', () => {
  let cpnt: WmlTableZeroPopupOverlayComponent;
  let fixture: ComponentFixture<WmlTableZeroPopupOverlayComponent>;

  beforeEach(async () => {



    await wmlTestUtils.configureTestingModuleForComponents(WmlTableZeroPopupOverlayComponent);


    ({fixture, cpnt} = wmlTestUtils.grabComponentInstance(WmlTableZeroPopupOverlayComponent));
    fixture.detectChanges()
  })

  describe("init", () => {

    it("should create", () => {
      expect(cpnt).toBeTruthy()
    })

    it("should have all values initalize properly", () => {
      expect(cpnt.myClass).toEqual('WmlTableZeroPopupOverlayView')
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
