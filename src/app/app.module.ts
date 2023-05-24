import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './pages/authentication/sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/general/home/home.component';
import { DefaultComponent } from './components/default/default.component';
import { CountriesComponent } from './components/home/countries/countries.component';
import { LeaguesComponent } from './components/home/leagues/leagues.component';
import { TeamsComponent } from './components/home/teams/teams.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HomeComponent,
    DefaultComponent,
    CountriesComponent,
    LeaguesComponent,
    TeamsComponent
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
