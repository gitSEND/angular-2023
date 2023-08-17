import {Component} from '@angular/core';
import {MouseEventDirective} from 'src/app/directives/mouseevent.directive';
import {ThemeDirective} from 'src/app/directives/theme.directive';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  standalone: true,
  hostDirectives: [
    ThemeDirective,
    {
      directive: MouseEventDirective,
      inputs: ['initialColor: mycolor'],
      outputs: ['colorChanged: mychange']
    }
  ]
})
export class MessageComponent {
  constructor() {
    console.log('%c[Constructor] MessageComponent', "color: purple; font-weight: bold;");
  }

  ngOnInit() {
    console.log('%c[NgOnInit] MessageComponent', "color: purple; font-weight: bold;");
  }
}
