// testing
import { ComponentFixture } from '@angular/core/testing';
import { resetImports } from '../test-utils/mock-imports';
import { resetProviders } from '../test-utils/mock-providers';
import { wmlTestUtils } from '../test-utils/test-utils';
// rxjs
import { Subject } from 'rxjs';

import { WMLOptionsZeroItemExampleComponent } from './wml-sample-option-item.component';
import { resetDeclarations } from '../test-utils/mock-declarations';
import { WMLOptionZeroItemProps } from '@windmillcode/angular-wml-options';


describe('WMLOptionsZeroItemExampleComponent', () => {
  let cpnt: WMLOptionsZeroItemExampleComponent;
  let fixture: ComponentFixture<WMLOptionsZeroItemExampleComponent>;

  beforeEach(async () => {
    resetImports()
    resetProviders()
    resetDeclarations()
    await wmlTestUtils.configureTestingModuleForComponents(WMLOptionsZeroItemExampleComponent);
    ({fixture, cpnt} = wmlTestUtils.grabComponentInstance(WMLOptionsZeroItemExampleComponent));
    cpnt.props.wmlOptionItem = new WMLOptionZeroItemProps()
    fixture.detectChanges()
  })

  describe("init", () => {

    it("should create", () => {
      expect(cpnt).toBeTruthy()
    })

    it("should have all values initalize properly", () => {
      expect(cpnt.myClass).toEqual('WMLSampleOptionItemView ')
    })

    it("should have all properties be the correct class instance", () => {
      expect(cpnt.ngUnsub).toBeInstanceOf(Subject<void>)
    })
  })

  describe("ngOnInit",()=>{
    it(` when called |
    under normal conditions |
    does the required action `,()=>{
      // arrange

      // act
      cpnt.ngOnInit()
      // assert
      expect(cpnt.props
        .wmlOptionItem.toggleClass)
        .toEqual(cpnt.classPrefix('MainBtn1'))

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
