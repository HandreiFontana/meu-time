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

export interface IPlayer {
  name: string
  age: number
  nacionality: string
  photo: string
}

interface ILocal {
  home: number
  away: number
  total: number
}

interface ILineup {
  formation: string
  played: number
}

export interface IStatics {
  fixtures: {
    played: ILocal
    wins: ILocal
    draws: ILocal
    loses: ILocal
  }
  goals: {
    for: {
      minute: any
    }
  }
  lineups: ILineup[]
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

  public getPlayers(teamCode: string): Observable<IPlayer[]> {
    const players: IPlayer[] = [
      { name: 'Neymar', age: 28, nacionality: 'Brazil' , photo: 'https://media.api-sports.io/football/players/276.png' },
      { name: 'Neymar', age: 28, nacionality: 'Brazil' , photo: 'https://media.api-sports.io/football/players/276.png' },
      { name: 'Neymar', age: 28, nacionality: 'Brazil' , photo: 'https://media.api-sports.io/football/players/276.png' },
      { name: 'Neymar', age: 28, nacionality: 'Brazil' , photo: 'https://media.api-sports.io/football/players/276.png' },
      { name: 'Neymar', age: 28, nacionality: 'Brazil' , photo: 'https://media.api-sports.io/football/players/276.png' },
      { name: 'Neymar', age: 28, nacionality: 'Brazil' , photo: 'https://media.api-sports.io/football/players/276.png' },
      { name: 'Neymar', age: 28, nacionality: 'Brazil' , photo: 'https://media.api-sports.io/football/players/276.png' },
      { name: 'Neymar', age: 28, nacionality: 'Brazil' , photo: 'https://media.api-sports.io/football/players/276.png' },
      { name: 'Neymar', age: 28, nacionality: 'Brazil' , photo: 'https://media.api-sports.io/football/players/276.png' },
      { name: 'Neymar', age: 28, nacionality: 'Brazil' , photo: 'https://media.api-sports.io/football/players/276.png' },
      { name: 'Neymar', age: 28, nacionality: 'Brazil' , photo: 'https://media.api-sports.io/football/players/276.png' },
      { name: 'Neymar', age: 28, nacionality: 'Brazil' , photo: 'https://media.api-sports.io/football/players/276.png' },
      { name: 'Neymar', age: 28, nacionality: 'Brazil' , photo: 'https://media.api-sports.io/football/players/276.png' },
      { name: 'Neymar', age: 28, nacionality: 'Brazil' , photo: 'https://media.api-sports.io/football/players/276.png' },
      { name: 'Neymar', age: 28, nacionality: 'Brazil' , photo: 'https://media.api-sports.io/football/players/276.png' },
      { name: 'Neymar', age: 28, nacionality: 'Brazil' , photo: 'https://media.api-sports.io/football/players/276.png' }
    ]
    return of(players)
  }

  public getStatics(teamCode: string): Observable<IStatics> {
    const statics: IStatics = {
      fixtures: {
        played: {
          home: 19,
          away: 19,
          total: 38
        },
        wins: {
          home: 10,
          away: 8,
          total: 18
        },
        draws: {
          home: 7,
          away: 5,
          total: 12
        },
        loses: {
          home: 2,
          away: 6,
          total: 8
        }
      },
      goals: {
        for: {
          minute: {
            "0-15": {
              total: 4,
              percentage: "6.06%"
            },
            "16-30": {
              total: 17,
              percentage: "25.76%"
            },
            "31-45": {
              total: 11,
              percentage: "16.67%"
            },
            "46-60": {
              total: 13,
              percentage: "19.70%"
            },
            "61-75": {
              total: 10,
              percentage: "15.15%"
            },
            "76-90": {
              total: 8,
              percentage: "12.12%"
            },
            "91-105": {
              total: 3,
              percentage: "4.55%"
            },
            "106-120": {
              total: null,
              percentage: null
            }
          }
        }
      },
      lineups: [
        {
          "formation": "4-2-3-1",
          "played": 32
        },
        {
          "formation": "3-4-1-2",
          "played": 4
        },
        {
          "formation": "3-4-2-1",
          "played": 1
        },
        {
          "formation": "4-3-1-2",
          "played": 1
        }
      ]
    }

    return of(statics)
  }
}
