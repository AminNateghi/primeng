import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { RouterModule } from '@angular/router';
import { MenuBarModule } from '../modules/menu-bar/menu-bar.module';

@NgModule({
  declarations: [
    MainLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MenuBarModule
  ],
  exports: [
    MainLayoutComponent
  ]
})
export class MainLayoutModule { }
