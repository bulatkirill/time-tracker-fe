import {Injectable} from '@angular/core';
import {HttpService} from '../http/http.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TimeEntryService {

  constructor(private httpService: HttpService) {
  }

  getTimeEntries(): Observable<TimeEntry[]> {
    const timeEntries = this.httpService.get('timeEntry');
    return timeEntries.pipe(
      map((data: TimeEntry[]) => {
        data.forEach(this.dateMapper);
        return data;
      })
    );
  }

  private dateMapper(timeEntry) {
    timeEntry.dateOpen = new Date(timeEntry.dateOpen);
    timeEntry.dateClosed = new Date(timeEntry.dateClosed);
    timeEntry.updatedAt = new Date(timeEntry.updatedAt);
    timeEntry.createdAt = new Date(timeEntry.createdAt);
  }

}
