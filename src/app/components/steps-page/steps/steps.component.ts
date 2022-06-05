import { AfterContentInit, Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MessagingService } from 'src/app/shared/services/message.service';

@Component({
  selector: 'app-page-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit, AfterContentInit {

  activeIndex = 0;
  steps: MenuItem[] = [];

  constructor(
    private messageService: MessagingService
  ) { }

  ngAfterContentInit(): void {
    this.messageService.stepsIndex.subscribe(result => {
      setTimeout(() => {
        this.activeIndex = result;
      }, 50);
    });
  }

  ngOnInit() {
    this.messageService.pageHeaderState.next({ title: 'Steps', subTitle: 'How to use steps in PrimeNg' });

    this.steps = [
      { label: 'Upload Image' },
      { label: 'Form' },
      { label: 'Select Person' },
      { label: 'Summery' }
    ];

  }

}
