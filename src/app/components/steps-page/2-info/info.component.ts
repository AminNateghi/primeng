import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MessagingService } from 'src/app/shared/services/message.service';
import { ProfileService } from 'src/app/shared/services/profile.service';

@Component({
  selector: 'app-page-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {


  constructor(
    private router: Router,
    private messagingService: MessagingService
  ) { }

  ngOnInit() {
    this.messagingService.stepsIndex.next(1);
  }

  nextPage() {
    this.router.navigate(['steps/users']);
  }

  prevPage() {
    this.router.navigate(['steps/upload']);
  }
}
