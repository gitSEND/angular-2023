import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  myNum = 51;
  bookContext = { bookName: 'Ramcharitmanas', writer: 'Tulsi Das', $implicit: 'Varanasi' };
  allUsers = [
    { userId: 101, name: 'Mahesh' },
    { userId: 102, name: 'Krishna' },
  ];
}
