import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  fname: any;
  lname: any;
  company: any;
  website: any;
  email: any;
  username: any;
  password: any;
  CONFIRMPASSWORD: any;
  phone: any;
  address1: any;
  state: any;
  address2: any;
  city: any;
  postcode: any;
  sms_limit: any;
  api_access:any;
  datecreated:any;
  api_key:any;
  api_gateway:any;
  online;any;
  reseller:any;
  sms_gateway:any;
  lastlogin:any;
  pwresetkey:any;
  pwresetexpiry:any;
  emailnotify:any;
  menu_open:any;
  lan_id:any;
  remember_token:any;
  created_at:any;
  updated_at:any;
  constructor(private http: HttpClient) { }
  getData(): Observable<any> {
    return this.http.get('https://ultimatesms1.herokuapp.com/Client/get-all');
  }
  
}

