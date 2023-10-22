import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from './student';
@Component({
  selector: 'child-two',
  template: `
        <h3>{{childTitle}}</h3>
				<p> {{studentMsg}} : {{myStdLeader.fname +' '+ myStdLeader.lname}}  </p>

				<b>{{addNumMsg}}</b><br/>
				<div>
					First Number :<input (input)="num1=getVal($event.target)" /> <br/>
					Second Number:<input (input)="num2=getVal($event.target)" /> <br/>
					<br/> <button (click)="addNumber()">Add Number</button>
				</div>
			  `
})
export class ChildTwoComponent {
  @Input()
  studentMsg: string = '';

  @Input('stdLeader')
  myStdLeader = {} as Student;

  @Output('addNumberEvent')
  addNumEvent = new EventEmitter<number>();

  childTitle = '---Child Two---';
  addNumMsg = 'Add Number'
  num1 = '';
  num2 = '';

  addNumber() {
    this.addNumEvent.emit(parseInt(this.num1) + parseInt(this.num2));
  }
  getVal(ob: EventTarget | null) {
    return (<HTMLInputElement>ob).value;
  }
}
