import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      --- useClass ---
	  <any-animal></any-animal>
	  <lion></lion>
	  <cow></cow>

	  --- useExisting ---
	  <computer></computer>

	  --- useValue ---
	  <book></book>

	  --- useFactory ---
	  <preferred-book></preferred-book>
  `
})
export class AppComponent {
}

