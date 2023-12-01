import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-cunter',
  template: `
    {{counter}}
   `
})
export class CounterComponent implements OnInit, OnDestroy {
  counter = 0;
  intervalId: any;

  ngOnInit() {
    this.startCounter();
    console.log('Interval started.');
  }

  startCounter() {
    this.intervalId = setInterval(() => {
      this.counter += 1;
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    console.log('Interval cleared.');
  }
}
