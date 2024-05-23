import {} from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";
import { TranslateModule, TranslatePipe } from "@ngx-translate/core";
import { wmlTestUtils } from "./test-utils";
import { Component, NO_ERRORS_SCHEMA } from "@angular/core";
import { WmlSampleOptionItemComponent } from "@windmillcode/angular-wml-options";


@Component({
  selector:"wml-sample-option-item",
  template: ``,
})
export class MockWmlSampleOptionItemComponent {
}


export let mockDeclarations:any[] = [
  WmlSampleOptionItemComponent,
]
export let resetDeclarations = ()=>{
  wmlTestUtils.mockDeclarations= mockDeclarations
}
resetDeclarations()
