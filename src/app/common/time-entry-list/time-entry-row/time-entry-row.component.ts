import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-time-entry-row',
  templateUrl: './time-entry-row.component.html',
  styleUrls: ['./time-entry-row.component.scss']
})
export class TimeEntryRowComponent implements OnInit {

  @Input() timeEntry: TimeEntry;

  constructor() {
  }

  ngOnInit() {
  }

}
