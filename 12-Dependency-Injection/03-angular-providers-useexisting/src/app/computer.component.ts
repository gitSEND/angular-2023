import { Component, OnInit } from '@angular/core';
import { DesktopService } from './services/desktop.service';
import { LaptopService } from './services/laptop.service';

@Component({
  selector: 'computer',
  providers: [
    LaptopService,
    { provide: DesktopService, useExisting: LaptopService }
  ],
  template: `
	     <h3> I work on {{computerName}} </h3>
	`
})
export class ComputerComponent implements OnInit {
  computerName = '';

  constructor(private computerService: DesktopService) { }

  ngOnInit() {
    this.computerName = this.computerService.getComputerName();
  }
}

