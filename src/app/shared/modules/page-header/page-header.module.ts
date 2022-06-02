import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header.component';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  declarations: [
    PageHeaderComponent,
  ],
  imports: [
    CommonModule,
    ToolbarModule,
  ],
  exports: [
    PageHeaderComponent
  ]
})
export class PageHeaderModule { }
