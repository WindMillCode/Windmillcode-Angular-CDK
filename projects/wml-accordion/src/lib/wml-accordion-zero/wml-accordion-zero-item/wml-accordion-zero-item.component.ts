// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding,  Input  , ViewEncapsulation, ViewChild, ViewContainerRef, ElementRef   } from '@angular/core';

// rxjs
import { Subject } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';

// wml-components
import { WMLCustomComponent, WMLUIProperty, addCustomComponent, generateClassPrefix } from '@windmillcode/angular-wml-components-base';
import { WMLAccordionZeroSampleComponent, WMLAccordionZeroSampleProps } from '../wml-accordion-zero-sample/wml-accordion-zero-sample.component';
import { WMLAccordionZeroTitleComponent, WMLAccordionZeroTitleProps } from '../wml-accordion-zero-title/wml-accordion-zero-title.component';
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
  @Input('props') props: WMLAccordionZeroItemProps = new WMLAccordionZeroItemProps()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  @HostBinding('attr.id') myId?:string;
  @ViewChild("customAccordionBody", {read:ViewContainerRef,static:true}) customAccordionBody!:ViewContainerRef;
  @ViewChild("customAccordionTitle", {read:ViewContainerRef,static:true}) customAccordionTitle!:ViewContainerRef;
  ngUnsub= new Subject<void>()
  contentPod = new WMLUIProperty({isPresent:false})



  updateCssValues = ()=>{
    this.el.nativeElement.style.setProperty(
      '--wml-accordion-zero-startHeight',
      this.props.startHeight
    )
    this.el.nativeElement.style.setProperty(
      '--wml-accordion-zero-endHeight0',
      this.props.endHeight0
    )
    this.el.nativeElement.style.setProperty(
      '--wml-accordion-zero-endHeight1',
      this.props.endHeight1
    )
    this.el.nativeElement.style.setProperty(
      '--wml-accordion-zero-animationDuration0',
      this.props.animationDuration0
    )
    this.el.nativeElement.style.setProperty(
      '--wml-accordion-zero-animationDuration1',
      this.props.animationDuration1
    )
    this.cdref.detectChanges()
  }

  toggleAccordion = (val:toggleAccordionEventType ={emit:true})=>{
    this.props.isClosed = val.val ?? !this.props.isClosed

    if(this.props.isClosed){
      this.contentPod.updateClassString(this.classPrefix('Pod1Closing'))
    }
    else {
      this.contentPod.isPresent = true
      this.contentPod.updateClassString(this.classPrefix('Pod1Closing'),"remove")
    }
    this.cdref.detectChanges()
    if(val.emit !== false){
      this.props.toggleAccordionEvent.next(this.props.isClosed)
    }
  }

  triggerCloseAnimation =()=>{
    if(this.props.isClosed){
      this.contentPod.isPresent = false;
      this.cdref.detectChanges();
    }
  }

  listenForToggle =()=>{
    return this.props.toggleAccordionSubj
    .pipe(
      takeUntil(this.ngUnsub),
      tap((val)=>this.toggleAccordion({
        ...val,
        val:!val.val
      }))
    )

  }

  listenForUpdateAccordionBody =()=>{
    return this.props.updateAccordionBodySubj
      .pipe(
        takeUntil(this.ngUnsub),
        tap((custom)=>{
          this.customAccordionBody.clear()
          this.props.accordionBody = custom
          addCustomComponent(
            this.customAccordionBody,
            custom.cpnt,
            custom.props
          )
          this.cdref.detectChanges()
        })
      )

  }


  updateAccordionBody() {
    addCustomComponent(
      this.customAccordionBody,
      this.props.accordionBody.cpnt,
      this.props.accordionBody.props
    );
  }

  ngOnInit(): void {
    if(this.props.id){
      this.myId = this.props.id
    }
    this.updateAccordionBody();
    addCustomComponent(
      this.customAccordionTitle,
      this.props.accordionTitle.cpnt,
      this.props.accordionTitle.props
    )
    this.updateCssValues()
    this.listenForToggle().subscribe()
    this.listenForUpdateAccordionBody().subscribe()
    if(!this.props.isClosed){
      this.toggleAccordion({
        val:this.props.isClosed,
      })
    }

  }


  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}



export class WMLAccordionZeroItemProps extends WMLUIProperty {
  constructor(props:Partial<WMLAccordionZeroItemProps & Partial<{propTitle:string}>>={}){
    super(props)
    let origProps = Object.entries(props)
      .filter(([key,val]) => {
        return !key.startsWith('prop');
      });
    Object.assign(this, { ...Object.fromEntries(origProps) });
    if(props.propTitle){
      this.accordionTitle.props.title = props.propTitle
    }
  }

  isClosed = true
  toggleAccordionEvent = new Subject<boolean>()
  toggleAccordionSubj = new Subject<{
    val:boolean,
    emit:boolean
  }>()
  accordionTitle = new WMLCustomComponent({
    cpnt:WMLAccordionZeroTitleComponent,
    props:new WMLAccordionZeroTitleProps({
      title:"My Accordion Title"
    })
  })

  accordionBody = new WMLCustomComponent({
    cpnt:WMLAccordionZeroSampleComponent,
    props:new WMLAccordionZeroSampleProps()
  })
  updateAccordionBodySubj = new Subject<WMLCustomComponent>()
  customTitle
  startHeight = "calc(0/10.6 * 1rem)"
  endHeight0 = "calc(20000/10.6 * 1rem)"
  endHeight1 = "calc(2000/10.6 * 1rem)"
  animationDuration0 = "10s"
  animationDuration1 = "1.25s"

}


