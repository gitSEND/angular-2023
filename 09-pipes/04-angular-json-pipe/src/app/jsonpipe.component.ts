import { Component } from '@angular/core';
import { Person } from './person';
import { Name } from './name';
import { Address } from './address';
@Component({
  selector: 'app-root',
  template: `
        <b>JSON for Address Class</b>

				<pre> {{address1 | json}} </pre>

				<b>JSON for Array of Address</b>

				<pre> <div [innerHTML]="addressArray | json"></div> </pre>

				<b>JSON for Person Name Property</b>

				<pre> {{person.pname | json}} </pre>

				<b>JSON for Person class</b>

				<pre>{{person | json}}</pre>
  `
})
export class JsonPipeComponent {
  address1 = new Address('Dhananjaypur', 'Varanasi', 'India');
  address2 = new Address('Moonsi', 'Bhadohi', 'India');
  addressArray = [this.address1, this.address2];

  nameObj = new Name('Narendra', 'Modi');
  dob = new Date(1950, 9, 17);

  person = new Person(100, this.nameObj, this.dob, this.address1);
}
