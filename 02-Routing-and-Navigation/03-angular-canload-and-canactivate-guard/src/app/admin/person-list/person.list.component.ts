import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../person';
import { PersonService } from '../services/person.service';

@Component({
  templateUrl: './person.list.component.html'
})
export class PersonListComponent implements OnInit {
  persons$: Observable<Person[]>;

  constructor(private personService: PersonService) {
    this.persons$ = this.personService.getPersons();
  }

  ngOnInit() { }
}
