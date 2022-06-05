import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Avatar } from 'src/app/shared/models/profile.model';
import { MessagingService } from 'src/app/shared/services/message.service';
import { AddAvatarAction } from 'src/app/shared/store/profile.action';
import { getProfile } from 'src/app/shared/store/profile.selector';

@Component({
  selector: 'app-page-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  imageBase64: any;
  selectedFile: any;

  avatar?: string;
  fileName?: string;

  constructor(
    private router: Router,
    private store: Store<Avatar>,
    private messagingService: MessagingService,
  ) { }

  ngOnInit() {
    this.messagingService.stepsIndex.next(0);

    this.store.select(getProfile).subscribe(result => {
      this.avatar = result.image?.image;
      this.fileName = result?.image?.fileName;
    });
  }

  onUpload(event: any) {
    const file = this.selectedFile = event.files[0];
    const fileName = event.currentFiles[0].name;
    const reader = new FileReader();
    reader.onloadend = () => {
      this.imageBase64 = reader.result;
      this.store.dispatch(AddAvatarAction({ avatar: { image: this.imageBase64, fileName } }));
    }
    reader.readAsDataURL(file);
  }

  nextPage() {
    this.router.navigate(['steps/info']);
  }
}
