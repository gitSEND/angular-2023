import { Component, Input } from '@angular/core';
@Component({
  selector: 'my-msg',
  templateUrl: './msg.component.html'
})
export class MsgComponent {
  @Input() prefixMsg!: string;
  @Input() siteName!: string;
}
