// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding,  Input  , ViewEncapsulation, ElementRef   } from '@angular/core';

// rxjs
import { Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil,tap } from 'rxjs/operators';

// wml-components
import { WMLUIProperty, generateClassPrefix } from '@windmillcode/wml-components-base';
import { WMLFieldZeroProps } from '@windmillcode/angular-wml-field';
import { AbstractControl } from '@angular/forms';
// misc

@Component({
  selector: 'wml-toggle-zero',
  templateUrl: './wml-toggle-zero.component.html',
  styleUrls: ['./wml-toggle-zero.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  encapsulation:ViewEncapsulation.None
})
export class WMLToggleZeroComponent  {

  constructor(
    public cdref:ChangeDetectorRef,
    public el: ElementRef
  ) { }

  classPrefix = generateClassPrefix('WMLToggleZero')
  @Input('props') props: WMLToggleZeroProps = new WMLToggleZeroProps()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  @HostBinding('attr.id') myId?:string
  ngUnsub= new Subject<void>()
  formControl!:AbstractControl


  toggle = (val?,updateFormControl=true)=>{
    if(this.formControl?.disabled === true){
      return
    }
    this.props.thumb.value = ![null,undefined].includes(val) ? val: !this.props.thumb.value
    if(this.formControl && updateFormControl){
      this.formControl.patchValue(this.props.thumb.value,{emitEvent:true})
    }
    this.toggleThumb()
    this.toggleText()
    this.toggleContainer();
    this.props.onToggle(this.props)
    this.cdref.detectChanges()

  }

  toggleThumb = ()=>{
    this.props.thumb.updateClassString("On",this.props.thumb.value ? "add":"remove")
    this.props.thumb.updateClassString("Off",!this.props.thumb.value ? "add":"remove")
    this.cdref.detectChanges()
  }

  toggleText = ()=>{
    this.props.toggleText.updateClassString("On",this.props.thumb.value ? "add":"remove")
    this.cdref.detectChanges()
  }

  toggleContainer() {
    this.props.container.updateClassString("Checked", this.props.thumb.value ? "add" : "remove");
    this.props.container.updateClassString("UnChecked", !this.props.thumb.value ? "add" : "remove");
    this.cdref.detectChanges()
  }

  updateCssVars = () => {
    this.el.nativeElement.style.setProperty(
      '--text-toggle-left-margin',
      this.props.textToggleLeftMargin
    );
    this.el.nativeElement.style.setProperty(
      '--toggle-background-off-color',
      this.props.toggleBackgroundOffColor
    );
    this.el.nativeElement.style.setProperty(
      '--toggle-background-on-color',
      this.props.toggleBackgroundOnColor
    );
    this.cdref.detectChanges()
  }

  listenForformControlChanges =()=>{
    return this.formControl?.valueChanges
    .pipe(
      distinctUntilChanged(),
      takeUntil(this.ngUnsub),
      tap((res)=>{

        this.toggle(res,false)
      })
    )
  }

  listenForFormControlDisabled =()=>{
    return this.formControl?.statusChanges
    .pipe(
      takeUntil(this.ngUnsub),
      tap((res)=>{
        this.toggleDisabled(res);

      })
    )
  }

  toggleDisabled(res: string) {
    this.props.container.updateClassString(
      this.classPrefix("MainState0"),
      res === "DISABLED" ? "add" : "remove"
    );
    this.cdref.detectChanges();
  }

  ngOnInit(): void {
    if(this.props.id){
      this.myId = this.props.id
    }
    this.props.triggerToggle = this.toggle
    this.updateCssVars()
    this.formControl = this.props.wmlField?.getReactiveFormControl()
    if(this.formControl){
      this.props.thumb.value = this.formControl.value
      this.toggleDisabled(this.formControl.status)
    }
    this.toggle(this.props.thumb.value)
    this.listenForformControlChanges()?.subscribe()
    this.listenForFormControlDisabled()?.subscribe()

  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}



export class WMLToggleZeroProps {
  constructor(props:Partial<WMLToggleZeroProps &{
    propChecked?:boolean,
    propInitText?:string
  }>={}){

    let origProps = Object.entries(props)
    .filter(([key,val]) => {
      return !key.startsWith('prop');
    });
    Object.assign(this, { ...Object.fromEntries(origProps) })
    // @ts-ignore
    if(![null,undefined].includes(props.propChecked)){
      this.thumb.value = props.propChecked
    }
    if(props.propInitText){
      this.toggleText.text = props.propInitText
    }
  }
  id?:string
  container = new WMLUIProperty()
  thumb = new WMLUIProperty()
  toggleText= new WMLUIProperty({
    text:"Off"
  })
  textToggleLeftMargin =-.6;
  toggleBackgroundOnColor = "rgba(var(--wml-toggle-primary))"
  toggleBackgroundOffColor = "rgba(var(--wml-toggle-secondary))"
  triggerToggle!:Function
  wmlField!:WMLFieldZeroProps

  onToggle=(self:WMLToggleZeroProps)=>{
    self.toggleText.text = self.thumb.value ? "On":"Off"
  }

}


