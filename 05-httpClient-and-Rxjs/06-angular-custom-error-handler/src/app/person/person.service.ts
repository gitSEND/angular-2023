import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  url = "/api/persons";
  constructor(private http: HttpClient) { }

  addPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(this.url, person);
  }
}
