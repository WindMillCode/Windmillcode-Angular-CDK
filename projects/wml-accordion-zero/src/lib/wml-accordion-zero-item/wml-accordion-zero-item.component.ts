// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit,  Input  , ViewEncapsulation, ViewChild, ViewContainerRef, ElementRef   } from '@angular/core';

// rxjs
import { Subject } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';

// wml-components
import { WMLCustomComponent, WMLUIProperty, addCustomComponent, generateClassPrefix } from '@windmillcode/angular-wml-components-base';
import { WMLAccordionZeroSampleComponent, WMLAccordionZeroSampleParams } from '../wml-accordion-zero-sample/wml-accordion-zero-sample.component';
import { WMLAccordionZeroTitleComponent, WMLAccordionZeroTitleParams } from '../wml-accordion-zero-title/wml-accordion-zero-title.component';
// misc

type toggleAccordionEventType = Partial<{
  val:boolean,
  emit:boolean
}>

@Component({

  selector: 'wml-accordion-zero-item',
  templateUrl: './wml-accordion-zero-item.component.html',
  styleUrls: ['./wml-accordion-zero-item.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  encapsulation:ViewEncapsulation.None

})
export class WMLAccordionZeroItemComponent  {

  constructor(
    public cdref:ChangeDetectorRef,
    public el:ElementRef
  ) { }

  classPrefix = generateClassPrefix('WMLAccordionZeroItem')
  @Input('params') params: WMLAccordionZeroItemParams = new WMLAccordionZeroItemParams()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  @HostBinding('id') myId!:string;
  @ViewChild("customAccordionBody", {read:ViewContainerRef,static:true}) customAccordionBody!:ViewContainerRef;
  @ViewChild("customAccordionTitle", {read:ViewContainerRef,static:true}) customAccordionTitle!:ViewContainerRef;
  ngUnsub= new Subject<void>()
  contentPod = new WMLUIProperty({isPresent:false})



  updateCssValues = ()=>{
    this.el.nativeElement.style.setProperty(
      '--wml-accordion-zero-startHeight',
      this.params.startHeight
    )
    this.el.nativeElement.style.setProperty(
      '--wml-accordion-zero-endHeight0',
      this.params.endHeight0
    )
    this.el.nativeElement.style.setProperty(
      '--wml-accordion-zero-endHeight1',
      this.params.endHeight1
    )
    this.el.nativeElement.style.setProperty(
      '--wml-accordion-zero-animationDuration0',
      this.params.animationDuration0
    )
    this.el.nativeElement.style.setProperty(
      '--wml-accordion-zero-animationDuration1',
      this.params.animationDuration1
    )
    this.cdref.detectChanges()
  }

  toggleAccordion = (val:toggleAccordionEventType ={emit:true})=>{
    this.params.isClosed = val.val ?? !this.params.isClosed

    if(this.params.isClosed){
      this.contentPod.updateClassString(this.classPrefix('Pod1Closing'))
    }
    else {
      this.contentPod.isPresent = true
      this.contentPod.updateClassString(this.classPrefix('Pod1Closing'),"remove")
    }
    this.cdref.detectChanges()
    if(val.emit !== false){
      this.params.toggleAccordionEvent.next(this.params.isClosed)
    }
  }

  triggerCloseAnimation =()=>{
    if(this.params.isClosed){
      this.contentPod.isPresent = false;
      this.cdref.detectChanges();
    }
  }

  listenForToggle =()=>{
    return this.params.toggleAccordionSubj
    .pipe(
      takeUntil(this.ngUnsub),
      tap((val)=>this.toggleAccordion({
        ...val,
        val:!val.val
      }))
    )

  }

  listenForUpdateAccordionBody =()=>{
    return this.params.updateAccordionBodySubj
      .pipe(
        takeUntil(this.ngUnsub),
        tap((custom)=>{
          this.customAccordionBody.clear()
          this.params.accordionBody = custom
          addCustomComponent(
            this.customAccordionBody,
            custom.cpnt,
            custom.params
          )
          this.cdref.detectChanges()
        })
      )

  }


  updateAccordionBody() {
    addCustomComponent(
      this.customAccordionBody,
      this.params.accordionBody.cpnt,
      this.params.accordionBody.params
    );
  }

  ngOnInit(): void {
    this.myId = this.params.id
    this.updateAccordionBody();
    addCustomComponent(
      this.customAccordionTitle,
      this.params.accordionTitle.cpnt,
      this.params.accordionTitle.params
    )
    this.updateCssValues()
    this.listenForToggle().subscribe()
    this.listenForUpdateAccordionBody().subscribe()
    if(!this.params.isClosed){
      this.toggleAccordion({
        val:this.params.isClosed,
      })
    }

  }


  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}



export class WMLAccordionZeroItemParams extends WMLUIProperty {
  constructor(params:Partial<WMLAccordionZeroItemParams>={}){
    super(params)
    let origParams = Object.entries(params)
      .filter(([key,val]) => {
        return !key.startsWith('param');
      });
    Object.assign(this, { ...Object.fromEntries(origParams) });
    if(params.paramTitle){
      this.accordionTitle.params.title = params.paramTitle
    }
  }



  isClosed = true
  toggleAccordionEvent = new Subject<boolean>()
  toggleAccordionSubj = new Subject<{
    val:boolean,
    emit:boolean
  }>()
  paramTitle = "My Accordion Title"
  accordionTitle = new WMLCustomComponent({
    cpnt:WMLAccordionZeroTitleComponent,
    params:new WMLAccordionZeroTitleParams()
  })
  /**
   * @deprecated use paramTitle instead
  */
  get title(){
    return this.accordionTitle.params.title
  }
  /**
   * @deprecated use paramTitle instead
  */
  set title(val){
    if(this.accordionTitle){
      this.accordionTitle.params.title = val
    }
  }
  accordionBody = new WMLCustomComponent({
    cpnt:WMLAccordionZeroSampleComponent,
    params:new WMLAccordionZeroSampleParams()
  })
  updateAccordionBodySubj = new Subject<WMLCustomComponent>()
  customTitle
  startHeight = "calc(0/10.6 * 1rem)"
  endHeight0 = "calc(20000/10.6 * 1rem)"
  endHeight1 = "calc(2000/10.6 * 1rem)"
  animationDuration0 = "10s"
  animationDuration1 = "1.25s"

}


