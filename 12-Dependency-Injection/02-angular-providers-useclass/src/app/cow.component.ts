import { Component } from '@angular/core';
import { AnimalService } from './services/animal.service';
import { CowService } from './services/cow.service';

@Component({
  selector: 'cow',
  providers: [
    { provide: AnimalService, useClass: CowService }
  ],
  template: `
	     <animal-details></animal-details>
	`
})
export class CowComponent {
}

