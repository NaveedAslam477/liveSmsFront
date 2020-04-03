import { Component, OnInit, TemplateRef } from '@angular/core';
import { ClientService } from '../../service/client.service';

import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientModel } from '../addclient/client.model';
import { NbToastrService } from '@nebular/theme';
import { environment } from '../../../../environments/environment';


@Component({
  selector: 'allclient',
  templateUrl: './allclient.component.html',
  styleUrls: ['./allclient.component.scss']
})
export class AllclientComponent implements OnInit {
  loadingIndicator: boolean = true;
  totalPage: number;
  columns: any[] = [];
  dataList: [] = [];
  page: number=10;
  client: ClientModel | any;
  search: string;
  index: number;
  order: string;
  direction: string;
  roleTemplate: any;


  ngOnInit() {
    this.columns = [
      { prop: 'username', name: 'Name' },
       { prop: 'company', name: 'User Name' },
      { prop: 'username', name: 'Created' },
      { prop: 'username', name: 'Created By' },
      // { prop: 'city', name: 'Api Access' },
      { prop: 'state', name: 'Status'},
    ];
    this.loadData();
  }

  loadData() {
    // this.dataList;
    const data = this.service.getData().subscribe(res=>{
      this.dataList = res;
      console.log(this.dataList);
      console.log(res);
    });
   }

  changePage(pageInfo) {
    // this.loadData(pageInfo.offset + 1);
  }

  onSort(sort) {
    this.order = sort.sorts[0].prop;
    this.direction = sort.sorts[0].dir;
    // this.loadData();
  }

  constructor(public http: HttpClient,
    private service: ClientService, public router:Router, private route: ActivatedRoute,private toastrService: NbToastrService,) {
   
  }
  showToast(position, status,message) {
    this.index += 1;
    this.toastrService.show(
      status || 'Success',
      message,
      { position, status });
  }

  onEdit(row) {
    console.log("row",row);
    this.router.navigate(['pages/client/editclient/' + row._id]);
  }
  onDelete(row) {
    console.log("row",row);
    debugger
    this.http.delete(environment.backendUrl+"/Client/delete/"+  row._id).subscribe((res:any)=>{
      
      debugger
      this.router.navigate(["pages/client/allclient/"]);
      this.showToast('top-right', 'success','Deleted successfully');
    }, (err) => {
      this.showToast('top-right', 'danger', err.message);
     console.log ('Oooops!',err);

      })
  }
}
