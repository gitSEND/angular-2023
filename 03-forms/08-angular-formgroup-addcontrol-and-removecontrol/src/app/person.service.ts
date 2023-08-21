import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  savePerson(personData: any) {
    console.log(personData);
  }
}
