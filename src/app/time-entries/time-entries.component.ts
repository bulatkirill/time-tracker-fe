import {Component, OnInit} from '@angular/core';
import {TimeEntryService} from '../service/time-entry/time-entry.service';

@Component({
  selector: 'app-time-entries',
  templateUrl: './time-entries.component.html',
  styleUrls: ['./time-entries.component.scss']
})
export class TimeEntriesComponent implements OnInit {

  timeEntries: TimeEntry[] = [];

  constructor(private timeEntryService: TimeEntryService) {
  }

  async ngOnInit() {
    this.timeEntryService.getTimeEntries().subscribe((timeEntries: TimeEntry[]) => {
      this.timeEntries = timeEntries;
    });
  }

}
