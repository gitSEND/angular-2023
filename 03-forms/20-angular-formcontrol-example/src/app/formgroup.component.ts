import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: 'formgroup.component.html',
  styleUrls: ['formgroup.component.css']
})
export class FormGroupDemoComponent {
  usrNameChanges: string = '';
  usrNameStatus: string = '';
  userForm = new FormGroup({
    name: new FormControl('Mahesh', Validators.maxLength(10)),
    age: new FormControl(20, Validators.required),
    city: new FormControl(),
    country: new FormControl()
  });

  get userName(): any {
    return this.userForm.get('name');
  }

  onFormSubmit(): void {
    console.log('Name:' + this.userForm.get('name')?.value);
    console.log('Age:' + this.userForm.get('age')?.value);
    console.log('City:' + this.userForm.get('city')?.value);
    console.log('Country:' + this.userForm.get('country')?.value);
  }

  setDefaultValue() {
    this.userForm.setValue({ name: 'Mahesh', age: 20, city: '', country: '' });
  }
}
