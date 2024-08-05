// testing

// rxjs
import { Subject } from 'rxjs';

import { WMLFieldZeroPropsComponent } from './wml-field-zero.component';
import { wmlTestUtils } from '../test-utils/test-utils';
import { ComponentFixture } from '@angular/core/testing';


describe('WMLFieldZeroPropsComponent', () => {
  let cpnt: WMLFieldZeroPropsComponent;
  let fixture: ComponentFixture<WMLFieldZeroPropsComponent>;

  beforeEach(async () => {
    await wmlTestUtils.configureTestingModuleForComponents(WMLFieldZeroPropsComponent);
    ({fixture, cpnt} = wmlTestUtils.grabComponentInstance(WMLFieldZeroPropsComponent));
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
