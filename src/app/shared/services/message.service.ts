import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { PageHeader } from '../models/view-models/page-header.vm';

@Injectable({ providedIn: 'root' })
export class MessagingService {

  pageHeaderState = new Subject<PageHeader>();
  stepsIndex = new Subject<number>();

}
