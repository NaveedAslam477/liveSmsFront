/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { NbIconLibraries } from '@nebular/theme';

@Component({
  selector: 'ngx-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  constructor(private analytics: AnalyticsService, private iconLibraries: NbIconLibraries) {
    this.iconLibraries.registerFontPack('fa-regular', { packClass: 'far', iconClassPrefix: 'fa' });
    this.iconLibraries.registerFontPack('fa-solid', { packClass: 'fas', iconClassPrefix: 'fa' });
  }

  ngOnInit() {
    this.analytics.trackPageViews();
  }
}
