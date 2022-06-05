import { Routes } from '@angular/router';
import { InfoComponent } from './2-info/info.component';
import { StepsComponent } from './steps/steps.component';
import { SummeryComponent } from './4-summery/summery.component';
import { UploadComponent } from './1-upload/upload.component';
import { UsersComponent } from './3-users/users.component';

export const routes: Routes = [
  {
    path: '',
    component: StepsComponent,
    children: [
      {
        path: '',
        redirectTo: 'upload',
        pathMatch: 'full'
      },
      {
        path: 'upload',
        component: UploadComponent
      },
      {
        path: 'info',
        component: InfoComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'summery',
        component: SummeryComponent
      }
    ]
  }
];
