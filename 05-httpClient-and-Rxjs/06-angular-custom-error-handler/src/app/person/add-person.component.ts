import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PersonService } from './person.service';
import { Person } from './person';

@Component({
  templateUrl: './add-person.component.html'
})
export class AddPersonComponent {
  constructor(private personService: PersonService) { }

  personForm = new FormGroup({
    name: new FormControl(),
    city: new FormControl(),
    mobile: new FormControl()
  });

  onFormSubmit() {
    let person = this.personForm.value as Person;
    this.personService.addPerson(person)
      .subscribe(data => {
        console.log(data);
      });
  }
}
