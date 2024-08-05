// testing
import { ComponentFixture } from '@angular/core/testing';
import { wmlTestUtils } from '../test-utils/test-utils';
// rxjs
import { Subject } from 'rxjs';

import { WMLInfiniteDropdownZeroItemExampleComponent } from './wml-sample-infinite-dropdown-item.component';


describe('WMLInfiniteDropdownZeroItemExampleComponent', () => {
  let cpnt: WMLInfiniteDropdownZeroItemExampleComponent;
  let fixture: ComponentFixture<WMLInfiniteDropdownZeroItemExampleComponent>;

  beforeEach(async () => {



    await wmlTestUtils.configureTestingModuleForComponents(WMLInfiniteDropdownZeroItemExampleComponent);


    ({fixture, cpnt} = wmlTestUtils.grabComponentInstance(WMLInfiniteDropdownZeroItemExampleComponent));
    fixture.detectChanges()
  })

  describe("init", () => {

    it("should create", () => {
      expect(cpnt).toBeTruthy()
    })

    it("should have all values initalize properly", () => {
      expect(cpnt.myClass).toEqual('WMLInfiniteDropdownZeroItemExampleView')
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
