import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  headers = {
    'Content-Type': 'application/json',
  };

  private SERVER_URL = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {
  }

  get(path: string, headers?: HttpHeaders): Observable<any> {
    return this.httpClient.get(`${this.SERVER_URL}${path}`);
  }

  patch(path: string, body: string, headers?: HttpHeaders): Observable<any> {
    headers = this.createHeaders(headers);
    return this.httpClient.patch(`${this.SERVER_URL}${path}`, body, {headers});
  }

  post(path: string, body: string, headers?: HttpHeaders) {
    headers = this.createHeaders(headers);
    return this.httpClient.post(`${this.SERVER_URL}${path}`, body, {headers});
  }

  createHeaders(optionalHeaders: HttpHeaders) {
    let result = new HttpHeaders(this.headers);
    if (optionalHeaders) {
      optionalHeaders.keys().forEach((key) => {
        result = result.append(key, optionalHeaders.get(key));
      });
    }
    return result;
  }
}
