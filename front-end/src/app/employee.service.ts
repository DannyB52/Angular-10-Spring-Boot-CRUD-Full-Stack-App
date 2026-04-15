import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8080/api/v1/employees';
  constructor(private httpClient: HttpClient) { }
  
  getEmployeeList():Observable<Employee[]>{ 
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`);
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(`${this.baseUrl}`, employee);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(`${this.baseUrl}/${employee.id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object> {
    return this.httpClient.delete<Object>(`${this.baseUrl}/${id}`);
  } 
  
  getEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`);
  }
}
