import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { FootballApiService } from 'src/app/services/football-api.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  private rapidapiUrl: string
  public isLoading = false

  public signInForm = this.fb.group({
    token: this.fb.control<string | null>(null, [Validators.required])
  })

  constructor(
    private alert: AlertService,
    private auth: AuthService,
    private footballApi: FootballApiService,
    private fb: FormBuilder
  ) {
    this.rapidapiUrl = 'https://rapidapi.com/auth/sign-up?referral=/hub'
  }

  public navigateToRegister() {
    window.open(this.rapidapiUrl, '_blank')
  }

  public signIn() {
    if (this.signInForm.valid) {
      const { token } = this.signInForm.value

      this.toggleIsLoading()

      this.footballApi
        .verifyAccount(token!)
        .pipe(finalize(() => this.toggleIsLoading()))
        .subscribe({
          next: () => {},
          error: (err) => {
            if (err.status === 404) {
              this.auth.signIn(token!)

              return
            }

            this.signInError()
          }
        })

      return
    }

    this.signInForm.markAllAsTouched()
  }

  private toggleIsLoading() {
    this.isLoading = !this.isLoading
  }

  private signInError() {
    this.alert.warning('Token Inválido')
  }
}
