// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit,  Input  , ViewEncapsulation   } from '@angular/core';



// rxjs
import { Subject } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';

// wml-components
import { WMLConstructorDecorator, generateClassPrefix, generateIdPrefix } from '@windmillcode/wml-components-base';


// misc



@Component({
  selector: 'dummy-zero',
  templateUrl: './dummy-zero.component.html',
  styleUrls: ['./dummy-zero.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  
  encapsulation:ViewEncapsulation.None
  
  
})
export class DummyZeroComponent  {

  constructor(
    public cdref:ChangeDetectorRef,
    
  ) { }

  classPrefix = generateClassPrefix('DummyZero')
  
  
  @Input('props') props: DummyZeroProps = new DummyZeroProps()
  

  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  
  
  @HostBinding('attr.id') myId?:string
  
  ngUnsub= new Subject<void>()

  
  listenForUpdate = ()=>{
    return this.props.setStateSubj
    .pipe(
      takeUntil(this.ngUnsub),
      tap((res?)=>{
        this.props = new DummyZeroProps({
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
export class DummyZeroProps {
  constructor(props:Partial<DummyZeroProps>={}){ }
  
  id = ""
  
  setStateSubj = new Subject<DummyZeroProps>()
  setState = (value)=>{
    this.setStateSubj.next(value)
  }
}


