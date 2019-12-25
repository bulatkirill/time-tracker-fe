import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {

  private devices: Device[];

  @Input()
  set devicesInput(devices: Device[]) {
    devices.forEach(value => {
    });
    this.devices = devices;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
