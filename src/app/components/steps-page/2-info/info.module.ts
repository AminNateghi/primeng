import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info.component';
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
  ]
})
export class InfoModule { }
