import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { countries } from 'src/assets/fake-api/countries';
import { leagues } from 'src/assets/fake-api/leagues';
import { players } from 'src/assets/fake-api/players';
import { statics } from 'src/assets/fake-api/statics';
import { teams } from 'src/assets/fake-api/teams';

interface ICountryResponse {
  response: ICountry[]
}

interface ILeagueResponse {
  response: {
    league: ILeague
  }[]
}

interface ITeamResponse {
  response: {
    team: ITeam
  }[]
}

interface IPlayerResponse {
  response: {
    player: IPlayer
  }[]
}

interface IStaticsResponse {
  response: {
    fixtures: {
      played: ILocal
      wins: ILocal
      draws: ILocal
      loses: ILocal
    }
    goals: {
      for: { minute: any }
    }
    lineups: {
      formation: string
      played: number
    }[]
  }
}

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
  nationality: string
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
  public seasonInit = 2010
  public seasonLast = 2021
  public season = this.seasonLast

  private apiUrl: string = 'https://api-football-v1.p.rapidapi.com/v3'

  constructor(private http: HttpClient) { }

  get seasonList(): number[] {
    const seasons = []
    let init = this.seasonInit
    let last = this.seasonLast
    while (last >= init) {
      seasons.push(last--)
    }
    return seasons
  }

  public changeSeason(season: number) {
    this.season = season
  }

  public getCountries(): Observable<ICountry[]> {
    // return this.http
    //   .get<ICountryResponse>(`${this.apiUrl}/countries`)
    //   .pipe(map(res => res.response))
    
    return of(countries)
  }

  public getLeagues(countryCode: string): Observable<ILeague[]> {
    // return this.http
    //   .get<ILeagueResponse>(`${this.apiUrl}/leagues?code=${countryCode}`)
    //   .pipe(map(res => res.response.map(item => item.league)))

    const newLeagues = leagues.map((item: any) => item.league)
    return of(newLeagues)
  }

  public getTeams(leagueCode: string): Observable<ITeam[]> {
    // return this.http
    //   .get<ITeamResponse>(`${this.apiUrl}/teams?league=${leagueCode}&season=${this.season}`)
    //   .pipe(map(res => res.response.map(item => item.team)))

    const newTeams = teams.map((item: any) => item.team)
    return of(newTeams)
  }

  public getPlayers(teamCode: number): Observable<IPlayer[]> {
    // return this.http
    //   .get<IPlayerResponse>(`${this.apiUrl}/players?team=${teamCode}&season=${this.season}`)
    //   .pipe(map(res => res.response.map(item => item.player)))

    const newPlayers = players.map(item => item.player)
    return of(newPlayers)
  }

  public getStatics(teamCode: number, leagueCode: string): Observable<IStatics> {
    // return this.http
    //   .get<IStaticsResponse>(`${this.apiUrl}/teams/statistics?team=${teamCode}&league=${leagueCode}&season=${this.season}`)
    //   .pipe(map(res => res.response))

    const newStatics: IStatics = statics
    return of(newStatics)
  }
}
