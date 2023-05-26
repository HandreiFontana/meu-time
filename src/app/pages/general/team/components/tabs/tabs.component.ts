import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Subscription, concat, finalize, forkJoin, map, merge } from 'rxjs';
import { FootballApiService, IPlayer, IStatics } from 'src/app/services/football-api.service';

Chart.register(...registerables)

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, OnDestroy {  
  public players: IPlayer[] = []
  public statics!: IStatics
  public goalsChart!: Chart
  public isLoading = false

  @Input('team-value') teamCode!: number
  @Input('league-code') leagueCode!: string

  private subscriptions = new Subscription()

  constructor(private footballApi: FootballApiService) { }

  ngOnInit(): void {
    this.initialLoad()
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

  public selectedTab: number = 0

  public openTab(index: number) {
    this.selectedTab = index

    if (index === 1) {
      setTimeout(() => {
        this.loadGoalsChartData()
      })
    }
  }

  private initialLoad() {
    this.toggleLoading()

    const players = this.footballApi
      .getPlayers(this.teamCode)
      .pipe(map(players => this.players = players))

    const statics = this.footballApi
      .getStatics(this.teamCode, this.leagueCode)
      .pipe(map(statics => this.statics = statics))

    this.subscriptions.add(
      forkJoin([ players, statics ])
        .pipe(finalize(() => this.toggleLoading()))
        .subscribe()
    )
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

  private toggleLoading() {
    this.isLoading = !this.isLoading
  }
}
