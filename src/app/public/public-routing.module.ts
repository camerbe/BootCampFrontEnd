import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ModalLoginComponent } from './modal-login/modal-login.component';
import { ModalLoginModule } from './modal-login/modal-login.module';
import path from 'node:path';

const routes: Routes = [
  {
    path:'',component:LayoutComponent ,
    children: [
      {path:'',redirectTo:'accueil',pathMatch:"full"},
      { path:'login',component:ModalLoginComponent },
    ]
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
