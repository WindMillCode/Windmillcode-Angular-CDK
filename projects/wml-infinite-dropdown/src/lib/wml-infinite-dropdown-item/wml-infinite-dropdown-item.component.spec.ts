// testing
import { ComponentFixture } from '@angular/core/testing';
import { resetImports } from '../test-utils/mock-imports';
import { resetProviders } from '../test-utils/mock-providers';
import { wmlTestUtils } from '../test-utils/test-utils';
// rxjs
import { Subject } from 'rxjs';

import { WmlInfiniteDropdownItemComponent } from './wml-infinite-dropdown-item.component';


describe('WmlInfiniteDropdownItemComponent', () => {
  let cpnt: WmlInfiniteDropdownItemComponent;
  let fixture: ComponentFixture<WmlInfiniteDropdownItemComponent>;

  beforeEach(async () => {



    await wmlTestUtils.configureTestingModuleForComponents(WmlInfiniteDropdownItemComponent);


    ({fixture, cpnt} = wmlTestUtils.grabComponentInstance(WmlInfiniteDropdownItemComponent));
    fixture.detectChanges()
  })

  describe("init", () => {

    it("should create", () => {
      expect(cpnt).toBeTruthy()
    })

    it("should have all values initalize properly", () => {
      expect(cpnt.myClass).toEqual('WmlInfiniteDropdownItemView')
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
