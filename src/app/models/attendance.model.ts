export interface AttendanceRecord {
    id?: number;
    employeeId: number;
    employeeName?: string;
    date: string; // Format: YYYY-MM-DD
    status: 'Present' | 'Absent';
}

export class AttendanceRecordModel implements AttendanceRecord {
    id?: number;
    employeeId: number;
    employeeName?: string;
    date: string;
    status: 'Present' | 'Absent';

    constructor(data: AttendanceRecord) {
        this.id = data.id;
        this.employeeId = data.employeeId;
        this.employeeName = data.employeeName;
        this.date = data.date;
        this.status = data.status;
    }
}