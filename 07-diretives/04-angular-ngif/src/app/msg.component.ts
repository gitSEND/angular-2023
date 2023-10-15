import { Component, Input } from '@angular/core';
@Component({
  selector: 'my-msg',
  template: '<p> Hello {{pname}} </p>'
})
export class MsgComponent {
  @Input() pname?: string;
}
