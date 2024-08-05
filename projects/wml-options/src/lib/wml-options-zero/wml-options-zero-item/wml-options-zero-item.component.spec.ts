// testing
import { ComponentFixture } from '@angular/core/testing';
import { resetImports } from '../test-utils/mock-imports';
import { resetProviders } from '../test-utils/mock-providers';
import { MockWMLSampleOptionItemComponent, resetDeclarations } from '../test-utils/mock-declarations';
import { wmlTestUtils } from '../test-utils/test-utils';
// rxjs
import { Subject } from 'rxjs';

import { WMLOptionsZeroItemComponent } from './wml-options-zero-item.component';
import { ViewContainerRef } from '@angular/core';
let wmlComponentsBase = require("@windmillcode/angular-wml-components-base")

describe('WMLOptionsZeroItemComponent', () => {
  let cpnt: WMLOptionsZeroItemComponent;
  let fixture: ComponentFixture<WMLOptionsZeroItemComponent>;

  beforeEach(async () => {
    resetImports()
    resetProviders()
    resetDeclarations()

    await wmlTestUtils.configureTestingModuleForComponents(WMLOptionsZeroItemComponent);
    ({fixture, cpnt} =  wmlTestUtils.grabComponentInstance(WMLOptionsZeroItemComponent));
    cpnt.props.customCpnt.cpnt = MockWMLSampleOptionItemComponent
    fixture.detectChanges()

    wmlTestUtils
    .spyOnForES6Imports(wmlComponentsBase,"addCustomComponent")


  })

  describe("init", () => {

    it("should create", () => {
      expect(cpnt).toBeTruthy()
    })

    it("should have all values initalize properly", () => {

    })

    it("should have all properties be the correct class instance", () => {
      expect(cpnt.ngUnsub).toBeInstanceOf(Subject<void>)
      expect(cpnt.customOption).toBeInstanceOf(ViewContainerRef)
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
      expect(wmlComponentsBase.addCustomComponent).toHaveBeenCalledWith(
        cpnt.customOption,
        cpnt.props.customCpnt.cpnt,
        cpnt.props.customCpnt.props
      )

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
