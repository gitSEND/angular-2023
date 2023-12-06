import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  company = 'a';
  role = 'dir';
  minutes: number = 0;
  inc(i: number) {
    this.minutes = this.minutes + i;
  }
}