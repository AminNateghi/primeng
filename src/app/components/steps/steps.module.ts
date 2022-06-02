import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsComponent } from './steps.component';
import { RouterModule } from '@angular/router';
import { routes } from './steps.route';

@NgModule({
  declarations: [
    StepsComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  exports: [
    StepsComponent
  ]
})
export class StepsModule { }
