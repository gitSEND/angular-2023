import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ng-template-ngif.component.html'
})
export class NgTemplateNgIfComponent {
  toggleFlag1 = true;
  toggleFlag2 = true;
  toggleFlag3 = true;

  onToggle1() {
    this.toggleFlag1 = (this.toggleFlag1 === true) ? false : true;
  }
  onToggle2() {
    this.toggleFlag2 = (this.toggleFlag2 === true) ? false : true;
  }
  onToggle3() {
    this.toggleFlag3 = (this.toggleFlag3 === true) ? false : true;
  }

}
