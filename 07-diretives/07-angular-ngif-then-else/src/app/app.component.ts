import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
        <app-ngif></app-ngif>
        <app-ngif-else></app-ngif-else>
				<app-ngif-then-else></app-ngif-then-else>
				<app-ngif-async></app-ngif-async>
  `
})
export class AppComponent {

}
