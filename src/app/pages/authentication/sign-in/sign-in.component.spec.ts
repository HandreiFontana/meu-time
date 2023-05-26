import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInComponent } from './sign-in.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FootballApiService } from 'src/app/services/football-api.service';
import { of, throwError } from 'rxjs';

@Injectable()
class MockFootballApiService extends FootballApiService {
  override verifyAccount(token: string) {
    if (token === 'token') return throwError(() => new Error('', { cause: 404 }))
    else return throwError(() => new Error('', { cause: 403 }))
  }
}

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;
  let windowOnSpy: jasmine.Spy;
  let footballApiOnSpy: jasmine.Spy;
  let authService: AuthService
  let mockFootballApiService: FootballApiService

  let rapidapiUrl = 'https://rapidapi.com/auth/sign-up?referral=/hub'

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignInComponent],
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [
        {
          provide: AuthService,
          useClass: class {
            signIn = jasmine.createSpy('signIn')
          }
        },
        {
          provide: FootballApiService,
          useClass: MockFootballApiService
        }
      ]
    });
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    component.isLoading = false
    windowOnSpy = spyOn(window, "open")
    mockFootballApiService = TestBed.inject(FootballApiService)
    footballApiOnSpy = spyOn(mockFootballApiService, "verifyAccount").and.returnValue(throwError(() => new Error()))
    mockFootballApiService.verifyAccount('token')
    authService = TestBed.inject(AuthService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open register url link', () => {
    component.navigateToRegister()
    expect(windowOnSpy).toHaveBeenCalledWith(rapidapiUrl, '_blank')
  })

  it('should reject form with token null', () => {
    component.signIn()
    expect(component.signInForm.valid).toBeFalse()
    expect(component.signInForm.touched).toBeTrue()
  })

  it('should reject form with token empty', () => {
    component.signInForm.controls['token'].setValue("")
    component.signIn()
    expect(component.signInForm.valid).toBeFalse()
    expect(component.signInForm.touched).toBeTrue()
  })

  it('should sign in with token not null and not empty', () => {
    const token = "token"
    component.signInForm.controls['token'].setValue(token)
    component.signIn()

    expect(component.isLoading).toBeFalse()
    expect(footballApiOnSpy).toHaveBeenCalled()
  })
});
