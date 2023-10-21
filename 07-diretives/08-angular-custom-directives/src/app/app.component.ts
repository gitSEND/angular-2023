import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  txtsize = '25px';
  colors = ['CYAN', 'GREEN', 'RED'];
  myColor = '';
  titleColor = 'green'

  showCpIf = false;
  showCpDelay = false;
  delayInSec = 0;

  changeCondition(flag: boolean) {
    this.showCpIf = flag;
  }
}
