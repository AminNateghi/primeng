import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { InfoStatus, Profile, Status } from 'src/app/shared/models/profile.model';
import { MessagingService } from 'src/app/shared/services/message.service';
import { getProfile } from 'src/app/shared/store/profile.selector';

@Component({
  selector: 'app-page-summery',
  templateUrl: './summery.component.html',
  styleUrls: ['./summery.component.scss']
})
export class SummeryComponent implements OnInit {

  profile: Profile | undefined;
  status = InfoStatus;

  constructor(
    private router: Router,
    private store: Store<Profile>,
    private messageService: MessageService,
    private messagingService: MessagingService,
  ) { }

  ngOnInit() {
    this.messagingService.stepsIndex.next(3);

    this.store.select(getProfile).subscribe(result => {
      this.profile = result;
    });
  }

  getStatusName(status: InfoStatus): string {
    return Status.find(s => s.id == status)?.name.toLocaleUpperCase() + '';
  }

  nextPage() {
    if (this.profile?.image && this.profile?.info && this.profile?.user) {
      this.messageService.add({ severity: 'success', detail: 'Saved successfully.' });
    } else {
      this.messageService.add({ severity: 'warn', detail: 'Please fill all steps fields!' });
    }
  }

  prevPage() {
    this.router.navigate(['steps/users']);
  }
}
