import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../services/person.service';

@Component({
  templateUrl: './person.list.component.html'
})
export class PersonListComponent implements OnInit {
  persons: Promise<Person[]>;

  constructor(private personService: PersonService) {
    this.persons = this.personService.getPersons();
  }

  ngOnInit() { }
}
