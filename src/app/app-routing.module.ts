import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { PhotoScreenComponent } from './screens/photo-screen/photo-screen.component';
import { LoginSessionScreenComponent } from './screens/session-screen/login-session-screen.component';
import { RegisterScreenComponent } from './screens/register-screen/register-screen.component';
import { ProfileScreenComponent } from './screens/profile-screen/profile-screen.component';
import { MyimagesScreenComponent } from './screens/myimages-screen/myimages-screen.component';

import { PagenotfoundComponent } from './screens/pagenotfound/pagenotfound.component';
import { AddPhotoScreenComponent } from './screens/add-photo-screen/add-photo-screen.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: LoginScreenComponent,
  },
  {
    path: 'home',
    // loadChildren: () => import('src/app/screens/screens.module').then(m => m.ScreensModule) // en caso de uso de clean arquitecture
    component: HomeScreenComponent,
  },
  {
    path: 'photo/:id',
    component: PhotoScreenComponent,
  },
  {
    path: 'login',
    component: LoginSessionScreenComponent,
  },
  {
    path: 'register',
    component: RegisterScreenComponent
  },
  {
    path: 'home/profile/addimage',
    component: AddPhotoScreenComponent
  },
  {
    path: 'home/profile/:id',
    component: ProfileScreenComponent
  },
  {
    path: 'home/myimages',
    component: MyimagesScreenComponent
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
