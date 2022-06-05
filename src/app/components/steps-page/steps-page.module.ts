import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './steps.route';
import { StepModule } from './steps/steps.module';


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    StepModule,
  ],
})
export class StepsPageModule { }
