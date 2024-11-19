import {} from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";
import { TranslateModule, TranslatePipe } from "@ngx-translate/core";
import { wmlTestUtils } from "./test-utils";
import { Component, NO_ERRORS_SCHEMA } from "@angular/core";


@Component({
    selector: "example",
    template: ``,
    standalone: false
})
export class ExampleCpnt {
}


export let mockDeclarations:any[] = [
  // ExampleCpnt, modify and extend as needed

]
export let resetDeclarations = ()=>{
  wmlTestUtils.mockDeclarations= mockDeclarations
}
resetDeclarations()
