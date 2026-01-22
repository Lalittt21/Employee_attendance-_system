import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LeaveRequest } from '../models/leave.model';
import { MockDataService } from './mock-data.service';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  private leaveSubject = new BehaviorSubject<LeaveRequest[]>([]);
  public leave$ = this.leaveSubject.asObservable();

  constructor(private mockDataService: MockDataService) {
    this.loadLeaveRequests();
  }

  private loadLeaveRequests(): void {
    const requests = this.mockDataService.getLeaveRequests();
    this.leaveSubject.next(requests);
  }

  getLeaveRequests(): Observable<LeaveRequest[]> {
    return this.leave$;
  }

  getPendingLeaveRequests(): Observable<LeaveRequest[]> {
    return new Observable(observer => {
      const requests = this.leaveSubject.value;
      const pending = requests.filter(req => req.status === 'Pending');
      observer.next(pending);
      observer.complete();
    });
  }

  getLeaveRequestsByEmployee(employeeId: number): Observable<LeaveRequest[]> {
    return new Observable(observer => {
      const requests = this.leaveSubject.value;
      const filtered = requests.filter(req => req.employeeId === employeeId);
      observer.next(filtered);
      observer.complete();
    });
  }

  submitLeaveRequest(leaveRequest: LeaveRequest): Observable<LeaveRequest> {
    return new Observable(observer => {
      const requests = this.leaveSubject.value;
      const newRequest: LeaveRequest = {
        ...leaveRequest,
        id: requests.length > 0 ? Math.max(...requests.map(r => r.id || 0)) + 1 : 1,
        status: 'Pending'
      };
      requests.push(newRequest);
      this.leaveSubject.next([...requests]);
      observer.next(newRequest);
      observer.complete();
    });
  }

  updateLeaveStatus(id: number, status: 'Approved' | 'Rejected'): Observable<LeaveRequest | undefined> {
    return new Observable(observer => {
      const requests = this.leaveSubject.value;
      const index = requests.findIndex(req => req.id === id);
      if (index !== -1) {
        requests[index].status = status;
        this.leaveSubject.next([...requests]);
        observer.next(requests[index]);
      }
      observer.complete();
    });
  }

  deleteLeaveRequest(id: number): Observable<boolean> {
    return new Observable(observer => {
      const requests = this.leaveSubject.value;
      const index = requests.findIndex(req => req.id === id);
      if (index !== -1) {
        requests.splice(index, 1);
        this.leaveSubject.next([...requests]);
      }
      observer.next(true);
      observer.complete();
    });
  }
}