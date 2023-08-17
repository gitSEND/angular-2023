import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Person } from './person';

@Injectable()
export class PersonService {

  constructor() { }

  getAllPersons(): Observable<Person[]> {
    return of(
      [
        { id: 101, name: 'Nilesh', age: 25, city: 'Pune' },
        { id: 102, name: 'Pankaj', age: 30, city: 'Delhi' },
        { id: 103, name: 'Paramdeep', age: 20, city: 'Noida' }
      ]
    );
  }

  getPersonById(pid: number) {
    return this.getAllPersons().pipe(
      map(allPersons => allPersons.find(p => p.id === pid))
    );
  }

}

