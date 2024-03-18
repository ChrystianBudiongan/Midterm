// employee-edit.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  employee: Employee;

  constructor(private route: ActivatedRoute, private router: Router, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.employee = this.employeeService.getEmployeeById(id);
  }

  saveEmployeeChanges() {
    this.employeeService.updateEmployee(this.employee);
    this.router.navigate(['/employees']);
  }
}
