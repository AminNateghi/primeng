import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload.component';
import { FileUploadModule } from 'primeng/fileupload';
import { CardModule } from 'primeng/card';
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
  ]
})
export class UploadModule { }
