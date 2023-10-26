import { Component } from '@angular/core';
@Component({
  selector: 'percent-app',
  template: `
      <h3>Percent Pipe</h3>
			<div>
			   <p> {{num1 | percent}} </p>
			   <p> {{num1 | percent:'2.2-5'}} </p>
			   <p> {{num2 | percent:'1.2-5'}} </p>
			   <p> {{num1 * num2 | percent:'1.2-3'}} </p>
			</div>
        `
})
export class PercentPipeComponent {
  num1: number = 2.5;
  num2: number = 0.5;
}
