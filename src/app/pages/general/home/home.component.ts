import { Component } from '@angular/core';
import { ExpansibleCardOption } from 'src/app/components/expansible-card/expansible-card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public expandedCard?: string | null

  public countries: ExpansibleCardOption[] = [
    { label: 'Alemanha', action: this.cardOptionClick.bind(this) },
    { label: 'Itália', action: this.cardOptionClick.bind(this) },
    { label: 'Espanha', action: this.cardOptionClick.bind(this) },
    { label: 'Inglaterra', action: this.cardOptionClick.bind(this) },
    { label: 'Brasil', action: this.cardOptionClick.bind(this) },
    { label: 'França', action: this.cardOptionClick.bind(this) },
  ]

  public toggleExpandedCard(card: string) {
    this.expandedCard = card !== this.expandedCard ? card : null
  }

  public cardIsExpanded(value: string): boolean {
    return this.expandedCard === value
  }

  private cardOptionClick(cardOption: ExpansibleCardOption) {
    console.log(cardOption)
  }
}
