import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AllclientComponent } from "./allclient/allclient.component";
import { FormsModule } from "@angular/forms";
import {
  NbInputModule,
  NbButtonModule,
  NbSelectModule,
  NbCardModule,
  NbToastrModule,
  NbAlertModule,
  NbDialogModule,
  NbTabsetModule,
  NbUserModule
} from "@nebular/theme";
import { AddclientComponent } from "./addclient/addclient.component";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { config } from "process";
import { EditclientComponent } from "./editclient/editclient.component";
import { ProfileComponent } from "./profile/profile.component";
import { UpdatelimitComponent } from "./updatelimit/updatelimit.component";
import { SendsmsComponent } from "./sendsms/sendsms.component";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { FileUploadComponent } from "./file-upload/file-upload.component";
import { NgxLoadingModule } from "ngx-loading";

@NgModule({
  declarations: [
    AllclientComponent,
    AddclientComponent,
    EditclientComponent,
    ProfileComponent,
    UpdatelimitComponent,
    SendsmsComponent,
    FileUploadComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NbInputModule,
    NbButtonModule,
    NgxLoadingModule.forRoot({}),
    NbSelectModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbToastrModule,
    NbAlertModule,
    NbUserModule,
    NbTabsetModule,
    MatTableModule,
    MatPaginatorModule,
    NgxDatatableModule,
    MatButtonModule,
    MatButtonToggleModule,
    NbDialogModule.forRoot()
  ]
})
export class ClientModule {}
