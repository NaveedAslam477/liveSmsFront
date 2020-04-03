import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ClientModule } from './client/client.module';
import { ContactModule } from './contact/contact.module';


@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    ClientModule,
    ContactModule,
  ],
  declarations: [
    PagesComponent,
  
  ],
})
export class PagesModule {
}
