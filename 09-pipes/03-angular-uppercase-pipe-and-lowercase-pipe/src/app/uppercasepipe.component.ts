import { Component } from '@angular/core';
@Component({
  selector: 'uppercasepipe-app',
  template: `
        <b>uppercase pipe demo</b> <br/>

				{{address.village | uppercase}}
				<p [textContent] ="address.district | uppercase" > </p>
				<input (input) = "setData($event.target)">
        {{inputData | uppercase}}
`
})
export class UpperCasePipeComponent {
  inputData!: string;
  address = {
    village: 'Dhananjaypur',
    district: 'Varanasi'
  }
  setData(event: EventTarget | null) {
    this.inputData = (<HTMLInputElement>event).value;
  }
}
