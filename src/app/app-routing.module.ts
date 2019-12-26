import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TimeEntriesComponent} from './time-entries/time-entries.component';
import {DevicesComponent} from './devices/devices.component';
import {DeviceDetailComponent} from "./device-detail/device-detail.component";
import {HomeComponent} from "./main/home/home.component";


const routes: Routes = [
  {
    path: 'time-entries', component: TimeEntriesComponent
  },
  {
    path: 'devices', component: DevicesComponent
  },
  {
    path: 'devices/:id', component: DeviceDetailComponent
  },
  {
    path: 'home', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
