import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private SERVER_URL = 'http://localhost:5000/';

  constructor(private httpClient: HttpClient) {
  }

  get(path: string): Observable<any> {
    return this.httpClient.get(`${this.SERVER_URL}${path}`);
  }
}
