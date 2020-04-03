import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
   <span> &copy; {{getYear()}} <a href="https://www.solutionsurface.com/" target="_blank">Sms Software</a></span>
  `,
})
export class FooterComponent {
  getYear() {
    return new Date().getUTCFullYear();
  }
}
