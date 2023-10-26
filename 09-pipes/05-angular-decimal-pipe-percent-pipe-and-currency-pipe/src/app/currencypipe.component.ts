import { Component } from '@angular/core';
@Component({
  selector: 'currency-app',
  template: `
      <h3> Currency Pipe</h3>
			<div>
        <p> {{cur1 | currency:'PEN':false}} </p>
				<p> {{cur2 | currency:'PEN':true:'1.2-4'}} </p>
				<p> {{cur1 | currency: 'S/ '}} </p>
				<p> {{cur2 | currency:'USD':true:'2.2-4'}} </p>
			</div>
  `
})
export class CurrencyPipeComponent {
  cur1: number = 0.25;
  cur2: number = 10.263782;
}
