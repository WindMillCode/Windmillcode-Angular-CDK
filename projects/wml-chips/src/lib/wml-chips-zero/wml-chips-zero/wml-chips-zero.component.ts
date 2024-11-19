// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding,   Input, ElementRef, ViewChild, ViewEncapsulation   } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';
import { WMLButtonOneProps, WMLButtonPropsTypeEnum } from '@windmillcode/angular-wml-button';
import { generateClassPrefix } from '@windmillcode/wml-components-base';
import { WMLFieldZeroProps } from '@windmillcode/angular-wml-field';

// rxjs
import { Observable, Subject, timer } from 'rxjs';
import {  map, startWith, takeUntil,tap } from 'rxjs/operators';

// misc

@Component({
    selector: 'wml-chips-zero',
    templateUrl: './wml-chips-zero.component.html',
    styleUrls: ['./wml-chips-zero.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class WMLChipsZeroComponent  {

  constructor (
    public cdref:ChangeDetectorRef,
  ) {
    this.filteredValues = this.itemCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this.filter(fruit) : this.props.suggestions.slice())),
    );
  }


  classPrefix = generateClassPrefix('WMLChipsZero')
  @Input('props') props: WMLChipsZeroProps = new WMLChipsZeroProps()
  @ViewChild("myTextArea", { static: true }) myTextArea!:ElementRef<HTMLInputElement>
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()
  itemCtrl = new FormControl('',Validators.required);
  filteredValues: Observable<string[]>;
  textAreaStyle:Partial<CSSStyleDeclaration>={}

  populateFields =()=>{
    this.props.formArray.value
    .forEach((userInput:string)=>{
      this.itemCtrl.setValue(userInput)
      this.add()
    })
  }

  initResizeTextArea() {
    return timer(300)
      .pipe(
        takeUntil(this.ngUnsub),
        tap(() => {
          this.resizeBasedOnTextContent();
        })
      )
  }

  updateFormArray= ()=>{
    if(this.props.formArray){
      this.props.formArray.clear()
      this.props.userInputs
      .forEach((chosen)=>{
        let result = this.props.updateFormArrayPredicate(chosen)
        this.props.formArray.push(new FormControl(result))
      })
      this.props.formArray.markAsDirty()
    }
  }

  remove(fruit: string): void {
    const index = this.props.userInputs.indexOf(fruit);

    if (index >= 0) {
      this.props.userInputs.splice(index, 1);
    }
    this.updateFormArray()
  }

  clear= ()=>{
    this.props.userInputs = []
    this.updateFormArray()
  }

  add(evt?:Event){
    evt?.preventDefault()
    if([undefined,null,''].includes(this.itemCtrl.value )){
      return
    }
    if(this.props.userInputs.length +1 >this.props.limit){
      return
    }
    this.props.userInputs.push(this.itemCtrl.value as string)
    this.itemCtrl.setValue(null,{emitEvent:false})
    this.cdref.detectChanges()
    this.updateFormArray()
  }

  resizeBasedOnTextContent(){
    this.textAreaStyle.height = "0"
    this.textAreaStyle.height = (this.myTextArea.nativeElement.scrollHeight) + "px";
    this.cdref.detectChanges();
  }

  filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.props.suggestions.filter(item => item.toLowerCase().includes(filterValue));
  }


  ngAfterViewInit(){
    if(this.props.wmlField){
      this.props.formArray = this.props.wmlField.getReactiveFormControl() as FormArray
    }
    this.props.clearBtn.click = this.clear
    this.props.userInputs = []
    this.populateFields()
    this.initResizeTextArea().subscribe();
  }
  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }


}


export class WMLChipsZeroProps {
  constructor(props:Partial<WMLChipsZeroProps>={}){
    Object.assign(
      this,
      {
        ...props
      }
    )
  }
  limit= Infinity
  wmlField!:WMLFieldZeroProps
  formArray = new FormArray<any>([])
  updateFormArrayPredicate:(val:string) => any =(val)=> val
  placeholder = "Type your value then press enter to see it appear"
  userInputsAriaLabel ="User Inputs"
  removeChipAriaLabel = "remove"
  userInputs:Array<string> = []
  suggestions:Array<string> =[
    "Please",
    "Provide",
    "Some",
    "Sample",
    "Values"
  ]
  clearBtn = new WMLButtonOneProps({
    text:"Clear",
    type:WMLButtonPropsTypeEnum.SECONDARY
  })
}


