import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { LoginScreenComponent } from './login-screen/login-screen.component';
import { NavbarComponent } from '../components/navbar-initial/navbar.component';

import { HomeScreenComponent } from './home-screen/home-screen.component';
import { NavbarLogComponent } from '../components/navbar-home/navbar-log.component';

import { PhotoScreenComponent } from './photo-screen/photo-screen.component';

import { LoginSessionScreenComponent } from './session-screen/login-session-screen.component';
import { NavbarSessionComponent } from '../components/navbar-session/navbar-session.component';

import { RegisterScreenComponent } from './register-screen/register-screen.component';
import { NavbarInComponent } from '../components/navbar-register/navbar-in.component';

import { ProfileScreenComponent } from './profile-screen/profile-screen.component';
import { MyimagesScreenComponent } from './myimages-screen/myimages-screen.component';

import { CarouselComponent } from 'src/app/components/carousel/carousel.component';
import { LogoComponent } from '../components/logo/logo.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginGridComponent } from '../components/login-grid/login-grid.component';





@NgModule({
  declarations: [
    LoginScreenComponent,
    NavbarComponent,

    PhotoScreenComponent,
    HomeScreenComponent,
    NavbarLogComponent,

    LoginSessionScreenComponent,
    NavbarSessionComponent,

    RegisterScreenComponent,
    NavbarInComponent,

    ProfileScreenComponent,
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
  ]
})
export class ScreensModule { }
