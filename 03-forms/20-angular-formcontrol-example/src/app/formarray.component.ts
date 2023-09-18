import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: 'formarray.component.html'
})
export class FormArrayDemoComponent {
  userForm = new FormGroup({
    users: new FormArray([
      new FormControl('Mahesh'),
      new FormControl('Krishna'),
      new FormControl()
    ])
  });

  get users(): FormArray {
    return this.userForm.get('users') as FormArray;
  }

  addUserField() {
    this.users.push(new FormControl());
  }

  deleteUserField(index: number) {
    this.users.removeAt(index);
  }

  onFormSubmit() {
    console.log(this.users.value); // Gives FormArray data
    console.log(this.userForm.value); // Gives Complete form data
    //Iterate FormArray
    for (let i = 0; i < this.users.length; i++) {
      console.log(this.users.at(i).value);
    }
  }
}
