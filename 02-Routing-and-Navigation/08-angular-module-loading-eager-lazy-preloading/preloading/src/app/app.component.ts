import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
	<nav [ngClass] = "'parent-menu'">
	  <ul>
		 <li><a routerLink="/country" routerLinkActive="active">Country</a></li>
		 <li><a routerLink="/person" routerLinkActive="active">Person</a></li>
		 <li><a routerLink="/address" routerLinkActive="active">Address</a></li>
	  </ul> 
	</nav>  
	<div [ngClass] = "'parent-container'">	
	  <router-outlet></router-outlet>	
	</div>
  `
})
export class AppComponent { 
}
    