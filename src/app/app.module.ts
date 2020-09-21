import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './../app/shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { CarouselComponent } from './components/carousel/carousel.component';
import { LoginScreenComponent } from 'src/app/screens/login-screen/login-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    LoginScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
