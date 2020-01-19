import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {TimeEntriesComponent} from './time-entries/time-entries.component';
import {HttpClientModule} from '@angular/common/http';
import {TimeEntryListComponent} from './common/time-entry-list/time-entry-list.component';
import {TimeEntryRowComponent} from './common/time-entry-list/time-entry-row/time-entry-row.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TimeEntryDetailModalComponent} from './common/time-entry-list/time-entry-detail-modal/time-entry-detail-modal.component';
import { DevicesComponent } from './devices/devices.component';
import { DeviceListComponent } from './common/device-list/device-list.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { HomeComponent } from './main/home/home.component';
import { SidebarComponent } from './main/sidebar/sidebar.component';
import { SessionsComponent } from './main/sessions/sessions.component';
import { TabsComponent } from './main/tabs/tabs.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TimeEntriesComponent,
    TimeEntryListComponent,
    TimeEntryRowComponent,
    TimeEntryDetailModalComponent,
    DevicesComponent,
    DeviceListComponent,
    DeviceDetailComponent,
    HomeComponent,
    SidebarComponent,
    SessionsComponent,
    TabsComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    TimeEntryDetailModalComponent
  ]
})
export class AppModule {
}
