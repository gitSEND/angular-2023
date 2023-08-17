import { Injectable } from '@angular/core';

import { Person } from '../person';

const PERSONS = [
  new Person(1, 'Mahesh', 'Varanasi'),
  new Person(2, 'Ram', 'Ayodhya'),
  new Person(3, 'Kishna', 'Mathura')
];

let personsPromise = Promise.resolve(PERSONS);

@Injectable()
export class PersonService {
  getPersons(): Promise<Person[]> {
    return personsPromise;
  }

  async getPerson(id: number): Promise<Person | undefined> {
    const persons = await this.getPersons();
    return persons.find(person => person.personId === id);
  }

  async updatePerson(person: Person) {
    const persons = await this.getPersons();
    let personObj = persons.find(ob => ob.personId === person.personId);
    personObj = person;
    return personObj;
  }
}
