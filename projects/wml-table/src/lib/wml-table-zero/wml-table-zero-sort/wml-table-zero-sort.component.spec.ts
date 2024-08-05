// testing
import { ComponentFixture } from '@angular/core/testing';
import { wmlTestUtils } from '../test-utils/test-utils';
// rxjs
import { Subject } from 'rxjs';

import { WMLTableZeroSortComponent } from './wml-table-zero-sort.component';


describe('WMLTableZeroSortComponent', () => {
  let cpnt: WMLTableZeroSortComponent;
  let fixture: ComponentFixture<WMLTableZeroSortComponent>;

  beforeEach(async () => {



    await wmlTestUtils.configureTestingModuleForComponents(WMLTableZeroSortComponent);


    ({fixture, cpnt} = wmlTestUtils.grabComponentInstance(WMLTableZeroSortComponent));
    fixture.detectChanges()
  })

  describe("init", () => {

    it("should create", () => {
      expect(cpnt).toBeTruthy()
    })

    it("should have all values initalize properly", () => {
      expect(cpnt.myClass).toEqual('WMLTableZeroSortView')
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
