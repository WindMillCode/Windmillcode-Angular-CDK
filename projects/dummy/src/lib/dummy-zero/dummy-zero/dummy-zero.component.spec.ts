// testing
import { ComponentFixture } from '@angular/core/testing';




import { resetImports } from '../test-utils/mock-imports';
import { resetProviders } from '../test-utils/mock-providers';
import { wmlTestUtils } from '../test-utils/test-utils';
import { resetDeclarations } from '../test-utils/mock-declarations';


// rxjs
import { Subject } from 'rxjs';

import { DummyZeroComponent } from './dummy-zero.component';


describe('DummyZeroComponent', () => {
  let cpnt: DummyZeroComponent;
  let fixture: ComponentFixture<DummyZeroComponent>;

  beforeEach(async () => {
    resetImports()
    resetProviders()
    resetDeclarations()
    

    
    await wmlTestUtils.configureTestingModuleForComponents(DummyZeroComponent);
    

    ({fixture, cpnt} =  wmlTestUtils.grabComponentInstance(DummyZeroComponent));
    fixture.detectChanges()

    spyOn(cpnt.cdref,"detectChanges")
  })

  describe("init", () => {

    it("should create", () => {
      expect(cpnt).toBeTruthy()
    })

    it("should have all values initalize properly", () => {
      expect(cpnt.myClass).toEqual('DummyZeroView ')
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
      let id
      cpnt.props.id = id = "id"
      // act
      cpnt.ngOnInit()
      // assert
      expect(cpnt.myId).toEqual(id)

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
