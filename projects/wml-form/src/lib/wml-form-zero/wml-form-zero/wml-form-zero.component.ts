// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, Input, SimpleChanges } from '@angular/core';

// rxjs
import { ReplaySubject, Subject, takeUntil, tap } from 'rxjs';

// wml components
import { generateClassPrefix, WMLUIProperty, WMLView } from '@windmillcode/wml-components-base';
import { WMLFieldZeroProps } from '@windmillcode/angular-wml-field';

@Component({
  selector: 'wml-form-zero',
  templateUrl: './wml-form-zero.component.html',
  styleUrls: ['./wml-form-zero.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush

})
export class WMLFormZeroComponent  {

  constructor(
    public cdref:ChangeDetectorRef
  ) { }

  classPrefix = generateClassPrefix('WMLForm')
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  @Input("props") props:WMLFormZeroProps = new WMLFormZeroProps({})

  ngUnsub=new Subject<void>()

  updateFields = ()=>{
    let displayFields:Array<WMLFieldZeroProps> =  [...this.props.fields]

    this.props.displayFields = []
    let expectedFieldsCount = this.props.fieldSections.reduce((acc,val)=>acc+val)
    let actualFieldsCount = displayFields.length
    if(expectedFieldsCount !== actualFieldsCount && actualFieldsCount !==0){
      throw new Error(`
      so the amount of fields you passed to WMLFormZeroProps.updateFields
      is not the same amount as the sum of all fields
      in WMLFormZeroProps.fieldSections, these are used for layout purposes check the 2 properties and try again

      or it might be that we have made a miscalcuation internally
      if you are using updateFields method in a complex manner
      either way contact @windmillcode with the issue
      `)
    }
    this.props.fieldSections
    .forEach((count)=>{
      let section:Array<WMLFieldZeroProps> =[]
      while(count-- !== 0){
        // @ts-ignore
        section.push(displayFields.shift())
      }

      this.props.displayFields.push(new WMLUIProperty({value:section}))

      this.props.fieldsUpdatedEvent.next()
    })
  }
  updateFieldsWrapper = (props= new WMLFormFieldsUpdateSubjProps())=>{


    this.props.fields = props.fields ?? this.props.fields
    if(props.resetFieldSections){
      this.props.resetFieldSections()
    }
    this.updateFields()
    this.cdref.detectChanges()

  }
  ngOnChanges(changes:SimpleChanges){

    this.updateFields()
  }

  listenForChangesInFields = ()=>{
    return this.props.fieldsUpdateSubj
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

export class WMLFormZeroProps{
  constructor(props:Partial<WMLFormZeroProps>={}){
    Object.assign(
      this,
      {
        ...props
      }
    )
    if(props.fieldSections){
      this.fieldSectionsIsPresent = true
    }
    this.resetFieldSections()

  }
  view!:WMLView
  displayFields:Array<WMLUIProperty<WMLFieldZeroProps[]>>=[]
  fields:Array<WMLFieldZeroProps> =[]
  fieldSections!:Array<number>
  fieldSectionsIsPresent=false
  fieldsUpdateSubj=new ReplaySubject<WMLFormFieldsUpdateSubjProps>()
  readonly updateFields=(fields:Array<WMLFieldZeroProps>)=>{
    this.fieldsUpdateSubj.next(new WMLFormFieldsUpdateSubjProps({
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

export class WMLFormFieldsUpdateSubjProps {
  constructor(props:Partial<WMLFormFieldsUpdateSubjProps>={}){
    Object.assign(
      this,
      {
        ...props
      }
    )
  }
  resetFieldSections= true
  fields?:Array<WMLFieldZeroProps>

}
