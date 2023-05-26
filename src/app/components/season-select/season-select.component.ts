import { Component } from '@angular/core';
import { FootballApiService } from 'src/app/services/football-api.service';

@Component({
  selector: 'app-season-select',
  templateUrl: './season-select.component.html',
  styleUrls: ['./season-select.component.scss']
})
export class SeasonSelectComponent {
  public modalIsOpen = false

  constructor(public footballApi: FootballApiService) { }

  public toggleModal() {
    this.modalIsOpen = !this.modalIsOpen
  }

  public seasonClick(season: number) {
    this.footballApi.changeSeason(season)
    this.modalIsOpen = false
  }
}
