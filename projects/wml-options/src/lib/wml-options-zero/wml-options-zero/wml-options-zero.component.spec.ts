// testing
import {
  ComponentFixture,
  discardPeriodicTasks,
  fakeAsync,
  flush,
} from '@angular/core/testing';

// rxjs
import { Subject } from 'rxjs';
import { WMLOptionsZeroComponent } from './wml-options.component';

import { resetImports } from '../../test-utils/mock-imports';
import { resetProviders } from '../../test-utils/mock-providers';
import { wmlTestUtils } from '../../test-utils/test-utils';
import { resetDeclarations } from '../../test-utils/mock-declarations';
import { FormControl } from '@angular/forms';
import { WMLOptionZeroItemProps } from '@windmillcode/angular-wml-options';

describe('WMLOptionsZeroComponent', () => {
  let cpnt: WMLOptionsZeroComponent;
  let fixture: ComponentFixture<WMLOptionsZeroComponent>;

  beforeEach(async () => {
    resetImports();
    resetProviders();
    resetDeclarations();
    await wmlTestUtils.configureTestingModuleForComponents(WMLOptionsZeroComponent);

    ({ fixture, cpnt } =
      wmlTestUtils.grabComponentInstance(WMLOptionsComponent));
    fixture.detectChanges();
    spyOn(cpnt, 'toggleChosen').and.callThrough();
    spyOn(cpnt,"updateFormArray").and.callThrough()
    spyOn(cpnt,"populateFields").and.callThrough()
    spyOn(cpnt,"listenForClearedForm").and.callThrough()

    spyOn(cpnt.props,"updateFormArrayPredicate").and.callThrough()
    spyOn(cpnt.props.options, 'forEach').and.callThrough();
    spyOn(cpnt.props.chosen, 'forEach').and.callThrough();
    spyOn(cpnt.cdref, 'detectChanges');
    spyOn(cpnt.props.formArray,"clear").and.callThrough()
    spyOn(cpnt.props.formArray,"markAsDirty").and.callThrough()
  });

  describe('init', () => {
    it('should create', () => {
      expect(cpnt).toBeTruthy();
    });

    it('should have all values initalize properly', () => {
      expect(cpnt.myClass).toEqual('WMLOptionsView ');
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
      cpnt.props.options.forEach((btn) => {
        spyOn(btn, 'updateClassString');
      });
      let fn = (val?) => {
        // assert
        expect(cpnt.props.options.forEach).toHaveBeenCalled();
        cpnt.props.options.forEach((btn) => {
          expect(btn.wmlOptions).toEqual(cpnt.props);
          expect(btn.isChosen).toEqual(false);
          expect(btn.updateClassString).toHaveBeenCalledWith('', 'clear');
        });
        expect(cpnt.cdref.detectChanges).toHaveBeenCalled();
        discardPeriodicTasks();
      };

      cpnt.listenForClearedForm().subscribe({ next: fn });

      // act
      cpnt.props.formArray.patchValue([]);
      flush();
    }));
  });

  describe('populateFields', () => {
    it(` when called |
    under normal conditions |
    does the required action `, () => {
      // arrange
      let chosenOption = cpnt.props.options[2];
      cpnt.props.chosen.push(chosenOption);
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
      cpnt.props.formArray.push(new FormControl())
      cpnt.props.chosen = cpnt.props.options.filter((nullVal,index0)=>{
        return [1,2].includes(index0)
      })
      spyOn(cpnt.props.chosen, 'forEach').and.callThrough();
      // act
      cpnt.updateFormArray()

      // assert
      expect(cpnt.props.formArray.clear).
      toHaveBeenCalledWith({
        emitEvent:false
      })
      expect(cpnt.props.chosen.forEach).toHaveBeenCalled()
      expect(cpnt.props.formArray.value.length).toEqual(
        cpnt.props.chosen.length
      )
      expect(cpnt.props.formArray.markAsDirty).toHaveBeenCalledWith()
      expect(cpnt.cdref.detectChanges).toHaveBeenCalled()
    })
  })

  describe("toggleChosen",()=>{
    describe("btn.isChosen",()=>{
      it(` when called |
      under normal conditions |
      does the required action `,()=>{
        // arrange
        let btn = new WMLOptionZeroItemProps()
        // act
        cpnt.toggleChosen(btn)
        // assert
        expect(btn.isChosen).toEqual(true)
        expect(btn.class).toContain(btn.toggleClass)
        expect(cpnt.props.chosen).toContain(btn)
        expect(cpnt.cdref.detectChanges).toHaveBeenCalled()
        expect(cpnt.updateFormArray).toHaveBeenCalled()
      })

      it(` when called |
      and (this.props.chosen.length > this.props.limit)===true |
      does the required action `,()=>{
        // arrange
        let btn = new WMLOptionZeroItemProps()
        let btn2 = new WMLOptionZeroItemProps()
        // act
        cpnt.toggleChosen(btn2)
        // assert
        expect(cpnt.props.chosen.length).toEqual(1)
        expect(btn.isChosen).toEqual(false)
        expect(cpnt.cdref.detectChanges).toHaveBeenCalled()
        expect(cpnt.updateFormArray).toHaveBeenCalled()

      })
    })

    it(` when called |
    and (btn.isChosen)=== false |
    does the required action `,()=>{
      // arrange
      let btn = new WMLOptionZeroItemProps()
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
    and (this.props.formArray)===false |
    does the required action `,()=>{
      // arrange
      let btn = new WMLOptionZeroItemProps()
      // @ts-ignore
      cpnt.props.formArray = null
      // act
      cpnt.toggleChosen(btn)
      // assert
      expect(btn.isChosen).toEqual(true)
      expect(btn.class).toContain(btn.toggleClass)
      expect(cpnt.props.chosen).toContain(btn)
      expect(cpnt.cdref.detectChanges).toHaveBeenCalled()

    })
  })

  describe("ngOnInit",()=>{
    it(` when called |
    under normal conditions |
    does the required action `,()=>{
      // arrange
      cpnt.props.options.forEach((btn) => {
        // assert
        expect(btn.wmlOptions).toEqual(cpnt.props)
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
    and (this.props.listenForClearedFormIsEnabled)===false |
    does the required action `,()=>{
      // arrange
      cpnt.props.listenForClearedFormIsEnabled = false
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
