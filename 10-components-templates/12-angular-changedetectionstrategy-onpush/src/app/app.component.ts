import { Component, ChangeDetectorRef, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { List } from "immutable";
import { Person } from "./person";
import { PersonService } from "./person.service";

@Component({
  selector: 'app-root',
  template: `
      <app-person [allPersons]="persons"></app-person>
      <app-student [ngModel]="persons"></app-student>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  persons = List<Person>();
  constructor(
    private changeDetection: ChangeDetectorRef,
    private service: PersonService
  ) { }
  ngOnInit() {
    this.service.getPersons().subscribe(data => {
      this.persons = this.persons.push(data);
      this.changeDetection.markForCheck(); //updates the DOM
    });
  }
}
