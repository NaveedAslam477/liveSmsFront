import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactService } from '../../service/contact.service';
import { HttpClient } from '@angular/common/http';
import { ContactModel } from '../contact.model';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {
  contact:ContactModel;
  constructor(public http: HttpClient,
    private service: ContactService , private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.http.get(environment.backendUrl+"/Contact/getByUserId/"+this.route.snapshot.params.id).subscribe((res:any)=>{
      this.contact=res[0];
        console.log("get by id",res)
      })

          if(this.contact){
          }else{
            this.contact=new ContactModel()
          }
  }

}
