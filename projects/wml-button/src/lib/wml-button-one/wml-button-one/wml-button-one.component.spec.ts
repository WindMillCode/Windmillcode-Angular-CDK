// testing
import { ComponentFixture } from '@angular/core/testing';
import { resetImports } from '../test-utils/mock-imports';
import { resetProviders } from '../test-utils/mock-providers';
import { wmlTestUtils } from '../test-utils/test-utils';
// rxjs
import { Subject } from 'rxjs';

import { WMLButtonOneComponent } from './wml-button-one.component';
import { resetDeclarations } from '../test-utils/mock-declarations';


describe('WMLButtonOneComponent', () => {
  let cpnt: WMLButtonOneComponent;
  let fixture: ComponentFixture<WMLButtonOneComponent>;

  beforeEach(async () => {
    resetImports()
    resetProviders()
    resetDeclarations()


    await wmlTestUtils.configureTestingModuleForComponents(WMLButtonOneComponent);


    ({fixture, cpnt} = wmlTestUtils.grabComponentInstance(WMLButtonOneComponent));
    fixture.detectChanges()
  })

  describe("init", () => {

    it("should create", () => {
      expect(cpnt).toBeTruthy()
    })

    it("should have all values initalize properly", () => {
      expect(cpnt.myClass).toEqual('WMLButtonOneView')
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
