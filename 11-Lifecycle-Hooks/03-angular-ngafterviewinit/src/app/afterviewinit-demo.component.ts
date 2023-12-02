import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-afterviewinit',
  template: `
     <h3>ngAfterViewInit() Demo</h3>
    `
})
export class AfterViewInitDemoComponent implements AfterViewInit {
  ngAfterViewInit() {
    console.log("---ngAfterViewInit() Demo---");
  }
}
