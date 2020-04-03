import { Injectable } from '@angular/core';
import { ContactModel } from '../contact/contact.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contact: ContactModel;
  constructor(private http: HttpClient) { }
  getContact(): Observable<any> {
    return this.http.get(environment.backendUrl+'/Contact/get-all');
  }
  getcountry() {
    return this.http.get('https://restcountries.eu/rest/v2/all').pipe (
    );
  }
}
