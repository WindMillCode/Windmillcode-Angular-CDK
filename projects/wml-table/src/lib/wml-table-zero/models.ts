import { WMLAPIPaginationRequestModel, WMLAPIPaginationResponseModel } from "@windmillcode/angular-wml-components-base";
import { WMLTableZeroItemProps } from "./wml-table-zero-item/wml-table-zero-item.component";

export class WMLTableZeroTablePredicateReturnValue {
  constructor(props:Partial<WMLTableZeroTablePredicateReturnValue>={}){
    Object.assign(
      this,
      {
        ...props
      }
    )
  }
  req!: WMLAPIPaginationRequestModel;
  res!: WMLAPIPaginationResponseModel<WMLTableZeroItemProps>;

}



