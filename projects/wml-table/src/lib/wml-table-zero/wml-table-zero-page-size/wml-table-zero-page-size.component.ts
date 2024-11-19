// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding,  Input   } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { WMLFieldZeroProps } from '@windmillcode/angular-wml-field';
import { WMLFormZeroProps, WMLFormFieldsUpdateSubjProps } from '@windmillcode/angular-wml-form';
import { WMLInputZeroAreaProps, WMLInputZeroComponent, WMLInputZeroProps } from '@windmillcode/angular-wml-input';




// rxjs
import { Subject } from 'rxjs';
import { generateClassPrefix, WMLUIProperty } from '@windmillcode/angular-wml-components-base';
import { WMLButtonZeroProps } from '@windmillcode/angular-wml-button';

// misc



@Component({
    selector: 'wml-table-zero-page-size',
    templateUrl: './wml-table-zero-page-size.component.html',
    styleUrls: ['./wml-table-zero-page-size.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class WMLTableZeroPageSizeComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }


  classPrefix = generateClassPrefix('WMLTableZeroPageSize')
  @Input('props') props: WMLTableZeroPageSizeProps = new WMLTableZeroPageSizeProps()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()

  fieldParentForm = new FormGroup({
    // @ts-ignore
    pageSize:new FormControl<number>(null,[Validators.min(0)])
  })
  pageSizeField!:WMLFieldZeroProps
  mainForm =new WMLFormZeroProps({
    fields:[]
  })

  initForm = ()=>{
    this.fieldParentForm.patchValue({
      pageSize:this.props.pageSize
    })
    this.pageSizeField = new WMLFieldZeroProps({
      type: "custom",
      custom: {
        selfType:  "standalone",
        fieldParentForm:this.fieldParentForm,
        fieldFormControlName:"pageSize",
        labelValue:"",
        errorMsgs:{
          min:"The value cannot be less than zero"
        },
        fieldCustomCpnt:WMLInputZeroComponent,
        fieldCustomProps: new WMLInputZeroProps({
          input:new WMLInputZeroAreaProps({
            style:{
              textAlign:"center",
              fontSize:"calc(48/16 * 1rem)",
            }
          }),
          wmlField:this.pageSizeField
        })
      }
    })
    this.pageSizeField.deleteRequiredLabelPart()
    this.mainForm.fieldsUpdateSubj.next(new WMLFormFieldsUpdateSubjProps({
      fields:[this.pageSizeField]
    }))
  }


  submitBtnClick = ()=>{
    if(this.fieldParentForm.valid){
      let pageSize = this.fieldParentForm.controls.pageSize.value
      this.props.updatePageSizeSubj.next(pageSize)
    }
  }
  submitBtn = new WMLButtonZeroProps({
    text:new WMLUIProperty({
      text:"Submit",
      style:{

      }
    }),
    button:new WMLUIProperty({
      click:this.submitBtnClick
    })
  })




  ngOnInit(): void {
    this.initForm()
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}



export class WMLTableZeroPageSizeProps {
  constructor(props:Partial<WMLTableZeroPageSizeProps>={}){
    Object.assign(
      this,
      {
        ...props
      }
    )
  }
  title ="Enter Page Size"
  pageSize!:number
  updatePageSizeSubj!:Subject<WMLTableZeroPageSizeProps["pageSize"]>
}


