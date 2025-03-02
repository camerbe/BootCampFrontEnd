import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicModule } from './public/public.module';


const routes: Routes = [
  {
    path:'',
    loadChildren:()=>import('./public/public.module').then(m => m.PublicModule)
  },
  {
    path:'dashboard',
    loadChildren:()=>import('./secured/secured.module').then(s => s.SecuredModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
