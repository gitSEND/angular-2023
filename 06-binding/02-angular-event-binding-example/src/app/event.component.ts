import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './event.component.html'
})
export class EventComponent {
  isValid = true;
  msg1 = 'Hello World';
  msg2 = '';
  msg3 = '';

  setMsg(e: Event) {
    console.log("setMesg Method Call");

    const target = e.target as HTMLInputElement;
    this.msg1 = target.value;
  }

  changeText(e: Event) {
    console.log("changeText Method Call");

    const target = e.target as HTMLInputElement;
    this.msg3 = target.value;
    console.log('msg3: ', this.msg3);

  }
}
