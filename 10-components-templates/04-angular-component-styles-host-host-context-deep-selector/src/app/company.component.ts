import { Component } from '@angular/core';

@Component({
  selector: 'app-company',
  template: `
    <h3>Company</h3>
	  <p>Welcome to Company Home</p>
	  <app-address></app-address>
  `,
  styleUrls: ['./company.component.css']
})
export class CompanyComponent { }
