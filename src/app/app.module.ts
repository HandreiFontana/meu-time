import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { TokenInterceptorService } from './services/token-interceptor.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './pages/authentication/sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/general/home/home.component';
import { DefaultComponent } from './components/default/default.component';
import { ExpansibleCardComponent } from './components/expansible-card/expansible-card.component';
import { TeamComponent } from './pages/general/team/team.component';
import { TabsComponent } from './pages/general/team/components/tabs/tabs.component';
import { SeasonSelectComponent } from './components/season-select/season-select.component';
import { LoadingComponent } from './components/loading/loading.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HomeComponent,
    DefaultComponent,
    ExpansibleCardComponent,
    TeamComponent,
    TabsComponent,
    SeasonSelectComponent,
    LoadingComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
