import { Component } from '@angular/core';

@Component({
  template: `<h2>Welcome to Country Home</h2>
  	<div ngClass = "child-container">	
	    <router-outlet></router-outlet>	
  	</div>
  `
})
export class CountryComponent { 
}
    