import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './../app/shared/shared.module';

import { ScreensModule } from 'src/app/screens/screens.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventService } from './core/services/event/event.service';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ScreensModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
