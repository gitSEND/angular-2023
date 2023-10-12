import { Component } from '@angular/core';
import { User } from './user';
@Component({
  selector: 'user-app',
  templateUrl: './user.component.html'

})
export class UserComponent {
  users = [
    new User('Mahesh', 20),
    new User('Krishna', 22),
    new User('Narendra', 30)
  ];
}
