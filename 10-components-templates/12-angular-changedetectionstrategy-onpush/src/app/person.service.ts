import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map, concatAll } from 'rxjs/operators';
import { Person } from "./person";

@Injectable()
export class PersonService {
  getPersons(): Observable<Person> {
    return of(
      { name: 'Mohit', age: 25 },
      { name: 'Krishn', age: 30 },
      { name: 'Shiv', age: 35 }
    ).pipe(
      map(data => of(data).pipe(delay(1000))),
      concatAll()
    );
  }
}
