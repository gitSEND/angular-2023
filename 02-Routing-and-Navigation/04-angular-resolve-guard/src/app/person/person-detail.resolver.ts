import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { Person } from './person';
import { PersonService } from './services/person.service';

@Injectable()
export class PersonDetailResolver implements Resolve<Person | null> {
  constructor(private personService: PersonService, private router: Router) { }

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Person | null> {
    let id = route.paramMap.get('person-id') ?? '';
    console.log('Resolving for person id:' + id);

    const person = await this.personService.getPerson(id);
    if (person) {
      return person;
    } else {
      this.router.navigate(['/person/personList']);
      return null;
    }
  }
}
