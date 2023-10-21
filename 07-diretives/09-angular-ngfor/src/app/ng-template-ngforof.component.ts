import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonService } from './person.service';
import { Person } from './person';

@Component({
  selector: 'ng-template-ngforof',
  templateUrl: './ng-template-ngforof.component.html'
})
export class NgTemplateNgForOfComponent implements OnInit {
  name!: string;
  age!: number;
  allPersons?: Person[];
  obsPersons?: Observable<Person[]>;

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.personService.getAllPersons()
      .subscribe(persons => this.allPersons = persons);

    this.obsPersons = this.personService.getAllPersons();
  }

  add() {
    this.personService.add(this.name, this.age);
    this.name = '';
    this.age = +'';
  }

  remove(personId: number) {
    this.personService.remove(personId);
  }

  personTrackByFn(index: number, person: Person) {
    return person.personId;
  }
}
