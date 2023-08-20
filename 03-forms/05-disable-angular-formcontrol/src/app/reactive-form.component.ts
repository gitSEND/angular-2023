import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html'
})
export class ReactiveFormComponent implements OnInit {
  company = new FormControl({ value: "", disabled: true });
  state = new FormControl();
  cityName = new FormControl();
  countryName = new FormControl();

  cityNameDisable() {
    this.cityName.disable();
  }

  cityNameEnable() {
    this.cityName.enable();
  }

  cnAction = "enable";
  userForm: FormGroup;
  ageAction = "enable";
  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      name: [{ value: "Mahesh", disabled: true }, [Validators.required]],
      age: ''
    });
  }

  ngOnInit() { }

  onFormSubmit() {
    console.log(this.userForm.value);
    this.userForm.reset();
  }
}
