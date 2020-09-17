import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginScreenComponent } from './screens/login-screen/login-screen.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginScreenComponent,
  },
/*  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full',
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
