import { Component } from "@angular/core";
import { Student } from "./student";

@Component({
  selector: 'app-root',
  template: `
      <app-student [ngModel]="students"></app-student>
  `
})
export class AppComponent {
  students: Student[] = [
    { name: 'Mohit', age: 25 },
    { name: 'Krishn', age: 30 }
  ];
}
