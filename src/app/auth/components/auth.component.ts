import { Component, OnInit, ViewChild } from '@angular/core';
import { NbAuthComponent, NbAuthService } from '@nebular/auth';
import { Location } from '@angular/common';
import { RecaptchaService } from '../services/recaptcha.service';
import { RecaptchaComponent } from 'ng-recaptcha';

@Component({
  selector: 'epv-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent extends NbAuthComponent implements OnInit {

  @ViewChild('captchaRef', {static: false}) captchaRef: RecaptchaComponent;

  constructor(protected auth: NbAuthService, protected location: Location, private reacptchaService: RecaptchaService) {
    super(auth, location);
    reacptchaService.executeRecaptcha.subscribe(() => {
      this.captchaRef.execute();
    });
  }

  resolved(captchaResponse: string) {
    this.reacptchaService.recaptchaResolved.next(captchaResponse);
    this.captchaRef.reset();
  }

  ngOnInit() {
  }

}
