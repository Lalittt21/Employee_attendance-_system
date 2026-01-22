import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.fetchEmployees();
  }

  fetchEmployees(): void {
    this.employeeService.getEmployees().subscribe((data: Employee[]) => {
      this.employees = data;
    });
  }

  addEmployee(employee?: Employee): void {
    if (!employee) {
      // Create a new empty employee if none provided
      const newEmployee: Employee = {
        id: Math.max(...this.employees.map(e => e.id), 0) + 1,
        name: 'New Employee',
        position: 'Position',
        department: 'Department',
        email: 'email@example.com',
        phone: '0000000000',
        dateOfJoining: new Date().toISOString().split('T')[0]
      };
      employee = newEmployee;
    }
    this.employeeService.addEmployee(employee).subscribe(() => {
      this.fetchEmployees();
    });
  }

  updateEmployee(employee: Employee): void {
    this.employeeService.updateEmployee(employee).subscribe(() => {
      this.fetchEmployees();
    });
  }

  deleteEmployee(employeeId: number): void {
    this.employeeService.deleteEmployee(employeeId).subscribe(() => {
      this.fetchEmployees();
    });
  }
}