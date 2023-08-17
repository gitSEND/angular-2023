import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Person } from '../person';

const PERSONS = [
  new Person(1, 'Mahesh', 'Varanasi'),
  new Person(2, 'Ram', 'Ayodhya'),
  new Person(3, 'Kishna', 'Mathura')
];

const personList$ = of(PERSONS);

@Injectable()
export class PersonService {
  getPersons(): Observable<Person[]> {
    return personList$;
  }
}
