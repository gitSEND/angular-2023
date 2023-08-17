import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Person } from '../person';
import { PersonService } from '../services/person.service';

@Component({
  templateUrl: './person.list.component.html'
})
export class PersonListComponent implements OnInit {
  persons: Observable<Person[]>;

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
