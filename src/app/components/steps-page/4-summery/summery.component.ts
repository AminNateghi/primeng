import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessagingService } from 'src/app/shared/services/message.service';

@Component({
  selector: 'app-page-summery',
  templateUrl: './summery.component.html',
  styleUrls: ['./summery.component.scss']
})
export class SummeryComponent implements OnInit {


  constructor(
    private router: Router,
    private messagingService: MessagingService,
  ) { }

  ngOnInit() {
    this.messagingService.stepsIndex.next(3);
  }


  nextPage() {
    // call web api
  }

  prevPage() {
    this.router.navigate(['steps/users']);
  }
}
