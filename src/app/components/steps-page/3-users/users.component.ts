import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessagingService } from 'src/app/shared/services/message.service';

@Component({
  selector: 'app-page-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


  constructor(
    private router: Router,
    private messagingService: MessagingService
  ) { }

  ngOnInit() {
    this.messagingService.stepsIndex.next(2);
  }

  nextPage() {
    this.router.navigate(['steps/summery']);
  }

  prevPage() {
    this.router.navigate(['steps/info']);
  }
}
