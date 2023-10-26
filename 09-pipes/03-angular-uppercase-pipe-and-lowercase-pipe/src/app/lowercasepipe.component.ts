import { Component } from '@angular/core';
@Component({
  selector: 'lowercasepipe-app',
  template: `
        <b>lowercase pipe demo</b> <br/>

				{{address.village | lowercase}}
				<p [textContent] ="address.district | lowercase" > </p>
				<input (input) = "setMsg($event.target)">
        {{message | lowercase}}
`
})
export class LowerCasePipeComponent {
  message!: string;
  address = {
    village: 'Dhananjaypur',
    district: 'Varanasi'
  }
  setMsg(event: EventTarget | null) {
    this.message = (<HTMLInputElement>event).value;;
  }
}
