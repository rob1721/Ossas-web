import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './../app/shared/shared.module';

import { ScreensModule } from 'src/app/screens/screens.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventService } from './core/services/event/event.service';
import { CoreModule } from './core/core.module';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';

// Angular services
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ScreensModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
