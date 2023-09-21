import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from './user-service';
import { User } from './user';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive-form.component.html'
})
export class ReactiveFormComponent implements OnInit {
  unamePattern = "^[a-z0-9_-]{8,15}$";
  pwdPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  isValidFormSubmitted!: boolean | null;

  userForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.pattern(this.unamePattern)]],
    password: ['', [Validators.required, Validators.pattern(this.pwdPattern)]],
    mobileNumber: ['', Validators.pattern(this.mobnumPattern)],
    email: ['', Validators.pattern(this.emailPattern)],
  });

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() { }

  onFormSubmit() {
    this.isValidFormSubmitted = false;
    if (this.userForm.invalid) {
      return;
    }
    this.isValidFormSubmitted = true;
    let user: User = this.userForm.value as User;
    this.userService.createUser(user);
    this.userForm.reset();
  }

  get username() {
    return this.userForm.get('username') as FormControl;
  }

  get password() {
    return this.userForm.get('password') as FormControl;
  }

  get mobileNumber() {
    return this.userForm.get('mobileNumber') as FormControl;
  }

  get email() {
    return this.userForm.get('email') as FormControl;
  }
}
