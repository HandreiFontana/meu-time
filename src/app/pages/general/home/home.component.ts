import { Component, OnDestroy } from '@angular/core';
import { Subscription, finalize } from 'rxjs';
import { ExpansibleCardOption } from 'src/app/components/expansible-card/expansible-card.component';
import { FootballApiService } from 'src/app/services/football-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {
  public isLoading = false

  constructor(private footballApi: FootballApiService) {
    this.populateCountries()
  }

  private subscriptions = new Subscription()

  ngOnDestroy() {
    this.subscriptions.unsubscribe()
  }

  public expandedCard?: string | null

  public countrySelected?: ExpansibleCardOption
  public countries: ExpansibleCardOption[] = []

  public leagueSelected?: ExpansibleCardOption
  public leagues: ExpansibleCardOption[] = []
  
  public teamSelected?: ExpansibleCardOption
  public teams: ExpansibleCardOption[] = []

  private populateCountries() {
    this.toggleLoading()

    this.subscriptions.add(
      this.footballApi
        .getCountries()
        .pipe(finalize(() => {
          this.toggleLoading()
        }))
        .subscribe(countries => {
          countries.map(country => {
            this.countries.push({
              label: country.name,
              action: this.countryOptionClick.bind(this),
              image: country.flag,
              options: { code: country.code }
            })
          })
        })
    )
  }

  private populateLeagues(countrySelected: string) {
    this.toggleLoading()
    
    this.leagues = []
    this.subscriptions.add(
      this.footballApi
        .getLeagues(countrySelected)
        .pipe(finalize(() => {
          this.toggleLoading()
          this.expandedCard = 'leagues'
        }))
        .subscribe(leagues => {
          leagues.map(league => {
            this.leagues.push({
              label: league.name,
              action: this.leagueOptionClick.bind(this),
              image: league.logo,
              options: { code: league.id }
            })
          })
        })
    )
  }

  private populateTeams(leagueSelected: string) {
    this.toggleLoading()
    
    this.teams = []
    this.subscriptions.add(
      this.footballApi
        .getTeams(leagueSelected)
        .pipe(finalize(() => {
          this.toggleLoading()
          this.expandedCard = 'teams'
        }))
        .subscribe(teams => {
          teams.map(team => {
            this.teams.push({
              label: team.name,
              action: this.teamOptionClick.bind(this),
              image: team.logo,
              options: { code: team.id }
            })
          })
        })
    )
  }

  public toggleExpandedCard(card: string) {
    this.expandedCard = card !== this.expandedCard ? card : null
  }

  public cardIsExpanded(value: string): boolean {
    return this.expandedCard === value
  }

  public countryOptionClick(countryOption: ExpansibleCardOption) {
    this.countrySelected = countryOption
    this.leagueSelected = undefined
    this.populateLeagues(countryOption.options!.code)
  }

  public leagueOptionClick(leagueOption: ExpansibleCardOption) {
    this.leagueSelected = leagueOption
    this.populateTeams(leagueOption.options!.code)
  }

  public teamOptionClick(teamOption: ExpansibleCardOption) {
    this.teamSelected = teamOption
  }

  public unselectTeam() {
    this.teamSelected = undefined
  }

  public changeSeason() {
    this.leagueSelected = undefined
    this.expandedCard = 'league'
  }

  private toggleLoading() {
    this.isLoading = !this.isLoading
  }
}
