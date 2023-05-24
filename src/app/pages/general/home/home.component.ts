import { Component } from '@angular/core';
import { ExpansibleCardOption } from 'src/app/components/expansible-card/expansible-card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public expandedCard?: string | null

  public countrySelected?: ExpansibleCardOption
  public countries: ExpansibleCardOption[] = [
    { label: 'Alemanha', action: this.countryOptionClick.bind(this) },
    { label: 'Itália', action: this.countryOptionClick.bind(this) },
    { label: 'Espanha', action: this.countryOptionClick.bind(this) },
    { label: 'Inglaterra', action: this.countryOptionClick.bind(this) },
    { label: 'Brasil', action: this.countryOptionClick.bind(this) },
    { label: 'França', action: this.countryOptionClick.bind(this) },
  ]

  public leagueSelected?: ExpansibleCardOption
  public leagues: ExpansibleCardOption[] = [
    { label: 'Bundesliga', action: this.leagueOptionClick.bind(this) },
    { label: 'Serie A', action: this.leagueOptionClick.bind(this) },
    { label: 'La Liga', action: this.leagueOptionClick.bind(this) },
    { label: 'Premier League', action: this.leagueOptionClick.bind(this) },
    { label: 'Brasileirão', action: this.leagueOptionClick.bind(this) },
    { label: 'Ligue 1', action: this.leagueOptionClick.bind(this) },
  ]

  public toggleExpandedCard(card: string) {
    this.expandedCard = card !== this.expandedCard ? card : null
  }

  public cardIsExpanded(value: string): boolean {
    return this.expandedCard === value
  }

  private countryOptionClick(countryOption: ExpansibleCardOption) {
    this.countrySelected = countryOption
    this.expandedCard = 'leagues'
  }

  private leagueOptionClick(leagueOption: ExpansibleCardOption) {
    this.leagueSelected = leagueOption
    this.expandedCard = 'teams'
  }
}
