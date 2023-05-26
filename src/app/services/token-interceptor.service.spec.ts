import { TestBed } from '@angular/core/testing';

import { TokenInterceptorService } from './token-interceptor.service';
import { AuthService } from './auth.service';
import { HttpRequest } from '@angular/common/http';
import { of } from 'rxjs';

class MockAuthService extends AuthService {
  override get token(): string | null {
    return 'token'
  }
}

describe('TokenInterceptorService', () => {
  let service: TokenInterceptorService;
  let auth: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: AuthService,
          useClass: MockAuthService
        }
      ]
    });
    service = TestBed.inject(TokenInterceptorService);
    auth = TestBed.inject(AuthService)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should intercept requests', () => {
    const next: any = {
      handle: (req: HttpRequest<any>) => {
        return of(req)
      }
    };
    
    const requestMock = new HttpRequest('GET', '/test')

    service.intercept(requestMock, next).subscribe((res: any) => {
      expect(res?.headers.lazyUpdate).toEqual([
        {
            "name": "X-RapidAPI-Host",
            "value": "api-football-v1.p.rapidapi.com",
            "op": "a"
        },
        {
            "name": "X-RapidAPI-Key",
            "value": "token",
            "op": "a"
        }
    ])
    })
  })
});
