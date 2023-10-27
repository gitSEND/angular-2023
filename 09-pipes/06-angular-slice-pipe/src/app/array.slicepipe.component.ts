import { Component } from '@angular/core';
@Component({
  selector: 'array-app',
  template: `
      <h3>Array Example</h3>
			{{myArray | slice:3:6}} <br/>
			{{myArray | slice:2:-4}} <br/>
			{{myArray | slice:5}} <br/>
			{{myArray | slice:-5}} <br/>
			<ul>
				<li *ngFor="let num of myArray | slice:2:5">
				 {{num}}
				</li>
			</ul>
        `
})
export class ArraySlicePipeComponent {
  myArray: number[] = [11, 22, 33, 44, 55, 66, 77, 88];
}
