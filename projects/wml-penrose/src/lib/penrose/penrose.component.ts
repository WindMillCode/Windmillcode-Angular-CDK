// angular
import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef, ViewContainerRef } from '@angular/core';

// rxjs
import { Subject } from 'rxjs';
import { tap,takeUntil } from 'rxjs/operators';


@Component({
  selector: 'penrose',
  templateUrl: './penrose.component.html',
  styleUrls: ['./penrose.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PenroseComponent implements OnInit {

  @Input() isPresentSubj: Subject<any> = new Subject();
  constructor(
    private ref: ChangeDetectorRef,
    private vcf: ViewContainerRef,
  ) { }
  ngUnsub= new Subject<void>()

  ngOnInit(): void {

    let { isPresentSubj, penrose } = this;

    // toggle loading display
    isPresentSubj
      .pipe(
        takeUntil(this.ngUnsub),
        tap(() => {
          penrose.style.display = penrose.style.display === 'none' ? 'block' : 'none';
        })
      )
      .subscribe()
    //
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

  penrose: any = {
    style: {}
  }
}
