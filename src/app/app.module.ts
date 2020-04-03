/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpRequest, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import { NbAuthModule, NbPasswordAuthStrategy, NbAuthJWTToken, NbAuthJWTInterceptor, NB_AUTH_TOKEN_INTERCEPTOR_FILTER, NbPasswordAuthStrategyOptions, getDeepFromObject } from '@nebular/auth';
import { AddUserAgentInterceptor } from './interceptor/add-user-agent-interceptor';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { environment } from '../environments/environment';

//export function testFun(module: string, res: HttpResponse<Object>, options: NbPasswordAuthStrategyOptions){

//}
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxLoadingModule.forRoot({}),

    ThemeModule.forRoot(),

    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          baseEndpoint:  environment.backendUrl ,
          login: {
            endpoint: '/user/login',
            method: 'post',
            redirect: {
              success: '/pages/dashboard/',
              failure: null, // stay on the same page
            },
          },
          register: {
            endpoint: environment.backendUrl +  '/user/signup',
            method: 'post',
            redirect: {
              success: 'auth/enter-code',
              failure: null, // stay on the same page
            },
          },
          token: {
            class: NbAuthJWTToken,
            key: 'data',
          },
          errors: {
            key: 'error.messages',
            getter: (module: string, res: HttpErrorResponse, options: NbPasswordAuthStrategyOptions) => getDeepFromObject(
              res.error,
              options.errors.key,
              options[module].defaultErrors,
            ),
          },
          messages:{
            key: 'data',
            getter: (module: string, res: HttpResponse<Object>, options: NbPasswordAuthStrategyOptions) => {
              let response: any = res.body.valueOf();
              if (response) {
                sessionStorage.removeItem('guid');
                sessionStorage.setItem('guid', response.data.id);
              }
              else {
                sessionStorage.removeItem('guid');
              }
              return getDeepFromObject(
                res.body,
                options.messages.key,
                options[module].defaultMessages,
              );
            },
          },
        }),
      ],
      forms: {
        login: {
          redirectDelay: 0,
          showMessages: {
            success: true,
          },
        },
        register: {
          redirectDelay: 6000,
          showMessages: {
            success: true,
            error: true,
          },
        },
      },
    }),
  ],
  providers: [
    {
      provide: NB_AUTH_TOKEN_INTERCEPTOR_FILTER,
      useValue: function (req: HttpRequest<any>) {
        return req.url === '/user/login';
      },
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddUserAgentInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NbAuthJWTInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
