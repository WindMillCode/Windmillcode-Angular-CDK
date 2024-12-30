// still a need for this file as of angular 19.0.5 but not a need to import

import { Injectable, Pipe } from "@angular/core";
import { TranslatePipe } from "@ngx-translate/core";

@Injectable()
@Pipe({
  standalone: true,
  name: 'translate',
  pure: false // required to update the value when the promise is resolved
})
export class WMLNGXTranslatePipe extends TranslatePipe  {

}

@Injectable()
@Pipe({
  standalone: true,
  name: 'translate',
  pure: false // required to update the value when the promise is resolved
})
export class WMLNGXTranslateMockPipe   {
  transform =(myStr)=> {
    return myStr
  }
}
