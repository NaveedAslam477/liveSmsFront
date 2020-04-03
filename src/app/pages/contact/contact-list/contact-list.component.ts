import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService, NbDialogService } from '@nebular/theme';
import { HttpClient } from '@angular/common/http';
import { ContactModel } from '../contact.model';
import { ContactService } from '../../service/contact.service';
import { EditContactComponent } from '../edit-contact/edit-contact.component';
import { environment } from '../../../../environments/environment';



@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  loadingIndicator: boolean = false;
  contactList:any[] = [];
  columns: any[] = [];
  index: number;
  order: string;
  direction: string;
  contact:ContactModel;
  Contact: ContactModel | any;
  roleTemplate: any;

  constructor(public http: HttpClient,
    private service: ContactService , private router: Router,
    private toastrService: NbToastrService,private dialogService: NbDialogService,
    private route: ActivatedRoute) {
      this.contact= new ContactModel()
      

  }
  showToast(position, status,message) {
    this.index += 1;
    this.toastrService.show(
      status || 'Success',
      message,
      { position, status });
  }
  ngOnInit() {
    this.columns=[
       { prop:'last_name', name: 'LIST NAME' },
    ];
    this.loadData();

  }

  loadData() {
  this.service.getContact().subscribe(res=>{
      this.contactList = res;
      console.log(this.contactList);
      console.log(res);
    });

   }

  changePage(pageInfo) {
  }

  onSort(sort) {
    this.order = sort.sorts[0].prop;
    this.direction = sort.sorts[0].dir;
  }
  addContactGroup(){
    debugger
    this.http.post(environment.backendUrl+'/Contact/add', this.contact)
        .subscribe((response:any) => { 
          // this.contactList.push(response);
          this.loadData();
          this.showToast('top-right', 'success','added successfully');
          console.log('add response',response);
        }, (err) => {
          this.showToast('top-right', 'danger', err.message);
         console.log ('Oooops!',err);
        });
       
  }
  onview(row){
    console.log("row",row);
    this.router.navigate(['pages/contact/view-contact']);
  }
  onAdd(){
    this.router.navigate(['pages/contact/add-contact/']);
  }
  onEdit(row){
    console.log("row",row);
    // this.dialogService.open([`pages/contact/edit-contact:id/${row._id}`]);
    // this.router.navigate(['pages/contact/edit-contact:id/'+row._id]);
    this.router.navigate(['pages/contact/edit-contact']);
  }
  onDelete(row){
    console.log("row",row);
    debugger
    this.http.delete(environment.backendUrl+"/Contact/delete/"+  row._id).subscribe((res:any)=>{
      this.loadData();
      debugger
      this.showToast('top-right', 'success','Deleted successfully');
    }, (err) => {
      this.showToast('top-right', 'danger', err.message);
     console.log ('Oooops!',err);

      })
  
  }
}
