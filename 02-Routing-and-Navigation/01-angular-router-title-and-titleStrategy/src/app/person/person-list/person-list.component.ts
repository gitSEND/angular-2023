import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../person';
import { PersonService } from '../service/person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent {
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
