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
}
