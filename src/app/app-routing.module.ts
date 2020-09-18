import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginScreenComponent,
  },
  {
    path: 'home',
    component: HomeScreenComponent,
  }
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
