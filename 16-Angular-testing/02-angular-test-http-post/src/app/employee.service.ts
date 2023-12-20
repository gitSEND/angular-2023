import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { map, catchError, tap } from 'rxjs/operators';
import { Employee } from './employee';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  empUrl = "/api/employees";
  constructor(private http: HttpClient) { }

  addEmployee(emp: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.empUrl, emp, httpOptions)
      .pipe(
        tap(employee => console.log("employee: " + JSON.stringify(employee))),
        catchError(this.handleError(emp))
      );
  }
  private handleError<T>(result = {} as T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(error);
      return of(result);
    };
  }
}
