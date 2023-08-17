import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
	    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = '03-angular-canload-and-canactivate-guard';
}
