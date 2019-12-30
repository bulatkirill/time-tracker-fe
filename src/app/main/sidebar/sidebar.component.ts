import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DeviceService} from '../../service/device/device.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  devices: Device[] = [];

  @Output() selectedBrowserEmitter = new EventEmitter<Browser>();

  constructor(private deviceService: DeviceService) {
  }

  ngOnInit() {
    this.deviceService.getDevices().subscribe((devices: Device[]) => {
      this.devices = devices;
      for (const device of devices) {
        // select the first browser to show session for
        if (device.browsers != null && device.browsers.length !== 0) {
          this.selectedBrowserEmitter.emit(device.browsers[0]);
          break;
        }
      }
    });
  }

  onSelectedBrowser(browser: Browser) {
    console.log(`Browser with id = ${browser.id} and name = ${browser.name} was selected.`);
    this.selectedBrowserEmitter.emit(browser);
  }

}
