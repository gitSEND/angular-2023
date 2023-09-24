import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UserService {
  createUser(user: User) {
    console.log('Primary Email: ' + user.primaryEmail);
    console.log('Secondary Email: ' + user.secondaryEmail);
    console.log('Official Email: ' + user.officialEmail);
  }
}
