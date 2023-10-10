import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from './student';
import { Employee } from './employee';
@Component({
  selector: 'person-app',
  templateUrl: './person.component.html'
})
export class PersonComponent {
  @Input() student!: Student;
  @Output() updateEmployee = new EventEmitter<Employee>();
  employee = new Employee();

  update() {
    this.employee.fname = this.student.fname;
    this.employee.lname = this.student.lname;

    this.updateEmployee.emit(this.employee);
  }
}
