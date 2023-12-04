import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AgileStandupRemindersComponent } from './agile-standup-reminders/agile-standup-reminders.component';

const routes: Routes = [
  { 
    path: 'employee-details', 
    component: EmployeeDetailsComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      // Add more child routes for EmployeeDetailsComponent if needed
    ]
  },
  { path: 'agile-standup-reminders', component: AgileStandupRemindersComponent },
  { path: '', redirectTo: '/employee-details', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
