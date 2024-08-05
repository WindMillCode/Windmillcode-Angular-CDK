import {} from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";
import { TranslateModule } from "@ngx-translate/core";
import { wmlTestUtils } from "./test-utils";

export let mockImports:any[] = [
  RouterTestingModule,
  TranslateModule,
  HttpClientModule,
]
export let resetImports = ()=>{
  wmlTestUtils.mockImports= mockImports
}
resetImports()
