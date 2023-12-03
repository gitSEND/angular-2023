import { Component } from '@angular/core';
import { AnimalService } from './services/animal.service';
import { LionService } from './services/lion.service';

@Component({
    selector: 'lion',
    providers: [ 
	    { provide: AnimalService, useClass: LionService }
	],    
    template: `
	    <animal-details></animal-details>
	`
})
export class LionComponent {
}
 
