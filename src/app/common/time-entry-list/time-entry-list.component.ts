import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-time-entry-list',
  templateUrl: './time-entry-list.component.html',
  styleUrls: ['./time-entry-list.component.scss']
})
export class TimeEntryListComponent implements OnInit {

  @Input() timeEntries: TimeEntry[];

  constructor() {
  }

  ngOnInit() {
  }

}
