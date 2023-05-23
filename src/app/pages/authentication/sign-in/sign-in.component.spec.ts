import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInComponent } from './sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;
  let windowOnSpy: jasmine.Spy;
  let authService: AuthService

  let rapidapiUrl = 'https://rapidapi.com/auth/sign-up?referral=/hub'

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignInComponent],
      imports: [ReactiveFormsModule, FormsModule],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [
        {
          provide: AuthService,
          useClass: class {
            signIn = jasmine.createSpy('signIn')
          }
        }
      ]
    });
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    windowOnSpy = spyOn(window, "open")
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
    component.signInForm.controls['token'].setValue("token")
    component.signIn()
    expect(authService.signIn).toHaveBeenCalledWith("token")
  })
});
