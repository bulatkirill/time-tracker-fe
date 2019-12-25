import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {DeviceService} from '../service/device/device.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.scss']
})
export class DeviceDetailComponent implements OnInit {

  private device: Device;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private deviceService: DeviceService) {
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.deviceService.getDevice(params.get('id')))
    ).subscribe((device: Device) => {
      this.device = device;
    });
  }

}
