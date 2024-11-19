import {} from "@angular/common/http";
import { wmlTestUtils } from "./test-utils";
import { Component } from "@angular/core";


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
