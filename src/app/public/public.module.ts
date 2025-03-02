import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { SiteFooterComponent } from './layout/site-footer/site-footer.component';
import { SiteHeaderComponent } from './layout/site-header/site-header.component';
import { ReactiveFormsModule } from '@angular/forms';

import { ModalLoginComponent } from './modal-login/modal-login.component';
import { RouterLink } from '@angular/router';


@NgModule({
  declarations: [
    LayoutComponent,
    SiteFooterComponent,
    SiteHeaderComponent,
    ModalLoginComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    RouterLink
  ],
  providers: [
    //provideHttpClient()
  ]
})
export class PublicModule { }
