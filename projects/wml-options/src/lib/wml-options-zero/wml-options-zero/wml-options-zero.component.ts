// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, Input, ViewChild, ViewContainerRef } from '@angular/core';

// rxjs
import { Subject, takeUntil, tap } from 'rxjs';

// misc
import { FormArray, FormControl } from '@angular/forms';
import { WMLOptionZeroItemProps, WMLOptionsZeroProps } from '../models';
import { generateClassPrefix } from '@windmillcode/wml-components-base';


@Component({
    selector: 'wml-options-zero',
    templateUrl: './wml-options-zero.component.html',
    styleUrls: ['./wml-options-zero.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class WMLOptionsZeroComponent {
  constructor(
    public cdref: ChangeDetectorRef
  ) {}
  classPrefix = generateClassPrefix('WMLOptions');
  @Input('props') props: WMLOptionsZeroProps = new WMLOptionsZeroProps();
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  @ViewChild("customOption", { read: ViewContainerRef, static: true }) customOption!: ViewContainerRef;
  ngUnsub = new Subject<void>();

  listenForClearedForm = () => {
    let formArray: FormArray = this.props.formArray;
    return formArray.valueChanges.pipe(
      takeUntil(this.ngUnsub),
      tap((val) => {
        if (val.length === 0) {
          this.props.options.forEach((btn) => {
            btn.wmlOptions = this.props;
            btn.isChosen = false;
            btn.updateClassString("", "clear");
          });
          this.cdref.detectChanges();
        }
      })
    );
  };

  populateFields = (init=false) => {
    let chosen = this.props.options.filter((btn) => {
      let chosen = this.props.formArray.value.includes((btn))
      // let chosen = this.props.formArray.value.find((field)=>{

      //   return field.uniqueId === btn.uniqueId
      // }) ;
      btn.clickPredicate = () => {
        this.toggleChosen(btn,false);
        btn.click();
      };
      return chosen

    });
    chosen.forEach((btn)=>{
      this.toggleChosen(btn!,init);
    })
  };

  updateFormArray = () => {
    this.props.formArray.clear({
      emitEvent: this.props.chosen.length === 0,
    });
    this.props.chosen.forEach((chosen,index0) => {
      let result = this.props.updateFormArrayPredicate(chosen);
      this.props.formArray.push(new FormControl(result),{emitEvent:index0 === this.props.chosen.length-1});
    });
    this.props.formArray.markAsDirty();
    this.cdref.detectChanges();
  };

  toggleChosen = (btn: WMLOptionZeroItemProps,init=false) => {

    if(!init){
      btn.isChosen = !btn.isChosen;
    }
    btn.isChosen ? btn.updateClassString(btn.toggleClass) : btn.updateClassString("", "clear");

    if (btn.isChosen) {
      this.props.chosen.push(btn);
      if (this.props.chosen.length > this.props.limit) {
        let rmvdBtn = this.props.chosen.shift() as WMLOptionZeroItemProps;
        rmvdBtn.updateClassString("", "clear");
        rmvdBtn.isChosen = false;
      }

    }
    else {
      this.props.chosen = this.props.chosen.filter((option) => option !== btn);
    }

    this.cdref.detectChanges();
    if (this.props.formArray) {
      this.updateFormArray();
    }
  };



  ngAfterViewInit(): void {
    if(this.props.hasBeenInitalized){
      return
    }
    if(this.props.wmlField){
      this.props.formArray = this.props.wmlField.getReactiveFormControl() as FormArray
    }
    this.props.options.forEach((btn) => {
      // btn.uniqueId = this.props.getNewUUID()
      btn.wmlOptions = this.props;
      if(btn.isChosen){
        this.props.formArray.push(new FormControl(btn))
      }
    });

    this.populateFields(true);
    if (this.props.listenForClearedFormIsEnabled) {
      this.listenForClearedForm().subscribe();
    }
    this.props.hasBeenInitalized = true

  }

  ngOnDestroy() {
    this.ngUnsub.next();
    this.ngUnsub.complete();
  }
}
