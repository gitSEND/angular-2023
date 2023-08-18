import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

import { PersonService } from '../../service/person.service';
import { Person } from '../../person';

@Component({
  templateUrl: './person.edit.component.html'
})
export class PersonEditComponent implements OnInit {
  person = {} as Person;

  constructor(
    private personService: PersonService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.pipe(
      switchMap((params: Params) => this.personService.getPerson(+params['id']))
    ).subscribe(person => {
      this.person = person ?? {} as Person;
      this.setFormValues();
    });
  }

  personForm = new FormGroup({
    name: new FormControl(),
    city: new FormControl()
  });
  setFormValues() {
    this.personForm.setValue({ name: this.person.name, city: this.person.city });
  }

  onFormSubmit() {
    this.person.name = this.personForm.get('name')?.value;
    this.person.city = this.personForm.get('city')?.value;

    this.personService.updatePerson(this.person)
      .then(() =>
        this.router.navigate(['../'], { relativeTo: this.route })
      );
  }
}
