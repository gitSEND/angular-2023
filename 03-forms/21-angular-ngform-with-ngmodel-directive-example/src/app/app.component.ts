import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  onFormSubmit(userForm: NgForm) {
    console.log(userForm.value);
    console.log('Name:' + userForm.controls['name'].value);
    console.log('Form Valid:' + userForm.valid);
    console.log('Form Submitted:' + userForm.submitted);
  }

  resetUserForm(userForm: NgForm) {
    userForm.resetForm();;
  }
}
