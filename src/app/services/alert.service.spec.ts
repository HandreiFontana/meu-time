import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { AlertService } from './alert.service';

describe('AlertService', () => {
  let service: AlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertService);;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should emit success message', fakeAsync (() => {
    const message = 'message'
    service.success(message)

    expect(service.type).toBe('success')
    expect(service.text).toBe(message)
    expect(service.isActive).toBeTrue()

    tick(6000)
    expect(service.isActive).toBeFalse()
  }))

  it('should close the alert message', () => {
    service.closeAlert()

    expect(service.isActive).toBeFalse()
  })
});
