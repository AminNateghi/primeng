import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { routes } from './home.route';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
