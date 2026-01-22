export interface Employee {
    id: number;
    name: string;
    position: string;
    department: string;
    email: string;
    phone: string;
    dateOfJoining: string;
}

export class EmployeeModel implements Employee {
    id: number;
    name: string;
    position: string;
    department: string;
    email: string;
    phone: string;
    dateOfJoining: string;

    constructor(data: Employee) {
        this.id = data.id;
        this.name = data.name;
        this.position = data.position;
        this.department = data.department;
        this.email = data.email;
        this.phone = data.phone;
        this.dateOfJoining = data.dateOfJoining;
    }
}