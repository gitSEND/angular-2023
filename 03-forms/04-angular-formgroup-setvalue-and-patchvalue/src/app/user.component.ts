import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  isValidFormSubmitted: boolean | null = null;
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.maxLength(15)]],
      age: '',
      gender: ['', Validators.required],
      isMarried: false,
      tc: ['', Validators.requiredTrue]
    });
  }
  ngOnInit() { }

  get userName() {
    return this.userForm.get('userName');
  }

  get gender() {
    return this.userForm.get('gender');
  }

  get tc() {
    return this.userForm.get('tc');
  }

  onFormSubmit() {
    this.isValidFormSubmitted = false;
    if (this.userForm.invalid) return;

    this.isValidFormSubmitted = true;
    console.log(this.userForm.value);
    this.resetForm(this.userForm);
  }

  resetForm(form: FormGroup) {
    form.reset();
  }

  setUserValues() {
    this.userForm.setValue({
      userName: 'Mahesh',
      age: 20,
      gender: 'male',
      isMarried: true,
      tc: true
    });
  }

  patchUserValues() {
    this.userForm.patchValue({
      userName: 'Mahesh',
      gender: 'male',
      tc: true
    });
  }
}
