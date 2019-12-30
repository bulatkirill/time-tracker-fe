import {Injectable} from '@angular/core';
import {HttpService} from '../http/http.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private httpService: HttpService) {
  }

  getSessionsByBrowserId(browserId: number): Observable<Session[]> {
    return this.httpService.get(`/browsers/${browserId}/sessions`);
  }

  getSession(browserId, sessionId): Observable<Session> {
    return this.httpService.get(`/browsers/${browserId}/sessions/${sessionId}`);
  }

}
