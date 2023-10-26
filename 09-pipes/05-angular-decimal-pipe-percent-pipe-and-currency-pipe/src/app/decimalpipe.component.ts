import { Component } from '@angular/core';
@Component({
  selector: 'decimal-app',
  template: `
      <h3>Decimal Pipe</h3>
      <div>
        <p> {{num1 | number}} </p>
        <p> {{num1 | number:'3.2-5'}} </p>
        <p> {{num2 | number:'3.2-5'}} </p>
        <p> {{num1 * num2 | number:'1.3-6'}} </p>
      </div>
          `
})
export class DecimalPipeComponent {
  num1: number = 12.638467846;
  num2: number = 0.5;
}
