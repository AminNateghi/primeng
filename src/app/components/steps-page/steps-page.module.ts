import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './steps.route';
import { StepModule } from './steps/steps.module';
import { StoreModule } from '@ngrx/store';
import { profileReducer } from 'src/app/shared/store/profile.reducer';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    StoreModule.forFeature('profile', profileReducer),
    CommonModule,
    HttpClientModule,
    StepModule,
  ],
})
export class StepsPageModule { }
