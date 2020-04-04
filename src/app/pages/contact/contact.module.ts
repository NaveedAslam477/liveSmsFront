import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list/contact-list.component';
import { FormsModule } from '@angular/forms';
import { NbInputModule, NbButtonModule, NbSelectModule, NbCardModule, NbToastrModule, NbAlertModule, NbUserModule, NbTabsetModule, NbDialogModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { NbIconModule } from '@nebular/theme';
import { ImportcontactComponent } from './importcontact/importcontact.component';

@NgModule({
  declarations: [ContactListComponent, ViewContactComponent, AddContactComponent, EditContactComponent, ImportcontactComponent],
  imports: [
    CommonModule,
    FormsModule,
    NbInputModule,
    NbButtonModule,
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
    NbIconModule,
    NbDialogModule.forRoot()
  ]
})
export class ContactModule { }
