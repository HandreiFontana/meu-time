import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HomeComponent } from './home.component';
import { FootballApiService } from 'src/app/services/football-api.service';
import { of } from 'rxjs';
import { leagues } from 'src/assets/fake-api/leagues'

class MockFootballApiService extends FootballApiService {
  override getCountries() {
    return of([
      {
        "name": "Albania",
        "code": "AL",
        "flag": "https:\/\/media-2.api-sports.io\/flags\/al.svg"
      },
      {
        "name": "Algeria",
        "code": "DZ",
        "flag": "https:\/\/media-3.api-sports.io\/flags\/dz.svg"
      },
      {
        "name": "Andorra",
        "code": "AD",
        "flag": "https:\/\/media-1.api-sports.io\/flags\/ad.svg"
      }
    ])
  }

  override getLeagues(countrySelected: string) {
    return of(leagues)
  }
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [HttpClientTestingModule],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [
        {
          provide: FootballApiService,
          useClass: MockFootballApiService
        }
      ]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should toggle expanded card to a card value', () => {
    const card = 'card'
    component.toggleExpandedCard(card)
    expect(component.expandedCard).toEqual(card)
  })

  it('should toggle expanded card to a null value', () => {
    const card = 'card'
    component.expandedCard = card
    component.toggleExpandedCard(card)
    expect(component.expandedCard).toBeNull()
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call country click', () => {
    const countryOption = {
      label: 'label',
      action: () => {},
      image: 'image',
      options: { code: 'code' }
    }
    component.countryOptionClick(countryOption)

    expect(component.countrySelected).toEqual(countryOption)
    expect(component.leagueSelected).toBeUndefined()
  })

  it('should call league click', () => {
    const leagueOption = {
      label: 'label',
      action: () => {},
      image: 'image',
      options: { code: 'code' }
    }
    component.leagueOptionClick(leagueOption)

    expect(component.leagueSelected).toEqual(leagueOption)
  })

  it('should call team click', () => {
    const teamOption = {
      label: 'label',
      action: () => {},
      image: 'image',
      options: { code: 'code' }
    }
    component.teamOptionClick(teamOption)

    expect(component.teamSelected).toEqual(teamOption)
  })

  it('should set team as undefined when unselect team', () => {
    component.unselectTeam()

    expect(component.teamSelected).toBeUndefined()
  })

  it('should reset card when change season', () => {
    component.changeSeason()

    expect(component.leagueSelected).toBeUndefined()
  })
});
