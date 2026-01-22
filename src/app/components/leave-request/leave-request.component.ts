import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LeaveService } from '../../services/leave.service';
import { EmployeeService } from '../../services/employee.service';
import { LeaveRequest } from '../../models/leave.model';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class LeaveRequestComponent implements OnInit {
  leaveRequest: LeaveRequest = {
    employeeId: 0,
    leaveType: '',
    startDate: '',
    endDate: '',
    reason: '',
    status: 'Pending'
  };

  employees: Employee[] = [];
  leaveTypes = ['Annual Leave', 'Sick Leave', 'Casual Leave', 'Maternity Leave', 'Paternity Leave'];
  myLeaveRequests: LeaveRequest[] = [];
  selectedEmployeeId: number | null = null;

  constructor(
    private leaveService: LeaveService,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.loadEmployees();
    this.loadMyLeaveRequests();
  }

  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe(employees => {
      this.employees = employees;
    });
  }

  loadMyLeaveRequests(): void {
    this.leaveService.getLeaveRequests().subscribe(requests => {
      this.myLeaveRequests = requests;
    });
  }

  submitLeaveRequest(): void {
    if (!this.validateForm()) {
      alert('Please fill all fields correctly');
      return;
    }

    if (!this.selectedEmployeeId) {
      alert('Please select an employee');
      return;
    }

    const employee = this.employees.find(e => e.id === this.selectedEmployeeId);
    const request: LeaveRequest = {
      employeeId: this.selectedEmployeeId,
      employeeName: employee?.name,
      leaveType: this.leaveRequest.leaveType,
      startDate: this.leaveRequest.startDate,
      endDate: this.leaveRequest.endDate,
      reason: this.leaveRequest.reason,
      status: 'Pending'
    };

    this.leaveService.submitLeaveRequest(request).subscribe(() => {
      alert('Leave request submitted successfully!');
      this.resetForm();
      this.loadMyLeaveRequests();
    });
  }

  validateForm(): boolean {
    return !!(
      this.leaveRequest.leaveType &&
      this.leaveRequest.startDate &&
      this.leaveRequest.endDate &&
      this.leaveRequest.reason &&
      this.leaveRequest.startDate <= this.leaveRequest.endDate
    );
  }

  resetForm(): void {
    this.leaveRequest = {
      employeeId: 0,
      leaveType: '',
      startDate: '',
      endDate: '',
      reason: '',
      status: 'Pending'
    };
    this.selectedEmployeeId = null;
  }

  cancelLeaveRequest(id: number | undefined): void {
    if (id && confirm('Are you sure you want to cancel this request?')) {
      this.leaveService.deleteLeaveRequest(id).subscribe(() => {
        alert('Leave request cancelled');
        this.loadMyLeaveRequests();
      });
    }
  }
}