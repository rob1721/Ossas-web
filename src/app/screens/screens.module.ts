import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from "src/app/shared/shared.module";

import { LoginScreenComponent } from './login-screen/login-screen.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { PhotoScreenComponent } from './photo-screen/photo-screen.component';
import { LoginSessionScreenComponent } from './login-session-screen/login-session-screen.component';
import { RegisterScreenComponent } from './register-screen/register-screen.component';




@NgModule({
  declarations: [
    LoginScreenComponent,
    PhotoScreenComponent,
    HomeScreenComponent,
    LoginSessionScreenComponent,
    RegisterScreenComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ]
})
export class ScreensModule { }
