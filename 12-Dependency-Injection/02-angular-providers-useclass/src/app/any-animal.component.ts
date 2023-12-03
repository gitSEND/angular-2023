import { Component } from '@angular/core';
import { AnimalService } from './services/animal.service';

@Component({
  selector: 'any-animal',
  providers: [
    AnimalService
  ],
  template: `
	     <animal-details></animal-details>
	`
})
export class AnyAnimalComponent {
}

