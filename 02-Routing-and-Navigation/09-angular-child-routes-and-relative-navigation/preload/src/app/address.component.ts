import { Component } from '@angular/core';
@Component({
  template: `
      <h3>ADDRESS</h3>
      <p><b> Article: Child routing & Relative navigation </b></p>
	  <p><b> Category: Angular </b></p>
	  <p><b> Website: CONCRETEPAGE.COM </b></p>
	  <div>
         <a [routerLink]="['/location']">Find Location</a>
     </div> 
  `
})
export class AddressComponent { 
}
    