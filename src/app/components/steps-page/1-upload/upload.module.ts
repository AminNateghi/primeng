import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload.component';
import { FileUploadModule } from 'primeng/fileupload';
import { CardModule } from 'primeng/card';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    UploadComponent,
  ],
  imports: [
    CommonModule,
    FileUploadModule,
    CardModule,
    ButtonModule
  ],
  exports: [
    UploadComponent
  ],
  providers: [
    ProfileService
  ]
})
export class UploadModule { }
