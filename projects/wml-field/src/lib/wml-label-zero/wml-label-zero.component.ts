// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, Input } from '@angular/core';

// services


// rxjs
import { Subject } from 'rxjs';
import { delay, takeUntil,tap } from 'rxjs/operators';

// wml-components
import { WMLFieldZeroProps } from '../wml-field-zero/wml-field-zero.component';


// reactive-forms
import { AbstractControl } from '@angular/forms';
import { generateClassPrefix, WMLWrapper } from '@windmillcode/wml-components-base';

@Component({
    selector: 'wml-label-zero',
    templateUrl: './wml-label-zero.component.html',
    styleUrls: ['./wml-label-zero.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class WMLLabelZeroComponent  {

  constructor(
    public cdref:ChangeDetectorRef,
  ) { }


  classPrefix = generateClassPrefix('WMLLabel')

  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()
  @Input('props') props!: WMLLabelZeroProps
  formControl!:AbstractControl
  displayErrors:string[] = []

  ngOnInit(): void {
    this.formControl = this.props.wmlField.field.parentForm.controls[this.props.wmlField.field.formControlName]
    this.listenForParentFormStatusChanges().subscribe()
    this.props.cdref = this.cdref
  }

  private listenForParentFormStatusChanges() {
    return this.props.wmlField.field.parentForm
      .statusChanges
      .pipe(
        takeUntil(this.ngUnsub),
        delay(100),
        tap((res) => {
          this.displayErrors = this.props.toggleErrors(this.formControl);
          this.cdref.detectChanges();
        })
      )
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}

export class WMLLabelZeroProps extends WMLWrapper{
  constructor(props:Partial<WMLLabelZeroProps>={}){
    super(props)
    Object.assign(
      this,
      {
        ...props
      }
    )
    this.labels = this.labels.map((labelLine)=>{
      return labelLine.map((label)=>{
        label.type  = label.type || 'default'
        label.isPresent = (label.isPresent === undefined ? true :label.isPresent )
        return label
      })
    })
  }

  cdref?:ChangeDetectorRef
  type: 'label' | 'error'  = 'label'
  isPresent:boolean = true
  errorMsgs:{
    [k:string]:string
  } = {}
  labels:Partial<{
    type:"default" | "error" | 'required' | 'errorLink' | 'defaultLink',
    value:string
    isPresent:boolean
  }>[][] = [
    [
      {
        type:"required",
        value:"*"
      },
      {
        type:"default",
        value:"My Label"
      }
    ]
  ]
  toggleErrors(formControl:AbstractControl){
    return  Object.keys(formControl.errors ?? {})
    .map((key)=>{
      return this.errorMsgs[key]
    })
  }
  wmlField!:WMLFieldZeroProps
}
