// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit,  Input  , ViewEncapsulation, ViewChild, ViewContainerRef, ElementRef   } from '@angular/core';

// rxjs
import { Subject, fromEvent } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';

// wml-components
import { WMLUIProperty, generateClassPrefix } from '@windmillcode/angular-wml-components-base';
import { WMLField } from '@windmillcode/wml-field';
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
  @Input('params') params: WMLToggleZeroParams = new WMLToggleZeroParams()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  @HostBinding('id') myId!:string
  ngUnsub= new Subject<void>()
  formControl!:AbstractControl


  toggle = (val?)=>{
    if(this.formControl?.disabled === true){
      return
    }
    this.params.thumb.value = ![null,undefined].includes(val) ? val: !this.params.thumb.value
    if(this.formControl){
      this.formControl.patchValue(this.params.thumb.value,{emitEvent:false})
    }
    this.toggleThumb()
    this.toggleText()
    this.toggleContainer();
    this.params.onToggle(this.params)
    this.cdref.detectChanges()

  }

  toggleThumb = ()=>{
    this.params.thumb.updateClassString("On",this.params.thumb.value ? "add":"remove")
    this.params.thumb.updateClassString("Off",!this.params.thumb.value ? "add":"remove")
    this.cdref.detectChanges()
  }

  toggleText = ()=>{
    this.params.toggleText.updateClassString("On",this.params.thumb.value ? "add":"remove")
    this.cdref.detectChanges()
  }

  toggleContainer() {
    this.params.container.updateClassString("Checked", this.params.thumb.value ? "add" : "remove");
    this.params.container.updateClassString("UnChecked", !this.params.thumb.value ? "add" : "remove");
    this.cdref.detectChanges()
  }

  updateCssVars = () => {
    this.el.nativeElement.style.setProperty(
      '--text-toggle-left-margin',
      this.params.textToggleLeftMargin
    );
    this.el.nativeElement.style.setProperty(
      '--toggle-background-off-color',
      this.params.toggleBackgroundOnColor
    );
    this.el.nativeElement.style.setProperty(
      '--toggle-background-on-color',
      this.params.toggleBackgroundOffColor
    );
    this.cdref.detectChanges()
  }

  listenForformControlChanges =()=>{
    return this.formControl?.valueChanges
    .pipe(
      takeUntil(this.ngUnsub),
      tap((res)=>{
        this.toggle(res)
      })
    )
  }

  listenForFormControlDisabled =()=>{
    return this.formControl?.statusChanges
    .pipe(
      takeUntil(this.ngUnsub),
      tap((res)=>{
        this.params.container.updateClassString(
          this.classPrefix("MainState0"),
          res==="DISABLED" ? "add" :"remove"
        )
        this.cdref.detectChanges()

      })
    )
  }

  ngOnInit(): void {
    this.myId = this.params.id
    this.params.triggerToggle = this.toggle
    this.updateCssVars()
    this.formControl = this.params.wmlField?.getReactiveFormControl()
    if(this.formControl){
      this.params.thumb.value = this.formControl.value
    }
    this.toggle(this.params.thumb.value)
    this.listenForformControlChanges()?.subscribe()
    this.listenForFormControlDisabled()?.subscribe()
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}



export class WMLToggleZeroParams {
  constructor(params:Partial<WMLToggleZeroParams &{
    paramChecked?:boolean,
    paramInitText?:string
  }>={}){

    let origParams = Object.entries(params)
    .filter(([key,val]) => {
      return !key.startsWith('param');
    });
    Object.assign(this, { ...Object.fromEntries(origParams) })
    // @ts-ignore
    if(![null,undefined].includes(params.paramChecked)){
      this.thumb.value = params.paramChecked
    }
    if(params.paramInitText){
      this.toggleText.text = params.paramInitText
    }
  }
  id:string = ""
  container = new WMLUIProperty()
  thumb = new WMLUIProperty()
  toggleText= new WMLUIProperty({
    text:"Off"
  })
  textToggleLeftMargin =-.6;
  toggleBackgroundOffColor = "rgba(var(--wml-toggle-zero-primary))"
  toggleBackgroundOnColor = "rgba(var(--wml-toggle-zero-secondary))"
  triggerToggle!:Function
  wmlField!:WMLField

  onToggle=(self:WMLToggleZeroParams)=>{
    self.toggleText.text = self.thumb.value ? "On":"Off"
  }

}


