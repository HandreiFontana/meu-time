import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './pages/authentication/sign-in/sign-in.component';
import { HomeComponent } from './pages/general/home/home.component';
import { authGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [authGuard]
  },
  { path: "**", redirectTo: "/sign-in" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
