import { Component, Input } from '@angular/core';
import { User } from './user';
@Component({
  selector: 'emp-app',
  template: `
    <br/> {{emp.name}} - {{emp.age}}
  `
})
export class EmployeeComponent {
  @Input() emp!: User;
}
