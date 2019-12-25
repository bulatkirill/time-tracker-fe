import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TimeEntriesComponent} from './time-entries/time-entries.component';
import {DevicesComponent} from './devices/devices.component';
import {DeviceDetailComponent} from "./device-detail/device-detail.component";


const routes: Routes = [
  {
    path: 'time-entries', component: TimeEntriesComponent
  },
  {
    path: 'devices', component: DevicesComponent
  },
  {
    path: 'devices/:id', component: DeviceDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
