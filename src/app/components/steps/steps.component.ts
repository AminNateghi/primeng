import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/shared/services/message.service';

@Component({
  selector: 'app-page-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.messageService.pageHeaderState.next({ title: 'Steps', subTitle: 'How to use steps in PrimeNg' });
  }

}
