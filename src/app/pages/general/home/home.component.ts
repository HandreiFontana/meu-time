import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public expandedCard?: string | null

  public toggleExpandedCard(card: string) {
    this.expandedCard = card !== this.expandedCard ? card : null
  }

  cardIsExpanded(value: string): boolean {
    return this.expandedCard === value
  }
}
