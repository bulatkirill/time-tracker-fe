import {Injectable} from '@angular/core';
import {HttpService} from '../http/http.service';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TimeEntryService {

  constructor(private httpService: HttpService) {
  }

  getTimeEntries(): Observable<TimeEntry[]> {
    return this.httpService.get('timeEntry');
  }
}
