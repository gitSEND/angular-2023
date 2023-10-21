import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonService } from './person.service';
import { Person } from './person';

@Component({
  selector: 'ngforof-demo',
  templateUrl: './ngforof-demo.component.html'
})
export class NgForOfDemoComponent implements OnInit {
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
    console.log('personTrackByFn: ', person);

    return person.personId;
  }
}
