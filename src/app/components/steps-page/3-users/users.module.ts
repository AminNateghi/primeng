import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    UsersComponent,
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
  ],
  exports: [
    UsersComponent
  ],
  providers: [
    ProfileService
  ]
})
export class UsersModule { }
