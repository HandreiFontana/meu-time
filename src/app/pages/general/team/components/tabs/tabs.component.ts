import { Component, Input } from '@angular/core';
import { ExpansibleCardOption } from 'src/app/components/expansible-card/expansible-card.component';
import { FootballApiService, IPlayer } from 'src/app/services/football-api.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  public players: IPlayer[] = []

  @Input('team-value') teamCode!: string

  constructor(private footballApi: FootballApiService) {
    this.loadPlayers()
  }

  public selectedTab: number = 0

  public openTab(index: number) {
    this.selectedTab = index
  }

  private loadPlayers() {
    this.footballApi
      .getPlayers(this.teamCode)
      .subscribe(players => this.players = players)
  }
}
