import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = [
    'Mahesh',
    'Krishna',
    'Narendra',
    'Jitendra'
  ];

  getCSSClasses(flag: string) {
    let cssClasses;
    if (flag == 'nightMode') {
      cssClasses = {
        'one': true,
        'two': true
      }
    } else {
      cssClasses = {
        'two': true,
        'four': false
      }
    }
    return cssClasses;
  }
}
