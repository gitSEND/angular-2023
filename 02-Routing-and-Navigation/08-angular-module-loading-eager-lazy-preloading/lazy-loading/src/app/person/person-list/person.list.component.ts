import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonService } from '../services/person.service';
import { Person } from '../person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person.list.component.html'
})
export class PersonListComponent implements OnInit {
  persons$: Observable<Person[]>;

  constructor(private personService: PersonService) {
    this.persons$ = this.personService.getPersons();
  }

  ngOnInit() { }
}
