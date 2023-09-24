import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UserService } from './user-service';
import { User } from './user';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive-form.component.html'
})
export class ReactiveFormComponent implements OnInit {
  isValidFormSubmitted: boolean | null = null;
  userForm = new FormGroup({
    userName: new FormControl('', [Validators.minLength(5), Validators.maxLength(10)]),
    city: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(8)])
  });
  user = new User();

  constructor(private userService: UserService) { }

  ngOnInit() { }

  onFormSubmit() {
    this.isValidFormSubmitted = false;
    if (this.userForm.invalid) {
      return;
    }
    this.isValidFormSubmitted = true;
    this.user = this.userForm.value as User;
    this.userService.createUser(this.user);
    this.userForm.reset();
  }

  get userName() {
    return this.userForm.get('userName') as FormControl;
  }

  get city() {
    return this.userForm.get('city') as FormControl;
  }
}
