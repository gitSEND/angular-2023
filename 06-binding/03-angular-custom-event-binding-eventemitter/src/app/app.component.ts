import { Component } from '@angular/core';
import { Student } from './student';
import { Employee } from './employee';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Update Person';
  fullName = '';
  studentObj = new Student(100, 'Mahesh', 'Sharma');

  saveData(emp: Employee) {
    this.fullName = emp.fname + ' ' + emp.lname;
  }
}
