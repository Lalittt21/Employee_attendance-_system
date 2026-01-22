export interface LeaveRequest {
    id?: number;
    employeeId: number;
    employeeName?: string;
    leaveType: string;
    startDate: string;
    endDate: string;
    reason: string;
    status?: 'Pending' | 'Approved' | 'Rejected';
}

export class LeaveRequestModel implements LeaveRequest {
    id?: number;
    employeeId: number;
    employeeName?: string;
    leaveType: string;
    startDate: string;
    endDate: string;
    reason: string;
    status?: 'Pending' | 'Approved' | 'Rejected';

    constructor(data: LeaveRequest) {
        this.id = data.id;
        this.employeeId = data.employeeId;
        this.employeeName = data.employeeName;
        this.leaveType = data.leaveType;
        this.startDate = data.startDate;
        this.endDate = data.endDate;
        this.reason = data.reason;
        this.status = data.status || 'Pending';
    }
}