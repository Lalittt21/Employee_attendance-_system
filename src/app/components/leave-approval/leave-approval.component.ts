import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LeaveService } from '../../services/leave.service';
import { LeaveRequest } from '../../models/leave.model';

@Component({
  selector: 'app-leave-approval',
  templateUrl: './leave-approval.component.html',
  styleUrls: ['./leave-approval.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class LeaveApprovalComponent implements OnInit {
  pendingLeaveRequests: LeaveRequest[] = [];
  allLeaveRequests: LeaveRequest[] = [];
  filterStatus: string = 'all';

  constructor(private leaveService: LeaveService) {}

  ngOnInit(): void {
    this.fetchAllRequests();
  }

  fetchAllRequests(): void {
    this.leaveService.getLeaveRequests().subscribe((requests: LeaveRequest[]) => {
      this.allLeaveRequests = requests;
      this.filterRequests();
    });
  }

  fetchPendingRequests(): void {
    this.leaveService.getPendingLeaveRequests().subscribe((requests: LeaveRequest[]) => {
      this.pendingLeaveRequests = requests;
    });
  }

  filterRequests(): void {
    if (this.filterStatus === 'all') {
      this.pendingLeaveRequests = this.allLeaveRequests;
    } else {
      this.pendingLeaveRequests = this.allLeaveRequests.filter(
        req => req.status?.toLowerCase() === this.filterStatus.toLowerCase()
      );
    }
  }

  approveLeave(requestId: number | undefined): void {
    if (requestId && confirm('Are you sure you want to approve this leave request?')) {
      this.leaveService.updateLeaveStatus(requestId, 'Approved').subscribe(() => {
        alert('Leave request approved!');
        this.fetchAllRequests();
      });
    }
  }

  rejectLeave(requestId: number | undefined): void {
    if (requestId && confirm('Are you sure you want to reject this leave request?')) {
      this.leaveService.updateLeaveStatus(requestId, 'Rejected').subscribe(() => {
        alert('Leave request rejected!');
        this.fetchAllRequests();
      });
    }
  }

  onFilterChange(): void {
    this.filterRequests();
  }

  getPendingCount(): number {
    return this.allLeaveRequests.filter(r => r.status === 'Pending').length;
  }

  getApprovedCount(): number {
    return this.allLeaveRequests.filter(r => r.status === 'Approved').length;
  }

  getRejectedCount(): number {
    return this.allLeaveRequests.filter(r => r.status === 'Rejected').length;
  }
}