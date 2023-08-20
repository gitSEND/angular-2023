import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html'
})
export class ReactiveFormComponent {
  countryName = new FormControl();

  myStyle1: Object = {
    'background-color': "#ffffc1"
  }

  myStyle2: Object | null = null;
  myStyle3: Object | null = null;

  onFocusCountry() {
    this.myStyle1 = {
      'background-color': "#d1152c"
    }
    console.log('Country: On focus');
  }

  onBlurCountry() {
    this.myStyle1 = {
      'background-color': "#ffffc1"
    }
    console.log('Country: On blur');
  }

  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      age: ''
    });
  }

  onFocusName() {
    this.myStyle2 = {
      'background-color': "#eebd71"
    }
  }

  onBlurName() {
    this.myStyle2 = null;
  }

  onFocusAge() {
    this.myStyle3 = {
      'background-color': "#eebd71"
    }
  }

  onBlurAge() {
    this.myStyle3 = null;
  }

  onFormSubmit() {
    console.log(this.userForm.value);
    this.userForm.reset();
  }
}
