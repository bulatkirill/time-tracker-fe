import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {TimeEntriesComponent} from './time-entries/time-entries.component';
import {HttpClientModule} from '@angular/common/http';
import { TimeEntryListComponent } from './common/time-entry-list/time-entry-list.component';
import { TimeEntryRowComponent } from './common/time-entry-list/time-entry-row/time-entry-row.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TimeEntriesComponent,
    TimeEntryListComponent,
    TimeEntryRowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
