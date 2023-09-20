import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html'
})
export class ReactiveFormComponent {
  username = new FormControl('', [Validators.minLength(5), Validators.maxLength(10)]);
  company = new FormControl('', [Validators.required]);
  primaryEmail = new FormControl('', [Validators.email]);
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  secondaryEmail = new FormControl('', [Validators.pattern(this.emailPattern)]);
  age = new FormControl('', [Validators.min(18), Validators.max(50)]);
}