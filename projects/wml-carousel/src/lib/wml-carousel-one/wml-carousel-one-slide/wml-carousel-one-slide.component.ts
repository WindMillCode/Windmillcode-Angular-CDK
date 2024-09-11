// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit,  Input  , ViewEncapsulation   } from '@angular/core';

// rxjs
import { Subject } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';

// wml-components
import { WMLConstructorDecorator, generateClassPrefix, generateIdPrefix } from '@windmillcode/wml-components-base';


// misc



@Component({
  selector: 'wml-carousel-one-slide',
  templateUrl: './wml-carousel-one-slide.component.html',
  styleUrls: ['./wml-carousel-one-slide.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  encapsulation:ViewEncapsulation.None
})
export class WMLCarouselOneSlideComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }

  classPrefix = generateClassPrefix('WMLCarouselOneSlide')
  @Input('props') props: WMLCarouselOneSlideProps = new WMLCarouselOneSlideProps()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  @HostBinding('attr.id') myId?:string
  ngUnsub= new Subject<void>()


  listenForUpdate = ()=>{
    return this.props.setStateSubj
    .pipe(
      takeUntil(this.ngUnsub),
      tap((res?)=>{
        this.props = new WMLCarouselOneSlideProps({
          ...this.props,
          ...(res ?? this.props)
        })
        this.cdref.detectChanges()
      })
    )
  }


  ngOnInit(): void {

    if(this.props.id){
      this.myId = this.props.id
    }

    this.listenForUpdate().subscribe()

  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}



@WMLConstructorDecorator
export class WMLCarouselOneSlideProps {
  constructor(props:Partial<WMLCarouselOneSlideProps>={}){ }

  id = ""

  setStateSubj = new Subject<WMLCarouselOneSlideProps>()
  setState = (value)=>{
    this.setStateSubj.next(value)
  }
}


