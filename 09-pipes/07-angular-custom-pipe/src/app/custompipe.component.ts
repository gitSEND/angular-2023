import { Component } from '@angular/core';
import { Person } from './person';
import { Company } from './company';
@Component({
  selector: 'app-root',
  template: `
      <h3>1. Using welcome Pipe</h3>
			{{person.name | welcome}} <br/>

      <h3>2. Using strformat Pipe</h3>
			{{message | strformat:'+'}}

			<h3>3. Using division Pipe</h3>
			<div>Dividend: <input [(ngModel)]="dividend"> </div>
			<div>Divisor: <input [(ngModel)]="divisor"> </div>
			<p>
			  Division Result: {{dividend | division: divisor}}
			</p>

			<h3>4. Using repeat Pipe</h3>
			{{person.name | repeat:10}}

			<h3>5. Using myjson Pipe</h3>
			<pre>{{person | myjson}}</pre>
			<pre>{{person | myjson:0:'id,age'}}</pre>
			<pre>{{person | myjson:1:'id,name'}}</pre>

			<h3>6. Using myuppercaseone and myuppercasetwo Pipe</h3>
			{{message | myuppercaseone}} <br/>
			{{message | myuppercasetwo:'+'}} <br/>

      <h3>7. Chaining of Custom Pipes</h3>
			{{person.name | repeat:5 | myuppercaseone}}

			<h3>8. Using Pure and Impure Pipe</h3>
			Company Name: <input [(ngModel)] ="compName"/> {{compName}}
			<br/>Location: <input [(ngModel)] ="compLocation"/> {{compLocation}}
			<br/><br/>
      <button (click)="updateCompany()">Update Existing</button>
      <button (click)="createCompany()">Create New </button>

			<br/><b>a. Using Pure Pipe : companyone</b><br/><br/>
      {{company | companyone}}

			<br/><br/><b>b. Using Impure Pipe : companytwo</b><br/><br/>
      {{company | companytwo}}
  `
})
export class CustomPipeComponent {
  //For welcome, repeat, myjson Pipe
  person: Person = new Person(1, 'Ram', 30);
  //For strformat, myuppercaseone and myuppercasetwo Pipe
  message: string = "My name is Mahesh";
  //For division Pipe
  dividend: number = 23;
  divisor: number = 7;
  //For pure and impure pipe
  compName: string = "ABCD LTD";
  compLocation: string = "Varanasi";
  company = new Company(this.compName, this.compLocation);

  //Impure change because there is no change in object reference: company
  //Impure pipe will run again and Pure pipe will do nothing.
  updateCompany() {
    this.company.cname = this.compName;
    this.company.location = this.compLocation;
  }

  //Pure change because there is change in object reference: company
  //Impure pipe and Pure pipe both will run again.
  createCompany() {
    this.company = new Company(this.compName, this.compLocation);
  }
}
