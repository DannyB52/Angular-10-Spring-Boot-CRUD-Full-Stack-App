import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee;
  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // Implement form submission logic here
    console.log(this.employee);
    this.saveEmployee();
    this.router.navigate(['/employees']);
  }

  saveEmployee(): void {
    this.employeeService.createEmployee(this.employee).subscribe(
      response => {
        console.log('Employee created successfully', response);
        // Optionally, reset the form or navigate to another page
        
      },
      error => {
        console.log('Error creating employee', error);
      }
    );
  }
}
