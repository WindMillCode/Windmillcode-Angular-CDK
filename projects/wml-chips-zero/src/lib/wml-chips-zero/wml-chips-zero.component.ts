// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit,  Input, ElementRef, ViewChild, ViewEncapsulation   } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent, MAT_AUTOCOMPLETE_SCROLL_STRATEGY, MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER } from '@angular/material/autocomplete';




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
    this.filteredValues = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.params.suggestions.slice())),
    );
  }

  generateClassPrefix(prefix:string) {
    return (val: string) => {
      return prefix + val
    }
  }
  classPrefix = this.generateClassPrefix('WMLChipsZero')


  @Input('params') params: WMLChipsParams = new WMLChipsParams()
  @ViewChild("myTextArea", { static: true }) myTextArea!:ElementRef<HTMLInputElement>
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()


  ngAfterViewInit(){
    this.populateFields()
    this.initResizeTextArea().subscribe();

  }
  populateFields =()=>{
    this.params.formArray.value
    .forEach((userInput:string)=>{
      this.fruitCtrl.setValue(userInput)
      this.add()
    })
  }


  private initResizeTextArea() {
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


  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

  fruitCtrl = new FormControl('',Validators.required);
  filteredValues: Observable<string[]>;

  remove(fruit: string): void {
    const index = this.params.userInputs.indexOf(fruit);

    if (index >= 0) {
      this.params.userInputs.splice(index, 1);
    }
    this.updateFormArray()
  }

  add(evt?:Event){
    evt?.preventDefault()
    if([undefined,null,''].includes(this.fruitCtrl.value )){
      return
    }
    this.params.userInputs.push(this.fruitCtrl.value as string)
    this.fruitCtrl.setValue(null,{emitEvent:false})
    this.cdref.detectChanges()
    this.updateFormArray()
  }

  textAreaStyle:Partial<CSSStyleDeclaration>={

  }
  resizeBasedOnTextContent(){
    this.textAreaStyle.height = "0"
    this.textAreaStyle.height = (this.myTextArea.nativeElement.scrollHeight) + "px";
    this.cdref.detectChanges();
  }

  selected(event: MatAutocompleteSelectedEvent): void {

    this.fruitCtrl.setValue(event.option.viewValue)
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.params.suggestions.filter(fruit => fruit.toLowerCase().includes(filterValue));
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
}


