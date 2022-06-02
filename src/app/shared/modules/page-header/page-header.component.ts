import { Component } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {

  title = 'No Title';
  subTitle = '-';

  constructor(
    private messageService: MessageService
  ) {
    this.messageService.pageHeaderState.subscribe(result => {
      this.title = result.title;
      this.subTitle = result.subTitle;
    });
  }

}
