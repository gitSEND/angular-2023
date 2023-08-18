import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PersonService } from '../service/person.service';
import { Person } from '../person';

@Component({
  templateUrl: './person.list.component.html'
})
export class PersonListComponent implements OnInit {
  persons: Promise<Person[]>;

  constructor(
    private personService: PersonService,
    private route: ActivatedRoute,
    private router: Router) {
    this.persons = this.personService.getPersons();
  }
  ngOnInit() { }

  goToEdit(person: Person) {
    this.router.navigate([person.personId], { relativeTo: this.route });
  }
}