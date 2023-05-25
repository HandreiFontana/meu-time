import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.auth.token

    if (token) {
      req = req.clone({ headers: req.headers.append("x-rapidapi-host", 'v3.football.api-sports.io') })

      req = req.clone({ headers: req.headers.append("x-rapidapi-key", token) })
    }

    return next.handle(req)
  }
}
