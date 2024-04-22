// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, Input, ViewChild, ViewContainerRef } from '@angular/core';

// rxjs
import { Subject, takeUntil, tap } from 'rxjs';

// misc
import { FormArray, FormControl } from '@angular/forms';
import { WMLOptionItemParams, WMLOptionsParams } from '../models';
import { generateClassPrefix } from '@windmillcode/angular-wml-components-base';


@Component({
  selector: 'wml-options',
  templateUrl: './wml-options.component.html',
  styleUrls: ['./wml-options.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WmlOptionsComponent {
  constructor(
    public cdref: ChangeDetectorRef
  ) {}
  classPrefix = generateClassPrefix('WmlOptions');
  @Input('params') params: WMLOptionsParams = new WMLOptionsParams();
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  @ViewChild("customOption", { read: ViewContainerRef, static: true }) customOption!: ViewContainerRef;
  ngUnsub = new Subject<void>();

  listenForClearedForm = () => {
    let formArray: FormArray = this.params.formArray;
    return formArray.valueChanges.pipe(
      takeUntil(this.ngUnsub),
      tap((val) => {
        if (val.length === 0) {
          this.params.options.forEach((btn) => {
            btn.wmlOptions = this.params;
            btn.isChosen = false;
            btn.updateClassString("", "clear");
          });
          this.cdref.detectChanges();
        }
      })
    );
  };

  populateFields = (init=false) => {
    this.params.options.forEach((btn) => {
      let chosen = this.params.formArray.value.includes(btn) ;

      btn.clickPredicate = () => {
        this.toggleChosen(btn,false);
        btn.click();
      };
      if (chosen) {
        this.toggleChosen(btn,init);
      }
    });
  };

  updateFormArray = () => {
    this.params.formArray.clear({
      emitEvent: this.params.chosen.length === 0,
    });
    this.params.chosen.forEach((chosen) => {
      let result = this.params.updateFormArrayPredicate(chosen);
      this.params.formArray.push(new FormControl(result));
    });
    this.params.formArray.markAsDirty();
    this.cdref.detectChanges();
  };

  toggleChosen = (btn: WMLOptionItemParams,init=false) => {

    if(!init){
      btn.isChosen = !btn.isChosen;
    }
    btn.isChosen ? btn.updateClassString(btn.toggleClass) : btn.updateClassString("", "clear");

    if (btn.isChosen) {
      this.params.chosen.push(btn);
      if (this.params.chosen.length > this.params.limit) {
        let rmvdBtn = this.params.chosen.shift() as WMLOptionItemParams;
        rmvdBtn.updateClassString("", "clear");
        rmvdBtn.isChosen = false;
      }

    }
    else {
      this.params.chosen = this.params.chosen.filter((option) => option !== btn);
    }

    this.cdref.detectChanges();
    if (this.params.formArray) {
      this.updateFormArray();
    }
  };

  ngOnInit() {
    this.params.options.forEach((btn) => {
      btn.wmlOptions = this.params;
      if(btn.isChosen){
        this.params.formArray.push(new FormControl(btn))
      }
    });
  }

  ngAfterViewInit(): void {
    this.populateFields(true);
    if (this.params.listenForClearedFormIsEnabled) {
      this.listenForClearedForm().subscribe();
    }
  }

  ngOnDestroy() {
    this.ngUnsub.next();
    this.ngUnsub.complete();
  }
}
