import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  /*
   {id: 1, firstName: 'John', lastName: 'Doe', emailId: 'john.doe@example.com'},
    {id: 2, firstName: 'Jane', lastName: 'Smith', emailId: 'jane.smith@example.com'}

  */
    employees: Employee[];

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees = data;
    });
  }

  updateEmployee(id: number){
    console.log("Update employee with id: " + id);
    this.employeeService.updateEmployee(this.employees.find(emp => emp.id === id)!).subscribe(
      response => {
        console.log('Employee updated successfully', response);
        // Optionally, reset the form or navigate to another page
      },
      error => {
        console.log('Error updating employee', error);
      }
    );
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number){
    console.log("Delete employee with id: " + id);
    this.employeeService.deleteEmployee(id).subscribe(
      response => {
        console.log('Employee deleted successfully', response);
        // Optionally, reset the form or navigate to another page
        this.getEmployees(); // Refresh the employee list after deletion
      },
      error => {
        console.log('Error deleting employee', error);
      }
    );  
  }

  showEmployeeDetails(id: number){
     this.router.navigate(['employee-details', id]);
  }
}
