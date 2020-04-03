// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';


// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   private url = Utilities.getEpicVaultWebApibaseUrl();

//   constructor(private http: HttpClient) { }

//   getCurrentUser(): Observable<any> {
//     return this.http.get(this.url.concat('/account/users/me'));
//   }

//   changePassword(resetpassword: any): Observable<any> {
//     return this.http.put(this.url.concat('/account/change-password'), resetpassword);
//   }

//   accountActivate(accountActivate): Observable<any> {
//     return this.http.post(this.url.concat('/account/account-verification'), accountActivate);
//   }
// }
