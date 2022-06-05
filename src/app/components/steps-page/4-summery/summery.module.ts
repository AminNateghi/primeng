import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummeryComponent } from './summery.component';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    SummeryComponent,
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
  ],
  exports: [
    SummeryComponent
  ],
  providers: [
    ProfileService
  ]
})
export class SummeryModule { }
