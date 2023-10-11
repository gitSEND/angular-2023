import { Component, EventEmitter, Input } from '@angular/core';
@Component({
  selector: 'select-app',
  templateUrl: './selectbox.component.html'
})
export class SelectBoxComponent {
  @Input() cdColors!: Array<string>;
  myColor = 'GREEN';
}
