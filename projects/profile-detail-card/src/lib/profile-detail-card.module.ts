import { NgModule } from '@angular/core';
import { ProfileDetailCardComponent } from './profile-detail-card.component';

// material
import { MatCardModule } from '@angular/material/card';

let materialModules = [
  MatCardModule,
]


@NgModule({
  declarations: [
    ProfileDetailCardComponent
  ],
  imports: [
    ...materialModules
  ],
  exports: [
    ProfileDetailCardComponent
  ]
})
export class ProfileDetailCardModule { }
