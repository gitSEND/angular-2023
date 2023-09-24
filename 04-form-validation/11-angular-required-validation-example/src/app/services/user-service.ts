import { Injectable } from '@angular/core';

import { User } from '../domain/user';
import { Profile } from '../domain/profile';

const profiles = [
  new Profile('dev', 'Developer'),
  new Profile('man', 'Manager'),
  new Profile('dir', 'Director')
];

@Injectable()
export class UserService {
  getPofiles(): Profile[] {
    return profiles;
  }

  createUser(user: User) {
    console.log('User Name: ' + user.userName);
    console.log('Gender: ' + user.gender);
    console.log('Profile: ' + user.profile?.prName);
    console.log('T & C accepted?: ' + user.isTCAccepted);
  }
}
