import {Injectable} from '@angular/core';
import {HttpService} from '../http/http.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabService {

  constructor(private httpService: HttpService) {
  }

  getTabsBySessionId(sessionId: number): Observable<Tab[]> {
    return this.httpService.get(`/sessions/${sessionId}/tabs`);
  }

  createTabForSession(sessionId: number, tab: Tab) {
    this.httpService.post(`/sessions/${sessionId}/tabs`, JSON.stringify(tab));
  }

}
