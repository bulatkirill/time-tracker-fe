import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpService} from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private httpService: HttpService) {
  }

  getDevices(): Observable<Device[]> {
    return this.httpService.get('machines');
  }

  getDevice(id): Observable<Device> {
    return this.httpService.get('machines/' + id);
  }
}
