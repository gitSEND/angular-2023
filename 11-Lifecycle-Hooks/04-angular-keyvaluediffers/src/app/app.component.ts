import { Component, OnInit } from '@angular/core';

import { Employee } from './employee';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="add()">Add</button> <br/>
    <button (click)="delete()">Delete</button> <br/>
    <button (click)="update()">Update</button>
    <app-emp [empArray]="empArray"></app-emp>
  `
})
export class AppComponent implements OnInit {
  empArray: Employee[] = [];
  index = 102;
  nameCount = 1;

  ngOnInit() {
    this.empArray.push(new Employee(100, "Mahesh"));
    this.empArray.push(new Employee(101, "Krishna"));
  }

  add() {
    this.empArray.push(new Employee(this.index++, "ABCD"));
    console.log('Employee added: ' + JSON.stringify(this.empArray));
  }

  delete() {
    if (this.empArray && this.empArray.length > 2) {
      this.empArray.pop();
      console.log('Employee deleted: ' + JSON.stringify(this.empArray));
    } else {
      console.log('No further delete.');
    }
  }

  update() {
    this.empArray[this.empArray.length - 1].name = "Shiva" + this.nameCount++;
  }
}
