import { Component, OnInit } from '@angular/core';
import { AnimalService } from './services/animal.service';

@Component({
  selector: 'animal-details',
  template: `
	   <h3> {{name}} eats {{food}} </h3>
	`
})
export class AnimalDetailsComponent implements OnInit {
  name!: string;
  food!: string;

  constructor(private animalService: AnimalService) { }

  ngOnInit() {
    this.name = this.animalService.getName();
    this.food = this.animalService.getFood();
  }
}

