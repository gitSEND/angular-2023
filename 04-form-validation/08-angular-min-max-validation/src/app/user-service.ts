import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UserService {
  createUser(user: User) {
    console.log('Number-1: ' + user.num1);
    console.log('Number-2: ' + user.num2);
    console.log('Number-3: ' + user.num3);
  }
}
