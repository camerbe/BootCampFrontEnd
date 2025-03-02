import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecuredRoutingModule } from './secured-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideBarComponent } from './dashboard/side-bar/side-bar.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    SecuredRoutingModule
  ]
})
export class SecuredModule { }
