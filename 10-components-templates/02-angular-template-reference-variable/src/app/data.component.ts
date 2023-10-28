import { Component } from '@angular/core';
@Component({
  selector: 'data-app',
  templateUrl: './data.component.html'
})
export class DataComponent {
  colors = ['RED', 'CYAN', 'BLUE'];

  getData(mob: string, stat: string, cnt: string) {
    console.log({ mob });
    console.log({ stat });
    console.log({ cnt });
  }

  setData(val: string) {
    console.log(val);
  }
}
