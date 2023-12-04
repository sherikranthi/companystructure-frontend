import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-agile-standup-reminders',
  templateUrl: './agile-standup-reminders.component.html',
  styleUrls: ['./agile-standup-reminders.component.css']
})
export class AgileStandupRemindersComponent implements OnInit {

  reminders: string[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.getReminders();
  }

  getReminders() {
    this.employeeService.getAgileStandUpReminders()
      .subscribe(data => {
        this.reminders = data;
        console.log(this.reminders)
      });
  }
}
