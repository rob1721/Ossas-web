import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { LoginScreenComponent } from './login-screen/login-screen.component';
import { NavbarComponent } from '../components/navbar-initial/navbar.component';

import { HomeScreenComponent } from './home-screen/home-screen.component';
import { NavbarLogComponent } from '../components/navbar-home/navbar-log.component';

import { PhotoScreenComponent } from './photo-screen/photo-screen.component';
import { NavbarPhotoComponent } from '../components/navbar-photo/navbar-photo.component';

import { LoginSessionScreenComponent } from './session-screen/login-session-screen.component';
import { NavbarSessionComponent } from '../components/navbar-session/navbar-session.component';

import { RegisterScreenComponent } from './register-screen/register-screen.component';
import { NavbarInComponent } from '../components/navbar-register/navbar-in.component';

import { ProfileScreenComponent } from './profile-screen/profile-screen.component';
import { NavbarProfileComponent } from 'src/app/components/navbar-profile/navbar-profile.component';

import { MyimagesScreenComponent } from './myimages-screen/myimages-screen.component';

import { CarouselComponent } from 'src/app/components/carousel/carousel.component';
import { LogoComponent } from '../components/logo/logo.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginGridComponent } from '../components/login-grid/login-grid.component';
import { RegisterFormComponent} from 'src/app/components/register-form/register-form.component';
import { RegisterGridComponent} from 'src/app/components/register-grid/register-grid.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    LoginScreenComponent,
    NavbarComponent,

    PhotoScreenComponent,
    NavbarPhotoComponent,

    HomeScreenComponent,
    NavbarLogComponent,

    LoginSessionScreenComponent,
    NavbarSessionComponent,

    RegisterScreenComponent,
    NavbarInComponent,
    RegisterFormComponent,
    RegisterGridComponent,

    ProfileScreenComponent,
    NavbarProfileComponent,

    MyimagesScreenComponent,

    CarouselComponent,
    LogoComponent,
    PagenotfoundComponent,
    LoginGridComponent,

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ScreensModule { }
