import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserService } from './user-service';
import { existingUsernameValidator } from './existing-username-validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html'
})
export class ReactiveFormComponent implements OnInit {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.userForm = this.formBuilder.group({
      fullName: '',
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  ngOnInit() { }

  get fullName() {
    return this.userForm.get('fullName') as FormControl;
  }

  get username() {
    return this.userForm.get('username') as FormControl;
  }

  get password() {
    return this.userForm.get('password') as FormControl;
  }

  addValidators() {
    this.fullName.setValidators([Validators.required]);
    this.fullName.updateValueAndValidity();

    this.username.setValidators([Validators.required, Validators.minLength(5), Validators.maxLength(10)]);
    this.username.updateValueAndValidity();

    this.password.setValidators([Validators.required, Validators.minLength(5), Validators.maxLength(15)]);
    this.password.updateValueAndValidity();
  }

  addAsyncValidators() {
    this.username.setAsyncValidators([existingUsernameValidator(this.userService)]);
    this.username.updateValueAndValidity();
  }

  clearUserValidators() {
    this.fullName.clearValidators();
    this.fullName.updateValueAndValidity();

    this.username.clearValidators();
    this.username.updateValueAndValidity();

    this.password.clearValidators();
    this.password.updateValueAndValidity();
  }

  clearUserAsyncValidators() {
    this.username.clearAsyncValidators();
    this.username.updateValueAndValidity();
  }

  onFormSubmit() {
    this.userService.saveUser(this.userForm.value);
    this.userForm.reset();
  }
}
