import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { FootballApiService } from './football-api.service';

describe('FootballApiService', () => {
  let service: FootballApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(FootballApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
