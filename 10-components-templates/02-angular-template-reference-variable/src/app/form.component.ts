import { Component } from '@angular/core';
import { Person } from './person';
@Component({
  selector: 'form-app',
  templateUrl: './form.component.html'
})
export class FormComponent {
  person = {} as Person;

  onSubmitPersonForm(fm: any) {
    console.log('Form Validated:' + fm.form.valid);
    console.log(this.person.pname);
    console.log('Form is being submitted');
  }
}
