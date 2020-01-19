import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TabService} from '../../service/tab/tab.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, OnChanges {

  tabs: Tab[] = [];

  @Input() sessionId: number;

  // currentTab: Tab = new Tab();

  constructor(private tabService: TabService) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if ('sessionId' === propName) {
        const newSessionId = changes[propName];
        this.loadTabs(newSessionId.currentValue);
        break;
      }
    }
  }

  private loadTabs(sessionId: number): void {
    if (sessionId != null) {
      this.tabService.getTabsBySessionId(sessionId).subscribe((tabs: Tab[]) => {
        this.tabs = tabs;
      });
    }
  }

  createTab() {
    // if (this.currentTab && this.currentTab.title !== '' && this.currentTab.url !== '') {
    //   this.tabService.createTabForSession(this.sessionId, this.currentTab);
    // }
  }
}
