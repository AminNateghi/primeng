import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info.component';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    InfoComponent,
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
  ],
  exports: [
    InfoComponent
  ],
  providers: [
    ProfileService
  ]
})
export class InfoModule { }
