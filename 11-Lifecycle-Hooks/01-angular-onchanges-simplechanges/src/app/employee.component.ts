import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';

import { Employee } from './employee';

@Component({
  selector: 'app-emp',
  templateUrl: './employee.component.html'
})
export class EmployeeComponent implements OnChanges {
  @Input() employee = {} as Employee;
  @Input() message = '';

  allMsgChangeLogs: string[] = [];
  allEmployeeChangeLogs: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let change = changes[propName];
      let curVal = JSON.stringify(change.currentValue);
      let prevVal = JSON.stringify(change.previousValue);
      let changeLog = `${propName}: currentValue = ${curVal}, previousValue = ${prevVal}`;

      if (propName === 'message') {
        this.allMsgChangeLogs.push(changeLog);
      } else if (propName === 'employee') {
        this.allEmployeeChangeLogs.push(changeLog);
      }
    }
  }
}
