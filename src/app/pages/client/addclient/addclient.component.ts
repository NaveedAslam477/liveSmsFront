import { Component, OnInit, HostBinding, Input, ViewChild, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientModel } from "./client.model";
import { NbToastrService } from '@nebular/theme';
import { environment } from '../../../../environments/environment';
import { ngxLoadingAnimationTypes, NgxLoadingComponent } from "ngx-loading";

@Component({
  selector: 'addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.scss']
})
export class AddclientComponent implements OnInit {
  client: ClientModel;
  index: number;
   @ViewChild("ngxLoading", { static: false })
  ngxLoadingComponent: NgxLoadingComponent;
  // @ViewChild('customLoadingTemplate', { static: false }) customLoadingTemplate: TemplateRef<any>;
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  public loading = true;
  public primaryColour = "#ffffff";
  public secondaryColour = "grey";
  public coloursEnabled = false;
  public loadingTemplate: TemplateRef<any>;
   isLoading: boolean = false;




  constructor(public http: HttpClient,
    private router: Router,
    private toastrService: NbToastrService,
    private route: ActivatedRoute) {
      this.client=new ClientModel()
    }
   showToast(position, status,message) {
      this.index += 1;
      this.toastrService.show(
        status || 'Success',
        message,
        { position, status });
    }

  ngOnInit() {
  }
  allclient()
{
  this.toggleLoader();
  this.http.post(environment.backendUrl+'/Client/create', this.client)

      .subscribe(response => {
        this.toggleLoader();
        this.router.navigate(["pages/client/allclient/"]);
        this.showToast('top-right', 'success','added successfully');
        console.log(response);
      }, (err) => {
        this.showToast('top-right', 'danger', err.message);
       console.log ('Oooops!',err);
      });
  }
  uploadImage(mediaFile:any) {
    this.toggleLoader();
    this.client.image = mediaFile;
    }
  toggleLoader(value?) {
    console.log("loader", value);
    this.isLoading = !this.isLoading;
  }

}
