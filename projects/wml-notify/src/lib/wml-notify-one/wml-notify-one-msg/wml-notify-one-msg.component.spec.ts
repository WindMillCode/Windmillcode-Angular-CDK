// testing
import { ComponentFixture } from '@angular/core/testing';
import { mockTranslateService } from '@app/core/utility/test-utils';

// rxjs
import { Subject } from 'rxjs';

import { WMLNotifyOneMsgComponent } from './wml-notify-one-msg.component';


describe('WMLNotifyOneMsgComponent', () => {
  let cpnt: WMLNotifyOneMsgComponent;
  let fixture: ComponentFixture<WMLNotifyOneMsgComponent>;

  beforeEach(async () => {
    await wmlTestUtils.configureTestingModuleForComponents(WMLNotifyOneMsgComponent,{mockTranslateService});
    ({fixture, cpnt} = wmlTestUtils.grabComponentInstance(WMLNotifyOneMsgComponent));
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
