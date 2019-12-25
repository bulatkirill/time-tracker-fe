import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor() {
  }

  getDevices() {
    const devices = [];
    devices.push({
      id: 1,
      name: 'Temporary'
    });
    return devices;
  }
}
