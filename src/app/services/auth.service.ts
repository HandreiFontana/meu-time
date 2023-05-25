import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  public signIn(token: string) {
    localStorage.setItem('@meuTime:token', token)
    this.router.navigate(['home'])
  }

  public signOut() {
    localStorage.removeItem('@meuTime:token')
    this.router.navigate(['sign-in'])
  }

  public get token(): string | null {
    return localStorage.getItem('@meuTime:token')
  }
}
