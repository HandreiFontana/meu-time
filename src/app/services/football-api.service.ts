import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface ICountry {
  name: string
  code: string
  flag: string
}

export interface ILeague {
  name: string
  logo: string
}

@Injectable({
  providedIn: 'root'
})
export class FootballApiService {

  constructor() { }

  public getCountries(): Observable<ICountry[]> {
    const countries: ICountry[] = [
      { name: 'England', code: 'GB', flag: 'https://media.api-sports.io/flags/gb.svg' },
      { name: 'Germany', code: 'GE', flag: 'https://media.api-sports.io/flags/gb.svg' },
      { name: 'Italy', code: 'IT', flag: 'https://media.api-sports.io/flags/gb.svg' },
      { name: 'Spain', code: 'SP', flag: 'https://media.api-sports.io/flags/gb.svg' },
      { name: 'Brazil', code: 'BR', flag: 'https://media.api-sports.io/flags/gb.svg' },
      { name: 'France', code: 'FR', flag: 'https://media.api-sports.io/flags/gb.svg' },
    ]
    return of(countries)
  }

  public getLeagues(countryCode: string): Observable<ILeague[]> {
    const leagues: ILeague[] = [
      { name: 'Bundesliga', logo: 'https://media.api-sports.io/football/leagues/2.png' },
      { name: 'Serie A', logo: 'https://media.api-sports.io/football/leagues/2.png' },
      { name: 'La Liga', logo: 'https://media.api-sports.io/football/leagues/2.png' },
      { name: 'Premier League', logo: 'https://media.api-sports.io/football/leagues/2.png' },
      { name: 'Brasileirão', logo: 'https://media.api-sports.io/football/leagues/2.png' },
      { name: 'Ligue 1', logo: 'https://media.api-sports.io/football/leagues/2.png' },
    ]
    return of(leagues)
  }
}
