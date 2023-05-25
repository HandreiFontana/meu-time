import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ExpansibleCardOption } from 'src/app/components/expansible-card/expansible-card.component';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  
  @Input('team-value') teamValue!: ExpansibleCardOption
  @Input('league-code') leagueCode?: string

  @Output('team-close') teamClose = new EventEmitter()

  public teamCloseEmit() {
    this.teamClose.emit()
  }
}
