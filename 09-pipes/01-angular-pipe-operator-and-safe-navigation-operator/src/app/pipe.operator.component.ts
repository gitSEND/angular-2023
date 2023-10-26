import { Component } from '@angular/core';
import { Person } from './person';
import { Company } from './company';
@Component({
  selector: 'pipe-operator-app',
  templateUrl: 'pipe.operator.component.html'
})
export class PipeOperatorComponent {
  message = 'Hello World!';
  person = new Person('Mahesh', new Date(1980, 3, 12));
  company = new Company('PQR', this.person);
}
