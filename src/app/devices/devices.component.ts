import {Component, OnInit} from '@angular/core';
import {DeviceService} from '../service/device/device.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  devices: Device[] = [];

  constructor(private deviceService: DeviceService) {
  }

  async ngOnInit() {
    this.deviceService.getDevices().subscribe((devices: Device[]) => {
      this.devices = devices;
    });
  }

}
