import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { PhotoScreenComponent } from './screens/photo-screen/photo-screen.component';
import { LoginSessionScreenComponent } from './screens/login-session-screen/login-session-screen.component';
import { RegisterScreenComponent } from './screens/register-screen/register-screen.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginScreenComponent,
  },
  {
    path: 'home',
    // loadChildren: () => import('src/app/screens/screens.module').then(m => m.ScreensModule)
    component: HomeScreenComponent,
  },
  {
    path: 'photo/:id',
    component: PhotoScreenComponent,
  },
  {
    path: 'session',
    component: LoginSessionScreenComponent,
  },
  {
    path: 'register',
    component: RegisterScreenComponent
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
