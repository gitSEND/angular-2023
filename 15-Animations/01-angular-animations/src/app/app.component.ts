import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
	<nav [ngClass] = "'parent-menu'">
	  <ul>
      <li><a routerLink="/book" routerLinkActive="active">Book</a></li>
      <li><a routerLink="/add-book" routerLinkActive="active">Add Book</a></li>
      <li><a routerLink="/book-detail" routerLinkActive="active">Book Details</a></li>
	  </ul>
	</nav>
	<router-outlet></router-outlet>
  `
})
export class AppComponent {
}
