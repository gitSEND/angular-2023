import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  $emp = of({} as any);
  errorMessage = '';

  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    const id = '110';
    this.$emp = this.empService.getEmpById(id).pipe(
      catchError((err: any) => {
        setTimeout(() => this.errorMessage = err.message || err.toString());
        return of('');
      })
    );
  }
}
