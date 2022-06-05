import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/shared/models/user.model';
import { AccountService } from 'src/app/shared/services/account.service';
import { MessagingService } from 'src/app/shared/services/message.service';
import { AddUserAction } from 'src/app/shared/store/profile.action';

@Component({
  selector: 'app-page-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  loading = false;
  accounts: User[] = [];
  selectedAccount?: User;

  constructor(
    private router: Router,
    private messageService: MessageService,
    private messagingService: MessagingService,
    private accountService: AccountService,
    private store: Store<User>,
  ) { }

  ngOnInit() {
    this.messagingService.stepsIndex.next(2);
    this.initForm();
  }

  initForm() {
    this.loading = true;
    this.accountService.getUsers().subscribe(result => {
      this.accounts = result;
      this.loading = false;
    });
  }

  nextPage() {
    if (this.selectedAccount) {
      this.store.dispatch(AddUserAction({ user: this.selectedAccount }));
      this.router.navigate(['steps/summery']);
    } else {
      this.messageService.add({ severity: 'warn', detail: 'Please select a user.' });
    }
  }

  prevPage() {
    this.router.navigate(['steps/info']);
  }
}
