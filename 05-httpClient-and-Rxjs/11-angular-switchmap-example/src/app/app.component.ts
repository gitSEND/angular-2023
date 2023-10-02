import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-book></app-book>
    <br/><br/>
    <a [routerLink]="['/my-book', 101]">My Favourite Book</a>
    <router-outlet></router-outlet>
   `
})
export class AppComponent {
}
