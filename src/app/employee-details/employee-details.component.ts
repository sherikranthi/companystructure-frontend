import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent {
  first_name: string = '';
  last_name: string = '';
  employeeDetails: any;

  constructor(private employeeService: EmployeeService) {}

  fetchEmployeeDetails() {
    this.employeeService.getEmployeeDetails(this.first_name, this.last_name).subscribe(
      (data) => {
        this.employeeDetails = data;
        console.log(data)
      },
      (error) => {
        console.error('Error fetching employee details:', error);
      }
    );
  }

  addEmployee() {
    const employee = {
      first_name: this.first_name,
      last_name: this.last_name,
      // Add other properties based on your Employee model
    };

    this.employeeService.addEmployeeDetails(employee).subscribe(
      (data) => {
        console.log('Employee added successfully:', data);
      },
      (error) => {
        console.error('Error adding employee:', error);
      }
    );
  }
}
