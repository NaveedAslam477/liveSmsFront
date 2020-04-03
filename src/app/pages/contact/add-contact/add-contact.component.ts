import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NbToastrService } from '@nebular/theme';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactModel } from '../contact.model';
import { ContactService } from '../../service/contact.service';
import { environment } from '../../../../environments/environment.prod';

@Component({
  selector: 'add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  index: number;
  contact:ContactModel;
  countries: any;
  constructor(public http: HttpClient,
    private router: Router, private service: ContactService,
    private toastrService: NbToastrService,
    private route: ActivatedRoute){
      this.contact=new ContactModel()
      }
  showToast(position, status,message) {
    this.index += 1;
    this.toastrService.show(
      status || 'Success',
      message,
      { position, status });
  }
  ngOnInit() {
    this.service.getcountry().subscribe(
      data => {
         console.log(data);
       this.countries = data;
    console.log(this.countries);
  });
  }
  addcontact(){
    debugger
    this.http.post(environment.backendUrl+'/Contact/Add', this.contact)

        .subscribe(response => {
          debugger
          this.router.navigate(["pages/contact/contact-list/"]);
          this.showToast('top-right', 'success','added successfully');
          console.log(response);
        }, (err) => {
          this.showToast('top-right', 'danger', err.message);
         console.log ('Oooops!',err);
        });
  }
}
