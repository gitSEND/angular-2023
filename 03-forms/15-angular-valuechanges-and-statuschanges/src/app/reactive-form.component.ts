import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormArray, FormControl } from '@angular/forms';
import { Observable, debounceTime } from 'rxjs';
import { User } from './user';
import { pwdMatchUsernameValidator } from './custom-validators/pwd-match-username-validator';
import { confirmPasswordValidator } from './custom-validators/confirm-password-validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html'
})
export class ReactiveFormComponent implements OnInit {
  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      notificationMode: ['', [Validators.required]],
      email: '',
      mobileNumber: '',
      favoriteLocations: this.formBuilder.array([
        this.formBuilder.control('', [Validators.required]),
        this.formBuilder.control('', [Validators.required])
      ])
    });
  }

  ngOnInit() {
    this.handleFormChanges();
  }

  handleFormChanges() {
    this.userForm.valueChanges.subscribe((user: User) => {
      console.log('----Form Data---');
      console.log('username: ' + user.username);
      console.log('password: ' + user.password);
      console.log('notificationMode: ' + user.notificationMode);
      console.log('email: ' + user.email);
      console.log('mobileNumber: ' + user.mobileNumber);
      console.log('favoriteLocations: ' + user.favoriteLocations);
      console.log('----End Form Data---');
    });

    this.userForm.statusChanges.subscribe(status => {
      console.log('Form validation status: ' + status);
    });

    this.username.statusChanges.subscribe(
      status => {
        console.log('Username validation status: ' + status);
      }
    );

    this.username.valueChanges.subscribe(
      uname => {
        this.password.setValidators([Validators.required, pwdMatchUsernameValidator(uname)]);
        this.password.updateValueAndValidity();
      }
    );

    this.password.valueChanges.subscribe(
      pwd => {
        const uname = this.username.value;
        this.password.setValidators([Validators.required, pwdMatchUsernameValidator(uname)]);
        this.confirmPassword.setValidators([Validators.required, confirmPasswordValidator(pwd)]);

        this.confirmPassword.updateValueAndValidity();
      }
    );

    this.confirmPassword.valueChanges.subscribe(
      () => {
        const pwd = this.password.value;
        this.confirmPassword.setValidators([Validators.required, confirmPasswordValidator(pwd)]);
      }
    );

    this.notificationMode.valueChanges.subscribe(
      mode => {
        console.log('NotificationMode Mode:' + mode);
        if (mode === 'email') {
          this.email.setValidators([Validators.required, Validators.email]);
          this.mobileNumber.clearValidators();
        } else if (mode === 'mobile') {
          this.mobileNumber.setValidators([Validators.required]);
          this.email.clearValidators();
        } else if (mode === 'both') {
          this.email.setValidators([Validators.required, Validators.email]);
          this.mobileNumber!.setValidators([Validators.required]);
        }
        this.email.updateValueAndValidity();
        this.mobileNumber!.updateValueAndValidity();
      }
    );

    this.favoriteLocations.valueChanges.subscribe(
      data => {
        console.log('favoriteLocations: ' + data);
      }
    );
    this.favoriteLocations.statusChanges.subscribe(
      status => {
        console.log('favoriteLocations validation status: ' + status);
      }
    );
  }

  onFormSubmit() {
    console.log(this.userForm.value);
    this.userForm.reset();
  }
  get username(): FormControl {
    return this.userForm.get('username') as FormControl;
  }

  get password(): FormControl {
    return this.userForm.get('password') as FormControl;
  }

  get confirmPassword(): FormControl {
    return this.userForm.get('confirmPassword') as FormControl;
  }

  get email(): FormControl {
    return this.userForm.get('email') as FormControl;
  }

  get mobileNumber(): FormControl {
    return this.userForm.get('mobileNumber') as FormControl;
  }

  get notificationMode(): FormControl {
    return this.userForm.get('notificationMode') as FormControl;
  }

  get favoriteLocations(): FormArray {
    return this.userForm.get('favoriteLocations') as FormArray;
  }
}
