import { Component, Input } from "@angular/core";
import { List } from "immutable";
import { Person } from "./person";

@Component({
  selector: 'app-person',
  template: `
    <h3>Person Details</h3>
    <div *ngFor="let p of persons">
       <p>{{p.name}} - {{p.age}}</p>
    </div>
  `
})
export class PersonComponent {
  @Input('allPersons') persons = List<Person>();
}
