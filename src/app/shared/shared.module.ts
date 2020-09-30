import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from 'src/app/app-routing.module';

import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarInComponent } from './components/navbar-in/navbar-in.component';
import { NavbarLogComponent } from './components/navbar-log/navbar-log.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    NavbarComponent,
    NavbarInComponent,
    NavbarLogComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    NavbarComponent,
    NavbarInComponent,
    NavbarLogComponent,
    FooterComponent
  ]
})
export class SharedModule { }
