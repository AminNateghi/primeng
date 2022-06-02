import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { RouterModule } from '@angular/router';
import { MenuBarModule } from '../modules/menu-bar/menu-bar.module';
import { PageHeaderModule } from '../modules/page-header/page-header.module';

@NgModule({
  declarations: [
    MainLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MenuBarModule,
    PageHeaderModule,
  ],
  exports: [
    MainLayoutComponent
  ]
})
export class MainLayoutModule { }
