import { Injectable } from '@angular/core';
import { Person } from '../person';

const PERSONS: Person[] = [
  { "personId": "1", "name": "Mahesh", "city": "Varanasi" },
  { "personId": "2", "name": "Ram", "city": "Ayodhya" }
];
let personsPromise = Promise.resolve(PERSONS);
let personsToDisplayPromise =
  Promise.resolve(PERSONS.concat({ "personId": "3", "name": "Krishn", "city": "Mathura" }));

@Injectable()
export class PersonService {
  getPersons(): Promise<Person[]> {
    return personsToDisplayPromise;
  }

  async getPerson(id: string): Promise<Person | undefined> {
    const persons = await personsPromise;

    return persons.find(person => person.personId === id);
  }
}
