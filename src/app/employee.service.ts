import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: Employee[] = [
    // Initialize with sample data
    {
      employeeId: 1,
      employeeNumber: 'EMP001',
      firstName: 'John',
      lastName: 'Doe',
      birthday: new Date(1990, 5, 15),
      gender: 'Male',
      pictureUrl: 'https://example.com/picture.jpg'
    },
    // Add more sample employees as needed
  ];

  constructor() { }

  getAllEmployees(): Employee[] {
    return this.employees;
  }

  getEmployeeById(id: number): Employee {
    return this.employees.find(emp => emp.employeeId === id);
  }

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  updateEmployee(employee: Employee): void {
    const index = this.employees.findIndex(emp => emp.employeeId === employee.employeeId);
    if (index !== -1) {
      this.employees[index] = employee;
    }
  }

  deleteEmployee(id: number): void {
    this.employees = this.employees.filter(emp => emp.employeeId !== id);
  }
}