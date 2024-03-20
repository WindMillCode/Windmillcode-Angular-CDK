import { WMLAPIPaginationRequestModel, WMLAPIPaginationResponseModel } from "@windmillcode/angular-wml-components-base";
import { WmlTableZeroItemParams } from "./wml-table-zero-item/wml-table-zero-item.component";

export class WMLTableZeroTablePredicateReturnValue {
  constructor(params:Partial<WMLTableZeroTablePredicateReturnValue>={}){
    Object.assign(
      this,
      {
        ...params
      }
    )
  }
  req!: WMLAPIPaginationRequestModel;
  res!: WMLAPIPaginationResponseModel<WmlTableZeroItemParams>;

}



