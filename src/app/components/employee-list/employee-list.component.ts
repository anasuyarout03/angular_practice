import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  // providers: [EmployeeService]
})
export class EmployeeListComponent {

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {}

  employees: any = [];

  getAllEmps() {
    this.employees = this.employeeService.getAllEmployees();
  }
  getMaleEmps() {
    this.employees = this.employeeService.getMaleEmployees();
  }
  getFemaleEmps() {
    this.employees = this.employeeService.getFemaleEmployees();
  }
}
