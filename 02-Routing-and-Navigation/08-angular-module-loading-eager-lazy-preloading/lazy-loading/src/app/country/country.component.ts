import { Component } from '@angular/core';
@Component({
  template: `
    <h2>Welcome to Country Home</h2>
    <a [routerLink]="['country-list']" routerLinkActive="active">View Country List</a>
    <router-outlet></router-outlet>
  `
})
export class CountryComponent {
}
