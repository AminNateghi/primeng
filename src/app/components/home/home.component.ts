import { Component, OnInit } from '@angular/core';
import { MessagingService } from 'src/app/shared/services/message.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private messageService: MessagingService
  ) { }

  ngOnInit() {
    this.messageService.pageHeaderState.next({ title: 'Dashboard', subTitle: 'This app for test PrimeNg component' });
  }

}
