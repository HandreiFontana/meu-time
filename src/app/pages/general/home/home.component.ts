import { Component } from '@angular/core';
import { finalize } from 'rxjs';
import { ExpansibleCardOption } from 'src/app/components/expansible-card/expansible-card.component';
import { FootballApiService, ICountry } from 'src/app/services/football-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private footballApi: FootballApiService) {
    this.populateCountries()
  }

  public expandedCard?: string | null

  public countrySelected?: ExpansibleCardOption
  public countries: ExpansibleCardOption[] = []

  public leagueSelected?: ExpansibleCardOption
  public leagues: ExpansibleCardOption[] = []

  private populateCountries() {
    this.footballApi
      .getCountries()
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
  }

  private populateLeagues(countrySelected: string) {
    this.footballApi
      .getLeagues(countrySelected)
      .pipe(finalize(() => this.expandedCard = 'leagues'))
      .subscribe(leagues => {
        leagues.map(league => {
          this.leagues.push({
            label: league.name,
            action: this.leagueOptionClick.bind(this),
            image: league.logo
          })
        })
      })
  }

  public toggleExpandedCard(card: string) {
    this.expandedCard = card !== this.expandedCard ? card : null
  }

  public cardIsExpanded(value: string): boolean {
    return this.expandedCard === value
  }

  private countryOptionClick(countryOption: ExpansibleCardOption) {
    this.countrySelected = countryOption
    this.populateLeagues(countryOption.options!.code)
  }

  private leagueOptionClick(leagueOption: ExpansibleCardOption) {
    this.leagueSelected = leagueOption
    this.expandedCard = 'teams'
  }
}
