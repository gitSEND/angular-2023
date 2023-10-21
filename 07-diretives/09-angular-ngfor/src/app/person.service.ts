import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Person } from './person';

@Injectable()
export class PersonService {
  PERSONS = [
    new Person(101, 'Mahesh', 25),
    new Person(102, 'Ram', 20),
    new Person(103, 'Krishna', 30),
    new Person(104, 'Bharat', 25)
  ];

  getAllPersons(): Observable<Person[]> {
    return of(this.PERSONS);
  }

  add(name: string, age: number) {
    const maxIndex = this.PERSONS.length - 1;
    const objWithMaxIndex = this.PERSONS[maxIndex];
    const newId = objWithMaxIndex.personId + 1;
    this.PERSONS.push(new Person(newId, name, age));
  }

  remove(personId: number) {
    const obj = this.PERSONS.find(ob => ob.personId === personId);
    if (obj) {
      this.PERSONS.splice(this.PERSONS.indexOf(obj), 1);
    }
  }
}
