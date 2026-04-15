import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id: number = 0;
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(
      data => {
        this.employee = data;
      },
      error => {
        console.log('Error fetching employee data', error);
      }
    );
  }

  onSubmit(): void {
    // Implement form submission logic here
    console.log(this.employee);
        this.employeeService.updateEmployee(this.employee).subscribe(
      response => {
        console.log('Employee updated successfully', response);
        // Optionally, reset the form or navigate to another page
      },
      error => {
        console.log('Error updating employee', error);
      }
    );
    this.router.navigate(['/employees']);
  }
  
  updateEmployee(): void {

  }

}
