import { Component } from '@angular/core';

@Component({
  selector: 'app-person',
  template: `
      <button (click)="setName()" class="set-button">Set</button>
      <p>{{personName}}</p>

      <button (click)="sendData()" class="send-button">Send</button>

      <button (click)="editPerson(101)" class="edit-button">Edit</button>
  `
})
export class PersonComponent {
  personName!: string;
  setName() {
    this.personName = 'Mahesh';
  }
  sendData() {
    console.log('---sendData---');
    //Call Service to send data over HTTP
  }
  editPerson(id: number) {
    console.log('---editPerson---', id);
    //Call Service to send data over HTTP
  }
}
