import { Component, OnInit } from '@angular/core';
import { NbResetPasswordComponent } from '@nebular/auth';

@Component({
  selector: 'epv-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent extends NbResetPasswordComponent implements OnInit {

  ngOnInit() {
  }

}
