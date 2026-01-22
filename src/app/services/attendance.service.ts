import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AttendanceRecord } from '../models/attendance.model';
import { MockDataService } from './mock-data.service';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  private attendanceSubject = new BehaviorSubject<AttendanceRecord[]>([]);
  public attendance$ = this.attendanceSubject.asObservable();

  constructor(private mockDataService: MockDataService) {
    this.loadAttendanceRecords();
  }

  private loadAttendanceRecords(): void {
    const records = this.mockDataService.getAttendanceRecords();
    this.attendanceSubject.next(records);
  }

  getAttendanceRecords(): Observable<AttendanceRecord[]> {
    return this.attendance$;
  }

  markAttendance(record: AttendanceRecord): Observable<AttendanceRecord> {
    return new Observable(observer => {
      const records = this.attendanceSubject.value;
      const newRecord: AttendanceRecord = {
        ...record,
        id: records.length > 0 ? Math.max(...records.map(r => r.id || 0)) + 1 : 1
      };
      records.push(newRecord);
      this.attendanceSubject.next([...records]);
      observer.next(newRecord);
      observer.complete();
    });
  }

  getAttendanceByEmployeeId(employeeId: number): Observable<AttendanceRecord[]> {
    return new Observable(observer => {
      const records = this.attendanceSubject.value;
      const filtered = records.filter(record => record.employeeId === employeeId);
      observer.next(filtered);
      observer.complete();
    });
  }

  getAttendanceByDate(date: string): Observable<AttendanceRecord[]> {
    return new Observable(observer => {
      const records = this.attendanceSubject.value;
      const filtered = records.filter(record => record.date === date);
      observer.next(filtered);
      observer.complete();
    });
  }

  getTodayAttendance(): Observable<AttendanceRecord[]> {
    const today = new Date().toISOString().split('T')[0];
    return this.getAttendanceByDate(today);
  }

  updateAttendance(record: AttendanceRecord): Observable<AttendanceRecord> {
    return new Observable(observer => {
      const records = this.attendanceSubject.value;
      const index = records.findIndex(r => r.id === record.id);
      if (index !== -1) {
        records[index] = record;
        this.attendanceSubject.next([...records]);
      }
      observer.next(record);
      observer.complete();
    });
  }
}