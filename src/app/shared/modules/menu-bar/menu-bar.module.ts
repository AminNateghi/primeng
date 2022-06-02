import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar.component';
import { PanelMenuModule } from 'primeng/panelmenu';

@NgModule({
  declarations: [
    MenuBarComponent,
  ],
  imports: [
    CommonModule,
    PanelMenuModule,
  ],
  exports: [
    MenuBarComponent
  ]
})
export class MenuBarModule { }
