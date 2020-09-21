import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from 'src/app/app-routing.module';

import { LoginScreenComponent } from './login-screen/login-screen.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { PhotoScreenComponent } from './photo-screen/photo-screen.component';

import { CarouselComponent } from 'src/app/components/carousel/carousel.component';



@NgModule({
  declarations: [
    LoginScreenComponent,
    PhotoScreenComponent,
    CarouselComponent,
    HomeScreenComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class ScreensModule { }
