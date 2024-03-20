// testing
import {
  ComponentFixture,
  discardPeriodicTasks,
  fakeAsync,
  flush,
} from '@angular/core/testing';

// rxjs
import { Subject } from 'rxjs';
import { WmlOptionsComponent } from './wml-options.component';

import { resetImports } from '../test-utils/mock-imports';
import { resetProviders } from '../test-utils/mock-providers';
import { wmlTestUtils } from '../test-utils/test-utils';
import { resetDeclarations } from '../test-utils/mock-declarations';
import { ViewContainerRef } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { WMLOptionItemParams } from '@windmillcode/angular-wml-options';

describe('WmlOptionsComponent', () => {
  let cpnt: WmlOptionsComponent;
  let fixture: ComponentFixture<WmlOptionsComponent>;

  beforeEach(async () => {
    resetImports();
    resetProviders();
    resetDeclarations();
    await wmlTestUtils.configureTestingModuleForComponents(WmlOptionsComponent);

    ({ fixture, cpnt } =
      wmlTestUtils.grabComponentInstance(WmlOptionsComponent));
    fixture.detectChanges();
    spyOn(cpnt, 'toggleChosen').and.callThrough();
    spyOn(cpnt,"updateFormArray").and.callThrough()
    spyOn(cpnt,"populateFields").and.callThrough()
    spyOn(cpnt,"listenForClearedForm").and.callThrough()

    spyOn(cpnt.params,"updateFormArrayPredicate").and.callThrough()
    spyOn(cpnt.params.options, 'forEach').and.callThrough();
    spyOn(cpnt.params.chosen, 'forEach').and.callThrough();
    spyOn(cpnt.cdref, 'detectChanges');
    spyOn(cpnt.params.formArray,"clear").and.callThrough()
    spyOn(cpnt.params.formArray,"markAsDirty").and.callThrough()
  });

  describe('init', () => {
    it('should create', () => {
      expect(cpnt).toBeTruthy();
    });

    it('should have all values initalize properly', () => {
      expect(cpnt.myClass).toEqual('WmlOptionsView ');
    });

    it('should have all properties be the correct class instance', () => {
      expect(cpnt.ngUnsub).toBeInstanceOf(Subject<void>);
    });
  });

  describe('listenForClearedForm', () => {
    it(` when called |
      under normal conditions |
      does the required action `, fakeAsync(() => {
      // arrange
      cpnt.params.options.forEach((btn) => {
        spyOn(btn, 'updateClassString');
      });
      let fn = (val?) => {
        // assert
        expect(cpnt.params.options.forEach).toHaveBeenCalled();
        cpnt.params.options.forEach((btn) => {
          expect(btn.wmlOptions).toEqual(cpnt.params);
          expect(btn.isChosen).toEqual(false);
          expect(btn.updateClassString).toHaveBeenCalledWith('', 'clear');
        });
        expect(cpnt.cdref.detectChanges).toHaveBeenCalled();
        discardPeriodicTasks();
      };

      cpnt.listenForClearedForm().subscribe({ next: fn });

      // act
      cpnt.params.formArray.patchValue([]);
      flush();
    }));
  });

  describe('populateFields', () => {
    it(` when called |
    under normal conditions |
    does the required action `, () => {
      // arrange
      let chosenOption = cpnt.params.options[2];
      cpnt.params.chosen.push(chosenOption);
      cpnt.updateFormArray();

      // act
      cpnt.populateFields();
      // assert
      expect(cpnt.toggleChosen).toHaveBeenCalledWith(chosenOption);

      //arrange
      spyOn(chosenOption, 'click');
      // act
      chosenOption.clickPredicate();
      // assert
      expect(cpnt.toggleChosen).toHaveBeenCalledWith(chosenOption);
      expect(chosenOption.click).toHaveBeenCalled();
    });
  });

  describe("updateFormArray",()=>{
    it(` when called |
    under normal conditions |
    does the required action `,()=>{
      // arrange
      cpnt.params.formArray.push(new FormControl())
      cpnt.params.chosen = cpnt.params.options.filter((nullVal,index0)=>{
        return [1,2].includes(index0)
      })
      spyOn(cpnt.params.chosen, 'forEach').and.callThrough();
      // act
      cpnt.updateFormArray()

      // assert
      expect(cpnt.params.formArray.clear).
      toHaveBeenCalledWith({
        emitEvent:false
      })
      expect(cpnt.params.chosen.forEach).toHaveBeenCalled()
      expect(cpnt.params.formArray.value.length).toEqual(
        cpnt.params.chosen.length
      )
      expect(cpnt.params.formArray.markAsDirty).toHaveBeenCalledWith()
      expect(cpnt.cdref.detectChanges).toHaveBeenCalled()
    })
  })

  describe("toggleChosen",()=>{
    describe("btn.isChosen",()=>{
      it(` when called |
      under normal conditions |
      does the required action `,()=>{
        // arrange
        let btn = new WMLOptionItemParams()
        // act
        cpnt.toggleChosen(btn)
        // assert
        expect(btn.isChosen).toEqual(true)
        expect(btn.class).toContain(btn.toggleClass)
        expect(cpnt.params.chosen).toContain(btn)
        expect(cpnt.cdref.detectChanges).toHaveBeenCalled()
        expect(cpnt.updateFormArray).toHaveBeenCalled()
      })

      it(` when called |
      and (this.params.chosen.length > this.params.limit)===true |
      does the required action `,()=>{
        // arrange
        let btn = new WMLOptionItemParams()
        let btn2 = new WMLOptionItemParams()
        // act
        cpnt.toggleChosen(btn2)
        // assert
        expect(cpnt.params.chosen.length).toEqual(1)
        expect(btn.isChosen).toEqual(false)
        expect(cpnt.cdref.detectChanges).toHaveBeenCalled()
        expect(cpnt.updateFormArray).toHaveBeenCalled()

      })
    })

    it(` when called |
    and (btn.isChosen)=== false |
    does the required action `,()=>{
      // arrange
      let btn = new WMLOptionItemParams()
      btn.isChosen = true
      // act
      cpnt.toggleChosen(btn)
      // assert
      expect(btn.isChosen).toEqual(false)
      expect(btn.class).not.toContain(btn.toggleClass)
      expect(cpnt.cdref.detectChanges).toHaveBeenCalled()
      expect(cpnt.updateFormArray).toHaveBeenCalled()
    })

    it(` when called |
    and (this.params.formArray)===false |
    does the required action `,()=>{
      // arrange
      let btn = new WMLOptionItemParams()
      // @ts-ignore
      cpnt.params.formArray = null
      // act
      cpnt.toggleChosen(btn)
      // assert
      expect(btn.isChosen).toEqual(true)
      expect(btn.class).toContain(btn.toggleClass)
      expect(cpnt.params.chosen).toContain(btn)
      expect(cpnt.cdref.detectChanges).toHaveBeenCalled()

    })
  })

  describe("ngOnInit",()=>{
    it(` when called |
    under normal conditions |
    does the required action `,()=>{
      // arrange
      cpnt.params.options.forEach((btn) => {
        // assert
        expect(btn.wmlOptions).toEqual(cpnt.params)
      });
      // act
      cpnt.ngOnInit()

      // assert

    })
  })


  describe("ngAfterViewInit",()=>{
    it(` when called |
    under normal conditions |
    does the required action `,()=>{
      // arrange

      // act
      cpnt.ngAfterViewInit()
      // assert
      expect(cpnt.populateFields).toHaveBeenCalled()
      expect(cpnt.listenForClearedForm).toHaveBeenCalled()

    })
    it(` when called |
    and (this.params.listenForClearedFormIsEnabled)===false |
    does the required action `,()=>{
      // arrange
      cpnt.params.listenForClearedFormIsEnabled = false
      // act
      cpnt.ngAfterViewInit()
      // assert
      expect(cpnt.populateFields).toHaveBeenCalled()

    })
  })

  describe('ngOnDestroy', () => {
    beforeEach(() => {
      spyOn(cpnt.ngUnsub, 'next');
      spyOn(cpnt.ngUnsub, 'complete');
    });

    it(` when called |
     as appropriate |
     does the required action `, () => {
      // act
      cpnt.ngOnDestroy();

      // assert
      expect(cpnt.ngUnsub.next).toHaveBeenCalled();
      expect(cpnt.ngUnsub.complete).toHaveBeenCalled();
    });
  });
});
