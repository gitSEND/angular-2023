import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html'
})
export class ReactiveFormComponent implements OnInit {
  countryName = new FormControl();
  cityName = new FormControl();

  setCountryName() {
    this.countryName.setValue('India');
  }

  setCityName() {
    this.cityName.setValue('Varanasi', {
      emitModelToViewChange: false,
    });
  }
  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      name: '',
      age: ''
    });
  }

  ngOnInit() { }

  onFormSubmit() {
    console.log(this.userForm.value);
    this.userForm.reset();
  }

  setName() {
    this.userForm.get('name')?.setValue('Mahesh');
  }

  setAge() {
    this.userForm.get('age')?.setValue(25);
  }
}
