import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FootballApiService } from './football-api.service';

describe('FootballApiService', () => {
  let service: FootballApiService;
  let httpTestingController: HttpTestingController
  const apiUrl = 'https://api-football-v1.p.rapidapi.com/v3'

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(FootballApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get season list', () => {
    const final = [
      2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010
    ]
    expect(service.seasonList).toEqual(final)
  })

  it('should get countries', () => {
    service.getCountries().subscribe()

    const request = httpTestingController.expectOne(`${apiUrl}/countries`)

    expect(request.request.method).toBe('GET')
  })

  it('should get leagues', () => {
    const countryCode = 'code'
    service.getLeagues(countryCode).subscribe()

    const request = httpTestingController.expectOne(`${apiUrl}/leagues?code=${countryCode}`)

    expect(request.request.method).toBe('GET')
  })

  it('should verify account', () => {
    const token = 'token'
    service.verifyAccount(token).subscribe()

    const request = httpTestingController.expectOne(apiUrl)

    expect(request.request.method).toBe('GET')
  })
});
