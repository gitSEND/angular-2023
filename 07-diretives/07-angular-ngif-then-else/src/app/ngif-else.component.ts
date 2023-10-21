import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif-else',
  templateUrl: './ngif-else.component.html'
})
export class NgIfElseComponent {
  isValid: boolean = true;
  age: number = 12;
  changeValue(valid: boolean) {
    this.isValid = valid;
  }
}
