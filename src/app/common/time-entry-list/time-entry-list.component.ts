import {Component, Input, OnInit} from '@angular/core';
import {KeyValue} from '@angular/common';

@Component({
  selector: 'app-time-entry-list',
  templateUrl: './time-entry-list.component.html',
  styleUrls: ['./time-entry-list.component.scss']
})
export class TimeEntryListComponent implements OnInit {

  private parsedTimeEntries: {
    [date: string]: TimeEntry[]
  } = {};

  private timeEntries: TimeEntry[];

  @Input()
  set timeEntriesInput(timeEntries: TimeEntry[]) {
    timeEntries.forEach(value => {
      const dateOpen = value.dateOpen.toDateString();
      this.parsedTimeEntries[dateOpen] ? this.parsedTimeEntries[dateOpen].push(value) : this.parsedTimeEntries[dateOpen] = [value];
    });
    this.timeEntries = timeEntries;
  }

  constructor() {
  }

  ngOnInit() {
  }

  keyAscOrder(a: KeyValue<string, TimeEntry[]>, b: KeyValue<string, TimeEntry[]>): number {
    const dateFirst = new Date(a.key);
    const dateSecond = new Date(b.key);
    return dateFirst > dateSecond ? -1 : dateFirst === dateSecond ? 0 : 1;
  }

}
