import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
    <div [ngClass]="'my-theme'">
      <a routerLink="/person" routerLinkActive="active">Home</a>
  	   <router-outlet></router-outlet>
	  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
