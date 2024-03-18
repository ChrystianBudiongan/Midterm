import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: Employee[] = []; // Initialize as empty

  constructor() { }

  getEmployees(): Employee[] {
    return this.employees;
  }

  getEmployeeById(id: number): Employee {
    return this.employees.find(emp => emp.EmployeeId === id);
  }

  addEmployee(employee: Employee) {
    // Generate unique EmployeeId
    employee.EmployeeId = this.generateUniqueId();
    this.employees.push(employee);
  }

  updateEmployee(employee: Employee) {
    const index = this.employees.findIndex(emp => emp.EmployeeId === employee.EmployeeId);
    if (index !== -1) {
      this.employees[index] = employee;
    }
  }

  deleteEmployee(id: number) {
    this.employees = this.employees.filter(emp => emp.EmployeeId !== id);
  }

  private generateUniqueId(): number {
    // Generate a unique numeric ID based on timestamp
    return new Date().getTime();
  }
}
