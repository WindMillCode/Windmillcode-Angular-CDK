import { Component, Input, OnInit } from '@angular/core';
import { WMLImage } from '@windmillcode/angular-wml-components-base';


export class WMLProfileDetailItem extends WMLImage {
  constructor(params:Partial<WMLProfileDetailItem>={}){
    super(params);
    Object.assign(
      this,
      {
        ...params
      }
    )
  }
  title:string = "My Title"
  subtitle = "My Subtitle"

}
@Component({
  selector: 'wml-profile-detail-card',
  templateUrl:'./profile-detail-card.html',
  styleUrls:['./profile-detail-card.scss']
})
export class ProfileDetailCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('item') item!:WMLProfileDetailItem
  @Input('index') index!:number;

}

