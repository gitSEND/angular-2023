import { Component } from '@angular/core';
import { Person } from './person';
import { Company } from './company';
@Component({
  selector: 'safe-nav-operator-app',
  templateUrl: 'safe.navigation.operator.component.html'
})
export class SafeNavigationOperatorComponent {
  personone!: Person;
  persontwo = new Person('Ramesh', new Date(1990, 3, 10));

  companyone: Company | undefined = undefined;
  companytwo = new Company('ABC', this.personone);
  companythree = new Company('XYZ', this.persontwo);
}
