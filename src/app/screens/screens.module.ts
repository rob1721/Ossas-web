import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from 'src/app/app-routing.module';

import { LoginScreenComponent } from './login-screen/login-screen.component';



@NgModule({
  declarations: [LoginScreenComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class ScreensModule { }
