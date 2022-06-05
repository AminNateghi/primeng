import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessagingService } from 'src/app/shared/services/message.service';
import { ProfileService } from 'src/app/shared/services/profile.service';

@Component({
  selector: 'app-page-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  imageBase64: any;
  selectedFile: any;

  constructor(
    private router: Router,
    private messagingService: MessagingService,
  ) { }

  ngOnInit() {
    this.messagingService.stepsIndex.next(0);
  }

  onUpload(event: any) {
    const file = this.selectedFile = event.files[0];
    var reader = new FileReader();
    reader.onloadend = () => {
      console.log(reader.result);
      this.imageBase64 = reader.result;
      // this.profileService.addAvatar(this.imageBase64);
    }
    reader.readAsDataURL(file);
  }

  nextPage() {
    this.router.navigate(['steps/info']);
  }
}
