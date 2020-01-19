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

}
