import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  private rapidapiUrl: string

  public signInForm = this.fb.group({
    token: this.fb.control<string | null>(null, [Validators.required])
  })

  constructor(
    private auth: AuthService,
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

      this.auth.signIn(token!)

      return
    }

    this.signInForm.markAllAsTouched()
  }
}
