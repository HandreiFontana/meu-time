import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  public selectedTab: number = 0

  public openTab(index: number) {
    this.selectedTab = index
  }
}
