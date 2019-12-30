import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  selectedBrowser: Browser;
  selectedSession: Session;

  onSelectedBrowser(selectedBrowser: Browser) {
    this.selectedBrowser = selectedBrowser;
  }

  onSelectedSession(selectedSession: Session) {
    console.log(`Session = ${selectedSession.id} is selected and propagated to parent component`);
    this.selectedSession = selectedSession;
  }

  constructor() {
  }

  ngOnInit() {
  }

  getSelectedBrowserId(): number {
    return this.selectedBrowser != null ? this.selectedBrowser.id : null;
  }

}
