import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './pages/authentication/sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/general/home/home.component';
import { DefaultComponent } from './components/default/default.component';
import { ExpansibleCardComponent } from './components/expansible-card/expansible-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HomeComponent,
    DefaultComponent,
    ExpansibleCardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
