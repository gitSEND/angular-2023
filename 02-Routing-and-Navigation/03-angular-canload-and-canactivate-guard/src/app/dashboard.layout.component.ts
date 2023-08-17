import { Component } from '@angular/core';
@Component({
  template: `
	  <nav [ngClass] = "'parent-menu'">
	    <ul>
				<li><a routerLink="/address" routerLinkActive="active">Address</a></li>
				<li><a routerLink="/admin" routerLinkActive="active">Admin</a></li>
	    </ul>
		 </nav>
		 <logout></logout>
	  <div [ngClass] = "'parent-container'">
	     <router-outlet></router-outlet>
	  </div>
  `
})
export class DashboardLayoutComponent { }
