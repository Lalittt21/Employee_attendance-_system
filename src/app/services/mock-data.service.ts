import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { AttendanceRecord } from '../models/attendance.model';
import { LeaveRequest } from '../models/leave.model';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  // Mock employees data
  private employees: Employee[] = [
    {
      id: 1,
      name: 'John Doe',
      position: 'Software Engineer',
      department: 'IT',
      email: 'john.doe@company.com',
      phone: '9876543210',
      dateOfJoining: '2021-05-15'
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Product Manager',
      department: 'Product',
      email: 'jane.smith@company.com',
      phone: '9876543211',
      dateOfJoining: '2020-08-22'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      position: 'HR Manager',
      department: 'HR',
      email: 'mike.johnson@company.com',
      phone: '9876543212',
      dateOfJoining: '2019-03-10'
    },
    {
      id: 4,
      name: 'Sarah Williams',
      position: 'UI/UX Designer',
      department: 'Design',
      email: 'sarah.williams@company.com',
      phone: '9876543213',
      dateOfJoining: '2021-09-05'
    },
    {
      id: 5,
      name: 'David Brown',
      position: 'Senior Developer',
      department: 'IT',
      email: 'david.brown@company.com',
      phone: '9876543214',
      dateOfJoining: '2018-01-20'
    },
    {
      id: 6,
      name: 'Emily Davis',
      position: 'Finance Analyst',
      department: 'Finance',
      email: 'emily.davis@company.com',
      phone: '9876543215',
      dateOfJoining: '2022-02-14'
    }
  ];

  private attendanceRecords: AttendanceRecord[] = [];

  private leaveRequests: LeaveRequest[] = [
    {
      id: 1,
      employeeId: 1,
      employeeName: 'John Doe',
      leaveType: 'Annual Leave',
      startDate: '2026-02-10',
      endDate: '2026-02-12',
      reason: 'Personal work',
      status: 'Pending'
    },
    {
      id: 2,
      employeeId: 2,
      employeeName: 'Jane Smith',
      leaveType: 'Sick Leave',
      startDate: '2026-01-25',
      endDate: '2026-01-26',
      reason: 'Medical appointment',
      status: 'Approved'
    },
    {
      id: 3,
      employeeId: 3,
      employeeName: 'Mike Johnson',
      leaveType: 'Annual Leave',
      startDate: '2026-03-01',
      endDate: '2026-03-05',
      reason: 'Family vacation',
      status: 'Pending'
    },
    {
      id: 4,
      employeeId: 4,
      employeeName: 'Sarah Williams',
      leaveType: 'Maternity Leave',
      startDate: '2026-04-15',
      endDate: '2026-07-15',
      reason: 'Maternity',
      status: 'Approved'
    },
    {
      id: 5,
      employeeId: 5,
      employeeName: 'David Brown',
      leaveType: 'Casual Leave',
      startDate: '2026-02-05',
      endDate: '2026-02-05',
      reason: 'Personal errand',
      status: 'Rejected'
    }
  ];

  constructor() {
    this.initializeAttendanceRecords();
  }

  private initializeAttendanceRecords(): void {
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().split('T')[0];
    const dayBefore = new Date(new Date().setDate(new Date().getDate() - 2)).toISOString().split('T')[0];

    this.attendanceRecords = [
      { id: 1, employeeId: 1, employeeName: 'John Doe', date: today, status: 'Present' },
      { id: 2, employeeId: 2, employeeName: 'Jane Smith', date: today, status: 'Present' },
      { id: 3, employeeId: 3, employeeName: 'Mike Johnson', date: today, status: 'Absent' },
      { id: 4, employeeId: 4, employeeName: 'Sarah Williams', date: today, status: 'Present' },
      { id: 5, employeeId: 5, employeeName: 'David Brown', date: today, status: 'Present' },
      { id: 6, employeeId: 6, employeeName: 'Emily Davis', date: today, status: 'Absent' },
      { id: 7, employeeId: 1, employeeName: 'John Doe', date: yesterday, status: 'Present' },
      { id: 8, employeeId: 2, employeeName: 'Jane Smith', date: yesterday, status: 'Absent' },
      { id: 9, employeeId: 3, employeeName: 'Mike Johnson', date: yesterday, status: 'Present' },
      { id: 10, employeeId: 4, employeeName: 'Sarah Williams', date: dayBefore, status: 'Present' }
    ];
  }

  getEmployees(): Employee[] {
    return this.employees;
  }

  getAttendanceRecords(): AttendanceRecord[] {
    return this.attendanceRecords;
  }

  getLeaveRequests(): LeaveRequest[] {
    return this.leaveRequests;
  }
}