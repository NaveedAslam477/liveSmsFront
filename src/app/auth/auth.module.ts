import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthRoutingModule } from './auth-routing.module';
import { NbAuthModule } from '@nebular/auth';
import {
  NbAlertModule,
  NbInputModule,
  NbButtonModule,
  NbCheckboxModule,
  NbRadioModule,
  NbCardModule,
  NbLayoutModule,
  NbStepperModule,
} from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthComponent } from './components/auth.component';
import { RequestPasswordComponent } from './components/request-password/request-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaService } from './services/recaptcha.service';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
// if you need forms support:
// import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NbRadioModule,
    NbCardModule,
    NbLayoutModule,
    NbStepperModule,
    AuthRoutingModule,
    ThemeModule,

    NbAuthModule,
     RecaptchaModule,
    NgxIntlTelInputModule,
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent,
    RequestPasswordComponent,
    ResetPasswordComponent,
  ],
  providers: [
    RecaptchaService,
  ],
})
export class AuthModule { }
