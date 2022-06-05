import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsComponent } from './steps.component';
import { StepsModule } from 'primeng/steps';
import { UploadModule } from '../1-upload/upload.module';
import { InfoModule } from '../2-info/info.module';
import { UsersModule } from '../3-users/users.module';
import { SummeryModule } from '../4-summery/summery.module';


@NgModule({
  declarations: [
    StepsComponent,
  ],
  imports: [
    CommonModule,
    StepsModule,
    UploadModule,
    InfoModule,
    UsersModule,
    SummeryModule,
  ],
  exports: [
    StepsComponent
  ]
})
export class StepModule { }
