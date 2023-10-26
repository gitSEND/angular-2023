import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './date.component.html'

})
export class DateComponent {
  objDate = Date.now();
  numDate = 1478496544151;
  strDate = 'Mon Nov 07 2016 09:44:12 GMT+0530';
}
