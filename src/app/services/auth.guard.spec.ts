import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';

import { authGuard } from './auth.guard';

describe('authGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({ });
  });

  it('should return false when localstorage not contains token', () => {
    const a = {} as ActivatedRouteSnapshot
    const b = {} as RouterStateSnapshot
    localStorage.removeItem("@meuTime:token")
    const result = executeGuard(a, b)
    expect(result).toBeFalse()
  })

  it('should return true when localstorage contains token', () => {
    const a = {} as ActivatedRouteSnapshot
    const b = {} as RouterStateSnapshot
    localStorage.setItem("@meuTime:token", "teste")
    const result = executeGuard(a, b)
    expect(result).toBeTrue()
  })

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
