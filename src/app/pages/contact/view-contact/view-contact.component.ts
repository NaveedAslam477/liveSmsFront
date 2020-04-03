import { Component, OnInit } from '@angular/core';
import { ContactModel } from '../contact.model';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.scss']
})
export class ViewContactComponent implements OnInit {

  loadingIndicator: boolean = false;
  totalPage: number;
  columns: any[] = [];
  dataList: [] = [];
  page: number=10;
  contact:ContactModel;
  search: string;
  index: number;
  order: string;
  direction: string;
  roleTemplate: any;
res:any;
  constructor(public http: HttpClient,
    private router: Router,
    private toastrService: NbToastrService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    debugger
    this.http.get("http://localhost:3000/Contact/getByUserId/"+this.route.snapshot.params.id).subscribe((res:any)=>{
      this.contact=res[0];
        console.log("get contact by id",res)
      })
      debugger
      
          if(this.contact){
          }else{
            this.contact=new ContactModel()
          }
    this.columns = [
      { prop: 'phone_number', name: 'PHONE NUMBER' },
       { prop: 'last_name', name: 'Name' },
      { prop: 'phone_number', name: 'EMAIL' },
      { prop: 'user_name', name: 'USER NAME' },
      { prop: 'company', name: 'COMPANY' },
    ];
     this.loadData();
  }

  loadData() {
    this.dataList;
   }

  changePage(pageInfo) {
  }

  onSort(sort) {
    this.order = sort.sorts[0].prop;
    this.direction = sort.sorts[0].dir;
  }
  
}
