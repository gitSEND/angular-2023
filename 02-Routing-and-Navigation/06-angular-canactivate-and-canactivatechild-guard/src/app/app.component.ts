import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
	<div [ngClass] = "'parent-container'">
	  <router-outlet></router-outlet>
	</div>
  `
})
export class AppComponent {
  title = '06-angular-canactivate-and-canactivatechild-guard';
}
