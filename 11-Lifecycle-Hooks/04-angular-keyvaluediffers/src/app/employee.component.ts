import { Component, DoCheck, KeyValueDiffers, OnInit, Input } from '@angular/core';

import { Employee } from './employee';

@Component({
  selector: 'app-emp',
  template: `
    <h3>Change Logs</h3>
    <div *ngFor="let log of changeLogs">
      {{log}}
    </div>
  `
})
export class EmployeeComponent implements DoCheck, OnInit {
  @Input() empArray: Employee[] = [];

  empDifferMap = new Map<number, any>();
  empMap = new Map<number, Employee>();
  arrayDiffer: any;
  changeLogs: string[] = [];

  constructor(private kvDiffers: KeyValueDiffers) { }

  ngOnInit() {
    this.arrayDiffer = this.kvDiffers.find(this.empArray).create();

    this.empArray.forEach(emp => {
      this.empDifferMap[emp.id] = this.kvDiffers.find(emp).create();
      console.log("🚀 ~ file: employee.component.ts:29 ~ EmployeeComponent ~ ngOnInit ~ this.empDifferMap[emp.id] :", this.empDifferMap[emp.id])

      this.empMap[emp.id] = emp;
      console.log("🚀 ~ file: employee.component.ts:33 ~ EmployeeComponent ~ ngOnInit ~ this.empMap[emp.id]:", this.empMap[emp.id])
    })
  }

  ngDoCheck() {
    //Detect changes in array when item added or removed
    let empArrayChanges = this.arrayDiffer.diff(this.empArray);
    console.log("🚀 ~ file: employee.component.ts:36 ~ EmployeeComponent ~ ngDoCheck ~ empArrayChanges:", empArrayChanges)

    if (empArrayChanges) {
      console.log('... Array changes ...');
      this.changeLogs.push('... Array changes ...');
      empArrayChanges.forEachAddedItem((record) => {
        let emp = record.currentValue;
        this.empDifferMap.set(emp.id, this.kvDiffers.find(emp).create());
        this.empMap.set(emp.id, emp);
        console.log('Added ' + emp.name);
        this.changeLogs.push('Added ' + emp.name);

      });
      empArrayChanges.forEachRemovedItem((record) => {
        let emp = record.previousValue;
        this.empDifferMap.delete(emp.id);
        this.empMap.delete(emp.id);
        console.log('Removed ' + emp.name);
        this.changeLogs.push('Removed ' + emp.name);
      });
    }

    //Detect changes in object inside array
    for (let [key, empDiffer] of this.empDifferMap) {
      let empChanges = empDiffer.diff(this.empMap.get(key));
      if (empChanges) {
        empChanges.forEachChangedItem(record => {
          console.log('--- Employee with id ' + key + ' updated ---');
          this.changeLogs.push('--- Employee with id ' + key + ' updated ---');
          console.log('Previous value: ' + record.previousValue);
          this.changeLogs.push('Previous value: ' + record.previousValue);
          console.log('Current value: ' + record.currentValue);
          this.changeLogs.push('Current value: ' + record.currentValue);
        });
      }
    }
  }
}
