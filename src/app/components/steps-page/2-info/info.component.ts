import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { Info, Profile, Status } from 'src/app/shared/models/profile.model';
import { MessagingService } from 'src/app/shared/services/message.service';
import { AddInfoAction } from 'src/app/shared/store/profile.action';
import { getProfile } from 'src/app/shared/store/profile.selector';

@Component({
  selector: 'app-page-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  profile: Profile | undefined;
  form!: FormGroup;
  submitted: boolean = false;
  minDate!: Date;
  maxDate!: Date;
  status!: any[];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private store: Store<Info>,
    private messagingService: MessagingService
  ) { }

  ngOnInit() {
    this.messagingService.stepsIndex.next(1);

    this.initForm();
    this.fillData();
  }

  initForm() {
    this.form = this.formBuilder.group({
      amount: new FormControl(),
      date: new FormControl(),
      status: new FormControl(),
      fund: new FormControl(),
    });

    // for date-picker
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate() + 1)
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate() + 5);

    // for status drop-down
    this.status = Status;
  }

  fillData() {
    this.store.select(getProfile).subscribe(result => {
      this.profile = result;

      this.form.patchValue({
        amount: this.profile.info?.amount,
        date: this.profile.info?.date,
        status: this.profile.info?.status,
        fund: this.profile.info?.fund,
      });
    });
  }

  nextPage() {
    if (this.form.valid) {
      this.store.dispatch(AddInfoAction({ info: this.form.value }));
      this.router.navigate(['steps/users']);
    } else {
      this.messageService.add({ severity: 'warn', detail: 'Please enter all fields.' });
    }
  }

  prevPage() {
    this.router.navigate(['steps/upload']);
  }
}
