import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from "src/app/shared/shared.module";

import { LoginScreenComponent } from './login-screen/login-screen.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { PhotoScreenComponent } from './photo-screen/photo-screen.component';
import { LoginSessionScreenComponent } from './login-session-screen/login-session-screen.component';
import { RegisterScreenComponent } from './register-screen/register-screen.component';
import { CarouselComponent } from 'src/app/components/carousel/carousel.component';
import { LogoComponent } from '../components/logo/logo.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginGridComponent } from '../components/login-grid/login-grid.component';



@NgModule({
  declarations: [
    LoginScreenComponent,
    PhotoScreenComponent,
    HomeScreenComponent,
    LoginSessionScreenComponent,
    RegisterScreenComponent,
    CarouselComponent,
    LogoComponent,
    PagenotfoundComponent,
    LoginGridComponent
    ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
  ]
})
export class ScreensModule { }
