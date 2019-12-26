import {Component, OnInit} from '@angular/core';
import {DeviceService} from '../../service/device/device.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  devices: Device[] = [];

  constructor(private deviceService: DeviceService) {
  }

  ngOnInit() {
    this.deviceService.getDevices().subscribe((devices: Device[]) => {
      this.devices = devices;
    });
  }

}
