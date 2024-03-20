// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, Input, OnInit, SimpleChanges } from '@angular/core';

// rxjs
import { ReplaySubject, Subject, takeUntil, tap } from 'rxjs';

// wml components
import { WMLUIProperty, WMLView } from '@windmillcode/angular-wml-components-base';
import { WMLField } from '@windmillcode/angular-wml-field';

@Component({
  selector: 'wml-form',
  templateUrl: './wml-form.component.html',
  styleUrls: ['./wml-form.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush

})
export class WmlFormComponent  {

  constructor(
    public cdref:ChangeDetectorRef
  ) { }
  generateClassPrefix(prefix:string) {
    return (val: string) => {
      return prefix + val
    }
  }
  classPrefix = this.generateClassPrefix('WmlForm')
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  @Input("params") params:WMLForm = new WMLForm({})

  ngUnsub=new Subject<void>()


  updateFields = ()=>{
    let displayFields:Array<WMLField> =  [...this.params.fields]

    this.params.displayFields = []
    let expectedFieldsCount = this.params.fieldSections.reduce((acc,val)=>acc+val)
    let actualFieldsCount = displayFields.length
    if(expectedFieldsCount !== actualFieldsCount && actualFieldsCount !==0){
      throw new Error(`
      so the amount of fields you passed to WMLForm.updateFields
      is not the same amount as the sum of all fields
      in WMLForm.fieldSections, these are used for layout purposes check the 2 properties and try again

      or it might be that we have made a miscalcuation internally
      if you are using updateFields method in a complex manner
      either way contact @windmillcode with the issue
      `)
    }
    this.params.fieldSections
    .forEach((count)=>{
      let section:Array<WMLField> =[]
      while(count-- !== 0){
        // @ts-ignore
        section.push(displayFields.shift())
      }

      this.params.displayFields.push(new WMLUIProperty({value:section}))

      this.params.fieldsUpdatedEvent.next()
    })
  }
  updateFieldsWrapper = (params= new WMLFormFieldsUpdateSubjParams())=>{


    this.params.fields = params.fields ?? this.params.fields
    if(params.resetFieldSections){
      this.params.resetFieldSections()
    }
    this.updateFields()
    this.cdref.detectChanges()

  }
  ngOnChanges(changes:SimpleChanges){

    this.updateFields()
  }

  listenForChangesInFields = ()=>{
    return this.params.fieldsUpdateSubj
    .pipe(
      takeUntil(this.ngUnsub),
      tap(this.updateFieldsWrapper)
    )
  }

  silenceSubmitAction =($event)=>{
    $event.preventDefault()
  }

  ngOnInit(): void {
    this.listenForChangesInFields().subscribe()

  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }




}

export class WMLForm{
  constructor(params:Partial<WMLForm>={}){
    Object.assign(
      this,
      {
        ...params
      }
    )
    if(params.fieldSections){
      this.fieldSectionsIsPresent = true
    }
    this.resetFieldSections()

  }
  view!:WMLView
  displayFields:Array<WMLUIProperty<WMLField[]>>=[]
  fields:Array<WMLField> =[]
  fieldSections!:Array<number>
  fieldSectionsIsPresent=false
  fieldsUpdateSubj=new ReplaySubject<WMLFormFieldsUpdateSubjParams>()
  readonly updateFields=(fields:Array<WMLField>)=>{
    this.fieldsUpdateSubj.next(new WMLFormFieldsUpdateSubjParams({
        fields
      })
    )
  }
  readonly fieldsUpdatedEvent = new Subject<void>()
  resetFieldSections=()=>{
    if(!this.fieldSectionsIsPresent ){
      this.fieldSections = [this.fields.length]
    }
  }
}

export class WMLFormFieldsUpdateSubjParams {
  constructor(params:Partial<WMLFormFieldsUpdateSubjParams>={}){
    Object.assign(
      this,
      {
        ...params
      }
    )
  }
  resetFieldSections= true
  fields?:Array<WMLField>

}
