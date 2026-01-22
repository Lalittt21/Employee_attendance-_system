import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Employee } from '../models/employee.model';
import { MockDataService } from './mock-data.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeeSubject = new BehaviorSubject<Employee[]>([]);
  public employee$ = this.employeeSubject.asObservable();

  constructor(private mockDataService: MockDataService) {
    this.loadEmployees();
  }

  private loadEmployees(): void {
    const employees = this.mockDataService.getEmployees();
    this.employeeSubject.next(employees);
  }

  getEmployees(): Observable<Employee[]> {
    return this.employee$;
  }

  getEmployeeById(id: number): Observable<Employee | undefined> {
    return new Observable(observer => {
      const employees = this.employeeSubject.value;
      const employee = employees.find(e => e.id === id);
      observer.next(employee);
      observer.complete();
    });
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return new Observable(observer => {
      const employees = this.employeeSubject.value;
      const newEmployee: Employee = {
        ...employee,
        id: employees.length > 0 ? Math.max(...employees.map(e => e.id)) + 1 : 1
      };
      employees.push(newEmployee);
      this.employeeSubject.next([...employees]);
      observer.next(newEmployee);
      observer.complete();
    });
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return new Observable(observer => {
      const employees = this.employeeSubject.value;
      const index = employees.findIndex(e => e.id === employee.id);
      if (index !== -1) {
        employees[index] = employee;
        this.employeeSubject.next([...employees]);
      }
      observer.next(employee);
      observer.complete();
    });
  }

  deleteEmployee(id: number): Observable<boolean> {
    return new Observable(observer => {
      const employees = this.employeeSubject.value;
      const index = employees.findIndex(e => e.id === id);
      if (index !== -1) {
        employees.splice(index, 1);
        this.employeeSubject.next([...employees]);
      }
      observer.next(true);
      observer.complete();
    });
  }
}