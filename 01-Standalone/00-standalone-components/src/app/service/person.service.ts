import {Injectable} from '@angular/core';
import {map, Observable, of} from "rxjs";
import {Person} from "./person.interface";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  getAllPersons(): Observable<Person[]> {
    return of
    (
      [
        {id: 101, name: 'Mohit', age: 25, city: 'Varanasi'},
        {id: 102, name: 'Krishn', age: 30, city: 'Delhi'},
        {id: 103, name: 'Shiv', age: 35, city: 'Patna'}
      ]
    );
  }

  getPersonById(pid: number) {
    return this.getAllPersons().pipe(
      map(allPersons => allPersons.find(p => p.id === pid))
    );
  }
}
