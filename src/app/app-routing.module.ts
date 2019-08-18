import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TimeEntriesComponent} from './time-entries/time-entries.component';


const routes: Routes = [
  {
    path: 'time-entries', component: TimeEntriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
