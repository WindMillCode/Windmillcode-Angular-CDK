// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding,  Input   } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';
import { generateClassPrefix } from '@windmillcode/wml-components-base';
import { WMLFieldZeroProps } from '@windmillcode/angular-wml-field';
import {  WMLFormFieldsUpdateSubjProps, WMLFormZeroProps } from '@windmillcode/angular-wml-form';
import { WMLOptionZeroItemProps, WMLOptionsZeroProps, WMLOptionsZeroComponent } from '@windmillcode/angular-wml-options';




// rxjs
import { Subject } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';

// misc



@Component({

  selector: 'wml-table-zero-select-page',
  templateUrl: './wml-table-zero-select-page.component.html',
  styleUrls: ['./wml-table-zero-select-page.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush



})
export class WMLTableZeroSelectPageComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }


  classPrefix = generateClassPrefix('WMLTableZeroSelectPage')
  @Input('props') props: WMLTableZeroSelectPageProps = new WMLTableZeroSelectPageProps()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()
  fieldParentForm = new FormGroup({
    pages:new FormArray<AbstractControl<WMLOptionZeroItemProps>>([])
  })
  selectPageField!:WMLFieldZeroProps
  mainForm =new WMLFormZeroProps({
    fields:[]
  })

  initForm = ()=>{
    this.selectPageField = new WMLFieldZeroProps({
      type: "custom",
      custom: {

        selfType:  "standalone",
        fieldParentForm:this.fieldParentForm,
        fieldFormControlName:"pages",
        labelValue:"",

        fieldCustomCpnt:WMLOptionsZeroComponent,
        fieldCustomProps: new WMLOptionsZeroProps({
          limit:1,
          options:Array(this.props.pages)
          .fill(null)
          .map((nullVal,index0)=>{
            return new WMLOptionZeroItemProps({
              text:(index0 +1).toString() ,
              value:index0,
            })
          })
          ,
          formArray:this.fieldParentForm.controls.pages
        })
      }
    })
    this.selectPageField.deleteRequiredLabelPart()
    this.mainForm.fieldsUpdateSubj.next(new WMLFormFieldsUpdateSubjProps({
      fields:[this.selectPageField]
    }))
  }
  listenForSelectedChanges = ()=>{
    return this.fieldParentForm.controls.pages.valueChanges
    .pipe(
      takeUntil(this.ngUnsub),
      tap((res)=>{
        this.props.updatePageNumberSubj.next(res[0].value)
      })
    )

  }


  ngOnInit(): void {
    this.initForm()
    this.listenForSelectedChanges().subscribe()
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}



export class WMLTableZeroSelectPageProps {
  constructor(props:Partial<WMLTableZeroSelectPageProps>={}){
    Object.assign(
      this,
      {
        ...props
      }
    )
  }
  title = "Select Page"
  pages!:number
  updatePageNumberSubj=new Subject<number>()
}


