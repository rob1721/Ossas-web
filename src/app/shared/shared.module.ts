import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from 'src/app/app-routing.module';

import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarInComponent } from './components/navbar-in/navbar-in.component';

@NgModule({
  declarations: [
    NavbarComponent,
    NavbarInComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    NavbarComponent,
    NavbarInComponent
  ]
})
export class SharedModule { }
