import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummeryComponent } from './summery.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PipeModule } from 'src/app/pipe.module';

@NgModule({
  declarations: [
    SummeryComponent,
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    PipeModule
  ],
  exports: [
    SummeryComponent
  ],
})
export class SummeryModule { }
