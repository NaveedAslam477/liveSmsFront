import { Component, ChangeDetectorRef, Inject, OnDestroy } from '@angular/core';
import { NbLoginComponent, NbAuthService, NB_AUTH_OPTIONS } from '@nebular/auth';
import { Router } from '@angular/router';
import { RecaptchaService } from '../../services/recaptcha.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'epv-login',
  templateUrl: './login.component.html',
})
export class LoginComponent extends NbLoginComponent implements OnDestroy {
  recaptchaResolvedSubscription: Subscription;

  constructor(protected service: NbAuthService,
              @Inject(NB_AUTH_OPTIONS) protected options = {},
              protected cd: ChangeDetectorRef,
              protected router: Router,
              private recaptchaService: RecaptchaService) {

    super(service, options, cd, router);
    this.recaptchaResolvedSubscription = recaptchaService.recaptchaResolved.subscribe((captchaResponse: string) => {
      this.resolved(captchaResponse);
    });
  }

  loginbtnClicked(): void {
    this.recaptchaService.executeRecaptcha.next();
  }

  resolved(captchaResponse: string) {
    this.user.googleReCaptchaResponse = captchaResponse;
    this.login();
  }

  ngOnDestroy(): void {
    this.recaptchaResolvedSubscription.unsubscribe();
  }
}
