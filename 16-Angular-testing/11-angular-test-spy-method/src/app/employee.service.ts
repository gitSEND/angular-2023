import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  empUrl = "/api/employees";
  constructor(private http: HttpClient) { }

  getEmpById(empId: string): Observable<any> {
    return this.http.get<Employee>(this.empUrl + "/" + empId);
  }
}
