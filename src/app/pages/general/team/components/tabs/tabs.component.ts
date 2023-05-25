import { Component, Input } from '@angular/core';
import { FootballApiService, IPlayer, IStatics } from 'src/app/services/football-api.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  public players: IPlayer[] = []
  public statics!: IStatics

  @Input('team-value') teamCode!: string

  constructor(private footballApi: FootballApiService) {
    this.loadPlayers()
    this.loadStatics()
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

  private loadStatics() {
    this.footballApi
      .getStatics(this.teamCode)
      .subscribe(statics => this.statics = statics)
  }
}
