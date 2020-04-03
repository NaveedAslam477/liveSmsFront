import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class RecaptchaService {

  executeRecaptcha = new Subject();
  recaptchaResolved = new Subject();

}
