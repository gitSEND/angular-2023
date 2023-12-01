import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  emp = new Employee('Mahesh', 20);
  msg: string = 'Hello World!';

  onFormSubmit(empForm: NgForm) {
    let name = empForm.controls['name'].value;
    let age = empForm.controls['age'].value;
    this.emp = new Employee(name, age);
  }
}
