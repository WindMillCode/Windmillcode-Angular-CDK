// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit,  Input, ElementRef, ViewChild, ViewEncapsulation   } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';
import { WmlButtonOneParams } from '@windmillcode/angular-wml-button-zero';
import { generateClassPrefix } from '@windmillcode/angular-wml-components-base';
import { WMLField } from '@windmillcode/angular-wml-field/public-api';




// rxjs
import { Observable, Subject, timer } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith, takeUntil,tap } from 'rxjs/operators';

// misc

@Component({
  selector: 'wml-chips-zero',
  templateUrl: './wml-chips-zero.component.html',
  styleUrls: ['./wml-chips-zero.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  encapsulation:ViewEncapsulation.None
})
export class WMLChipsZeroComponent  {

  constructor (
    public cdref:ChangeDetectorRef,
  ) {
    this.filteredValues = this.itemCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this.filter(fruit) : this.params.suggestions.slice())),
    );
  }


  classPrefix = generateClassPrefix('WMLChipsZero')


  @Input('params') params: WMLChipsParams = new WMLChipsParams()
  @ViewChild("myTextArea", { static: true }) myTextArea!:ElementRef<HTMLInputElement>
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()
  itemCtrl = new FormControl('',Validators.required);
  filteredValues: Observable<string[]>;
  textAreaStyle:Partial<CSSStyleDeclaration>={}




  populateFields =()=>{
    this.params.formArray.value
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
    if(this.params.formArray){
      this.params.formArray.clear()
      this.params.userInputs
      .forEach((chosen)=>{
        let result = this.params.updateFormArrayPredicate(chosen)
        this.params.formArray.push(new FormControl(result))
      })
      this.params.formArray.markAsDirty()
    }
  }

  remove(fruit: string): void {
    const index = this.params.userInputs.indexOf(fruit);

    if (index >= 0) {
      this.params.userInputs.splice(index, 1);
    }
    this.updateFormArray()
  }

  clear= ()=>{
    this.params.userInputs = []
    this.updateFormArray()
  }

  add(evt?:Event){
    evt?.preventDefault()
    if([undefined,null,''].includes(this.itemCtrl.value )){
      return
    }
    this.params.userInputs.push(this.itemCtrl.value as string)
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
    return this.params.suggestions.filter(item => item.toLowerCase().includes(filterValue));
  }


  ngAfterViewInit(){
    if(this.params.wmlField){
      this.params.formArray = this.params.wmlField.getReactiveFormControl() as FormArray
    }
    this.params.clearBtn.click = this.clear
    this.params.userInputs = []
    this.populateFields()
    this.initResizeTextArea().subscribe();
  }
  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }


}


export class WMLChipsParams {
  constructor(params:Partial<WMLChipsParams>={}){
    Object.assign(
      this,
      {
        ...params
      }
    )
  }
  limit= Infinity
  wmlField!:WMLField
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
  clearBtn = new WmlButtonOneParams({
    text:"Clear"
  })
}


