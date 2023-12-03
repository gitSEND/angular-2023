import { Component, OnInit } from '@angular/core';
import { DesktopService } from './services/desktop.service';

@Component({
  selector: 'computer',
  template: `
	     <h3> I work on {{computerName}} </h3>
	`
})
export class ComputerComponent implements OnInit {
  computerName!: string;
  constructor(private computerService: DesktopService) { }
  ngOnInit() {
    this.computerName = this.computerService.getComputerName();
  }
}

