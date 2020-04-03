import { Component, Inject, ChangeDetectorRef, OnDestroy, ViewChild } from '@angular/core';
import { NbRegisterComponent, NbAuthService, NB_AUTH_OPTIONS } from '@nebular/auth';
import { Router } from '@angular/router';
import { RecaptchaService } from '../../services/recaptcha.service';
import { Subscription } from 'rxjs';
import { NbStepperComponent } from '@nebular/theme';

import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';

@Component({
  selector: 'epv-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent extends NbRegisterComponent implements OnDestroy {
  radioGroupValue = 1;
  recaptchaResolvedSubscription: Subscription;
  useEmail: boolean = true;
  @ViewChild('stepperRef', {static: false}) stepperRef: NbStepperComponent;
  SearchCountryField = SearchCountryField;
  TooltipLabel = TooltipLabel;
  CountryISO = CountryISO;
  // preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];

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

  useEmailClick(): void {
    this.useEmail = true;
    this.user.signupBy = "Email";
    this.stepperRef.next();
  }

  usePhoneClick(): void {
    this.useEmail = false;
    this.user.signupBy = "PhoneNumber";
    this.stepperRef.next();
  }

  resolved(captchaResponse: string) {
    this.user.googleReCaptchaResponse = captchaResponse;
    if (this.useEmail === false) {
      this.user.phoneNumber = this.user.phoneNumber.internationalNumber;
    }
    this.register();
  }

  registerbtnClicked(): void {
    this.recaptchaService.executeRecaptcha.next();
  }

  ngOnDestroy(): void {
    this.recaptchaResolvedSubscription.unsubscribe();
  }
}
