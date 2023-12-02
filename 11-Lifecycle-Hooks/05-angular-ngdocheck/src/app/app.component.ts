import { Component, OnInit } from '@angular/core';

import { Employee } from './employee';

@Component({
  selector: 'app-root',
  template: `
  <h2>ngDoCheck() Demo</h2>
    <table border="1" cellpadding="8" cellspacing="0">
    <tr *ngFor="let emp of empArray; let i = index">
       <td>{{emp.id}}</td><td>{{emp.name}}</td><td><button (click)="remove(i)">Remove</button></td>
       <td><button (click)="update(i)">Update</button></td>
    </tr>
    </table>
    <button (click)="add()">Add</button>
    <h3>Change Logs</h3>
    <table border="1" cellpadding="8" cellspacing="0">
       <tr>
         <td><b>Using KeyValueDiffers</b></td>
         <td><b>Using IterableDiffers</b></td>
       </tr>
       <tr>
         <td><app-emp-kv [empArray]="empArray"></app-emp-kv></td>
         <td><app-emp-itr [empArray]="empArray"></app-emp-itr></td>
       </tr>
    </table>
  `
})
export class AppComponent implements OnInit {
  empArray = [];
  index = 103;
  ngOnInit() {
    this.empArray.push(new Employee(100, "Mahesh"));
    this.empArray.push(new Employee(101, "Krishna"));
    this.empArray.push(new Employee(102, "Shiva"));
  }
  add() {
    this.empArray.push(new Employee(this.index, "Name" + this.index++));
    console.log('Employee added: ' + JSON.stringify(this.empArray));
  }
  remove(index) {
    console.log(index);
    this.empArray.splice(index, 1);
  }
  update(index) {
    this.empArray[index].name += "-U";
  }
}
