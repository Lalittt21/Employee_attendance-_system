import { Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { AttendanceTrackerComponent } from './components/attendance-tracker/attendance-tracker.component';
import { LeaveRequestComponent } from './components/leave-request/leave-request.component';
import { LeaveApprovalComponent } from './components/leave-approval/leave-approval.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'attendance', component: AttendanceTrackerComponent },
  { path: 'leave-request', component: LeaveRequestComponent },
  { path: 'leave-approval', component: LeaveApprovalComponent },
  { path: 'dashboard', component: DashboardComponent },
];