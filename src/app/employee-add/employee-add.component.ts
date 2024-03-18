// employee-add.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  newEmployee: Employee = {
    employeeId: 0,
    employeeNumber: '',
    firstName: '',
    lastName: '',
    birthday: null,
    gender: '',
    pictureUrl: ''
  };

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
  }

  addEmployee(): void {
    this.employeeService.addEmployee(this.newEmployee);
    this.router.navigate(['/employees']);
  }
}
