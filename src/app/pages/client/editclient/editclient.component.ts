import {
  Component,
  OnInit,
  HostBinding,
  Input,
  ViewChild
} from "@angular/core";
import { TemplateRef } from "@angular/core";
import { ClientModel } from "../addclient/client.model";
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import { NbToastrService, NbDialogService } from "@nebular/theme";
import { ProfileComponent } from "../profile/profile.component";
import { UpdatelimitComponent } from "../updatelimit/updatelimit.component";
import { SendsmsComponent } from "../sendsms/sendsms.component";
import { environment } from "../../../../environments/environment";
import { ngxLoadingAnimationTypes, NgxLoadingComponent } from "ngx-loading";

@Component({
  selector: "editclient",
  templateUrl: "./editclient.component.html",
  styleUrls: ["./editclient.component.scss"]
})
export class EditclientComponent implements OnInit {
  imageSrc = "";
  @ViewChild("ngxLoading", { static: false })
  ngxLoadingComponent: NgxLoadingComponent;
  // @ViewChild('customLoadingTemplate', { static: false }) customLoadingTemplate: TemplateRef<any>;
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  public loading = true;
  public primaryColour = "#ffffff";
  public secondaryColour = "grey";
  public coloursEnabled = false;
  public loadingTemplate: TemplateRef<any>;
  public config = {
    animationType: ngxLoadingAnimationTypes.none,
    primaryColour: this.primaryColour,
    secondaryColour: this.secondaryColour,
    tertiaryColour: this.primaryColour,
    backdropBorderRadius: "3px"
  };
  isLoading: boolean = false;
  // names: string[] = [];
  @HostBinding("class")
  classes = "example-items-rows";
  @Input() inputData: any;
  data: any;
  message: string;
  client: ClientModel | any;
  index: number;
  userPictureOnly: boolean = false;
  user: any;
  loadingIndicator: boolean = false;
  totalPage: number;
  columns: any[] = [];
  dataList: [] = [];
  page: number = 10;
  search: string;
  order: string;
  direction: string;
  roleTemplate: any;
  url: string = environment.backendUrl;
  userNick: any;
  image: any;
  fileData: any;
  constructor(
    public http: HttpClient,
    private router: Router,
    private toastrService: NbToastrService,
    private dialogService: NbDialogService,
    private route: ActivatedRoute
  ) {
    this.client = new ClientModel();
  }

  showToast(position, status, message) {
    this.index += 1;
    this.toastrService.show(status || "Success", message, { position, status });
  }
  // on off loader
  toggleLoader(value?) {
    console.log("loader", value);
    this.isLoading = !this.isLoading;
  }
  ngOnInit() {
    this.toggleLoader();
    this.http
      .get(
        environment.backendUrl +
          "/Client/getByUserId/" +
          this.route.snapshot.params.id
      )
      .subscribe((res: any) => {
        this.toggleLoader();
        // res[0].image= this.url+res[0].image;
        this.client = res[0];
        console.log("get by id", res);
      });
    if (this.client) {
    } else {
      this.client = new ClientModel();
    }
    this.columns = [
      { prop: "username", name: "Name" },
      { prop: "company", name: "User Name" },
      { prop: "username", name: "Created" },
      { prop: "username", name: "Created By" },
      { prop: "city", name: "Api Access" },
      { prop: "state", name: "Status" }
    ];
    this.loadData();
  }

  loadData() {
    this.dataList;
  }

  changePage(pageInfo) {
    // this.loadData(pageInfo.offset + 1);
  }

  onSort(sort) {
    this.order = sort.sorts[0].prop;
    this.direction = sort.sorts[0].dir;
    // this.loadData();
  }

  onupdate(navigate = true) {
    this.toggleLoader();
    this.http
      .put(
        environment.backendUrl +
          "/Client/update/" +
          this.route.snapshot.params.id,
        this.client
      )
      .subscribe(
        (res: any) => {
          this.toggleLoader();
          this.fileData=null;
          console.log("navigatess", navigate);
          if (navigate) {
            this.router.navigate(["pages/client/allclient/"]);
          }

          this.showToast("top-right", "success", "Updated successfully");
        },
        err => {
          this.toggleLoader();
          this.showToast("top-right", "danger", err.message);
          console.log("Oooops!", err);
        }
      );
  }
  changeProfile = () => {
    this.dialogService
      .open(ProfileComponent)

      .onClose.subscribe(fileurl => {
        console.log("model close", fileurl);
        this.client.image = fileurl;
      });
  };
  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog).onClose.subscribe(fileurl => {
      if(this.fileData){
        this.client.image = this.fileData;
        this.onupdate(false);
      }

    });
  }
  uploadImage($event) {
    setTimeout(() => {
      this.toggleLoader();
    }, 1000);

    this.fileData = $event;
    console.log(this.fileData);
  }

  updatelimit(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog).onClose.subscribe(fileurl => {
      // if(this.fileData){
      //   this.client.image = this.fileData;
      //   this.onupdate(false);
      // }

    });
  }

  // onChangeLimit(newLimit){
  //   debugger
  //   this.client.sms_limit=newLimit;
  //   console.log("on change limit", newLimit);
  //   this.onupdate(false);
  // }
  updateLimit(dialog:TemplateRef<any>) {
    this.dialogService.open(UpdatelimitComponent).onClose.subscribe(newSmsLimit => {
          console.log("sms update",newSmsLimit)
          if(newSmsLimit){
            this.client.sms_limit = newSmsLimit;
            this.onupdate(false);
          }
          })
  }
  // closeSms(dialog: TemplateRef<any>){

  // }
  sendsms = (dialog: TemplateRef<any>) => {
    this.dialogService.open(SendsmsComponent).onClose.subscribe(data => {
      console.log("sms update",data)
      if(data){
        // yahan jo properties update karni hn this.client me rakh k update kr do
        debugger
this.client.sms_gateway=data.smsGateway;
        // other properties as well jo bhi isky ilawa properties yahan a ri wo model me ni thi is lye khud kar wa lena jo property karni ho
        this.onupdate(false);
      }

    });
  }
}
