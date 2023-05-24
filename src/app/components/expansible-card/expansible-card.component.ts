import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface ExpansibleCardOption {
  label: string
  action: Function
}

@Component({
  selector: 'app-expansible-card',
  templateUrl: './expansible-card.component.html',
  styleUrls: ['./expansible-card.component.scss']
})
export class ExpansibleCardComponent {

  @Input('card-title') cardTitle!: string
  @Input('card-value') cardValue!: string
  @Input('card-is-expanded') cardIsExpanded: boolean = false
  @Input('options') options?: ExpansibleCardOption[]
  @Input('option-selected') optionSelected?: ExpansibleCardOption

  @Output('card-click') cardClick = new EventEmitter<string>()

  public onClick() {
    this.cardClick.emit(this.cardValue)
  }
}
