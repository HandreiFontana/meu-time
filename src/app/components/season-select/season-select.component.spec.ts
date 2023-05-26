import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SeasonSelectComponent } from './season-select.component';
import { FootballApiService } from 'src/app/services/football-api.service';

describe('SeasonSelectComponent', () => {
  let component: SeasonSelectComponent;
  let footballApiService: FootballApiService
  let fixture: ComponentFixture<SeasonSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeasonSelectComponent],
      imports: [HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(SeasonSelectComponent);
    component = fixture.componentInstance;
    footballApiService = TestBed.inject(FootballApiService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open modal', () => {
    component.modalIsOpen = false
    component.toggleModal()
    expect(component.modalIsOpen).toBeTrue()
  })

  it('should close modal', () => {
    component.modalIsOpen = true
    component.toggleModal()
    expect(component.modalIsOpen).toBeFalse()
  })

  it('should change season', () => {
    const season = 2015
    component.seasonClick(season)
    expect(footballApiService.season).toBe(season)
    expect(component.modalIsOpen).toBeFalse()
  })
});
