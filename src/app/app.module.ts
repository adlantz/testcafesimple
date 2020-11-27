import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './auth-button/auth-button.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AuthButtonComponent,
    UserProfileComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AuthModule.forRoot({
      domain: 'dev-ygw33hlb.us.auth0.com',
      clientId: 'r48UfjXLE6eb1686WqNEX90A68waEWEv'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
