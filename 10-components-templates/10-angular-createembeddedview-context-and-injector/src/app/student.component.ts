import { Component, Inject } from "@angular/core";
import { Student } from "./student";

@Component({
  selector: 'app-student',
  template: `
      <div *ngFor="let std of students">
         <p>{{std.name}} - {{std.age}}</p>
      </div>
    `
})
export class StudentComponent {
  constructor(@Inject('students') public students: Student[]) { }
}
