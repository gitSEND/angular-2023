import { Component, DoCheck, KeyValueDiffers, OnInit, Input } from '@angular/core';

import { Employee } from './employee';

@Component({
  selector: 'app-emp-kv',
  template: `
    <div *ngFor="let log of kvChangeLogs">
      {{log}}
    </div>
  `
})
export class EmployeeKVDiffComponent implements DoCheck, OnInit {
  @Input()
  empArray: Employee[];

  empDifferMap = new Map<number, any>();
  empMap = new Map<number, Employee>();
  arrayDiffer: any;
  kvChangeLogs: string[] = [];

  constructor(private kvDiffers: KeyValueDiffers) {
  }
  ngOnInit() {
    this.arrayDiffer = this.kvDiffers.find([]).create();

    this.empArray.forEach(emp => {
      this.empDifferMap[emp.id] = this.kvDiffers.find(emp).create();
      this.empMap[emp.id] = emp;
    })
  }
  ngDoCheck() {
    //Detect changes in array when item added or removed
    const empArrayChanges = this.arrayDiffer.diff(this.empArray);
    if (empArrayChanges) {
      empArrayChanges.forEachAddedItem((record) => {
        let emp = record.currentValue;
        this.empDifferMap.set(emp.id, this.kvDiffers.find(emp).create());
        this.empMap.set(emp.id, emp);
        this.kvChangeLogs.push('Added ' + emp.name);

      });
      empArrayChanges.forEachRemovedItem((record) => {
        let emp = record.previousValue;
        this.empDifferMap.delete(emp.id);
        this.empMap.delete(emp.id);
        this.kvChangeLogs.push('Removed ' + emp.name);
      });
    }

    //Detect changes in object inside array
    for (let [key, empDiffer] of this.empDifferMap) {
      const empChanges = empDiffer.diff(this.empMap.get(key));
      if (empChanges) {
        empChanges.forEachChangedItem(record => {
          this.kvChangeLogs.push('---Update (id=' + key + ')---');
          this.kvChangeLogs.push('Previous value: ' + record.previousValue);
          this.kvChangeLogs.push('Current value: ' + record.currentValue);
          this.kvChangeLogs.push('-------------------------');
        });
      }
    }
  }
}
