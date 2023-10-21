import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html'
})
export class NgIfComponent {
  isValid: boolean = true;
  age: number = 12;

  changeValue(valid: boolean) {
    this.isValid = valid;
  }
}
