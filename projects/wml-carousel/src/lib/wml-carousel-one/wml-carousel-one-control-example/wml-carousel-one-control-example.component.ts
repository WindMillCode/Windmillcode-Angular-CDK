// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding,  Input  , ViewEncapsulation   } from '@angular/core';



// rxjs
import { Subject } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';

// wml-components
import { WMLConstructorDecorator, generateClassPrefix } from '@windmillcode/wml-components-base';


// misc



@Component({
  selector: 'wml-carousel-one-control-example',
  templateUrl: './wml-carousel-one-control-example.component.html',
  styleUrls: ['./wml-carousel-one-control-example.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,

  encapsulation:ViewEncapsulation.None


})
export class WMLCarouselOneControlExampleComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }

  classPrefix = generateClassPrefix('WMLCarouselOneControlExample')


  @Input('props') props: WMLCarouselOneControlExampleProps = new WMLCarouselOneControlExampleProps()


  @HostBinding('class') myClass: string = this.classPrefix(`View`);


  @HostBinding('attr.id') myId?:string

  ngUnsub= new Subject<void>()


  listenForUpdate = ()=>{
    return this.props.setStateSubj
    .pipe(
      takeUntil(this.ngUnsub),
      tap((res?)=>{
        this.props = new WMLCarouselOneControlExampleProps({
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
export class WMLCarouselOneControlExampleProps {
  constructor(props:Partial<WMLCarouselOneControlExampleProps>={}){ }

  id = ""

  setStateSubj = new Subject<WMLCarouselOneControlExampleProps>()
  setState = (value)=>{
    this.setStateSubj.next(value)
  }

  value:any =0
}


