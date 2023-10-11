import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'case-app',
  templateUrl: './case.component.html'
})
export class CaseComponent {
  @Input() myName!: string;
  @Output() myNameChange = new EventEmitter<string>();

  changeCase(val: string) {
    console.log('changeCase()');

    if (val == 'upper') {
      this.myName = this.myName.toUpperCase();
    } else {
      this.myName = this.myName.toLowerCase();
    }
    this.myNameChange.emit(this.myName);
  }
}
