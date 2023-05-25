import { Component, Input } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { FootballApiService, IPlayer, IStatics } from 'src/app/services/football-api.service';

Chart.register(...registerables)

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {  
  public players: IPlayer[] = []
  public statics!: IStatics
  public goalsChart!: Chart

  @Input('team-value') teamCode!: string

  constructor(private footballApi: FootballApiService) {
    this.loadPlayers()
    this.loadStatics()
  }

  public selectedTab: number = 0

  public openTab(index: number) {
    this.selectedTab = index

    if (index === 1) {
      setTimeout(() => {
        this.loadGoalsChartData()
      }, 300)
    }
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

  private loadGoalsChartData() {
    const data = {
      type: 'doughnut',
      data: {
        labels: [
          "0-15",
          "16-30",
          "31-45",
          "46-60",
          "61-75",
          "76-90",
          "91-105",
          "106-120",
        ],
        datasets: [{
            label: 'Total',
            data: [
              this.statics.goals.for.minute["0-15"].total ?? 0,
              this.statics.goals.for.minute["16-30"].total ?? 0,
              this.statics.goals.for.minute["31-45"].total ?? 0,
              this.statics.goals.for.minute["46-60"].total ?? 0,
              this.statics.goals.for.minute["61-75"].total ?? 0,
              this.statics.goals.for.minute["76-90"].total ?? 0,
              this.statics.goals.for.minute["91-105"].total ?? 0,
              this.statics.goals.for.minute["106-120"].total ?? 0,
            ],
            hoverOffset: 4
          }]
      }
    }

    this.loadGoalsChart(data)
  }

  private loadGoalsChart(data: any) {
    const chart = document.getElementById('chart') as HTMLCanvasElement
    
    this.goalsChart = new Chart(chart, data)
  }
}
