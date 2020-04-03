import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
fileData:any;
  constructor(public ref: NbDialogRef<ProfileComponent>) { }

  ngOnInit() {
  }
  uploadImage($event){
    debugger
this.fileData =$event;
console.log(this.fileData);
  }
  submit() {
    console.log('filedata',this.fileData)
    this.ref.close(this.fileData.filePath);

    }
}
