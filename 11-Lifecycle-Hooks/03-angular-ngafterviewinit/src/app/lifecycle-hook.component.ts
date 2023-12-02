import { Component } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hook',
  template: `
     <h3>Lifecycle Hook Demo</h3>
    `
})
export class LifecycleHookComponent {
  constructor() {
    console.log("---constructor---");
  }
  ngOnInit() {
    console.log("---Inside ngOnInit---");
  }
  ngDoCheck() {
    console.log("---Inside ngDoCheck---");
  }
  ngAfterContentInit() {
    console.log("---Inside ngAfterContentInit---");
  }
  ngAfterContentChecked() {
    console.log("---Inside ngAfterContentChecked---");
  }
  ngAfterViewInit() {
    console.log("---Inside ngAfterViewInit---");
  }
  ngAfterViewChecked() {
    console.log("---Inside ngAfterViewChecked---");
  }
  ngOnDestroy() {
    console.log("---Inside ngOnDestroy---");
  }
}
