import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'msg-app',
  templateUrl: './msg.component.html'
})
export class MsgComponent {
  @Input() cdMsg!: string;
  @Output() cdMsgChange = new EventEmitter<string>();

  update(val: string) {
    console.log('update()');

    this.cdMsg = val;
    this.cdMsgChange.emit(this.cdMsg);
  }
}
