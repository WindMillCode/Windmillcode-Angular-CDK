// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit,  Input  , ViewEncapsulation   } from '@angular/core';

// rxjs
import { Subject } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';

// wml-components
import { WMLConstructorDecorator, generateClassPrefix } from '@windmillcode/wml-components-base';


// misc



@Component({
  selector: 'wml-carousel-one-slide-example',
  templateUrl: './wml-carousel-one-slide-example.component.html',
  styleUrls: ['./wml-carousel-one-slide-example.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  encapsulation:ViewEncapsulation.None
})
export class WMLCarouselOneSlideExampleComponent  {

  constructor(
    public cdref:ChangeDetectorRef
  ) { }

  classPrefix = generateClassPrefix('WMLCarouselOneSlideExample')
  @Input('props') props: WMLCarouselOneSlideExampleProps = new WMLCarouselOneSlideExampleProps()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  @HostBinding('attr.id') myId?:string
  ngUnsub= new Subject<void>()


  listenForUpdate = ()=>{
    return this.props.setStateSubj
    .pipe(
      takeUntil(this.ngUnsub),
      tap((res?)=>{
        this.props = new WMLCarouselOneSlideExampleProps({
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
export class WMLCarouselOneSlideExampleProps {
  constructor(props:Partial<WMLCarouselOneSlideExampleProps>={}){ }

  id = ""

  setStateSubj = new Subject<WMLCarouselOneSlideExampleProps>()
  setState = (value)=>{
    this.setStateSubj.next(value)
  }
  value:any =0
}


