import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  selectedBrowser: Browser;

  onSelectedBrowser(selectedBrowser: Browser) {
    console.log('Log in parent component');
    this.selectedBrowser = selectedBrowser;
  }

  constructor() {
  }

  ngOnInit() {
  }

  getSelectedBrowserId(): number {
    console.log(this.selectedBrowser);
    return this.selectedBrowser != null ? this.selectedBrowser.id : null;
  }

}
