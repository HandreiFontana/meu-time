import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface ICountry {
  name: string
  code: string
  flag: string
}

export interface ILeague {
  id: number
  name: string
  logo: string
}

export interface ITeam {
  id: number
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
      { id: 39, name: 'Bundesliga', logo: 'https://media.api-sports.io/football/leagues/2.png' },
      { id: 39, name: 'Serie A', logo: 'https://media.api-sports.io/football/leagues/1.png' },
      { id: 39, name: 'La Liga', logo: 'https://media.api-sports.io/football/leagues/3.png' },
      { id: 39, name: 'Premier League', logo: 'https://media.api-sports.io/football/leagues/4.png' },
      { id: 39, name: 'Brasileirão', logo: 'https://media.api-sports.io/football/leagues/5.png' },
      { id: 39, name: 'Ligue 1', logo: 'https://media.api-sports.io/football/leagues/6.png' },
    ]
    return of(leagues)
  }

  public getTeams(leagueCode: string): Observable<ITeam[]> {
    const teams: ITeam[] = [
      { id: 33, name: 'Manchester United', logo: 'https://media.api-sports.io/football/teams/33.png' },
      { id: 33, name: 'Real Madrid', logo: 'https://media.api-sports.io/football/teams/34.png' },
      { id: 33, name: 'São Paulo', logo: 'https://media.api-sports.io/football/teams/32.png' },
      { id: 33, name: 'Milan', logo: 'https://media.api-sports.io/football/teams/31.png' },
      { id: 33, name: 'Flamengo', logo: 'https://media.api-sports.io/football/teams/30.png' },
      { id: 33, name: 'PSG', logo: 'https://media.api-sports.io/football/teams/29.png' },
    ]
    return of(teams)
  }
}
