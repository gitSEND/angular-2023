import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Person } from '../person';

const PERSONS = [
  new Person(1, 'Mahesh', 'Varanasi'),
  new Person(2, 'Ram', 'Ayodhya'),
  new Person(3, 'Krishn', 'Mathura')
];
let personsObservable = of(PERSONS);

@Injectable()
export class PersonService {
  getPersons(): Observable<Person[]> {
    return personsObservable;
  }

  getPerson(id: number) {
    return this.getPersons().pipe(
      map(persons => persons.find(person => person.personId === id))
    );
  }

  updatePerson(person: Person) {
    return this.getPersons().pipe(
      map(persons => {
        let personObj = persons.find(ob => ob.personId === person.personId);
        personObj = person;
        return personObj;
      }));
  }
}
