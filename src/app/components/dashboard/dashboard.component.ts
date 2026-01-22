import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { AttendanceService } from '../../services/attendance.service';
import { LeaveService } from '../../services/leave.service';
import { Employee } from '../../models/employee.model';
import { AttendanceRecord } from '../../models/attendance.model';
import { LeaveRequest } from '../../models/leave.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class DashboardComponent implements OnInit {
  totalEmployees: number = 0;
  todayPresentCount: number = 0;
  todayAbsentCount: number = 0;
  pendingLeaveRequests: number = 0;
  approvedLeaveRequests: number = 0;

  constructor(
    private employeeService: EmployeeService,
    private attendanceService: AttendanceService,
    private leaveService: LeaveService
  ) {}

  ngOnInit(): void {
    this.fetchDashboardData();
  }

  fetchDashboardData(): void {
    // Fetch total employees
    this.employeeService.getEmployees().subscribe((employees: Employee[]) => {
      this.totalEmployees = employees.length;
    });

    // Fetch today's attendance
    this.attendanceService.getTodayAttendance().subscribe((records: AttendanceRecord[]) => {
      this.todayPresentCount = records.filter((r: AttendanceRecord) => r.status === 'Present').length;
      this.todayAbsentCount = records.filter((r: AttendanceRecord) => r.status === 'Absent').length;
    });

    // Fetch leave requests
    this.leaveService.getLeaveRequests().subscribe((requests: LeaveRequest[]) => {
      this.pendingLeaveRequests = requests.filter((r: LeaveRequest) => r.status === 'Pending').length;
      this.approvedLeaveRequests = requests.filter((r: LeaveRequest) => r.status === 'Approved').length;
    });
  }
}