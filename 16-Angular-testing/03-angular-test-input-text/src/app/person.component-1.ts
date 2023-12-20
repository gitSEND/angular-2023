import { Component } from '@angular/core';

@Component({
  selector: 'app-person-1',
  templateUrl: 'person.component-1.html'
})
export class PersonComponent1 {
  personName!: string;
  personAge!: number;
}
