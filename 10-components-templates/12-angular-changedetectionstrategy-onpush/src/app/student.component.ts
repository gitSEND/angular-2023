import { Component, forwardRef, Provider } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { Person } from "./person";

const CUSTOM_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => StudentComponent),
  multi: true
}

@Component({
  selector: 'app-student',
  template: `
      <h3>Student Details</h3>
      <div *ngFor="let std of students">
         <p>{{std.name}} - {{std.age}}</p>
      </div>
    `,
  providers: [CUSTOM_VALUE_ACCESSOR]
})
export class StudentComponent implements ControlValueAccessor {
  students: Person[] = [];

  writeValue(obj: any) {
    this.students = obj;
  }
  registerOnChange(fn: any) {
  }
  registerOnTouched(fn: any) {
  }
  setDisabledState(isDisabled: boolean) {
  }
}
