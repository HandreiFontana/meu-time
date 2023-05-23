import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { Router } from '@angular/router';

describe('AuthService', () => {
  let service: AuthService;
  let localStorageSetItemSpyOn: jasmine.Spy;
  let localStorageRemoveItemSpyOn: jasmine.Spy;
  let router: Router

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Router,
          useClass: class {
            navigate = jasmine.createSpy('navigate')
          }
        }
      ]
    });
    service = TestBed.inject(AuthService);
    localStorageSetItemSpyOn = spyOn(localStorage, "setItem")
    localStorageRemoveItemSpyOn = spyOn(localStorage, "removeItem")
    router = TestBed.inject(Router)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save token on local storage', () => {
    const token = 'token'
    service.signIn(token)
    expect(localStorageSetItemSpyOn).toHaveBeenCalledWith('@meuTime:token', token);
  });

  it('should delete token from local storage', () => {
    service.signOut()
    expect(localStorageRemoveItemSpyOn).toHaveBeenCalled();
  });

  it('should navigate to sign in page', () => {
    service.signOut()
    expect(router.navigate).toHaveBeenCalledWith(['sign-in']);
  });
});
