import { Component, forwardRef, Renderer2, ElementRef, Provider } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { Student } from "./student";

const CUSTOM_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => StudentCVAccessorComponent),
  multi: true
}

@Component({
  selector: 'app-student',
  template: `
      <div *ngFor="let std of students">
         <p>{{std.name}} - {{std.age}}</p>
      </div>
    `,
  providers: [CUSTOM_VALUE_ACCESSOR]
})
export class StudentCVAccessorComponent implements ControlValueAccessor {
  students: Student[] = [];

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
