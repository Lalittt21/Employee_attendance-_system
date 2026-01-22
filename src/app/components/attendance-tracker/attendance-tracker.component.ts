import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AttendanceService } from '../../services/attendance.service';
import { EmployeeService } from '../../services/employee.service';
import { AttendanceRecord } from '../../models/attendance.model';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-attendance-tracker',
  templateUrl: './attendance-tracker.component.html',
  styleUrls: ['./attendance-tracker.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class AttendanceTrackerComponent implements OnInit {
  attendanceRecords: AttendanceRecord[] = [];
  todayAttendance: AttendanceRecord[] = [];
  employees: Employee[] = [];
  selectedDate: string = new Date().toISOString().split('T')[0];
  selectedEmployeeId: number | null = null;
  selectedStatus: 'Present' | 'Absent' | null = null;

  constructor(
    private attendanceService: AttendanceService,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.loadEmployees();
    this.loadTodayAttendance();
    this.loadAttendanceRecords();
  }

  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe((employees: Employee[]) => {
      this.employees = employees;
    });
  }

  loadTodayAttendance(): void {
    this.attendanceService.getTodayAttendance().subscribe((records: AttendanceRecord[]) => {
      this.todayAttendance = records;
    });
  }

  loadAttendanceRecords(): void {
    this.attendanceService.getAttendanceRecords().subscribe((records: AttendanceRecord[]) => {
      this.attendanceRecords = records;
    });
  }

  markAttendance(): void {
    if (this.selectedEmployeeId && this.selectedStatus) {
      const employee = this.employees.find(e => e.id === this.selectedEmployeeId);
      const record: AttendanceRecord = {
        employeeId: this.selectedEmployeeId,
        employeeName: employee?.name,
        date: this.selectedDate,
        status: this.selectedStatus
      };

      this.attendanceService.markAttendance(record).subscribe(() => {
        this.resetForm();
        this.loadTodayAttendance();
        this.loadAttendanceRecords();
        alert('Attendance marked successfully!');
      });
    }
  }

  resetForm(): void {
    this.selectedEmployeeId = null;
    this.selectedStatus = null;
    this.selectedDate = new Date().toISOString().split('T')[0];
  }

  getAttendanceByDate(date: string): void {
    this.attendanceService.getAttendanceByDate(date).subscribe((records: AttendanceRecord[]) => {
      this.attendanceRecords = records;
    });
  }

  onDateChange(): void {
    this.getAttendanceByDate(this.selectedDate);
  }
}