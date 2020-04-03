import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
@Output() onFileUpload:EventEmitter<any>=new EventEmitter();
@Output() onLoading:EventEmitter<any>=new EventEmitter();
  constructor(public http:HttpClient) { }

  ngOnInit() {
  }
  uploadImage = (mediaFiles:any) => {

   console.log("call")
        let formData: FormData = new FormData();
        formData.append("file", mediaFiles.target.files[0]);

        let uploadFilePath = environment.backendUrl + '/file';
        this.onLoading.emit("true from file uploader");
        this.http.post(uploadFilePath, formData).subscribe((res:any)=>{
          console.log("success",res);
          this.onFileUpload.emit(res.filePath);
          return res;
        },err=>{
          console.log("err",err)
          return err
        })
  }
}
